// Love messages for random generation
const loveMessages = [
    "Every moment with you is a treasure I hold close to my heart. ❤️",
    "You are my greatest blessing and my favorite person in the whole world. 💕",
    "My heart chose you before my mind could understand why. 💫",
    "You make me want to be the best version of myself every single day. 🌟",
    "In a world full of temporary things, you are my forever. 💞",
    "You are the melody in my heart and the reason I smile. 🎵❤️",
    "Every day with you feels like a beautiful dream come true. ✨",
    "Your love is the greatest gift I've ever received. 🎁💕",
    "I fall in love with you more with each passing day. 📈❤️",
    "You are my person, my love, my everything. 👑💫",
    "With you, I've found not just love, but a soulmate. 🧡✨",
    "Thank you for being the rainbow in my sky. 🌈❤️",
    "Your love heals my heart in ways I never knew possible. 💖",
    "You are beautifully, wonderfully, perfectly you. 🌸💕",
    "I'm grateful for every second I get to spend with you. ⏰❤️",
    "You make my heart skip a beat every single time. 💓",
    "Loving you is the best decision I've ever made. ✅💕",
    "You are my favorite adventure and my safe place. 🧭❤️",
    "Forever with you is the only future I want to see. 🔮💫",
    "Thank you for being exactly who you are. You're perfect. 👑💕"
];

// Function to generate random message
function generateMessage() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    const messageElement = document.getElementById('randomMessage');
    
    // Add fade out effect
    messageElement.style.opacity = '0';
    messageElement.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        messageElement.textContent = loveMessages[randomIndex];
        messageElement.style.opacity = '1';
    }, 300);
}

// Set current date
function setCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    document.getElementById('currentDate').textContent = `May 8, 2026 - Made with all my love ❤️`;
}

// Generate initial message and set date on page load
document.addEventListener('DOMContentLoaded', function() {
    generateMessage();
    setCurrentDate();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Create floating hearts effect
    createFloatingHearts();
});

// Create floating hearts animation
function createFloatingHearts() {
    const heart = '❤️';
    const colors = ['#ff69b4', '#ff1493', '#e85b8a', '#c41e5f', '#ff69b4'];
    
    setInterval(() => {
        const floatingHeart = document.createElement('div');
        floatingHeart.innerHTML = heart;
        floatingHeart.style.position = 'fixed';
        floatingHeart.style.left = Math.random() * window.innerWidth + 'px';
        floatingHeart.style.top = '-30px';
        floatingHeart.style.font = 'bold 20px Arial';
        floatingHeart.style.opacity = '0.7';
        floatingHeart.style.zIndex = '0';
        floatingHeart.style.pointerEvents = 'none';
        floatingHeart.style.animation = 'float-up 4s ease-in forwards';
        
        document.body.appendChild(floatingHeart);
        
        // Remove heart after animation
        setTimeout(() => floatingHeart.remove(), 4000);
    }, 300);
}

// Add keyframes for floating hearts
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float-up {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0.7;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(${window.innerHeight}px) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add hover effect to photo cards
document.addEventListener('DOMContentLoaded', function() {
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
});
