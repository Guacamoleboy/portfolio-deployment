// Not optional. Must be used.
export interface Metadata {
  title: string;
  description: string;
  icons: {
    icon: string;
    shortcut: string;
    apple: string;
  };
}

// Meta Data export
export const metadata: Metadata = {
  title: 'Guacamoleboy - Portfolio',
  description: 'Guacamoleboys portfolio, evner, skills & tilsvarende.',
  icons: {
      icon: '/images/logo/logo.png',           
      shortcut: '/images/logo/logo-16.png', 
      apple: '/images/logo/logo.png', 
    },
};