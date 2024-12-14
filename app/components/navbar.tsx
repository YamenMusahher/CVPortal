'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<{ email: string; role: string } | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch('/api/auth/session', {
          method: 'GET',
          credentials: 'include',
        });
  
        if (!response.ok) {
          throw new Error('Not authenticated');
        }
  
        const user = await response.json();
        console.log('Authenticated user:', user); // Debug logged-in user
        setCurrentUser(user);
      } catch (error) {
        console.error('Failed to fetch session:', error);
        setCurrentUser(null);
      }
    };
  
    fetchSession();
  }, []);
  
  console.log('Current User:', currentUser); // Debug current user state
  

  return (
    <nav className="bg-blue-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-blue-300">
          Dynamisk CV Portal
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link href="/" className="hover:text-blue-300">
            Hjem
          </Link>
          {!currentUser && (
            <Link href="/auth" className="hover:text-blue-300">
              Logg Inn
            </Link>
          )}
          {currentUser && (
            <span className="text-sm text-gray-200">
              {`Logget inn som: ${currentUser.email}`}
            </span>
          )}
          <Link href="/dashboard/admin" className="hover:text-blue-300">
            Admin Dashboard
          </Link>
          <Link href="/dashboard/user" className="hover:text-blue-300">
            Bruker Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
