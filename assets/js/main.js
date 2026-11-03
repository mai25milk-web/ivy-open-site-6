// メニューの開閉・トップ画面の出現・スクロールで出てくる要素
(() => {
  const btn = document.querySelector('.menu-btn'), nav = document.getElementById('gnav');
  btn.addEventListener('click', () => { const open = btn.getAttribute('aria-expanded') !== 'true'; btn.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); } });

  requestAnimationFrame(() => document.body.classList.add('is-ready'));

  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
})();
