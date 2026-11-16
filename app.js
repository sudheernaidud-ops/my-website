// Native anchor links handle navigation and scrolling.
// This script manages the mobile menu, theme, footer year, and Gemini AI assistant.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuButton && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };

  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', closeMenu)
  );

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

const themeButton = document.querySelector('.theme-toggle');
const root = document.documentElement;
let savedTheme = null;

try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch (_) {}

if (savedTheme === 'light') root.classList.add('light');

function syncThemeButton() {
  if (!themeButton) return;
  const light = root.classList.contains('light');
  themeButton.textContent = light ? '☾' : '☀';
  themeButton.setAttribute('aria-label',
    light ? 'Switch to dark theme' : 'Switch to light theme');
}

syncThemeButton();

themeButton?.addEventListener('click', () => {
  root.classList.toggle('light');
  try {
    localStorage.setItem('portfolio-theme',
      root.classList.contains('light') ? 'light' : 'dark');
  } catch (_) {}
  syncThemeButton();
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const navigation = [...document.querySelectorAll('.nav-links a[href^="#"]')];

function setActiveLink() {
  const current = location.hash || '#home';
  navigation.forEach(link => {
    const active = link.getAttribute('href') === current;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('hashchange', setActiveLink);
setActiveLink();

/*(function () {
  const toggleBtn = document.getElementById('sd-chat-toggle');
  const closeBtn = document.getElementById('sd-chat-close');
  const chatBox = document.getElementById('sd-chat-box');
  const messages = document.getElementById('sd-chat-messages');
  const form = document.getElementById('sd-chat-form');
  const input = document.getElementById('sd-chat-input');

  if (!toggleBtn || !chatBox) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = window.getComputedStyle(chatBox).display === 'none';
    chatBox.style.display = isHidden ? 'block' : 'none';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatBox.style.display = 'none';
    });
  }

  function addMessage(html, isUser) {
    const div = document.createElement('div');
    div.style.padding = '9px 12px';
    div.style.borderRadius = '12px';
    div.style.maxWidth = '88%';
    div.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
    div.style.background = isUser ? '#0284c7' : '#1e293b';
    div.innerHTML = html;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  async function askGemini(question) {
    const text = question.toLowerCase();
    if (text.includes('ping') || text.includes('whatsapp') || text.includes('contact') || text.includes('hire')) {
      const emailLink = 'mailto:' + 'sudheernaidud@' + '://gmail.com';
      const waLink = 'https://' + 'wa.me/917093345685?text=Hi%20Sudheer%2C%20I%20visited%20your%20IT%20Operations%20portfolio';
      addMessage('You can reach Sudheer directly:<br>📧 <a href="' + emailLink + '" style="color:#38bdf8;">sudheernaidud@gmail.com</a><br>💬 <a href="' + waLink + '" target="_blank" rel="noopener" style="color:#10b981;">Ping on WhatsApp ↗</a>', false);
      return;
    }

    const typingBubble = addMessage('<em style="opacity:0.75;">Thinking...</em>', false);

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });
      const data = await res.json();
      typingBubble.innerHTML = (data.reply || 'No response received.').replace(/\n/g, '<br>');
    } catch (e) {
      typingBubble.innerHTML = 'Unable to reach AI right now. Email Sudheer at sudheernaidud@gmail.com.';
    }
  }

  document.querySelectorAll('.sd-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-q');
      addMessage(q, true);
      askGemini(q);
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      addMessage(q, true);
      input.value = '';
      askGemini(q);
    });
  }
})();*/
// --- ACTIVE VERSION FOR GITHUB PAGES ---
// --- ACTIVE VERSION FOR GITHUB PAGES (PROFILE + GENERAL AI) ---
(function () {
  const toggleBtn = document.getElementById('sd-chat-toggle');
  const closeBtn = document.getElementById('sd-chat-close');
  const chatBox = document.getElementById('sd-chat-box');
  const messages = document.getElementById('sd-chat-messages');
  const form = document.getElementById('sd-chat-form');
  const input = document.getElementById('sd-chat-input');

  if (!toggleBtn || !chatBox) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = window.getComputedStyle(chatBox).display === 'none';
    chatBox.style.display = isHidden ? 'block' : 'none';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatBox.style.display = 'none';
    });
  }

  function addMessage(html, isUser) {
    const div = document.createElement('div');
    div.style.padding = '9px 12px';
    div.style.borderRadius = '12px';
    div.style.maxWidth = '88%';
    div.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
    div.style.background = isUser ? '#0284c7' : '#1e293b';
    div.innerHTML = html;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  function getProfileReply(q) {
    const text = q.toLowerCase();
    if (text.includes('lead') || text.includes('team') || text.includes('15') || text.includes('roster')) {
      return "Since <strong>Jan 2024</strong> at Tech Mahindra, Sudheer leads a <strong>15-member operations team</strong>—managing shift rosters, leave/timesheet approvals, performance appraisals, bug queue triage, client evaluation launches, and mandatory certifications.";
    }
    if (text.includes('skill') || text.includes('tool') || text.includes('oracle') || text.includes('aws') || text.includes('servicenow')) {
      return "Core toolkit: <strong>ServiceNow ITSM</strong>, <strong>Oracle & MS SQL Server</strong>, <strong>AWS (Certified Cloud Practitioner) & Azure</strong>, <strong>Linux/Windows Server</strong>, <strong>Grafana & Datadog</strong>, VMware, OpenStack, and ITIL Incident/Problem/Change Management.";
    }
    if (text.includes('exp') || text.includes('career') || text.includes('work') || text.includes('history') || text.includes('summary')) {
      return "Sudheer has <strong>10+ years of IT Support & Infrastructure experience</strong> across India and the UK (Tech Mahindra, IT Convergence, Accutor UK, Bharti Infotel) plus an <strong>MSc in Applied Computing</strong> from Edinburgh Napier University, UK.";
    }
    if (text.includes('contact') || text.includes('ping') || text.includes('email') || text.includes('phone') || text.includes('reach') || text.includes('hire') || text.includes('whatsapp')) {
      const emailLink = 'mailto:' + 'sudheernaidud@' + '://gmail.com';
      const waLink = 'https://' + 'wa.me/917093345685?text=Hi%20Sudheer%2C%20I%20visited%20your%20IT%20Operations%20portfolio';
      return 'You can reach Sudheer directly:<br>📧 <a href="' + emailLink + '" style="color:#38bdf8;">sudheernaidud@gmail.com</a><br>💬 <a href="' + waLink + '" target="_blank" rel="noopener" style="color:#10b981;">Ping on WhatsApp ↗</a>';
    }
    return null;
  }

  async function handleQuestion(q) {
    const profileAnswer = getProfileReply(q);
    if (profileAnswer) {
      setTimeout(() => addMessage(profileAnswer, false), 250);
      return;
    }

    const typingBubble = addMessage('<em style="opacity:0.75;">Thinking...</em>', false);

    try {
      const prompt = "You are Sudheernaidu Doppalapudi's helpful AI assistant on his IT Operations portfolio. Answer concisely in 2 to 4 sentences: " + q;
      const aiUrl = "https://" + "text.pollinations.ai/" + encodeURIComponent(prompt);
      const res = await fetch(aiUrl);
      const replyText = await res.text();
      typingBubble.innerHTML = replyText ? replyText.replace(/\n/g, '<br>') : "I couldn't fetch an answer right now.";
    } catch (err) {
      const directEmail = 'mailto:' + 'sudheernaidud@' + '://gmail.com' + encodeURIComponent(q);
      typingBubble.innerHTML = 'AI service is temporarily busy. You can <a href="' + directEmail + '" style="color:#38bdf8;">email your question directly to Sudheer ↗</a>.';
    }
  }

  document.querySelectorAll('.sd-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-q');
      addMessage(q, true);
      handleQuestion(q);
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      addMessage(q, true);
      input.value = '';
      handleQuestion(q);
    });
  }
})();
