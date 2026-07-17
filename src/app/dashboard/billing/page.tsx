import React from "react";

export default function BillingPage() {
  const mockBills = [
    { id: "INV-2026-001", student: "Budi Santoso", description: "SPP Semester Ganjil 2026", amount: 1500000, status: "Lunas" },
    { id: "INV-2026-002", student: "Siti Aminah", description: "Biaya SKS Semester Ganjil", amount: 750000, status: "Belum Bayar" },
    { id: "INV-2026-003", student: "Andi Saputra", description: "Uang Gedung / Dana Pembangunan", amount: 3000000, status: "Lunas" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Manajemen Keuangan & SPP</h2>
          <p className="text-sm text-gray-500 mt-1">Sistem Administrasi Universitas Indraprasta</p>
        </div>
        <button className="px-4 py-2 bg-[#53A6C4] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
          Buat Tagihan Baru
        </button>
      </div>
      
      <div className="overflow-x-auto p-6">
        <div className="grid grid-cols-1 gap-4">
          {mockBills.map((bill) => (
            <div key={bill.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-[#53A6C4] transition-colors">
              <div>
                <h3 className="font-bold text-gray-900">{bill.description}</h3>
                <p className="text-sm text-gray-500">{bill.student} • {bill.id}</p>
              </div>
              <div className="flex items-center space-x-6">
                <span className="font-mono font-medium text-lg">Rp {bill.amount.toLocaleString('id-ID')}</span>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${bill.status === 'Lunas' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {bill.status}
                </span>
                <button className="text-gray-400 hover:text-[#53A6C4] px-2">•••</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
