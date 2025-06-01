// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update theme icon
function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Mobile navigation toggle (to be implemented if needed)
// Add mobile menu functionality here if required

// Add experience items dynamically
const experienceData = [
    {
        company: "El Sewedy Electrometer",
        location: "6 October, Egypt",
        position: "Senior Full Stack Developer",
        period: "Jul 2022 - Present",
        url: "https://sewedy.com.eg/",
        responsibilities: [
            "Led the development and maintenance of energy meter systems, managing large-scale citizen transactions across multiple regions.",
            "Optimized system performance, resolving critical data bottlenecks for enhanced efficiency and scalability.",
            "Integrated secure payment systems, enabling seamless and reliable energy transactions.",
            "Reviewed code to enforce best practices, maintainability, and performance optimization.",
            "Acted as a technical lead, guiding the team in architecture decisions, Agile methodologies, and code quality standards."
        ],
        projects: [
            {
                name: "Brassica Group",
                url: "https://www.brassicagroup.com/",
                description: "Contributed to the development of power vending and pay power solutions in Ghana."
            },
            {
                name: "Ethiopia Utility Bill Payment System",
                url: "https://www.ethiotelecom.et/telebirr/utility-bill-payment-telebirr/",
                description: "Developed and maintained the utility bill payment system for Ethiopia's electricity company using .NET and Oracle."
            },
            {
                name: "MDM (Meter Data Management)",
                url: "https://sewedy.com.eg/ami-metering-solution/",
                description: "Engineered a secure and scalable prepaid electricity payment system for Pay Power Electricity Company, enabling NFC-based power card transactions and online meter charging. Successfully deployed across Egypt, Libya, and Congo-Brazzaville."
            }
        ]
    },
    {
        company: "3s-POS",
        location: "Alexandria, Egypt, HQ in UK",
        position: "Senior Full Stack Developer",
        period: "Mar 2021 - Jul 2022",
        url: "https://www.3s-pos.com/",
        responsibilities: [
            "Developed and optimized a POS system deployed across the UK and Europe.",
            "Designed a mobile food ordering platform using the .net platform.",
            "Developed an HR system using Blazor, enhancing workforce management."
        ]
    },
    {
        company: "Code Zone",
        location: "Alexandria, Egypt",
        position: "Full Stack Developer",
        period: "Aug 2016 - Mar 2021",
        url: "https://www.codezone-eg.com",
        responsibilities: [
            "Developed HIS and ERP solutions, ensuring scalability and efficiency.",
            "Applied Agile methodologies (Scrum & Kanban) for streamlined development cycles."
        ],
        projects: [
            {
                name: "MYELIN",
                url: "https://www.codezone-eg.com/en/product/myelin",
                description: "Hospital Information System."
            },
            {
                name: "IZONE",
                url: "https://www.codezone-eg.com/en/product/i-zone",
                description: "ERP System."
            },
            {
                name: "PeopleZone",
                url: "https://www.codezone-eg.com/en/product/people-zone",
                description: "Comprehensive HRMS with recruitment, mobile attendance, and performance tools."
            },
            {
                name: "CRM",
                url: "https://www.codezone-eg.com/en/product/crm",
                description: "Enhanced customer service and sales by centralizing data for seamless access and efficient management."
            }
        ]
    },
    {
        company: "Engineers Syndicate",
        location: "Alexandria, Egypt",
        position: "System Administrator",
        period: "Aug 2016 - Mar 2021",
        url: "https://www.alexengsyn.com/",
        responsibilities: [
            "Optimized network, VoIP, and mail servers, improving reliability and communication.",
            "Deployed and maintained ERP, infrastructure, and security systems, enhancing efficiency."
        ]
    },
    {
        company: "Osoul System",
        location: "Alexandria, Egypt",
        position: "System Administrator",
        period: "Oct 2012 – Jul 2013",
        url: "https://osoul.ly/",
        responsibilities: [
            "Deployed ERP systems and maintained network infrastructure, camera systems, and trained users."
        ]
    },
    {
        company: "Faculty of Commerce Computer Center",
        location: "Alexandria, Egypt",
        position: "IT Instructor",
        period: "Oct 2012 – Jul 2013",
        url: "http://www.comm.alexu.edu.eg/",
        responsibilities: [
            "Taught computer courses offered by the center in computer science."
        ]
    }
];

// Function to create experience items
function createExperienceItems() {
    const timeline = document.querySelector('.timeline');
    
    experienceData.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.innerHTML = `
            <div class="experience-header">
                <h3><a href="${exp.url}" target="_blank">${exp.company}</a></h3>
                <p class="location">${exp.location}</p>
                <p class="position">${exp.position}</p>
                <p class="period">${exp.period}</p>
            </div>
            <div class="experience-content">
                <ul class="responsibilities">
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
                ${exp.projects ? `
                    <div class="projects">
                        <h4>Projects:</h4>
                        ${exp.projects.map(project => `
                            <div class="project">
                                <h5><a href="${project.url}" target="_blank">${project.name}</a></h5>
                                <p>${project.description}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
        timeline.appendChild(expElement);
    });
}

// Initialize experience items
document.addEventListener('DOMContentLoaded', () => {
    createExperienceItems();
}); 