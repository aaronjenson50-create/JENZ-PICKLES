/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass?.classList.add('active-link')
		}else{
			sectionsClass?.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== WHATSAPP ORDER LOGIC ===============*/
const whatsappBtn = document.getElementById('whatsapp-btn');
const radios = document.querySelectorAll('input[name="quantity"]');

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        let selectedQuantity = '';
        let selectedPrice = '';

        // Find selected radio button
        radios.forEach(radio => {
            if (radio.checked) {
                selectedQuantity = radio.value;
                selectedPrice = radio.getAttribute('data-price');
            }
        });

        // Construct WhatsApp Message
        const phoneNumber = '919387222000';
        const message = `Hello Jenz Pickles, I want to order Mango Pickle (മാങ്ങ അച്ചാർ).%0AQuantity: ${selectedQuantity}%0APrice: ₹${selectedPrice}`;
        
        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
}

/*=============== SCROLL ANIMATION (INTERSECTION OBSERVER) ===============*/
// Add fade-up class to specific elements programmatically for cleaner HTML
const animatedElements = document.querySelectorAll('.home__data, .home__images, .about__data, .about__images, .product__card, .features__card, .order__data, .order__images');

animatedElements.forEach(el => {
    el.classList.add('fade-up');
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, observerOptions);

animatedElements.forEach(el => {
    observer.observe(el);
});

/*=============== PRODUCT GALLERY ===============*/
function changeProductImage(src, element) {
    const mainImg = document.querySelector('.main-product-img');
    const thumbnails = document.querySelectorAll('.product__thumb');
    
    // Change main image source
    mainImg.src = src;
    
    // Update active class
    thumbnails.forEach(thumb => thumb.classList.remove('active-thumb'));
    element.classList.add('active-thumb');
}

/*=============== QUANTITY SELECTION SHORTCUT ===============*/
function selectOrderQuantity(weight) {
    // Select the correct radio button
    const radioToSelect = document.querySelector(`input[name="quantity"][value="${weight}"]`);
    if (radioToSelect) {
        radioToSelect.checked = true;
    }
    
    // Scroll smoothly to order section
    const orderSection = document.getElementById('order');
    if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });
    }
}
