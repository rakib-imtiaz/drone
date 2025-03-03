// Footer Component with Contact Section
document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        renderFooter();
    }
});

function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    
    // Create the contact section
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    contactSection.className = 'section section-dark';

    const contactContainer = document.createElement('div');
    contactContainer.className = 'container';

    // Contact section title
    const contactTitleDiv = document.createElement('div');
    contactTitleDiv.className = 'text-center';
    
    const contactTitle = document.createElement('h2');
    contactTitle.className = 'section-title';
    contactTitle.innerHTML = 'Contact <span class="text-gradient">Us</span>';
    
    const contactSubtitle = document.createElement('p');
    contactSubtitle.className = 'section-subtitle';
    contactSubtitle.textContent = 'Get in touch with our team to discuss your drone service needs.';
    
    contactTitleDiv.appendChild(contactTitle);
    contactTitleDiv.appendChild(contactSubtitle);
    contactContainer.appendChild(contactTitleDiv);

    // Contact content - Two columns (form and info)
    const contactContent = document.createElement('div');
    contactContent.className = 'grid-2';

    // Contact form column
    const formCol = document.createElement('div');

    const contactForm = document.createElement('form');
    contactForm.id = 'contactForm';
    contactForm.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    contactForm.style.padding = '40px';
    contactForm.style.borderRadius = '15px';

    // Form fields
    const formFields = [
        { id: 'name', type: 'text', label: 'Your Name', placeholder: 'Enter your name' },
        { id: 'email', type: 'email', label: 'Email Address', placeholder: 'Enter your email' },
        { id: 'phone', type: 'tel', label: 'Phone Number', placeholder: 'Enter your phone number' },
        { id: 'service', type: 'select', label: 'Service Interested In', 
            options: [
                'Select a service',
                'Photography & Videography',
                'Mapping & Agriculture',
                'Thermal Imaging',
                'Real Estate Photography',
                'Municipal Applications',
                'Events & Livestreaming',
                'Other'
            ]
        },
        { id: 'message', type: 'textarea', label: 'Your Message', placeholder: 'Tell us about your project needs' }
    ];

    formFields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.style.marginBottom = '20px';

        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        label.style.display = 'block';
        label.style.marginBottom = '5px';
        label.style.color = '#fff';
        
        formGroup.appendChild(label);

        if (field.type === 'textarea') {
            const textarea = document.createElement('textarea');
            textarea.id = field.id;
            textarea.name = field.id;
            textarea.placeholder = field.placeholder;
            textarea.rows = 5;
            textarea.style.width = '100%';
            textarea.style.padding = '12px';
            textarea.style.borderRadius = '5px';
            textarea.style.border = 'none';
            textarea.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            textarea.style.color = '#fff';
            formGroup.appendChild(textarea);
        } else if (field.type === 'select') {
            const select = document.createElement('select');
            select.id = field.id;
            select.name = field.id;
            select.style.width = '100%';
            select.style.padding = '12px';
            select.style.borderRadius = '5px';
            select.style.border = 'none';
            select.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            select.style.color = '#fff';

            field.options.forEach(optionText => {
                const option = document.createElement('option');
                option.value = optionText === 'Select a service' ? '' : optionText;
                option.textContent = optionText;
                select.appendChild(option);
            });

            formGroup.appendChild(select);
        } else {
            const input = document.createElement('input');
            input.type = field.type;
            input.id = field.id;
            input.name = field.id;
            input.placeholder = field.placeholder;
            input.style.width = '100%';
            input.style.padding = '12px';
            input.style.borderRadius = '5px';
            input.style.border = 'none';
            input.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            input.style.color = '#fff';
            formGroup.appendChild(input);
        }

        contactForm.appendChild(formGroup);
    });

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Message';
    submitButton.className = 'button';
    submitButton.style.width = '100%';
    submitButton.style.marginTop = '10px';

    contactForm.appendChild(submitButton);
    formCol.appendChild(contactForm);

    // Contact info column
    const infoCol = document.createElement('div');
    infoCol.style.display = 'flex';
    infoCol.style.flexDirection = 'column';
    infoCol.style.justifyContent = 'space-between';

    // Contact info content
    const contactInfo = document.createElement('div');
    
    const infoTitle = document.createElement('h3');
    infoTitle.textContent = 'Contact Information';
    infoTitle.style.fontSize = '24px';
    infoTitle.style.marginBottom = '20px';
    
    contactInfo.appendChild(infoTitle);

    // Contact details
    const contactDetails = [
        { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V11a1 1 0 0 1 1-1z', text: '123 Drone Avenue, San Francisco, CA 94107' },
        { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z', text: '(555) 123-4567' },
        { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', text: 'info@sequoiadrones.com' },
        { icon: 'M12 2a10 10 0 0 0-7.743 16.33h.012l.209.21a10.003 10.003 0 0 0 15.044-13.046A10 10 0 0 0 12 2zm-1 5a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V7zm1 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z', text: 'Available 7 days a week, 9AM-6PM' }
    ];

    contactDetails.forEach(detail => {
        const infoItem = document.createElement('div');
        infoItem.style.display = 'flex';
        infoItem.style.marginBottom = '20px';
        
        // Create SVG icon
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '24');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.style.flexShrink = '0';
        svg.style.marginRight = '15px';
        svg.style.color = 'var(--primary-color)';
        
        // Add the path to the SVG
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', detail.icon);
        svg.appendChild(path);
        
        const infoText = document.createElement('p');
        infoText.textContent = detail.text;
        
        infoItem.appendChild(svg);
        infoItem.appendChild(infoText);
        
        contactInfo.appendChild(infoItem);
    });

    // Social media links
    const socialDiv = document.createElement('div');
    socialDiv.style.marginTop = '40px';
    
    const socialTitle = document.createElement('h4');
    socialTitle.textContent = 'Follow Us';
    socialTitle.style.marginBottom = '15px';
    
    const socialLinks = document.createElement('div');
    socialLinks.style.display = 'flex';
    socialLinks.style.gap = '15px';
    
    // Social media icons
    const socialIcons = [
        { platform: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
        { platform: 'Twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
        { platform: 'Instagram', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 7.69A1.19 1.19 0 1 1 16.31 6.5 1.19 1.19 0 0 1 17.5 7.69z M21.08 8.29v7.42A5.38 5.38 0 0 1 15.71 21H8.29A5.38 5.38 0 0 1 3 15.71V8.29A5.38 5.38 0 0 1 8.29 3h7.42A5.38 5.38 0 0 1 21.08 8.29z' },
        { platform: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' }
    ];
    
    socialIcons.forEach(social => {
        const socialLink = document.createElement('a');
        socialLink.href = '#';
        socialLink.title = social.platform;
        socialLink.style.display = 'flex';
        socialLink.style.alignItems = 'center';
        socialLink.style.justifyContent = 'center';
        socialLink.style.width = '40px';
        socialLink.style.height = '40px';
        socialLink.style.borderRadius = '50%';
        socialLink.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        socialLink.style.transition = 'var(--transition)';
        
        // Create SVG icon
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '20');
        svg.setAttribute('height', '20');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        
        // Add the path to the SVG
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', social.icon);
        svg.appendChild(path);
        
        socialLink.appendChild(svg);
        socialLinks.appendChild(socialLink);
    });
    
    socialDiv.appendChild(socialTitle);
    socialDiv.appendChild(socialLinks);
    
    contactInfo.appendChild(socialDiv);
    infoCol.appendChild(contactInfo);

    // Add columns to contact content
    contactContent.appendChild(formCol);
    contactContent.appendChild(infoCol);

    contactContainer.appendChild(contactContent);
    contactSection.appendChild(contactContainer);

    // Create the footer
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#080808';
    footer.style.padding = '30px 0';
    footer.style.color = 'rgba(255, 255, 255, 0.7)';
    footer.style.textAlign = 'center';

    const footerInnerContainer = document.createElement('div');
    footerInnerContainer.className = 'container';

    const footerContent = document.createElement('div');
    footerContent.style.display = 'flex';
    footerContent.style.justifyContent = 'space-between';
    footerContent.style.alignItems = 'center';
    footerContent.style.flexWrap = 'wrap';

    // Footer logo
    const footerLogo = document.createElement('div');
    footerLogo.style.marginBottom = '20px';
    
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    logoLink.className = 'logo';
    logoLink.style.fontSize = '24px';
    logoLink.style.fontWeight = 'bold';
    logoLink.style.color = '#fff';
    
    const logoText = document.createElement('span');
    logoText.className = 'logo-text';
    logoText.textContent = 'Sequoia';
    
    logoLink.appendChild(logoText);
    footerLogo.appendChild(logoLink);

    // Footer nav
    const footerNav = document.createElement('ul');
    footerNav.style.display = 'flex';
    footerNav.style.gap = '30px';
    footerNav.style.listStyle = 'none';
    footerNav.style.margin = '0';
    footerNav.style.padding = '0';
    footerNav.style.flexWrap = 'wrap';
    footerNav.style.justifyContent = 'center';
    footerNav.style.marginBottom = '20px';

    const navItems = [
        { text: 'Home', link: '#' },
        { text: 'Services', link: '#services' },
        { text: 'Real Estate', link: '#real-estate' },
        { text: 'Municipal', link: '#municipal' },
        { text: 'Events', link: '#events' },
        { text: 'Contact Us', link: '#contact' }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.text;
        a.style.color = 'rgba(255, 255, 255, 0.7)';
        a.style.transition = 'var(--transition)';
        
        a.addEventListener('mouseenter', () => {
            a.style.color = 'var(--primary-color)';
        });
        
        a.addEventListener('mouseleave', () => {
            a.style.color = 'rgba(255, 255, 255, 0.7)';
        });
        
        li.appendChild(a);
        footerNav.appendChild(li);
    });

    // Copyright
    const copyright = document.createElement('div');
    copyright.style.width = '100%';
    copyright.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
    copyright.style.paddingTop = '20px';
    copyright.style.marginTop = '20px';
    copyright.style.fontSize = '14px';
    
    const currentYear = new Date().getFullYear();
    copyright.textContent = `© ${currentYear} Sequoia Drone Services. All rights reserved.`;

    // Combine all elements
    footerContent.appendChild(footerLogo);
    footerContent.appendChild(footerNav);
    footerContent.appendChild(copyright);

    footerInnerContainer.appendChild(footerContent);
    footer.appendChild(footerInnerContainer);

    // Append the contact section and footer to the footer container
    footerContainer.appendChild(contactSection);
    footerContainer.appendChild(footer);
} 