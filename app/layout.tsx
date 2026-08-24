import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Index — Prototype',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full overflow-hidden overscroll-none">
        <div className="shell h-full">
          {children}
        </div>
      </body>
    </html>
  );
}