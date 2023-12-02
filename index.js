let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-2",
        start: "0% 50%",
        end: "50% 50%",
        // markers: true,
        scrub: 1,
    },
});

// add animations and labels to the timeline
tl
    .from("#imgthree", {
        bottom: "-45vh",
    })
tl.from('#imgtwo , #imgfour', {
    marginBottom: "-65vh",
})
tl.from('#imgone , #imgfive', {
    marginBottom: "-65vh",
})


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-5",
        start: "50% 50%",
        end: "150% 50%",
        // markers: true,
        pin: true,
        scrub: 3,
    },
});
tl2.to("#scroll-1", {
    bottom: "60vh",
})
.to("#scroll-1", {
    opacity: 0,
})
.to("#scroll-2", {
    opacity: 1,
},'ab1')
.to(".phone-img", {
    x:-310
},'ab1')
.to("#scroll-2", {
    bottom: "60vh",
})
.to("#scroll-2", {
    opacity: 0,
})
.to("#scroll-3", {
    opacity: 1,
},'ab2')
.to(".phone-img", {
    x:-620
},'ab2')
.to("#scroll-3", {
    bottom: "60vh",
})
.to("#scroll-3", {
    opacity: 0,
})
.to("#scroll-4", {
    opacity: 1,
},'ab3')
.to(".phone-img", {
    x:-910
},'ab3')


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
  }
});