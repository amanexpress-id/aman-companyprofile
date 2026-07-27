document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

    // --- FITUR HAMBURGER MENU ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            // Tambah/Hapus class 'active' untuk memunculkan menu
            navMenu.classList.toggle('active');
            
            // Ubah ikon dari garis tiga (bars) menjadi silang (xmark)
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Fitur klik pada dot testimoni (Hanya visual / simulasi)
    // --- FITUR TESTIMONI DOTS (INTERAKTIF) ---
    const dots = document.querySelectorAll('.dot');
    const testiCards = document.querySelectorAll('.testi-card'); // Pastikan card testimoni punya class ini di HTML

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // 1. Pindahkan kelas 'active' ke dot yang diklik
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            // 2. Simulasi interaksi: Geser atau beri efek sorot (fade/scale) pada kartu testimoni
            testiCards.forEach((card, cardIndex) => {
                if (cardIndex === index) {
                    card.style.transform = "scale(1.03)";
                    card.style.transition = "0.3s ease";
                    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
                } else {
                    card.style.transform = "scale(1)";
                    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
                }
            });
        });
    });
});