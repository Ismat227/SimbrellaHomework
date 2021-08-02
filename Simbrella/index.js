const nav =document.querySelector('#navbar');
// const topOfNavbar=nav.offsetTop;
function fixedNavbar (){
   if(window.scrollY>100){
       nav.classList.add('fixed-nav');
   }else{
        nav.classList.remove('fixed-nav');
   }
}

window.addEventListener('scroll',fixedNavbar);

const baku=document.querySelector(".baku")
const singapore=document.querySelector(".singapore")

// function BakuClick(){
//     baku.innerHTML.=  

// }
// function Singapore(){

// }