import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { emailService } from '@/services/email/emailjs.service'

// Initialize EmailJS service
try {
  emailService.initialize();
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

createRoot(document.getElementById("root")!).render(<App />);
