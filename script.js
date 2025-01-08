gsap.from("#i1", {
    x:-200,
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i2", {
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i3", {
    x:200,
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i4", {
    x:-200,
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i5", {
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i6", {
    x:200,
    opacity:0,
    scale:0,
    duration:2,
    
})



// Quiz

gsap.to("#i1quiz", {
    // x:200,
    y:100,
    opacity:1,
    scale:1,
    duration:2,
    
})
gsap.to("#i3quiz", {
    y:100,
    opacity:1,
    scale:1,
    duration:2,
    
})



// index.html

gsap.from(".row1",{
    opacity:0,
    duration:2,
    scrollTrigger: {
        trigger: ".row1",
        scroller:"body",
        // markers:true,
        start: "top 90%",
        end: "top 10%",
        scrub:1,
    }
})
gsap.from(".row2",{
    opacity:0,
    duration:2,
    scrollTrigger: {
        trigger: ".row2",
        scroller:"body",
        // markers:true,
        start: "top 90%",
        end: "bottom 90%",
        scrub:1,
    }
})