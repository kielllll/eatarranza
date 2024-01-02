import '@/styles/globals.css';

import Providers from '@/components/providers/Providers';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
