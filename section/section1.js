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
                </div>
                
                <div class="hero-feature-cards">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                        </div>
                        <h3 class="feature-title">Photo / Video</h3>
                        <p class="feature-description">Professional aerial photography and videography with stunning clarity</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        </div>
                        <h3 class="feature-title">Asset Inspection</h3>
                        <p class="feature-description">Detailed inspection of infrastructure and assets with high-precision imaging</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path>
                            </svg>
                        </div>
                        <h3 class="feature-title">Thermal Imaging</h3>
                        <p class="feature-description">Advanced thermal imaging for inspections and detection applications</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f8c165" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                <line x1="8" y1="2" x2="8" y2="18"></line>
                                <line x1="16" y1="6" x2="16" y2="22"></line>
                            </svg>
                        </div>
                        <h3 class="feature-title">Mapping & Agriculture</h3>
                        <p class="feature-description">Precision mapping and agriculture applications with advanced sensors</p>
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
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Create a renderer with proper settings
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    // Lights setup for better texture rendering
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.3);
    scene.add(hemisphereLight);

    // Scene background for better texture matching
    const bgColor = new THREE.Color(0x0e0e0e); // Match with dark background
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.Fog(bgColor, 20, 100);

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

    // Load textures first
    const textureLoader = new THREE.TextureLoader();
    const texturePaths = {
        body: 'assets/3d_model/FINAL_TEXTURE/drone_texture_main.jpg',
        propellers: 'assets/3d_model/FINAL_TEXTURE/propeller_texture.jpg',
        camera: 'assets/3d_model/FINAL_TEXTURE/camera_texture.jpg'
    };

    const loadedTextures = {};
    const texturePromises = [];

    // Attempt to preload textures if they exist
    for (const [part, path] of Object.entries(texturePaths)) {
        const promise = new Promise((resolve) => {
            textureLoader.load(
                path,
                (texture) => {
                    loadedTextures[part] = texture;
                    resolve();
                },
                undefined,
                () => {
                    console.warn(`Could not load texture: ${path}`);
                    resolve();
                }
            );
        });
        texturePromises.push(promise);
    }

    // After textures are loaded (or failed gracefully), load the 3D model
    Promise.all(texturePromises).then(() => {
        // Load 3D model (OBJ format)
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
                        // Check mesh name and apply appropriate texture
                        let material;
                        
                        // Try to determine which part this is based on name or just visual inspection
                        if (child.name.toLowerCase().includes('body') || child.name.toLowerCase().includes('frame')) {
                            // Main body - using custom colors to better match the dark theme
                            material = new THREE.MeshStandardMaterial({
                                color: 0xffffff, // White body like in the DJI reference
                                metalness: 0.3,
                                roughness: 0.7,
                                envMapIntensity: 0.5
                            });
                        } else if (child.name.toLowerCase().includes('prop') || child.name.toLowerCase().includes('blade')) {
                            // Propellers - darker to match theme
                            material = new THREE.MeshStandardMaterial({
                                color: 0x222222, // Dark propellers
                                metalness: 0.1,
                                roughness: 0.6
                            });
                        } else if (child.name.toLowerCase().includes('cam') || child.name.toLowerCase().includes('lens')) {
                            // Camera parts - glossy black
                            material = new THREE.MeshStandardMaterial({
                                color: 0x111111, // Black camera
                                metalness: 0.8,
                                roughness: 0.2
                            });
                        } else {
                            // Default for other parts - use position/size detection
                            if (child.geometry.boundingSphere && child.geometry.boundingSphere.radius < 1) {
                                // Smaller parts - likely details or electronics
                                material = new THREE.MeshStandardMaterial({
                                    color: 0x333333,
                                    metalness: 0.6,
                                    roughness: 0.4
                                });
                            } else if (child.position.y > 0.5 && Math.abs(child.position.x) > 1) {
                                // Parts farther from center - likely arms or landing gear
                                material = new THREE.MeshStandardMaterial({
                                    color: 0xcccccc, // Light gray
                                    metalness: 0.4,
                                    roughness: 0.6
                                });
                            } else {
                                // General body parts
                                material = new THREE.MeshStandardMaterial({
                                    color: 0xffffff,
                                    metalness: 0.3,
                                    roughness: 0.7
                                });
                            }
                        }
                        
                        // Apply the material
                        child.material = material;
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                
                scene.add(object);
                droneModel = object;
                
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
    });

    // Mouse control event listeners
    container.addEventListener('mousedown', function(event) {
        isDragging = true;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
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

    // Touch support for mobile devices
    container.addEventListener('touchstart', function(event) {
        if (event.touches.length === 1) {
            isDragging = true;
            previousMousePosition = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
            event.preventDefault();
        }
    });

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
        }
    });

    document.addEventListener('touchend', function() {
        isDragging = false;
    });

    // Change cursor on hover to indicate interactivity
    container.style.cursor = 'grab';
    container.addEventListener('mousedown', function() {
        container.style.cursor = 'grabbing';
    });
    container.addEventListener('mouseup', function() {
        container.style.cursor = 'grab';
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

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