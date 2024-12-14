'use client';

import React, { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]); // Lagret brukerliste
  const [formData, setFormData] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    role: 'user',
  }); // Skjema for opprettelse og redigering

  // Håndter innsendelse av skjema for opprettelse/redigering
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.id) {
      // Oppdater eksisterende bruker
      setUsers((prev) =>
        prev.map((user) => (user.id === formData.id ? formData : user))
      );
    } else {
      // Opprett ny bruker
      setUsers((prev) => [
        ...prev,
        { ...formData, id: Date.now().toString() }, // Generer unik ID
      ]);
    }

    // Tilbakestill skjema
    setFormData({ id: '', name: '', email: '', password: '', role: 'user' });
  };

  // Håndter sletting av en bruker
  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  // Håndter redigering av en bruker
  const handleEdit = (user: User) => {
    setFormData(user); // Fyll skjemaet med brukerens data
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Admin Dashboard
      </h1>

      {/* Skjema for opprettelse/redigering */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Legg til / Rediger Bruker</h2>
        <input
          type="text"
          placeholder="Navn"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border p-2 rounded mb-2"
          required
        />
        <input
          type="email"
          placeholder="E-post"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border p-2 rounded mb-2"
          required
        />
        <input
          type="password"
          placeholder="Passord"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full border p-2 rounded mb-2"
          required
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value as 'user' | 'admin' })}
          className="w-full border p-2 rounded mb-2"
        >
          <option value="user">Bruker</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          {formData.id ? 'Oppdater Bruker' : 'Opprett Bruker'}
        </button>
      </form>

      {/* Liste over brukere */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Brukerliste</h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="flex items-center justify-between bg-gray-100 p-4 rounded shadow">
              <div>
                <p>
                  <strong>Navn:</strong> {user.name}
                </p>
                <p>
                  <strong>E-post:</strong> {user.email}
                </p>
                <p>
                  <strong>Rolle:</strong> {user.role}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Rediger
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Slett
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
