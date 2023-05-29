const userImage=document.querySelector("#profile-img");
const showMenu=document.querySelector("#hidden-menu");


userImage.addEventListener("click",()=>{
    showMenu.classList.toggle("show");
});

const menuResponsiveButton=document.getElementById("button-menu-responsive");
const menuResponsive=document.querySelector(".header__nav__navbar");

menuResponsiveButton.addEventListener("click",()=>{
    menuResponsive.classList.toggle("show-navbar")
});