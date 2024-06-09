'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from './firebase'; // Adjust the import based on your file structure
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth'; // Import User type

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null); // Update the type of currentUser state

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthenticated(true);
          setCurrentUser(user); // Now it accepts a User object
        } else {
          router.replace('/signin');
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!authenticated) {
      return null;
    }

    return <WrappedComponent {...props} currentUser={currentUser} />;
  };
};

export default withAuth;