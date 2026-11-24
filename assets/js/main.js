/*======================================================================
  FRACTURE FTC TEAM #37687 — Main JavaScript
  Shared navigation, footer, mobile menu, and interactions
======================================================================*/

(function () {
  "use strict";

  const CONTENT = window.FRACTURE_CONTENT || {};
  const ID = CONTENT.identity || {};

  // ------------------------------------------------------------------
  // Helpers
  // ------------------------------------------------------------------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const logoPath = ID.logo || "assets/icons/fracture-logo.png";
  const logoFallback = ID.logoFallback || "assets/icons/fracture-logo.jpg";

  const navItems = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "about", label: "About Us", href: "about.html" },
    { key: "robot", label: "Our Robot", href: "robot.html" },
    { key: "achievements", label: "Achievements", href: "achievements.html" },
    { key: "contact", label: "Contact Us", href: "contact.html" }
  ];

  // Detect current page from path
  function currentPageKey() {
    const path = window.location.pathname;
    const file = path.split("/").pop() || "index.html";
    const match = navItems.find((n) => n.href === file);
    return match ? match.key : "home";
  }

  // ------------------------------------------------------------------
  // Navigation bar (shared across pages)
  // ------------------------------------------------------------------
  function renderNav() {
    const header = $("header.site-header");
    if (!header) return;

    const key = currentPageKey();

    header.innerHTML = `
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="${ID.teamName || "FRACTURE"} — home">
          <img src="${logoPath}" alt="${ID.teamName || "FRACTURE"} logo"
               onerror="this.src='${logoFallback}'; this.alt='${ID.teamName || "FRACTURE"} logo';"
               loading="eager" decoding="async" width="40" height="40">
          <span class="wordmark">${ID.teamName || "FRACTURE"}</span>
        </a>

        <nav class="desktop-nav" aria-label="Primary navigation">
          <ul class="nav-list">
            ${navItems.map((n) => {
              const active = n.key === key ? ' class="nav-link--active"' : "";
              return `<li><a href="${n.href}" class="nav-link"${active}>${n.label}</a></li>`;
            }).join("")}
          </ul>
        </nav>

        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Open menu" aria-expanded="false">
          <span class="hamburger" aria-hidden="true"></span>
        </button>

        <div class="mobile-menu" id="mobile-menu">
          ${navItems.map((n) => {
            const active = n.key === key ? ' class="mobile-link--active"' : "";
            return `<a href="${n.href}" class="mobile-link"${active}>${n.label}</a>`;
          }).join("")}
        </div>
      </div>
    `;

    setupMobileMenu();
  }

  function setupMobileMenu() {
    const toggle = $("#mobile-menu-toggle");
    const menu = $("#mobile-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const open = toggle.classList.toggle("open");
      menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });

    // Close menu when clicking a link
    $$(".mobile-link", menu).forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggle.classList.remove("open");
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ------------------------------------------------------------------
  // Footer (shared across pages)
  // ------------------------------------------------------------------
  function renderFooter() {
    const footer = $("footer.site-footer");
    if (!footer) return;

    const socials = ID.socials || {};
    const socialList = [
      { label: "Instagram", url: socials.instagram, icon: "I" },
      { label: "YouTube", url: socials.youtube, icon: "Y" },
      { label: "GitHub", url: socials.github, icon: "G" }
    ];

    const socialHtml = socialList
      .map(
        (s) => `
        <a class="footer-social" href="${s.url || "#"}" aria-label="${s.label}"
           ${!s.url ? 'aria-disabled="true" tabindex="-1"' : ""}
           title="${s.url ? s.label : s.label + " — link pending"}"
           style="${!s.url ? "opacity:0.5; pointer-events:none;" : ""}">
          ${s.icon}
        </a>`
      )
      .join("");

    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${logoPath}" alt="${ID.teamName || "FRACTURE"} logo"
                 onerror="this.src='${logoFallback}'; this.alt='${ID.teamName || "FRACTURE"} logo';"
                 loading="eager" decoding="async" width="36" height="36">
            <span class="wordmark">${ID.teamName || "FRACTURE"}</span>
          </div>
          <div class="footer-team-id">
            FTC TEAM #${ID.teamNumber || "37687"}
          </div>
        </div>

        <div class="footer-links" id="footer-links"></div>

        <div class="footer-bottom">
          <div class="footer-copy">
            ${ID.teamName || "FRACTURE"} &mdash; FTC Team #${ID.teamNumber || "37687"}
          </div>
          <div class="footer-socials">
            ${socialHtml}
          </div>
        </div>
      </div>
    `;

    renderFooterLinks();
  }

  function renderFooterLinks() {
    const container = $("#footer-links");
    if (!container) return;

    const groups = [
      {
        title: "Team",
        links: [
          { label: "About Us", href: "about.html" },
          { label: "Our Robot", href: "robot.html" },
          { label: "Achievements", href: "achievements.html" }
        ]
      },
      {
        title: "Contact",
        links: [
          { label: "Contact Us", href: "contact.html" },
          {
            label: "Email",
            href: `mailto:${ID.contactEmail || "fracture37687@example.com"}`,
            external: true
          }
        ]
      }
    ];

    const html = groups
      .map(
        (g) => `
        <div class="footer-link-group">
          <div class="footer-link-group__title">${g.title}</div>
          <div class="footer-link-group__list">
            ${g.links
              .map(
                (l) => `
                <a class="footer-link-group__item" href="${l.href}">
                  ${l.label}
                </a>`
              )
              .join("")}
          </div>
        </div>`
      )
      .join("");

    container.innerHTML = html;
  }

  // ------------------------------------------------------------------
  // Scroll reveal animations
  // ------------------------------------------------------------------
  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    $$(".reveal").forEach((el) => observer.observe(el));
  }

  // ------------------------------------------------------------------
  // Initialize
  // ------------------------------------------------------------------
  function init() {
    renderNav();
    renderFooter();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
