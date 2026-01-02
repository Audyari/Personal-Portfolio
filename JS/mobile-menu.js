// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Update aria-expanded attribute
        const isExpanded = !mobileMenu.classList.contains('hidden');
        mobileMenuButton.setAttribute('aria-expanded', isExpanded);
    });
}