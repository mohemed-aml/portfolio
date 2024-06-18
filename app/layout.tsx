import Navbar from './components/navbar';
import './styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className="min-h-screen bg-gray-100 p-5">
        <Navbar />
        <main className="mt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
