(function(){
const openingBtn = document.querySelector(".sidebar__hamburger");
const closingBtn = document.querySelector(".sidebar_closer");
const sidebar = document.querySelector(".sibar");

openingBtn.addEventListener("click", function(){
    sidebar.classList.add("sibar_opened");
})

closingBtn.addEventListener("click",function(){
    sidebar.classList.remove("sibar_opened");
})
}())
