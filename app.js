const aside = document.querySelector(".doc--name");
const toggleBtn = document.querySelector(".show--hide");
const sidebarItems = document.querySelectorAll(".doc--name--list--item");
const description =  document.querySelector(".docs--decription");

// sidebarItems.forEach(item=>{
//     item.addEventListener("click", function(){
//         aside.classList.toggle("show");
//         description.classList.add("description-translate");
//     })
// })

toggleBtn.addEventListener("click", function(){
    toggleBtn.classList.toggle("show--hide--rotate");
    aside.classList.toggle("show");
    // description.classList.toggle("description--translate");

    setTimeout(()=>{
        aside.classList.add("show");
    },5000)
});

// aside.addEventListener("mouseenter", function(){
//     aside.classList.add("show");

// })