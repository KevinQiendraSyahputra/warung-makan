// Animasi sederhana untuk tombol
document.querySelector('.btn-menu').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Menu sedang dimuat...\n(Fitur ini dapat dihubungkan dengan halaman menu)');
});

// Efek hover untuk fitur
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
    feature.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#FFF9F0';
        this.style.borderColor = '#D4A762';
    });
    
    feature.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#f9f9f9';
        this.style.borderColor = '#eee';
    });
});

// Tambahkan efek klik pada tombol
document.querySelector('.btn-menu').addEventListener('mousedown', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 2px 8px rgba(139, 69, 19, 0.2)';
});

document.querySelector('.btn-menu').addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 6px 15px rgba(139, 69, 19, 0.3)';
});

// Efek hover untuk rating container
const ratingContainer = document.querySelector('.rating-container');
ratingContainer.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
});

ratingContainer.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
});

// Efek hover untuk price section
const priceSection = document.querySelector('.price-section');
priceSection.addEventListener('mouseenter', function() {
    this.style.transform = 'translateX(4px)';
});

priceSection.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0)';
});
