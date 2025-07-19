// selecting side navbar ,menu icon

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var close=document.getElementById("closenav")
menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})