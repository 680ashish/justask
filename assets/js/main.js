/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            nav.classList.toggle('nav-shift')
            nav.classList.toggle('nav-shift2')
            // nav.classList.toggle('nav-opacity')
            // change icon
            toggleBtn.classList.toggle('bx-x')
          
        })
    }
}
showMenu('header-toggle','navbar')




/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


/*====================DARK MODE====================*/
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

const navbarToggle = document.getElementById('header-toggle');
const navbar = document.querySelector('.nav');





function openHtmlPageInDiv(event) {
    // Prevent the default link behavior.
    event.preventDefault();
  
    // Get the URL of the page to open.
    const href = event.target.getAttribute('href');
  
    // Create a new link element.
    const linkElement = document.createElement('link');
  
    // Set the rel and href attributes of the link element.
    linkElement.rel = 'stylesheet';
    linkElement.href = '/categories/loginpage/styles.css';
  
    // Add the link element to the head of the document.
    document.head.appendChild(linkElement);
  
    // Get the div element to load the page into.
    const divElement = document.querySelector('#categories');
  
    // Load the HTML page into the div element.
    fetch(href)
      .then(response => response.text())
      .then(html => (divElement.innerHTML = html));
  }
  
  