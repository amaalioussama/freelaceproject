'use client'; // Ensure this is a client component

import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../(firebasethings)/firebase'; // Adjust the import based on your file structure
import { Button } from '@/components/ui/button';
import withAuth from '../(firebasethings)/withAuth';

const User = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/signin'); 
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <div className="flex items-center gap-4 text-white  rounded-3xl" >
      
        <Button type="submit" variant="outline" onClick={handleLogout}>Sign Out</Button>
 
    </div>
  );
};

export default withAuth(User);
