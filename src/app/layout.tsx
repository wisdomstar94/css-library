import './globals.css';
import type { Metadata } from 'next';
import { RootLayoutClient } from './layout.client';

export const metadata: Metadata = {
  title: 'CSS Library',
  description: 'CSS Library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <RootLayoutClient />
        { children }
      </body>
    </html>
  );
}
