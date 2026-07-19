"use client"

import React, { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { updateProfile, changePassword } from "@/actions/profile"

export function ProfileForm({ user }: { user: any }) {
  const router = useRouter()
  const [isEditMode, setIsEditMode] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Profile data states
  const [name, setName] = useState(user.name || "")
  const [email, setEmail] = useState(user.email || "")
  const [image, setImage] = useState(user.image || "")
  const [phone, setPhone] = useState(user.parentProfile?.phone || "")
  const [nip, setNip] = useState(user.teacherProfile?.nip || "")
  const [subject, setSubject] = useState(user.teacherProfile?.subject || "")
  const [nisn, setNisn] = useState(user.studentProfile?.nisn || "")
  const [grade, setGrade] = useState(user.studentProfile?.grade || "")

  // Password fields states
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Password visibility states
  const [showPwd1, setShowPwd1] = useState(false)
  const [showPwd2, setShowPwd2] = useState(false)
  const [showPwd3, setShowPwd3] = useState(false)

  // Status states
  const [profileMessage, setProfileMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [passwordMessage, setPasswordMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [isSavingProfile, setIsSavingProfile] = useState(false)
  const [isSavingPassword, setIsSavingPassword] = useState(false)

  const handleUploadPhotoClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 2 * 1024 * 1024) {
      setProfileMessage({ type: "error", text: "Ukuran gambar tidak boleh melebihi 2MB." })
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result as string
      setImage(base64String)
      setProfileMessage({ type: "success", text: "Foto profil terpilih. Simpan profil untuk menyimpan permanen." })
    }
    reader.readAsDataURL(file)
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setProfileMessage(null)
    setIsSavingProfile(true)

    const res = await updateProfile({
      name,
      email,
      image,
      phone: user.role === "PARENT" ? phone : undefined,
      nip: user.role === "TEACHER" ? nip : undefined,
      subject: user.role === "TEACHER" ? subject : undefined,
      nisn: user.role === "STUDENT" ? nisn : undefined,
      grade: user.role === "STUDENT" ? grade : undefined
    })

    setIsSavingProfile(false)

    if (res.error) {
      setProfileMessage({ type: "error", text: res.error })
    } else {
      setProfileMessage({ type: "success", text: "Profil berhasil diperbarui." })
      setIsEditMode(false)
      router.refresh()
    }
  }

  const handleSavePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordMessage(null)

    if (newPassword !== confirmPassword) {
      setPasswordMessage({ type: "error", text: "Konfirmasi password baru tidak cocok." })
      return
    }

    if (newPassword.length < 8) {
      setPasswordMessage({ type: "error", text: "Password baru minimal harus 8 karakter." })
      return
    }

    setIsSavingPassword(true)

    const res = await changePassword({
      currentPassword,
      newPassword
    })

    setIsSavingPassword(false)

    if (res.error) {
      setPasswordMessage({ type: "error", text: res.error })
    } else {
      setPasswordMessage({ type: "success", text: "Password berhasil diperbarui." })
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
      router.refresh()
    }
  }

  return (
    <div className="flex-1 pt-6 px-4 md:px-8 pb-12 overflow-y-auto w-full max-w-7xl mx-auto bg-background animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div className="mb-8">
        <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight mb-2">Profil Pengguna</h2>
        <p className="text-on-surface-variant text-body-lg">Kelola informasi pribadi dan pengaturan keamanan akun Anda.</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Profile Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col items-center p-8 text-center relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full p-1 border-2 border-primary-container bg-surface shadow-md overflow-hidden">
                <img 
                  className="w-full h-full rounded-full object-cover" 
                  src={image || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "Ahmad Fulan")}&background=53A6C4&color=fff&bold=true`} 
                  alt="Profile" 
                />
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />
              <button 
                type="button"
                onClick={handleUploadPhotoClick} 
                className="absolute bottom-0 right-0 p-2.5 bg-primary text-on-primary rounded-full hover:bg-brand-hover shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </button>
            </div>
            
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">{name}</h3>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold mb-4">
              <span className="material-symbols-outlined text-[16px]">
                {user.role === "TEACHER" ? "school" : user.role === "PARENT" ? "family_restroom" : user.role === "STUDENT" ? "person" : "admin_panel_settings"}
              </span>
              {user.role === "TEACHER" ? "Guru" : user.role === "PARENT" ? "Wali Murid" : user.role === "STUDENT" ? "Siswa" : "Administrator"}
            </span>
            <p className="text-on-surface-variant text-sm px-4 mb-6">
              {user.role === "ADMIN" && "Bertanggung jawab atas pengelolaan sistem akademik, data master, dan konfigurasi umum SIAS MI Sirojul Falah."}
              {user.role === "TEACHER" && `Guru pengajar mata pelajaran ${subject || "-"} di MI Sirojul Falah.`}
              {user.role === "PARENT" && "Wali murid terdaftar yang memantau perkembangan akademik dan administrasi anak."}
              {user.role === "STUDENT" && `Siswa aktif kelas ${grade || "-"} di MI Sirojul Falah.`}
            </p>
            
            <div className="w-full pt-6 border-t border-outline-variant/50 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                <span className="material-symbols-outlined text-[20px] text-primary">mail</span>
                <span className="truncate">{email || "-"}</span>
              </div>
              {user.role === "PARENT" && (
                <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                  <span className="material-symbols-outlined text-[20px] text-primary">phone_iphone</span>
                  <span>{phone || "-"}</span>
                </div>
              )}
              {user.role === "TEACHER" && (
                <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                  <span className="material-symbols-outlined text-[20px] text-primary">badge</span>
                  <span>NIP: {nip || "-"}</span>
                </div>
              )}
              {user.role === "STUDENT" && (
                <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                  <span className="material-symbols-outlined text-[20px] text-primary">badge</span>
                  <span>NISN: {nisn || "-"}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Forms Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Edit Profile Info */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 md:p-8">
            <form onSubmit={handleSaveProfile}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-outline-variant/50 pb-4">
                <div>
                  <h3 className="text-xl font-headline font-semibold text-on-surface">Informasi Dasar</h3>
                  <p className="text-sm text-on-surface-variant mt-1">Perbarui detail profil pribadi Anda.</p>
                </div>
                {!isEditMode ? (
                  <button 
                    type="button"
                    onClick={() => setIsEditMode(true)} 
                    className="px-4 py-2 bg-brand-light text-primary font-bold rounded-xl hover:bg-primary-fixed transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                    Edit
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 mt-4 sm:mt-0">
                    <button 
                      type="button"
                      onClick={() => {
                        setIsEditMode(false)
                        setName(user.name || "")
                        setEmail(user.email || "")
                        setImage(user.image || "")
                        setPhone(user.parentProfile?.phone || "")
                        setNip(user.teacherProfile?.nip || "")
                        setSubject(user.teacherProfile?.subject || "")
                        setNisn(user.studentProfile?.nisn || "")
                        setGrade(user.studentProfile?.grade || "")
                        setProfileMessage(null)
                      }} 
                      className="px-4 py-2 bg-surface text-on-surface border border-outline-variant font-bold rounded-xl hover:bg-surface-container-low transition-colors"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit"
                      disabled={isSavingProfile}
                      className="px-4 py-2 bg-primary text-on-primary font-bold rounded-xl hover:bg-brand-hover transition-colors flex items-center gap-1.5"
                    >
                      {isSavingProfile && <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>}
                      Simpan
                    </button>
                  </div>
                )}
              </div>
              
              {profileMessage && (
                <div className={`p-4 rounded-xl mb-6 text-sm flex items-start gap-2.5 ${profileMessage.type === "success" ? "bg-success-container text-on-success-container" : "bg-error-container text-on-error-container"}`}>
                  <span className="material-symbols-outlined text-[20px]">
                    {profileMessage.type === "success" ? "check_circle" : "error"}
                  </span>
                  <span>{profileMessage.text}</span>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface">Nama Lengkap</label>
                  <input 
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" 
                    disabled={!isEditMode} 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface">Email</label>
                  <input 
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" 
                    disabled={!isEditMode} 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                {user.role === "TEACHER" && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface">NIP</label>
                      <input 
                        className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" 
                        disabled={!isEditMode} 
                        type="text" 
                        value={nip}
                        onChange={(e) => setNip(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface">Mata Pelajaran</label>
                      <input 
                        className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" 
                        disabled={!isEditMode} 
                        type="text" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </>
                )}

                {user.role === "STUDENT" && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface">NISN</label>
                      <input 
                        className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" 
                        disabled={!isEditMode} 
                        type="text" 
                        value={nisn}
                        onChange={(e) => setNisn(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface">Kelas</label>
                      <input 
                        className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" 
                        disabled={!isEditMode} 
                        type="text" 
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                      />
                    </div>
                  </>
                )}

                {user.role === "PARENT" && (
                  <div className="space-y-2 col-span-2">
                    <label className="text-sm font-bold text-on-surface">Nomor Telepon / WhatsApp</label>
                    <input 
                      className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface disabled:bg-surface-container-low disabled:text-outline" 
                      disabled={!isEditMode} 
                      type="text" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Change Password */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-4 mb-6 border-b border-outline-variant/50 pb-4">
              <div className="p-3 bg-error-container text-on-error-container rounded-xl">
                <span className="material-symbols-outlined">lock_reset</span>
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold text-on-surface">Ganti Password</h3>
                <p className="text-sm text-on-surface-variant mt-1">Pastikan akun Anda tetap aman dengan menggunakan password yang kuat.</p>
              </div>
            </div>
            
            {passwordMessage && (
              <div className={`p-4 rounded-xl mb-6 text-sm flex items-start gap-2.5 ${passwordMessage.type === "success" ? "bg-success-container text-on-success-container" : "bg-error-container text-on-error-container"}`}>
                <span className="material-symbols-outlined text-[20px]">
                  {passwordMessage.type === "success" ? "check_circle" : "error"}
                </span>
                <span>{passwordMessage.text}</span>
              </div>
            )}
            
            <form onSubmit={handleSavePassword} className="space-y-5 max-w-lg">
              <div className="space-y-2 relative">
                <label className="text-sm font-bold text-on-surface">Password Saat Ini</label>
                <div className="relative">
                  <input 
                    className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" 
                    placeholder="Masukkan password saat ini" 
                    type={showPwd1 ? "text" : "password"} 
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                  <button onClick={() => setShowPwd1(!showPwd1)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">{showPwd1 ? "visibility" : "visibility_off"}</span>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Password Baru</label>
                <div className="relative">
                  <input 
                    className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" 
                    placeholder="Minimal 8 karakter" 
                    type={showPwd2 ? "text" : "password"} 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <button onClick={() => setShowPwd2(!showPwd2)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">{showPwd2 ? "visibility" : "visibility_off"}</span>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Konfirmasi Password Baru</label>
                <div className="relative">
                  <input 
                    className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface" 
                    placeholder="Ketik ulang password baru" 
                    type={showPwd3 ? "text" : "password"} 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button onClick={() => setShowPwd3(!showPwd3)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">{showPwd3 ? "visibility" : "visibility_off"}</span>
                  </button>
                </div>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button 
                  type="submit" 
                  disabled={isSavingPassword}
                  className="px-6 py-2.5 bg-primary text-on-primary font-bold rounded-xl hover:bg-brand-hover shadow-sm transition-colors flex items-center gap-1.5"
                >
                  {isSavingPassword && <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>}
                  Simpan Perubahan
                </button>
                <button 
                  className="px-6 py-2.5 bg-surface text-on-surface border border-outline-variant font-bold rounded-xl hover:bg-surface-container-low transition-colors" 
                  type="button"
                  onClick={() => {
                    setCurrentPassword("")
                    setNewPassword("")
                    setConfirmPassword("")
                    setPasswordMessage(null)
                  }}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
