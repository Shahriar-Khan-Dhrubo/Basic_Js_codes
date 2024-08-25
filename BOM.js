// let locationDiv=document.querySelector("div");
// let p1=locationDiv.children[0];
// p1.textContent=location.href;

// let p2=p1.nextElementSibling;
// p2.textContent=location.protocol;

// let p3=p2.nextElementSibling;
// p3.textContent=location.hostname;

// let p4=p3.nextElementSibling;
// p4.textContent=location.port;

// let p5=p4.nextElementSibling;
// p5.textContent=location.pathname;

// let btn=document.querySelector("button");
// btn.addEventListener("click",function()
// {
//     location.assign("http://youtube.com");
// });

//prompt
// let userName=prompt("Enter Your Name : ");
// let h1=document.createElement("h1");
// let text;
// if(userName==null || userName=='')
// {
//     text="no name found";
// }
// else
// {
//     text="Welcome " + userName;
// }
// let textNode=document.createTextNode(text);
// h1.appendChild(textNode);
// document.body.appendChild(h1);

// setTimeout,setInterval
let button=document.querySelector(".btn");
let para=document.querySelector("p");
// button.addEventListener("click",function()
// {
//     para.textContent="User Info Saved";
//     setTimeout(()=>
//     {
//         para.textContent="";
//     },2000);
// });
// button.addEventListener("click",function()
// {
//     let count=1;
//     para.textContent=count;
//     let intervalId=setInterval(()=>
//     {
//         count++;
//         para.textContent=count;
//         if(count==5)
//             clearInterval(intervalId);
//     },1000);
// });
// clock
function startClock(){
    let date= new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    minutes=formatTimes(minutes);
    seconds=formatTimes(seconds);
    let time=`${hours} : ${minutes} : ${seconds}`;
    
    para.textContent=time;
}

button.addEventListener("click",()=>
{
    startClock();
    setInterval(startClock,1000);
});

function formatTimes(value){
    if(value<10)
        value="0"+value;
    return value;
};