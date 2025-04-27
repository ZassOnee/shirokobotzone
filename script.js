const popup = document.getElementById('popup');
const syarat = document.getElementById('syarat');
const content = document.getElementById('content');
const cariScript = document.getElementById('cariScript');
const cariLoli = document.getElementById('cariLoli');
const okButton = document.getElementById('okButton');

let sudahSubscribe = false;
let sudahFollow = false;
let sudahJoin = false;

// Button Aksi
cariScript.addEventListener('click', () => {
  popup.classList.add('hidden');
  syarat.classList.remove('hidden');
});

cariLoli.addEventListener('click', () => {
  cariLoli.textContent = "Gada loli disini, dah habis digarap atmin!";
  cariLoli.disabled = true;
});

document.getElementById('subscribe').addEventListener('click', () => {
  window.open('https://www.youtube.com/@zassonee', '_blank');
  sudahSubscribe = true;
  cekSyarat();
  tandaCheck('subscribe');
});

document.getElementById('follow').addEventListener('click', () => {
  window.open('https://whatsapp.com/channel/0029Vb615brAzNbywHCyRc1w', '_blank');
  sudahFollow = true;
  cekSyarat();
  tandaCheck('follow');
});

document.getElementById('join').addEventListener('click', () => {
  window.open('https://chat.whatsapp.com/Bvdic3yrpFh5kTkk5oc5G0', '_blank');
  sudahJoin = true;
  tandaCheck('join');
});

okButton.addEventListener('click', () => {
  syarat.classList.add('hidden');
  content.classList.remove('hidden');
});

// Function cek syarat
function cekSyarat() {
  if (sudahSubscribe && sudahFollow) {
    okButton.disabled = false;
    okButton.classList.remove('disabled');
  }
}

// Function checklist tombol
function tandaCheck(id) {
  const btn = document.getElementById(id);
  btn.style.backgroundColor = '#4CAF50';
  btn.textContent = "✔ Selesai";
}

// Dummy List Script
const scripts = [
  { name: "Bot WhatsApp MD", desc: "Bot WA support MD terbaru!", download: "#", share: "#" },
  { name: "Panel Creator", desc: "Script panel bot keren dan simple.", download: "#" },
];

// Tampilkan List Script
const scriptList = document.getElementById('scriptList');

function tampilScript() {
  scriptList.innerHTML = "";
  scripts.forEach(s => {
    const div = document.createElement('div');
    div.className = 'script-card';
    div.innerHTML = `
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <button onclick="window.location.href='${s.download}'">Download</button>
      <button onclick="alert('${s.desc}')">Tentang</button>
      <button onclick="navigator.clipboard.writeText('${window.location.href}')">Bagikan</button>
    `;
    scriptList.appendChild(div);
  });
}

// Search Script
document.getElementById('searchInput').addEventListener('input', function(e) {
  const keyword = e.target.value.toLowerCase();
  const filtered = scripts.filter(s => s.name.toLowerCase().includes(keyword));
  scriptList.innerHTML = "";
  filtered.forEach(s => {
    const div = document.createElement('div');
    div.className = 'script-card';
    div.innerHTML = `
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <button onclick="window.location.href='${s.download}'">Download</button>
      <button onclick="alert('${s.desc}')">Tentang</button>
      <button onclick="navigator.clipboard.writeText('${window.location.href}')">Bagikan</button>
    `;
    scriptList.appendChild(div);
  });
  updateShiroko('search');
});

tampilScript();

// Update Shiroko Mood
function updateShiroko(mode) {
  const shirokoImage = document.getElementById('shirokoImage');
  const shirokoText = document.getElementById('shirokoText');

  if (mode === "search") {
    shirokoImage.src = "https://i.ibb.co/qRmxLb1/shiroko-chibi-tanya.png";
    shirokoText.textContent = "Lagi cari sesuatu ya? Hihi~ ketik aja!";
  } else if (mode === "download") {
    shirokoImage.src = "https://i.ibb.co/BqjP69Z/shiroko-chibi-download.png";
    shirokoText.textContent = "Yoshhh~ File siap diunduh, semangat!";
  } else if (mode === "share") {
    shirokoImage.src = "https://i.ibb.co/5v9HhpS/shiroko-chibi-share.png";
    shirokoText.textContent = "Bagikan script ini ke temanmu yaa~";
  }
}
