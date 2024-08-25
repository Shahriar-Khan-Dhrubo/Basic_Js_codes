let img = document.querySelector("#myImg");
function img1() {
  //working
  img.src = "Images/dhrubo.jpg";
  img.style.display = "block";
}
function img2() {
  //working
  img.src = "Images/itachi.jpg";
  img.style.display = "block";
}
let par = document.querySelector("#para");
function para1() {
  par.innerHTML = "button 1 is clicked";
}
function para2() {
  par.innerHTML = "button 2 is clicked";
}
let heading3 = document.createElement("h1");
let text3 = document.createTextNode("Heading 3");
let div = document.getElementsByTagName("div")[0];
let heading2 = document.getElementsByTagName("h1")[1];
heading3.appendChild(text3);
div.insertBefore(heading3, heading2);
// div.appendChild(heading3);

let imgSlider = document.querySelector("#imgSlider");
imgSlider.src = "Images/dhrubo.jpg"; //not working
const photos = ["Images/dhrubo.jpg", "Images/itachi.jpg", "Images/1.jpg"];
let count = 0;
function next() {
  count++;
  if (count == photos.length) count = 0;
  imgSlider.src = photos[count];
}
function prev() {
  count--;
  if (count < 0) count = photos.length - 1;
  imgSlider.src = photos[count];
}

//css styling using js
let paraCss = document.querySelector("#para-id");
function paraStyle() {
  paraCss.classList.add("para-class");
}
function remStyle() {
  paraCss.classList.remove("para-class");
}

// event listener
let evlis = document.querySelector("#evListen");
// evlis.addEventListener("mouseover",function (){evlis.classList.add("para-class");});
// evlis.addEventListener("mouseout",function (){evlis.classList.remove("para-class");});
evlis.addEventListener("click", function () {
  evlis.classList.toggle("para-class");
});
let paraDemo = document.querySelector("#para");
paraDemo.addEventListener("mouseover", function () {
  paraDemo.classList.toggle("para-class");
});

//multiple event listener
// let melHeading=document.querySelectorAll("h1")[3];
let heading4=document.querySelector("#multi");
let buttons=document.querySelectorAll(".myButton");
let len=buttons.length;
for(let i=0;i<len;i++)
{
  buttons[i].addEventListener("click",function(){heading4.innerHTML=this.innerHTML+" is clicked";});
}

//audio play
let audio=document.querySelector("#audioButton");
let audioClip=new Audio("../../HTML/Audios/i_love_you_baby_lofi.mp3");
audio.addEventListener("click",function(){
  audioClip.play();
  audio.classList.add("animation");
  setTimeout(function()
  {
    audio.classList.remove("animation")
  },1000);
});
// audio.addEventListener("click",function(){audioClip.pause();});later will learn how to stop

// keypress listener
count=0;
document.addEventListener("keypress",function(event)
{
  count++;
  let text=event.key;
  document.querySelectorAll("p")[4].innerHTML="You have entered " + count + " char";
});