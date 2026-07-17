import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#53A6C4] mb-2">SIKA UNINDRA</h1>
          <p className="text-gray-500 text-sm">Peduli, Mandiri, Kreatif, Adaptif</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email / NPM</label>
            <input 
              type="email" 
              placeholder="Masukkan email Anda" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#53A6C4] focus:border-[#53A6C4] outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#53A6C4] focus:border-[#53A6C4] outline-none transition-all"
            />
          </div>
          <Link href="/dashboard">
            <button 
              type="button" 
              className="w-full py-2.5 bg-[#53A6C4] text-white font-semibold rounded-lg hover:bg-[#428ba6] transition-colors mt-4"
            >
              Sign In (Mock)
            </button>
          </Link>
        </form>
        
        <div className="text-center text-xs text-gray-400 mt-6">
          &copy; 2026 Universitas Indraprasta PGRI
        </div>
      </div>
    </div>
  );
}
