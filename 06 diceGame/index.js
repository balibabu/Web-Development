var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;

var img1='images/dice'+a+'.png';
var img2='images/dice'+b+'.png';

var winner;
if(a>b){
    winner='Player 1 is winner';
}else if(b>a){
    winner='Player 2 is winner';
}else{
    winner='Match Draw';
}

// set src attributes and h1
document.querySelectorAll('img')[0].setAttribute('src',img1);
document.querySelectorAll('img')[1].setAttribute('src',img2);
document.querySelector('h1').innerHTML=winner;
