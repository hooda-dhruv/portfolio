// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to key elements
    const pageContent = document.getElementById('page-content');
    const navLinks = document.querySelectorAll('nav ul li a');

    // --- Page Content Definitions (as HTML strings) ---
    // These strings contain the HTML for each section.
    // The background colors and text colors within these strings
    // are set using Tailwind CSS classes (e.g., bg-gray-900, text-white)
    // to ensure consistency with the dark theme defined in style.css.

    const aboutPageContent = `
        <section id="about" class="bg-gray-900 p-8 shadow-lg rounded-lg flex flex-col md:flex-row items-center md:space-x-8">
            <div class="mb-6 md:mb-0">
                <!-- Placeholder Image: Replace with your actual photo -->
                <img src="https://placehold.co/200x200/4A4A4A/FFFFFF?text=Your+Photo" alt="Your Photo"
                     class="w-48 h-48 rounded-full object-cover border-4 border-gray-600 shadow-md">
            </div>
            <div class="text-center md:text-left">
                <h2 class="text-4xl font-extrabold text-white mb-4">Hello, I'm Your Name!</h2>
                <p class="text-lg leading-relaxed text-gray-300 mb-4">
                    I'm an aspiring frontend web developer passionate about creating beautiful, user-friendly, and responsive web experiences. I'm currently diving deep into HTML, CSS, and JavaScript, and excited to learn and contribute in a dynamic team environment.
                </p>
                <p class="text-md leading-relaxed text-gray-400">
                    My journey into web development is driven by a curiosity for how things work on the web and a desire to build impactful digital solutions. I'm eager to apply my growing skills and learn from experienced professionals.
                </p>
            </div>
        </section>
    `;

    const skillsPageContent = `
        <section id="skills" class="bg-gray-900 p-8 shadow-lg rounded-lg">
            <h2 class="text-3xl font-bold text-white mb-6 text-center">My Skills</h2>
            <div class="flex flex-wrap justify-center gap-4">
                <div class="skill-card">HTML5</div>
                <div class="skill-card">CSS3</div>
                <div class="skill-card">JavaScript (ES6+)</div>
                <div class="skill-card">Responsive Design</div>
                <div class="skill-card">Flexbox</div>
                <div class="skill-card">CSS Grid</div>
                <div class="skill-card">Git & GitHub</div>
                <div class="skill-card">VS Code</div>
                <div class="skill-card">Browser DevTools</div>
                <!-- Add more skills as you learn them, e.g., React, APIs -->
            </div>
        </section>
    `;

    const projectsPageContent = `
        <section id="projects" class="bg-gray-900 p-8 shadow-lg rounded-lg">
            <h2 class="text-3xl font-bold text-white mb-6 text-center">My Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project Card 1: To-Do List App -->
                <article class="project-card">
                    <img src="https://placehold.co/400x250/333333/FFFFFF?text=To-Do+List" alt="To-Do List App Thumbnail" class="w-full h-48 object-cover rounded-t-lg mb-4">
                    <h3 class="text-xl font-semibold text-white mb-2">To-Do List App</h3>
                    <p class="text-gray-300 mb-4">A simple interactive to-do list built with HTML, CSS, and vanilla JavaScript. Features adding, completing, and deleting tasks.</p>
                    <div class="flex justify-between items-center">
                        <!-- IMPORTANT: Replace YOUR_USERNAME and YOUR_TODO_REPO_NAME with your actual GitHub details -->
                        <a href="https://hooda-dhruv.github.io/todolist/" class="project-link" target="_blank">Live Demo</a>
                        <a href="https://github.com/hooda-dhruv/todolist" class="project-link" target="_blank">GitHub Repo</a>
                    </div>
                </article>

                <!-- Project Card 2: Weather App (You'll build this next!) -->
                <article class="project-card">
                    <img src="https://placehold.co/400x250/444444/FFFFFF?text=Weather+App" alt="Weather App Thumbnail" class="w-full h-48 object-cover rounded-t-lg mb-4">
                    <h3 class="text-xl font-semibold text-white mb-2">Weather App</h3>
                    <p class="text-gray-300 mb-4">Fetches real-time weather data from an API based on user input, displaying temperature and conditions.</p>
                    <div class="flex justify-between items-center">
                        <a href="#" class="project-link">Live Demo</a> <!-- Update this link later -->
                        <a href="#" class="project-link">GitHub Repo</a> <!-- Update this link later -->
                    </div>
                </article>

                <!-- Project Card 3: Calculator Web App -->
                <article class="project-card">
                    <img src="https://placehold.co/400x250/555555/FFFFFF?text=Calculator" alt="Calculator App Thumbnail" class="w-full h-48 object-cover rounded-t-lg mb-4">
                    <h3 class="text-xl font-semibold text-white mb-2">Calculator Web App</h3>
                    <p class="text-gray-300 mb-4">A functional web-based calculator performing basic arithmetic operations using JavaScript.</p>
                    <div class="flex justify-between items-center">
                        <!-- IMPORTANT: Replace YOUR_USERNAME and YOUR_CALCULATOR_REPO_NAME with your actual GitHub details -->
                        <a href="https://hooda-dhruv.github.io/calculator/" class="project-link" target="_blank">Live Demo</a>
                        <a href="https://github.com/hooda-dhruv/calculator" class="project-link" target="_blank">GitHub Repo</a>
                    </div>
                </article>
                <!-- Add more project cards as you build them -->
            </div>
        </section>
    `;

    const contactPageContent = `
        <section id="contact" class="bg-gray-900 p-8 shadow-lg rounded-lg text-center">
            <h2 class="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p class="text-lg text-gray-300 mb-6">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <form class="max-w-xl mx-auto space-y-4">
                <div>
                    <label for="name" class="block text-left text-gray-300 text-sm font-bold mb-2">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name"
                           class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md bg-gray-800 border-gray-700" required>
                </div>
                <div>
                    <label for="email" class="block text-left text-gray-300 text-sm font-bold mb-2">Email:</label>
                    <input type="email" id="email" name="email" placeholder="your.email@example.com"
                           class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md bg-gray-800 border-gray-700" required>
                </div>
                <div>
                    <label for="message" class="block text-left text-gray-300 text-sm font-bold mb-2">Message:</label>
                    <textarea id="message" name="message" rows="5" placeholder="Your message here..."
                              class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md bg-gray-800 border-gray-700" required></textarea>
                </div>
                <button type="submit"
                        class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition duration-300">
                    Send Message
                </button>
            </form>
        </section>
    `;

    // --- Function to Render Pages ---
    function renderPage(pageName) {
        let contentToRender = '';
        // Remove 'active-nav' class from all links
        navLinks.forEach(link => link.classList.remove('active-nav'));

        // Determine which content to load and set active link
        switch (pageName) {
            case 'about':
                contentToRender = aboutPageContent;
                document.getElementById('nav-about').classList.add('active-nav');
                break;
            case 'skills':
                contentToRender = skillsPageContent;
                document.getElementById('nav-skills').classList.add('active-nav');
                break;
            case 'projects':
                contentToRender = projectsPageContent;
                document.getElementById('nav-projects').classList.add('active-nav');
                break;
            case 'contact':
                contentToRender = contactPageContent;
                document.getElementById('nav-contact').classList.add('active-nav');
                break;
            default:
                contentToRender = aboutPageContent; // Default to about page
                document.getElementById('nav-about').classList.add('active-nav');
                break;
        }
        pageContent.innerHTML = contentToRender; // Insert the HTML string into the page-content div

        // Optional: Scroll to top of the page content after loading new page
        pageContent.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // IMPORTANT: Re-apply event listeners for elements within the new content if needed
        // For this portfolio, the contact form button doesn't need JS functionality yet,
        // but if you add interactive elements inside these dynamically loaded sections later,
        // you would need to select them and add listeners here after innerHTML.
        // Example: if (pageName === 'contact') {
        //     const contactForm = document.querySelector('#contact form');
        //     if (contactForm) {
        //         contactForm.addEventListener('submit', (e) => {
        //             e.preventDefault();
        //             alert('Form submitted! (In a real app, this would send data to a server)');
        //         });
        //     }
        // }
    }

    // --- Event Listeners for Navigation ---
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor link behavior (page jump)
            const pageId = event.target.id.replace('nav-', ''); // Extract page name (e.g., 'about' from 'nav-about')
            renderPage(pageId); // Render the selected page
        });
    });

    // --- Initial Page Load ---
    // Render the 'about' page when the site first loads
    renderPage('about');
});
