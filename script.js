var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var counter=0;
var numberEle=document.body.querySelector(".display").innerHTML="Counter: "+0+".";

var pages = [
  {
    name:"Home",
    content:""
  },
  {
    name:"About",
    content:"Joseph Crouse"
  },
  {
    name:"Interact",
    content:"none"
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function counter_plus_one()
{
  counter=counter+1;
  var numberEle=document.body.querySelector(".display").innerHTML="Counter: "+counter+".";
  var button =document.createElement("button");
  button.innerHTML="Counter++";
  display.appendChild(button);
  button.addEventListener("click", function(){
  counter_plus_one()
  })
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  var header = document.createElement("h3");
  display.innerHTML="";
  if(pg!=="Interact"){
    display.innerHTML=wd;
  }else{
    interactPage()
    
  }
  
}

function createButton(){
  var button =document.createElement("button");
  button.innerHTML="Counter++";
  display.appendChild(button);
  button.addEventListener("click", function(){
     counter_plus_one()
  })
}


function interactPage(){

  counter_plus_one()
  
  //button.addEventListener("click", function(){
  //   counter_plus_one()
  //})
}

contentWrite(pages[0].content, "Home");