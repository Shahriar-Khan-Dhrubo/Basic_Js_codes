let guessNumber,cntWon=0,cntLost=0;
for(let i=1;i<=5;i++)
{
    guessNumber=parseInt(prompt("Enter Number from 1 to 5 : "));
    let randomNumber=Math.ceil(Math.random()*5);
    if(guessNumber==randomNumber)
    {
        cntWon++;
        console.log("You have won");
    }
    else
    {
        cntLost++;
        console.log("You have lost.The random number was " + randomNumber);
    }
}
document.write("Won = " + cntWon + "<br>");
document.write("Lost = " + cntLost + "<br>");