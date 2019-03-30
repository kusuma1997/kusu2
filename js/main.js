function submitData()
{
 var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var mobile=document.querySelector("#mobile").value;
  var email=document.querySelector("#email").value;
  var address=document.querySelector("#address").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyearofpassing=document.querySelector("#gyearofpassing").value;
var gper=document.querySelector("#gper").value;
var iinstitute=document.querySelector("#iinstitute").value;
var ibranch=document.querySelector("#ibranch").value;
var iyearofpassing=document.querySelector("#iyearofpassing").value;
var iper=document.querySelector("#iper").value;
var sschool=document.querySelector("#sschool").value;
var scourse =document.querySelector("#scourse").value;
var syearofpassing=document.querySelector("#syearofpassing").value;
var sper=document.querySelector("#sper").value;
var skills=document.querySelector("#skills").value;
// indexedDB Implementation
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
store.put({
  career:career,
  name:name,
  mobile:mobile,
  email:email,
  address:address,
  education:[
    {
  institute:ginstitute,
  branch:gbranch,
  yearofpassing:gyearofpassing,
  per:gper
},
{
  institute:iinstitute,
  branch:ibranch,
  yearofpassing:iyearofpassing,
  per:iper
},
{
  institute:sschool,
  branch:scourse,
  yearofpassing:syearofpassing,
  per:sper
}],
skills:skills


});
}
  window.open("index.html");
}
