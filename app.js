const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

let currentLanguage = localStorage.getItem('aedesLanguage') === 'en' ? 'en' : 'ms';
let activeModeIndex = 0;
let activeCompareIndex = 0;
let activeXrayStage = 0;

const translations = {
  ms: {
    navSystem:'Sistem', navModes:'3 Mod', navDashboard:'Papan Pemuka', navCompare:'Bandingkan', navValidation:'Validasi', nationalTag:'PERINGKAT KEBANGSAAN · 2026',
    loadingExperience:'MENYEDIAKAN PENGALAMAN', heroTitle:'PERLINDUNGAN<br><em>LEBIH PINTAR.</em>', heroText:'Prototaip perangkap nyamuk pintar yang menggabungkan tarikan CO₂, cahaya UV, aliran udara dan kawalan IoT.',
    heroStatModes:'mod operasi', heroStatControls:'kaedah kawalan', heroStatStages:'peringkat sistem', beat1Label:'ISYARAT TARIKAN', beat1Title:'Nyamuk mengesan<br>isyarat CO₂.', beat2Label:'TARIKAN TAMBAHAN', beat2Title:'Cahaya UV<br>memandu laluan.', beat3Label:'ALIRAN UDARA', beat3Title:'Kipas menarik nyamuk<br>ke ruang tangkapan.', heroEndLabel:'INOVASI STEM · KAWALAN IoT', exploreSystem:'Terokai sistem', scrollGuide:'SKROL UNTUK MENGGERAKKAN CERITA',
    challengeKicker:'01 · CABARAN', problemTitle:'Ancaman kecil.<br>Impak yang besar.', problemText:'Nyamuk Aedes aktif di persekitaran komuniti. Kami mahu membantu mengurangkan pendedahan melalui satu penyelesaian bebas semburan kimia yang mudah dipantau.',
    challenge1Title:'Aktif di ruang harian', challenge1Text:'Nyamuk Aedes boleh berada berhampiran ruang kediaman, sekolah dan kawasan aktiviti komuniti.', challenge2Title:'Punca mudah terlepas pandang', challenge2Text:'Takungan air kecil dan kawasan terlindung memerlukan pemeriksaan yang teliti serta berulang.', challenge3Title:'Pencegahan perlu konsisten', challenge3Text:'Pemantauan manual sahaja sukar dikekalkan. Komuniti memerlukan tindakan yang lebih mudah dan teratur.',
    systemKicker:'02 · CARA BERFUNGSI', systemTitle:'Satu sistem.<br>Lima peringkat.', systemText:'Teroka anatomi fizikal prototaip AEDES-X secara interaktif untuk memahami fungsi setiap komponen STEM sebenar.', missionStatusLabel:'STATUS ANATOMI:', xrayInstruction:'Tekan bahagian alat untuk teroka', fullDeviceBtn:'Peranti Penuh', missionKicker:'KONSOL KAWALAN PERTANDINGAN', missionHeadline:'Anatomi Modular AEDES-X', missionIntro:'Pilih mana-mana satu daripada lima bahagian pada alat atau panel ini untuk meneliti komponen fizikal, gambarajah terperinci dan mekanisme STEM sebenar.', backToFullBtn:'Kembali ke Peranti Penuh', stageAll:'Semua', stage1:'Kuasa & Input', stage1p:'Panel solar, suis utama, butang mod dan sensor LDR.', stage2:'Otak Sistem', stage2p:'ESP32 memproses input dan menyelaras operasi.', stage3:'Tarikan & Aliran', stage3p:'UV LED dan kipas menghasilkan tarikan serta sedutan.', stage4:'Tangkapan', stage4p:'Bakul jaring halus memerangkap nyamuk dengan selamat.', stage5:'Penghasil CO₂', stage5p:'Campuran yis, gula dan air suam menghasilkan isyarat tarikan.',
    modesKicker:'03 · OPERASI FLEKSIBEL', modesTitle:'Tiga mod. Satu matlamat.', modesText:'Pilih situasi untuk menonton cara setiap mod berfungsi.', modeSwipeTitle:'PILIH MOD', modeSwipeText:'Skrol atau leret ke tepi untuk menukar video', modeButton1Label:'01 · KAWALAN TERUS', modeButton1Place:'Rumah & demonstrasi', modeButton2Label:'02 · SENSOR CAHAYA', modeButton2Place:'Beranda & kawasan terlindung', modeButton3Label:'03 · JADUAL OPERASI', timerName:'Pemasa', modeButton3Place:'Sekolah, pejabat & dewan', modeDemo:'DEMONSTRASI MOD',
    dashboardKicker:'04 · KAWALAN BERSAMBUNG', dashTitle:'Kawalan pada telefon.<br>Butang fizikal sebagai sokongan.', dashText:'Papan pemuka AEDES-X menyatukan status masa nyata, tiga mod operasi, jadual dan maklumat sistem. Jika hotspot terputus, butang fizikal masih boleh menukar mod.', nationalUpgrade:'PENAMBAHBAIKAN PERINGKAT KEBANGSAAN', maintenance:'Peringatan Penyelenggaraan', maintenanceText:'Peringatan berjadual untuk semakan jaring, penggantian campuran CO₂ dan pemeriksaan sistem—supaya penjagaan lebih konsisten.', newLabel:'BAHARU', badgeDashboard:'◉ Papan pemuka', badgePhysical:'● Butang fizikal', badgeHotspot:'⌁ Hotspot setempat', watchDashboard:'Tonton demonstrasi papan pemuka', screenHome:'Utama', screenControl:'Kawalan', screenTimer:'Pemasa', screenSystem:'Sistem', maintDue:'Pemeriksaan seterusnya', maintDate:'Bakul jaring · 7 hari',
    compareKicker:'05 · PERBANDINGAN', compareTitle:'Bukan sekadar perangkap.<br>Satu sistem pintar.', compareText:'Pilih kaedah sedia ada untuk melihat perbezaan pendekatan, kawalan dan ciri sistem berbanding prototaip AEDES-X.', compareFogging:'Fogging', compareAerosol:'Semburan aerosol', compareCoil:'Lingkaran nyamuk', compareUV:'Perangkap UV biasa', ourPrototype:'PROTOTAIP KAMI', existingMethod:'KAEDAH SEDIA ADA', aedesApproach:'Menggabungkan CO₂, UV, aliran udara, tiga mod operasi dan kawalan IoT dalam satu sistem.', comparisonLens:'LENSA PERBANDINGAN', compareDisclaimer:'Perbandingan ini menerangkan ciri dan cara penggunaan umum—bukan keputusan ujian keberkesanan, tuntutan klinikal atau pengganti langkah pencegahan denggi rasmi.',
    validationKicker:'06 · VALIDASI AWAL', validationTitle:'Telus tentang apa<br>yang telah diuji.', validationText:'Angka di bawah ialah data sementara untuk demonstrasi laman. Ia mesti diganti dengan keputusan sebenar selepas ujian 10 kali pada 29 September 2026.', dataNote:'<b>Bukan keputusan rasmi.</b> Jangan gunakan angka ini sebagai bukti pertandingan sebelum ujian sebenar selesai.', metricLabel1:'Papan pemuka', metricLabel2:'Pertukaran 3 mod', metricLabel3:'Tindak balas LDR', metricLabel4:'Butang tanpa talian', metricLabel5:'Operasi berterusan', notTested:'BELUM DIUJI', metric1:'Contoh median sambungan; semua contoh di bawah 30 saat.', metric2:'Contoh masa tindak balas selepas arahan mod.', metric3:'Contoh tindak balas apabila keadaan cahaya berubah.', metric4:'Contoh operasi butang fizikal tanpa hotspot.', metric5:'Belum diuji sehingga isu haba ESP32 dinilai dengan selamat.',
    impactKicker:'07 · INOVASI BERTERASKAN TUJUAN', impactTitle:'Teknologi yang bermula<br>dengan komuniti.', impactText:'AEDES-X menghubungkan pembelajaran STEM dengan isu kesihatan sebenar—daripada idea, prototaip dan pengaturcaraan kepada pengujian yang bertanggungjawab.', sdg3Title:'SDG 3 · KESIHATAN BAIK DAN KESEJAHTERAAN', sdg3:'Menyokong kesedaran dan usaha pencegahan denggi dalam komuniti.', sdg9Title:'SDG 9 · INDUSTRI, INOVASI DAN INFRASTRUKTUR', sdg9:'Menggalakkan inovasi IoT yang dibina, diuji dan diterangkan oleh murid.', finalText:'Inovasi kecil. Impak yang bermakna.', backTop:'Kembali ke atas ↑'
  },
  en: {
    navSystem:'System', navModes:'3 Modes', navDashboard:'Dashboard', navCompare:'Compare', navValidation:'Validation', nationalTag:'NATIONAL STAGE · 2026',
    loadingExperience:'PREPARING EXPERIENCE', heroTitle:'SMARTER<br><em>PROTECTION.</em>', heroText:'A smart mosquito-trap prototype combining CO₂ attraction, UV light, airflow and IoT control.', heroStatModes:'operating modes', heroStatControls:'control methods', heroStatStages:'system stages', beat1Label:'ATTRACTION SIGNAL', beat1Title:'Mosquitoes detect<br>the CO₂ signal.', beat2Label:'SECONDARY ATTRACTION', beat2Title:'UV light<br>guides the path.', beat3Label:'AIRFLOW', beat3Title:'The fan pulls mosquitoes<br>into the capture chamber.', heroEndLabel:'STEM INNOVATION · IoT CONTROL', exploreSystem:'Explore the system', scrollGuide:'SCROLL TO MOVE THE STORY',
    challengeKicker:'01 · CHALLENGE', problemTitle:'A small threat.<br>A major impact.', problemText:'Aedes mosquitoes are active around our communities. We aim to reduce exposure through a chemical-spray-free solution that is easy to monitor.', challenge1Title:'Active in daily spaces', challenge1Text:'Aedes mosquitoes can be present near homes, schools and community activity areas.', challenge2Title:'Sources are easily overlooked', challenge2Text:'Small water collections and sheltered areas require careful, repeated inspection.', challenge3Title:'Prevention must be consistent', challenge3Text:'Manual monitoring alone is difficult to maintain. Communities need action that is simpler and more organised.',
    systemKicker:'02 · HOW IT WORKS', systemTitle:'One system.<br>Five stages.', systemText:'Interactively explore the physical anatomy of the AEDES-X prototype to understand how real STEM components operate.', missionStatusLabel:'ANATOMY STATUS:', xrayInstruction:'Click device parts to explore', fullDeviceBtn:'Full Device', missionKicker:'COMPETITION COMMAND CONSOLE', missionHeadline:'AEDES-X Modular Anatomy', missionIntro:'Select any of the five zones on the prototype or control panel to examine real physical components, detailed diagrams and STEM mechanisms.', backToFullBtn:'Back to Full Device', stageAll:'All', stage1:'Power & Input', stage1p:'Solar panel, main switch, mode button and LDR sensor.', stage2:'System Brain', stage2p:'The ESP32 processes inputs and coordinates operation.', stage3:'Attraction & Airflow', stage3p:'UV LEDs and the fan provide attraction and suction.', stage4:'Capture', stage4p:'A fine-mesh basket securely retains mosquitoes.', stage5:'CO₂ Generator', stage5p:'Yeast, sugar and warm water produce an attraction signal.',
    modesKicker:'03 · FLEXIBLE OPERATION', modesTitle:'Three modes. One purpose.', modesText:'Choose a situation to watch how each mode works.', modeSwipeTitle:'SELECT A MODE', modeSwipeText:'Scroll or swipe sideways to change the video', modeButton1Label:'01 · DIRECT CONTROL', modeButton1Place:'Home & demonstration', modeButton2Label:'02 · LIGHT SENSOR', modeButton2Place:'Veranda & sheltered areas', modeButton3Label:'03 · SCHEDULED OPERATION', timerName:'Timer', modeButton3Place:'School, office & hall', modeDemo:'MODE DEMONSTRATION',
    dashboardKicker:'04 · CONNECTED CONTROL', dashTitle:'Control from your phone.<br>Physical button as backup.', dashText:'The AEDES-X dashboard combines live status, three operating modes, schedules and system information. If the hotspot disconnects, the physical button can still change modes.', nationalUpgrade:'NATIONAL-STAGE IMPROVEMENT', maintenance:'Maintenance Reminder', maintenanceText:'Scheduled reminders for mesh checks, CO₂ mixture replacement and system inspection—supporting more consistent care.', newLabel:'NEW', badgeDashboard:'◉ Dashboard', badgePhysical:'● Physical button', badgeHotspot:'⌁ Local hotspot', watchDashboard:'Watch dashboard demonstration', screenHome:'Home', screenControl:'Control', screenTimer:'Timer', screenSystem:'System', maintDue:'Next inspection', maintDate:'Mesh basket · 7 days',
    compareKicker:'05 · COMPARISON', compareTitle:'More than a trap.<br>One smart system.', compareText:'Select an existing method to compare its approach, controls and system features with the AEDES-X prototype.', compareFogging:'Fogging', compareAerosol:'Aerosol spray', compareCoil:'Mosquito coil', compareUV:'Standard UV trap', ourPrototype:'OUR PROTOTYPE', existingMethod:'EXISTING METHOD', aedesApproach:'Combines CO₂, UV, airflow, three operating modes and IoT control in one system.', comparisonLens:'COMPARISON LENS', compareDisclaimer:'This comparison describes general features and usage—not efficacy test results, clinical claims or a replacement for official dengue-prevention measures.',
    validationKicker:'06 · EARLY VALIDATION', validationTitle:'Transparent about<br>what has been tested.', validationText:'The figures below are temporary demonstration data. They must be replaced with actual results after ten test runs on 29 September 2026.', dataNote:'<b>Not official results.</b> Do not use these figures as competition evidence before actual testing is completed.', metricLabel1:'Dashboard', metricLabel2:'Three-mode switching', metricLabel3:'LDR response', metricLabel4:'Offline button', metricLabel5:'Continuous operation', notTested:'NOT TESTED', metric1:'Example median connection time; all examples under 30 seconds.', metric2:'Example response time after a mode command.', metric3:'Example response when lighting conditions change.', metric4:'Example physical-button operation without a hotspot.', metric5:'Not tested until ESP32 heat concerns are assessed safely.',
    impactKicker:'07 · PURPOSE-DRIVEN INNOVATION', impactTitle:'Technology that begins<br>with the community.', impactText:'AEDES-X connects STEM learning with a real health challenge—from ideas, prototyping and programming to responsible testing.', sdg3Title:'SDG 3 · GOOD HEALTH AND WELL-BEING', sdg3:'Supports dengue awareness and prevention efforts in the community.', sdg9Title:'SDG 9 · INDUSTRY, INNOVATION AND INFRASTRUCTURE', sdg9:'Encourages student-built and student-tested IoT innovation.', finalText:'Small innovation. Meaningful impact.', backTop:'Back to top ↑'
  }
};

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  localStorage.setItem('aedesLanguage', language);
  $$('[data-copy]').forEach((element) => {
    const value = translations[language][element.dataset.copy];
    if (value !== undefined) element.innerHTML = value;
  });
  $$('.language-toggle button').forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderXrayStage(activeXrayStage, false);
  renderMode(activeModeIndex, false);
  renderComparison(activeCompareIndex, false);
}

$$('.language-toggle button').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

$$('.reveal').forEach((element) => revealObserver.observe(element));

addEventListener('scroll', () => {
  const maximum = document.documentElement.scrollHeight - innerHeight;
  $('.scroll-meter span').style.width = `${Math.min(100, scrollY / maximum * 100)}%`;
  $('#topbar').classList.toggle('compact', scrollY > 40);
}, { passive: true });

addEventListener('pointermove', (event) => {
  const glow = $('.cursor-glow');
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

// Animasi cinematic berpandukan skrol — 120 bingkai daripada video 10 saat.
const cinemaSection = $('.scroll-cinema');
const canvas = $('#cinemaCanvas');
const fallbackVideo = $('.cinema-fallback');
const context = canvas ? canvas.getContext('2d', { alpha: false }) : null;
const frameCount = 120;
const frames = new Array(frameCount);
let loadedFrames = 0;
let currentFrame = 0;
let requestedFrame = 0;
let animationStarted = false;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function framePath(index) {
  return `assets/cinematic-frames/frame-${String(index + 1).padStart(4, '0')}.webp`;
}

function activateCinemaFallback() {
  if (canvas) canvas.style.display = 'none';
  if (fallbackVideo) {
    fallbackVideo.style.display = 'block';
    fallbackVideo.setAttribute('aria-hidden', 'false');
    fallbackVideo.play().catch(() => {});
  }
  const loader = $('#cinemaLoader');
  if (loader) loader.classList.add('hidden');
}

function drawFrame(index) {
  if (!context) return;
  const image = frames[index];
  if (!image || !image.complete || !image.naturalWidth) return;

  const width = canvas.width;
  const height = canvas.height;
  const isMobile = innerWidth < 768;
  const scale = isMobile
    ? Math.min(width / image.naturalWidth, height / image.naturalHeight)
    : Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const renderedWidth = image.naturalWidth * scale;
  const renderedHeight = image.naturalHeight * scale;
  const x = (width - renderedWidth) / 2;
  // On mobile portrait, position slightly higher to accommodate text copy
  const y = isMobile && innerHeight > innerWidth
    ? Math.max(0, (height - renderedHeight) * 0.32)
    : (height - renderedHeight) / 2;

  context.fillStyle = '#020604';
  context.fillRect(0, 0, width, height);
  context.drawImage(image, x, y, renderedWidth, renderedHeight);
}

function resizeCinema() {
  if (!canvas || !context) return;
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(innerWidth * ratio);
  canvas.height = Math.round(innerHeight * ratio);
  drawFrame(currentFrame);
}

function updateCinemaCopy(progress) {
  let activeBeat = 0;
  if (progress >= 0.18) activeBeat = 1;
  if (progress >= 0.40) activeBeat = 2;
  if (progress >= 0.61) activeBeat = 3;
  if (progress >= 0.82) activeBeat = 4;

  $$('.cinema-copy').forEach((element) => {
    element.classList.toggle('active', Number(element.dataset.beat) === activeBeat);
  });
  const progressEl = $('#cinemaProgress');
  if (progressEl) progressEl.style.width = `${progress * 100}%`;
}

function updateCinemaFromScroll() {
  if (!cinemaSection) return;
  if (prefersReducedMotion) {
    updateCinemaCopy(0);
    return;
  }
  const rect = cinemaSection.getBoundingClientRect();
  const distance = cinemaSection.offsetHeight - innerHeight;
  const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
  requestedFrame = Math.min(frameCount - 1, Math.round(progress * (frameCount - 1)));
  updateCinemaCopy(progress);
  const guide = $('#cinemaScrollGuide');
  if (guide) guide.classList.toggle('hidden', progress > 0.07);
}

function animationLoop() {
  if (currentFrame !== requestedFrame) {
    currentFrame = requestedFrame;
    drawFrame(currentFrame);
  }
  if (!prefersReducedMotion) {
    requestAnimationFrame(animationLoop);
  }
}

if (!context) {
  activateCinemaFallback();
} else if (prefersReducedMotion) {
  // In reduced-motion mode, only load frame 0 for static showcase
  const firstFrame = new Image();
  firstFrame.src = framePath(0);
  firstFrame.onload = () => {
    frames[0] = firstFrame;
    resizeCinema();
    drawFrame(0);
    $('#cinemaLoader')?.classList.add('hidden');
  };
  firstFrame.onerror = activateCinemaFallback;
} else {
  // Safety timeout: if frames take too long to load (e.g. slow mobile connection), switch to fallback video
  const fallbackTimer = setTimeout(() => {
    if (loadedFrames < 5) activateCinemaFallback();
  }, 4000);

  for (let index = 0; index < frameCount; index += 1) {
    const image = new Image();
    image.decoding = 'async';
    image.src = framePath(index);
    image.onload = () => {
      loadedFrames += 1;
      if (index === 0) {
        resizeCinema();
        drawFrame(0);
      }
      if (index === currentFrame || index === requestedFrame) drawFrame(index);
      if (loadedFrames >= 8) {
        clearTimeout(fallbackTimer);
        $('#cinemaLoader')?.classList.add('hidden');
      }
      if (!animationStarted) {
        animationStarted = true;
        animationLoop();
      }
    };
    image.onerror = () => {
      if (loadedFrames === 0 && index === 0) {
        clearTimeout(fallbackTimer);
        activateCinemaFallback();
      }
    };
    frames[index] = image;
  }

  addEventListener('scroll', updateCinemaFromScroll, { passive: true });
  addEventListener('resize', resizeCinema);
  updateCinemaFromScroll();
}

// =====================================================================
// SECTION 02 · X-RAY EXPLORER + MISSION CONTROL EXHIBIT CONTROLLER
// =====================================================================
const stagesData = [
  null, // 0 = Full Device Overview
  {
    image: 'assets/stage-1.png',
    hotspot: { x: '56%', y: '14%' },
    ms: {
      statusText: 'PERINGKAT 01 · KUASA & INPUT',
      stepNum: 'PERINGKAT 01',
      role: 'PUNCA KUASA & KAWALAN',
      hw: 'SOLAR · LDR · SUIS · BUTANG',
      headline: 'Tenaga Solar & Kawalan Input Pintar',
      desc: 'Panel solar dan sumber kuasa menyokong operasi peranti secara mampan; suis utama, butang mod fizikal dan sensor LDR membekalkan kawalan input untuk operasi manual atau automatik.',
      chips: ['Panel Solar 5V', 'Sensor LDR', 'Suis Kuasa Utama', 'Butang Mod Fizikal']
    },
    en: {
      statusText: 'STAGE 01 · POWER & INPUT',
      stepNum: 'STAGE 01',
      role: 'POWER SOURCE & CONTROLS',
      hw: 'SOLAR · LDR · SWITCH · BUTTON',
      headline: 'Solar Energy & Smart Input Controls',
      desc: 'The solar panel and power source support sustainable device operation; the main switch, physical mode button, and LDR sensor provide control inputs for manual or automated modes.',
      chips: ['5V Solar Panel', 'LDR Sensor', 'Main Power Switch', 'Physical Mode Button']
    }
  },
  {
    image: 'assets/stage-2.png',
    hotspot: { x: '47%', y: '32%' },
    ms: {
      statusText: 'PERINGKAT 02 · OTAK SISTEM',
      stepNum: 'PERINGKAT 02',
      role: 'PEMPROSES UTAMA & PAPARAN',
      hw: 'ESP32 · OLED · LITAR KAWALAN',
      headline: 'Mikropengawal ESP32 & Paparan Status',
      desc: 'Mikropengawal ESP32 bertindak sebagai pusat kawalan utama yang memproses isyarat sensor, mengurus mod operasi dan memaparkan status sistem pada skrin OLED.',
      chips: ['Mikropengawal ESP32', 'Skrin Paparan OLED', 'Papan Litar & Pendawaian', 'Titik Sambungan IoT']
    },
    en: {
      statusText: 'STAGE 02 · SYSTEM BRAIN',
      stepNum: 'STAGE 02',
      role: 'CENTRAL CONTROLLER & DISPLAY',
      hw: 'ESP32 · OLED · CONTROL CIRCUIT',
      headline: 'ESP32 Microcontroller & Live Status Display',
      desc: 'The ESP32 microcontroller serves as the primary controller, processing sensor inputs, managing operating modes, and displaying system status on the OLED screen.',
      chips: ['ESP32 Microcontroller', 'OLED Status Screen', 'Circuit Wiring & Logic', 'Local IoT Hotspot']
    }
  },
  {
    image: 'assets/stage-3.png',
    hotspot: { x: '52%', y: '47%' },
    ms: {
      statusText: 'PERINGKAT 03 · TARIKAN & ALIRAN',
      stepNum: 'PERINGKAT 03',
      role: 'ISYARAT MEMANDU & SEDUTAN',
      hw: 'UV LED · KIPAS SEDUTAN · SALUR CO₂',
      headline: 'Tarikan CO₂, Cahaya UV & Aliran Udara Sedutan',
      desc: 'Gas CO₂ menyerupai hembusan nafas manusia untuk menarik nyamuk, manakala lampu UV memberikan panduan visual tambahan dan kipas menghasilkan aliran udara ke arah bawah.',
      chips: ['Jalur LED Ultraviolet', 'Kipas Sedutan Udara', 'Pelepasan Gas CO₂', 'Kamera Terbuka 360°']
    },
    en: {
      statusText: 'STAGE 03 · ATTRACTION & AIRFLOW',
      stepNum: 'STAGE 03',
      role: 'GUIDING SIGNALS & SUCTION',
      hw: 'UV LED · EXHAUST FAN · CO₂ STREAM',
      headline: 'CO₂ Attraction, UV Illumination & Downward Airflow',
      desc: 'CO₂ resembles a cue from human respiration to attract mosquitoes, while UV light provides an additional visual cue and the fan creates downward suction toward the trap.',
      chips: ['UV LED Strip', 'Suction Exhaust Fan', 'CO₂ Plume Emission', '360° Open Chamber']
    }
  },
  {
    image: 'assets/stage-4.png',
    hotspot: { x: '54%', y: '62%' },
    ms: {
      statusText: 'PERINGKAT 04 · TANGKAPAN',
      stepNum: 'PERINGKAT 04',
      role: 'RUANG PENAHANAN FIZIKAL',
      hw: 'LACI BOLEH TARIK · JARING HALUS',
      headline: 'Laci Tangkapan Boleh Tarik & Bakul Jaring Halus',
      desc: 'Bakul jaring halus menahan nyamuk yang disedut dengan selamat tanpa semburan kimia, serta boleh ditarik keluar dengan mudah untuk pemeriksaan dan pembersihan.',
      chips: ['Bakul Jaring Halus', 'Laci Tarik Modular', 'Pemegang Ergonomik', 'Bebas Racun Kimia']
    },
    en: {
      statusText: 'STAGE 04 · CAPTURE',
      stepNum: 'STAGE 04',
      role: 'PHYSICAL CONTAINMENT CHAMBER',
      hw: 'SLIDE-OUT TRAY · FINE MESH BASKET',
      headline: 'Removable Capture Drawer & Fine Mesh Basket',
      desc: 'The fine mesh basket securely retains mosquitoes without toxic sprays and can be easily removed for inspection and maintenance.',
      chips: ['Fine Mesh Retainer', 'Modular Slide-out Drawer', 'Ergonomic Handle', 'Chemical-Free Trap']
    }
  },
  {
    image: 'assets/stage-5.png',
    hotspot: { x: '50%', y: '78%' },
    ms: {
      statusText: 'PERINGKAT 05 · PENGHASIL CO₂',
      stepNum: 'PERINGKAT 05',
      role: 'PENJANAAN BIOLOGIKAL',
      hw: 'BEKAS PENAPAIAN · CAMPURAN MESRA ALAM',
      headline: 'Bekas Penapaian Semula Jadi Penghasil CO₂',
      desc: 'Campuran yis, gula dan air suam di dalam bekas penapaian bahagian bawah menghasilkan gas CO₂ secara semula jadi sebagai isyarat tarikan biologi yang selamat.',
      chips: ['Bekas Makanan Lutsinar', 'Campuran Yis & Gula', 'Penapaian Semula Jadi', 'Pintu Akses Berengsel']
    },
    en: {
      statusText: 'STAGE 05 · CO₂ GENERATOR',
      stepNum: 'STAGE 05',
      role: 'BIOLOGICAL SCENT GENERATION',
      hw: 'FERMENTATION CONTAINER · ECO MIXTURE',
      headline: 'Natural Fermentation CO₂ Bio-Generator',
      desc: 'Yeast, sugar, and warm water ferment inside the lower container to produce CO₂ naturally as a safe biological attraction cue.',
      chips: ['Transparent Container', 'Yeast & Sugar Solution', 'Natural Fermentation', 'Hinged Service Door']
    }
  }
];

// Preload the five detail images for instant zero-lag switching
[1, 2, 3, 4, 5].forEach((num) => {
  const img = new Image();
  img.src = `assets/stage-${num}.png`;
});

function renderXrayStage(stageIndex, smoothCamera = true) {
  activeXrayStage = stageIndex;
  const exhibit = $('#xrayExhibit');
  if (!exhibit) return;

  exhibit.setAttribute('data-active-stage', String(stageIndex));

  // Update Mission Stage Nav Buttons
  $$('.stage-nav-btn').forEach((btn) => {
    const isSelected = Number(btn.dataset.stage) === stageIndex;
    btn.classList.toggle('active', isSelected);
    btn.setAttribute('aria-selected', String(isSelected));
    btn.tabIndex = isSelected ? 0 : -1;
  });

  // Update Interactive Hotspots
  $$('.xray-hotspot').forEach((spot) => {
    const isCurrent = Number(spot.dataset.hotspot) === stageIndex;
    spot.classList.toggle('active', isCurrent);
    spot.setAttribute('aria-pressed', String(isCurrent));
  });

  const focusRing = $('#xrayFocusRing');
  const statusText = $('#missionStatusText');

  if (stageIndex === 0) {
    if (focusRing) {
      focusRing.style.opacity = '0';
      focusRing.style.transform = 'translate(-50%, -50%) scale(0)';
    }
    if (statusText) {
      statusText.textContent = currentLanguage === 'en' ? 'FULL DEVICE OVERVIEW' : 'PANDANGAN KESELURUHAN';
    }
    return;
  }

  const stageData = stagesData[stageIndex];
  if (!stageData) return;

  const info = stageData[currentLanguage] || stageData.ms;

  // Move & Show Focus Ring
  if (focusRing) {
    focusRing.style.left = stageData.hotspot.x;
    focusRing.style.top = stageData.hotspot.y;
    focusRing.style.opacity = '1';
    focusRing.style.transform = 'translate(-50%, -50%) scale(1)';
  }

  // Update Status Pill
  if (statusText) {
    statusText.textContent = info.statusText;
  }

  // Update Detail View Media & Content
  const detailImg = $('#stageDetailImg');
  if (detailImg) {
    detailImg.src = stageData.image;
    detailImg.alt = info.headline;
  }

  const stepNum = $('#detailStepNum');
  if (stepNum) stepNum.textContent = info.stepNum;

  const roleTag = $('#detailRoleTag');
  if (roleTag) roleTag.textContent = info.role;

  const hwTag = $('#detailHwTag');
  if (hwTag) hwTag.textContent = info.hw;

  const headline = $('#detailHeadline');
  if (headline) headline.textContent = info.headline;

  const desc = $('#detailDescription');
  if (desc) desc.textContent = info.desc;

  const chips = $('#detailChips');
  if (chips) {
    chips.innerHTML = info.chips.map(c => `<span>${c}</span>`).join('');
  }
}

// Stage Nav Buttons in Top Mission Bar
$$('.stage-nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    renderXrayStage(Number(btn.dataset.stage));
  });
});

// Interactive Hotspot Pins on Device
$$('.xray-hotspot').forEach((spot) => {
  spot.addEventListener('click', () => {
    renderXrayStage(Number(spot.dataset.hotspot));
  });
});

// Cards in Mission Control Overview
$$('.mission-card').forEach((card) => {
  card.addEventListener('click', () => {
    renderXrayStage(Number(card.dataset.stage));
  });
});

// Reset & Back Buttons
$('#btnResetView')?.addEventListener('click', () => renderXrayStage(0));
$('#btnBackToFull')?.addEventListener('click', () => renderXrayStage(0));

// Previous & Next Navigation Buttons
$('#btnPrevStage')?.addEventListener('click', () => {
  const target = activeXrayStage > 1 ? activeXrayStage - 1 : 5;
  renderXrayStage(target);
});

$('#btnNextStage')?.addEventListener('click', () => {
  const target = activeXrayStage < 5 ? activeXrayStage + 1 : 1;
  renderXrayStage(target);
});

// Keyboard Navigation & Accessibility (Escape to exit, Arrow keys to navigate)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (activeXrayStage !== 0) {
      renderXrayStage(0);
    }
  } else if (event.key === 'ArrowLeft' && activeXrayStage > 0) {
    const target = activeXrayStage > 1 ? activeXrayStage - 1 : 5;
    renderXrayStage(target);
  } else if (event.key === 'ArrowRight' && activeXrayStage > 0) {
    const target = activeXrayStage < 5 ? activeXrayStage + 1 : 1;
    renderXrayStage(target);
  }
});

const modes = [
  {
    video: 'assets/manual-mode.mp4', glow: 'rgba(76,255,175,.15)',
    ms: { context:'RUMAH · DEMONSTRASI', name:'MANUAL', description:'Kawalan terus melalui papan pemuka atau butang fizikal apabila pengguna mahu menghidupkan dan mematikan sistem sendiri.', trigger:'Pencetus: Arahan pengguna', best:'Sesuai: Kawalan dalaman', status:'MANUAL AKTIF' },
    en: { context:'HOME · DEMONSTRATION', name:'MANUAL', description:'Direct control through the dashboard or physical button whenever the user wants to switch the system on or off.', trigger:'Trigger: User command', best:'Best for: Indoor control', status:'MANUAL ACTIVE' }
  },
  {
    video: 'assets/auto-ldr-mode.mp4', glow: 'rgba(112,95,255,.20)',
    ms: { context:'BERANDA · KAWASAN BERLINDUNG', name:'AUTO LDR', description:'Sensor cahaya mengesan keadaan gelap dan mengaktifkan sistem secara automatik tanpa kawalan berulang.', trigger:'Pencetus: Tahap cahaya', best:'Sesuai: Senja dan malam', status:'LDR MEMANTAU' },
    en: { context:'VERANDA · SHELTERED AREA', name:'AUTO LDR', description:'The light sensor detects darkness and activates the system automatically without repeated manual control.', trigger:'Trigger: Light level', best:'Best for: Dusk and night', status:'LDR MONITORING' }
  },
  {
    video: 'assets/timer-mode.mp4', glow: 'rgba(44,198,255,.18)',
    ms: { context:'SEKOLAH · PEJABAT · DEWAN', name:'PEMASA', description:'Operasi mengikut jadual yang ditetapkan untuk penggunaan konsisten pada waktu tertentu.', trigger:'Pencetus: Jadual masa', best:'Sesuai: Lokasi rutin', status:'PEMASA DIJADUALKAN' },
    en: { context:'SCHOOL · OFFICE · HALL', name:'TIMER', description:'The system operates according to a configured schedule for consistent use at selected times.', trigger:'Trigger: Time schedule', best:'Best for: Routine locations', status:'TIMER SCHEDULED' }
  }
];

let modeSwitchToken = 0;

function renderMode(index, animate = true) {
  activeModeIndex = index;
  const modeConfig = modes[index];
  const mode = modeConfig[currentLanguage];
  $('#modeIndex').textContent = `0${index + 1} / 03`;
  $('#modeContext').textContent = mode.context;
  $('#modeName').textContent = mode.name;
  $('#modeDescription').textContent = mode.description;
  $('#modeTrigger').textContent = mode.trigger;
  $('#modeBest').textContent = mode.best;
  $('#modeStatus').textContent = mode.status;
  $('.mode-viewer').style.background = `radial-gradient(circle at 72% 26%,${modeConfig.glow},transparent 38%),rgba(255,255,255,.018)`;
  $('#modePoster').alt = `Visual mod ${mode.name} AEDES-X`;
  $('#modePoster').style.transform = `translateY(${index === 1 ? -6 : index === 2 ? 4 : 0}px) scale(${index === 1 ? 1.035 : 1})`;

  const video = $('#modeVideo');
  const visual = $('.mode-visual');
  const sourceChanged = video.getAttribute('src') !== modeConfig.video;
  if (sourceChanged) {
    const token = ++modeSwitchToken;
    video.pause();
    if (animate) visual.classList.add('switching');
    setTimeout(() => {
      if (token !== modeSwitchToken) return;
      video.setAttribute('src', modeConfig.video);
      video.load();
      visual.classList.add('has-video');
      video.play().catch(() => {});
      visual.classList.remove('switching');
    }, animate ? 220 : 0);
  }

  $$('.mode-button').forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
}

const modeSelector = $('#modeSelector');

function scrollModeTo(index) {
  const button = $$('.mode-button')[index];
  const left = button.offsetLeft - (modeSelector.clientWidth - button.offsetWidth) / 2;
  modeSelector.scrollTo({ left, behavior: 'smooth' });
}

$$('.mode-button').forEach((button, index) => button.addEventListener('click', () => {
  renderMode(index);
  scrollModeTo(index);
}));

$('#modePrev').addEventListener('click', () => {
  const index = Math.max(0, activeModeIndex - 1);
  renderMode(index);
  scrollModeTo(index);
});

$('#modeNext').addEventListener('click', () => {
  const index = Math.min(modes.length - 1, activeModeIndex + 1);
  renderMode(index);
  scrollModeTo(index);
});

modeSelector.addEventListener('wheel', (event) => {
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    event.preventDefault();
    modeSelector.scrollLeft += event.deltaY;
  }
}, { passive: false });

let modeScrollTimer;
modeSelector.addEventListener('scroll', () => {
  clearTimeout(modeScrollTimer);
  modeScrollTimer = setTimeout(() => {
    const center = modeSelector.scrollLeft + modeSelector.clientWidth / 2;
    const buttons = $$('.mode-button');
    let closest = 0;
    let distance = Infinity;
    buttons.forEach((button, index) => {
      const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
      const nextDistance = Math.abs(buttonCenter - center);
      if (nextDistance < distance) { distance = nextDistance; closest = index; }
    });
    if (closest !== activeModeIndex) renderMode(closest);
  }, 140);
}, { passive: true });

const modeVideo = $('#modeVideo');
modeVideo.addEventListener('timeupdate', () => {
  const progress = modeVideo.duration ? modeVideo.currentTime / modeVideo.duration * 100 : 0;
  $('#modeVideoProgress').style.width = `${progress}%`;
});

const comparisons = [
  {
    image:'assets/compare-fogging.webp',
    ms:{name:'Fogging', alt:'Operasi fogging di kawasan perumahan', summary:'Rawatan kawasan yang lazimnya dijalankan oleh petugas terlatih pada masa tertentu.', headline:'Kawalan pintar berbanding rawatan berkala', detail:'AEDES-X direka untuk operasi setempat yang boleh dipantau, manakala fogging ialah rawatan kawasan pada masa tertentu.', rows:[['Cara utama','Perangkap CO₂ + UV + aliran udara','Rawatan ruang/kawasan'],['Bahan kimia semburan','Tidak','Ya'],['Kawalan pengguna','Dashboard + butang fizikal','Dilaksana petugas'],['Operasi automatik','Auto LDR + Pemasa','Bukan operasi berterusan']]},
    en:{name:'Fogging', alt:'Fogging operation in a residential area', summary:'An area treatment commonly carried out by trained personnel at selected times.', headline:'Smart control versus periodic treatment', detail:'AEDES-X is designed for monitored local operation, while fogging is an area treatment performed at selected times.', rows:[['Main approach','CO₂ + UV + airflow trap','Space/area treatment'],['Chemical spray','No','Yes'],['User control','Dashboard + physical button','Operator-led'],['Automatic operation','Auto LDR + Timer','Not continuous operation']]}
  },
  {
    image:'assets/compare-aerosol.webp',
    ms:{name:'Semburan aerosol', alt:'Tin semburan aerosol serangga', summary:'Pilihan mudah alih untuk penggunaan terus pada ruang atau sasaran tertentu.', headline:'Sistem boleh dipantau berbanding semburan segera', detail:'AEDES-X menawarkan kawalan mod dan status sistem; aerosol memerlukan semburan manual berulang mengikut keperluan.', rows:[['Cara utama','Menarik dan memerangkap','Semburan langsung'],['Bahan kimia semburan','Tidak','Ya'],['Kawalan pengguna','Dashboard + butang fizikal','Tekan tin secara manual'],['Peringatan penyelenggaraan','Ada dalam dashboard','Tiada']]},
    en:{name:'Aerosol spray', alt:'Insect aerosol spray cans', summary:'A portable option for direct use in a selected space or on a target.', headline:'A monitorable system versus immediate spraying', detail:'AEDES-X provides mode control and system status; aerosol requires repeated manual spraying when needed.', rows:[['Main approach','Attracts and captures','Direct spray'],['Chemical spray','No','Yes'],['User control','Dashboard + physical button','Manual can operation'],['Maintenance reminder','Available in dashboard','None']]}
  },
  {
    image:'assets/compare-coil.webp',
    ms:{name:'Lingkaran nyamuk', alt:'Lingkaran nyamuk dalam pembungkusan', summary:'Kaedah ringkas tanpa bekalan elektrik yang membebaskan asap ketika dibakar.', headline:'Perangkap berasaskan sensor berbanding kaedah pembakaran', detail:'AEDES-X menggunakan sensor dan kawalan elektronik; lingkaran nyamuk perlu dinyalakan dan menghasilkan asap semasa digunakan.', rows:[['Cara utama','Tarikan + tangkapan fizikal','Asap penghalau'],['Api atau pembakaran','Tidak','Ya'],['Kawalan pengguna','3 mod operasi','Nyalakan / padamkan'],['Pemantauan sistem','Status pada dashboard','Tiada']]},
    en:{name:'Mosquito coil', alt:'Mosquito coil and packaging', summary:'A simple no-electricity method that releases smoke while burning.', headline:'Sensor-based trapping versus a burning method', detail:'AEDES-X uses sensors and electronic controls; a mosquito coil must be lit and releases smoke during use.', rows:[['Main approach','Attraction + physical capture','Repellent smoke'],['Flame or burning','No','Yes'],['User control','3 operating modes','Light / extinguish'],['System monitoring','Dashboard status','None']]}
  },
  {
    image:'assets/compare-uv.webp',
    ms:{name:'Perangkap UV biasa', alt:'Perangkap serangga UV biasa', summary:'Peranti elektrik yang lazimnya menggunakan cahaya UV sebagai tarikan utama.', headline:'Tarikan berbilang isyarat berbanding cahaya sahaja', detail:'AEDES-X menambah CO₂, aliran udara, tiga mod dan kawalan IoT kepada tarikan UV. Ciri perangkap UV komersial boleh berbeza mengikut model.', rows:[['Isyarat tarikan','CO₂ + UV','Kebiasaannya UV'],['Aliran udara','Kipas sedutan 5V','Bergantung pada model'],['Kawalan pintar','Dashboard + 3 mod','Bergantung pada model'],['Sokongan kuasa','Panel solar membantu kuasa','Kebiasaannya kuasa utama']]},
    en:{name:'Standard UV trap', alt:'Standard UV insect trap', summary:'An electrical device that commonly uses UV light as its primary attraction method.', headline:'Multiple attraction signals versus light alone', detail:'AEDES-X adds CO₂, airflow, three modes and IoT control to UV attraction. Commercial UV-trap features vary by model.', rows:[['Attraction signal','CO₂ + UV','Typically UV'],['Airflow','5V suction fan','Model-dependent'],['Smart control','Dashboard + 3 modes','Model-dependent'],['Power support','Solar-assisted','Typically mains power']]}
  }
];

function renderComparison(index, animate = true) {
  const stage = $('#compareLab');
  if (!stage) return;
  activeCompareIndex = index;
  const item = comparisons[index][currentLanguage];
  const image = $('#compareImage');
  if (animate) stage.classList.add('is-switching');
  setTimeout(() => {
    image.src = comparisons[index].image;
    image.alt = item.alt;
    $('#compareName').textContent = item.name;
    $('#compareSummary').textContent = item.summary;
    $('#compareHeadline').textContent = item.headline;
    $('#compareDetail').textContent = item.detail;
    $('#compareCount').textContent = String(index + 1).padStart(2, '0');
    $('#compareMatrix').innerHTML = item.rows.map((row) => `<div class="compare-row"><span>${row[0]}</span><b><i>✓</i>${row[1]}</b><em>${row[2]}</em></div>`).join('');
    $$('.compare-tab').forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    stage.classList.remove('is-switching');
  }, animate ? 170 : 0);
}

$$('.compare-tab').forEach((button, index) => button.addEventListener('click', () => renderComparison(index)));

$$('[data-tilt]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (matchMedia('(pointer: coarse)').matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${y * -4}deg) translateY(-3px)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
});

function showScreen(index) {
  $$('.screens img').forEach((image, imageIndex) => image.classList.toggle('active', imageIndex === index));
  $$('.screen-nav button').forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
}

$$('.screen-nav button').forEach((button, index) => button.addEventListener('click', () => showScreen(index)));
let screenIndex = 0;
setInterval(() => {
  if (!document.hidden) {
    screenIndex = (screenIndex + 1) % 4;
    showScreen(screenIndex);
  }
}, 4800);

$$('.video-toggle').forEach((button) => button.addEventListener('click', () => {
  const video = button.parentElement.querySelector('video');
  if (video.paused) {
    video.play();
    button.textContent = 'Ⅱ';
  } else {
    video.pause();
    button.textContent = '▶';
  }
}));

const modal = $('#teaserModal');
$('#playTeaser').addEventListener('click', () => {
  modal.showModal();
  modal.querySelector('video').play();
});
$('.modal-close').addEventListener('click', () => {
  modal.querySelector('video').pause();
  modal.close();
});
const navToggle = $('#navToggle');
const mobileNav = $('#mobileNav');
const navClose = $('#navClose');
const navBackdrop = $('#navBackdrop');

function openMobileNav() {
  if (!mobileNav || !navToggle) return;
  navToggle.setAttribute('aria-expanded', 'true');
  navToggle.classList.add('active');
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  if (!mobileNav || !navToggle) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.classList.remove('active');
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav && mobileNav.classList.contains('open');
    if (isOpen) closeMobileNav(); else openMobileNav();
  });
}
if (navClose) navClose.addEventListener('click', closeMobileNav);
if (navBackdrop) navBackdrop.addEventListener('click', closeMobileNav);

$$('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileNav();
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
    closeMobileNav();
  }
});

applyLanguage(currentLanguage);
