import emailjs from '@emailjs/browser';
import { EmailMessage, EmailResponse, EmailService } from './types';

export class EmailJSService implements EmailService {
  private static instance: EmailJSService;
  private initialized = false;

  private constructor() {}

  public static getInstance(): EmailJSService {
    if (!EmailJSService.instance) {
      EmailJSService.instance = new EmailJSService();
    }
    return EmailJSService.instance;
  }

  public initialize() {
    if (!this.initialized) {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!publicKey) {
        throw new Error('EmailJS public key is not configured');
      }
      emailjs.init(publicKey);
      this.initialized = true;
    }
  }

  public async sendEmail(message: EmailMessage): Promise<EmailResponse> {
    try {
      if (!this.initialized) {
        this.initialize();
      }

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: message.name,
          email: message.email,
          subject: message.subject,
          message: message.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      return {
        success: response.status === 200,
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi du message',
      };
    }
  }
}

// Export singleton instance
export const emailService = EmailJSService.getInstance();