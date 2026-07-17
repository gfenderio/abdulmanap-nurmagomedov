import React from "react";
import { getAllBills } from "@/data/bill";

export default async function BillingPage() {
  const bills = await getAllBills() || [];

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
          {bills.length === 0 ? (
            <div className="text-center p-8 text-gray-500 border border-dashed rounded-lg">Belum ada data tagihan.</div>
          ) : bills.map((bill) => (
            <div key={bill.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-[#53A6C4] transition-colors">
              <div>
                <h3 className="font-bold text-gray-900">{bill.description}</h3>
                <p className="text-sm text-gray-500">{bill.student.user.name} • Tenggat: {new Date(bill.dueDate).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center space-x-6">
                <span className="font-mono font-medium text-lg">Rp {bill.amount.toLocaleString('id-ID')}</span>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${bill.status === 'PAID' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {bill.status === 'PAID' ? 'Lunas' : 'Belum Lunas'}
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
