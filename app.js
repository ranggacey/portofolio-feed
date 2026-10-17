// portofolio feed — Rangga Figo Hidayat (custom hand-drawn icons)
(function () {
  'use strict';

  // ---- custom icon set (drawn for this portfolio) ----
  function svg(inner) {
    return '<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" ' +
      'stroke-width="5" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
  }
  var ICONS = {
    // Webboost — speedometer
    gauge: svg('<path d="M22 86 A42 42 0 0 1 98 86"/>' +
      '<path d="M60 86 L84 50"/><circle cx="60" cy="86" r="6" fill="currentColor" stroke="none"/>' +
      '<path d="M32 66 l6 -4"/><path d="M88 66 l-6 -4"/><path d="M60 40 v-8"/>'),
    // Presensi — face scan
    face: svg('<path d="M20 44 V24 H40"/><path d="M80 24 H100 V44"/>' +
      '<path d="M20 76 V96 H40"/><path d="M80 96 H100 V76"/>' +
      '<rect x="42" y="40" width="36" height="44" rx="18"/>' +
      '<circle cx="54" cy="58" r="2.6" fill="currentColor" stroke="none"/>' +
      '<circle cx="66" cy="58" r="2.6" fill="currentColor" stroke="none"/>' +
      '<path d="M52 72 Q60 77 68 72"/>'),
    // Kopi Senja — coffee cup
    coffee: svg('<path d="M34 52 H78 V76 A16 16 0 0 1 62 92 H50 A16 16 0 0 1 34 76 Z"/>' +
      '<path d="M78 60 H88 A10 10 0 0 1 88 80 H78"/>' +
      '<path d="M48 40 Q44 32 48 24"/><path d="M62 40 Q58 32 62 24"/>' +
      '<path d="M28 100 H86"/>'),
    // Jepret Studio — camera
    camera: svg('<rect x="24" y="44" width="72" height="50" rx="12"/>' +
      '<circle cx="60" cy="69" r="15"/><circle cx="60" cy="69" r="5" fill="currentColor" stroke="none"/>' +
      '<path d="M42 44 L48 30 H72 L78 44"/><circle cx="85" cy="57" r="3" fill="currentColor" stroke="none"/>'),
    // Geser — kanban board
    kanban: svg('<rect x="20" y="28" width="24" height="64" rx="7"/>' +
      '<rect x="48" y="28" width="24" height="64" rx="7"/>' +
      '<rect x="76" y="28" width="24" height="64" rx="7"/>' +
      '<rect x="25" y="36" width="14" height="9" rx="3" fill="currentColor" stroke="none"/>' +
      '<rect x="53" y="52" width="14" height="9" rx="3" fill="currentColor" stroke="none"/>' +
      '<rect x="81" y="44" width="14" height="9" rx="3" fill="currentColor" stroke="none"/>' +
      '<rect x="81" y="60" width="14" height="9" rx="3" fill="currentColor" stroke="none"/>'),
    // Utara — compass
    compass: svg('<circle cx="60" cy="60" r="37"/>' +
      '<path d="M60 32 L70 68 L60 62 L50 68 Z" fill="currentColor" stroke="none"/>' +
      '<path d="M60 16 V24"/>'),
    // Lunar Music — crescent + note
    lunar: svg('<path d="M68 18 A36 36 0 1 0 68 102 A28 28 0 1 1 68 18 Z"/>' +
      '<ellipse cx="82" cy="88" rx="9" ry="7" fill="currentColor" stroke="none"/>' +
      '<path d="M90 84 V52"/><path d="M90 52 Q102 48 103 58"/>'),
    // Frontend — code
    code: svg('<path d="M44 38 L24 60 L44 82"/><path d="M76 38 L96 60 L76 82"/><path d="M67 30 L53 90"/>'),
    // Backend — database
    db: svg('<ellipse cx="60" cy="36" rx="29" ry="11"/>' +
      '<path d="M31 36 V84 A29 11 0 0 0 89 84 V36"/>' +
      '<path d="M31 60 A29 11 0 0 0 89 60"/>'),
    // Tools — terminal
    term: svg('<rect x="22" y="30" width="76" height="60" rx="12"/>' +
      '<path d="M38 52 L50 60 L38 68"/><path d="M58 70 H76"/>'),
    // mail
    mail: svg('<rect x="24" y="36" width="72" height="50" rx="10"/>' +
      '<path d="M30 44 L60 66 L90 44"/>'),
    // WhatsApp — bubble + handset
    wa: svg('<path d="M28 30 H92 A8 8 0 0 1 100 38 V64 A8 8 0 0 1 92 72 H64 L50 86 V72 H28 A8 8 0 0 1 20 64 V38 A8 8 0 0 1 28 30 Z"/>' +
      '<path d="M52 46 C46 52 46 60 54 68 C58 72 64 74 68 72 L66 66 L61 67 C58 66 55 63 54 60 L56 57 Z" fill="currentColor" stroke="none"/>'),
    // LinkedIn
    linkedin: svg('<rect x="26" y="26" width="68" height="68" rx="16"/>' +
      '<path d="M46 50 V76"/><circle cx="46" cy="41" r="2.6" fill="currentColor" stroke="none"/>' +
      '<path d="M60 76 V63 Q60 54 71 54 Q82 54 82 63 V76"/>'),
    // GitHub — cat mark
    github: svg('<circle cx="60" cy="63" r="24"/>' +
      '<path d="M44 47 L37 27 L57 38"/><path d="M76 47 L83 27 L63 38"/>' +
      '<circle cx="52" cy="61" r="2.6" fill="currentColor" stroke="none"/>' +
      '<circle cx="68" cy="61" r="2.6" fill="currentColor" stroke="none"/>' +
      '<path d="M52 73 Q60 78 68 73"/>')
  };

  var PROJECTS = [
    {t:'Webboost', g:'g1', icon:'gauge', num:'01',
     d:'Aplikasi web untuk menguji performa dan SEO teknis website secara otomatis memakai Google Lighthouse dan Puppeteer. Menampilkan skor Core Web Vitals (LCP, CLS, INP) simulasi mobile & desktop plus rekomendasi perbaikan.',
     tech:['Next.js','TypeScript','Tailwind CSS','Lighthouse','Puppeteer'],
     gh:'https://github.com/ranggacey/webboost', live:null},
    {t:'Presensi BRIDA', g:'g2', icon:'face', num:'02', sub:'Face Recognition',
     d:'Sistem presensi berbasis web dengan face recognition untuk Badan Riset dan Inovasi Daerah Kota Semarang. Karyawan cukup pindai wajah untuk check-in dan check-out kehadiran.',
     tech:['Face Recognition','Sistem Presensi','Web App'],
     gh:'https://github.com/ranggacey', live:null},
    {t:'Kopi Senja', g:'g5', icon:'coffee', num:'03',
     d:'Landing page untuk kedai kopi dengan katalog menu, testimoni pelanggan, dan info kunjungan. Desain responsif dengan animasi scroll yang halus.',
     tech:['React','Vite','Tailwind CSS','Landing Page'],
     gh:null, live:'https://kopisenja.ranggafigo.blog/'},
    {t:'Jepret Studio', g:'g4', icon:'camera', num:'04',
     d:'Landing page untuk studio fotografi di Semarang dengan galeri karya, layanan, alur proses, daftar harga, FAQ, dan fitur booking jadwal.',
     tech:['JavaScript','Tailwind CSS','Landing Page'],
     gh:'https://github.com/ranggacey/jepret-studio', live:'https://jepretstudio.ranggafigo.blog/'},
    {t:'Geser', g:'g3', icon:'kanban', num:'05', sub:'Papan Kanban Realtime',
     d:'Papan Kanban realtime yang kalem dan elegan. Atur tugas dengan drag-and-drop, pantau progres sekilas, dan biarkan perubahan tersinkron otomatis.',
     tech:['Next.js','TypeScript','Tailwind CSS','Supabase'],
     gh:'https://github.com/ranggacey/kanban', live:'https://kanban.ranggafigo.blog/'},
    {t:'Utara', g:'g6', icon:'compass', num:'06', sub:'Workspace Dashboard',
     d:'Prototype dashboard workspace dengan dua peran (user & admin): overview, proyek, progres, billing, direktori tim, dan analitik.',
     tech:['Next.js','TypeScript','Tailwind CSS','UI/UX'],
     gh:'https://github.com/ranggacey', live:'https://utara.ranggafigo.blog/'},
    {t:'Lunar Music', g:'g8', icon:'lunar', num:'07', sub:'Festival Ticketing',
     d:'Landing page festival musik pop & pop punk Indonesia dengan alur pembelian tiket 3 langkah (data pembeli, pembayaran QRIS/VA/e-wallet/retail, kode booking), lineup artis, rundown, dan FAQ.',
     tech:['React','Vite','Tailwind CSS','Landing Page'],
     gh:'https://github.com/ranggacey/restage', live:'https://restage.ranggafigo.blog/'}
  ];

  var feed = document.getElementById('feed');
  var html = '';

  // 1 — HERO
  html += '<section class="fcard"><div class="fgrad g9"></div><div class="fshade"></div><div class="grain"></div>' +
    '<div class="photo-wrap"><img src="profile.webp" alt="Rangga Figo Hidayat"></div>' +
    '<div class="finfo"><span class="avail"><i></i>Tersedia untuk full-time & freelance • Semarang</span>' +
    '<p class="kicker">HALO, SAYA</p><h1>Rangga Figo<br>Hidayat</h1>' +
    '<p class="meta">Web & Software Developer — Fresh Graduate Teknik Informatika USM</p>' +
    '<p class="syn">Fokus membangun aplikasi web yang cepat dibuka, tampilan simpel dan rapi, serta struktur kode yang gampang dirawat.</p></div></section>';

  // 2 — TENTANG
  html += '<section class="fcard"><div class="fgrad g2"></div><div class="fshade"></div><div class="grain"></div>' +
    '<div class="finfo"><p class="kicker">TENTANG SAYA</p><h1>Ubah ide jadi<br>website beneran.</h1>' +
    '<p class="syn">Saya Web Developer dan lulusan S1 Teknik Informatika Universitas Semarang yang senang mengubah ide menjadi website yang benar-benar bisa digunakan.</p>' +
    '<p class="syn">Terbiasa mengembangkan aplikasi web dari frontend hingga backend: antarmuka responsif, database, sistem berbasis CMS, sampai optimasi performa dan SEO.</p>' +
    '<div class="fact"><a class="btn-play" href="cv.pdf" target="_blank" rel="noopener">Lihat CV Lengkap (PDF)</a></div></div></section>';

  // 3 — KEAHLIAN
  html += '<section class="fcard"><div class="fgrad g3"></div><div class="fshade"></div><div class="grain"></div>' +
    '<div class="skills">' +
    skillRow('code', 'Frontend', ['Next.js','React','TypeScript','Tailwind CSS','JavaScript','HTML5 & CSS3']) +
    skillRow('db', 'Backend & Database', ['Node.js','PHP / Laravel','PostgreSQL','MySQL','REST API','Prisma ORM']) +
    skillRow('term', 'Tools & Testing', ['Git & GitHub','Lighthouse','Puppeteer','Vercel','Figma','VS Code']) +
    '</div>' +
    '<div class="finfo"><p class="kicker">KEAHLIAN TEKNIS</p><h1>Senjata<br>sehari-hari.</h1></div></section>';
  function skillRow(icon, title, items) {
    return '<div class="skill"><div class="ic">' + ICONS[icon] + '</div><div><strong>' + title + '</strong>' +
      '<div class="tags">' + items.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div></div></div>';
  }

  // 4 — PERJALANAN
  html += '<section class="fcard"><div class="fgrad g4"></div><div class="fshade"></div><div class="grain"></div>' +
    '<div class="tline">' +
    tItem('2024 — SEKARANG', 'Freelance Web Developer', 'Remote',
      'Mengerjakan project website untuk klien: company profile, landing page, dan aplikasi web custom. Terbiasa menangani project dari brief sampai deploy.') +
    tItem('2025', 'Web Developer Intern', 'BRIDA Kota Semarang',
      'Magang di Badan Riset dan Inovasi Daerah Kota Semarang. Membangun sistem presensi magang berbasis face recognition untuk kebutuhan internal.') +
    tItem('2026', 'S1 Teknik Informatika', 'Universitas Semarang',
      'Lulus program studi Teknik Informatika. Fokus pada rekayasa perangkat lunak dan pengembangan aplikasi web.') +
    '</div>' +
    '<div class="finfo"><p class="kicker">PERJALANAN</p><h1>Pengalaman yang<br>membentuk saya.</h1></div></section>';
  function tItem(yr, title, place, desc) {
    return '<div class="titem"><span class="yr">' + yr + '</span><strong>' + title + '</strong>' +
      '<small>' + place + '</small><p>' + desc + '</p></div>';
  }

  // 5 — PROJECTS (horizontal swipe section)
  var projPanels = PROJECTS.map(function (p) {
    var btns = '';
    if (p.gh) btns += '<a class="btn-line" href="' + p.gh + '" target="_blank" rel="noopener">GitHub</a>';
    if (p.live) btns += '<a class="btn-play" href="' + p.live + '" target="_blank" rel="noopener">Live Demo →</a>';
    return '<div class="ppanel"><div class="fgrad ' + p.g + '"></div><div class="fshade"></div><div class="grain"></div>' +
      '<div class="art"><span class="halo"></span>' + ICONS[p.icon] + '</div>' +
      '<div class="pnum">' + p.num + ' / 07</div>' +
      '<div class="finfo"><p class="kicker">PROYEK' + (p.sub ? ' • ' + p.sub.toUpperCase() : '') + '</p>' +
      '<h1>' + p.t + '</h1><div class="tags" style="margin-bottom:12px">' +
      p.tech.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
      '<p class="syn">' + p.d + '</p><div class="fact">' + btns + '</div></div></div>';
  }).join('');
  html += '<section class="fcard" id="projSection"><div class="hfeed" id="hfeed">' + projPanels + '</div>' +
    '<button class="parrow left" id="pPrev" aria-label="Sebelumnya">←</button>' +
    '<button class="parrow right" id="pNext" aria-label="Berikutnya">→</button>' +
    '<div class="xhint" id="xhint"><span class="arr">←</span> geser <span class="arr">→</span></div></section>';

  // 12 — KONTAK
  html += '<section class="fcard"><div class="fgrad g1"></div><div class="fshade"></div><div class="grain"></div>' +
    '<div class="contact-list">' +
    cBtn('mail', 'Email', 'ranggadanceyong@gmail.com', 'mailto:ranggadanceyong@gmail.com') +
    cBtn('wa', 'WhatsApp', '0878-2158-9222', 'https://wa.me/6287821589222?text=Halo%20Rangga%2C%20saya%20melihat%20portofoliomu%20dan%20tertarik%20untuk%20berdiskusi.') +
    cBtn('linkedin', 'LinkedIn', 'Rangga Figo Hidayat', 'http://linkedin.com/in/rangga-figo-hidayat-861b74332/') +
    cBtn('github', 'GitHub', '@ranggacey', 'https://github.com/ranggacey') +
    '<p class="copy">© 2026 Rangga Figo Hidayat • Semarang, Jawa Tengah</p></div>' +
    '<div class="finfo"><p class="kicker">KONTAK</p><h1>Mari terhubung<br>dan berdiskusi.</h1>' +
    '<p class="syn">Tertarik merekrut, mengajak kolaborasi project, atau sekadar ingin tanya-tanya? Pintu komunikasi saya selalu terbuka.</p></div></section>';
  function cBtn(icon, title, sub, href) {
    return '<a class="cbtn" href="' + href + '" target="_blank" rel="noopener"><span class="ic">' + ICONS[icon] + '</span>' +
      '<span><strong>' + title + '</strong><small>' + sub + '</small></span><span class="arr">→</span></a>';
  }

  feed.innerHTML = html;

  // ---- horizontal projects ----
  var hfeed = document.getElementById('hfeed');
  var xhint = document.getElementById('xhint');
  var pCount = PROJECTS.length;
  var xHintGone = false;
  function pIdx(){ return Math.min(pCount - 1, Math.round(hfeed.scrollLeft / hfeed.clientWidth)); }
  function goP(i){
    i = Math.max(0, Math.min(pCount - 1, i));
    hfeed.scrollTo({left: i * hfeed.clientWidth, behavior: 'smooth'});
  }
  hfeed.addEventListener('scroll', function(){
    if (!xHintGone && hfeed.scrollLeft > 40) { xhint.classList.add('gone'); xHintGone = true; }
    updateCounter();
  }, {passive: true});
  document.getElementById('pPrev').addEventListener('click', function(){ goP(pIdx() - 1); });
  document.getElementById('pNext').addEventListener('click', function(){ goP(pIdx() + 1); });

  // ---- feed logic ----
  var cards = Array.prototype.slice.call(feed.querySelectorAll('.fcard'));
  var projSection = document.getElementById('projSection');
  var projSecIdx = cards.indexOf(projSection);
  var dotsBox = document.getElementById('dots');
  var counter = document.getElementById('counter');
  var total = cards.length;
  var secNames = ['Profil','Tentang','Keahlian','Perjalanan','Proyek','Kontak'];
  counter.textContent = '01 / ' + pad(total) + ' • Profil';
  dotsBox.innerHTML = cards.map(function (_, i) {
    return '<i data-go="' + i + '" class="' + (i === 0 ? 'on' : '') + '"></i>';
  }).join('');
  function pad(n){ return (n < 10 ? '0' : '') + n; }
  function curSecIdx(){ return Math.min(total - 1, Math.round(feed.scrollTop / window.innerHeight)); }
  function updateCounter(){
    var idx = curSecIdx();
    var txt = pad(idx + 1) + ' / ' + pad(total) + ' • ' + secNames[idx];
    if (idx === projSecIdx) txt += ' ' + pad(pIdx() + 1) + '/' + pad(pCount);
    counter.textContent = txt;
  }
  dotsBox.querySelectorAll('i').forEach(function (d) {
    d.addEventListener('click', function () {
      cards[+d.dataset.go].scrollIntoView({behavior: 'smooth'});
    });
  });
  var hint = document.getElementById('swipeHint'), hintGone = false;
  feed.addEventListener('scroll', function () {
    var idx = curSecIdx();
    dotsBox.querySelectorAll('i').forEach(function (d, k) { d.classList.toggle('on', k === idx); });
    updateCounter();
    if (!hintGone && feed.scrollTop > 60) { hint.classList.add('gone'); hintGone = true; }
  }, {passive: true});
  document.addEventListener('keydown', function (e) {
    var idx = curSecIdx();
    if (e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      if (idx < total - 1) cards[idx + 1].scrollIntoView({behavior: 'smooth'});
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (idx > 0) cards[idx - 1].scrollIntoView({behavior: 'smooth'});
    } else if (e.key === 'ArrowRight' && idx === projSecIdx) {
      e.preventDefault(); goP(pIdx() + 1);
    } else if (e.key === 'ArrowLeft' && idx === projSecIdx) {
      e.preventDefault(); goP(pIdx() - 1);
    }
  });
})();
