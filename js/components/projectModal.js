/**
 * Reusable Project Case-Study Modal Manager
 * Displays Engineering Decisions, Architectural Trade-offs, SVG diagrams, and Links.
 */

export function openProjectModal(project) {
  const modalContainer = document.getElementById("project-modal-container");
  if (!modalContainer) return;

  const githubBtn = project.github
    ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>View GitHub Code</span>
       </a>`
    : `<button class="btn btn-disabled" title="GitHub link will be attached soon" disabled>
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>GitHub (Pending Link)</span>
       </button>`;

  const liveDemoBtn = project.liveDemo
    ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        <span>Live System Demo</span>
       </a>`
    : `<button class="btn btn-disabled" title="Live demo link will be attached soon" disabled>
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        <span>Live Demo (Soon)</span>
       </button>`;

  const metricsHtml = project.metrics
    ? `<div class="modal-metrics-grid">
        ${project.metrics.map(m => `
          <div class="modal-metric-card">
            <span class="metric-val">${m.value}</span>
            <span class="metric-lbl">${m.label}</span>
          </div>
        `).join("")}
       </div>`
    : "";

  const techBadges = project.technologies.map(t => `<span class="tech-badge">${t}</span>`).join(" ");

  const archSvgContainer = project.architectureDiagram
    ? `<div class="arch-diagram-wrapper">
        <div class="arch-diagram-label">SYSTEM ARCHITECTURE PIPELINE</div>
        ${project.architectureDiagram}
       </div>`
    : "";

  const decisionsHtml = project.engineeringDecisions
    ? `<div class="modal-section">
        <h3 class="modal-section-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          Key Engineering Decisions & Trade-Offs
        </h3>
        <div class="decisions-list-wrapper">
          ${project.engineeringDecisions.map(d => `
            <div class="decision-box">
              <h4 class="decision-title">Design Decision: ${d.decision}</h4>
              <p class="decision-rationale"><strong>Rationale & Trade-off:</strong> ${d.rationale}</p>
            </div>
          `).join("")}
        </div>
       </div>`
    : "";

  modalContainer.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop-overlay">
      <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close-btn" id="modal-close-trigger" aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div class="modal-header">
          <div class="modal-category-badge">${project.badge || project.category}</div>
          <h2 class="modal-title" id="modal-title">${project.title}</h2>
          <p class="modal-subtitle">${project.subtitle || project.description || ''}</p>
          <div class="modal-tech-stack">${techBadges}</div>
        </div>

        <div class="modal-body">
          ${metricsHtml}

          ${archSvgContainer}

          <div class="modal-section">
            <h3 class="modal-section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              Problem Statement
            </h3>
            <p class="modal-text">${project.problem}</p>
          </div>

          <div class="modal-section">
            <h3 class="modal-section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Engineering Solution & Algorithmic Approach
            </h3>
            <p class="modal-text">${project.approach}</p>
          </div>

          ${decisionsHtml}

          <div class="modal-section">
            <h3 class="modal-section-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Validated Results & Performance
            </h3>
            <p class="modal-text">${project.result}</p>
          </div>
        </div>

        <div class="modal-footer">
          <div class="modal-cta-group">
            ${githubBtn}
            ${liveDemoBtn}
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.classList.add("modal-open");

  const closeBtn = document.getElementById("modal-close-trigger");
  const overlay = document.getElementById("modal-backdrop-overlay");

  function closeModal() {
    modalContainer.innerHTML = "";
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", handleKeyDown);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener("keydown", handleKeyDown);
}
