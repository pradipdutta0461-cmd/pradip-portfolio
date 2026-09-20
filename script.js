const links = document.querySelectorAll('.nav nav a');
const sections = [...document.querySelectorAll('main section[id]')];
const update = () => {
  const y = window.scrollY + 120;
  sections.forEach(s => {
    const active = y >= s.offsetTop && y < s.offsetTop + s.offsetHeight;
    const link = document.querySelector(`.nav nav a[href="#${s.id}"]`);
    if (link) link.style.color = active ? 'var(--text)' : '';
  });
};
window.addEventListener('scroll', update, {passive:true});
update();
