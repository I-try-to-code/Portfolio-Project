/**
 * Projects Section Component Renderer
 * Visual Hierarchy: Hero Projects -> Secondary Systems -> More Projects Directory
 * Communicates: PROBLEM -> APPROACH -> TECHNOLOGY -> RESULT
 */

import { heroProjects, secondaryProjects, additionalProjectsList } from '../data/projects.js';
import { openProjectModal } from './projectModal.js';

export function initProjects() {
  const heroContainer = document.getElementById("hero-projects-container");
  const secondaryContainer = document.getElementById("secondary-projects-grid");
  const additionalContainer = document.getElementById("additional-projects-list");
  const filterTabContainer = document.getElementById("project-filter-tabs");

  if (!heroContainer) return;

  renderHeroProjects(heroProjects, heroContainer);
  if (secondaryContainer) renderSecondaryProjects(secondaryProjects, secondaryContainer);
  if (additionalContainer) renderAdditionalProjects(additionalProjectsList, additionalContainer);

  // Filter Handler
  if (filterTabContainer) {
    const tabs = filterTabContainer.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const category = tab.dataset.category;

        if (category === "all") {
          renderHeroProjects(heroProjects, heroContainer);
          if (secondaryContainer) {
            secondaryContainer.style.display = "grid";
            renderSecondaryProjects(secondaryProjects, secondaryContainer);
          }
        } else {
          const filteredHero = heroProjects.filter(p => p.id.includes(category) || p.category.toLowerCase().includes(category));
          const filteredSec = secondaryProjects.filter(p => p.id.includes(category) || p.category.toLowerCase().includes(category));

          renderHeroProjects(filteredHero.length > 0 ? filteredHero : heroProjects, heroContainer);
          if (secondaryContainer) {
            renderSecondaryProjects(filteredSec.length > 0 ? filteredSec : secondaryProjects, secondaryContainer);
          }
        }
      });
    });
  }
}

function renderHeroProjects(projects, container) {
  container.innerHTML = projects.map(proj => {
    const githubBtn = proj.github
      ? `<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span>GitHub</span>
         </a>`
      : `<button class="btn btn-disabled btn-sm" title="GitHub repository pending link" disabled>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span>GitHub (Private)</span>
         </button>`;

    const liveBtn = proj.liveDemo
      ? `<a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>Live Demo</span>
         </a>`
      : `<button class="btn btn-disabled btn-sm" title="Live demo pending link" disabled>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>Live System (Soon)</span>
         </button>`;

    return `
      <article class="project-hero-card" data-hero-id="${proj.id}">
        <div class="hero-card-left">
          <div class="card-header-badge-row">
            <span class="hero-card-tag">${proj.badge}</span>
            <span class="hero-card-cat">${proj.category}</span>
          </div>

          <h3 class="hero-card-title">${proj.title}</h3>
          <p class="hero-card-subtitle">${proj.subtitle}</p>

          <!-- 4-Step Engineering Workflow -->
          <div class="workflow-flow-box">
            <div class="workflow-step">
              <span class="wf-lbl wf-lbl-problem">PROBLEM</span>
              <p class="wf-text">${proj.problem}</p>
            </div>

            <div class="workflow-step">
              <span class="wf-lbl wf-lbl-approach">APPROACH</span>
              <p class="wf-text">${proj.approach}</p>
            </div>

            <div class="workflow-step">
              <span class="wf-lbl wf-lbl-tech">TECHNOLOGY</span>
              <div class="card-tech-pills" style="margin-bottom:0;">
                ${proj.technologies.map(t => `<span class="tech-pill">${t}</span>`).join("")}
              </div>
            </div>

            <div class="workflow-step">
              <span class="wf-lbl wf-lbl-result">RESULT</span>
              <p class="wf-text wf-result-highlight">${proj.result}</p>
            </div>
          </div>

          <!-- Side by Side Action Bar -->
          <div class="hero-card-actions">
            <div class="quick-links-group">
              ${githubBtn}
              ${liveBtn}
            </div>

            <button class="btn btn-outline btn-sm btn-case-study" data-action="open-case-study" data-id="${proj.id}">
              <span>Engineering Case Study</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>

        <div class="hero-card-right">
          <div class="arch-preview-card">
            <div class="arch-preview-header">SYSTEM ARCHITECTURE OVERVIEW</div>
            ${proj.architectureDiagram}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Event Listeners for Case Study Trigger
  container.querySelectorAll('.project-hero-card').forEach(card => {
    const id = card.dataset.heroId;
    const project = heroProjects.find(p => p.id === id);

    const caseStudyBtn = card.querySelector('[data-action="open-case-study"]');
    if (caseStudyBtn && project) {
      caseStudyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectModal(project);
      });
    }

    card.addEventListener('click', () => {
      if (project) openProjectModal(project);
    });
  });
}

function renderSecondaryProjects(projects, container) {
  container.innerHTML = projects.map(proj => `
    <article class="project-secondary-card" data-sec-id="${proj.id}">
      <div class="card-header-badge-row">
        <span class="card-badge">${proj.badge}</span>
        <span class="card-category-label">${proj.category}</span>
      </div>

      <h3 class="secondary-card-title">${proj.title}</h3>

      <div class="workflow-flow-box compact">
        <div class="workflow-step">
          <span class="wf-lbl wf-lbl-problem">PROBLEM</span>
          <p class="wf-text">${proj.problem}</p>
        </div>
        <div class="workflow-step">
          <span class="wf-lbl wf-lbl-approach">APPROACH</span>
          <p class="wf-text">${proj.approach}</p>
        </div>
        <div class="workflow-step">
          <span class="wf-lbl wf-lbl-result">RESULT</span>
          <p class="wf-text wf-result-highlight">${proj.result}</p>
        </div>
      </div>

      <div class="card-tech-pills" style="margin-bottom: 1rem;">
        ${proj.technologies.slice(0, 4).map(t => `<span class="tech-pill">${t}</span>`).join("")}
      </div>

      <div class="card-action-bar">
        <button class="btn btn-card-details" data-action="open-sec-modal" data-id="${proj.id}">
          <span>View Engineering Details</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll('.project-secondary-card').forEach(card => {
    const id = card.dataset.secId;
    const project = secondaryProjects.find(p => p.id === id);

    card.querySelector('[data-action="open-sec-modal"]').addEventListener('click', (e) => {
      e.stopPropagation();
      if (project) openProjectModal(project);
    });

    card.addEventListener('click', () => {
      if (project) openProjectModal(project);
    });
  });
}

function renderAdditionalProjects(projects, container) {
  container.innerHTML = projects.map(proj => `
    <div class="additional-project-item">
      <div class="additional-item-header">
        <h4 class="additional-item-title">${proj.title}</h4>
        <span class="additional-item-cat">${proj.category}</span>
      </div>
      <p class="additional-item-desc">${proj.description}</p>
      <div class="additional-item-tech">
        ${proj.technologies.map(t => `<span class="tech-tag-sm">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}
