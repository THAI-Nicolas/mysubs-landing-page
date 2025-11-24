// ========================================
// MYSUBS LANDING PAGE ANIMATIONS
// Vanilla JS - Lightweight & Performant
// ========================================

// ========================================
// 1. SCROLL ANIMATIONS (Intersection Observer)
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observer tous les éléments avec la classe 'animate-on-scroll'
  document
    .querySelectorAll(
      ".animate-on-scroll, .slide-left, .slide-right, .scale-up"
    )
    .forEach((el) => {
      observer.observe(el);

      // Trigger immediately if already in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Small delay to let CSS load
        setTimeout(() => {
          el.classList.add("animate-in");
        }, 50);
      }
    });
}

// ========================================
// 2. COUNTER ANIMATIONS (Stats)
// ========================================
function initCounterAnimations() {
  const counters = document.querySelectorAll(".counter");

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        animateCounter(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element) {
  const target = element.getAttribute("data-target");
  const duration = 2000; // 2 secondes
  const isPercent = target.includes("%");
  const isEuro = target.includes("€");
  const isPlus = target.includes("+");

  // Extraire le nombre
  const numericValue = parseInt(target.replace(/[^\d]/g, ""));
  const startTime = Date.now();

  function updateCounter() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * numericValue);

    let displayValue = current;
    if (isPlus) displayValue = "+" + current;
    if (isEuro) displayValue = current + "€";
    if (isPercent) displayValue = current + "%";

    element.textContent = displayValue;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target; // Valeur finale exacte
    }
  }

  updateCounter();
}

// ========================================
// 3. PARALLAX EFFECT (Cercles de fond)
// ========================================
function initParallax() {
  const parallaxElements = document.querySelectorAll(".parallax-bg");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((el) => {
      const speed = el.getAttribute("data-speed") || 0.5;
      const yPos = -(scrolled * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// ========================================
// 4. FLOATING ANIMATION (Mockups Hero)
// ========================================
function initFloatingAnimation() {
  const floatingElements = document.querySelectorAll(".float-animation");

  floatingElements.forEach((el, index) => {
    const delay = index * 200;
    el.style.animationDelay = `${delay}ms`;
  });
}

// ========================================
// 5. NAVBAR SCROLL EFFECT
// ========================================
function initNavbarScroll() {
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar?.classList.add("navbar-scrolled");
    } else {
      navbar?.classList.remove("navbar-scrolled");
    }
  });
}

// ========================================
// 6. SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ========================================
// 7. STAGGER ANIMATIONS
// ========================================
function initStaggerAnimations() {
  const staggerGroups = document.querySelectorAll(".stagger-group");

  staggerGroups.forEach((group) => {
    const items = group.querySelectorAll(".stagger-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-in");
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(group);

    // Trigger immediately if already in viewport
    const rect = group.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate-in");
        }, index * 150);
      });
    }
  });
}

// ========================================
// 8. PULSE ANIMATION ON CTA BADGES
// ========================================
function initPulseAnimation() {
  const badges = document.querySelectorAll(".badge-pulse");

  badges.forEach((badge) => {
    badge.addEventListener("mouseenter", () => {
      badge.style.animation = "none";
      setTimeout(() => {
        badge.style.animation = "";
      }, 10);
    });
  });
}

// ========================================
// 9. INFINITE SLIDER (Sponsors)
// ========================================
function initInfiniteSlider() {
  const container = document.querySelector(".slider-container");
  const track = document.querySelector(".slider-track");

  if (!container || !track) return;

  // Clone les logos plusieurs fois pour créer l'effet infini
  const clone1 = track.cloneNode(true);
  const clone2 = track.cloneNode(true);

  container.appendChild(clone1);
  container.appendChild(clone2);

  let position = 0;
  const speed = 0.5; // Pixels par frame

  function getGap() {
    const width = window.innerWidth;
    if (width >= 1280) return 240; // xl
    if (width >= 1024) return 128; // lg
    if (width >= 768) return 96; // md
    if (width >= 640) return 80; // sm
    return 64; // mobile
  }

  function animate() {
    position -= speed;

    // Calcule la largeur d'un groupe complet (logos + gaps)
    const gap = getGap();
    const trackWidth = track.offsetWidth + gap;

    // Reset la position quand le premier groupe est complètement sorti
    if (Math.abs(position) >= trackWidth) {
      position = position + trackWidth;
    }

    // Applique la transformation à tous les tracks
    const allTracks = container.querySelectorAll(".slider-track");
    allTracks.forEach((t, index) => {
      t.style.transform = `translateX(${position + index * trackWidth}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ========================================
// INITIALIZE ALL ANIMATIONS
// ========================================
function initAllAnimations() {
  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}

function init() {
  // Add js-loaded class to enable animations
  document.body.classList.add("js-loaded");

  // Small delay to ensure CSS is loaded before triggering animations
  setTimeout(() => {
    initScrollAnimations();
    initCounterAnimations();
    initParallax();
    initFloatingAnimation();
    initNavbarScroll();
    initSmoothScroll();
    initStaggerAnimations();
    initPulseAnimation();
    initInfiniteSlider();

    console.log("✨ MySubs animations initialized");
  }, 100);
}

// Auto-initialize
initAllAnimations();

// Export for manual initialization if needed
export { initAllAnimations };
