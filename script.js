// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Add active class to the current page's navigation link
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkTarget = link.getAttribute('href').split('/').pop();
        if (currentPage === linkTarget || (currentPage === '' && linkTarget === 'index.html')) {
            link.classList.add('active-nav');
        } else {
            link.classList.remove('active-nav');
        }
    });


    // --- Scroll Reveal Logic for elements with class 'scroll-reveal-element' ---
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal-element');

    const checkScrollRevealVisibility = () => {
        scrollRevealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Check if the element is in the viewport with a small offset
            const isVisible = (rect.top <= window.innerHeight - 100 && rect.bottom >= 0);
            if (isVisible) {
                el.classList.add('visible');
            } else {
                 // Optional: remove 'visible' if scrolling back up to re-trigger on scroll down
                 // el.classList.remove('visible');
            }
        });
    };

    // Add scroll event listener to check visibility
    window.addEventListener('scroll', checkScrollRevealVisibility);

    // Initial check on page load
    checkScrollRevealVisibility();

    // --- JavaScript Hover Animation for Cards ---
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Add mouseover event listener
        card.addEventListener('mouseover', () => {
            // Apply transition and scale on hover
            card.style.transition = 'transform 0.5s ease-in-out'; // Set transition duration and timing
            card.style.transform = 'scale(1.1)'; // Scale up to 130%
        });

        // Add mouseout event listener
        card.addEventListener('mouseout', () => {
            // Apply transition and scale back to normal
            card.style.transition = 'transform 0.5s ease-in-out'; // Use the same transition
            card.style.transform = 'scale(1)'; // Scale back to original size
        });

        // Optional: Clear transition after it ends to prevent conflicts
        // This is good practice but might not be strictly necessary here
        card.addEventListener('transitionend', () => {
             card.style.transition = ''; // Clear the transition property
        });
    });

});
