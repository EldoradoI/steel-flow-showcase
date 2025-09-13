import { useState, useEffect } from 'react';
import { 
  Settings, 
  Shield, 
  Award, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Wrench,
  Zap,
  Gauge,
  FileCheck,
  Cog,
  Users,
  Clock,
  Target
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Gallery } from '@/components/Gallery';
import { ContactForm } from '@/components/ContactForm';

// Import hero image
import heroShipyard from '@/assets/hero-shipyard.jpg';

const Index = () => {
  const [currentYear] = useState(new Date().getFullYear());

  // Animation on scroll
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="start" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroShipyard})` }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative z-10 container mx-auto text-center text-white px-4">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-slide-up text-balance">
            Profesjonalny montaż instalacji rurowych na statkach
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto opacity-90 animate-fade-in text-balance">
            Prefabrykacja, spawanie i montaż — od pomiarów po testy szczelności. 
            Pracujemy w stoczni i na jednostkach pływających.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="btn-hero w-72 whitespace-nowrap flex items-center justify-center"
            >
              Skontaktuj się z nami
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('realizacje')}
              className="btn-hero w-72 whitespace-nowrap flex items-center justify-center"
            >
              Zobacz realizacje
            </button>
          </div>
        </div>
      </section>

      {/* O nas Section */}
      <section id="o-nas" className="section section-light">
        <div className="container mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-navy-dark mb-8">
              O naszej firmie
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-steel-gray leading-relaxed mb-12">
                Jesteśmy specjalistyczną firmą z wieloletnim doświadczeniem w branży stoczniowej. 
                Oferujemy kompleksowe usługi montażu instalacji rurowych i konstrukcji stalowych 
                na jednostkach pływających. Nasz zespół składa się z wykwalifikowanych spawaczy 
                i monterów posiadających certyfikaty TIG/MAG oraz uprawnienia do pracy w przemyśle 
                morskim. Realizujemy projekty od fazy pomiarów i prefabrykacji, przez montaż, 
                aż po testy szczelności i dokumentację powykonawczą.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="card-feature text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="font-montserrat font-semibold text-xl text-navy-dark mb-4">
                Doświadczenie stoczniowe
              </h3>
              <p className="text-steel-gray">
                Ponad 15 lat pracy w przemyśle stoczniowym i znajomość specyfiki 
                jednostek pływających różnego typu.
              </p>
            </div>

            <div className="card-feature text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="font-montserrat font-semibold text-xl text-navy-dark mb-4">
                Dokładność i terminy
              </h3>
              <p className="text-steel-gray">
                Precyzyjne wykonanie zgodnie z dokumentacją techniczną i dotrzymanie 
                uzgodnionych terminów realizacji projektów.
              </p>
            </div>

            <div className="card-feature text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="font-montserrat font-semibold text-xl text-navy-dark mb-4">
                Certyfikowany zespół
              </h3>
              <p className="text-steel-gray">
                Spawacze z uprawnieniami TIG/MAG oraz certyfikatami do spawania 
                stali czarnej i kwasoodpornej.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi Section */}
      <section id="uslugi" className="section section-navy">
        <div className="container mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-white mb-8">
              Nasze usługi
            </h2>
            <p className="text-lg text-center text-white/80 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług związanych z montażem instalacji rurowych 
              i konstrukcji stalowych na statkach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            <div className="card-service">
              <Settings className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                Prefabrykacja elementów stalowych
              </h3>
              <p className="text-steel-gray text-sm">
                Produkcja elementów stalowych zgodnie z dokumentacją techniczną 
                w warunkach warsztatowych.
              </p>
            </div>

            <div className="card-service">
              <Wrench className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                Montaż rurociągów i armatury
              </h3>
              <p className="text-steel-gray text-sm">
                Profesjonalny montaż systemów rurowych z armaturą przemysłową 
                na jednostkach pływających.
              </p>
            </div>

            <div className="card-service">
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                Spawanie TIG/MAG
              </h3>
              <p className="text-steel-gray text-sm">
                Spawanie stali czarnej i kwasoodpornej z zastosowaniem technologii 
                TIG i MAG przez certyfikowanych spawaczy.
              </p>
            </div>

            <div className="card-service">
              <Gauge className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                Pomiary i próby ciśnieniowe
              </h3>
              <p className="text-steel-gray text-sm">
                Dokładne pomiary instalacji oraz profesjonalne testy szczelności 
                i wytrzymałości ciśnieniowej.
              </p>
            </div>

            <div className="card-service">
              <Cog className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                Serwis i konserwacja
              </h3>
              <p className="text-steel-gray text-sm">
                Regularne przeglądy, konserwacja i naprawy systemów rurowych 
                oraz konstrukcji stalowych.
              </p>
            </div>

            <div className="card-service">
              <FileCheck className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                Dokumentacja powykonawcza
              </h3>
              <p className="text-steel-gray text-sm">
                Kompletna dokumentacja techniczna wykonanych prac zgodnie 
                z wymogami klasyfikacyjnymi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section id="proces" className="section section-light">
        <div className="container mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-navy-dark mb-8">
              Proces realizacji
            </h2>
            <p className="text-lg text-center text-steel-gray max-w-3xl mx-auto">
              Każdy projekt realizujemy według sprawdzonego procesu zapewniającego 
              najwyższą jakość i terminowość wykonania.
            </p>
          </div>

          <div className="relative animate-on-scroll">
            {/* Process line - hidden on mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-accent/20 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <Target className="w-8 h-8 text-navy-dark" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                  Audyt i pomiary
                </h3>
                <p className="text-steel-gray text-sm">
                  Szczegółowe obmiary i analiza warunków technicznych
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <Settings className="w-8 h-8 text-navy-dark" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                  Prefabrykacja
                </h3>
                <p className="text-steel-gray text-sm">
                  Produkcja elementów w warunkach warsztatowych
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <Wrench className="w-8 h-8 text-navy-dark" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                  Montaż
                </h3>
                <p className="text-steel-gray text-sm">
                  Instalacja systemów na jednostce pływającej
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <Gauge className="w-8 h-8 text-navy-dark" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                  Testy i odbiory
                </h3>
                <p className="text-steel-gray text-sm">
                  Próby ciśnieniowe i odbiory techniczne
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <FileCheck className="w-8 h-8 text-navy-dark" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-navy-dark mb-3">
                  Serwis
                </h3>
                <p className="text-steel-gray text-sm">
                  Dokumentacja i wsparcie posprzedażowe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realizacje Section */}
      <section id="realizacje" className="section section-navy">
        <div className="container mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-white mb-8">
              Nasze realizacje
            </h2>
            <p className="text-lg text-center text-white/80 max-w-3xl mx-auto">
              Galeria wybranych projektów montażu instalacji rurowych i konstrukcji stalowych 
              zrealizowanych na różnych typach jednostek pływających.
            </p>
          </div>

          <div className="animate-on-scroll">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Bezpieczeństwo Section */}
      <section id="bezpieczenstwo" className="section section-light">
        <div className="container mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-navy-dark mb-8">
              Bezpieczeństwo i jakość
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-on-scroll">
            <div>
              <h3 className="font-montserrat font-semibold text-2xl text-navy-dark mb-6">
                Procedury BHP i standardy jakości
              </h3>
              <div className="space-y-6 text-steel-gray">
                <p>
                  Nasza firma przykłada najwyższą wagę do bezpieczeństwa pracy i jakości wykonywanych usług. 
                  Wszystkie prace realizujemy zgodnie z obowiązującymi normami ISO/EN oraz procedurami BHP 
                  obowiązującymi w przemyśle stoczniowym.
                </p>
                <p>
                  Zespół spawaczy posiada aktualne uprawnienia do spawania metodami TIG i MAG, 
                  potwierdzone certyfikatami zgodnie z normami EN ISO 9606-1. Regularnie 
                  przeprowadzamy szkolenia z zakresu bezpieczeństwa i nowych technologii spawalniczych.
                </p>
                <p>
                  Każdy projekt realizowany jest pod nadzorem uprawnionych inspektorów spawalniczych, 
                  co gwarantuje najwyższą jakość połączeń spawanych i zgodność z wymaganiami 
                  towarzystw klasyfikacyjnych.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-2xl text-navy-dark mb-6">
                Certyfikaty i uprawnienia
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  'Certyfikaty spawalnicze EN ISO 9606-1 (TIG/MAG)',
                  'Uprawnienia do pracy w przestrzeniach zamkniętych',
                  'Certyfikaty NDT (badania nieniszczące)',
                  'Szkolenia BHP dla przemysłu morskiego',
                  'Procedury WPS/PQR zatwierdzone przez towarzystwa klasyfikacyjne',
                  'Dokumentacja ISO 9001:2015',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-steel-gray">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-[var(--shadow-card)]">
                <h4 className="font-montserrat font-semibold text-lg text-navy-dark mb-4">
                  Współpraca z towarzystwami klasyfikacyjnymi
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-light-bg p-4 rounded-lg">
                    <div className="w-16 h-12 bg-steel-gray/10 rounded mx-auto mb-2 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-steel-gray" />
                    </div>
                    <span className="text-sm text-steel-gray">DNV GL</span>
                  </div>
                  <div className="bg-light-bg p-4 rounded-lg">
                    <div className="w-16 h-12 bg-steel-gray/10 rounded mx-auto mb-2 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-steel-gray" />
                    </div>
                    <span className="text-sm text-steel-gray">Lloyd's Register</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="section section-navy">
        <div className="container mx-auto">
          <div className="animate-on-scroll mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-white mb-8">
              Kontakt
            </h2>
            <p className="text-lg text-center text-white/80 max-w-3xl mx-auto">
              Skontaktuj się z nami w sprawie wyceny lub szczegółów realizacji projektu. 
              Odpowiemy w ciągu 24 godzin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-on-scroll">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-montserrat font-semibold text-2xl text-white mb-6">
                  Dane kontaktowe
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-navy-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Adres siedziby</h4>
                      <p className="text-white/80">
                        ul. Połęże 12a<br />
                        80-720 Gdańsk<br />
                        Polska
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-navy-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Telefon</h4>
                      <p className="text-white/80">+48 500 701 342</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-navy-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">E-mail</h4>
                      <p className="text-white/80">steelwelding@interia.pl</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-montserrat font-semibold text-lg text-white mb-3">
                  Dane firmowe
                </h4>
                <div className="text-white/80 text-sm space-y-1">
                  <p>Steel Welding Sp. z o.o.</p>
                  <p>NIP: 583-324-34-27</p>
                  <p>KRS: 0000674589</p>
                </div>
              </div>

              <div className="bg-accent/20 p-4 rounded-lg border border-accent/30">
                <p className="text-accent text-sm font-medium">
                  ⚠️ To jest wersja demonstracyjna (projekt pokazowy)
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark border-t border-steel-gray/20 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Steel Welding. Wszelkie prawa zastrzeżone.
            </div>
            <div className="text-white/60 text-sm">
              Projekt wersji demonstracyjnej przygotowany przez <span className="text-accent">Eldorado Design</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
