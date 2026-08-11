/**
 * Main Application Script & Component Orchestrator
 */

import { initHeroCanvas } from './components/heroCanvas.js';
import { initProjects } from './components/projects.js';
import { initLeadership } from './components/leadership.js';
import { initSkills } from './components/skills.js';
import { initCounters } from './components/counters.js';

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Hero Canvas Visual
  initHeroCanvas("hero-canvas");

  // 2. Initialize Projects & Filter Tabs
  initProjects();

  // 3. Initialize RoboVITics Leadership Dashboard
  initLeadership();

  // 4. Initialize Skills Matrix
  initSkills();

  // 5. Initialize Scroll-Triggered Impact Counters
  initCounters();

  // 6. Scroll Reveal Observer
  initScrollReveal();

  // 7. Header Navigation Scroll Observer & Active State
  initNavigation();

  // 8. Toast & Email Copy Handler
  initContactActions();

  // 9. Mobile Menu Toggle
  initMobileMenu();
});

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

function initNavigation() {
  const header = document.getElementById("main-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }

    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

function initContactActions() {
  const copyEmailButtons = document.querySelectorAll('[data-action="copy-email"]');
  const emailAddress = "ayan.gattani@example.com";

  copyEmailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(emailAddress).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast(`Contact email: ${emailAddress}`);
      });
    });
  });

  const resumeButtons = document.querySelectorAll('[data-action="resume"]');
  resumeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Resume preview / download link will open once attached!");
    });
  });
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu-container");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("mobile-open");
    if (isOpen) {
      navMenu.classList.remove("mobile-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      navMenu.classList.add("mobile-open");
      toggleBtn.setAttribute("aria-expanded", "true");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("mobile-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}
