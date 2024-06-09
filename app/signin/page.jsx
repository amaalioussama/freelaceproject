'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../(firebasethings)/firebase'; // Adjust the import based on your file structure
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [resetEmail, setResetEmail] = useState('');
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/Market-Overview'); 
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setMessage('Password reset email sent!');
    } catch (err) {
      setError(message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">Sign In</h2>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              placeholder='Email Address'
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
            Sign In
          </button>
        </form>
        <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          <button 
            onClick={() => setMessage('Enter your email to reset your password')} 
            className="text-blue-500 hover:underline"
          >
            Forgot your password?
          </button>
        </div>
        {message && (
          <form onSubmit={handlePasswordReset} className="mt-4">
            <input
              type="email"
              id="reset-email"
              className="block w-full px-4 py-2 mb-4 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={resetEmail}
              placeholder='Enter your email'
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
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
              Send Reset Email
            </button>
          </form>
        )}
        {message && <p className="mt-2 text-center text-green-500">{message}</p>}
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
