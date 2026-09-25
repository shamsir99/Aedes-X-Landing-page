<div align="center">

  <img src="./assets/aedes-x-logo-horizontal.png" alt="AEDES-X Logo" width="380" />

  # 🦟 AEDES-X · IoT Rangers
  ### **Perlindungan Lebih Pintar · Smart Mosquito Trap Prototype**
  *Inovasi STEM & Kawalan IoT Berteraskan Komuniti — SJKT Ladang Rinching*

  <br/>

  [![Peringkat](https://img.shields.io/badge/Peringkat-Kebangsaan_2026-4cffaf?style=for-the-badge&logo=target&logoColor=06100d&labelColor=06100d)](https://github.com/shamsir99/Aedes-X-Landing-page)
  [![Status](https://img.shields.io/badge/Status-Prototaip_Tervalidasi-37d8ff?style=for-the-badge&logo=checkmarx&logoColor=06100d&labelColor=06100d)](https://github.com/shamsir99/Aedes-X-Landing-page)
  [![Bahasa](https://img.shields.io/badge/Dwi_Bahasa-BM_%7C_EN-7568ff?style=for-the-badge&logo=googletranslate&logoColor=white&labelColor=06100d)](https://github.com/shamsir99/Aedes-X-Landing-page)
  [![SDG](https://img.shields.io/badge/SDG-Goal_3_&_9-ff7043?style=for-the-badge&logo=unitednations&logoColor=white&labelColor=06100d)](https://github.com/shamsir99/Aedes-X-Landing-page)
  [![License](https://img.shields.io/badge/Lesen-Hakcipta_Terpelihara-grey?style=for-the-badge&labelColor=06100d)](LICENSE)

  <br/>

  <p align="center">
    <a href="#-tentang-aedes-x">Tentang Projek</a> •
    <a href="#-ciri-ciri-utama-landing-page">Ciri-Ciri Web</a> •
    <a href="#-seni-bina-sistem-hardware--iot">Seni Bina Sistem</a> •
    <a href="#-3-mod-operasi">3 Mod Operasi</a> •
    <a href="#-papan-pemuka-iot">Papan Pemuka</a> •
    <a href="#-matriks-perbandingan">Perbandingan</a> •
    <a href="#-panduan-pemasangan--deploy">Deployment</a> •
    <a href="#-pasukan--penghargaan">Pasukan</a>
  </p>

  <img src="./assets/aedes-x-hero.png" alt="AEDES-X Hero Prototype" width="780" style="border-radius: 18px; margin-top: 15px;" />

</div>

---

## 📖 Ringkasan Eksekutif (Executive Summary)

**AEDES-X** merupakan sebuah prototaip perangkap nyamuk pintar generasi baharu yang direka dan dibangunkan oleh pasukan **IoT Rangers** dari **SJKT Ladang Rinching**.

Projek ini menggabungkan prinsip sains tarikan semulajadi dan kejuruteraan moden:
- 🧪 **Tarikan CO₂ Biologikal** (tindak balas yis, gula dan air suam).
- 💡 **Tarikan Cahaya Gelombang UV**.
- 🌀 **Aliran Udara Sedutan Kipas DC** ke dalam bakul jaring halus berkeselamatan.
- 📱 **Sistem Kawalan IoT Berasaskan Mikropengawal ESP32** dengan dwi-kawalan (Papan Pemuka Web Hotspot Setempat + Butang Fizikal Tanpa Talian).

Landing page ini dicipta khusus dengan mutu visual ultra-premium, interaktiviti ala produk Apple, dan sokongan penuh dwibahasa (Bahasa Melayu & English) untuk mempamerkan projek di **Peringkat Kebangsaan 2026**.

---

## ✨ Ciri-Ciri Utama Landing Page

| Ciri | Penerangan Teknikal |
| :--- | :--- |
| 🎬 **Cinematic Scroll Experience** | Simulasi video 120-frame WebP bersiri yang dilukis secara dinamik ke HTML5 `<canvas>` mengikut kedudukan skrol pengguna. |
| 🔍 **Interactive 5-Stage Exploded View** | Paparan komponen terurai (exploded diagram) interaktif yang menonjolkan 5 sub-sistem utama AEDES-X beserta penerangan teliti. |
| 🕹️ **Interactive 3-Mode Console** | Konsol bertukar video langsung (*Manual*, *Auto LDR*, *Pemasa*) dengan pemapar status masa nyata dan penerangan konteks kegunaan. |
| 📱 **Phone Mockup Dashboard Explorer** | Interaksi langsung skrin papan pemuka telefon pintar (Utama, Kawalan, Pemasa, Sistem) beserta kad peringatan penyelenggaraan pintar. |
| ⚖️ **Comparison Lab (Head-to-Head)** | Matriks perbandingan interaktif AEDES-X melawan kaedah konvensional (Fogging, Semburan Aerosol, Lingkaran Ubat Nyamuk, Perangkap UV Biasa). |
| 📊 **Early Validation Metrics** | Laporan telus data ujian makmal awal (kependaman 0.6s - 8.4s) dengan penafian saintifik beretika sebelum ujian rasmi September 2026. |
| 🌐 **Sistem Dwi-Bahasa (BM & EN)** | Penukaran bahasa serta-merta tanpa muat semula halaman melalui *DOM dataset binding* dan *localStorage*. |
| ⚡ **Zero-Dependency Native Stack** | Dibina 100% menggunakan Vanilla HTML5, CSS3 moden, dan Vanilla JavaScript tulen — pantas, ringan, tanpa komplikasi *build step*. |

---

## 🔬 Seni Bina Sistem (Hardware & IoT)

```mermaid
graph TD
    subgraph "1. KUASA & INPUT"
        Solar[Panel Solar + Bateri] --> PwrMgmt[Modul Pengurusan Kuasa]
        LDR[Sensor Cahaya LDR] --> ESP32
        Button[Butang Fizikal Luar Talian] --> ESP32
    end

    subgraph "2. OTAK SISTEM"
        ESP32[Mikropengawal ESP32]
        AP[Wi-Fi AP Hotspot Setempat] <--> ESP32
        WebDash[Papan Pemuka Web Pelayar] <--> AP
    end

    subgraph "3. MEKANISME TARIKAN"
        ESP32 -->|Kawalan Suis / PWM| UV[Lampu UV LED]
        CO2[Penjana CO2 Semula Jadi<br/>Campuran Yis + Gula] -.->|Lepasan Aroma CO2| Nyamuk((Nyamuk Aedes))
        UV -.->|Panduan Visual| Nyamuk
    end

    subgraph "4. TANGKAPAN & KAWALAN"
        ESP32 -->|Pengaktifan| Fan[Kipas Sedutan Udara]
        Nyamuk --> Fan
        Fan --> Mesh[Bakul Jaring Halus Anti-Lepas]
    end
```

<div align="center">
  <img src="./assets/aedes-x-exploded-transparent.png" alt="Pandangan Terurai AEDES-X" width="550" />
  <p><em>Rajah Komponen Terurai 5 Peringkat AEDES-X</em></p>
</div>

---

## 🕹️ 3 Mod Operasi Fleksibel

1. **Mod Manual (Direct Control)**
   - Kawalan hidup/mati secara terus pada papan pemuka telefon atau butang fizikal.
   - Sesuai untuk demonstrasi, ujian makmal dan ruang tamu kediaman.
2. **Mod Auto LDR (Light Dependent Resistor)**
   - Aktif secara automatik mengikut tahap keamatan cahaya persekitaran (waktu senja dan fajar di mana nyamuk Aedes paling agresif).
   - Menjimatkan penggunaan tenaga suria pada waktu tengah hari.
3. **Mod Pemasa (Timer / Scheduled Operation)**
   - Beroperasi mengikut selang waktu yang diprogramkan (cth: beroperasi sebelum waktu murid tiba dan selepas tamat sesi persekolahan).
   - Sangat ideal untuk sekolah, dewan komuniti dan premis pejabat.

---

## 📱 Papan Pemuka Pintar (IoT Dashboard)

Papan pemuka AEDES-X dihoskan terus dari pelayan mikro ESP32 (Local Web Server) melalui rangkaian Wi-Fi Hotspot tertutup:

<div align="center">
  <table>
    <tr>
      <td align="center"><b>01. Utama</b></td>
      <td align="center"><b>02. Kawalan</b></td>
      <td align="center"><b>03. Pemasa</b></td>
      <td align="center"><b>04. Sistem</b></td>
    </tr>
    <tr>
      <td><img src="./assets/dashboard-utama.png" width="180" /></td>
      <td><img src="./assets/dashboard-kawalan.png" width="180" /></td>
      <td><img src="./assets/dashboard-pemasa.png" width="180" /></td>
      <td><img src="./assets/dashboard-sistem.png" width="180" /></td>
    </tr>
  </table>
  <p><em>Paparan 4 Skrin Utama Papan Pemuka Mudah Alih AEDES-X</em></p>
</div>

- **Peringatan Penyelenggaraan Pintar**: Kiraan hari berkala untuk pembersihan jaring dan penggantian bahan yis CO₂.
- **Fail-Safe Butang Fizikal**: Jika sambungan telefon atau hotspot terputus, butang fizikal pada badan peranti tetap boleh mengubah mod tanpa sebarang gangguan.

---

## ⚖️ Matriks Perbandingan Kaedah Kawalan Nyamuk

| Parameter | Fogging Berkala | Semburan Aerosol | Lingkaran Ubat Nyamuk | Perangkap UV Biasa | 🦟 **AEDES-X IoT** |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Tarikan Spesifik CO₂** | ❌ Tiada | ❌ Tiada | ❌ Tiada | ❌ Tiada | ✅ **Ada (Yis & Gula)** |
| **Bebas Racun Kimia** | ❌ Toksik | ❌ Beracun | ❌ Asap karsinogen | ✅ Selamat | ✅ **100% Mesra Alam** |
| **Kawalan Pintar / IoT** | ❌ Manual | ❌ Manual | ❌ Tiada | ❌ Suis asas | ✅ **Web App + 3 Mod** |
| **Penderia Cahaya (LDR)**| ❌ Tiada | ❌ Tiada | ❌ Tiada | ❌ Jarang ada | ✅ **Sensor Terbina** |
| **Sandaran Luar Talian** | — | — | — | — | ✅ **Butang Fizikal** |
| **Peringatan Servis** | ❌ Jadual luar | ❌ Tiada | ❌ Tiada | ❌ Tiada | ✅ **Notifikasi Digital** |

---

## 🌍 Matlamat Pembangunan Mampan (SDG Alignment)

Projek AEDES-X dibangunkan bukan sekadar alat teknologi, tetapi penyelesaian berimpak sosial:

<div align="center">
  <table>
    <tr>
      <td width="50%" align="center">
        <img src="./assets/sdg-3.png" width="140" /><br/>
        <b>SDG 3: Kesihatan Baik dan Kesejahteraan</b><br/>
        <sub>Membantu mencegah penularan demam denggi dalam komuniti sekolah dan kediaman tanpa mencemarkan udara dengan bahan kimia berbahaya.</sub>
      </td>
      <td width="50%" align="center">
        <img src="./assets/sdg-9.png" width="140" /><br/>
        <b>SDG 9: Industri, Inovasi dan Infrastruktur</b><br/>
        <sub>Memupuk bakat muda dalam bidang sains gunaan, IoT, pengaturcaraan mikropengawal dan reka bentuk kejuruteraan lestari.</sub>
      </td>
    </tr>
  </table>
</div>

---

## 🚀 Panduan Pemasangan & Menjalankan Laman Web

Laman web ini adalah **100% Static HTML/CSS/JS** — tidak memerlukan pemasangan npm, node_modules, atau kompilasi rumit!

### 1. Menjalankan Secara Tempatan (Localhost)
Untuk memastikan video dan kanvas frame berjalan lancar tanpa sekatan CORS pelayar:

```bash
# Klon repositori
git clone https://github.com/shamsir99/Aedes-X-Landing-page.git
cd Aedes-X-Landing-page

# Jalankan pelayan web ringkas (menggunakan Python):
python -m http.server 8000

# Atau menggunakan Node (npx):
npx serve .
```
Buka pelayar web dan layari `http://localhost:8000`.

### 2. Pelancaran ke GitHub Pages (1-Klik)
1. Pergi ke tab **Settings** di repositori GitHub anda.
2. Pada menu kiri, klik **Pages**.
3. Di bahagian **Build and deployment > Source**, pilih `Deploy from a branch`.
4. Pilih cawangan `main` dan direktori `/(root)`.
5. Klik **Save**. Laman anda akan aktif secara percuma dalam masa 1 minit!

---

## 📁 Struktur Fail Repositori

```text
├── assets/
│   ├── aedes-x-cinematic-v2.mp4       # Video cinematic resolusi tinggi
│   ├── aedes-x-hero.png               # Visual render hero produk
│   ├── aedes-x-logo-horizontal.png    # Logo rasmi horizontal AEDES-X
│   ├── aedes-x-logo-stacked.png       # Logo rasmi bertingkat
│   ├── aedes-x-mark.png               # Simbol ikon jenama AEDES-X
│   ├── aedes-x-exploded-transparent.png # Rajah komponen terurai
│   ├── cinematic-frames/              # 120 bingkai WebP untuk scroll canvas
│   ├── dashboard-*.png                # Tangkapan skrin antara muka ESP32
│   ├── *-mode.mp4                     # Video demonstrasi 3 mod operasi
│   ├── school-logo-transparent.png    # Logo rasmi SJKT Ladang Rinching
│   └── sdg-*.png                      # Lencana rasmi SDG PBB
├── index.html                         # Struktur semantik HTML5 & dwi-bahasa
├── styles.css                         # Sistem reka bentuk CSS bertaraf tinggi
├── app.js                             # Enjin skrol kanvas, video switcher & interaktiviti
└── README.md                          # Dokumentasi lengkap & analisis projek
```

---

## 👥 Pasukan & Penghargaan

<div align="center">
  <img src="./assets/school-logo-transparent.png" alt="SJKT Ladang Rinching" width="90" />
  
  ### **IOT RANGERS**
  **SJKT LADANG RINCHING · 2026**
  
  *Dengan Kerjasama & Sokongan Daripada:*<br/>
  <br/>
  <img src="./assets/stem-logo.png" height="42" alt="STEM" /> &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./assets/setia-logo.png" height="40" alt="Setia" /> &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./assets/utm-logo.png" height="42" alt="UTM" />
  
  <br/><br/>
  <p><em>"Inovasi Kecil. Impak Yang Bermakna."</em></p>
</div>
