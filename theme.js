// Optimity — theme toggle. Light is default; respects saved choice and OS preference.
(function () {
  var KEY = 'optimity-theme';
  var root = document.documentElement;

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var btns = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = theme === 'dark' ? '◑ Light' : '◐ Dark';
      btns[i].setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Default to light unless the user previously chose dark.
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === 'dark' ? 'dark' : 'light');

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-theme-toggle]');
    if (!t) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });

  // Mobile menu: keyboard toggle on the label, and close after choosing a link.
  document.addEventListener('keydown', function (e) {
    var t = e.target.closest && e.target.closest('.menu-btn');
    if (!t) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      var cb = document.getElementById('nav-cb');
      if (cb) cb.checked = !cb.checked;
    }
  });
  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('.navlinks a.link');
    if (!link) return;
    var cb = document.getElementById('nav-cb');
    if (cb) cb.checked = false;
  });

})();

// SMIL animations ignore the CSS reduced-motion kill-switch; pause them explicitly.
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('svg').forEach(function (s) {
      if (typeof s.pauseAnimations === 'function') s.pauseAnimations();
    });
  }
})();
