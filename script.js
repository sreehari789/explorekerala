// ScrollReveal js library

 ScrollReveal({
     distance: '100px',
   duration:2000,
   delay:200
    });


    // ScrollReveal().reveal('.home-content', {delay:50,origin:'left'});
ScrollReveal().reveal('.heading', {delay:150,origin:'bottom'});

 ScrollReveal().reveal('.destination-single', { duration:2000,delay:100,origin:'bottom'});
    ScrollReveal().reveal('.single-destination', { duration:1000,delay:100,origin:'bottom',interval:100});


    // slider buttons 

const btns= document.querySelectorAll('.btn')
const slides1=document.querySelectorAll(".video")
const contents=document.querySelectorAll(".home-content")

var Navs = function (manual){
    btns.forEach((btn)=>{
btn.classList.remove("active")
    })

    slides1.forEach((slide)=>{
        slide.classList.remove("active")
    })

    contents.forEach((content)=>{
        content.classList.remove("active")
    })



    btns[manual].classList.add("active")
    slides1[manual].classList.add("active")
    contents[manual].classList.add("active")
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        Navs(i)
    })
})