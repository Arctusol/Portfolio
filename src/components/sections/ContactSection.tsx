import SectionLayout from '../common/SectionLayout';
import ContactForm from './contact/ContactForm';
import SocialContactInfo from './contact/SocialContactInfo';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout
      id="contact"
      title={t('contact.title')}
      description={t('contact.description')}
      className="max-w-[1920px]"
    >
      <div className="max-w-4xl mx-auto px-4 lg:px-8 xl:px-12">
        <SocialContactInfo />
        <ContactForm />
      </div>
    </SectionLayout>
  );
};

export default ContactSection;