/**
 * Interactive Hero Visual Canvas
 * Represents an AI / Intelligent System Inference Pipeline graph with particle physics,
 * pulse connections, live metric indicators, and mouse interactivity.
 */

export function initHeroCanvas(canvasId = "hero-canvas") {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let animationFrameId;
  let mouse = { x: null, y: null, radius: 120 };

  // System Pipeline Layer configuration
  const nodeLayers = [
    { label: "Data Telemetry", count: 4, xRatio: 0.15 },
    { label: "Feature Extraction", count: 5, xRatio: 0.40 },
    { label: "Neural Model / Core", count: 5, xRatio: 0.65 },
    { label: "System Output", count: 3, xRatio: 0.88 }
  ];

  let nodes = [];
  let connections = [];
  let pulses = [];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    buildSystemGraph();
  }

  function buildSystemGraph() {
    nodes = [];
    connections = [];

    nodeLayers.forEach((layer, layerIdx) => {
      const x = width * layer.xRatio;
      const spacing = height / (layer.count + 1);

      for (let i = 0; i < layer.count; i++) {
        const y = spacing * (i + 1);
        nodes.push({
          id: `node-${layerIdx}-${i}`,
          layerIdx,
          layerName: layer.label,
          baseX: x,
          baseY: y,
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: layerIdx === 2 ? 6 : 4.5,
          active: false,
          pulseTimer: Math.random() * 100
        });
      }
    });

    // Create forward layer connections
    nodes.forEach(sourceNode => {
      nodes.forEach(targetNode => {
        if (targetNode.layerIdx === sourceNode.layerIdx + 1) {
          // Connect with high probability
          if (Math.random() > 0.25) {
            connections.push({
              source: sourceNode,
              target: targetNode,
              alpha: 0.15 + Math.random() * 0.2
            });
          }
        }
      });
    });

    // Trigger initial pulses
    spawnPulse();
  }

  function spawnPulse() {
    const validConnections = connections;
    if (validConnections.length === 0) return;

    const randomConn = validConnections[Math.floor(Math.random() * validConnections.length)];
    pulses.push({
      conn: randomConn,
      progress: 0,
      speed: 0.015 + Math.random() * 0.025,
      size: 3
    });
  }

  function update() {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Node micro movement & mouse interaction
    nodes.forEach(node => {
      // Oscillate slightly around base point
      node.x += node.vx;
      node.y += node.vy;

      if (Math.abs(node.x - node.baseX) > 12) node.vx *= -1;
      if (Math.abs(node.y - node.baseY) > 12) node.vy *= -1;

      // Mouse influence
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= (dx / dist) * force * 3;
          node.y -= (dy / dist) * force * 3;
          node.active = true;
        } else {
          node.active = false;
        }
      }
    });

    // Update pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.progress += p.speed;
      if (p.progress >= 1) {
        pulses.splice(i, 1);
        // Chain pulse forward occasionally
        if (Math.random() > 0.4) spawnPulse();
      }
    }

    // Periodically spawn new pulses
    if (Math.random() < 0.08 && pulses.length < 12) {
      spawnPulse();
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw background grid lines (subtle blueprint tech feel)
    ctx.strokeStyle = "rgba(37, 99, 235, 0.03)";
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw connections
    connections.forEach(conn => {
      const isMouseNear = mouse.x !== null && 
        (Math.hypot(mouse.x - conn.source.x, mouse.y - conn.source.y) < mouse.radius ||
         Math.hypot(mouse.x - conn.target.x, mouse.y - conn.target.y) < mouse.radius);

      ctx.beginPath();
      ctx.moveTo(conn.source.x, conn.source.y);
      ctx.lineTo(conn.target.x, conn.target.y);

      if (isMouseNear) {
        ctx.strokeStyle = "rgba(37, 99, 235, 0.4)";
        ctx.lineWidth = 1.5;
      } else {
        ctx.strokeStyle = `rgba(148, 163, 184, ${conn.alpha})`;
        ctx.lineWidth = 1;
      }
      ctx.stroke();
    });

    // Draw pulses
    pulses.forEach(p => {
      const sx = p.conn.source.x;
      const sy = p.conn.source.y;
      const tx = p.conn.target.x;
      const ty = p.conn.target.y;

      const px = sx + (tx - sx) * p.progress;
      const py = sy + (ty - sy) * p.progress;

      // Glow effect
      ctx.beginPath();
      ctx.arc(px, py, p.size + 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(37, 99, 235, 0.25)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "#2563EB";
      ctx.fill();
    });

    // Draw nodes
    nodes.forEach(node => {
      // Outer subtle ring
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius + (node.active ? 4 : 2), 0, Math.PI * 2);
      ctx.fillStyle = node.active ? "rgba(37, 99, 235, 0.15)" : "rgba(226, 232, 240, 0.6)";
      ctx.fill();

      // Node core
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.active ? "#2563EB" : (node.layerIdx === 2 ? "#1D4ED8" : "#475569");
      ctx.fill();

      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  }

  function loop() {
    update();
    render();
    animationFrameId = requestAnimationFrame(loop);
  }

  // Event Listeners
  window.addEventListener("resize", resize);

  canvas.parentElement.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  canvas.parentElement.addEventListener("click", e => {
    const rect = canvas.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    // Trigger multiple pulses from nearest node
    let nearest = null;
    let minDist = Infinity;
    nodes.forEach(node => {
      const d = Math.hypot(cx - node.x, cy - node.y);
      if (d < minDist) {
        minDist = d;
        nearest = node;
      }
    });

    if (nearest) {
      connections.forEach(conn => {
        if (conn.source === nearest || conn.target === nearest) {
          pulses.push({
            conn: conn,
            progress: 0,
            speed: 0.03,
            size: 4
          });
        }
      });
    }
  });

  resize();
  loop();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", resize);
  };
}
