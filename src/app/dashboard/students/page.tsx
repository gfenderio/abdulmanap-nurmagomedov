import React from "react";
import { getStudents } from "@/data/student";

export default async function StudentsPage() {
  const students = await getStudents() || [];

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
              <th className="p-4 font-semibold text-gray-600">NPM/NISN</th>
              <th className="p-4 font-semibold text-gray-600">Nama Lengkap</th>
              <th className="p-4 font-semibold text-gray-600">Email</th>
              <th className="p-4 font-semibold text-gray-600">Kelas/Prodi</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
               <tr><td colSpan={5} className="p-4 text-center text-gray-500">Belum ada data mahasiswa.</td></tr>
            ) : students.map((student) => (
              <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="p-4 text-gray-600 font-mono">{student.studentProfile?.nisn || "-"}</td>
                <td className="p-4 font-medium text-gray-900">{student.name}</td>
                <td className="p-4 text-gray-600">{student.email}</td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    {student.studentProfile?.grade || "-"}
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
