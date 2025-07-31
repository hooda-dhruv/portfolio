document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const viewWorkButton = document.querySelector('.hero-button'); // Get the "VIEW MY WORK" button

    // Smooth scroll function for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump

            const targetId = link.getAttribute('href').substring(1); // Get target section ID (e.g., 'about')
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate position, accounting for fixed header if needed
                const headerOffset = header.offsetHeight; // Get height of your fixed header
                const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // -20px for a bit more padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scroll for "VIEW MY WORK" button
    if (viewWorkButton) {
        viewWorkButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default button behavior

            const projectsSection = document.getElementById('projects'); // Get the projects section

            if (projectsSection) {
                const headerOffset = header.offsetHeight;
                const elementPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // Same offset logic as nav

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Active navigation link highlighting on scroll
    const activateNavLink = () => {
        let currentActive = null;
        sections.forEach(section => {
            const sectionStyle = window.getComputedStyle(section);
            const sectionPaddingTop = parseFloat(sectionStyle.paddingTop);
            const sectionPaddingBottom = parseFloat(sectionStyle.paddingBottom);

            const sectionTop = section.offsetTop - header.offsetHeight - sectionPaddingTop; 
            const sectionBottom = sectionTop + section.offsetHeight + sectionPaddingTop + sectionPaddingBottom; 

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentActive = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href').substring(1) === currentActive) {
                link.classList.add('active-nav');
            }
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // Call it once on load for initial state
});