// Sidebar toggle functionality
document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'flex';
});
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.display = 'none';
});

// Sound toggle functionality for background video
const bgVideo = document.getElementById('backgroundVideo');
const soundToggle = document.getElementById('sound-toggle');

// Check if elements exist to prevent errors
if (bgVideo && soundToggle) {
    // Toggle sound for the background video
    soundToggle.addEventListener('click', function() {
        bgVideo.muted = !bgVideo.muted; // Toggle mute/unmute
        soundToggle.textContent = bgVideo.muted ? '🔇' : '🔊'; // Update icon based on mute status
    });
}

// Game video mute interaction
const gameVideo = document.getElementById('gameVideo');
if (gameVideo) {
    gameVideo.addEventListener('play', () => {
        bgVideo.muted = true; // Mute background video when game video starts
    });
    gameVideo.addEventListener('pause', () => {
        if (!soundToggle.textContent.includes('🔇')) {
            bgVideo.muted = false; // Unmute background video if sound is enabled
        }
    });
    gameVideo.addEventListener('ended', () => {
        if (!soundToggle.textContent.includes('🔇')) {
            bgVideo.muted = false; // Unmute background video if sound is enabled
        }
    });
}
