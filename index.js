const hbg = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');

hbg.addEventListener('click',()=>{
    if(nav.parentNode.classList.contains('hidden')){
        nav.parentNode.classList.remove('hidden')
    }else{
        nav.parentNode.classList.add('hidden')
    }
})