gsap.set('.svg-moon', {transformOrigin: '50% 50%'});
gsap.to(".svg-moon",70, {ease:Power0.easeNone,rotation:360, repeat:-1});



const tl = gsap.timeline();

tl.to(".imageToShow4",{yPercent:-100})
  .to(".imageToShow3",{yPercent:-100})
  .to(".imageToShow2",{yPercent:-100})
  .to(".imageToShow1",{yPercent:0});

  ScrollTrigger.create({
      animation:tl,
      trigger:".right-content",
      start:"top 5%",
      scroller:".scroll-container",
      end:"+=310% center",
      scrub:1,
      pin:true
  });

  var image1 = document.getElementById('imgProject1');
  image1.addEventListener('mouseenter', (e) => {
    cur.classList.add('active');
    fol.classList.add('active');
  })

  image1.addEventListener('mouseleave', (e) => {
    cur.classList.remove('active');
    fol.classList.remove('active');
  })



  var image2 = document.getElementById('imgProject2');
  image2.addEventListener('mouseenter', (e) => {
    cur.classList.add('active');
    fol.classList.add('active');
  })
  
  image2.addEventListener('mouseleave', (e) => {
    cur.classList.remove('active');
    fol.classList.remove('active');
  })