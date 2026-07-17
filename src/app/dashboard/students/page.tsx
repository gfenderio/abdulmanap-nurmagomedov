import React from "react";

export default function StudentsPage() {
  const mockStudents = [
    { id: 1, name: "Budi Santoso", npm: "2026435001", prodi: "Teknik Informatika", status: "Aktif" },
    { id: 2, name: "Siti Aminah", npm: "2026435002", prodi: "Pendidikan Matematika", status: "Cuti" },
    { id: 3, name: "Andi Saputra", npm: "2026435003", prodi: "Arsitektur", status: "Aktif" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#53A6C4]/5">
        <h2 className="text-xl font-bold text-gray-800">Direktori Mahasiswa (SIKA)</h2>
        <button className="px-4 py-2 bg-[#FDE047] text-gray-800 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
          + Tambah Mahasiswa
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="p-4 font-semibold text-gray-600">NPM</th>
              <th className="p-4 font-semibold text-gray-600">Nama Lengkap</th>
              <th className="p-4 font-semibold text-gray-600">Program Studi</th>
              <th className="p-4 font-semibold text-gray-600">Status</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student) => (
              <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="p-4 text-gray-600 font-mono">{student.npm}</td>
                <td className="p-4 font-medium text-gray-900">{student.name}</td>
                <td className="p-4 text-gray-600">{student.prodi}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${student.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-[#53A6C4] hover:underline font-medium text-sm">Lihat KHS</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
