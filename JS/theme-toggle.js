// 1.Fungsi untuk toggle (nyalakan/matikan)
function toggleTheme() {
    // 2. Cek apakah ada class 'dark' di tag html
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark'); // Matikan
        localStorage.setItem('theme', 'light'); // Simpan pilihan ke memori
    } else {
        document.documentElement.classList.add('dark'); // Nyalakan
        localStorage.setItem('theme', 'dark'); // Simpan pilihan ke memori
    }
}

// Cek saat halaman baru dibuka: Apakah user sebelumnya pilih dark mode?
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}