/* =========================================================
   CONFIGURAÇÕES DO PROJETO

   Edite apenas esta área para personalizar o Lism Orbit:
   - Nome e frases: campos de texto abaixo.
   - Links: altere "url" em cada item.
   - Cores: altere "color" usando hexadecimal.
   - Ícones: altere "icon" por um emoji ou símbolo.
   - Currículo: coloque o caminho do PDF, por exemplo "curriculo.pdf".
   - WhatsApp: use "https://wa.me/55DDDNUMERO".
   - Redes sociais: edite o array "socialLinks".
   ========================================================= */

const PROJECT_CONFIG = {
  projectName: "LISM ORBIT",
  subtitle: "Your digital universe.",
  descriptionLine1: "Projetos, conexões e ideias.",
  descriptionLine2: "Tudo conectado em um só lugar.",
  footerPhrase: "BUILD. LEARN. EVOLVE.",
  copyright: "© 2026 Lism Technologies. Todos os direitos reservados.",

  links: [
    {
      title: "Portfólio",
      description: "Veja meus projetos e trabalhos",
      url: "https://portfolio-igor-psi.vercel.app/",
      icon: "▣",
      color: "#2587ff"
    },
    {
      title: "GitHub",
      description: "Acesse meus repositórios",
      url: "https://github.com/oygozz",
      icon: "◉",
      color: "#8a4dff"
    },
    {
      title: "LinkedIn",
      description: "Conecte-se comigo",
      url: "#",
      icon: "in",
      color: "#248dff"
    },
    {
      title: "Ignite by Lism",
      description: "Plataforma em desenvolvimento",
      url: "#",
      icon: "♨",
      color: "#ff6847"
    },
    {
      title: "Lism Technologies",
      description: "Inovação que conecta",
      url: "#",
      icon: "⌞",
      color: "#3477ff"
    },
    {
      title: "Currículo",
      description: "Baixe meu currículo em PDF",
      url: "#", // Troque por "curriculo.pdf" e coloque o PDF na pasta do projeto.
      icon: "▤",
      color: "#b044ff"
    },
    {
      title: "Contato",
      description: "Fale comigo no WhatsApp",
      url: "https://wa.me/98985847044", // Exemplo: "https://wa.me/5591999999999"
      icon: "◔",
      color: "#31e6a1"
    }
  ],

  socialLinks: [
    {
      title: "Instagram",
      url: "https://www.instagram.com/lismtechnologies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: "◎",
      color: "#a44cff"
    },
    {
      title: "Email",
      url: "technologieslism@gmail.com", // Exemplo: "mailto:seuemail@email.com"
      icon: "✉",
      color: "#4c7dff"
    },
    {
      title: "GitHub",
      url: "https://github.com/oygozz",
      icon: "◉",
      color: "#8b56ff"
    },
    {
      title: "YouTube",
      url: "#",
      icon: "▶",
      color: "#a84bff"
    }
  ]
};

/* =========================================================
   GERAÇÃO DA INTERFACE
   Não é necessário editar abaixo para trocar os conteúdos.
   ========================================================= */

const elements = {
  projectName: document.querySelector("#project-name"),
  subtitle: document.querySelector("#project-subtitle"),
  descriptionLine1: document.querySelector("#description-line-1"),
  descriptionLine2: document.querySelector("#description-line-2"),
  footerPhrase: document.querySelector("#footer-phrase"),
  copyright: document.querySelector("#copyright"),
  linksList: document.querySelector("#links-list"),
  socialLinks: document.querySelector("#social-links"),
  toast: document.querySelector("#toast")
};

function applyProjectText() {
  elements.projectName.textContent = PROJECT_CONFIG.projectName;
  elements.subtitle.textContent = PROJECT_CONFIG.subtitle;
  elements.descriptionLine1.textContent = PROJECT_CONFIG.descriptionLine1;
  elements.descriptionLine2.textContent = PROJECT_CONFIG.descriptionLine2;
  elements.footerPhrase.textContent = PROJECT_CONFIG.footerPhrase;
  elements.copyright.textContent = PROJECT_CONFIG.copyright;

  document.title = `${PROJECT_CONFIG.projectName} | ${PROJECT_CONFIG.subtitle}`;
}

function createMainLink(link, index) {
  const anchor = document.createElement("a");
  anchor.className = "orbit-link";
  anchor.href = link.url || "#";
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.setAttribute("aria-label", `${link.title}: ${link.description}`);
  anchor.style.setProperty("--link-color", link.color);
  anchor.style.animationDelay = `${0.35 + index * 0.08}s`;

  anchor.innerHTML = `
    <span class="link-icon" aria-hidden="true">${link.icon}</span>
    <span class="link-copy">
      <span class="link-title">${link.title}</span>
      <span class="link-description">${link.description}</span>
    </span>
    <span class="link-arrow" aria-hidden="true">→</span>
  `;

  protectPlaceholderLink(anchor, link.title);
  return anchor;
}

function createSocialLink(link, index) {
  const anchor = document.createElement("a");
  anchor.className = "social-link";
  anchor.href = link.url || "#";
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.title = link.title;
  anchor.setAttribute("aria-label", link.title);
  anchor.style.setProperty("--link-color", link.color);
  anchor.style.animationDelay = `${0.95 + index * 0.08}s`;
  anchor.textContent = link.icon;

  protectPlaceholderLink(anchor, link.title);
  return anchor;
}

function protectPlaceholderLink(anchor, title) {
  if (anchor.getAttribute("href") !== "#") return;

  anchor.removeAttribute("target");
  anchor.removeAttribute("rel");
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`${title}: link em breve.`);
  });
}

let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");

  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("visible");
  }, 2200);
}

function renderLinks() {
  const mainFragment = document.createDocumentFragment();
  const socialFragment = document.createDocumentFragment();

  PROJECT_CONFIG.links.forEach((link, index) => {
    mainFragment.appendChild(createMainLink(link, index));
  });

  PROJECT_CONFIG.socialLinks.forEach((link, index) => {
    socialFragment.appendChild(createSocialLink(link, index));
  });

  elements.linksList.replaceChildren(mainFragment);
  elements.socialLinks.replaceChildren(socialFragment);
}

applyProjectText();
renderLinks();
