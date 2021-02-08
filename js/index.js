const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "middle-img-src": "img/mid-page-accent.jpg", // I pulled this out of main-content so I could easily iterate through the h4-p pairs
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Updating the text content of the nav links
const nav = document.querySelectorAll('a');
nav.forEach((element, index) => element.textContent = Object.values(siteContent.nav)[index]);
nav.forEach(element => element.style.color = 'green'); // Changing color of navigation text

// Updating the header content

let header = document.querySelector("h1");
header.textContent = siteContent.cta.h1;


let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

// Updating Main Content

const main = document.querySelectorAll(".text-content h4, .text-content p");
main.forEach((element, index) => element.textContent = Object.values(siteContent["main-content"])[index]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['middle-img-src']);

// Updating contact information
const contact = Object.values(document.querySelector('.contact').children);
contact.forEach((element, index) => element.textContent = Object.values(siteContent['contact'])[index]);

// Updating footer
const foot = document.querySelector('footer p');
foot.textContent = Object.values(siteContent['footer']);

// Adding new content
let navNode = document.querySelector('header nav');
let navNode1 = document.createElement('a');
navNode1.textContent = "Careers";
navNode1.style.color = 'green';
let navNode2 = document.createElement('a');
navNode2.textContent = "Free Money!";
navNode2.style.color = 'green';
navNode.appendChild(navNode1);
navNode.prepend(navNode2);








