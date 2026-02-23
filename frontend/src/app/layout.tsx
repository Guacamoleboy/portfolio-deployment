import '@styles/styles.css';
import '@styles/animation.css';
import { metadata } from '@/config/metadata';
import { ReactNode } from 'react';
import Preloader from '@components/util/Preloader'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <div className="site-wrapper">

            {/* Preloader */}
            <Preloader />

            {/* Page Specific */}
            {children}

        </div>
      </body>
    </html>
  );
}