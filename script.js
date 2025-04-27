// Popup Awal Muncul
window.onload = function() {
    setTimeout(function() {
        document.getElementById('welcome-popup').style.display = 'flex';
    }, 500); // Popup muncul dengan delay
};

// Tombol "Cari Loli"
function noLoli() {
    document.getElementById('btn-cari-loli').innerHTML = "Gada loli di sini dah habis di garap atmin";
    document.getElementById('btn-cari-loli').disabled = true;
    document.getElementById('btn-cari-loli').style.cursor = 'not-allowed';
}

// Tombol "Cari Script"
function showRequirements() {
    document.getElementById('btn-cari-script').innerHTML = "Eyytt ada syarat nya loh..";
    document.getElementById('btn-cari-loli').style.display = 'none';
    document.getElementById('btn-cari-script').insertAdjacentHTML('afterend', `
        <p>1. Subscribe channel yt</p>
        <p>2. Follow saluran</p>
        <p>3. Join grup (ga wajib)</p>
        <button onclick="showTaskRequirements()">Siap</button>
    `);
}

// Menampilkan syarat tugas
function showTaskRequirements() {
    document.getElementById('btn-cari-script').innerHTML = "Syarat-syarat sudah ada, klik Ok setelah selesai!";
    document.getElementById('script-list').style.display = 'block';
}

// Pop-up Tentang Script
function showAbout(script) {
    alert("Deskripsi tentang " + script);
}

// Bagikan link
function shareScript(script) {
    alert("Link untuk " + script + " telah disalin!");
}
