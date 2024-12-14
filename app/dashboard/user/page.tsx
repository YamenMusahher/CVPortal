'use client';

import React, { useState } from 'react';

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: 'Ola Nordmann',
    email: 'ola@example.com',
    cv: 'Ingen CV er lastet opp',
  });

  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newCv, setNewCv] = useState('');

  const handleUpdate = () => {
    setUser({ name: newName, email: newEmail, cv: newCv || user.cv });
    alert('Informasjonen din er oppdatert!');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Bruker Dashboard</h1>

      {/* Current Info */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Din Informasjon</h2>
        <p><strong>Navn:</strong> {user.name}</p>
        <p><strong>E-post:</strong> {user.email}</p>
        <p><strong>CV:</strong> {user.cv}</p>
      </div>

      {/* Update Form */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Oppdater Informasjon</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Navn"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="E-post"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="CV-tekst (valgfritt)"
            value={newCv}
            onChange={(e) => setNewCv(e.target.value)}
            className="w-full p-3 border rounded"
          ></textarea>
          <button
            onClick={handleUpdate}
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-400"
          >
            Oppdater Informasjon
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
