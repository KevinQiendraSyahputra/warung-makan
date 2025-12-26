// Menunggu sampai halaman sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Animasi sederhana untuk tombol
    const menuButton = document.getElementById('menuButton');
    
    if (menuButton) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Tambahkan efek tekan pada tombol
            this.style.transform = 'translateY(0px)';
            this.style.boxShadow = '0 2px 8px rgba(139, 69, 19, 0.2)';
            
            // Simulasi loading
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat Menu...';
            this.style.backgroundColor = '#6B3410';
            
            // Set timeout untuk simulasi loading
            setTimeout(() => {
                alert('Menu sedang dimuat...\n(Fitur ini dapat dihubungkan dengan halaman menu)');
                this.innerHTML = originalText;
                this.style.backgroundColor = '#8B4513';
            }, 800);
        });
    }
    
    // Efek hover untuk fitur
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#FFF9F0';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
    });
    
    // Animasi sederhana untuk rating stars
    const stars = document.querySelectorAll('.stars i');
    
    stars.forEach((star, index) => {
        // Tambahkan delay animasi untuk setiap bintang
        star.style.animationDelay = `${index * 0.1}s`;
        star.classList.add('star-animation');
    });
    
    // Tambahkan animasi pada saat halaman dimuat
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Tambahkan animasi untuk bintang
const style = document.createElement('style');
style.textContent = `
    @keyframes starPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    .star-animation {
        animation: starPulse 1s ease-in-out;
        animation-iteration-count: 1;
    }
`;
document.head.appendChild(style);
