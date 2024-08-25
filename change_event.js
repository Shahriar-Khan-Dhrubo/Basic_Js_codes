// let checkBox=document.querySelectorAll("input[name=program]");
// Array.from(checkBox).map((elements)=>
// {
//     elements.addEventListener("change",function(e)
// {
//     if(e.target.checked) console.log(e.target.value);
// });
// });

// let dropDown=document.querySelector("#department");
// dropDown.addEventListener("change",eventHandler);

// function eventHandler(e){
//     console.log(e.target.value);
// };

//submit event
// let formHead=document.querySelector("#form");
// let Name=document.querySelector("#name");
// let email=document.querySelector("#email");
// let password=document.querySelector("#password");

// formHead.addEventListener("submit",formHandler);

// function formHandler(e)
// {
//     e.preventDefault();
//     const userInfo={
//         Name: Name.value,
//         email: email.value,
//         password: password.value,
//     }
//     console.log(userInfo);
//     Name.value="";
//     email.value="";
//     password.value="";
// }

// //media events
// let video=document.querySelector("video");
// video.addEventListener("canplay",function(){
//     console.log("canplay checked");
// });
// video.addEventListener("play",function(){
//     console.log("play checked");
// });
// video.addEventListener("playing",function(){
//     console.log("playing checked");
// });
// video.addEventListener("pause",function(){
//     console.log("pause checked");
// });
// video.addEventListener("volumechange",function(){
//     console.log("volumechange checked");
// });
// video.addEventListener("ended",function(){
//     console.log("ended checked");
// });
// //load,unload,resize,scroll,toggle
// window.addEventListener("load",function()
// {
//     console.log("load");
// });
// window.addEventListener("unload",function()
// {
//     console.log("unload");
// });
// window.addEventListener("scroll",function()
// {
//     console.log("scroll");
// });
// window.addEventListener("resize",function()
// {
//     const height=window.outerHeight;
//     const width=window.outerWidth;
//     console.log(`Height : ${height} , Width : ${width}`);
// });
// let details=document.querySelector("details");
// details.addEventListener("toggle",function(e)
// {
//     console.log(e.target.open);
// });
//click event
// let list=document.querySelectorAll("li");
// Array.from(list).map((e)=>
// {
//     e.addEventListener("click",function()
// {
//     console.log(e.innerText);
// });
// });
//dragable event
let div=document.getElementById("drag");
let p=document.getElementById("drag1");

p.addEventListener("dragstart",function(e)
{
    e.dataTransfer.setData("text",e.target.id);
});
div.addEventListener("dragover",function(e)
{
    e.preventDefault();
});
div.addEventListener("drop",function(e)
{
    let id=e.dataTransfer.getData("text");
    console.log(id);
    div.appendChild(document.getElementById(id));
    e.preventDefault();
});