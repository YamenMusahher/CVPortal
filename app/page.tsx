'use client';

import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-6 px-6">
          <h1 className="text-5xl font-bold">
            Velkommen til <span className="text-blue-300">Dynamisk CV Portal</span>
          </h1>
          <p className="text-lg font-light max-w-2xl mx-auto">
            Opprett, administrer og del din profesjonelle CV på en moderne plattform.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center mt-8">
            <Link
              href="/auth"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-lg font-semibold rounded-lg shadow-lg transition-all"
            >
              Logg Inn
            </Link>
            <Link
              href="/dashboard/admin"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-lg font-semibold rounded-lg shadow-lg transition-all"
            >
              Admin Dashboard
            </Link>
            <Link
              href="/dashboard/user"
              className="px-8 py-3 bg-blue-700 hover:bg-blue-600 text-lg font-semibold rounded-lg shadow-lg transition-all"
            >
              Bruker Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white text-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Hvorfor Velge Oss?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-4">Brukervennlig</h3>
              <p className="text-gray-600">
                Våre intuitive verktøy gjør det enkelt å bygge CV-er uten stress.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-4">Moderne Design</h3>
              <p className="text-gray-600">
                Velg mellom mange profesjonelle maler og tilpass etter dine behov.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sikkerhet Først</h3>
              <p className="text-gray-600">
                All informasjonen din lagres trygt med de nyeste sikkerhetsstandardene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100 text-blue-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/nettside1.jpg" // Correct path to public folder
              alt="Om oss"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Om Dynamisk CV Portal</h2>
            <p className="text-gray-700 mb-6">
              Dynamisk CV Portal hjelper deg med å opprette, tilpasse og dele din CV med arbeidsgivere.
              Vi tilbyr et brukervennlig og profesjonelt system som gjør karrierebygging enklere.
            </p>
            <Link
              href="/auth"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-lg font-semibold rounded-lg transition-all"
            >
              Kom I Gang Nå
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-blue-900 text-gray-300 text-center">
        &copy; {new Date().getFullYear()} Dynamisk CV Portal. Alle rettigheter reservert.
      </footer>
    </div>
  );
};

export default LandingPage;
