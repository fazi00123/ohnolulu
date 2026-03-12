/**
 * Premium Preloader Logic
 */
(function() {
    // Create preloader HTML
    const preloaderHTML = `
        <div id="preloader">
            <img src="./assets/img/baton rouge.png" alt="Logo" class="preloader-logo">
            <div class="preloader-spinner"></div>
        </div>
    `;

    // Inject into body
    document.body.insertAdjacentHTML('afterbegin', preloaderHTML);
    document.body.classList.add('preloader-active');

    // Minimum display time for premium feel
    const minTime = 1500;
    const startTime = Date.now();

    function hidePreloader() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const delay = Math.max(0, minTime - elapsedTime);

        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('fade-out');
                document.body.classList.remove('preloader-active');
                
                // Remove from DOM after transition
                setTimeout(() => {
                    preloader.remove();
                }, 800);
            }
        }, delay);
    }

    // Hide when window is fully loaded
    window.addEventListener('load', hidePreloader);

    // Fallback: hide anyway after 5 seconds to prevent getting stuck
    setTimeout(hidePreloader, 5000);
})();
