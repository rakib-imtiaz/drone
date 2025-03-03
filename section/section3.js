// Section 3 Component
document.addEventListener('DOMContentLoaded', () => {
    const section3Container = document.getElementById('section3-container');
    
    // If container exists, render the section
    if (section3Container) {
        renderSection3();
        
        // Delay fade-in initialization to distribute processing load
        setTimeout(() => {
            initializeFadeIn();
        }, 200);
    }
});

// Use the global observer if available, or create a lightweight one
function initializeFadeIn() {
    const fadeElements = document.querySelectorAll('#section3-container .fade-in');
    
    // Use global observer if it exists (created in section2.js)
    if (window.globalScrollObserver) {
        fadeElements.forEach((element, index) => {
            // Stagger observations to prevent performance spikes
            setTimeout(() => {
                window.globalScrollObserver.observe(element);
            }, index * 15);
        });
        return;
    }
    
    // Fallback to creating a simple observer if global one doesn't exist
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

function renderSection3() {
    const section3Container = document.getElementById('section3-container');
    
    const section3HTML = `
        <!-- Testimonials Section -->
        <section id="testimonials" class="section fade-in">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-title">What Our <span class="text-gradient-green">Clients Say</span></h2>
                    <p class="section-subtitle">Hear from farm owners who have transformed their operations with our drone services.</p>
                </div>
                
                <div class="grid-3 testimonials-grid">
                    <!-- Simplified testimonials with reduced animation -->
                    <div class="testimonial-card">
                        <div class="testimonial-quote">
                            "Sequoia's drone crop monitoring has saved us thousands in potential losses by detecting irrigation issues early. The thermal imaging is incredibly precise."
                        </div>
                        <div class="testimonial-author">
                            <div class="testimonial-avatar">
                                <img src="assets/image/farmer1.jpg" alt="Robert Johnson">
                            </div>
                            <div class="testimonial-info">
                                <h4>Robert Johnson</h4>
                                <p>Wheat Farm Owner</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Additional testimonials unchanged -->
                    <!-- ... existing code ... -->
                </div>
            </div>
        </section>
        
        <!-- Call to Action Section - Simplified for performance -->
        <section id="cta" class="section fade-in">
            <div class="container">
                <div class="ctaSection">
                    <h2 class="ctaTitle">Ready to Elevate Your Farm's Productivity?</h2>
                    <p class="ctaText">Schedule a consultation with our drone specialists and discover how our services can transform your agricultural operations.</p>
                    <a href="#contact" class="ctaButton">Contact Us Today</a>
                </div>
            </div>
        </section>
    `;
    
    section3Container.innerHTML = section3HTML;
    
    // Add simpler styles for better performance
    const style = document.createElement('style');
    style.textContent = `
        /* Optimize testimonial section for performance */
        .testimonials-grid {
            gap: 20px;
        }
        
        /* Preload testimonial images to prevent layout shifts */
        .testimonial-avatar img {
            width: 45px;
            height: 45px;
            object-fit: cover;
        }
        
        /* Optimize CTA section */
        .ctaSection {
            background-color: rgba(255, 255, 255, 0.85);
            padding: 35px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            margin-top: 50px;
            border: 1px solid rgba(71, 181, 120, 0.15);
        }
        
        .ctaTitle {
            color: var(--text-dark);
            font-size: 30px;
            margin-bottom: 15px;
        }
        
        .ctaText {
            color: var(--text-dark-muted);
            font-size: 17px;
            margin: 0 auto 25px;
            max-width: 700px;
        }
        
        .ctaButton {
            background-color: var(--primary-color);
            color: var(--text-dark);
            font-size: 16px;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 25px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
        }
        
        .ctaButton:hover {
            background-color: var(--primary-hover);
            transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
            .testimonials-grid {
                grid-template-columns: 1fr;
            }
            
            .ctaTitle {
                font-size: 24px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Testimonials and Call-to-Action Section
const createTestimonialsSection = () => {
    const wrapper = document.createElement('div');
    
    // Create the testimonials section
    const section = document.createElement('section');
    section.id = 'testimonials';
    section.className = 'section fade-in';
    
    // Create background pattern element
    const pattern = document.createElement('div');
    pattern.className = 'leaf-pattern';
    section.appendChild(pattern);
    
    const container = document.createElement('div');
    container.className = 'container section-content';
    
    // Testimonials header
    const titleDiv = document.createElement('div');
    titleDiv.className = 'text-center';
    
    const title = document.createElement('h2');
    title.className = 'section-title';
    title.style.fontSize = '28px';
    title.style.marginBottom = '10px';
    title.innerHTML = 'Client <span class="text-gradient">Testimonials</span>';
    
    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.style.fontSize = '14px';
    subtitle.style.maxWidth = '600px';
    subtitle.style.margin = '0 auto 25px';
    subtitle.textContent = 'Hear what our clients have to say about our drone services and solutions.';
    
    titleDiv.appendChild(title);
    titleDiv.appendChild(subtitle);
    container.appendChild(titleDiv);
    
    // Testimonials grid
    const testimonialGrid = document.createElement('div');
    testimonialGrid.className = 'grid-3';
    testimonialGrid.style.gap = '15px';
    
    // Testimonial data
    const testimonials = [
        {
            quote: "Sequoia Drone Services provided invaluable insights for our farm through their aerial mapping. The data helped us optimize irrigation and identify problem areas we couldn't see from the ground.",
            name: "Robert Johnson",
            position: "Farm Owner, Iowa"
        },
        {
            quote: "The aerial photography for our real estate listings has been a game-changer. Properties with Sequoia's drone footage sell 30% faster than those without. Simply outstanding service.",
            name: "Sarah Williams",
            position: "Real Estate Broker"
        },
        {
            quote: "Their thermal imaging services helped us identify heat leaks in our solar farm that were causing efficiency issues. Professional, prompt, and extremely knowledgeable team.",
            name: "Michael Chen",
            position: "Solar Energy Manager"
        }
    ];
    
    // Create testimonial cards
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.style.padding = '15px';
        testimonialCard.style.borderRadius = '8px';
        testimonialCard.style.backdropFilter = 'blur(10px)';
        testimonialCard.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        testimonialCard.style.border = '1px solid rgba(71, 181, 120, 0.15)';
        
        const quoteText = document.createElement('p');
        quoteText.className = 'testimonial-quote';
        quoteText.style.fontSize = '13px';
        quoteText.style.marginBottom = '15px';
        quoteText.textContent = `"${testimonial.quote}"`;
        
        const authorDiv = document.createElement('div');
        authorDiv.className = 'testimonial-author';
        
        // Placeholder for avatar (can be replaced with actual client photos if available)
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'testimonial-avatar';
        avatarDiv.style.width = '35px';
        avatarDiv.style.height = '35px';
        
        const avatarInitial = document.createElement('div');
        avatarInitial.style.width = '100%';
        avatarInitial.style.height = '100%';
        avatarInitial.style.backgroundColor = 'var(--agri-green-medium)';
        avatarInitial.style.color = 'white';
        avatarInitial.style.display = 'flex';
        avatarInitial.style.alignItems = 'center';
        avatarInitial.style.justifyContent = 'center';
        avatarInitial.style.fontWeight = 'bold';
        avatarInitial.style.fontSize = '13px';
        avatarInitial.textContent = testimonial.name.charAt(0);
        
        avatarDiv.appendChild(avatarInitial);
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'testimonial-info';
        
        const authorName = document.createElement('h4');
        authorName.style.fontSize = '14px';
        authorName.style.marginBottom = '3px';
        authorName.textContent = testimonial.name;
        
        const authorPosition = document.createElement('p');
        authorPosition.style.fontSize = '12px';
        authorPosition.textContent = testimonial.position;
        
        infoDiv.appendChild(authorName);
        infoDiv.appendChild(authorPosition);
        
        authorDiv.appendChild(avatarDiv);
        authorDiv.appendChild(infoDiv);
        
        testimonialCard.appendChild(quoteText);
        testimonialCard.appendChild(authorDiv);
        
        testimonialGrid.appendChild(testimonialCard);
    });
    
    container.appendChild(testimonialGrid);
    
    // Call to Action Section
    const ctaSection = document.createElement('div');
    ctaSection.className = 'text-center';
    ctaSection.style.marginTop = '50px';
    ctaSection.style.padding = '35px';
    ctaSection.style.backgroundColor = 'rgba(20, 20, 20, 0.7)';
    ctaSection.style.borderRadius = '15px';
    ctaSection.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    ctaSection.style.backdropFilter = 'none';
    ctaSection.style.border = '1px solid rgba(255, 255, 255, 0.05)';
    
    const ctaTitle = document.createElement('h2');
    ctaTitle.className = 'section-title';
    ctaTitle.style.marginBottom = '15px';
    ctaTitle.style.fontSize = '30px';
    ctaTitle.style.color = 'var(--text-light)';
    ctaTitle.innerHTML = 'Ready to Elevate Your Perspective?';
    
    const ctaText = document.createElement('p');
    ctaText.style.fontSize = '17px';
    ctaText.style.maxWidth = '700px';
    ctaText.style.margin = '0 auto 25px';
    ctaText.style.lineHeight = '1.6';
    ctaText.style.color = 'var(--text-light)';
    ctaText.textContent = 'Contact us today to discuss how our drone services can help your business or project reach new heights.';
    
    const ctaButton = document.createElement('a');
    ctaButton.href = '#contact';
    ctaButton.className = 'button green-button';
    ctaButton.textContent = 'Get Started';
    ctaButton.style.fontSize = '16px';
    ctaButton.style.padding = '12px 24px';
    ctaButton.style.backgroundColor = 'var(--agri-green-medium)';
    
    ctaSection.appendChild(ctaTitle);
    ctaSection.appendChild(ctaText);
    ctaSection.appendChild(ctaButton);
    
    container.appendChild(ctaSection);
    section.appendChild(container);
    
    // Add the testimonials section to the wrapper
    wrapper.appendChild(section);
    
    // Add styling to make section match the parallax theme
    const style = document.createElement('style');
    style.textContent = `
        /* Remove the green gradient and use semi-transparent dark background */
        #testimonials {
            background-color: rgba(20, 20, 20, 0.7);
            backdrop-filter: none;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            margin: 0;
            padding: 40px 0;
        }
        
        /* Update testimonial cards to match the dark theme */
        .testimonial-card {
            background-color: rgba(30, 30, 30, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: none;
        }
        
        /* Update CTA section to match the semi-transparent theme */
        .cta-section {
            background-color: rgba(20, 20, 20, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--text-light);
        }
        
        .cta-section h2, .cta-section p {
            color: var(--text-light);
        }
    `;
    document.head.appendChild(style);
    
    // Create a second parallax section
    const parallaxSection = document.createElement('div');
    parallaxSection.className = 'parallax-section fade-in';
    parallaxSection.style.backgroundImage = "url('assets/image/drone_above_soyabean_field.jpeg')";
    parallaxSection.style.minHeight = '250px';
    parallaxSection.style.padding = '60px 0';
    parallaxSection.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'parallax-overlay';
    overlay.style.background = 'linear-gradient(to right, rgba(26, 81, 46, 0.8), rgba(10, 10, 10, 0.6))';
    
    // Create content
    const parallaxContent = document.createElement('div');
    parallaxContent.className = 'parallax-content';
    parallaxContent.style.maxWidth = '800px';
    parallaxContent.style.position = 'relative';
    parallaxContent.style.zIndex = '2';
    
    const parallaxTitle = document.createElement('h2');
    parallaxTitle.className = 'parallax-title';
    parallaxTitle.style.fontSize = '28px';
    parallaxTitle.style.marginBottom = '15px';
    parallaxTitle.style.textAlign = 'center';
    parallaxTitle.textContent = 'Precision Agriculture at Your Fingertips';
    
    const parallaxText = document.createElement('p');
    parallaxText.className = 'parallax-text';
    parallaxText.style.fontSize = '14px';
    parallaxText.style.marginBottom = '25px';
    parallaxText.style.maxWidth = '600px';
    parallaxText.style.margin = '0 auto 25px';
    parallaxText.style.textAlign = 'center';
    parallaxText.textContent = 'Our advanced drone technology delivers accurate, actionable data to help farmers make informed decisions and maximize their yields.';
    
    const parallaxButton = document.createElement('a');
    parallaxButton.href = '#contact';
    parallaxButton.className = 'button';
    parallaxButton.style.padding = '8px 18px';
    parallaxButton.style.fontSize = '13px';
    parallaxButton.style.borderRadius = '25px';
    parallaxButton.style.display = 'inline-block';
    parallaxButton.style.margin = '0 auto';
    parallaxButton.textContent = 'Contact Us Now';
    
    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.textAlign = 'center';
    buttonWrapper.appendChild(parallaxButton);
    
    parallaxContent.appendChild(parallaxTitle);
    parallaxContent.appendChild(parallaxText);
    parallaxContent.appendChild(buttonWrapper);
    
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

// Export the function to create the section
export default createTestimonialsSection; 