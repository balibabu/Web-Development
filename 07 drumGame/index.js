var buttons=document.querySelectorAll('button');
for(var i=0;i<document.querySelectorAll('.drum').length;i++){
    buttons[i].addEventListener('click',clickHandle);
}



document.addEventListener('keypress',function(event){
    makeSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase())
});


function clickHandle(){
    makeSound(this.textContent);
    buttonAnimation(this.textContent)
}

function makeSound(key){
    switch (key) {
        case 'w':
            audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'l':
            audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            console.log(drum);
            break;
    }
}

function buttonAnimation(key){
    var activeButton=document.querySelector('.'+key);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },200);
}