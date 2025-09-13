import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    gdprConsent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, just show success message
    // In production, this would integrate with a form handler like Netlify Forms or EmailJS
    console.log('Form submission:', formData);
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        gdprConsent: false,
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-[var(--shadow-card)] text-center animate-scale-in">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-montserrat font-semibold text-2xl text-navy-dark mb-2">
          Dziękujemy za zapytanie!
        </h3>
        <p className="text-steel-gray">
          Skontaktujemy się z Państwem w ciągu 24 godzin.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-[var(--shadow-card)] space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-steel-gray mb-2">
            Imię i nazwisko *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="Jan Kowalski"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-steel-gray mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="jan.kowalski@firma.pl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-steel-gray mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-input"
            placeholder="+48 123 456 789"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-steel-gray mb-2">
            Firma
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Nazwa firmy"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-steel-gray mb-2">
          Wiadomość *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="form-textarea"
          placeholder="Opisz szczegóły swojego projektu..."
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="gdprConsent"
          name="gdprConsent"
          checked={formData.gdprConsent}
          onChange={handleInputChange}
          required
          className="mt-1 w-4 h-4 text-accent border-2 border-border rounded focus:ring-accent focus:ring-2"
        />
        <label htmlFor="gdprConsent" className="text-sm text-steel-gray">
          Wyrażam zgodę na kontakt w sprawie zapytania oraz przetwarzanie moich danych osobowych zgodnie z RODO. *
        </label>
      </div>

      <button
        type="submit"
        className="w-full btn-hero flex items-center justify-center space-x-2"
      >
        <Send size={20} />
        <span>Wyślij zapytanie</span>
      </button>

      <p className="text-xs text-center text-steel-gray/70 mt-4">
        * Pola wymagane
      </p>
      
      {/* Note: For production use, add this attribute to form element for Netlify Forms: */}
      {/* <form netlify netlify-honeypot="bot-field" onSubmit={handleSubmit}> */}
      {/* Add hidden input: <input type="hidden" name="form-name" value="contact" /> */}
    </form>
  );
};