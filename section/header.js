// Header Component
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-container');
    
    if (headerContainer) {
        renderHeader();
    }
});

function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <a href="index.html" class="logo-link">
                        <span class="logo-text">Sequoia</span>
                    </a>
                </div>
                
                <nav class="main-nav">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
                        <li class="nav-item"><a href="#testimonials" class="nav-link">Client Testimonials</a></li>
                        <li class="nav-item"><a href="#contact" class="nav-link">Contact Us</a></li>
                    </ul>
                </nav>
                
                <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
        </div>
    `;
    
    headerContainer.appendChild(header);
    
    // Add scaled-down styles for the header
    const style = document.createElement('style');
    style.textContent = `
        /* Scaled down styles for the header */
        .site-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            padding: 10px 0;
            background-color: rgba(10, 10, 10, 0.95);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .site-header.scrolled {
            background-color: rgba(10, 10, 10, 0.98);
        }
        
        .header-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo-link {
            text-decoration: none;
            color: white;
            font-size: 22px;
            font-weight: 700;
        }
        
        .logo-text {
            background: linear-gradient(to right, #ffffff, #f8c165);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        .nav-list {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .nav-item {
            margin: 0 7px;
        }
        
        /* Simplified nav link - only color change, no animation */
        .nav-link {
            color: white;
            text-decoration: none;
            padding: 5px 10px;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s ease;
        }
        
        .nav-link:hover, .nav-link.active {
            color: var(--primary-color);
        }
        
        .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 22px;
            height: 16px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
        }
        
        .hamburger-line {
            width: 100%;
            height: 2px;
            background-color: white;
            transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: flex;
            }
            
            .main-nav {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: rgba(10, 10, 10, 0.95);
                padding: 15px 0;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease, padding 0.3s ease;
            }
            
            .main-nav.active {
                max-height: 300px;
                padding: 15px 0;
            }
            
            .nav-list {
                flex-direction: column;
                align-items: center;
            }
            
            .nav-item {
                margin: 8px 0;
            }
            
            .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
                transform: translateY(7px) rotate(45deg);
            }
            
            .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
                transform: translateY(-7px) rotate(-45deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Mobile menu toggle
    const mobileMenuToggle = header.querySelector('.mobile-menu-toggle');
    const mainNav = header.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Smooth scrolling for nav links
    const navLinks = header.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // If it's a hash link
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // If it's just '#', scroll to top
                if (href === '#') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    return;
                }
                
                // Otherwise, scroll to the section
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    // Close mobile menu if open
                    if (mainNav.classList.contains('active')) {
                        mobileMenuToggle.classList.remove('active');
                        mainNav.classList.remove('active');
                    }
                    
                    // Get the header height for offset
                    const headerHeight = header.offsetHeight;
                    
                    // Calculate position with offset
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Scroll to the target section
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Change header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Add active class to nav link based on current section
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Clear all active classes first
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Only set active if we're not at the very top of the page
        if (window.scrollY > 10) {
            let currentActiveSection = null;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - header.offsetHeight - 50; // Adding buffer
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentActiveSection = section.getAttribute('id');
                }
            });
            
            // Only set active class if we found a matching section
            if (currentActiveSection) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${currentActiveSection}`) {
                        link.classList.add('active');
                    }
                });
            }
        }
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize with the correct active link
    updateActiveNavLink();
} 