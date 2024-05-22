import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import Battlefield from '@/components/battlefield/Battlefield';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
            <Battlefield />
          </div>
        </body>
       </html>
      
    </ClerkProvider>
    
  )
}