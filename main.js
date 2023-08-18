import './styles/nav.css'
import './style.css'
import Experience from './Experience/Experience.js'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

const canvas1 = document.querySelector(".experience-canvas");
const canvas2 = document.querySelector(".experience-canvas-two");
const canvas3 = document.querySelector(".experience-canvas-three");
const experience = new Experience(canvas1, canvas2, canvas3);


const tl = gsap.timeline();

tl.from(".line span", {
  duration: 1.9,
  y: 300,
  ease: "power4.out",
  stagger: {
    amount: 0.9
  },
  onComplete: function () {
console.log("done")
  }
});


// Select the skills section

   // Set up the GSAP timeline
   gsap.registerPlugin(ScrollTrigger);

   // Set up the GSAP timeline
   const timelineSkills = gsap.timeline();

   // Add animations to each skill card
   timelineSkills.from(".title-one", {
    opacity: 0,
    y: 100,
    stagger: 0.2, // Delay between each card animation
    duration: 0.3,
    ease: "power3.out",
    once: false,
   }).from(".card", {
      opacity: 0,
      y: -100,
      stagger: 0.2, // Delay between each card animation
      duration: 0.4,
      ease: "power3.out",
      // once: false,
      // repeat: true,
      

      
   }).from(".title-two", {
      opacity: 0,
      y: 100,
      stagger: 0.2, // Delay between each card animation
      duration: 0.4,
      ease: "power3.out",
      once: false,

      
   }).from(".para-two", {
      opacity: 0,
      y: -100,
      stagger: 0.2, // Delay between each card animation
      duration: 0.6,
      ease: "power3.out",
      once: false,

      
   });

   // Attach ScrollTrigger to the timeline
   ScrollTrigger.create({
      trigger: ".scrolltrigger-one",
      animation: timelineSkills,
      start: "center center", // Trigger animation when the top of the section reaches the center of the viewport
   });



   const timelineContact = gsap.timeline(
    {
      scrollTrigger: {
        trigger: ".scrolltrigger-two",
        start: "bottom bottom",
      }
    }
   ).from(".title-three", {
    opacity: 0,
    x: 100,
    stagger: 0.2, // Delay between each card animation
    duration: 0.7,
    ease: "power3.out",
    once: false,

   }).from(".title-three-sub", {
    opacity: 0,
    x: 100,
    stagger: 0.2, // Delay between each card animation
    duration: 0.6,
    ease: "power3.out",
    once: false,

   }).from(".image_contact_div", {
    opacity: 0,
    z: 100,
    stagger: 0.2, // Delay between each card animation
    duration: 0.5,
    ease: "power3.out",
    once: false,

   })