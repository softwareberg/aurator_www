import $ from 'jquery';
import { setFotoPosition } from './layout';

const arrLang = {
  pl: {
    'menu-repair': 'Naprawa i regeneracja',
    'menu-production': 'Produkcja',
    'menu-about': 'O firmie',
    'menu-contact': 'Kontakt',
    'banner-title': 'Naprawa\nmaszyn trakcyjnych',
    'banner-btn1': 'Sprawdż nasza ofertę',
    'banner-btn2': 'Umów sie na rozmowę',
    'banner-btn3': 'Zobacz film',
    'repair-title': 'Naprawa\ni regeneracja',
    'repair-primary-h1': 'Elektryczne maszyny wirujące <br class="d-none d-md-inline">prądu stałego oraz zmiennego',
    'repair-primary-p1': 'Realizujemy naprawy maszyn elektrycznych ze spalinowych oraz elektrycznych pojazdów trakcyjnych.',
    'repair-primary-p2': 'Wykonujemy naprawy zarówno silników trakcyjnych, jak i maszyn pomocniczych do większości typów lokomotyw eksploatowanych w Polsce, jak i poza granicami naszego kraju.',
    'repair-primary-li1': 'Wykonanie lub regeneracja metalowych elementów maszyn (wały wirników, tarcze łożyskowe, pokrywy łożyskowe itp.)',
    'repair-primary-li2': 'Wyważanie dynamiczne elementów wirujących',
    'repair-primary-li3': 'Wymiana łożysk',
    'repair-primary-li4': 'Przezwojenia wirników (klasa H i wyższe)',
    'repair-primary-li5': 'Produkcja cewek wirnikowych oraz stojanowych',
    'repair-primary-li6': 'Wymiana komutatorów',
    'repair-primary-li7': 'Przezwojenia stojanów (klasa H i wyższe)',
    'repair-primary-li8': 'Nasycanie próżniowo-ciśnieniowe',
    'repair-primary-li9': 'Automatyczne spawanie komutatorów metodą TIG',
    'repair-primary-li10': 'Automatyczna obróbka komutatorów wirników',
    'repair-primary-li11': 'Wytaczanie gniazd pod panewki osiowe silników trakcyjnych',
    'repair-primary-li12': 'Dostawa części zamiennych do maszyn elektrycznych',
    'repair-primary-li13': 'Próby obciążeniowe na stacji prób wraz z wykonaniem charakterystyki obrotów silników',
    'repair-secondary-h1': 'Pantografy',
    'repair-secondary-p1': 'Realizujemy naprawy odbieraków prądu do elektrycznych pojazdów trakcyjnych do wszystkich eksploatowanych pojazdów trakcyjnych w Polsce i za granicą.',
    'production-title': 'Produkcja',
    'production-primary-h1': 'Cewki stojanowe i wirnikowe do maszyn <br class="d-none d-lg-inline">prądu stałego oraz przemiennego',
    'production-primary-p1': 'Nasze zaplecze pozwala na uruchomienie produkcji cewek wirnikowych oraz stojanowych dla dowolnego typu maszyn na podstawie dostarczonej przez klienta dokumentacji. Istnieje również możliwość odtworzenia uzwojenia po dostarczeniu uszkodzonego wirnika lub stojana.',
    'production-secondary-h1': 'Metalowe części zamienne do maszyn elektrycznych',
    'production-secondary-p1': 'Zapewniamy podczas naprawy silników wykonanie i wymianę części metalowych (wały wirników, pokrywy, tarcze łożyskowe, labirynty itp.).',
    'production-secondary-p2': 'Mamy również podobnie, jak w przypadku cewek, możliwość uruchomienia produkcji dowolnych metalowych części zamiennych na podstawie dokumentacji, jak również odtworzenia ich z dostarczonych przez klienta części.',
    'about-title': 'O firmie',
    'about-quote': 'Poprzez koncentrację na wybranym segmencie rynku udało nam się wyspecjalizować w naprawach maszyn trakcyjnych',
    'about-author-position': 'Prezes zarządu',
    'know-how-h1': 'Wiedza',
    'know-how-p1': 'Efektywna wiedza o budowie i eksploatacji maszyn elektrycznych jest podstawą działania i rozwoju naszej firmy.',
    'know-how-p2': 'Przez lata pracy oraz dzięki doświadczeniu zgromadzonemu w okresie działania firmy, wypracowaliśmy rozwiązania serwisu maszyn trakcyjnych, które zapewnia skuteczną realizację podstawowych celów technicznych.',
    'experience-h1': 'Doświadczenie',
    'experience-p1': 'Profesjonalizm oraz doskonałe wyniki techniczne napraw maszyn trakcyjnych, które przechodzą oczekiwania naszych klientów, pozwoliły nam na stworzenie listy referencji, z której jesteśmy dumni.',
    'certificates-h1': 'Gwarantowana jakość\nwykonania',
    'certificates-p1': 'Potencjał i doświadczona kadra gwarantują wysoką jakość produktów i usług oferowanych przez firmę. Spółka posiada certyfikat ISO 9001:2009 wydany przez Urząd Dozoru Technicznego (UDT-CERT).',
    'certificates-ul1-p1': 'Nasze świadectwa:',
    'certificates-ul1-li1': 'Uznany wykonawca usługi',
    'certificates-ul1-li2': 'Świadectwo zgodności',
    'certificates-ul2-p1': 'Nasze certyfikaty:',
    'certificates-ul2-li1-sub': 'Urząd Dozoru Technicznego (Udt - Cert)',
    'cta-h1': 'Zapraszamy <br class="d-inline d-xl-none">do współpracy',
    'cta-p1': 'Wybierz jedną z dostępnych opcji kontaktowych lub zadzwoń, umów się na spotkanie i odwiedź nasze biuro w Gliwicach.\nNasz dział handlowy jest do Twojej dyspozycji od poniedziałku do piątku, między 07:00 a 15:00.',
    'cta-btn1': 'Wypełnij formularz kontaktowy',
    'cta-btn-divider': 'lub',
    'cta-btn2': 'Zostaw dane kontaktowe - oddzwonimy!',
    'map-spzoo': 'Sp. z o. o.',
    'map-adres': 'ul. Chorzowska 58, 44-100 Gliwice',
    'map-nip': 'Nip:',
    'map-nip-nr': '6312658988',
    'map-email': 'Adres e-mail:',
    'map-tel': 'Nr telefonu:',
    'map-social': 'Aurator w social media:'
  },
  en: {
    'menu-repair': 'Repair and renovation',
    'menu-production': 'Production',
    'menu-about': 'About us',
    'menu-contact': 'Contact',
    'banner-title': 'Traction unit\nrepairs',
    'banner-btn1': 'Our offer',
    'banner-btn2': 'Make an appointment',
    'banner-btn3': 'See movie',
    'repair-title': 'Repair\nand renovation',
    'repair-primary-h1': 'AC/DC Electrical rotating machines',
    'repair-primary-p1': 'We specialize in repair of electrical machines for internal-combustion and electrical traction units.',
    'repair-primary-p2': 'We fix traction motors and auxiliary machines for most types of railway engines used in Poland and abroad.',
    'repair-primary-li1': 'Production and renovation of metal machine components (rotor shafts, endshields, end covers etc.)',
    'repair-primary-li2': 'Dynamic balancing of rotating components',
    'repair-primary-li3': 'Bearing replacement',
    'repair-primary-li4': 'Rotor rewinding (H class and higher)',
    'repair-primary-li5': 'Production of rotor and stator coils',
    'repair-primary-li6': 'Commutator replacement',
    'repair-primary-li7': 'Stator rewinding (H class and higher)',
    'repair-primary-li8': 'Vacuum-pressure impregnation (VPI) ',
    'repair-primary-li9': 'Automatic TIG welding of commutators',
    'repair-primary-li10': 'Automatic machining of rotor commutators ',
    'repair-primary-li11': 'Turning seats for axial bushing of traction motors',
    'repair-primary-li12': 'Supply of spare parts for electrical machines',
    'repair-primary-li13': 'Load tests at the test station along with characteristics of engine speed',
    'repair-secondary-h1': 'Pantographs',
    'repair-secondary-p1': 'We perform repairs of current collectors for electrical traction units, including all types used in Poland and abroad.',
    'production-title': 'Production',
    'production-primary-h1': 'Stator winding and rotors <br class="d-none d-lg-inline">for AC/DC machines',
    'production-primary-p1': 'Our facilities allow production of rotor and stator coils for any type of machine, based on documentation delivered by the client, as well as reproduction of winding upon delivery of the damaged rotor or stator.',
    'production-secondary-h1': 'Metal spare parts for electrical machines',
    'production-secondary-p1': 'When repairing motors, we can produce and replace metal parts (rotor shafts, covers, endshields, labyrinths etc.).',
    'production-secondary-p2': 'As with the coils, we are able to start production of any metal spare part, based on documentation, as well as to reproduce them upon delivery of the parts by a client.',
    'about-title': 'About us',
    'about-quote': 'Focusing on the selected submarket, we gained expertise in traction unit repairs',
    'about-author-position': 'President of the board',
    'know-how-h1': 'Know-how',
    'know-how-p1': 'Practical know-how on construction and exploitation of electrical machines is the base for operation and development of our company.',
    'know-how-p2': 'Over years of experience acquired during the company operation, we have developed solutions for traction unit service, allowing us to effectively pursue the essential technical goals.',
    'experience-h1': 'Experience',
    'experience-p1': 'Our professional approach and excellent technical achievements regarding traction unit repairs exceed our client’s expectations and allow us to create a credentials list we are very proud of.',
    'certificates-h1': 'Gwarantowana jakość\nwykonania',
    'certificates-p1': 'Potencjał i doświadczona kadra gwarantują wysoką jakość produktów i usług oferowanych przez firmę. Spółka posiada certyfikat ISO 9001:2009 wydany przez Urząd Dozoru Technicznego (UDT-CERT).',
    'certificates-ul1-p1': 'Our certificates:',
    'certificates-ul1-li1': 'Reputed service provider',
    'certificates-ul1-li2': 'Certificate of conformity',
    'certificates-ul2-p1': 'Our diplomas:',
    'certificates-ul2-li1-sub': 'Urząd Dozoru Technicznego (Udt - Cert)',
    'cta-h1': 'Zapraszamy <br class="d-inline d-xl-none">do współpracy',
    'cta-p1': 'Wybierz jedną z dostępnych opcji kontaktowych lub zadzwoń, umów się na spotkanie i odwiedź nasze biuro w Gliwicach.\nNasz dział handlowy jest do Twojej dyspozycji od poniedziałku do piątku, między 07:00 a 15:00.',
    'cta-btn1': 'Wypełnij formularz kontaktowy',
    'cta-btn-divider': 'or',
    'cta-btn2': 'Zostaw dane kontaktowe - oddzwonimy!',
    'map-spzoo': 'Sp. z o. o.',
    'map-adres': 'ul. Chorzowska 58, 44-100 Gliwice',
    'map-nip': 'VAT-EU:',
    'map-nip-nr': 'PL6312658988',
    'map-email': 'E-mail address:',
    'map-tel': 'Phone no.:',
    'map-social': 'Aurator in social media:'
  }
};

function translateTexts(lang) {
  $('.js-lang')
    .toArray()
    .forEach((element) => {
      element.innerHTML = arrLang[lang][element.getAttribute('data-key')];
    });
}

function setCurrentLanguage(lang) {
  $('.js-translate')
    .toArray()
    .forEach((translateLink) => {
      if (translateLink.getAttribute('data-key') === lang) {
        translateLink.classList.add('c-lang--current-lang');
      } else {
        translateLink.classList.remove('c-lang--current-lang');
      }
    });

  $('.c-lang__toggle-text').text(lang);
  localStorage.setItem('currentLangAurator', lang);
}

function resetDropdownState() {
  $('.c-lang__icon').removeClass('d-none');
  $('.c-lang__icon-hide').addClass('d-none');
  $('.c-lang__dd').addClass('d-none');
}


export function translateOnInit() {
  const currentLanguage = localStorage.getItem('currentLangAurator');
  if (currentLanguage) {
    translateTexts(currentLanguage);
    setCurrentLanguage(currentLanguage);
  }
}

export function translateOnClick() {
  $('.js-translate').click((event) => {
    const lang = event.target.getAttribute('data-key');
    translateTexts(lang);
    setCurrentLanguage(lang);
    resetDropdownState();
    setFotoPosition();
  });
}
