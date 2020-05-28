const burger=document.querySelector('.burger');
const rightNav=document.querySelector('.rightNav');
const navBar=document.querySelector('.navbar');
const navList=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-item-resp');
    navList.classList.toggle('v-item-resp');
    navBar.classList.toggle('h-nav');

})