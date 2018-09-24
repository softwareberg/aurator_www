import $ from 'jquery';
import { setFotoPosition } from './layout';

const arrLang = {
  pl: {
    'nav-repair': 'Naprawa i regeneracja',
    'nav-production': 'Produkcja',
    'nav-about': 'O firmie',
    'nav-contact': 'Kontakt',
    'banner-repair': 'Naprawa<br>maszyn trakcyjnych',
    'banner-sprawdz': 'Sprawdż nasza ofertę',
    'banner-umow': 'Umów sie na rozmowę',
    'banner-zobacz': 'Zobacz film',
    'section-repair': 'Naprawa<br>i regeneracja',
    'section1-elektryczne': 'Elektryczne maszyny wirujące <br class="d-none d-md-inline">prądu stałego oraz zmiennego',
    'section1-realizujemy': 'Realizujemy naprawy maszyn elektrycznych ze spalinowych oraz elektrycznych pojazdów trakcyjnych.',
    'section1-wykonujemy': 'Wykonujemy naprawy zarówno silników trakcyjnych, jak i maszyn pomocniczych do większości typów lokomotyw eksploatowanych w Polsce, jak i poza granicami naszego kraju.',
    'section1-li1': 'Wykonanie lub regeneracja metalowych elementów maszyn (wały wirników, tarcze łożyskowe, pokrywy łożyskowe itp.)',
    'section1-li2': 'Wyważanie dynamiczne elementów wirujących',
    'section1-li3': 'Wymiana łożysk',
    'section1-li4': 'Przezwojenia wirników (klasa H i wyższe)',
    'section1-li5': 'Produkcja cewek wirnikowych oraz stojanowych',
    'section1-li6': 'Wymiana komutatorów',
    'section1-li7': 'Przezwojenia stojanów (klasa H i wyższe)',
    'section1-li8': 'Nasycanie próżniowo-ciśnieniowe',
    'section1-li9': 'Automatyczne spawanie komutatorów metodą TIG',
    'section1-li10': 'Automatyczna obróbka komutatorów wirników',
    'section1-li11': 'Wytaczanie gniazd pod panewki osiowe silników trakcyjnych',
    'section1-li12': 'Dostawa części zamiennych do maszyn elektrycznych',
    'section1-li13': 'Próby obciążeniowe na stacji prób wraz z wykonaniem charakterystyki obrotów silników',
    'section2-pantografy': 'Pantografy',
    'section2-realizujemy': 'Realizujemy naprawy odbieraków prądu do elektrycznych pojazdów trakcyjnych do wszystkich eksploatowanych pojazdów trakcyjnych w Polsce i za granicą.',
    'section-production': 'Produkcja',
    'section3-cewki': 'Cewki stojanowe i wirnikowe do maszyn <br class="d-none d-lg-inline">prądu stałego oraz przemiennego',
    'section3-nasze': 'Nasze zaplecze pozwala na uruchomienie produkcji cewek wirnikowych oraz stojanowych dla dowolnego typu maszyn na podstawie dostarczonej przez klienta dokumentacji. Istnieje również możliwość odtworzenia uzwojenia po dostarczeniu uszkodzonego wirnika lub stojana.',
    'section4-metalowe': 'Metalowe części zamienne do maszyn elektrycznych',
    'section4-zapewniamy': 'Zapewniamy podczas naprawy silników wykonanie i wymianę części metalowych (wały wirników, pokrywy, tarcze łożyskowe, labirynty itp.).',
    'section4-mamy': 'Mamy również podobnie, jak w przypadku cewek, możliwość uruchomienia produkcji dowolnych metalowych części zamiennych na podstawie dokumentacji, jak również odtworzenia ich z dostarczonych przez klienta części.',
    'about-company': 'O firmie',
    'about-poprzez': 'Poprzez koncentrację na wybranym segmencie rynku udało nam się wyspecjalizować w naprawach maszyn trakcyjnych',
    'about-prezes': 'Prezes zarządu',
    'about-know-how': 'Wiedza',
    'about-efektywna': 'Efektywna wiedza o budowie i eksploatacji maszyn elektrycznych jest podstawą działania i rozwoju naszej firmy.',
    'about-przez': 'Przez lata pracy oraz dzięki doświadczeniu zgromadzonemu w okresie działania firmy, wypracowaliśmy rozwiązania serwisu maszyn trakcyjnych, które zapewnia skuteczną realizację podstawowych celów technicznych.',
    'section-experience': 'Doświadczenie',
    'experience-profesjonalizm': 'Profesjonalizm oraz doskonałe wyniki techniczne napraw maszyn trakcyjnych, które przechodzą oczekiwania naszych klientów, pozwoliły nam na stworzenie listy referencji, z której jesteśmy dumni.',
    'section-cert': 'Gwarantowana jakość<br>wykonania',
    'cert-potencjal': 'Potencjał i doświadczona kadra gwarantują wysoką jakość produktów i usług oferowanych przez firmę. Spółka posiada certyfikat ISO 9001:2009 wydany przez Urząd Dozoru Technicznego (UDT-CERT).',
    'cert-certificates': 'Nasze świadectwa:',
    'cert-pkp': 'Uznany wykonawca usługi',
    'cert-icc': 'Świadectwo zgodności',
    'cert-diplomas': 'Nasze certyfikaty:',
    'cert-iso': 'ISO 9001',
    'cert-ust': 'Urząd Dozoru Technicznego (Udt - Cert)',
    'cta-title': 'Zapraszamy <br class="d-inline d-xl-none">do współpracy',
    'cta-p': 'Wybierz jedną z dostępnych opcji kontaktowych lub zadzwoń, umów się na spotkanie i odwiedź nasze biuro w Gliwicach.<br>Nasz dział handlowy jest do Twojej dyspozycji od poniedziałku do piątku, między 07:00 a 15:00.',
    'cta-form': 'Wypełnij formularz kontaktowy',
    'cta-or': 'lub',
    'cta-phone': 'Zostaw dane kontaktowe - oddzwonimy!',
    'map-spzoo': 'Sp. z o. o.',
    'map-adres': 'ul. Chorzowska 58, 44-100 Gliwice',
    'map-nip': 'Nip:',
    'map-nip-nr': '6312658988',
    'map-email': 'Adres e-mail:',
    'map-tel': 'Nr telefonu:',
    'map-social': 'Aurator w social media:'
  },
  en: {
    'nav-repair': 'Repair and renovation',
    'nav-production': 'Production',
    'nav-about': 'About us',
    'nav-contact': 'Contact',
    'banner-repair': 'Traction unit<br>repairs',
    'banner-sprawdz': 'Our offer',
    'banner-umow': 'Make an appointment',
    'banner-zobacz': 'See movie',
    'section-repair': 'Repair<br>and renovation',
    'section1-elektryczne': 'AC/DC Electrical rotating machines',
    'section1-realizujemy': 'We specialize in repair of electrical machines for internal-combustion and electrical traction units.',
    'section1-wykonujemy': 'We fix traction motors and auxiliary machines for most types of railway engines used in Poland and abroad.',
    'section1-li1': 'Production and renovation of metal machine components (rotor shafts, endshields, end covers etc.)',
    'section1-li2': 'Dynamic balancing of rotating components',
    'section1-li3': 'Bearing replacement',
    'section1-li4': 'Rotor rewinding (H class and higher)',
    'section1-li5': 'Production of rotor and stator coils',
    'section1-li6': 'Commutator replacement',
    'section1-li7': 'Stator rewinding (H class and higher)',
    'section1-li8': 'Vacuum-pressure impregnation (VPI) ',
    'section1-li9': 'Automatic TIG welding of commutators',
    'section1-li10': 'Automatic machining of rotor commutators ',
    'section1-li11': 'Turning seats for axial bushing of traction motors',
    'section1-li12': 'Supply of spare parts for electrical machines',
    'section1-li13': 'Load tests at the test station along with characteristics of engine speed',
    'section2-pantografy': 'Pantographs',
    'section2-realizujemy': 'We perform repairs of current collectors for electrical traction units, including all types used in Poland and abroad.',
    'section-production': 'Production',
    'section3-cewki': 'Stator winding and rotors <br class="d-none d-lg-inline">for AC/DC machines',
    'section3-nasze': 'Our facilities allow production of rotor and stator coils for any type of machine, based on documentation delivered by the client, as well as reproduction of winding upon delivery of the damaged rotor or stator.',
    'section4-metalowe': 'Metal spare parts for electrical machines',
    'section4-zapewniamy': 'When repairing motors, we can produce and replace metal parts (rotor shafts, covers, endshields, labyrinths etc.).',
    'section4-mamy': 'As with the coils, we are able to start production of any metal spare part, based on documentation, as well as to reproduce them upon delivery of the parts by a client.',
    'about-company': 'About us',
    'about-poprzez': 'Focusing on the selected submarket, we gained expertise in traction unit repairs',
    'about-prezes': 'President of the board',
    'about-know-how': 'Know-how',
    'about-efektywna': 'Practical know-how on construction and exploitation of electrical machines is the base for operation and development of our company.',
    'about-przez': 'Over years of experience acquired during the company operation, we have developed solutions for traction unit service, allowing us to effectively pursue the essential technical goals.',
    'section-experience': 'Experience',
    'experience-profesjonalizm': 'Our professional approach and excellent technical achievements regarding traction unit repairs exceed our client’s expectations and allow us to create a credentials list we are very proud of.',
    'section-cert': 'Gwarantowana jakość<br>wykonania',
    'cert-potencjal': 'Potencjał i doświadczona kadra gwarantują wysoką jakość produktów i usług oferowanych przez firmę. Spółka posiada certyfikat ISO 9001:2009 wydany przez Urząd Dozoru Technicznego (UDT-CERT).',
    'cert-certificates': 'Our certificates:',
    'cert-pkp': 'Reputed service provider',
    'cert-icc': 'Certificate of conformity',
    'cert-diplomas': 'Our diplomas:',
    'cert-iso': 'ISO 9001',
    'cert-ust': 'Urząd Dozoru Technicznego (Udt - Cert)',
    'cta-title': 'Zapraszamy <br class="d-inline d-xl-none">do współpracy',
    'cta-p': 'Wybierz jedną z dostępnych opcji kontaktowych lub zadzwoń, umów się na spotkanie i odwiedź nasze biuro w Gliwicach.<br>Nasz dział handlowy jest do Twojej dyspozycji od poniedziałku do piątku, między 07:00 a 15:00.',
    'cta-form': 'Wypełnij formularz kontaktowy',
    'cta-or': 'or',
    'cta-phone': 'Zostaw dane kontaktowe - oddzwonimy!',
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
        translateLink.classList.add('h-current-lang');
      } else {
        translateLink.classList.remove('h-current-lang');
      }
    });

  $('.c-lang__toggle-txt').text(lang);
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
