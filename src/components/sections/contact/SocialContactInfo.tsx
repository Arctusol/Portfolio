import { Phone } from 'lucide-react';
import SocialLinks from '../../common/SocialLinks';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const SocialContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-12 space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Social Links */}
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center gap-4">
            <SocialLinks variant="header" showPreviews={true} />
          </div>
          <div className="space-y-5 text-center">
            <p className="text-sm text-white/80">{t('contact.social.linkedin')}</p>
            <p className="text-sm text-white/80">{t('contact.social.github')}</p>
          </div>
        </div>

        {/* Phone Consultation */}
        <div className="md:col-span-2 flex flex-col justify-between p-6 rounded-lg bg-white/5 border border-white/10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {t('contact.social.consultation.title')}
            </h3>
            <p className="text-white/80">
              {t('contact.social.consultation.description')}
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 w-full"
            onClick={() => window.open('https://calendly.com/anto-bourdelle/30min', '_blank')}
          >
            <Phone className="mr-2 h-4 w-4" />
            {t('contact.social.consultation.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialContactInfo;