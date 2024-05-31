"use client";
import { useQuery } from "convex/react";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import Battlefield from '@/components/battlefield/Battlefield';
import { api } from "../../convex/_generated/api";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tasks = useQuery(api.tasks.get);
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            {children}
            
          </main>
          <div className="w-screen h-screen">
            
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
            <Battlefield />
          </div>
        </body>
       </html>
      
    </ClerkProvider>
    
  )
}