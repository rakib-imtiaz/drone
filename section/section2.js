console.log("section2.js loaded")
// Section 2 Component
document.addEventListener('DOMContentLoaded', () => {
    const section2Container = document.getElementById('section2-container');

    if (section2Container) {
        renderSection2();

        // Initialize fade-in animation
        setTimeout(() => {
            observeFadeElements();
        }, 100);
    }
});

function renderSection2() {
    const section2Container = document.getElementById('section2-container');

    // Create the services section HTML
    const section2HTML = `
        <!-- Services Section -->
        <section class="section services-section" id="services">
            <div class="container">
                <h2 class="section-title text-center fade-in">Our Agricultural Drone Services</h2>
                <p class="section-subtitle text-center fade-in">Custom solutions for modern farming needs with cutting-edge drone technology</p>
                
                <div class="services-grid grid-3 fade-in">
                    <div class="service-card">
                        <div class="service-card-image">
                            <img src="img/services/photo-video.jpg" alt="Photo and Video">
                        </div>
                        <div class="service-card-content">
                            <h3 class="service-card-title">Photo and Video</h3>
                            <p class="service-card-text">Professional aerial photography and videography for agriculture, real estate, events, and more. Capture stunning visuals from above with our advanced drone technology.</p>
                            <a href="services/photo-video.html" class="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                        </div>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-image">
                            <img src="img/services/mapping-agriculture.jpg" alt="Mapping and Agriculture">
                        </div>
                        <div class="service-card-content">
                            <h3 class="service-card-title">Mapping and Agriculture</h3>
                            <p class="service-card-text">High-precision mapping and agricultural analysis using drone technology. Get detailed topographical maps, crop health insights, and data-driven recommendations for your fields.</p>
                            <a href="services/mapping-agriculture.html" class="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                        </div>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-image">
                            <img src="img/services/thermal-imaging.jpg" alt="Thermal Imaging">
                        </div>
                        <div class="service-card-content">
                            <h3 class="service-card-title">Thermal Imaging</h3>
                            <p class="service-card-text">Advanced thermal imaging for crop health, irrigation assessment, and pest detection. Identify issues early and optimize your agricultural operations with actionable thermal data.</p>
                            <a href="services/thermal-imaging.html" class="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                        </div>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-image">
                            <img src="img/services/field-mapping.jpg" alt="Field Mapping">
                        </div>
                        <div class="service-card-content">
                            <h3 class="service-card-title">Field Mapping</h3>
                            <p class="service-card-text">Detailed topographical and crop health mapping for data-driven farming decisions and improved resource allocation.</p>
                            <a href="services/field-mapping.html" class="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                        </div>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-image">
                            <img src="img/services/plant-counting.jpg" alt="Plant Counting">
                        </div>
                        <div class="service-card-content">
                            <h3 class="service-card-title">Plant Counting</h3>
                            <p class="service-card-text">Accurate plant population analysis using AI-powered drone imagery to evaluate germination rates and optimize planting.</p>
                            <a href="services/plant-counting.html" class="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                        </div>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-image">
                            <img src="img/services/irrigation-assessment.jpg" alt="Irrigation Assessment">
                        </div>
                        <div class="service-card-content">
                            <h3 class="service-card-title">Irrigation Assessment</h3>
                            <p class="service-card-text">Evaluate irrigation system performance and identify areas of water stress or system failures to improve water efficiency.</p>
                            <a href="services/irrigation-assessment.html" class="service-card-link">Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Stats Section -->
        <section class="section bg-dark">
            <div class="container">
                <div class="number-counter fade-in">
                    <div class="counter-item">
                        <div class="counter-number">5,000+</div>
                        <div class="counter-text">Acres Mapped</div>
                    </div>
                    <div class="counter-item">
                        <div class="counter-number">200+</div>
                        <div class="counter-text">Satisfied Clients</div>
                    </div>
                    <div class="counter-item">
                        <div class="counter-number">98%</div>
                        <div class="counter-text">Accuracy Rate</div>
                    </div>
                    <div class="counter-item">
                        <div class="counter-number">30%</div>
                        <div class="counter-text">Yield Increase</div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Parallax Section -->
        <section class="parallax-section fade-in">
            <div class="parallax-overlay"></div>
            <div class="container">
                <div class="parallax-content">
                    <h2 class="parallax-title text-center">Transform Your Agricultural Operations</h2>
                    <p class="parallax-text text-center">Our advanced drone technology provides the data you need to make informed decisions, reduce costs, and improve yields.</p>
                    <div class="text-center">
                        <a href="#contact" class="button">Schedule a Consultation</a>
                    </div>
                </div>
            </div>
        </section>
    `;

    section2Container.innerHTML = section2HTML;

    // Add additional styles for parallax effect with the fixed background
    const style = document.createElement('style');
    style.textContent = `
        /* Services section with greenish semi-transparent background */
        .services-section {
            background-color: rgba(26, 81, 46, 0.4);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(71, 181, 120, 0.1);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            margin: 40px 0;
            position: relative;
            z-index: 1;
        }
        
        /* Add subtle green glow effect */
        .services-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(71, 181, 120, 0.1) 0%, transparent 70%);
            border-radius: 10px;
            z-index: -1;
            pointer-events: none;
        }
        
        /* Make service cards stand out from transparent background */
        .service-card {
            background-color: rgba(30, 40, 35, 0.8);
            border: 1px solid rgba(71, 181, 120, 0.15);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            background-color: rgba(35, 45, 40, 0.9);
            border-color: rgba(71, 181, 120, 0.3);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
        }
        
        /* Stats section styling */
        .bg-dark {
            background-color: rgba(20, 30, 25, 0.7);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(71, 181, 120, 0.1);
            border-radius: 10px;
            margin: 30px 0;
        }
        
        /* Parallax section with custom overlay */
        .parallax-section {
            position: relative;
            background-image: url('assets/image/drone_above_soyabean_field.jpeg');
            background-attachment: scroll;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 40px 0;
        }
        
        .parallax-overlay {
            background: linear-gradient(to right, rgba(26, 81, 46, 0.8), rgba(10, 10, 10, 0.6));
        }
        
        .parallax-content {
            position: relative;
            z-index: 2;
            padding: 30px 0;
        }
    `;
    document.head.appendChild(style);

    // Initialize fade-in animation
    setTimeout(() => {
        observeFadeElements();
    }, 100);
}

// Function to observe and activate fade-in elements - optimize for performance
function observeFadeElements() {
    const fadeElements = document.querySelectorAll('.fade-in');

    // Use a single observer for all elements with options to improve performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class with a slight delay to stagger animations
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, 50);

                // Unobserve after animation to save resources
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        // Add rootMargin to start loading earlier
        rootMargin: '50px'
    });

    // Observe elements with a small delay between each to avoid processing spikes
    fadeElements.forEach((element, index) => {
        // Stagger the observation to spread the load
        setTimeout(() => {
            observer.observe(element);
        }, index * 10);
    });

    // Clean up observer on page unload
    window.addEventListener('beforeunload', () => {
        observer.disconnect();
    });
}

// Services Section
const createServicesSection = () => {
    const wrapper = document.createElement('div');

    // Create the services section
    const section = document.createElement('section');
    section.id = 'services';
    section.className = 'section fade-in';

    // Create background pattern element
    const pattern = document.createElement('div');
    pattern.className = 'leaf-pattern';
    section.appendChild(pattern);

    const container = document.createElement('div');
    container.className = 'container section-content';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'text-center';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.innerHTML = 'Our <span class="text-gradient">Services</span>';

    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.textContent = 'Leveraging cutting-edge drone technology to deliver exceptional aerial solutions for your specific needs.';

    titleDiv.appendChild(title);
    titleDiv.appendChild(subtitle);
    container.appendChild(titleDiv);

    // Services grid
    const servicesGrid = document.createElement('div');
    servicesGrid.className = 'grid-3';

    // Service items data
    const services = [
        {
            image: 'assets/image/drone_above_field.png',
            title: 'Photo & Video',
            description: 'High-resolution aerial photography and cinematic videography to showcase your property, event, or project from breathtaking perspectives.',
            link: 'services/photo-video.html'
        },
        {
            image: 'assets/image/drone_in_field_insecticide.png',
            title: 'Mapping & Agriculture',
            description: 'Precision agriculture mapping and analysis to optimize crop health, yield monitoring, and resource management for modern farming.',
            link: 'services/mapping-agriculture.html'
        },
        {
            image: 'assets/image/field.png',
            title: 'Thermal Imaging',
            description: 'Advanced thermal imaging for infrastructure inspection, energy audits, and identifying potential issues before they become costly problems.',
            link: 'services/thermal-imaging.html'
        }
    ];

    // Create service cards
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'service-card-image';

        const image = document.createElement('img');
        image.src = service.image;
        image.alt = service.title;

        imageContainer.appendChild(image);

        const contentContainer = document.createElement('div');
        contentContainer.className = 'service-card-content';

        const cardTitle = document.createElement('h3');
        cardTitle.className = 'service-card-title';
        cardTitle.textContent = service.title;

        const cardText = document.createElement('p');
        cardText.className = 'service-card-text';
        cardText.textContent = service.description;

        const cardLink = document.createElement('a');
        cardLink.className = 'service-card-link';
        cardLink.href = service.link;
        cardLink.textContent = 'Learn more';

        // Arrow icon
        const arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        arrowIcon.setAttribute('width', '18');
        arrowIcon.setAttribute('height', '18');
        arrowIcon.setAttribute('viewBox', '0 0 24 24');
        arrowIcon.setAttribute('fill', 'none');
        arrowIcon.setAttribute('stroke', 'currentColor');
        arrowIcon.setAttribute('stroke-width', '2');
        arrowIcon.setAttribute('stroke-linecap', 'round');
        arrowIcon.setAttribute('stroke-linejoin', 'round');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M5 12h14M12 5l7 7-7 7');
        arrowIcon.appendChild(path);

        cardLink.appendChild(arrowIcon);

        contentContainer.appendChild(cardTitle);
        contentContainer.appendChild(cardText);
        contentContainer.appendChild(cardLink);

        serviceCard.appendChild(imageContainer);
        serviceCard.appendChild(contentContainer);

        servicesGrid.appendChild(serviceCard);
    });

    container.appendChild(servicesGrid);

    // Stats section
    const statsSection = document.createElement('div');
    statsSection.className = 'number-counter';

    const statsData = [
        { number: '150+', text: 'Projects Completed' },
        { number: '25+', text: 'Agricultural Clients' },
        { number: '500+', text: 'Flight Hours' },
        { number: '1000+', text: 'Acres Surveyed' }
    ];

    statsData.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'counter-item';

        const number = document.createElement('div');
        number.className = 'counter-number';
        number.textContent = stat.number;

        const text = document.createElement('div');
        text.className = 'counter-text';
        text.textContent = stat.text;

        statItem.appendChild(number);
        statItem.appendChild(text);

        statsSection.appendChild(statItem);
    });

    container.appendChild(statsSection);
    section.appendChild(container);

    // Add the services section to the wrapper
    wrapper.appendChild(section);

    // Create the parallax section
    const parallaxSection = document.createElement('div');
    parallaxSection.className = 'parallax-section fade-in';
    parallaxSection.style.backgroundImage = "url('assets/image/drone_above_cropField.jpeg')";
    parallaxSection.style.height = "350px";

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'parallax-overlay';

    // Create content
    const parallaxContent = document.createElement('div');
    parallaxContent.className = 'parallax-content';

    const parallaxTitle = document.createElement('h2');
    parallaxTitle.className = 'parallax-title';
    parallaxTitle.style.fontSize = "32px";
    parallaxTitle.textContent = 'Transforming Agriculture with Drone Technology';

    const parallaxText = document.createElement('p');
    parallaxText.className = 'parallax-text';
    parallaxText.style.fontSize = "16px";
    parallaxText.style.margin = "0 auto 20px";
    parallaxText.textContent = 'Our drone solutions provide farmers with unprecedented insights into their fields, helping to optimize crop yields, reduce costs, and enhance sustainability.';

    const parallaxButton = document.createElement('a');
    parallaxButton.href = '#contact';
    parallaxButton.className = 'button';
    parallaxButton.style.padding = "12px 24px";
    parallaxButton.style.fontSize = "15px";
    parallaxButton.textContent = 'Get Started';

    parallaxContent.appendChild(parallaxTitle);
    parallaxContent.appendChild(parallaxText);
    parallaxContent.appendChild(parallaxButton);

    parallaxSection.appendChild(overlay);
    parallaxSection.appendChild(parallaxContent);

    // Add the parallax section to the wrapper
    wrapper.appendChild(parallaxSection);

    // Add the scroll animation observer
    setTimeout(() => {
        const fadeElements = wrapper.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }, 100);

    return wrapper;
};

// Modified parallax section creation to avoid heavy animations
const createParallaxSection = () => {
    const section = document.createElement('section');
    section.className = 'parallax-section fade-in';

    // Simplified markup for better performance
    section.innerHTML = `
        <div class="parallax-overlay"></div>
        <div class="container">
            <div class="parallax-content">
                <h2 class="parallax-title text-center">Transform Your Agricultural Operations</h2>
                <p class="parallax-text text-center">Our advanced drone technology provides the data you need to make informed decisions, reduce costs, and improve yields.</p>
                <div class="text-center">
                    <a href="#contact" class="button">Schedule a Consultation</a>
                </div>
            </div>
        </div>
    `;

    return section;
};

// In section2.js, consolidate the multiple observers into a single one
document.addEventListener('DOMContentLoaded', () => {
    // Use a single observer for all sections to improve performance
    window.globalScrollObserver = window.globalScrollObserver || new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                window.globalScrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Initialize any section-specific code if needed
});

// Export the function to create the section
export default createServicesSection; 