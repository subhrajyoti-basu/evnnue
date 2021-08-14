
gsap.registerPlugin(ScrollTrigger);

//   ScrollTrigger.scrollerProxy("body",{
//     scrollTop(value){
//         return arguments.length ?
//     }
//   });

const locoScroll = new LocomotiveScroll({
    el:document.querySelector(".scroll-container"),
    smooth:true
});
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scroll-container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scroll-container").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



locoScroll.on("scroll", function(e) {

  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function() {
      gsap.to(".menu-icon",0,{y:e.scroll.y,ease:Power0.easeNone});
      gsap.to(".menu-board-container",0,{y:e.scroll.y,ease:Power0.easeNone});
    }
  })
});
  //cursor
gsap.set('.cursor',{xPercent:-50,yPercent:-50});
gsap.set('.cursor-follower',{xPercent:-50,yPercent:-50});

var cur = document.querySelector('.cursor');
var fol = document.querySelector('.cursor-follower');

 
window.addEventListener('mousemove', function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(cur,0.5,{x:e.clientX,y:e.clientY});
    gsap.to(fol,0.9,{x:e.clientX,y:e.clientY});      
});

//menu toggle

gsap.set(".menu-board-container",{xPercent:100});

var a = 0;
function toggleMenu() {
  if(a == 0){
    gsap.to(".menu-board-container",{xPercent:-50});
    $(".menu-icon").attr("src", '/assets/close.svg');
    a = 1;
  }
  else{
    gsap.to(".menu-board-container",{xPercent:100});
    $(".menu-icon").attr("src", '/assets/menmu-icon.svg');
    a = 0;
  } 
  return a;
}



var moon = document.getElementById('svg-moon');
moon.addEventListener('mouseenter', (e) => {
  cur.classList.add('active-moon');
  fol.classList.add('active-moon');
})

moon.addEventListener('mouseleave', (e) => {
  cur.classList.remove('active-moon');
  fol.classList.remove('active-moon');
})
