document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality - attach reliably even if React mounts later
  function attachMobileMenu() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (!mobileMenuToggle || !mobileNav) return false;

    // Prevent double-attaching listeners
    if (mobileMenuToggle.dataset.attached === "1") return true;

    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      mobileNav.classList.toggle("active");
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll(".mobile-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        mobileNav.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside (use fresh selectors inside handler)
    document.addEventListener("click", (e) => {
      const toggle = document.querySelector(".mobile-menu-toggle");
      const nav = document.querySelector(".mobile-nav");
      if (!toggle || !nav) return;
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        toggle.classList.remove("active");
        nav.classList.remove("active");
      }
    });

    mobileMenuToggle.dataset.attached = "1";
    return true;
  }

  // Try attaching immediately; if elements are rendered by React later, retry a few times
  (function tryAttachMobileMenu(retries = 0) {
    const attached = attachMobileMenu();
    if (!attached && retries < 20) {
      setTimeout(() => tryAttachMobileMenu(retries + 1), 200);
    }
  })();

  // Enhanced smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      // Skip if href is just "#"
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Enhanced header functionality
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrolled = window.pageYOffset;

    if (header) {
      if (scrolled > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });

  // Active menu item highlighting
  function updateActiveMenuItem() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");

    let currentSection = "";
    const scrollPos = window.pageYOffset + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveMenuItem);
  window.addEventListener("load", updateActiveMenuItem);

  // Parallax effect for geometric shapes
  window.addEventListener("scroll", () => {
    const shapes = document.querySelectorAll(".shape");
    const scrolled = window.pageYOffset;

    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.3;
      shape.style.transform = `translateY(${scrolled * speed}px) rotate(${
        scrolled * 0.1
      }deg)`;
    });
  });

  // Neural lines pulse effect
  const neuralLines = document.querySelectorAll(".neural-line");
  setInterval(() => {
    neuralLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.opacity = "1";
        line.style.transform = "scaleX(1.2)";
        setTimeout(() => {
          line.style.opacity = "0.2";
          line.style.transform = "scaleX(0.5)";
        }, 200);
      }, index * 300);
    });
  }, 2000);

  // Enhanced particle generation
  function createQuantumParticle() {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = Math.random() * 4 + 1 + "px";
    particle.style.height = particle.style.width;
    particle.style.background = ["#00ffff", "#00d9ffff", "#0044ffff"][
      Math.floor(Math.random() * 3)
    ];
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = "100vh";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "-1";
    particle.style.boxShadow = `0 0 10px ${particle.style.background}`;

    document.body.appendChild(particle);

    const duration = Math.random() * 3000 + 2000;
    const drift = (Math.random() - 0.5) * 200;

    particle.animate(
      [
        { transform: "translateY(0px) translateX(0px)", opacity: 0 },
        { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 },
      ],
      {
        duration: duration,
        easing: "ease-out",
      }
    ).onfinish = () => particle.remove();
  }

  // Generate quantum particles
  setInterval(createQuantumParticle, 1500);

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe timeline items and hexagons
  document
    .querySelectorAll(".timeline-content, .home-hexagon")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(el);
    });

  // Form submission effect
  const submitBtn = document.querySelector(".submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      this.innerHTML = "TRANSMITTING...";
      this.style.background = "linear-gradient(45deg, #0004ffff, #00ffff)";

      setTimeout(() => {
        this.innerHTML = "TRANSMISSION COMPLETE";
        this.style.background = "linear-gradient(45deg, #000000ff, #00ffff)";

        setTimeout(() => {
          this.innerHTML = "TRANSMIT TO MATRIX";
          this.style.background = "linear-gradient(45deg, #00ffff, #000000ff)";
        }, 2000);
      }, 1500);
    });
  }
});

function contactHandleSubmit(event) {
  event.preventDefault();

  const btn = document.getElementById("contact-submit-btn");
  const originalText = btn.innerHTML;
  const toast = document.getElementById("contact-toast");

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
  btn.classList.add("opacity-75", "cursor-not-allowed");

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = originalText;
    btn.classList.remove("opacity-75", "cursor-not-allowed");

    document.getElementById("contact-page-form").reset();

    contactShowToast("تم استلام رسالتك بنجاح، سنتواصل معك قريباً!");
  }, 1500);
}

function contactShowToast(message) {
  const toast = document.getElementById("contact-toast");
  const msgSpan = document.getElementById("contact-toast-message");

  msgSpan.textContent = message;

  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.remove("opacity-0", "translate-y-[-20px]");
  }, 10);

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-[-20px]");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300);
  }, 4000);
}
