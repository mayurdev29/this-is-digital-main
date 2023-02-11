gsap.from("#page1 #head, #page1 h2",{
    opacity:0,
    duration:1,
    ease:Expo.easeInOut,
    delay:0.5
})

gsap.from("#page1 #img1",{
    opacity:0,
    y:50,
    duration:1.5,
    ease:Expo.easeInOut,
    delay:0.5
})
gsap.from("#page1 #img2",{
    opacity:0,
    x:50,
    duration:1.5,
    ease:Expo.easeInOut,
    delay:0.5
})
gsap.from("#page1 #img3",{
    opacity:0,
    y:-50,
    duration:1.5,
    ease:Expo.easeInOut,
    delay:0.5
})

gsap.from("#text h3",{
    scrollTrigger:{
        trigger:"#text h3",
        start:"top 90%",
        // markers:true
    },
    opacity:0,
    y:30,
    duration:1,
    ease:Expo.easeInOut,
})
gsap.from("#text h1,#text img",{
    scrollTrigger:{
        trigger:"#text h1",
        start:"top 90%",
        // markers:true
    },
    opacity:0,
    y:30,
    duration:1,
    ease:Expo.easeInOut,
})
gsap.from("#text h2",{
    scrollTrigger:{
        trigger:"#text h2",
        start:"top 90%",
        // markers:true
    },
    opacity:0,
    y:30,
    duration:1,
    ease:Expo.easeInOut,
})



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });