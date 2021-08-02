const nav =document.querySelector('.logo');
// const topOfNavbar=nav.offsetTop;
function fixedNavbar (){
   if(window.scrollY>100){
       nav.classList.add('fixed-nav');
   }else{
        nav.classList.remove('fixed-nav');
   }
}

window.addEventListener('scroll',fixedNavbar);