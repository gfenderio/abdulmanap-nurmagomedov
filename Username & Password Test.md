# Username & Password Test - SIAS MI Sirojul Falah

Dokumen ini berisi daftar akun uji coba (*test accounts*) yang dapat digunakan untuk menguji fungsionalitas sistem berdasarkan peran masing-masing (*Role-Based Access Control*).

## Informasi Akun Uji Coba

Semua akun di bawah ini menggunakan password default yang sama untuk memudahkan pengujian.

| Peran (Role) | Email (Username) | Password | Tampilan / Fitur yang Dapat Diuji |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin@mi-sirojulfalah.sch.id` | `password123` | Manajemen penuh, Data Siswa (tambah/edit/filter), Akademik (tambah jadwal/cetak), Pusat Laporan, Pengaturan Sistem, Notifikasi Popover |
| **Guru** | `guru@mi-sirojulfalah.sch.id` | `password123` | Dashboard Guru (stat kartu terhubung ke detail akademik), Kelas yang Diampu, Jadwal Mengajar, Nilai & Akademik |
| **Wali Murid** | `wali@mi-sirojulfalah.sch.id` | `password123` | Dashboard Siswa & Wali Murid (Rata-rata Nilai, Grafik Tren Nilai, Status Tagihan SPP, Kehadiran, Jadwal Pelajaran Hari Ini) |
| **Siswa** | `siswa@mi-sirojulfalah.sch.id` | `password123` | Dashboard Siswa (sama dengan Wali Murid) |

---

## Catatan Pengujian Fungsionalitas Hari Ini
Semua interaksi di dalam dashboard saat ini bersifat responsif (*interactive dummy*), meliputi:
* **Form Tambah & Edit Siswa**: Muncul modal pop-up ketika tombol diklik di menu Siswa.
* **Filter Lanjutan**: Membuka dialog filter di menu Siswa.
* **Cetak & Tambah Jadwal**: Aktif di menu Akademik.
* **Opsi Unduh Laporan**: Memilih PDF / Excel di menu Laporan.
* **Toggle Show/Hide Password & Mode Edit**: Aktif di menu Profil.
* **Form Tiket Bantuan**: Aktif di menu Bantuan.
* **Search Bar & Notifikasi Popover**: Berjalan dinamis dengan delay simulasi pada navbar.
