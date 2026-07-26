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
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // Hapus kelas active dari semua dot
            dots.forEach(d => d.classList.remove('active'));
            // Tambahkan kelas active ke dot yang diklik
            this.classList.add('active');
        });
    });
});