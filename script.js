(function () {
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const storedTheme = localStorage.getItem('theme');
  const isLight = storedTheme ? storedTheme === 'light' : prefersLight;
  if (isLight) document.documentElement.classList.add('light');

  const themeToggle = document.getElementById('themeToggle');
  const langToggle = document.getElementById('langToggle');

  function updateThemeButton() {
    const light = document.documentElement.classList.contains('light');
    themeToggle.setAttribute('aria-pressed', String(light));
    themeToggle.textContent = light ? '???? ????' : '???? ????';
  }

  updateThemeButton();

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    const light = document.documentElement.classList.contains('light');
    localStorage.setItem('theme', light ? 'light' : 'dark');
    updateThemeButton();
  });

  // Language toggle (fa/en)
  const faIds = ['title-fa', 'subtitle-fa', 'foot-fa'];
  const enIds = ['title-en', 'subtitle-en', 'foot-en'];

  function setLang(lang) {
    const isFa = lang === 'fa';
    document.documentElement.setAttribute('lang', isFa ? 'fa' : 'en');
    document.documentElement.setAttribute('dir', isFa ? 'rtl' : 'ltr');
    for (const id of faIds) document.getElementById(id).classList.toggle('hidden', !isFa);
    for (const id of enIds) document.getElementById(id).classList.toggle('hidden', isFa);
    langToggle.textContent = isFa ? 'EN' : 'FA';
    localStorage.setItem('lang', isFa ? 'fa' : 'en');
  }

  const storedLang = localStorage.getItem('lang');
  setLang(storedLang || 'fa');

  langToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('lang') || 'fa';
    setLang(current === 'fa' ? 'en' : 'fa');
  });
})();
