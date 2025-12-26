// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Kopi Tubruk",
        description: "Kopi asli Indonesia dengan proses tubruk tradisional",
        price: "Rp 25.000",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Espresso",
        description: "Kopi espresso dengan crema yang sempurna",
        price: "Rp 30.000",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Cappuccino",
        description: "Espresso dengan foam susu yang lembut",
        price: "Rp 35.000",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Nasi Goreng Spesial",
        description: "Nasi goreng dengan telur, ayam, dan sayuran",
        price: "Rp 45.000",
        category: "food",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Mie Goreng Jawa",
        description: "Mie goreng khas Jawa dengan bumbu rempah",
        price: "Rp 40.000",
        category: "food",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Roti Bakar Coklat Keju",
        description: "Roti bakar dengan olesan coklat dan keju leleh",
        price: "Rp 30.000",
        category: "snack",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Latte Art",
        description: "Kopi latte dengan seni gambar di atasnya",
        price: "Rp 40.000",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Kue Brownies",
        description: "Brownies coklat dengan tekstur lembut dan padat",
        price: "Rp 35.000",
        category: "snack",
        image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Display Menu Items
const menuGrid = document.getElementById('menuGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayMenuItems(filter = 'all') {
    menuGrid.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filter);
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <div class="menu-item-title">
                    <h3>${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p>${item.description}</p>
                <span class="menu-item-category">${item.category === 'coffee' ? 'Kopi' : item.category === 'food' ? 'Makanan' : 'Snack'}</span>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
    
    // Tambahkan efek fade-in setelah items ditampilkan
    setTimeout(addLoadingAnimation, 100);
}

// Filter Menu Items
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter menu items
        const filter = button.getAttribute('data-filter');
        displayMenuItems(filter);
    });
});

// Initialize menu display
displayMenuItems();

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show an alert
    alert(`Terima kasih ${name}! Pesan Anda telah diterima. Kami akan menghubungi Anda di ${phone} dalam waktu 1x24 jam.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== IMAGE SLIDER FUNCTIONALITY ==========
let currentSlide = 0;
let isTransitioning = false;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');
let slideInterval;

// Function to show a specific slide
function showSlide(index, direction = 'next') {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // Ensure index is within bounds
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    // Move the slider with smooth transition
    slider.style.transform = `translateX(-${currentSlide * 25}%)`;
    
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
    
    // Reset transitioning flag after animation completes
    setTimeout(() => {
        isTransitioning = false;
    }, 700);
}

// Function to go to next slide
function nextSlide() {
    showSlide(currentSlide + 1, 'next');
}

// Function to go to previous slide
function prevSlide() {
    showSlide(currentSlide - 1, 'prev');
}

// Start automatic slideshow
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

// Stop automatic slideshow
function stopSlider() {
    clearInterval(slideInterval);
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    stopSlider();
    prevSlide();
    startSlider();
});

nextBtn.addEventListener('click', () => {
    stopSlider();
    nextSlide();
    startSlider();
});

// Event listeners for dots
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        if (isTransitioning) return;
        
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        if (slideIndex === currentSlide) return;
        
        stopSlider();
        showSlide(slideIndex);
        startSlider();
    });
});

// Pause slider on hover
slider.addEventListener('mouseenter', stopSlider);
slider.addEventListener('mouseleave', startSlider);

// Initialize the slider
showSlide(0);
startSlider();

// Add loading animation to menu items
function addLoadingAnimation() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
}

// Event listener khusus untuk efek hover pada slider saja
document.addEventListener('DOMContentLoaded', function() {
    // HANYA gambar di slider yang memiliki efek zoom
    document.querySelectorAll('.slide').forEach(slide => {
        const img = slide.querySelector('img');
        
        slide.addEventListener('mouseenter', function() {
            if (img) {
                img.style.transform = 'scale(1.15)';
            }
        });
        
        slide.addEventListener('mouseleave', function() {
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // Gambar di menu TIDAK memiliki efek zoom
    // Hanya efek angkat pada card saja
    document.querySelectorAll('.menu-item').forEach(card => {
        const img = card.querySelector('img');
        
        // Pastikan gambar menu TIDAK zoom
        card.addEventListener('mouseenter', function() {
            if (img) {
                img.style.transform = 'scale(1)'; // Tetap 1, tidak zoom
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (img) {
                img.style.transform = 'scale(1)'; // Tetap 1, tidak zoom
            }
        });
    });
    
    // Efek pada service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
});