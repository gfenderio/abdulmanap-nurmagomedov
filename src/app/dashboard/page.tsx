import React from "react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-500 mt-1">Selamat datang kembali di SIKA UNINDRA.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Mahasiswa</h3>
          <p className="text-4xl font-bold text-[#53A6C4] mt-2">12,450</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Fakultas Aktif</h3>
          <p className="text-4xl font-bold text-[#FDE047] mt-2">4</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Tunggakan SPP</h3>
          <p className="text-4xl font-bold text-red-500 mt-2">Rp 45M</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mt-8">
        <h3 className="text-lg font-bold mb-4">Pengumuman Kampus</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100">
            <strong>KRS Semester Genap:</strong> Batas pengisian Kartu Rencana Studi (KRS) berakhir pada tanggal 20.
          </div>
          <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-100">
            <strong>Update LMS:</strong> Sistem Learning Management System sedang dalam perbaikan rutin.
          </div>
        </div>
      </div>
    </div>
  );
}
