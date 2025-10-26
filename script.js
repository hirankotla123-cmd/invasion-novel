/* ======================= script.js ======================= */
const avatarBtn = document.getElementById('avatarBtn');
const dropdown = document.getElementById('dropdown');
avatarBtn.addEventListener('click', e => {
const open = dropdown.style.display === 'block';
dropdown.style.display = open ? 'none' : 'block';
avatarBtn.setAttribute('aria-expanded', String(!open));
dropdown.setAttribute('aria-hidden', String(open));
});


document.addEventListener('click', e => {
if (!avatarBtn.contains(e.target) && !dropdown.contains(e.target)) {
dropdown.style.display = 'none';
avatarBtn.setAttribute('aria-expanded', 'false');
dropdown.setAttribute('aria-hidden', 'true');
}
});


const suggestions = document.getElementById('suggestions');
const input = document.getElementById('searchInput');
const sample = [
'The Last Lighthouse', 'Dawn of Ashes', 'Letters to the River', 'Midnight Journal', 'A Quiet Rebellion'
];


input.addEventListener('input', e => {
const q = e.target.value.trim().toLowerCase();
if (!q) { suggestions.style.display = 'none'; return; }
const hits = sample.filter(s => s.toLowerCase().includes(q)).slice(0, 6);
if (hits.length === 0) { suggestions.style.display = 'none'; return; }
suggestions.innerHTML = hits.map(h => `<li tabindex="0">${h}</li>`).join('');
suggestions.style.display = 'block';
Array.from(suggestions.children).forEach(li =>
li.addEventListener('click', () => {
input.value = li.textContent;
suggestions.style.display = 'none';
})
);
});


window.addEventListener('keydown', e => {
if (e.key === '/' && document.activeElement !== input) {
e.preventDefault();
input.focus();
}
});


document.getElementById('writeBtn').addEventListener('click', () => {
window.location.href = '/write/new';
});
