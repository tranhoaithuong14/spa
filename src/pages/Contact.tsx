import { type FC, type ChangeEvent, type FormEvent, useState } from 'react';
import { sanitizeInput } from '@utils/helpers';
import styles from './Contact.module.less';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage(
        'Thank you for your message! We will get back to you soon.'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitMessage(
        'Sorry, there was an error sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>

        <div className={styles.content}>
          <div className={styles.info}>
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detail}>
                <h3>Email</h3>
                <p>hello@reactspa.com</p>
              </div>
              <div className={styles.detail}>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className={styles.detail}>
                <h3>Address</h3>
                <p>
                  123 Tech Street
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor='name' className={styles.label}>
                Name *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
                required
                aria-describedby='name-error'
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='email' className={styles.label}>
                Email *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
                aria-describedby='email-error'
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='message' className={styles.label}>
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={5}
                required
                aria-describedby='message-error'
                disabled={isSubmitting}
              />
            </div>

            <button
              type='submit'
              className={styles.submitButton}
              disabled={isSubmitting}
              aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <div
                className={`${styles.message} ${
                  submitMessage.includes('error')
                    ? styles.error
                    : styles.success
                }`}
                role='alert'
                aria-live='polite'
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
