
 // Native anchor links handle navigation and scrolling.
 // This script manages the mobile menu, theme, and footer year.
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
(function() {
  const toggleBtn = document.getElementById('sd-chat-toggle');
  const closeBtn = document.getElementById('sd-chat-close');
  const chatBox = document.getElementById('sd-chat-box');
  const messages = document.getElementById('sd-chat-messages');
  const form = document.getElementById('sd-chat-form');
  const input = document.getElementById('sd-chat-input');

  if (!toggleBtn || !chatBox) return;

  toggleBtn.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
  });
  closeBtn.addEventListener('click', () => { chatBox.style.display = 'none'; });

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
  }

  function getReply(q) {
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
    if (text.includes('contact') || text.includes('ping') || text.includes('email') || text.includes('phone') || text.includes('reach') || text.includes('hire')) {
      return 'You can reach Sudheer directly:<br>📧 <a href="mailto:sudheernaidud@://gmail.com" style="color:#38bdf8;">sudheernaidud@gmail.com</a><br>💬 <a href="https://wa.me" target="_blank" rel="noopener" style="color:#10b981;">Ping on WhatsApp ↗</a>';
    }
    return 'I currently answer questions about Sudheer\'s <strong>experience</strong>, <strong>15-member team leadership</strong>, <strong>technical skills</strong>, or <strong>contact options</strong>—or you can <a href="mailto:sudheernaidud@://gmail.com' + encodeURIComponent(q) + '" style="color:#38bdf8;">send this message directly to his email ↗</a>.';
  }

  document.querySelectorAll('.sd-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-q');
      addMessage(q, true);
      setTimeout(() => addMessage(getReply(q), false), 250);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    addMessage(q, true);
    input.value = '';
    setTimeout(() => addMessage(getReply(q), false), 250);
  });
})();

