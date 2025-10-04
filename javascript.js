// ============================================
// SCRIPT.JS - Fichier JavaScript principal
// ============================================

// ============================================
// QUOTE CAROUSEL (Page d'accueil)
// ============================================

let currentQuote = 0;
const quotes = document.querySelectorAll('.quote');

if (quotes.length > 0) {
    function showNextQuote() {
        quotes[currentQuote].classList.remove('active');
        currentQuote = (currentQuote + 1) % quotes.length;
        quotes[currentQuote].classList.add('active');
    }
    
    // Change quote every 5 seconds
    setInterval(showNextQuote, 5000);
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menu = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menu && !nav.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// ============================================
// FORM HANDLING
// ============================================

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Display confirmation message
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.\n\nNote : Pour activer l\'envoi réel des emails, configurez Netlify Forms en ajoutant l\'attribut "netlify" dans la balise <form>.');
    
    // Reset form
    form.reset();
    
    return false;
}

// ============================================
// SMOOTH SCROLL (pour les ancres éventuelles)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process if it's an anchor on the same page
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href)
