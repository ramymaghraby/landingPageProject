/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let allSections = document.querySelectorAll('section');
let navBar = document.getElementById('navbar__list');
let docFragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
allSections.forEach((section) =>{
    let sectionText = section.getAttribute('data-nav');
    let li = document.createElement('li');
    let link = document.createElement('a');
    let tNode = document.createTextNode(sectionText);
    
    link.appendChild(tNode);
    li.appendChild(link);
    li.setAttribute('id', tNode.textContent.replace(' ', '_'))
    link.setAttribute('href', '#'+sectionText)
    docFragment.appendChild(li);
})
navBar.appendChild(docFragment);

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', (eve) =>{
    allSections.forEach((sec)=>{
        sec.classList.remove('your-active-class')
    })
    allSections.forEach((section)=>{
        let sectionText = section.getAttribute('data-nav');
        let sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.y <= 500 && sectionPosition.y >= 0) {
            section.classList.add('your-active-class');
            navBar.childNodes.forEach((child)=>{
                child.classList.remove('your-active-class')
            })
            document.getElementById(sectionText.replace(' ', '_')).classList.add('your-active-class');
        }
    })
})



// Scroll to anchor ID using scrollTO event

navBar.addEventListener('click', (event)=>{
    let liText = event.target.textContent;
    let loweredText = liText.toLowerCase()
    let noSpace = loweredText.replace(' ','')
    document.getElementById(noSpace).scrollIntoView({'behavior':'smooth'});
    allSections.forEach((section)=>{
        section.classList.remove('your-active-class');
    })
    document.getElementById(noSpace).classList.add('your-active-class');
})


