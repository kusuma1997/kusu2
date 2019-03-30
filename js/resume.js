var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
// console.log(paravalue)
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
  // indexedDB creation
var request;
var store;
  var open=idb.open("storeData",1);

  console.log("indexedDb is created");
  open.onupgradeneeded=function(e){
  request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(error){
  console.log("Error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
store=transaction.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function(data){
console.log(data);
personalinfo(data.target.result);
}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");

function personalinfo(pi) {
  var image=document.createElement("img");
  image.src="images/image.png";
  image.alt=pi.name;
  left.append(image);
var hh=document.createElement("h2");
hh.textContent=pi.name;
left.append(hh);
var g=document.createElement("h2");
g.textContent=pi.mobile;
left.append(g);
var k=document.createElement("h2");
k.textContent=pi.email;
left.append(k);
var l=document.createElement("h2");
l.textContent=pi.address;
left.append(l);
var c=document.createElement("h2");
c.textContent=pi.career;
right.append(c);

var head11=document.createElement("h1");
head11=textContent="education details";
right.append(head11);
var table=document.createElement("table");
table.border="1";
var tr1="<tr><th>institute</th><th>branch</th><th>yearofpassing</th><th>per</th></tr>";
var tr2="";
for(var i in pi.education){
  // console.log(pi.education[i].branch);
  tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+
  pi.education[i].branch+"</td><td>"+
  pi.education[i].yearofpassing+"</td><td>"+
  pi.education[i].per+"</td></tr>"

  table.innerHTML=tr1+tr2;
  right.append(table);
}
  var sk=document.createElement("h3");
sk.textContent=pi.skills;
  right.append(sk);


}
