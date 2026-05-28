# Madang Nggonku

Landing page restoran modern premium bertema merah hitam untuk branding, promosi menu, lokasi, dan reservasi online.

## Fitur

- Satu halaman landing page dengan navigasi sticky dan smooth scroll.
- Hero full-screen dengan visual utama, CTA, dan statistik premium.
- Section tentang, menu unggulan, keunggulan, testimoni, dan reservasi.
- Testimoni slider otomatis dengan kontrol prev/next dan dot indicator.
- SEO dasar lengkap: meta tags, Open Graph, Twitter Card, canonical, JSON-LD.
- Responsive mobile-first dengan hamburger menu dan layout adaptif.
- Aksesibilitas dasar: skip link, focus state, aria-label, dan reduced motion.
- Design system konsisten berbasis CSS variables.

## Struktur Folder

```text
website-profesional/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── images/
│   └── icons/
├── robots.txt
├── sitemap.xml
├── README.md
├── .gitignore
└── docs/
    ├── BRANDING.md
    ├── TYPOGRAPHY.md
    ├── ASSETS.md
    ├── AI-IMAGE-PROMPTS.md
    └── DEPLOY.md
```

## Cara Menjalankan Lokal

Pilih salah satu:

```bash
python -m http.server 8000
```

```bash
npx serve .
```

Lalu buka `http://localhost:8000` atau URL yang ditampilkan server.

## Warna Brand

| Token | Nilai |
|---|---|
| `--color-bg` | `#0b0b0f` |
| `--color-primary` | `#d61f26` |
| `--color-primary-dark` | `#7f0f14` |
| `--color-secondary` | `#fb923c` |
| `--color-accent` | `#f5c86b` |
| `--color-success` | `#25d366` |

## Typography

- Heading: Poppins Bold.
- Body: Inter Regular.
- Struktur hierarki dibuat tegas agar branding terasa premium dan mudah dibaca.

## Section Halaman

1. Navbar.
2. Hero.
3. Tentang Kami.
4. Menu Unggulan.
5. Kenapa Memilih Kami.
6. Testimoni.
7. CTA Reservasi.
8. Footer.

## Kustomisasi Cepat

- WhatsApp: ubah link `wa.me` di section reservasi.
- Menu: edit card menu di `index.html`.
- Gambar: ganti aset di `assets/images/`.
- Warna: edit token di `:root` pada `css/style.css`.

## Dokumentasi

- [Branding](docs/BRANDING.md)
- [Typography](docs/TYPOGRAPHY.md)
- [Assets](docs/ASSETS.md)
- [AI Image Prompts](docs/AI-IMAGE-PROMPTS.md)
- [Deploy](docs/DEPLOY.md)

## Best Practice yang Dipakai

- Semantic HTML5.
- CSS variables dan class naming BEM-like.
- Vanilla JavaScript tanpa framework berat.
- Lazy loading pada gambar bawah fold.
- Intersection Observer untuk animasi masuk.
- Slider ringan berbasis transform.
- Aset visual lokal dipakai langsung agar tidak bergantung pada resource eksternal.

## Catatan Webinar Edukasi

Project ini dibuat agar mudah dipakai untuk live coding pemula hingga menengah. Struktur file dipisah jelas supaya tiap layer dapat dipelajari secara mandiri.

## Lisensi / Konteks

Project ini dibuat untuk demonstrasi dan webinar edukasi frontend. Silakan sesuaikan aset, copy, dan domain sebelum dipublikasikan ke produksi.
