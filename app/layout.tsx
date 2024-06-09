import './globals.css';

import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import User from './user';
import { NavItem } from './nav-item';



export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
   <>
   <html>
    <body>
   {children}
   </body>
   </html>
   
   </>
  );
}
