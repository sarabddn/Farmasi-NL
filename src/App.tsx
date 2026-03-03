/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Sparkles, 
  Heart, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Mail,
  Menu,
  X,
  Play,
  UserPlus,
  Award,
  ShieldCheck,
  Zap,
  Loader2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const CONFIG = {
  nl: {
    countryCode: 'nl',
    name: 'Nederlands',
    flag: '🇳🇱',
    storeUrl: "https://www.nl.farmasi.com/saraabdeddine",
    registerUrl: "https://www.nl.farmasi.com/saraabdeddine/register/beautyinfluencer",
    translations: {
      nav: { about: "Over ons", products: "Producten", opportunity: "Kans", shop: "Shop nu" },
      hero: {
        badge: "Bedient Nederland, Duitsland & België",
        title1: "Farmasi Nederland",
        title2: "& Europe",
        title3: "Beauty & Wellness",
        desc: "Welkom bij Farmasi Nederland. Wij leveren de beste beautyproducten in Nederland, Duitsland en België. Ervaar de perfecte mix van natuur en wetenschap.",
        shopBtn: "Bekijk de collectie",
        watchBtn: "Bekijk presentatie"
      },
      categories: {
        title: "Winkel per categorie",
        desc: "Ontdek ons brede assortiment producten die zijn ontworpen om je natuurlijke schoonheid te benadrukken en je gezondheid te ondersteunen.",
        skincare: "Huidverzorging",
        skincareDesc: "Geavanceerde formules voor een stralende huid.",
        makeup: "Make-up",
        makeupDesc: "Cosmetica van professionele kwaliteit voor elke look.",
        nutrition: "Nutriplus",
        nutritionDesc: "Welzijn en vitaliteit van binnenuit.",
        personalCare: "Haarverzorging",
        personalCareDesc: "Professionele verzorging voor gezond en glanzend haar.",
        shopNow: "Shop"
      },
      about: {
        title: "Over Farmasi",
        p1: "Farmasi is een wereldwijd schoonheids- en welzijnsbedrijf opgericht door **Dr. Cevdet Tuna**, een van de eerste artsen in Turkije. Met meer dan 70 jaar ervaring in de cosmetica- en gezondheidsindustrie zijn we een van de snelst groeiende direct-selling bedrijven ter wereld geworden.",
        p2: "Onze producten worden vervaardigd in **Farmacity**, een van de grootste geïntegreerde cosmetische fabrieken in Europa, gevestigd in Istanbul. Dit stelt ons in staat om elke stap van het proces te controleren, van waterfiltratie tot verpakking, waardoor de hoogste kwaliteitsnormen worden gegarandeerd.",
        p3: "Vandaag de dag is Farmasi actief in meer dan **30 landen** en bereikt het miljoenen klanten via onze toegewijde Beauty Influencers. We zetten ons in voor het leveren van hoogwaardige, betaalbare en innovatieve producten die de **Gouden Regels** van Dr. C. Tuna volgen.",
        stats: ["Wereldwijde Leider", "Gecertificeerde Kwaliteit", "Innovatief Lab", "30+ Landen"],
        years: "Jaar"
      },
      opportunity: {
        title1: "Start Jouw",
        title2: "Succesverhaal",
        desc: "Sluit je aan bij het team van Sara Abdeddine en word een Farmasi Beauty Influencer. Verdien tot 50% commissie, bouw je eigen team en geniet van exclusieve beloningen.",
        registerBtn: "Registreer nu",
        videoBtn: "Bekijk video"
      },
      footer: {
        desc: "Jouw vertrouwde bron voor Farmasi-producten in Nederland, Duitsland en België. Kwaliteitsschoonheid en welzijn, met zorg geleverd.",
        links: "Snelkoppelingen",
        regions: "Regio's"
      }
    }
  },
  de: {
    countryCode: 'de',
    name: 'Deutsch',
    flag: '🇩🇪',
    storeUrl: "https://www.farmasi.de/saraabdeddine",
    registerUrl: "https://www.farmasi.de/saraabdeddine/register/beautyinfluencer",
    translations: {
      nav: { about: "Über uns", products: "Produkte", opportunity: "Chance", shop: "Jetzt shoppen" },
      hero: {
        badge: "Serviert Niederlande, Deutschland & Belgien",
        title1: "Farmasi Nederland",
        title2: "& Europe",
        title3: "Beauty & Wellness",
        desc: "Welkom bij Farmasi Nederland. Wij leveren de beste beautyproducten in Nederland, Duitsland en België. Erleben Sie die perfekte Mischung aus Natur und Wissenschaft.",
        shopBtn: "Kollektion ansehen",
        watchBtn: "Präsentation ansehen"
      },
      categories: {
        title: "Nach Kategorie shoppen",
        desc: "Entdecken Sie unsere breite Palette an Produkten, die Ihre natürliche Schönheit unterstreichen und Ihre Gesundheit unterstützen.",
        skincare: "Hautpflege",
        skincareDesc: "Fortschrittliche Formeln für strahlende Haut.",
        makeup: "Make-up",
        makeupDesc: "Kosmetik in Profiqualität für jeden Look.",
        nutrition: "Nutriplus",
        nutritionDesc: "Wellness und Vitalität von innen heraus.",
        personalCare: "Haarpflege",
        personalCareDesc: "Professionelle Pflege für gesundes und glänzendes Haar.",
        shopNow: "Shop"
      },
      about: {
        title: "Über Farmasi",
        p1: "Farmasi ist ein globales Schönheits- und Wellnessunternehmen, das von **Dr. Cevdet Tuna**, einem der ersten Ärzte in der Türkei, gegründet wurde. Mit über 70 Jahren Erfahrung in der Kosmetik- und Gesundheitsbranche sind wir zu einem der am schnellsten wachsenden Direktvertriebsunternehmen der Welt geworden.",
        p2: "Unsere Produkte werden in **Farmacity** hergestellt, einer der größten integrierten Kosmetikproduktionsanlagen in Europa mit Sitz in Istanbul. Dies ermöglicht es uns, jeden Schritt des Prozesses zu kontrollieren, von der Wasserfiltration bis zur Verpackung, um höchste Qualitätsstandards zu gewährleisten.",
        p3: "Heute ist Farmasi in über **30 Ländern** tätig und erreicht Millionen von Kunden durch unsere engagierten Beauty Influencer. Wir setzen uns dafür ein, hochwertige, erschwingliche und innovative Produkte anzubieten, die den **Goldenen Regeln** von Dr. C. Tuna folgen.",
        stats: ["Weltmarktführer", "Zertifizierte Qualität", "Innovatives Labor", "30+ Länder"],
        years: "Jahre"
      },
      opportunity: {
        title1: "Starten Sie Ihre",
        title2: "Erfolgsgeschichte",
        desc: "Werden Sie Teil des Teams von Sara Abdeddine und werden Sie Farmasi Beauty Influencer. Verdienen Sie bis zu 50% Provision, bauen Sie Ihr eigenes Team auf und genießen Sie exklusive Belohnungen.",
        registerBtn: "Jetzt registrieren",
        videoBtn: "Video ansehen"
      },
      footer: {
        desc: "Ihre vertrauenswürdige Quelle für Farmasi-Produkte in den Niederlanden, Deutschland und Belgien. Qualitätsschönheit und Wellness, mit Sorgfalt geliefert.",
        links: "Schnelllinks",
        regions: "Regionen"
      }
    }
  },
  en: {
    countryCode: 'be',
    name: 'Belgium',
    flag: '🇧🇪',
    storeUrl: "https://www.be.farmasi.com/saraabdeddine",
    registerUrl: "https://www.be.farmasi.com/saraabdeddine/register/beautyinfluencer",
    translations: {
      nav: { about: "About", products: "Products", opportunity: "Opportunity", shop: "Shop Now" },
      hero: {
        badge: "Serving Nederland, Germany & Belgium",
        title1: "Farmasi Nederland",
        title2: "& Europe",
        title3: "Beauty & Wellness",
        desc: "Welkom bij Farmasi Nederland. Wij leveren de beste beautyproducten in Nederland, Duitsland en België. Experience the perfect blend of nature and science.",
        shopBtn: "Shop the Collection",
        watchBtn: "Watch Presentation"
      },
      categories: {
        title: "Shop by Category",
        desc: "Explore our wide range of products designed to enhance your natural beauty and support your health.",
        skincare: "Skincare",
        skincareDesc: "Advanced formulas for radiant skin.",
        makeup: "Makeup",
        makeupDesc: "Professional quality cosmetics for every look.",
        nutrition: "Nutriplus",
        nutritionDesc: "Wellness and vitality from the inside out.",
        personalCare: "Hair Care",
        personalCareDesc: "Professional care for healthy and shiny hair.",
        shopNow: "Shop"
      },
      about: {
        title: "About Farmasi",
        p1: "Farmasi is a global beauty and wellness company founded by **Dr. Cevdet Tuna**, one of the first doctors in Turkey. With over 70 years of experience in the cosmetics and health industry, we have become one of the fastest-growing direct selling companies in the world.",
        p2: "Our products are manufactured in **Farmacity**, one of the largest integrated cosmetic manufacturing plants in Europe, located in Istanbul. This allows us to control every step of the process, from water filtration to packaging, ensuring the highest quality standards.",
        p3: "Today, Farmasi operates in over **30 countries** and reaches millions of customers through our dedicated Beauty Influencers. We are committed to providing high-quality, affordable, and innovative products that follow the **Golden Rules** of Dr. C. Tuna.",
        stats: ["Global Leader", "Certified Quality", "Innovative Lab", "30+ Countries"],
        years: "Years"
      },
      opportunity: {
        title1: "Start Your",
        title2: "Success Story",
        desc: "Join Sara Abdeddine's team and become a Farmasi Beauty Influencer. Earn up to 50% commission, build your own team, and enjoy exclusive rewards.",
        registerBtn: "Register Now",
        videoBtn: "Watch Video"
      },
      footer: {
        desc: "Your trusted source for Farmasi products in the Netherlands, Germany, and Belgium. Quality beauty and wellness, delivered with care.",
        links: "Quick Links",
        regions: "Regions"
      }
    }
  },
  it: {
    countryCode: 'it',
    name: 'Italiano',
    flag: '🇮🇹',
    storeUrl: "https://www.it.farmasi.com/saraabdeddine",
    registerUrl: "https://www.it.farmasi.com/saraabdeddine/register/beautyinfluencer",
    translations: {
      nav: { about: "Chi siamo", products: "Prodotti", opportunity: "Opportunità", shop: "Acquista ora" },
      hero: {
        badge: "Serve Paesi Bassi, Germania e Belgio",
        title1: "Farmasi Nederland",
        title2: "& Europe",
        title3: "Bellezza e Benessere",
        desc: "Welkom bij Farmasi Nederland. Wij leveren de beste beautyproducten in Nederland, Duitsland en België. Sperimenta il perfetto mix di natura e scienza.",
        shopBtn: "Scopri la collezione",
        watchBtn: "Guarda la presentazione"
      },
      categories: {
        title: "Acquista per categoria",
        desc: "Esplora la nostra vasta gamma di prodotti progettati per esaltare la tua bellezza naturale e sostenere la tua salute.",
        skincare: "Cura della pelle",
        skincareDesc: "Formule avanzate per una pelle radiosa.",
        makeup: "Trucco",
        makeupDesc: "Cosmetici di qualità professionale per ogni look.",
        nutrition: "Nutriplus",
        nutritionDesc: "Benessere e vitalità dall'interno.",
        personalCare: "Cura dei capelli",
        personalCareDesc: "Cura professionale per capelli sani e lucenti.",
        shopNow: "Acquista"
      },
      about: {
        title: "A proposito di Farmasi",
        p1: "Farmasi è un'azienda globale di bellezza e benessere fondata dal **Dr. Cevdet Tuna**, uno dei primi medici in Turchia. Con oltre 70 anni di esperienza nel settore cosmetico e sanitario, siamo diventati una delle aziende di vendita diretta in più rapida crescita al mondo.",
        p2: "I nostri prodotti sono fabbricati a **Farmacity**, uno dei più grandi impianti di produzione cosmetica integrata in Europa, situato a Istanbul. Ciò ci consente di controllare ogni fase del processo, garantendo i più alti standard qualitativi.",
        p3: "Oggi, Farmasi opera in oltre **30 paesi** e raggiunge milioni di clienti attraverso i nostri Beauty Influencer dedicati. Ci impegniamo a fornire prodotti di alta qualità, convenienti e innovativi.",
        stats: ["Leader Globale", "Qualità Certificata", "Laboratorio Innovativo", "30+ Paesi"],
        years: "Anni"
      },
      opportunity: {
        title1: "Inizia la tua",
        title2: "Storia di Successo",
        desc: "Unisciti al team di Sara Abdeddine e diventa un Beauty Influencer Farmasi. Guadagna fino al 50% di commissione e goditi premi esclusivi.",
        registerBtn: "Registrati ora",
        videoBtn: "Guarda il video"
      },
      footer: {
        desc: "La tua fonte di fiducia per i prodotti Farmasi in Europa. Bellezza e benessere di qualità, consegnati con cura.",
        links: "Link rapidi",
        regions: "Regioni"
      }
    }
  },
  es: {
    countryCode: 'es',
    name: 'Español',
    flag: '🇪🇸',
    storeUrl: "https://www.farmasi.es/saraabdeddine",
    registerUrl: "https://www.farmasi.es/saraabdeddine/register/beautyinfluencer",
    translations: {
      nav: { about: "Sobre nosotros", products: "Productos", opportunity: "Oportunidad", shop: "Comprar ahora" },
      hero: {
        badge: "Sirviendo a Países Bajos, Alemania y Bélgica",
        title1: "Farmasi Nederland",
        title2: "& Europe",
        title3: "Belleza y Bienestar",
        desc: "Welkom bij Farmasi Nederland. Wij leveren de beste beautyproducten in Nederland, Duitsland en België. Experimenta la mezcla perfecta de naturaleza y ciencia.",
        shopBtn: "Ver la colección",
        watchBtn: "Ver presentación"
      },
      categories: {
        title: "Comprar por categoría",
        desc: "Explore nuestra amplia gama de productos diseñados para realzar su belleza natural y apoyar su salud.",
        skincare: "Cuidado de la piel",
        skincareDesc: "Fórmulas avanzadas para una piel radiante.",
        makeup: "Maquillaje",
        makeupDesc: "Cosméticos de calidad profesional para cada look.",
        nutrition: "Nutriplus",
        nutritionDesc: "Bienestar y vitalidad desde el interior.",
        personalCare: "Cuidado del cabello",
        personalCareDesc: "Cuidado profesional para un cabello sano y brillante.",
        shopNow: "Comprar"
      },
      about: {
        title: "Sobre Farmasi",
        p1: "Farmasi es una empresa global de belleza y bienestar fundada por el **Dr. Cevdet Tuna**, uno de los primeros médicos de Turquía. Con más de 70 años de experiencia, nos hemos convertido en una de las empresas de venta directa de más rápido crecimiento.",
        p2: "Nuestros productos se fabrican en **Farmacity**, una de las plantas de fabricación de cosméticos integradas más grandes de Europa, ubicada en Estambul.",
        p3: "Hoy, Farmasi opera en más de **30 países** y llega a millones de clientes. Estamos comprometidos a proporcionar productos innovadores y de alta calidad.",
        stats: ["Líder Global", "Calidad Certificada", "Laboratorio Innovador", "30+ Países"],
        years: "Años"
      },
      opportunity: {
        title1: "Comienza tu",
        title2: "Historia de Éxito",
        desc: "Únete al equipo de Sara Abdeddine y conviértete en Beauty Influencer de Farmasi. Gana hasta un 50% de comisión y disfruta de recompensas exclusivas.",
        registerBtn: "Regístrate ahora",
        videoBtn: "Ver video"
      },
      footer: {
        desc: "Su fuente de confianza para los productos Farmasi en Europa. Belleza y bienestar de calidad, entregados con cuidado.",
        links: "Enlaces rápidos",
        regions: "Regiones"
      }
    }
  },
  fr: {
    countryCode: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    storeUrl: "https://www.fr.farmasi.com/saraabdeddine",
    registerUrl: "https://www.fr.farmasi.com/saraabdeddine/register/beautyinfluencer",
    translations: {
      nav: { about: "À propos", products: "Produits", opportunity: "Opportunité", shop: "Acheter" },
      hero: {
        badge: "Desservant les Pays-Bas, l'Allemagne et la Belgique",
        title1: "Farmasi Nederland",
        title2: "& Europe",
        title3: "Beauté & Bien-être",
        desc: "Welkom bij Farmasi Nederland. Wij leveren de beste beautyproducten in Nederland, Duitsland en België. Découvrez le mélange parfait entre nature et science.",
        shopBtn: "Voir la collection",
        watchBtn: "Voir la présentation"
      },
      categories: {
        title: "Acheter par catégorie",
        desc: "Découvrez notre large gamme de produits conçus per sublimer votre beauté naturelle et soutenir votre santé.",
        skincare: "Soins de la peau",
        skincareDesc: "Formules avancées pour une peau éclatante.",
        makeup: "Maquillage",
        makeupDesc: "Cosmétiques de qualité professionnelle pour chaque look.",
        nutrition: "Nutriplus",
        nutritionDesc: "Bien-être et vitalité de l'intérieur.",
        personalCare: "Soins des cheveux",
        personalCareDesc: "Soins professionnels pour des cheveux sains et brillants.",
        shopNow: "Acheter"
      },
      about: {
        title: "À propos de Farmasi",
        p1: "Farmasi est une entreprise mondiale de beauté et de bien-être fondée par le **Dr Cevdet Tuna**, l'un des premiers médecins de Turquie. Avec plus de 70 ans d'expérience, nous sommes devenus l'une des entreprises de vente directe les plus dynamiques.",
        p2: "Nos produits sont fabriqués à **Farmacity**, l'une des plus grandes usines de cosmétiques intégrées d'Europe, située à Istanbul.",
        p3: "Aujourd'hui, Farmasi opère dans plus de **30 pays**. Nous nous engageons à fournir des produits innovants et de haute qualité.",
        stats: ["Leader Mondial", "Qualité Certifiée", "Labo Innovant", "30+ Pays"],
        years: "Ans"
      },
      opportunity: {
        title1: "Commencez votre",
        title2: "Success Story",
        desc: "Rejoignez l'équipe de Sara Abdeddine et devenez Beauty Influencer Farmasi. Gagnez jusqu'à 50% de commission et profitez de récompenses exclusives.",
        registerBtn: "S'inscrire maintenant",
        videoBtn: "Voir la vidéo"
      },
      footer: {
        desc: "Votre source de confiance pour les produits Farmasi en Europe. Beauté et bien-être de qualité, livrés avec soin.",
        links: "Liens rapides",
        regions: "Régions"
      }
    }
  },
  ro: {
    countryCode: 'ro',
    name: 'Română',
    flag: '🇷🇴',
    storeUrl: "https://www.farmasi.ro/saraabdeddine",
    registerUrl: "https://www.farmasi.ro/saraabdeddine/register/beautyinfluencer",
    translations: {
      nav: { about: "Despre noi", products: "Produse", opportunity: "Oportunitate", shop: "Cumpără acum" },
      hero: {
        badge: "Deservind Olanda, Germania și Belgia",
        title1: "Farmasi Nederland",
        title2: "& Europe",
        title3: "Frumusețe și Bunăstare",
        desc: "Welkom bij Farmasi Nederland. Wij leveren de beste beautyproducten in Nederland, Duitsland en België. Experimentați amestecul perfect de natură și știință.",
        shopBtn: "Vezi colecția",
        watchBtn: "Vezi prezentarea"
      },
      categories: {
        title: "Cumpără după categorie",
        desc: "Explorează gama noastră largă de produse concepute pentru a-ți evidenția frumusețea naturală și pentru a-ți susține sănătatea.",
        skincare: "Îngrijirea pielii",
        skincareDesc: "Formule avansate pentru o piele radiantă.",
        makeup: "Machiaj",
        makeupDesc: "Cosmetice de calitate profesională pentru orice look.",
        nutrition: "Nutriplus",
        nutritionDesc: "Bunăstare și vitalitate din interior.",
        personalCare: "Îngrijirea părului",
        personalCareDesc: "Îngrijire profesională pentru un păr sănătos și strălucitor.",
        shopNow: "Cumpără"
      },
      about: {
        title: "Despre Farmasi",
        p1: "Farmasi este o companie globală de frumusețe și bunăstare fondată de **Dr. Cevdet Tuna**, unul dintre primii medici din Turcia. Cu peste 70 de ani de experiență, am devenit una dintre companiile cu cea mai rapidă creștere.",
        p2: "Produsele noastre sunt fabricate la **Farmacity**, una dintre cele mai mari fabrici de cosmetice integrate din Europa, situată în Istanbul.",
        p3: "Astăzi, Farmasi operează în peste **30 de țări**. Ne angajăm să oferim produse inovatoare și de înaltă calitate.",
        stats: ["Lider Global", "Calitate Certificată", "Laborator Inovator", "30+ Țări"],
        years: "Ani"
      },
      opportunity: {
        title1: "Începe-ți",
        title2: "Povestea de Succes",
        desc: "Alătură-te echipei Sarei Abdeddine și devino Beauty Influencer Farmasi. Câștigă până la 50% comision și bucură-te de recompense exclusive.",
        registerBtn: "Înregistrează-te acum",
        videoBtn: "Vezi video"
      },
      footer: {
        desc: "Sursa ta de încredere pentru produsele Farmasi în Europa. Frumusețe și bunăstare de calitate, livrate cu grijă.",
        links: "Link-uri rapide",
        regions: "Regiuni"
      }
    }
  }
};

const DEFAULT_IMAGES = {
  hero: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
  about: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000",
  opportunity: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  skincare: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
  makeup: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
  nutrition: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  hair: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
};

export default function App() {
  const [lang, setLang] = React.useState<keyof typeof CONFIG>('nl');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [images, setImages] = React.useState(DEFAULT_IMAGES);
  const [isLoadingImages, setIsLoadingImages] = React.useState(false);

  const t = CONFIG[lang].translations;
  const STORE_URL = CONFIG[lang].storeUrl;
  const REGISTER_URL = CONFIG[lang].registerUrl;
  const VIDEO_URL = "https://youtu.be/gvFKFM9eMPg";
  const INSTAGRAM_URL = "https://www.instagram.com/saranomadedigitale/";
  const FACEBOOK_URL = "https://www.facebook.com/sara.abdeddine";
  const EMAIL_ADDRESS = "sara.bddn@proton.me";

  React.useEffect(() => {
    async function fetchFarmasiImages() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Find high-quality direct image URLs (JPG/PNG) for a beauty brand website. Themes: 1. A hero beauty shot (glamour), 2. A luxury skincare product, 3. A professional makeup product, 4. A healthy nutrition/wellness product, 5. A professional hair care product, 6. An 'About Us' heritage shot, 7. A team/opportunity shot. Return ONLY a JSON object with keys: hero, skincare, makeup, nutrition, hair, about, opportunity. Use diverse and high-end imagery.`,
          config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json"
          }
        });

        const foundImages = JSON.parse(response.text);
        setImages(prev => ({ ...prev, ...foundImages }));
      } catch (error) {
        console.error("Failed to fetch Farmasi images:", error);
      } finally {
        setIsLoadingImages(false);
      }
    }

    fetchFarmasiImages();
  }, []);

  const categories = [
    { title: t.categories.skincare, image: images.skincare, description: t.categories.skincareDesc },
    { title: t.categories.makeup, image: images.makeup, description: t.categories.makeupDesc },
    { title: t.categories.nutrition, image: images.nutrition, description: t.categories.nutritionDesc },
    { title: t.categories.personalCare, image: images.hair, description: t.categories.personalCareDesc },
  ];

  const countries = [
    "EUROPE: Albania, Belarus, Bosnia, Czechia, Croatia, Cyprus, Georgia, Germany, Kosovo, Romania, Serbia, Portugal, Spain, Slovakia, Slovenia, Türkiye, Ukraine, Montenegro, Poland, England (UK), Italy, Wales (UK), Macedonia, Moldova, Hungary, N. Ireland (UK), N. Cyprus, Ireland, France, Nederland, Belgium, Latvia, Estonia.",
    "NORTH AMERICA: Canada, United States, Mexico, Dominican Republic, Puerto Rico, Guatemala*, Honduras*, Nicaragua*, Belize*, Costa Rica*, El Salvador*, Panama*, Haiti*.",
    "SOUTH AMERICA: Brazil, Peru, Colombia, Ecuador*, Paraguay*, Bolivia*, Chile*, Argentina*.",
    "AFRICA: Oman, Mauritius, Tunisia, Morocco, Libya.",
    "ASIA: Malaysia."
  ].join(" • ");

  return (
    <div className="min-h-screen flex flex-col selection:bg-rose-100 selection:text-rose-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-rose-600" />
              <span className="font-serif text-xl font-bold tracking-tight">FARMASI <span className="font-sans font-light text-stone-400">EUROPE</span></span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
              <a href="#about" className="hover:text-rose-600 transition-colors">{t.nav.about}</a>
              <a href="#categories" className="hover:text-rose-600 transition-colors">{t.nav.products}</a>
              <a href="#opportunity" className="hover:text-rose-600 transition-colors">{t.nav.opportunity}</a>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-2 border-l border-stone-200 pl-6 ml-2">
                {(Object.keys(CONFIG) as Array<keyof typeof CONFIG>).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      lang === l 
                        ? 'bg-rose-100 text-rose-700 ring-2 ring-rose-200' 
                        : 'hover:bg-stone-100 text-stone-400'
                    }`}
                    title={CONFIG[l].name}
                  >
                    <span className="text-sm">{CONFIG[l].flag}</span>
                  </button>
                ))}
              </div>

              <a 
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 text-white px-5 py-2 rounded-full hover:bg-rose-700 transition-all flex items-center gap-2 shadow-sm"
              >
                {t.nav.shop} <ShoppingBag className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-stone-100 p-4 space-y-4 shadow-lg"
          >
            <div className="flex justify-center gap-4 py-2 border-b border-stone-50">
              {(Object.keys(CONFIG) as Array<keyof typeof CONFIG>).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setIsMenuOpen(false); }}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    lang === l ? 'bg-rose-50 text-rose-700' : 'text-stone-500'
                  }`}
                >
                  <span>{CONFIG[l].flag}</span>
                  <span className="text-xs font-bold uppercase">{l}</span>
                </button>
              ))}
            </div>
            <a href="#about" className="block text-stone-600 font-medium" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
            <a href="#categories" className="block text-stone-600 font-medium" onClick={() => setIsMenuOpen(false)}>{t.nav.products}</a>
            <a href="#opportunity" className="block text-stone-600 font-medium" onClick={() => setIsMenuOpen(false)}>{t.nav.opportunity}</a>
            <a 
              href={STORE_URL}
              className="block bg-rose-600 text-white px-5 py-3 rounded-xl text-center font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.shop}
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Globe className="w-3 h-3" /> {t.hero.badge}
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl leading-tight mb-6">
                {t.hero.title1} <br />
                <span className="italic text-rose-600">{t.hero.title2}</span>
              </h1>
              <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center justify-center gap-2 group"
                >
                  {t.hero.shopBtn} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-stone-200 text-stone-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5 fill-current text-rose-600" /> {t.hero.watchBtn}
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-stone-200 flex items-center justify-center relative">
                <img 
                  src={images.hero} 
                  alt="Beauty Products" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block border border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">100% Vegan</p>
                    <p className="text-xs text-stone-500">Cruelty-Free Products</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-rose-50/50 rounded-l-[100px] blur-3xl opacity-50" />
      </header>

      {/* Scrolling Marquee Section */}
      <section className="py-8 bg-stone-900 text-white overflow-hidden whitespace-nowrap relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-900 to-transparent z-10" />
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <span className="text-sm uppercase tracking-[0.2em] font-bold px-4">
            {countries} • {countries}
          </span>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl mb-4">{t.categories.title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              {t.categories.desc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-md">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <a 
                      href={STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold flex items-center gap-2"
                    >
                      {t.categories.shopNow} {cat.title} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{cat.title}</h3>
                <p className="text-sm text-stone-500">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Farmasi Section */}
      <section id="about" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video lg:aspect-square">
              <img 
                src={images.about} 
                alt="Farmasi Heritage" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-8 -right-8 bg-rose-600 text-white p-8 rounded-full shadow-xl hidden lg:flex flex-col items-center justify-center w-32 h-32">
                <span className="text-3xl font-bold">70+</span>
                <span className="text-[10px] uppercase font-bold">{t.about.years}</span>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8">{t.about.title}</h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
                </p>
                <p>
                  {t.about.p3}
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-rose-600" />
                  <span className="font-bold text-stone-800">{t.about.stats[0]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-rose-600" />
                  <span className="font-bold text-stone-800">{t.about.stats[1]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-rose-600" />
                  <span className="font-bold text-stone-800">{t.about.stats[2]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-rose-600" />
                  <span className="font-bold text-stone-800">{t.about.stats[3]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-rose-900 rounded-[3rem] p-8 lg:p-20 text-white overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="font-serif text-4xl lg:text-6xl mb-8">{t.opportunity.title1} <br /><span className="italic text-rose-300">{t.opportunity.title2}</span></h2>
                <p className="text-xl text-rose-100/80 mb-10 leading-relaxed">
                  {t.opportunity.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-rose-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    {t.opportunity.registerBtn} <UserPlus className="w-5 h-5" />
                  </a>
                  <a 
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-700 transition-all flex items-center justify-center gap-2"
                  >
                    {t.opportunity.videoBtn} <Play className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-auto">
                <img 
                  src={images.opportunity} 
                  alt="Team Success" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-rose-800/50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-800 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-700 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl opacity-30" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-rose-600" />
                <span className="font-serif text-xl font-bold tracking-tight">FARMASI <span className="font-sans font-light text-stone-400">EUROPE</span></span>
              </div>
              <p className="text-stone-500 max-w-sm mb-6">
                {t.footer.desc}
              </p>
              <div className="flex gap-4">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-rose-600 hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={FACEBOOK_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-rose-600 hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={`mailto:${EMAIL_ADDRESS}`} 
                  className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-rose-600 hover:text-white transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">{t.footer.links}</h4>
              <ul className="space-y-4 text-stone-500 text-sm">
                <li><a href="#about" className="hover:text-rose-600 transition-colors">{t.nav.about}</a></li>
                <li><a href="#categories" className="hover:text-rose-600 transition-colors">{t.nav.products}</a></li>
                <li><a href="#opportunity" className="hover:text-rose-600 transition-colors">{t.nav.opportunity}</a></li>
                <li><a href={STORE_URL} className="hover:text-rose-600 transition-colors">{t.nav.shop}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">{t.footer.regions}</h4>
              <ul className="space-y-4 text-stone-500 text-sm">
                <li>Farmasi Nederland</li>
                <li>Farmasi Germany</li>
                <li>Farmasi Belgium</li>
                <li>Farmasi Europe</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-xs">
              © {new Date().getFullYear()} Farmasi Europe | Sara Abdeddine. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-stone-400">
              <a href="#" className="hover:text-stone-600">Privacy Policy</a>
              <a href="#" className="hover:text-stone-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
