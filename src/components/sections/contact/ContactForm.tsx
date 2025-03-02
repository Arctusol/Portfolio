import { MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast } from "@/hooks/use-toast";
import { EmailMessage } from '@/services/email/types';
import { emailService } from '@/services/email/emailjs.service';
import { useServices } from '@/data/services-data';
import { CONTACT_INFO } from '@/config/contact';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const { t } = useTranslation();
  const { services } = useServices();
  const { toast } = useToast();
  const [formData, setFormData] = useState<EmailMessage>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailService.sendEmail(formData);
      
      if (response.success) {
        toast({
          title: t('contact.form.success.title'),
          description: t('contact.form.success.message'),
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      toast({
        title: t('contact.form.error.title'),
        description: error instanceof Error ? error.message : t('contact.form.error.message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div>
          <label htmlFor="name" className="block text-base lg:text-lg font-medium mb-3">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={CONTACT_INFO.cto.name}
            className="w-full px-5 py-3 text-base lg:text-lg rounded-lg bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-base lg:text-lg font-medium mb-3">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={CONTACT_INFO.cto.email}
            className="w-full px-5 py-3 text-base lg:text-lg rounded-lg bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-base lg:text-lg font-medium mb-3">
          {t('contact.form.subject')}
        </label>
        <Select value={formData.subject} onValueChange={handleSubjectChange}>
          <SelectTrigger className="w-full px-5 py-3 text-base lg:text-lg rounded-lg bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors">
            <SelectValue placeholder={t('contact.form.subject_placeholder')} />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border border-white/10">
            {services.map((service, index) => (
              <SelectItem 
                key={index} 
                value={service.title}
                className="hover:bg-white/5 focus:bg-white/5"
              >
                {service.title}
              </SelectItem>
            ))}
            <SelectItem 
              value="other"
              className="hover:bg-white/5 focus:bg-white/5"
            >
              {t('contact.form.other_subject')}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-base lg:text-lg font-medium mb-3">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder={t('contact.form.message_placeholder')}
          className="w-full px-5 py-3 text-base lg:text-lg rounded-lg bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 text-base lg:text-lg rounded-lg bg-neon text-black hover:bg-neon-muted transition-colors inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MessageSquare className="h-5 w-5 lg:h-6 lg:w-6" />
          {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;