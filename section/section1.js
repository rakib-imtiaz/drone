// Hero Section Component
document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.getElementById('hero-container');
    
    if (heroContainer) {
        renderHeroSection();
        createStars();
        setupHeroAnimation();
    }
});

function renderHeroSection() {
    const heroContainer = document.getElementById('hero-container');
    
    const heroHTML = `
        <section class="hero section-hero">
            <div class="hero-stars" id="stars-container"></div>
            
            
            <div class="hero-container">
                <div class="hero-content">
                    <h1 class="hero-title">SEQUOIA <span class="gradient-text">DRONE SERVICES</span></h1>
                    <p class="hero-subtitle">Advanced drone solutions for modern agriculture. Optimize your farm operations with precision aerial technology.</p>
                    <div class="hero-cta">
                        <a href="#services" class="hero-button">Explore Services</a>
                        <a href="#contact" class="hero-button hero-button-secondary">Contact Us</a>
                    </div>
                </div>
                
                <div class="drone-display" id="drone-model-container">
                    <!-- Loading animation -->
                    <div class="drone-loader" id="drone-loader">
                        <div class="drone-loader-spinner"></div>
                        <div class="drone-loader-text">Loading Model</div>
                    </div>
                    
                    <!-- Fallback image while loading -->
                    <img src="assets/image/drone_fall_back_image.png" alt="Drone" class="drone-fallback-image" id="drone-fallback-image">
                    
                    <!-- 3D model will be loaded here -->
                    <div class="drone-shadow"></div>
                    <div id="touch-instruction" class="touch-instruction">Drag to rotate</div>
                </div>
                
                <div class="hero-feature-cards">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                        </div>
                        <div class="feature-text">
                            <h3 class="feature-title">Crop Monitoring</h3>
                            <p class="feature-description">Regular aerial monitoring to identify crop health issues before they escalate</p>
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div class="feature-text">
                            <h3 class="feature-title">Precision Spraying</h3>
                            <p class="feature-description">Targeted application of fertilizers and pesticides, reducing costs and environmental impact</p>
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path>
                            </svg>
                        </div>
                        <div class="feature-text">
                            <h3 class="feature-title">Thermal Analysis</h3>
                            <p class="feature-description">Identify irrigation issues and pest infestations with advanced thermal imaging</p>
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                <line x1="8" y1="2" x2="8" y2="18"></line>
                                <line x1="16" y1="6" x2="16" y2="22"></line>
                            </svg>
                        </div>
                        <div class="feature-text">
                            <h3 class="feature-title">Field Mapping</h3>
                            <p class="feature-description">Detailed topographical and crop health mapping for data-driven farming decisions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    heroContainer.innerHTML = heroHTML;
    
    // Add styles for the secondary button and scaled-down hero section
    const style = document.createElement('style');
    style.textContent = `
        /* Section hero styling - solid black background */
        .section-hero {
            background-color: var(--bg-dark);
            position: relative;
            z-index: 5;
        }
        
        /* Override any transparency for the hero section */
        .section-hero::before,
        .section-hero::after {
            display: none;
        }
        
        /* Scaling down the hero section to approximately 70% */
        .hero {
            min-height: 70vh;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            padding: 80px 0 50px; /* Increased top padding to prevent navbar overlap */
            background-color: var(--bg-dark); /* Solid black background */
            z-index: 2; /* Ensure hero is above the body's fixed background */
        }
        
        /* Create a solid background that blocks the site-wide fixed background */
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--bg-dark);
            z-index: -1;
        }
        
        .hero-container {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 15px;
            position: relative;
            z-index: 1;
        }
        
        .hero-watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 70px;
            font-weight: 900;
            color: rgba(255, 255, 255, 0.03);
            white-space: nowrap;
            z-index: 0;
            letter-spacing: 10px;
        }
        
        .hero-content {
            text-align: center; /* Center the hero content */
            margin-top: 15px; /* Add some top margin */
        }
        
        .hero-title {
            font-size: 42px;
            margin-bottom: 15px;
            line-height: 1.1;
            letter-spacing: 1px;
            text-align: center; /* Center the title */
        }
        
        .hero-subtitle {
            font-size: 14px;
            margin-bottom: 25px;
            max-width: 500px;
            opacity: 0.9;
            margin-left: auto;
            margin-right: auto; /* Center the subtitle */
            text-align: center;
        }
        
        .hero-cta {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            justify-content: center; /* Center the buttons */
        }
        
        .hero-button {
            padding: 8px 18px;
            border-radius: 25px;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .hero-button-secondary {
            background: transparent;
            border: 2px solid var(--primary-color);
            margin-left: 7px;
            color: var(--primary-color);
        }
        
        .hero-button-secondary:hover {
            background: var(--primary-color);
            color: var(--text-dark);
        }
        
        .drone-display {
            width: 100%;
            height: 180px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
        }
        
        /* Add styling for the drone loader */
        .drone-loader {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 8px;
            z-index: 10;
            transition: opacity 0.5s ease;
        }
        
        /* Styling for fallback image */
        .drone-fallback-image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 80%;
            max-height: 80%;
            z-index: 1;
            opacity: 1;
            transition: opacity 0.5s ease;
            animation: float 2s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% {
                transform: translate(-50%, -50%);
            }
            50% {
                transform: translate(-50%, -55%);
            }
        }
        
        .drone-loader-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(248, 193, 101, 0.2);
            border-top-color: var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }
        
        .drone-loader-text {
            color: var(--primary-color);
            font-size: 14px;
            font-weight: 500;
            text-align: center;
        }
        
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
        
        .drone-shadow {
            position: absolute;
            bottom: -10px;
            width: 60%;
            height: 10px;
            background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 70%);
            border-radius: 50%;
            z-index: -1;
        }
        
        .touch-instruction {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255, 255, 255, 0.6);
            font-size: 12px;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 4px 10px;
            border-radius: 15px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .hero-feature-cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin-top: 30px;
        }
        
        .feature-card {
            background-color: rgba(17, 17, 17, 0.7);
            border-radius: 10px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            background-color: rgba(20, 20, 20, 0.8);
            border-color: rgba(255, 255, 255, 0.1);
        }
        
        .feature-icon {
            width: 35px;
            height: 35px;
            margin-bottom: 10px;
        }
        
        .feature-icon svg {
            width: 100%;
            height: 100%;
        }
        
        .feature-title {
            font-size: 13px;
            margin-bottom: 6px;
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .feature-description {
            font-size: 11px;
            opacity: 0.8;
            line-height: 1.4;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 32px;
                text-align: center;
            }
            
            .hero-subtitle {
                font-size: 13px;
                text-align: center;
                margin: 0 auto 20px;
            }
            
            .hero-cta {
                flex-direction: column;
                align-items: center;
            }
            
            .hero-button {
                margin-bottom: 8px;
                width: 100%;
                text-align: center;
            }
            
            .hero-button-secondary {
                margin-left: 0;
            }
            
            .hero-feature-cards {
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }
            
            .feature-card {
                margin-bottom: 10px;
            }
            
            .drone-display {
                height: 160px;
            }
            
            .hero {
                padding-top: 60px; /* Adjusted padding for mobile */
            }
        }
        
        @media (max-width: 480px) {
            .hero-title {
                font-size: 28px;
            }
            
            .hero-container {
                padding: 15px;
            }
            
            .hero-watermark {
                font-size: 50px;
            }
            
            .hero-feature-cards {
                grid-template-columns: 1fr;
            }
            
            .drone-display {
                height: 150px;
            }
            
            .hero {
                padding-top: 50px; /* Further adjusted padding for smaller devices */
            }
        }
    `;
    document.head.appendChild(style);
}

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    // Create random stars
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random opacity
        star.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Add star to container
        starsContainer.appendChild(star);
    }
}

function setupHeroAnimation() {
    // Get drone container and loader
    const container = document.getElementById('drone-model-container');
    const droneLoader = document.getElementById('drone-loader');
    const touchInstruction = document.getElementById('touch-instruction');
    const fallbackImage = document.getElementById('drone-fallback-image');
    
    // Make sure loader elements exist
    if (!container) return;
    
    // Ensure the loader is visible before loading starts
    if (droneLoader) {
        droneLoader.style.display = 'flex';
        droneLoader.style.opacity = '1';
        if (droneLoader.querySelector('.drone-loader-text')) {
            droneLoader.querySelector('.drone-loader-text').textContent = 'Loading Model 0%';
        }
    }
    
    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.error('Three.js is not loaded');
        loadFallbackImage();
        return;
    }
    
    // Check for mobile or low-power devices to reduce quality if needed
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const shouldReduceQuality = isMobile || isLowEnd;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Create a renderer with proper settings
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: !shouldReduceQuality, // Disable antialiasing on low-end devices
        powerPreference: isMobile ? 'low-power' : 'high-performance' 
    });
    
    // Fix to ensure the renderer is properly sized
    container.style.width = '100%';
    container.style.height = '180px';
    container.style.position = 'relative';
    
    // Set pixel ratio for better performance on mobile
    const pixelRatio = shouldReduceQuality ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio;
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    
    // Other renderer options
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = !shouldReduceQuality; // Disable shadows on mobile for performance
    if (!shouldReduceQuality) {
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    
    // Make sure the renderer is added to the container
    container.innerHTML = ''; // Clear any existing content
    container.appendChild(renderer.domElement);

    // Camera setup - use wider field of view on mobile for better experience
    const camera = new THREE.PerspectiveCamera(
        isMobile ? 55 : 45, 
        container.clientWidth / container.clientHeight, 
        0.1, 
        1000
    );
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    // Adjusted lighting for mobile devices (fewer lights for better performance)
    const ambientLight = new THREE.AmbientLight(0xffffff, shouldReduceQuality ? 0.7 : 0.5);
    scene.add(ambientLight);

    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, shouldReduceQuality ? 1.2 : 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = !shouldReduceQuality;
    scene.add(directionalLight);

    // Only add these additional lights on higher-end devices
    if (!shouldReduceQuality) {
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight2.position.set(-5, 5, -5);
        scene.add(directionalLight2);

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.3);
        scene.add(hemisphereLight);
    }

    // Scene background for better texture matching
    const bgColor = new THREE.Color(0x0e0e0e); // Match with dark background
    scene.background = new THREE.Color(bgColor);
    
    // Only add fog on higher-end devices
    if (!shouldReduceQuality) {
        scene.fog = new THREE.Fog(bgColor, 20, 100);
    }

    // Mouse controls variables
    let isDragging = false;
    let previousMousePosition = {
        x: 0,
        y: 0
    };
    let targetRotation = {
        x: 0,
        y: 0
    };
    let currentRotation = {
        x: 0,
        y: 0
    };
    
    // Variables for animation control
    let animationFrameId = null;
    let isVisible = true;
    let droneModel = null;

    // Set up visibility observer to pause rendering when not in view
    const heroObserver = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        
        if (isVisible && !animationFrameId) {
            // Resume rendering
            animationFrameId = requestAnimationFrame(animate);
        } else if (!isVisible && animationFrameId) {
            // Pause rendering to save resources
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }, { threshold: 0.1 });
    
    // Start observing the hero section
    const heroSection = document.querySelector('.section-hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
    
    // Loading progress tracking
    let loadingProgress = 0;
    const updateLoaderText = (progress) => {
        if (droneLoader && droneLoader.querySelector('.drone-loader-text')) {
            const percent = Math.round(progress * 100);
            droneLoader.querySelector('.drone-loader-text').textContent = `Loading Model ${percent}%`;
            
            // Optionally update loader appearance based on progress
            if (percent > 0) {
                // Make the spinner border reflect the loading progress
                const spinner = droneLoader.querySelector('.drone-loader-spinner');
                if (spinner) {
                    spinner.style.borderTopColor = `var(--primary-color)`;
                    // Could add more visual feedback here if desired
                }
            }
        }
    };
    
    // Simplified texture loading for better performance
    const textureLoader = new THREE.TextureLoader();
    
    // Load the base drone texture
    const droneTexture = textureLoader.load('assets/3d_model/FINAL_TEXTURE/FINAL_TEXTURE.png', 
        function(texture) {
            console.log('Drone texture loaded successfully');
            texture.flipY = false;
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        }
    );
    
    // Create material variants for DJI Mavic Pro look
    const createMavicMaterials = () => {
        const materialType = shouldReduceQuality ? 
                            THREE.MeshBasicMaterial : 
                            THREE.MeshStandardMaterial;
        
        // Main body material - dark gray with metallic finish
        const bodyMaterial = new materialType({
            color: 0x303030, // Dark gray like Mavic Pro
            map: droneTexture,
            metalness: shouldReduceQuality ? undefined : 0.7,
            roughness: shouldReduceQuality ? undefined : 0.3,
        });
        
        // Propeller material - darker with slight metallic sheen
        const propellerMaterial = new materialType({
            color: 0x202020, // Very dark gray/almost black
            metalness: shouldReduceQuality ? undefined : 0.5,
            roughness: shouldReduceQuality ? undefined : 0.4,
        });
        
        // Accent material for gold/copper highlights
        const accentMaterial = new materialType({
            color: 0xb8860b, // Dark golden color for accents
            metalness: shouldReduceQuality ? undefined : 0.8,
            roughness: shouldReduceQuality ? undefined : 0.2,
        });
        
        // Camera material - distinctive black glossy look
        const cameraMaterial = new materialType({
            color: 0x111111, // Almost black
            metalness: shouldReduceQuality ? undefined : 0.9,
            roughness: shouldReduceQuality ? undefined : 0.1,
        });
        
        // Arms material - slightly lighter than body
        const armMaterial = new materialType({
            color: 0x404040, // Lighter gray for arms
            map: droneTexture,
            metalness: shouldReduceQuality ? undefined : 0.6,
            roughness: shouldReduceQuality ? undefined : 0.4,
        });
        
        return {
            body: bodyMaterial,
            propeller: propellerMaterial,
            accent: accentMaterial,
            camera: cameraMaterial,
            arm: armMaterial
        };
    };
    
    // Load 3D model with appropriate quality settings
    const loader = new THREE.OBJLoader();
    
    // Show loading animation
    if (droneLoader) {
        droneLoader.style.display = 'flex';
    }
    
    loader.load(
        'assets/3d_model/drone.obj',
        (object) => {
            // Update loader to show 100% before hiding
            loadingProgress = 1.0;
            updateLoaderText(loadingProgress);
            
            // Hide loader after showing 100% for a moment
            if (droneLoader) {
                // Small delay to show the 100% complete
                setTimeout(() => {
                    // Fade out loader
                    droneLoader.style.opacity = '0';
                    
                    // Also hide fallback image
                    if (fallbackImage) {
                        fallbackImage.style.opacity = '0';
                    }
                    
                    setTimeout(() => {
                        droneLoader.style.display = 'none';
                        if (fallbackImage) {
                            fallbackImage.style.display = 'none';
                        }
                    }, 500);
                }, 800); // Show 100% for 800ms before fading
            }
            
            // Scale and position
            object.scale.set(0.05, 0.05, 0.05);
            object.position.set(0, 1, 0);
            
            // Get Mavic Pro materials
            const mavicMaterials = createMavicMaterials();
            
            // Apply materials to make it look like a DJI Mavic Pro
            object.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    // Determine which part of the drone this is
                    const name = child.name.toLowerCase();
                    
                    // Apply appropriate material based on part
                    if (name.includes('prop') || name.includes('blade') || name.includes('rotor')) {
                        // Propellers
                        child.material = mavicMaterials.propeller;
                    } 
                    else if (name.includes('cam') || name.includes('lens') || name.includes('gimbal')) {
                        // Camera parts
                        child.material = mavicMaterials.camera;
                    }
                    else if (name.includes('arm') || name.includes('leg') || (Math.abs(child.position.x) > 1 && child.position.y < 0.5)) {
                        // Arms and landing gear - based on position and name
                        child.material = mavicMaterials.arm;
                    }
                    else if (name.includes('accent') || name.includes('trim') || 
                            (child.geometry.boundingSphere && child.geometry.boundingSphere.radius < 0.2)) {
                        // Small accent parts
                        child.material = mavicMaterials.accent;
                    }
                    else {
                        // Main body parts - default
                        child.material = mavicMaterials.body;
                    }
                    
                    // Add shadows for higher quality rendering
                    if (!shouldReduceQuality) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                }
            });
            
            scene.add(object);
            droneModel = object;
            
            // Show usage instruction after model has loaded
            if (touchInstruction) {
                setTimeout(() => {
                    touchInstruction.style.opacity = 1;
                    
                    // Auto-hide instruction after 3 seconds
                    setTimeout(() => {
                        touchInstruction.style.opacity = 0;
                    }, 3000);
                }, 500);
            }
            
            // Animation loop
            const animate = function() {
                if (!isVisible) return;
                
                // Only continue animation loop if section is visible
                animationFrameId = requestAnimationFrame(animate);
                
                // Smoothly interpolate current rotation to target
                currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
                currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;
                
                // Apply rotation to model if it exists
                if (droneModel) {
                    droneModel.rotation.y = currentRotation.x;
                    droneModel.rotation.x = currentRotation.y;
                }
                
                // Render the scene
                renderer.render(scene, camera);
            };
            
            animate();
        },
        // Progress callback
        (xhr) => {
            loadingProgress = xhr.loaded / xhr.total;
            console.log((loadingProgress * 100) + '% loaded');
            updateLoaderText(loadingProgress);
        },
        // Error callback
        (error) => {
            console.error('An error happened while loading the model:', error);
            // Hide loader on error
            if (droneLoader) {
                droneLoader.style.display = 'none';
            }
            
            // Make sure fallback image is visible if loading fails
            if (fallbackImage) {
                fallbackImage.style.opacity = '1';
                fallbackImage.style.zIndex = '5';
                
                // Add floating animation
                if (typeof gsap !== 'undefined') {
                    gsap.to(fallbackImage, {
                        y: 15,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut"
                    });
                }
            } else {
                // If fallback image element doesn't exist for some reason
                loadFallbackImage();
            }
        }
    );

    // Fix mouse and touch events for drone rotation
    // Mouse events for desktop
    container.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mouseup', onMouseUp, false);
    window.addEventListener('mousemove', onMouseMove, false);
    
    // Touch events for mobile
    container.addEventListener('touchstart', onTouchStart, false);
    window.addEventListener('touchend', onTouchEnd, false);
    window.addEventListener('touchmove', onTouchMove, false);
    
    // Show touch instruction on mobile
    if (isMobile && touchInstruction) {
        touchInstruction.style.opacity = '1';
        setTimeout(() => {
            touchInstruction.style.opacity = '0';
        }, 3000);
    }
    
    // Mouse event handlers
    function onMouseDown(event) {
        event.preventDefault();
        isDragging = true;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        // Show instruction only on first interaction
        if (touchInstruction) {
            touchInstruction.style.opacity = '0';
        }
    }
    
    function onMouseUp(event) {
        event.preventDefault();
        isDragging = false;
    }
    
    function onMouseMove(event) {
        event.preventDefault();
        if (isDragging && droneModel) {
            const deltaMove = {
                x: event.clientX - previousMousePosition.x,
                y: event.clientY - previousMousePosition.y
            };
            
            // Update target rotation based on mouse movement
            targetRotation.y += deltaMove.x * 0.01;
            targetRotation.x += deltaMove.y * 0.01;
            
            // Limit vertical rotation to avoid gimbal lock
            targetRotation.x = Math.max(-Math.PI/3, Math.min(Math.PI/3, targetRotation.x));
            
            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        }
    }
    
    // Touch event handlers
    function onTouchStart(event) {
        event.preventDefault();
        if (event.touches.length === 1) {
            isDragging = true;
            previousMousePosition = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
            // Hide instruction on first touch
            if (touchInstruction) {
                touchInstruction.style.opacity = '0';
            }
        }
    }
    
    function onTouchEnd(event) {
        event.preventDefault();
        isDragging = false;
    }
    
    function onTouchMove(event) {
        event.preventDefault();
        if (isDragging && event.touches.length === 1 && droneModel) {
            const deltaMove = {
                x: event.touches[0].clientX - previousMousePosition.x,
                y: event.touches[0].clientY - previousMousePosition.y
            };
            
            // Update target rotation based on touch movement
            targetRotation.y += deltaMove.x * 0.01;
            targetRotation.x += deltaMove.y * 0.01;
            
            // Limit vertical rotation to avoid gimbal lock
            targetRotation.x = Math.max(-Math.PI/3, Math.min(Math.PI/3, targetRotation.x));
            
            previousMousePosition = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
        }
    }

    // Change cursor on hover to indicate interactivity
    container.style.cursor = 'grab';
    container.addEventListener('mousedown', function() {
        container.style.cursor = 'grabbing';
    });
    container.addEventListener('mouseup', function() {
        container.style.cursor = 'grab';
    });

    // Handle window resize - debounce for better performance
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }, 250);
    }, { passive: true });

    // Add GSAP animation for floating effect
    if (typeof gsap !== 'undefined') {
        gsap.to(container, {
            y: 15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Add this function call to properly clean up when leaving the page
    window.addEventListener('beforeunload', () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        
        if (heroObserver) {
            heroObserver.disconnect();
        }
        
        // Dispose of Three.js resources to prevent memory leaks
        if (renderer) {
            renderer.dispose();
        }
    });
}

function loadFallbackImage() {
    const container = document.getElementById('drone-model-container');
    const droneLoader = document.getElementById('drone-loader');
    
    if (!container) return;
    
    // Hide loader if it exists
    if (droneLoader) {
        droneLoader.style.display = 'none';
    }
    
    // Clear the container
    container.innerHTML = '';
    
    // Create fallback image
    const imgFallback = document.createElement('img');
    imgFallback.src = 'assets/drone_image3d.png';
    imgFallback.alt = 'DJI Mini 3 Pro Drone';
    imgFallback.className = 'drone-image';
    
    // Add shadow element
    const shadow = document.createElement('div');
    shadow.className = 'drone-shadow';
    
    // Add to container
    container.appendChild(imgFallback);
    container.appendChild(shadow);
    
    // Add floating animation with GSAP
    if (typeof gsap !== 'undefined') {
        gsap.to(imgFallback, {
            y: 15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }
} 