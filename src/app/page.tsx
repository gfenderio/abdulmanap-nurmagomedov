"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, MapPin, Phone, Mail, GraduationCap, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useGSAP(() => {
    // Hero Animations
    gsap.fromTo(
      ".hero-text",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.1 }
    );
    gsap.fromTo(
      ".hero-card",
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    // Scroll Scrubbing Reveal for headers
    gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    // Bento Grid Hover Physics & Reveal
    gsap.fromTo(
      ".bento-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".bento-container",
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <main ref={container} className="bg-white text-neutral-900 overflow-x-hidden w-full max-w-full font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo MI Sirojul Falah" className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl tracking-tight text-neutral-900">MI Sirojul Falah</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-600">
            <Link href="#profil" className="hover:text-brand transition-colors">Profil</Link>
            <Link href="#fasilitas" className="hover:text-brand transition-colors">Fasilitas</Link>
            <Link href="#aktivitas" className="hover:text-brand transition-colors">Aktivitas</Link>
            <Link href="#ppdb" className="hover:text-brand transition-colors">PPDB</Link>
          </div>
          
          <div className="hidden md:block">
            <Link 
              href="/login" 
              className="px-5 py-2.5 rounded-xl bg-brand text-white text-sm font-bold hover:bg-brand-hover transition-colors shadow-md"
            >
              Masuk Portal
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-100 shadow-lg py-4 px-6 flex flex-col gap-4">
            <Link href="#profil" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-neutral-600 hover:text-brand">Profil</Link>
            <Link href="#fasilitas" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-neutral-600 hover:text-brand">Fasilitas</Link>
            <Link href="#aktivitas" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-neutral-600 hover:text-brand">Aktivitas</Link>
            <Link href="#ppdb" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-neutral-600 hover:text-brand">PPDB</Link>
            <Link href="/login" className="w-full text-center py-3 mt-2 rounded-xl bg-brand text-white font-bold hover:bg-brand-hover shadow-md">
              Masuk Portal
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-brand-light/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="hero-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand/20 text-brand text-sm font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Penerimaan Siswa Baru 2024/2025
            </div>
            <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.1] text-balance">
              Pendidikan Dasar <span className="text-brand">Berakhlak</span> & Modern.
            </h1>
            <p className="hero-text text-base md:text-lg text-neutral-600 max-w-xl text-balance leading-relaxed">
              Mengintegrasikan adab keislaman, kurikulum nasional, dan teknologi untuk mencetak generasi unggul yang beriman dan berprestasi.
            </p>
            <div className="hero-text flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link 
                href="#ppdb" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-hover hover:shadow-lg transition-all duration-300"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#profil" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-neutral-900 border border-neutral-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-neutral-50 transition-colors shadow-sm"
              >
                Pelajari Profil
              </Link>
            </div>
          </div>
          
          <div className="hero-card relative z-10 block w-full mt-8 lg:mt-0">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 shadow-2xl relative border-4 md:border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="Kegiatan Belajar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 font-medium">Terakreditasi</p>
                  <p className="text-xl font-bold text-neutral-900">A (Sangat Baik)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sambutan & Profil Section */}
      <section id="profil" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="reveal-text">
            <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-3">Visi & Misi</h2>
            <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.2] text-balance">
              Membangun fondasi karakter, bukan sekadar angka di atas rapor.
            </h3>
          </div>
          
          <div className="reveal-text bg-brand-light/30 rounded-2xl p-8 md:p-12 border border-brand/10 shadow-sm text-left relative overflow-hidden">
            <div className="absolute -top-12 -right-12 text-[12rem] text-brand/5 font-serif leading-none">"</div>
            <p className="text-base md:text-xl text-neutral-700 leading-relaxed relative z-10 font-medium">
              Berdiri di atas nilai-nilai keislaman dan nasionalisme sejak 1990, MI Sirojul Falah terus berinovasi. Kami mendidik anak-anak untuk mandiri, beradab, dan tanggap terhadap teknologi dengan tetap berpegang teguh pada iman.
            </p>
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-lg">K.H. Ahmad Fauzan</p>
                <p className="text-neutral-500 text-sm font-medium">Kepala Sekolah MI Sirojul Falah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas (Bento Grid) */}
      <section id="fasilitas" className="py-24 px-6 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-text text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Fasilitas Penunjang</h2>
            <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Ekosistem Pembelajaran
            </h3>
          </div>
          
          <div className="bento-container grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-dense">
            {/* Card 1 */}
            <div className="bento-card col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Perpustakaan Interaktif</h3>
              <p className="text-neutral-600 max-w-md">Koleksi literatur fisik dan digital dalam ruang yang didesain untuk kenyamanan membaca siswa, merangsang literasi sejak dini.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bento-card col-span-1 group relative overflow-hidden rounded-2xl bg-brand text-white shadow-md p-8 hover:bg-brand-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Masjid Sekolah</h3>
              <p className="text-brand-light text-sm leading-relaxed">Pusat ibadah harian. Membiasakan siswa shalat Dhuha dan shalat berjamaah setiap hari.</p>
            </div>

            {/* Card 3 */}
            <div className="bento-card col-span-1 group relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent-hover flex items-center justify-center mb-6">
                <span className="material-symbols-outlined font-bold">computer</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Lab Komputer</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Pengenalan komputasi dasar dan ujian berbasis CBT (Computer Based Test).</p>
            </div>

            {/* Card 4 */}
            <div className="bento-card col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl bg-neutral-900 text-white shadow-md">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold mb-2">Lapangan Olahraga Luas</h3>
                <p className="text-neutral-300 text-sm max-w-sm">Fasilitas olahraga dan ekstrakurikuler (pramuka, pencak silat, futsal) untuk melatih motorik dan sportivitas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed / Aktivitas Kami */}
      <section id="aktivitas" className="py-24 px-6 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-text text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Aktivitas Kami</h2>
            <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Ikuti Kegiatan Terbaru
            </h3>
            <p className="mt-4 text-neutral-600 text-base md:text-lg">
              Pantau langsung keseruan aktivitas madrasah kami melalui Instagram.
            </p>
          </div>

          <div className="reveal-text">
            <div className="elfsight-app-5c04289f-06aa-4a59-a435-0ea596d45617" data-elfsight-app-lazy></div>
          </div>

          <div className="reveal-text text-center mt-10">
            <a 
              href="https://www.instagram.com/mis_sirojul_falah/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold hover:opacity-90 transition-opacity shadow-md"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Follow @mis_sirojul_falah
            </a>
          </div>
        </div>
      </section>

      {/* PPDB / Call to Action */}
      <section id="ppdb" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-xl">
            <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-brand-hover rounded-full blur-3xl opacity-50 z-0"></div>
            
            <div className="relative z-10 max-w-xl text-white text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">Pendaftaran Tahun Ajaran 2024/2025</h2>
              <p className="text-brand-light text-base md:text-lg mb-8">Bergabunglah bersama kami. Kuota terbatas. Dapatkan informasi detail mengenai kurikulum, syarat, dan rincian biaya pendaftaran.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold hover:bg-accent-hover transition-colors shadow-md text-center">
                  Hubungi Panitia PPDB
                </button>
                <Link href="/login" className="bg-white text-brand px-8 py-4 rounded-xl font-bold hover:bg-neutral-50 transition-colors shadow-sm text-center">
                  Login Portal Siswa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-neutral-800">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo MI Sirojul Falah" className="w-12 h-12 object-contain bg-white rounded-xl p-1" />
                <span className="font-bold text-2xl tracking-tight">MI Sirojul Falah</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Membentuk generasi unggul yang berprestasi dalam ilmu pengetahuan dan teguh dalam iman & takwa.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold tracking-wide uppercase text-sm text-neutral-300">Hubungi Kami</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-neutral-400">
                  <MapPin className="w-5 h-5 shrink-0 text-brand" />
                  <p>Jl. Pahlawan No. 123, Kecamatan Sukmajaya, Depok, Jawa Barat 16411</p>
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Phone className="w-5 h-5 shrink-0 text-brand" />
                  <p>(021) 7782 9911</p>
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Mail className="w-5 h-5 shrink-0 text-brand" />
                  <p>admin@mi-sirojulfalah.sch.id</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold tracking-wide uppercase text-sm text-neutral-300">Jam Operasional</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex justify-between"><span>Senin - Jumat:</span> <span>07.00 - 15.00 WIB</span></li>
                <li className="flex justify-between"><span>Sabtu:</span> <span>Ekstrakurikuler</span></li>
                <li className="flex justify-between"><span>Minggu:</span> <span>Tutup</span></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
            <p>&copy; {new Date().getFullYear()} MI Sirojul Falah. Hak cipta dilindungi.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-brand transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand transition-colors">Facebook</a>
              <a href="#" className="hover:text-brand transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
