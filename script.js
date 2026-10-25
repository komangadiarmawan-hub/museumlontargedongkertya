// Data 29 Gambar Koleksi Gedong Kertya
const galleryData = [
    { id: 1, title: "Bagian-bagian Rumah Adat Bali", cat: "penyimpanan", img: "src/images/gambar_01_bagian_rumah_adat_bali.jpeg", desc: "Bagan penjelasan bagian-bagian arsitektur rumah tradisional Bali tempat penyimpanan lontar." },
    { id: 2, title: "Peralatan Awal Pembuatan Lontar", cat: "alat", img: "src/images/gambar_02_peralatan_pembuatan_lontar.jpeg", desc: "Peralatan kuno seperti pisau pembersih, penggaris kayu, pensil, dan sabit." },
    { id: 3, title: "Lontar Ukuran 35cm, 40cm, & 50cm", cat: "lontar", img: "src/images/gambar_03_lontar_berbagai_ukuran.jpeg", desc: "Koleksi daun lontar kosong yang telah siap ditulis berdasarkan kategorinya." },
    { id: 4, title: "Tabel Aksara Bali", cat: "lontar", img: "src/images/gambar_04_tabel_aksara_bali.jpeg", desc: "Pedoman Aksara Wianjana, Angka, dan Pengangge Tengenan untuk penulisan lontar." },
    { id: 5, title: "Papan Informasi Pohon Lontar", cat: "alat", img: "src/images/gambar_05_informasi_pohon_lontar.jpeg", desc: "Informasi tanaman Pohon Lontar (Borassus Flabellifer Linn) sebagai bahan utama penulisan." },
    { id: 6, title: "Proses Pembuatan Blanko Lontar", cat: "alat", img: "src/images/gambar_06_lemari_proses_pembuatan_blanko.jpeg", desc: "Lemari display alat press kayu tradisional dan berbagai bumbu pengawet lontar." },
    { id: 7, title: "Lemari Usada & Kalender Caka Bali", cat: "lontar", img: "src/images/gambar_07_lemari_usada_kalender_caka.jpeg", desc: "Display pengobatan tradisional Bali (Usada) dan penanggalan Kalender Caka." },
    { id: 8, title: "Lemari Buku Kuno Kolonial", cat: "penyimpanan", img: "src/images/gambar_08_lemari_buku_kuno.jpeg", desc: "Koleksi buku-buku kuno dan kamus bahasa Belanda, Kawi, serta Bali." },
    { id: 9, title: "Bahan Rempah Pengawet Lontar", cat: "alat", img: "src/images/gambar_09_rempah_dan_alat_pres_lontar.jpeg", desc: "Bahan alami pengawet lontar seperti gambir, kemiri, cengkeh, buah pala, dan kunyit." },
    { id: 10, title: "Naskah Kakawin & Patung Garuda", cat: "lontar", img: "src/images/gambar_10_lontar_kakawin_patung_garuda.jpeg", desc: "Koleksi wacana puisi bahasa Jawa Kuno (Kakawin) dan patung simbolis kayu." },
    { id: 11, title: "Prasasti Sejarah Gedong Kertya", cat: "penyimpanan", img: "src/images/gambar_11_sejarah_singkat_gedong_kertya.jpeg", desc: "Papan sejarah singkat pendirian museum dari tahun 1928." },
    { id: 12, title: "Tahapan Pemrosesan Blanko Lontar", cat: "alat", img: "src/images/gambar_12_tahap_proses_pembuatan_blanko.jpeg", desc: "Dokumentasi foto langkah-langkah perebusan dan pengeringan daun lontar." },
    { id: 13, title: "Manuskrip Lontar Birma & India", cat: "lontar", img: "src/images/gambar_13_lontar_birma_dan_india.jpeg", desc: "Perbandingan naskah lontar mancanegara asal Birma dan India." },
    { id: 14, title: "Silsilah Dalem Sidakarya", cat: "lontar", img: "src/images/gambar_14_silsilah_dalem_sidakarya.jpeg", desc: "Display silsilah keturunan raja-raja dan tokoh agama Bali." },
    { id: 15, title: "Teks Panduan Pembuatan Blanko", cat: "alat", img: "src/images/gambar_15_penjelasan_proses_blanko_lontar.jpeg", desc: "Keterangan detail proses perendaman 3 minggu dan pengepresan 6-12 bulan." },
    { id: 16, title: "Lontar Puja Pitra Maligia", cat: "lontar", img: "src/images/gambar_16_lontar_puja_pitra_maligia.jpeg", desc: "Manuskrip khusus mengenai ritual pengabuan/upacara pemujaan leluhur." },
    { id: 17, title: "Lontar Awig-Awig & Uang Kepeng", cat: "lontar", img: "src/images/gambar_17_lontar_awig_awig_dan_uang_kepeng.jpeg", desc: "Hukum adat desa (Awig-awig) beserta aksesoris sarana uang kepeng." },
    { id: 18, title: "Rak Keropak Penyimpanan Lontar 1", cat: "penyimpanan", img: "src/images/gambar_18_rak_keropak_lontar_1.jpeg", desc: "Jajaran kotak kayu (Keropak) berisi koleksi naskah yang tersusun rapi." },
    { id: 19, title: "Display Upacara Ngaben", cat: "lontar", img: "src/images/gambar_19_koleksi_lontar_ngaben.jpeg", desc: "Koleksi naskah tata cara upacara penyucian roh Ngaben." },
    { id: 20, title: "Rak Keropak Penyimpanan Lontar 2", cat: "penyimpanan", img: "src/images/gambar_20_rak_keropak_lontar_2.jpeg", desc: "Tampilan sudut rak kayu penyimpanan keropak lontar kuno." },
    { id: 21, title: "Lempengan Prasasti Kuno", cat: "lontar", img: "src/images/gambar_21_lempengan_prasasti_kuno.jpeg", desc: "Koleksi lempengan tembaga/logam prasasti bergambar dan beraksara." },
    { id: 22, title: "Kotak Penyimpanan Seng Kuno", cat: "penyimpanan", img: "src/images/gambar_22_kotak_penyimpanan_lontar_seng.jpeg", desc: "Kotak seng pelindung naskah lontar koleksi Usada dan Babad." },
    { id: 23, title: "Ruang Penyimpanan Utama Museum", cat: "penyimpanan", img: "src/images/gambar_23_ruang_penyimpanan_lontar_gedong_kertya.jpeg", desc: "Pemandangan utama interior ruang koleksi museum Gedong Kertya." },
    { id: 24, title: "Buku Catatan Arsip Kolonial 1928", cat: "penyimpanan", img: "src/images/gambar_24_buku_catatan_arsip_kolonial_kuno.jpeg", desc: "Buku registrasi dan arsip tulisan tangan era pemerintahan Hindia Belanda." },
    { id: 25, title: "Alat Penulis Lontar & Pengrupak", cat: "alat", img: "src/images/gambar_25_alat_menulis_lontar_dulang_pengrupak.jpeg", desc: "Pisau khusus pengrupak, kemiri sangrai penjelas tulisan, dan alas dulang." },
    { id: 26, title: "Lemari Etalase Pembuatan Lontar", cat: "alat", img: "src/images/gambar_26_lemari_pameran_proses_lontar.jpeg", desc: "Etalase kayu pameran tahapan pembuatan blanko daun lontar." },
    { id: 27, title: "Prasasti Peresmian Gedong Kertya", cat: "penyimpanan", img: "src/images/gambar_27_prasasti_peresmian_gedong_kertya.jpeg", desc: "Plakat batu peresmian perpustakaan Kertya 14 September 1928." },
    { id: 28, title: "Piagam Penghargaan & Lontar Juara", cat: "lontar", img: "src/images/gambar_28_piagam_penghargaan_dan_lontar_juara.jpeg", desc: "Sertifikat pameran museum beserta lontar kaligrafi pemenang lomba." },
    { id: 29, title: "Koleksi Ukuran Daun Lontar", cat: "lontar", img: "src/images/gambar_29_lontar_ukuran_35_40_50_cm.jpeg", desc: "Detail fisik perbedaan ukuran daun lontar sesuai jenis naskah." }
];

let currentIndex = 0;
let zoomLevel = 1;
const synth = window.speechSynthesis;
let utterance = null;

// Populate Gallery Grid
function renderGallery(filter = 'all') {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? galleryData : galleryData.filter(item => item.cat === filter);
    
    filtered.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="info">
                <h4>${item.title}</h4>
            </div>
        `;
        card.onclick = () => openModal(galleryData.indexOf(item));
        grid.appendChild(card);
    });
}

// Filter Function
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderGallery(e.target.dataset.filter);
    });
});

// Modal & Zoom Functions
function openModal(index) {
    currentIndex = index;
    const item = galleryData[currentIndex];
    
    document.getElementById('modalImg').src = item.img;
    document.getElementById('modalTitle').innerText = item.title;
    document.getElementById('modalDesc').innerText = item.desc;
    
    document.getElementById('imageModal').style.display = 'flex';
    resetZoom();
}

function resetZoom() {
    zoomLevel = 1;
    document.getElementById('modalImg').style.transform = `scale(${zoomLevel})`;
}

document.getElementById('zoomInBtn').onclick = () => {
    if (zoomLevel < 3) { zoomLevel += 0.3; document.getElementById('modalImg').style.transform = `scale(${zoomLevel})`; }
};

document.getElementById('zoomOutBtn').onclick = () => {
    if (zoomLevel > 0.8) { zoomLevel -= 0.3; document.getElementById('modalImg').style.transform = `scale(${zoomLevel})`; }
};

document.getElementById('resetZoomBtn').onclick = resetZoom;

// Modal Navigation
document.getElementById('prevBtn').onclick = () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryData.length - 1;
    openModal(currentIndex);
};

document.getElementById('nextBtn').onclick = () => {
    currentIndex = (currentIndex < galleryData.length - 1) ? currentIndex + 1 : 0;
    openModal(currentIndex);
};

document.getElementById('closeModal').onclick = () => {
    document.getElementById('imageModal').style.display = 'none';
    if(synth.speaking) synth.cancel();
};

// Fitur Audio Narasi (Web Speech API)
document.getElementById('playAudioBtn').onclick = () => {
    const text = document.getElementById('modalTitle').innerText + ". " + document.getElementById('modalDesc').innerText;
    if (synth.speaking) synth.cancel();
    
    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    synth.speak(utterance);
};

document.getElementById('pauseAudioBtn').onclick = () => {
    if (synth.speaking) synth.cancel();
};

// Inisialisasi awal
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});