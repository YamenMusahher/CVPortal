import './globals.css';
import Navbar from './components/Navbar';
import { AuthProvider } from '../app/context/AuthContext';

export const metadata = {
  title: 'Dynamisk CV Portal',
  description: 'Administrer og opprett profesjonelle CV-er enkelt og sikkert.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="bg-gray-50">
      <AuthProvider>
        <Navbar />
        <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
