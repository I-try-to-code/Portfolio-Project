/**
 * Scroll-Triggered Animated Metric Counters
 */

export function initCounters() {
  const counterElements = document.querySelectorAll(".counter-value");
  if (counterElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => observer.observe(el));
}

function animateCounter(element) {
  const target = parseFloat(element.dataset.target);
  const prefix = element.dataset.prefix || "";
  const suffix = element.dataset.suffix || "";
  const decimals = parseInt(element.dataset.decimals || "0", 10);
  const duration = 1500; // ms
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = target * easeProgress;

    const formatted = decimals > 0 ? currentValue.toFixed(decimals) : Math.floor(currentValue).toLocaleString();
    element.textContent = `${prefix}${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      const finalFormatted = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
      element.textContent = `${prefix}${finalFormatted}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}
