export interface EmailMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  error?: string;
}

export interface EmailService {
  sendEmail: (message: EmailMessage) => Promise<EmailResponse>;
}