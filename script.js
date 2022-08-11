var score = 0;
var timer = 60;
var hit;
function setnshows(newscore){
    score = newscore
    document.querySelector("#score").textContent=score;

}

function createbubbles(){
    var clutter = "";

for ( i=0; i<152; i++){
    var rn = Math.floor(Math.random()*10);
    clutter = clutter+`<div class="bubble">${rn}</div>`
    
}
document.querySelector("#bubbles").innerHTML=clutter;
}

function setnshowt(){
    setInterval(function(){
        if (timer>0){
            timer--
            document.querySelector("#timer").textContent=timer;
        }
        else{
            document.querySelector("#bubbles").innerHTML=`<h1>Game Over</h1>
            <h2>Score Was:${score}</h2>`
        }
    },1000)

}

function setnshowhit(){
    var h =Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=h;
    hit=h
}

function mainengine(){
    document.querySelector("#bubbles").addEventListener("click",function(dets){
        if (Number(dets.target.textContent)===hit){
            setnshows(score+10);
            createbubbles();
            setnshowhit();
        }
    })
}

createbubbles();
setnshows(score);
setnshowt();
setnshowhit();
mainengine();