// Work Section
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(link of tablinks){
        link.classList.remove("active-link");
    }
    for(content of tabcontents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 

// Menu Section

let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

// submit massage
function fun(){
    let message=document.querySelector("#msg");
    message.innerHTML="Your Data Submit Successfully!";
    // alert("Your Data Submit Successfully!")
}

// Change Mode

let mbtn=document.querySelector("#btn1");
let body=document.querySelector("body");
let curmode="light";
mbtn.addEventListener("click",()=>{
    if(curmode==="dark"){
        curmode="light";
        body.classList.add("light")
        mbtn.innerHTML="Light Mode"
        body.style.backgroundColor="white"
        body.classList.remove("dark")
    }
    else{
        curmode="dark"
        body.classList.add("dark")
        body.style.backgroundColor="black"
        mbtn.innerHTML="Dark Mode"
        body.classList.remove("light")
    }
})
