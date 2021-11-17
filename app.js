const toggle = document.querySelector('.switch input');
const pointer = document.querySelector('.pointer');
const nonono = document.querySelector('.nonono');
const menu = document.querySelector('.menu');


const cursors = {
    pointer : '👆',
    nonono : '☝',
    fu : '🖕'
};

let attempt = 0;

const unclick = function(){
    attempt++;

    if (attempt < 3){
        document.querySelector('.switch').style.pointerEvents = "none";
        nonono.classList.remove('nonono-animation');
        pointer.classList.add('unclick-animation');

        setTimeout((()=>{
            toggle.checked = false;
            document.querySelector('.switch').style.pointerEvents = "initial";
            nonono.classList.add('nonono-animation');
        }), 800)
        
        setTimeout((()=>{
            pointer.classList.remove('unclick-animation');
        }), 1600)
    }else{
        
        nonono.classList.remove('nonono-animation');
        pointer.classList.add('rightclick-animation');
        menu.classList.add('menu-animation');

        setTimeout((()=>{
            pointer.innerHTML='🖕'
        }), 2500)
        
        setTimeout((()=>{
            document.querySelector('.switch').innerHTML = "";
        }), 1750)
    }
}

toggle.addEventListener('click', unclick);