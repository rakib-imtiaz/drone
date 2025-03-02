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
        <section class="hero">
            <div class="hero-stars" id="stars-container"></div>
            
            <div class="hero-watermark">CAMERA DRONE</div>
            
            <div class="hero-container">
                <div class="hero-content">
                    <h1 class="hero-title">DJI <span class="gradient-text">MINI 3 PRO</span></h1>
                    <p class="hero-subtitle">The mini-sized, mega-capable DJI Mini 3 Pro is just as powerful as it is portable.</p>
                    <div class="hero-cta">
                        <a href="#purchase" class="hero-button">Purchase Now</a>
                    </div>
                </div>
                
                <div class="drone-display" id="drone-model-container">
                    <!-- 3D model will be loaded here -->
                    <div class="drone-shadow"></div>
                    <div id="touch-instruction" class="touch-instruction">Drag to rotate</div>
                </div>
                
                <div class="hero-feature-cards">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                        </div>
                        <div class="feature-text">
                            <h3 class="feature-title">Photo / Video</h3>
                            <p class="feature-description">Professional aerial photography and videography with stunning clarity</p>
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        </div>
                        <div class="feature-text">
                            <h3 class="feature-title">Asset Inspection</h3>
                            <p class="feature-description">Detailed inspection of infrastructure and assets with high-precision imaging</p>
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path>
                            </svg>
                        </div>
                        <div class="feature-text">
                            <h3 class="feature-title">Thermal Imaging</h3>
                            <p class="feature-description">Advanced thermal imaging for inspections and detection applications</p>
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
                            <h3 class="feature-title">Mapping & Agriculture</h3>
                            <p class="feature-description">Precision mapping and agriculture applications with advanced sensors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    heroContainer.innerHTML = heroHTML;
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
    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.error('Three.js is not loaded');
        loadFallbackImage();
        return;
    }

    const container = document.getElementById('drone-model-container');
    const touchInstruction = document.getElementById('touch-instruction');
    if (!container) return;

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
    
    // 3D model reference that will be set when model loads
    let droneModel = null;

    // Simplified texture loading for better performance
    const textureLoader = new THREE.TextureLoader();
    
    // Load 3D model with appropriate quality settings
    const loader = new THREE.OBJLoader();
    
    loader.load(
        'assets/3d_model/drone.obj',
        (object) => {
            // Scale and position - Adjust position upward
            object.scale.set(0.05, 0.05, 0.05);
            object.position.set(0, 1, 0); // Moved up by 1 unit
            
            // Apply materials with textures based on mesh names
            object.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    // For mobile, use simpler materials with no environment maps
                    const materialType = shouldReduceQuality ? 
                                        THREE.MeshBasicMaterial : 
                                        THREE.MeshStandardMaterial;
                    
                    // Try to determine which part this is based on name or just visual inspection
                    if (child.name.toLowerCase().includes('body') || child.name.toLowerCase().includes('frame')) {
                        // Main body - using custom colors to better match the dark theme
                        child.material = new materialType({
                            color: 0xffffff, // White body like in the DJI reference
                            metalness: shouldReduceQuality ? undefined : 0.3,
                            roughness: shouldReduceQuality ? undefined : 0.7
                        });
                    } else if (child.name.toLowerCase().includes('prop') || child.name.toLowerCase().includes('blade')) {
                        // Propellers - darker to match theme
                        child.material = new materialType({
                            color: 0x222222, // Dark propellers
                            metalness: shouldReduceQuality ? undefined : 0.1,
                            roughness: shouldReduceQuality ? undefined : 0.6
                        });
                    } else if (child.name.toLowerCase().includes('cam') || child.name.toLowerCase().includes('lens')) {
                        // Camera parts - glossy black
                        child.material = new materialType({
                            color: 0x111111, // Black camera
                            metalness: shouldReduceQuality ? undefined : 0.8,
                            roughness: shouldReduceQuality ? undefined : 0.2
                        });
                    } else {
                        // Default for other parts - use position/size detection
                        if (child.geometry.boundingSphere && child.geometry.boundingSphere.radius < 1) {
                            // Smaller parts - likely details or electronics
                            child.material = new materialType({
                                color: 0x333333,
                                metalness: shouldReduceQuality ? undefined : 0.6,
                                roughness: shouldReduceQuality ? undefined : 0.4
                            });
                        } else if (child.position.y > 0.5 && Math.abs(child.position.x) > 1) {
                            // Parts farther from center - likely arms or landing gear
                            child.material = new materialType({
                                color: 0xcccccc, // Light gray
                                metalness: shouldReduceQuality ? undefined : 0.4,
                                roughness: shouldReduceQuality ? undefined : 0.6
                            });
                        } else {
                            // General body parts
                            child.material = new materialType({
                                color: 0xffffff,
                                metalness: shouldReduceQuality ? undefined : 0.3,
                                roughness: shouldReduceQuality ? undefined : 0.7
                            });
                        }
                    }
                    
                    if (!shouldReduceQuality) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                }
            });
            
            scene.add(object);
            droneModel = object;
            
            // Hide loading instructions once model is loaded
            if (touchInstruction) {
                touchInstruction.style.opacity = 1;
                
                // Auto-hide instruction after 3 seconds
                setTimeout(() => {
                    touchInstruction.style.opacity = 0;
                }, 3000);
            }
            
            // Animation loop
            const animate = function() {
                requestAnimationFrame(animate);
                
                // Apply smooth rotation based on mouse interaction
                if (!isDragging) {
                    // Auto rotation when not being controlled
                    targetRotation.y += 0.003;
                }
                
                // Smooth rotation transitions
                currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
                currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;
                
                if (droneModel) {
                    droneModel.rotation.x = currentRotation.x;
                    droneModel.rotation.y = currentRotation.y;
                }
                
                renderer.render(scene, camera);
            };
            
            animate();
        },
        // Progress callback
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // Error callback
        (error) => {
            console.error('An error happened while loading the model:', error);
            loadFallbackImage();
        }
    );

    // Mouse control event listeners - use passive event listeners for mobile performance
    container.addEventListener('mousedown', function(event) {
        isDragging = true;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        
        // Show user is interacting
        if (touchInstruction) touchInstruction.style.opacity = 0;
        
        // Prevent default behaviors
        event.preventDefault();
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            const deltaMove = {
                x: event.clientX - previousMousePosition.x,
                y: event.clientY - previousMousePosition.y
            };
            
            // Adjust rotation based on mouse movement
            targetRotation.y += deltaMove.x * 0.005;
            targetRotation.x += deltaMove.y * 0.005;
            
            // Limit vertical rotation
            targetRotation.x = Math.max(-Math.PI/4, Math.min(Math.PI/4, targetRotation.x));
            
            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // Touch support for mobile devices with passive event listeners for better performance
    container.addEventListener('touchstart', function(event) {
        if (event.touches.length === 1) {
            isDragging = true;
            previousMousePosition = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
            
            // Show user is interacting
            if (touchInstruction) touchInstruction.style.opacity = 0;
            
            // Don't prevent default here - allow scrolling if needed
        }
    }, { passive: true });

    document.addEventListener('touchmove', function(event) {
        if (isDragging && event.touches.length === 1) {
            const deltaMove = {
                x: event.touches[0].clientX - previousMousePosition.x,
                y: event.touches[0].clientY - previousMousePosition.y
            };
            
            targetRotation.y += deltaMove.x * 0.005;
            targetRotation.x += deltaMove.y * 0.005;
            
            // Limit vertical rotation
            targetRotation.x = Math.max(-Math.PI/4, Math.min(Math.PI/4, targetRotation.x));
            
            previousMousePosition = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
            
            // Prevent page scrolling while rotating drone
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchend', function() {
        isDragging = false;
    }, { passive: true });

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
}

function loadFallbackImage() {
    const container = document.getElementById('drone-model-container');
    if (!container) return;
    
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