/**
 * Interactive RoboVITics Leadership & Execution Component
 */

import { progressionSteps, dimensionsData } from '../data/leadership.js';

export function initLeadership() {
  const progressionContainer = document.getElementById("leadership-progression-track");
  const dimensionsTabContainer = document.getElementById("leadership-dimension-tabs");
  const dimensionDetailContainer = document.getElementById("leadership-dimension-panel");

  if (progressionContainer) renderProgression(progressionSteps, progressionContainer);
  if (dimensionsTabContainer && dimensionDetailContainer) {
    renderDimensionTabs(dimensionsData, dimensionsTabContainer, dimensionDetailContainer);
    renderDimensionDetail(dimensionsData[0], dimensionDetailContainer);
  }
}

function renderProgression(steps, container) {
  container.innerHTML = steps.map((step, idx) => `
    <div class="progression-card ${idx === 1 ? 'featured-role' : ''}">
      <div class="prog-node-header">
        <span class="prog-step-num">0${idx + 1}</span>
        <span class="prog-phase-badge">${step.phase}</span>
      </div>
      <h4 class="prog-role-title">${step.role}</h4>
      <p class="prog-role-desc">${step.description}</p>
    </div>
  `).join("");
}

function renderDimensionTabs(dimensions, tabContainer, detailContainer) {
  tabContainer.innerHTML = dimensions.map((dim, idx) => `
    <button class="dim-tab-btn ${idx === 0 ? 'active' : ''}" data-dim-id="${dim.id}">
      <span class="dim-tab-title">${dim.title}</span>
    </button>
  `).join("");

  const tabs = tabContainer.querySelectorAll('.dim-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const dimId = tab.dataset.dimId;
      const targetDim = dimensions.find(d => d.id === dimId);
      if (targetDim) renderDimensionDetail(targetDim, detailContainer);
    });
  });
}

function renderDimensionDetail(dim, container) {
  let extraContentHtml = "";

  if (dim.sponsors) {
    extraContentHtml += `
      <div class="dim-extra-box">
        <h4 class="extra-box-title">Corporate Sponsor Negotiations & Partners</h4>
        <div class="sponsors-grid-2x2">
          ${dim.sponsors.map(s => `
            <div class="sponsor-card-item">
              <span class="sp-name">${s.name}</span>
              <span class="sp-area">${s.area}</span>
            </div>
          `).join("")}
        </div>

        ${dim.automationHighlight ? `
          <div class="automation-engine-card">
            <div class="auto-card-badge">TECHNICAL AUTOMATION</div>
            <h5 class="auto-card-title">${dim.automationHighlight.title}</h5>
            <p class="auto-card-desc">${dim.automationHighlight.description}</p>
            <div class="auto-card-tech">
              <span class="tech-pill">${dim.automationHighlight.tech}</span>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  if (dim.flagships) {
    extraContentHtml += `
      <div class="dim-extra-box">
        <h4 class="extra-box-title">Flagship National Technical Fests</h4>
        <div class="flagship-events-wrapper">
          ${dim.flagships.map(f => `
            <div class="flagship-event-card">
              <div class="fe-header">
                <h5 class="fe-title">${f.name}</h5>
                <span class="fe-type">${f.type}</span>
              </div>
              <div class="fe-metrics-strip">
                ${f.metrics.map(m => `
                  <div class="fe-metric-pill">
                    <strong class="fe-val">${m.val}</strong>
                    <span class="fe-lbl">${m.lbl}</span>
                  </div>
                `).join("")}
              </div>
              <p class="fe-desc">${f.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="dimension-detail-card">
      <div class="dim-panel-header">
        <h3 class="dim-panel-title">${dim.title}</h3>
        <p class="dim-panel-subtitle">${dim.subtitle}</p>
      </div>

      <p class="dim-narrative-text">${dim.narrative}</p>

      ${dim.metrics ? `
        <div class="dim-metrics-grid">
          ${dim.metrics.map(m => `
            <div class="dim-metric-box">
              <div class="dim-metric-number">${m.value}</div>
              <div class="dim-metric-label">${m.label}</div>
              <p class="dim-metric-detail">${m.detail}</p>
            </div>
          `).join("")}
        </div>
      ` : ''}

      ${extraContentHtml}
    </div>
  `;
}
