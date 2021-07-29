const nav =document.querySelector('#navbar');
const topOfNavbar=nav.offsetTop;
function fixedNavbar (){
   if(window.scrollY>topOfNavbar){
       document.body.classList.add('fixed-nav');
   }else{
        document.body.classList.remove('fixed-nav');
   }
}

window.addEventListener('scroll',fixedNavbar);