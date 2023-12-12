import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import BootstrapClient from '@/components/BootstrapClient.js';
import { FamiliarProvider } from '@/context/FamiliarContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='colorBody'>
        <FamiliarProvider>
          {children}
          <BootstrapClient />
        </FamiliarProvider>
      </body>
    </html>
  )
}
