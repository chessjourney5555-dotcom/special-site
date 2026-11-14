// Create floating particles
function createParticles(count = 35) {
  const container = document.querySelector('.particles');
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position & size
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    
    // Random animation duration & delay
    const duration = Math.random() * 12 + 10;
    const delay = Math.random() * 15;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Slight color variation
    const colors = [
      'radial-gradient(circle, #ff6b9d, transparent)',
      'radial-gradient(circle, #a78bfa, transparent)',
      'radial-gradient(circle, #fbbf24, transparent)',
      'radial-gradient(circle, #f472b6, transparent)'
    ];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(particle);
  }
}

// Soft page transition feel
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  
  // Optional: subtle scale-in on body
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.6s ease';
    document.body.style.opacity = '1';
  });
});