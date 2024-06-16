
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner');
    
    // You can add interactivity here, for example, changing the banner image every few seconds.
    // This is a basic example, you can enhance it further.
    let bannerImages = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
    let currentImageIndex = 0;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
        banner.style.backgroundImage = `url(${bannerImages[currentImageIndex]})`;
    }, 5000);
});
