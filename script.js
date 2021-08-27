gsap.registerPlugin("ScrollTrigger");



// method 2 ( img/div tag x position ) :
// var M2 = TweenMax.to('.character2',1,{repeat:0,x:-24995,ease:SteppedEase.config(49), paused: true});

// var M3 = TweenMax.to('.character3',1,{repeat:0,x:-7500,ease:SteppedEase.config(15), paused: true});
var PH1 = TweenMax.to('.character1',10,{repeat:0,x:-64500,ease:SteppedEase.config(129), paused: true});
var PH2 = TweenMax.to('.character12',9,{repeat:-1,x:-61500,ease:SteppedEase.config(123), paused: true});

// Control functions ( you can add whatever you want ) : 

function play(){ M2.play(); };

function pause(){M2.pause(); M3.pause(); M4.pause(); };

function restart(){  M2.restart(); };

function reverse(){  M2.reverse(); };

function once(){ M2.repeat(1); };

function infinity(){  M2.repeat(-1); };


const tl = gsap.timeline({
  scrollTrigger:{
    trigger: ".ph1",
    start: "center center",
    end: "300% bottom",
    scrub: true,
    pin: true,
    // markers: true,
    pinSpacing: false,
    // snap: 1
  }
}).to('.bg', {scale: 0.01,opacity: 0}).to('.primergb', {opacity:1}).to('.character1',10,{repeat:0,x:-63000,ease:SteppedEase.config(126)}).to('.character1', {opacity: 0}).to('.pht1', {opacity: 0}).to('.primergb', {opacity:0});

const tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".ph2",
    start: "center center",
    end: "300% bottom",
    scrub: true,
    pin: true,
    // snap: 1
    // markers: true,
    // pinSpacing: false
  }
}).to('.character12',9,{repeat:0,x:-61500,ease:SteppedEase.config(123)}).to('.character12', {opacity: 0}).to('.pht2', {opacity: 0}).to('.segundobg', {opacity:0});
// function timeScale(X){ 
//   TweenLite.to([M2,M3,M4,M5,M6,M7],1,{timeScale:X});
//   //M1.timeScale(X); M2.timeScale(X); 
// };

// const tl = gsap.timeline({
//   scrollTrigger:{
//     trigger: ".animaciones",
//     start: "center center",
//     end: "500% bottom",
//     scrub: true,
//     pin: true,
//     // markers: true,
//     pinSpacing: false
//   }
// }).to('.character2',1,{repeat:0,x:-24995,ease:SteppedEase.config(49)})
//   .to("#dos", {opacity: 1}).to('.uno',{ opacity: 0})
//   .to('.character4',10,{repeat:0,x:-64000,ease:SteppedEase.config(128)})
//   .to(".tres", {opacity: 1}).to('#dos',{ opacity: 0})
//   .to('.character5',8,{repeat:0,x:-51000,ease:SteppedEase.config(102)})
//   .to(".cuatro", {opacity: 1}).to('.tres',{ opacity: 0})
//   .to('.character6',7,{repeat:0,x:-60000,ease:SteppedEase.config(120)})
//   .to(".cuatro", {opacity:0});

//   // const tl2 = gsap.timeline({
//   //   scrollTrigger:{
//   //     trigger: ".animaciones",
//   //     start: "center center",
//   //     end: "500% bottom",
//   //     scrub: true,
//   //     pin: true,
//   //     markers: true,
//   //     pinSpacing: false
//   //   }
//   // }).to(".text-one",{opacity:1}).to(".text-one",{opacity:0})
//   //   .to(".text-two",{opacity:1}).to(".text-two",{opacity:0})
//   //   .to(".text-three",{opacity:1}).to(".text-three",{opacity:0})
//   //   .to(".text-four",{opacity:1}).to(".text-four",{opacity:0})
// const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".uno",
//       start: "center center",
//       pin: true,
//       scrub: true,
//       end: "bottom top",
//       onEnter: () => M2.play(),
//       onLeaveBack: () => M2.reverse()
//     }
//   }).to(".text-one", {opacity: 1}).to('.character2', {opacity: 1, duration: 2});
  
//   const tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#dos",
//       start: "center center",
//       pin: true,
//       scrub: true,
//       end: "bottom top",
//       onEnter: () => M4.play(),
//       onEnterBack: () => M4.restart(),
//       onLeave: () => M4.pause()
//     }
//   }).to(".text-two", {opacity: 1}).to(".text-two", {opacity: 0});
//   const tl3 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".tres",
//       start: "center center",
//       pin: true,
//       scrub: true,
//       end: "bottom top",
//       onEnter: () => M5.restart(),
//       onEnterBack: () => M5.restart()
//     }
//   }).to(".text-three", {opacity: 1}).to('.character4', {opacity: 1, duration: 2}).to('.character4', {opacity: 0}).to(".text-three", {opacity: 0});
//   const tl4 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".cuatro",
//       start: "center center",
//       pin: true,
//       scrub: true,
//       end: "bottom top",
//       onEnter: () => M6.restart(),
//       onEnterBack: () => M6.restart()
//     }
//   }).to(".text-four", {opacity: 1}).to('.character5', {opacity: 1, duration: 2}).to('.character5', {opacity: 0}).to(".text-four", {opacity: 0});




  // const tl3 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#dos",
  //     start: "center center",
  //     pin: true,
  //     scrub: true,
  //     // toggleActions: "play none none reverse",
  //     // end: "200vh bottom",
      
  //     // pinSpacing: false,
  //     onEnter: () => M4.play(),
  //     onEnterBack: () => M4.reverse(),
  //     // onLeave: () => M4.pause()
  //   }
  // });
  // tl3.to('.character4', {opacity: 1});
  // // tl3.to('.character4', {opacity: 0});

  // const tl4 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".tres",
  //     start: "top top",
  //     pin: true,
  //     scrub: true,
  //     // toggleActions: "play none none reverse",
  //     // end: "200vh bottom",
      
  //     // pinSpacing: false,
  //     onEnter: () => M5.play(),
  //     onEnterBack: () => M5.reverse(),
  //     // onLeave: () => M5.pause()
  //   }
  // });
  // tl4.to('.character5', {opacity: 1});
  // // tl4.to('.character5', {opacity: 0});

  // const tl5 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".cuatro",
  //     start: "top top",
  //     pin: true,
  //     scrub: true,
  //     // toggleActions: "play none none reverse",
  //     // end: "200vh bottom",
      
  //     // pinSpacing: false,
  //     onEnter: () => M6.play(),
  //     onEnterBack: () => M5.reverse(),
  //     // onLeave: () => M5.pause()
  //   }
  // });
  // tl5.to('.character6', {opacity: 1});
  // // tl5.to('.character6', {opacity: 0});

  // const tl6 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".cinco",
  //     start: "top top",
  //     // pin: true,
  //     scrub: true,
  //     // toggleActions: "play none none reverse",
  //     // end: "200vh bottom",
      
  //     // pinSpacing: false,
  //     onEnter: () => M7.play(),
  //     onEnterBack: () => M5.reverse(),
  //     // onLeave: () => M5.pause()
  //   }
  // });
  // tl6.to('.character7', {opacity: 1});
  // tl6.to('.character7', {opacity: 0});
// tl.to('.character2',1,{repeat:0,x:-24995,ease:SteppedEase.config(49)})
//     .to(".character3", {opacity: 1})
//     .to('.character3',1,{repeat:0,x:-7500,ease:SteppedEase.config(15)})
//     .to(".character4",{opacity: 1})
//     .to('.character4',10,{repeat:0,x:-64000,ease:SteppedEase.config(128)})
//     .to(".character5",{opacity: 1})
//     .to('.character5',8,{repeat:0,x:-51000,ease:SteppedEase.config(102)})
//     .to(".character6",{opacity:1})
//     .to('.character6',9,{repeat:0,x:-57500,ease:SteppedEase.config(115)})
//     .to(".character2", {opacity: 0, duration: 0.001})
//     .to(".character3", {opacity: 0, duration: 0.001})
//     .to(".character4", {opacity: 0, duration: 0.001})
//     .to(".character5", {opacity: 0, duration: 0.001})
//     .to(".character6", {opacity: 0, duration: 0.001})
//     .to(".character7", {opacity:1})
//     .to('.character7',1,{repeat:0,x:-9500,ease:SteppedEase.config(19)});