/**
 * Technical Skills Component Renderer
 */

import { skillCategories } from '../data/skills.js';

export function initSkills() {
  const container = document.getElementById("skills-categories-grid");
  if (!container) return;

  container.innerHTML = skillCategories.map(cat => `
    <div class="skill-category-card" data-category-id="${cat.id}">
      <div class="skill-category-header">
        <div class="skill-cat-icon">
          ${getCategoryIcon(cat.icon)}
        </div>
        <div class="skill-cat-title-group">
          <h3 class="skill-cat-title">${cat.title}</h3>
          <p class="skill-cat-desc">${cat.description}</p>
        </div>
      </div>

      <div class="skills-pill-grid">
        ${cat.skills.map(s => `
          <div class="skill-pill" data-project-ref="${s.projectRef}">
            <div class="skill-pill-top">
              <span class="skill-name">${s.name}</span>
              <span class="skill-tag">${s.category}</span>
            </div>
            <div class="skill-project-ref-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <span>Used in: <strong>${s.projectRef}</strong></span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function getCategoryIcon(type) {
  switch (type) {
    case 'brain':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a9.96 9.96 0 0 1 7.07 2.93A10 10 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12A10 10 0 0 1 12 2z"></path><path d="M12 6v6l4 2"></path></svg>`;
    case 'code':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case 'database':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"></path></svg>`;
    case 'layout':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`;
    case 'cloud':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`;
    case 'cpu':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}
