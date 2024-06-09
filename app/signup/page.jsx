'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '../../(firebasethings)/firebase'; // Adjust the import based on your file structure
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Ensure the user is authenticated
      if (user) {
        await addDoc(collection(db, "userinformations"), {
          uid: user.uid,
          email: user.email,
          username: username,
          company: company
        });

        router.push('/');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="mb-6 text-xl font-bold text-center text-gray-900 dark:text-white">Create Account</h2>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Company Name</label>
            <input
              type="text"
              id="company"
              className="block w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={company}
              placeholder='Company Name'
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Username</label>
            <input
              type="text"
              id="username"
              className="block w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Password</label>
            <input
              type="password"
              id="password"
              className="block w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.5rem 1rem',
              fontWeight: '600',
              color: 'white',
              backgroundColor: '#2563EB',
              borderRadius: '0.375rem',
              transition: 'background-color 0.2s ease-in-out',
              outline: 'none',
              boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.5)',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1D4ED8')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2563EB')}
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account? <a href="/signin" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
