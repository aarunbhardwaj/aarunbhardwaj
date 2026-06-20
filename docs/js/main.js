// Main JavaScript for Dr. Arun Kumar's Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize skill tag interactions
    initSkillTags();
    
    // Initialize project card interactions
    initProjectCards();
    
    // Initialize print functionality
    initPrintFunctionality();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Add current year to footer
    updateCurrentYear();
    
    // Initialize responsive navigation if needed
    initResponsiveNavigation();
});

/**
 * Initialize skill tag hover effects
 */
function initSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 165, 207, 0.2)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

/**
 * Initialize project card interactions
 */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add click interaction to expand project details
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link
            if (e.target.tagName === 'A') return;
            
            this.classList.toggle('expanded');
            
            // Toggle expanded state styling
            if (this.classList.contains('expanded')) {
                this.style.transform = 'translateY(-4px) scale(1.02)';
                this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                this.style.zIndex = '10';
            } else {
                this.style.transform = 'translateY(-4px)';
                this.style.boxShadow = 'var(--shadow-md)';
                this.style.zIndex = '1';
            }
        });
        
        // Add keyboard support for accessibility
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Set tabindex for accessibility
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Toggle project details');
    });
}

/**
 * Initialize print functionality
 */
function initPrintFunctionality() {
    const printLinks = document.querySelectorAll('.print-link');
    
    printLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show print dialog
            window.print();
            
            // Add print success message (optional)
            showToast('Print dialog opened. For best results, use "Save as PDF" option.');
        });
    });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate offset for sticky header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = targetPosition + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Update current year in footer
 */
function updateCurrentYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // Also update any hardcoded years in the footer
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        footerText.textContent = footerText.textContent.replace('2026', currentYear);
    }
}

/**
 * Initialize responsive navigation (if we add mobile menu later)
 */
function initResponsiveNavigation() {
    // This function can be expanded if we add a mobile navigation menu
    console.log('Responsive navigation initialized');
    
    // Check if we're on mobile and add appropriate classes
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        document.body.classList.add('mobile-view');
    }
    
    // Update on resize
    window.addEventListener('resize', function() {
        const isMobileNow = window.innerWidth <= 768;
        
        if (isMobileNow && !document.body.classList.contains('mobile-view')) {
            document.body.classList.add('mobile-view');
        } else if (!isMobileNow && document.body.classList.contains('mobile-view')) {
            document.body.classList.remove('mobile-view');
        }
    });
}

/**
 * Show a temporary toast message
 */
function showToast(message, duration = 3000) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--color-primary);
        color: white;
        padding: 12px 24px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        font-size: 0.9rem;
        animation: fadeIn 0.3s ease;
    `;
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
    `;
    document.head.appendChild(style);
    
    // Add to document
    document.body.appendChild(toast);
    
    // Remove after duration
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);
}

/**
 * Add CSS for additional interactive effects
 */
function addInteractiveStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Additional interactive styles */
        .skill-tag {
            transition: all 0.2s ease;
        }
        
        .project-card {
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .project-card.expanded {
            grid-column: 1 / -1;
        }
        
        @media (max-width: 768px) {
            .project-card.expanded {
                grid-column: 1;
            }
        }
        
        /* Focus styles for accessibility */
        .skill-tag:focus,
        .project-card:focus {
            outline: 2px solid var(--color-secondary);
            outline-offset: 2px;
        }
        
        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Add interactive styles
addInteractiveStyles();

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme or prefer OS setting
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Show feedback
        showToast(`${newTheme === 'dark' ? 'Dark' : 'Light'} theme activated`);
    });
    
    // Listen for OS theme changes
    prefersDarkScheme.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initThemeToggle,
        initSkillTags,
        initProjectCards,
        initPrintFunctionality,
        initSmoothScrolling,
        updateCurrentYear,
        initResponsiveNavigation,
        showToast
    };
}