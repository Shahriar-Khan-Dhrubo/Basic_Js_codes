let c=document.getElementById("canvasHtml");

let ctxt=c.getContext("2d");

ctxt.lineWidth=3;
ctxt.strokeStyle="black";
ctxt.strokeRect(10,10,380,280);

ctxt.fillStyle="green";
ctxt.fillRect(12,12,376,276);

let centerX=c.width/2;
let centerY=c.height/2;

ctxt.beginPath();
ctxt.arc(centerX,centerY,80,0,2*Math.PI,false);
ctxt.fillStyle="red";
ctxt.fill();
ctxt.stroke();