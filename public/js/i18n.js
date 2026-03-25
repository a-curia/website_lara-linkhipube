/* ============================================================
   LINKHIPU — i18n translation engine
   Supports EN (default), FR, NL
   Usage: data-i18n="key" on any element
          data-i18n-attr="placeholder:key" for attributes
   Language stored in localStorage under 'lh_lang'
   ============================================================ */

const TRANSLATIONS = {

/* ── NAVIGATION ─────────────────────────────────────────────── */
"nav.home":            { en:"Home",                    fr:"Accueil",              nl:"Home" },
"nav.about":          { en:"About",                   fr:"À propos",             nl:"Over ons" },
"nav.services":       { en:"Services",                fr:"Services",             nl:"Diensten" },
"nav.testimonials":   { en:"Testimonials",            fr:"Témoignages",          nl:"Getuigenissen" },
"nav.contact":        { en:"Contact",                 fr:"Contact",              nl:"Contact" },
"nav.cloud":          { en:"Cloud & Automation",      fr:"Cloud & Automatisation",nl:"Cloud & Automatisering" },
"nav.data":           { en:"Data Services",           fr:"Services de données",  nl:"Datadiensten" },
"nav.appdev":         { en:"Application Development", fr:"Développement d'applications", nl:"Applicatieontwikkeling" },
"nav.webdev":         { en:"Web Development",         fr:"Développement web",    nl:"Webontwikkeling" },
"nav.pocs":           { en:"30Day POCs",              fr:"POC 30 jours",         nl:"30-Daagse POC's" },

/* ── COMMON BUTTONS / LABELS ─────────────────────────────────── */
"btn.consultation":   { en:"Book a Free Consultation", fr:"Réserver une consultation gratuite", nl:"Gratis consult boeken" },
"btn.explore":        { en:"Explore Our Services",    fr:"Explorer nos services", nl:"Onze diensten verkennen" },
"btn.quote":          { en:"Get a Free Quote",        fr:"Demander un devis gratuit", nl:"Gratis offerte aanvragen" },
"btn.learnmore":      { en:"Learn More",              fr:"En savoir plus",        nl:"Meer info" },
"btn.fulldetails":    { en:"Full details →",          fr:"Détails complets →",   nl:"Volledige details →" },
"btn.startpoc":       { en:"Start your POC →",        fr:"Démarrer votre POC →", nl:"Start uw POC →" },
"btn.about":          { en:"Learn About Us",          fr:"En savoir plus sur nous", nl:"Meer over ons" },
"btn.allservices":    { en:"All Services",            fr:"Tous les services",    nl:"Alle diensten" },
"btn.readmore":       { en:"Read our full story →",   fr:"Lire notre histoire →", nl:"Lees ons verhaal →" },
"btn.contactus":      { en:"Contact Us",              fr:"Nous contacter",       nl:"Neem contact op" },
"btn.send":           { en:"Send Message",            fr:"Envoyer le message",   nl:"Bericht versturen" },
"btn.assessment":     { en:"Book a Free Assessment",  fr:"Réserver une évaluation gratuite", nl:"Gratis beoordeling boeken" },
"btn.discuss":        { en:"Discuss Your Project",    fr:"Discuter de votre projet", nl:"Bespreek uw project" },
"btn.audit":          { en:"Get a Free Web Audit",    fr:"Obtenir un audit web gratuit", nl:"Gratis webaudit aanvragen" },
"btn.startpoc2":      { en:"Start Your POC Today",   fr:"Démarrez votre POC aujourd'hui", nl:"Start uw POC vandaag" },

/* ── SECTION LABELS ──────────────────────────────────────────── */
"label.about":        { en:"About LINKHIPU",          fr:"À propos de LINKHIPU", nl:"Over LINKHIPU" },
"label.whatwedo":     { en:"What We Do",              fr:"Ce que nous faisons",  nl:"Wat we doen" },
"label.clients":      { en:"What Clients Say",        fr:"Ce que disent nos clients", nl:"Wat klanten zeggen" },
"label.foundation":   { en:"Our Foundation",          fr:"Notre fondement",      nl:"Onze basis" },
"label.mission":      { en:"Mission & Vision",        fr:"Mission & Vision",     nl:"Missie & Visie" },
"label.story":        { en:"Our Story",               fr:"Notre histoire",       nl:"Ons verhaal" },
"label.accreditations":{ en:"Accreditations",         fr:"Accréditations",       nl:"Accreditaties" },
"label.services":     { en:"Our Services",            fr:"Nos services",         nl:"Onze diensten" },
"label.stack":        { en:"Technology Stack",        fr:"Pile technologique",   nl:"Technologiestack" },
"label.benefits":     { en:"Benefits",                fr:"Avantages",            nl:"Voordelen" },
"label.faq":          { en:"FAQ",                     fr:"FAQ",                  nl:"FAQ" },
"label.process":      { en:"The Process",             fr:"Le processus",         nl:"Het proces" },
"label.poctypes":     { en:"Popular POC Types",       fr:"Types de POC populaires", nl:"Populaire POC-types" },
"label.whois":        { en:"Who Is It For?",          fr:"Pour qui est-ce ?",    nl:"Voor wie is dit?" },
"label.whatis":       { en:"What Is a 30DayPOC?",    fr:"Qu'est-ce qu'un POC 30 jours ?", nl:"Wat is een 30-daagse POC?" },
"label.touch":        { en:"Get in Touch",            fr:"Prenez contact",       nl:"Neem contact op" },
"label.migration":    { en:"Cloud Migration",         fr:"Migration cloud",      nl:"Cloudmigratie" },
"label.cicd":         { en:"CI/CD & DevOps",          fr:"CI/CD & DevOps",       nl:"CI/CD & DevOps" },
"label.whycloud":     { en:"Why Move to the Cloud?", fr:"Pourquoi migrer vers le cloud ?", nl:"Waarom naar de cloud?" },
"label.whydata":      { en:"Why Data Services?",      fr:"Pourquoi les services de données ?", nl:"Waarom datadiensten?" },
"label.endtoend":     { en:"End-to-End Pipelines",   fr:"Pipelines de bout en bout", nl:"End-to-end pijplijnen" },
"label.dataservices": { en:"Our Data Services",       fr:"Nos services de données", nl:"Onze datadiensten" },
"label.smartapps":    { en:"Smart Applications",      fr:"Applications intelligentes", nl:"Slimme applicaties" },
"label.maintenance":  { en:"Maintenance & Integration", fr:"Maintenance & Intégration", nl:"Onderhoud & Integratie" },
"label.webdev":       { en:"Web Development",         fr:"Développement web",    nl:"Webontwikkeling" },
"label.perf":         { en:"Performance & SEO",       fr:"Performance & SEO",    nl:"Prestaties & SEO" },
"label.whywework":    { en:"Why Work With Us",        fr:"Pourquoi travailler avec nous ?", nl:"Waarom met ons samenwerken?" },

/* ── HERO (INDEX) ────────────────────────────────────────────── */
"hero.eyebrow":       { en:"Software Solutions & Digitalization Provider — Brussels, Belgium",
                        fr:"Fournisseur de solutions logicielles & numérisation — Bruxelles, Belgique",
                        nl:"Softwareoplossingen & Digitalisering — Brussel, België" },
"hero.h1a":           { en:"Simple Solutions",        fr:"Des solutions simples",  nl:"Eenvoudige oplossingen" },
"hero.h1b":           { en:"to Complex Problems",     fr:"à des problèmes complexes", nl:"voor complexe uitdagingen" },
"hero.sub":           { en:"LINKHIPU is your trusted technology partner in Brussels for cloud engineering, data analytics, and custom software — helping businesses of every size simplify IT, automate processes, and unlock the full potential of their data.",
                        fr:"LINKHIPU est votre partenaire technologique de confiance à Bruxelles pour l'ingénierie cloud, l'analyse de données et les logiciels sur mesure — aidant les entreprises de toutes tailles à simplifier leur informatique, automatiser leurs processus et exploiter pleinement leurs données.",
                        nl:"LINKHIPU is uw vertrouwde technologiepartner in Brussel voor cloud-engineering, data-analyse en maatwerksoftware — zodat bedrijven van elke omvang hun IT vereenvoudigen, processen automatiseren en het volledige potentieel van hun data benutten." },

/* ── ABOUT SECTION (INDEX) ───────────────────────────────────── */
"about.h2a":          { en:"IT Just Works.",           fr:"L'informatique, ça marche.", nl:"IT dat gewoon werkt." },
"about.h2b":          { en:"That's Our Promise.",      fr:"C'est notre promesse.",     nl:"Dat is onze belofte." },
"about.p1":           { en:"LINKHIPU S.R.L. is a software solutions and digitalization provider based in Brussels, Belgium. For over 19 years we have helped companies across Europe and the United States bridge the gap between their business goals and the technology needed to achieve them.",
                        fr:"LINKHIPU S.R.L. est un fournisseur de solutions logicielles et de numérisation basé à Bruxelles, Belgique. Depuis plus de 19 ans, nous aidons les entreprises d'Europe et des États-Unis à combler le fossé entre leurs objectifs commerciaux et la technologie nécessaire pour les atteindre.",
                        nl:"LINKHIPU S.R.L. is een aanbieder van softwareoplossingen en digitalisering, gevestigd in Brussel, België. Al meer dan 19 jaar helpen we bedrijven in Europa en de VS de kloof te overbruggen tussen hun zakelijke doelen en de technologie die daarvoor nodig is." },
"about.p2":           { en:"From cloud migration and DevOps automation to big data platforms and bespoke enterprise applications, our teams deliver solutions that are simple to understand, easy to maintain, and built to last.",
                        fr:"De la migration cloud et l'automatisation DevOps aux plateformes de big data et aux applications d'entreprise sur mesure, nos équipes livrent des solutions simples à comprendre, faciles à maintenir et durables.",
                        nl:"Van cloudmigratie en DevOps-automatisering tot big-data-platforms en bedrijfsapplicaties op maat: onze teams leveren oplossingen die eenvoudig te begrijpen, gemakkelijk te onderhouden en duurzaam zijn." },
"value.simplification": { en:"Simplification", fr:"Simplification", nl:"Vereenvoudiging" },
"value.simplification.desc": { en:"Clear, maintainable solutions your team can own.", fr:"Des solutions claires et maintenables que votre équipe peut posséder.", nl:"Heldere, onderhoudbare oplossingen waarvan uw team eigenaar kan zijn." },
"value.commitment":   { en:"Commitment", fr:"Engagement", nl:"Toewijding" },
"value.commitment.desc": { en:"Every deadline and promise honoured.", fr:"Chaque délai et promesse respectés.", nl:"Elke deadline en belofte nagekomen." },
"value.empathy":      { en:"Empathy", fr:"Empathie", nl:"Empathie" },
"value.empathy.desc": { en:"We listen first, design second.", fr:"Nous écoutons d'abord, concevons ensuite.", nl:"We luisteren eerst, daarna ontwerpen we." },
"value.leadership":   { en:"Leadership", fr:"Leadership", nl:"Leiderschap" },
"value.leadership.desc": { en:"We own outcomes, not just deliverables.", fr:"Nous assumons les résultats, pas seulement les livrables.", nl:"Wij zijn verantwoordelijk voor resultaten, niet alleen deliverables." },

/* ── SERVICES SECTION (INDEX) ────────────────────────────────── */
"svc.h2":             { en:"End-to-End Software & Cloud Services", fr:"Services logiciels & cloud de bout en bout", nl:"End-to-end software- en clouddiensten" },
"svc.sub":            { en:"A complete, integrated portfolio from cloud infrastructure to data intelligence and custom applications.", fr:"Un portefeuille complet et intégré allant de l'infrastructure cloud à l'intelligence des données et aux applications sur mesure.", nl:"Een volledig, geïntegreerd portfolio van cloudinfrastructuur tot data-intelligentie en maatwerkapplicaties." },
"svc.cloud.desc":     { en:"Scalable AWS, Azure, and GCP infrastructure. CI/CD pipelines, DevOps, SRE, and full automation.", fr:"Infrastructure scalable sur AWS, Azure et GCP. Pipelines CI/CD, DevOps, SRE et automatisation complète.", nl:"Schaalbare AWS-, Azure- en GCP-infrastructuur. CI/CD-pijplijnen, DevOps, SRE en volledige automatisering." },
"svc.data.desc":      { en:"Data warehouses, ETL/ELT pipelines, big data platforms, and BI dashboards.", fr:"Entrepôts de données, pipelines ETL/ELT, plateformes de big data et tableaux de bord BI.", nl:"Datawarehouses, ETL/ELT-pijplijnen, big-data-platforms en BI-dashboards." },
"svc.app.desc":       { en:"Custom business applications. Clean, documented, maintainable code your team can own.", fr:"Applications métier sur mesure. Code propre, documenté et maintenable que votre équipe peut posséder.", nl:"Zakelijke maatwerkapplicaties. Schone, gedocumenteerde, onderhoudbare code waarvan uw team eigenaar kan zijn." },
"svc.web.desc":       { en:"High-performance, SEO-optimised websites and e-commerce. Responsive and built for Core Web Vitals.", fr:"Sites web et e-commerce haute performance, optimisés pour le SEO. Responsive et conçus pour les Core Web Vitals.", nl:"Hoogperformante, SEO-geoptimaliseerde websites en e-commerce. Responsief en gebouwd voor Core Web Vitals." },
"svc.poc.desc":       { en:"Validate your technology idea in 30 days with a fully functional working prototype. Reduce investment risk and get a costed production roadmap before full-scale development.", fr:"Validez votre idée technologique en 30 jours avec un prototype fonctionnel complet. Réduisez le risque d'investissement et obtenez une feuille de route de production chiffrée avant le développement à grande échelle.", nl:"Valideer uw technologie-idee in 30 dagen met een volledig werkend prototype. Verminder investeringsrisico en krijg een begrote productieroadmap vóór volledige ontwikkeling." },

/* ── METRICS ─────────────────────────────────────────────────── */
"metric.projects":    { en:"Projects Delivered",      fr:"Projets livrés",       nl:"Opgeleverde projecten" },
"metric.satisfaction":{ en:"Client Satisfaction",     fr:"Satisfaction client",   nl:"Klanttevredenheid" },
"metric.experience":  { en:"Years of Experience",     fr:"Ans d'expérience",     nl:"Jaar ervaring" },
"metric.iso":         { en:"Internal Products",       fr:"Produits internes",    nl:"Interne producten" },

/* ── TESTIMONIALS ────────────────────────────────────────────── */
"testimonials.h2":    { en:"Client Testimonials",     fr:"Témoignages clients",  nl:"Klanttestimonials" },
"testimonials.sub":   { en:"Real feedback from professionals we have worked with across Belgium, Europe, and the United States.", fr:"Retours authentiques de professionnels avec lesquels nous avons travaillé en Belgique, en Europe et aux États-Unis.", nl:"Echte feedback van professionals waarmee we hebben samengewerkt in België, Europa en de Verenigde Staten." },

/* ── CTA BAND ────────────────────────────────────────────────── */
"cta.main.h2":        { en:"Ready to Transform Your Business?", fr:"Prêt à transformer votre entreprise ?", nl:"Klaar om uw bedrijf te transformeren?" },
"cta.main.p":         { en:"Whether you need cloud migration, a modern data platform, or a new digital product — LINKHIPU has the expertise to deliver it.", fr:"Que vous ayez besoin d'une migration cloud, d'une plateforme de données moderne ou d'un nouveau produit numérique — LINKHIPU a l'expertise pour y répondre.", nl:"Of u nu cloudmigratie, een modern dataplatform of een nieuw digitaal product nodig heeft — LINKHIPU heeft de expertise om het te leveren." },

/* ── TRUST BAR ───────────────────────────────────────────────── */
"trust.appdev":       { en:"Application Development", fr:"Développement d'applications", nl:"Applicatieontwikkeling" },
"trust.cloud":        { en:"Cloud & Automation",      fr:"Cloud & Automatisation", nl:"Cloud & Automatisering" },
"trust.data":         { en:"Big Data, BI & Analytics", fr:"Big Data, BI & Analytique", nl:"Big Data, BI & Analyse" },
"trust.web":          { en:"Web Development",         fr:"Développement web",    nl:"Webontwikkeling" },

/* ── ABOUT PAGE ──────────────────────────────────────────────── */
"about.hero.h1a":     { en:"We Build Technology That", fr:"Nous construisons la technologie qui", nl:"Wij bouwen technologie die" },
"about.hero.h1b":     { en:"Actually Works",           fr:"Fonctionne vraiment",  nl:"Echt werkt" },
"about.hero.sub":     { en:"LINKHIPU S.R.L. is a software solutions and digitalization provider based in Brussels, Belgium. For over 19 years we have helped businesses across Europe and the United States simplify their technology and grow with confidence.", fr:"LINKHIPU S.R.L. est un fournisseur de solutions logicielles et de numérisation basé à Bruxelles, Belgique. Depuis plus de 19 ans, nous aidons les entreprises d'Europe et des États-Unis à simplifier leur technologie et à se développer avec confiance.", nl:"LINKHIPU S.R.L. is een aanbieder van softwareoplossingen en digitalisering gevestigd in Brussel, België. Al meer dan 19 jaar helpen we bedrijven in Europa en de VS hun technologie te vereenvoudigen en vol vertrouwen te groeien." },
"about.story.h2a":    { en:"Born from a Desire to",   fr:"Né d'un désir de",     nl:"Ontstaan uit de wens om" },
"about.story.h2b":    { en:"Do Things Right",         fr:"Bien faire les choses", nl:"Het goed te doen" },
"about.story.p1":     { en:"LINKHIPU was founded by engineers tired of seeing companies struggle with bloated, poorly documented technology. The best solution is the simplest one that fully solves the problem.", fr:"LINKHIPU a été fondée par des ingénieurs lassés de voir des entreprises se battre avec des technologies gonflées et mal documentées. La meilleure solution est la plus simple qui résout pleinement le problème.", nl:"LINKHIPU werd opgericht door ingenieurs die het beu waren bedrijven te zien worstelen met opgezwollen, slecht gedocumenteerde technologie. De beste oplossing is de eenvoudigste die het probleem volledig oplost." },
"about.story.p2":     { en:"Starting with cloud engineering and data services, we expanded to serve international clients. Today our Brussels teams cover the full technology spectrum — cloud, DevOps, big data, BI, application development, and web solutions.", fr:"Partis de l'ingénierie cloud et des services de données, nous avons élargi notre offre pour servir des clients internationaux. Aujourd'hui, nos équipes bruxelloises couvrent tout le spectre technologique — cloud, DevOps, big data, BI, développement d'applications et solutions web.", nl:"Begonnen met cloud-engineering en datadiensten, breidden we uit om internationale klanten te bedienen. Vandaag bestrijken onze Brusselse teams het volledige technologiespectrum — cloud, DevOps, big data, BI, applicatieontwikkeling en weboplossingen." },
"about.mission.h2a":  { en:"Your Business Success",   fr:"Le succès de votre entreprise", nl:"Uw zakelijk succes" },
"about.mission.h2b":  { en:"Is Our Mission",          fr:"Est notre mission",    nl:"Is onze missie" },
"about.mission.p":    { en:"Deliver innovative, high-quality software solutions that genuinely improve our clients' businesses. We stay current with the latest technology, select the right tools, and transfer knowledge so your teams remain independent after every engagement.", fr:"Livrer des solutions logicielles innovantes et de haute qualité qui améliorent réellement les entreprises de nos clients. Nous nous tenons à jour avec les dernières technologies, sélectionnons les bons outils et transférons les connaissances pour que vos équipes restent indépendantes après chaque mission.", nl:"Innovatieve, kwalitatieve softwareoplossingen leveren die de bedrijven van onze klanten echt verbeteren. We blijven op de hoogte van de nieuwste technologie, kiezen de juiste tools en dragen kennis over zodat uw teams na elke opdracht zelfstandig blijven." },
"about.stat.experience": { en:"Years Experience",     fr:"Ans d'expérience",     nl:"Jaar ervaring" },
"about.stat.projects":{ en:"Projects Delivered",      fr:"Projets livrés",       nl:"Opgeleverde projecten" },
"about.stat.countries":{ en:"Countries Served",       fr:"Pays servis",          nl:"Bediende landen" },

/* ── CONTACT PAGE ────────────────────────────────────────────── */
"contact.hero.h1a":   { en:"Let's Talk About",        fr:"Parlons de",           nl:"Laten we praten over" },
"contact.hero.h1b":   { en:"Your Project",            fr:"Votre projet",         nl:"Uw project" },
"contact.hero.sub":   { en:"Free one-hour consulting session for every new client — no sales pitch, no obligation. A straightforward technical conversation with an experienced engineer.", fr:"Session de conseil d'une heure gratuite pour chaque nouveau client — sans argumentaire commercial, sans obligation. Une conversation technique directe avec un ingénieur expérimenté.", nl:"Gratis consultancyuur voor elke nieuwe klant — geen verkooppraatje, geen verplichting. Een eerlijk technisch gesprek met een ervaren ingenieur." },
"contact.h2a":        { en:"Contact",                 fr:"Contacter",            nl:"Contact" },
"contact.h2b":        { en:"LINKHIPU",                fr:"LINKHIPU",             nl:"LINKHIPU" },
"contact.intro":      { en:"Fill in the form and a member of our team will respond within one business day.", fr:"Remplissez le formulaire et un membre de notre équipe vous répondra dans un jour ouvrable.", nl:"Vul het formulier in en een teamlid reageert binnen één werkdag." },
"contact.email":      { en:"Email",                   fr:"E-mail",               nl:"E-mail" },
"contact.phone":      { en:"Phone",                   fr:"Téléphone",            nl:"Telefoon" },
"contact.office":     { en:"Office",                  fr:"Bureau",               nl:"Kantoor" },
"contact.hours":      { en:"Hours",                   fr:"Heures",               nl:"Openingstijden" },
"contact.hours.val":  { en:"Monday – Friday, 9:00 – 18:00 CET", fr:"Lundi – vendredi, 9h00 – 18h00 CET", nl:"Maandag – vrijdag, 9:00 – 18:00 CET" },
"contact.area":       { en:"Service Area",            fr:"Zone de service",      nl:"Werkgebied" },
"contact.area.val":   { en:"Belgium, Europe & Remote Worldwide", fr:"Belgique, Europe & Télétravail mondial", nl:"België, Europa & Wereldwijd op afstand" },
"contact.form.service":{ en:"Service of Interest",   fr:"Service souhaité",     nl:"Gewenste dienst" },
"contact.form.service.placeholder": { en:"Select a service…", fr:"Sélectionner un service…", nl:"Selecteer een dienst…" },
"contact.form.message":{ en:"How can we help?",      fr:"Comment pouvons-nous vous aider ?", nl:"Hoe kunnen we helpen?" },
"contact.form.message.placeholder": { en:"Describe your project, technology challenge, or question — no need to include your name or contact details here.", fr:"Décrivez votre projet, défi technologique ou question — inutile d'inclure votre nom ou coordonnées ici.", nl:"Beschrijf uw project, technologische uitdaging of vraag — u hoeft hier geen naam of contactgegevens op te geven." },
"contact.form.privacy":{ en:"This form collects no personally identifying information. For a direct conversation call +32-472-848-761 or email office@linkhipu.be.", fr:"Ce formulaire ne collecte aucune information personnelle identifiable. Pour une conversation directe, appelez le +32-472-848-761 ou envoyez un e-mail à office@linkhipu.be.", nl:"Dit formulier verzamelt geen persoonlijk identificeerbare informatie. Voor een direct gesprek bel +32-472-848-761 of e-mail office@linkhipu.be." },
"contact.success.h4": { en:"Message Received",       fr:"Message reçu",         nl:"Bericht ontvangen" },
"contact.success.p":  { en:"Thank you for contacting LINKHIPU. A member of our team will be in touch within one business day.", fr:"Merci d'avoir contacté LINKHIPU. Un membre de notre équipe vous contactera dans un jour ouvrable.", nl:"Bedankt voor uw bericht aan LINKHIPU. Een teamlid neemt binnen één werkdag contact met u op." },

/* ── SERVICE OPTIONS (SELECT) ────────────────────────────────── */
"svc.opt.cloud":      { en:"Cloud & Automation",     fr:"Cloud & Automatisation", nl:"Cloud & Automatisering" },
"svc.opt.data":       { en:"Data Services",           fr:"Services de données",  nl:"Datadiensten" },
"svc.opt.appdev":     { en:"Application Development", fr:"Développement d'applications", nl:"Applicatieontwikkeling" },
"svc.opt.webdev":     { en:"Web Development",         fr:"Développement web",    nl:"Webontwikkeling" },
"svc.opt.poc":        { en:"30-Day Proof of Concept", fr:"Preuve de concept 30 jours", nl:"30-daags proof of concept" },
"svc.opt.multiple":   { en:"Multiple Services",       fr:"Plusieurs services",   nl:"Meerdere diensten" },
"svc.opt.other":      { en:"Other / Not sure yet",    fr:"Autre / Pas encore sûr", nl:"Andere / Nog niet zeker" },

/* ── FOOTER ──────────────────────────────────────────────────── */
"footer.tagline":     { en:"Software Solutions & Digitalization Provider", fr:"Fournisseur de solutions logicielles & numérisation", nl:"Aanbieder van softwareoplossingen & digitalisering" },
"footer.desc":        { en:"Simple, high-quality technology services — Brussels, Belgium.", fr:"Des services technologiques simples et de haute qualité — Bruxelles, Belgique.", nl:"Eenvoudige, hoogwaardige technologiediensten — Brussel, België." },
"footer.services":    { en:"Services",                fr:"Services",             nl:"Diensten" },
"footer.company":     { en:"Company",                 fr:"Entreprise",           nl:"Bedrijf" },
"footer.legal":       { en:"Legal",                   fr:"Mentions légales",     nl:"Juridisch" },
"footer.aboutus":     { en:"About Us",                fr:"À propos de nous",     nl:"Over ons" },
"footer.privacy":     { en:"Privacy Policy",          fr:"Politique de confidentialité", nl:"Privacybeleid" },
"footer.terms":       { en:"Terms & Conditions",      fr:"Conditions générales", nl:"Algemene voorwaarden" },
"footer.cookies":     { en:"Cookies Policy",          fr:"Politique de cookies", nl:"Cookiebeleid" },
"footer.conduct":     { en:"Code of Conduct",         fr:"Code de conduite",     nl:"Gedragscode" },
"footer.disclaimer":  { en:"Disclaimer",              fr:"Avertissement",        nl:"Disclaimer" },

/* ── COOKIE BANNER ───────────────────────────────────────────── */
"cookie.text":        { en:"This website uses only <strong>strictly necessary cookies</strong> required for it to function. No tracking, analytics, or advertising cookies are used.", fr:"Ce site utilise uniquement des <strong>cookies strictement nécessaires</strong> à son fonctionnement. Aucun cookie de suivi, d'analyse ou publicitaire n'est utilisé.", nl:"Deze website gebruikt alleen <strong>strikt noodzakelijke cookies</strong> die nodig zijn voor de werking ervan. Er worden geen tracking-, analyse- of advertentiecookies gebruikt." },
"cookie.policy":      { en:"Cookie Policy",           fr:"Politique de cookies", nl:"Cookiebeleid" },
"cookie.privacy":     { en:"Privacy Policy",          fr:"Politique de confidentialité", nl:"Privacybeleid" },
"cookie.ok":          { en:"OK, I understand",        fr:"OK, j'ai compris",     nl:"OK, ik begrijp het" },
"cookie.settings":    { en:"Cookie Settings",         fr:"Paramètres des cookies", nl:"Cookie-instellingen" },

/* ── CLOUD PAGE ──────────────────────────────────────────────── */
"cloud.hero.h1a":     { en:"CI/CD, DevOps & Infrastructure", fr:"CI/CD, DevOps & Infrastructure", nl:"CI/CD, DevOps & Infrastructuur" },
"cloud.hero.h1b":     { en:"Built to Scale",          fr:"Conçu pour évoluer",   nl:"Gebouwd om te schalen" },
"cloud.hero.sub":     { en:"Enterprise-grade cloud infrastructure for businesses in Belgium and Europe. Lift-and-shift migrations to cloud-native architectures — GDPR-compliant security and observability built in.", fr:"Infrastructure cloud de niveau entreprise pour les entreprises en Belgique et en Europe. Migrations lift-and-shift vers des architectures cloud-natives — sécurité conforme RGPD et observabilité intégrées.", nl:"Cloud-infrastructuur van ondernemingsniveau voor bedrijven in België en Europa. Lift-and-shift-migraties naar cloud-native architecturen — GDPR-conforme beveiliging en observability ingebouwd." },
"cloud.cicd.h2a":     { en:"Continuous Integration &", fr:"Intégration continue &", nl:"Continue integratie &" },
"cloud.cicd.h2b":     { en:"Continuous Delivery",     fr:"Livraison continue",   nl:"Continue levering" },
"cloud.mig.h2a":      { en:"Migrate to the Cloud with", fr:"Migrez vers le cloud avec", nl:"Migreer naar de cloud met" },
"cloud.mig.h2b":      { en:"Zero Downtime",           fr:"Zéro interruption",    nl:"Nul downtime" },

/* ── DATA PAGE ───────────────────────────────────────────────── */
"data.hero.h1a":      { en:"From Raw Data to",        fr:"Des données brutes à", nl:"Van ruwe data naar" },
"data.hero.h1b":      { en:"Strategic Insight",       fr:"Insight stratégique",  nl:"Strategisch inzicht" },
"data.hero.sub":      { en:"LINKHIPU's data engineering teams help businesses across Belgium and Europe unlock the full strategic value of their data — modern data warehouses, real-time pipelines, and BI dashboards with GDPR-compliant governance.", fr:"Les équipes d'ingénierie des données de LINKHIPU aident les entreprises de Belgique et d'Europe à exploiter la pleine valeur stratégique de leurs données — entrepôts de données modernes, pipelines en temps réel et tableaux de bord BI avec une gouvernance conforme au RGPD.", nl:"LINKHIPU's data-engineeringteams helpen bedrijven in België en Europa de volledige strategische waarde van hun data te benutten — moderne datawarehouses, realtime pijplijnen en BI-dashboards met GDPR-conforme governance." },
"data.asset.h2a":     { en:"Data Is Your Most",       fr:"Les données sont votre", nl:"Data is uw meest" },
"data.asset.h2b":     { en:"Valuable Asset",          fr:"Actif le plus précieux", nl:"Waardevolle bezit" },

/* ── APP PAGE ────────────────────────────────────────────────── */
"app.hero.h1a":       { en:"Custom Software Built for", fr:"Logiciels sur mesure conçus pour", nl:"Maatwerksoftware gebouwd voor" },
"app.hero.h1b":       { en:"Your Business",           fr:"Votre entreprise",     nl:"Uw bedrijf" },
"app.hero.sub":       { en:"Custom business applications that solve real problems. From internal workflow automation and ERP integrations to customer-facing enterprise platforms — clean, documented, maintainable code your team can own.", fr:"Des applications métier sur mesure qui résolvent de vrais problèmes. De l'automatisation des flux de travail internes et des intégrations ERP aux plateformes d'entreprise orientées client — code propre, documenté, maintenable que votre équipe peut posséder.", nl:"Zakelijke maatwerkapplicaties die echte problemen oplossen. Van interne workflowautomatisering en ERP-integraties tot klantgerichte bedrijfsplatformen — schone, gedocumenteerde, onderhoudbare code waarvan uw team eigenaar kan zijn." },
"app.fit.h2a":        { en:"Applications That Fit",   fr:"Des applications adaptées à", nl:"Applicaties die passen bij" },
"app.fit.h2b":        { en:"Your Process",            fr:"Votre processus",      nl:"Uw proces" },
"app.mod.h2a":        { en:"Integrate & Modernise",   fr:"Intégrer & Moderniser", nl:"Integreren & Moderniseren" },
"app.mod.h2b":        { en:"Existing Systems",        fr:"Les systèmes existants", nl:"Bestaande systemen" },

/* ── WEB PAGE ────────────────────────────────────────────────── */
"web.hero.h1a":       { en:"Websites That Work as Hard", fr:"Des sites web qui travaillent aussi dur", nl:"Websites die even hard werken" },
"web.hero.h1b":       { en:"as You Do",              fr:"Que vous",             nl:"Als u" },
"web.hero.sub":       { en:"Professional, high-performance websites that convert visitors into clients and rank prominently in Belgian and European search results. Responsive, fast, accessible, and built to the highest SEO standards.", fr:"Des sites web professionnels et haute performance qui convertissent les visiteurs en clients et se classent en bonne position dans les résultats de recherche belges et européens. Responsive, rapides, accessibles et construits selon les normes SEO les plus élevées.", nl:"Professionele, hoogperformante websites die bezoekers omzetten in klanten en prominent scoren in Belgische en Europese zoekresultaten. Responsief, snel, toegankelijk en gebouwd volgens de hoogste SEO-normen." },
"web.rank.h2a":       { en:"Built to Rank and",       fr:"Conçu pour se positionner et", nl:"Gebouwd om te scoren en" },
"web.rank.h2b":       { en:"Built to Convert",        fr:"Convertir",            nl:"Converteren" },

/* ── POC PAGE ────────────────────────────────────────────────── */
"poc.hero.h1a":       { en:"Validate Before You",     fr:"Validez avant d'",     nl:"Valideer voordat u" },
"poc.hero.h1b":       { en:"Invest",                  fr:"Investir",             nl:"Investeert" },
"poc.hero.sub":       { en:"A fully functional, production-quality prototype in 30 days — giving you tangible evidence to make confident technology decisions and secure stakeholder buy-in before full-scale investment.", fr:"Un prototype entièrement fonctionnel et de qualité production en 30 jours — vous donnant des preuves tangibles pour prendre des décisions technologiques confiantes et obtenir l'adhésion des parties prenantes avant un investissement à grande échelle.", nl:"Een volledig functioneel prototype van productiekwaliteit in 30 dagen — met tastbaar bewijs om met vertrouwen technologiebeslissingen te nemen en instemming van stakeholders te krijgen vóór volledige investering." },
"poc.proto.h2a":      { en:"From Idea to Working Prototype", fr:"De l'idée au prototype fonctionnel", nl:"Van idee naar werkend prototype" },
"poc.proto.h2b":      { en:"in 30 Days",              fr:"en 30 jours",          nl:"in 30 dagen" },

/* ── SERVICES OVERVIEW PAGE ──────────────────────────────────── */
"svcpage.hero.h1a":   { en:"Software Services Tailored to", fr:"Services logiciels adaptés à", nl:"Softwarediensten op maat voor" },
"svcpage.hero.h1b":   { en:"Your Business",           fr:"Votre entreprise",     nl:"Uw bedrijf" },
"svcpage.hero.sub":   { en:"A comprehensive, end-to-end portfolio of software and technology services designed to work together and scale with your organisation — delivered by experienced teams in Brussels, Belgium.", fr:"Un portefeuille complet et intégré de services logiciels et technologiques conçu pour fonctionner ensemble et évoluer avec votre organisation — livré par des équipes expérimentées à Bruxelles, Belgique.", nl:"Een uitgebreid, end-to-end portfolio van software- en technologiediensten, ontworpen om samen te werken en mee te schalen met uw organisatie — geleverd door ervaren teams in Brussel, België." },
"svcpage.portfolio":  { en:"A Complete Technology Portfolio", fr:"Un portefeuille technologique complet", nl:"Een compleet technologieportfolio" },

/* ── BREADCRUMBS ─────────────────────────────────────────────── */
"bc.home":            { en:"Home",                    fr:"Accueil",              nl:"Home" },
"bc.services":        { en:"Services",                fr:"Services",             nl:"Diensten" },
"bc.legal":           { en:"Legal",                   fr:"Mentions légales",     nl:"Juridisch" },
"bc.about":           { en:"About",                   fr:"À propos",             nl:"Over ons" },
"bc.contact":         { en:"Contact",                 fr:"Contact",              nl:"Contact" },
"bc.cloud":           { en:"Cloud & Automation",      fr:"Cloud & Automatisation", nl:"Cloud & Automatisering" },
"bc.data":            { en:"Data Services",           fr:"Services de données",  nl:"Datadiensten" },
"bc.app":             { en:"Application Development", fr:"Développement d'applications", nl:"Applicatieontwikkeling" },
"bc.web":             { en:"Web Development",         fr:"Développement web",    nl:"Webontwikkeling" },
"bc.poc":             { en:"30Day POCs",              fr:"POC 30 jours",         nl:"30-Daagse POC's" },

/* ── STATS / BADGES ──────────────────────────────────────────── */
"badge.years":        { en:"Years of expertise",      fr:"Ans d'expertise",      nl:"Jaar expertise" },

/* ── ABOUT PAGE VALUES ───────────────────────────────────────── */
"val.simplification": { en:"Simplification",          fr:"Simplification",       nl:"Vereenvoudiging" },
"val.simplification.d":{ en:"We break down complex technical problems into clear, maintainable solutions your team can own and evolve independently.", fr:"Nous décomposons les problèmes techniques complexes en solutions claires et maintenables que votre équipe peut posséder et faire évoluer de manière indépendante.", nl:"We splitsen complexe technische problemen op in heldere, onderhoudbare oplossingen waarvan uw team eigenaar kan zijn en die ze zelfstandig kunnen verder ontwikkelen." },
"val.commitment":     { en:"Commitment",               fr:"Engagement",           nl:"Toewijding" },
"val.commitment.d":   { en:"When we make a promise — delivery date, quality, budget — we keep it. Every time.", fr:"Lorsque nous faisons une promesse — date de livraison, qualité, budget — nous la tenons. À chaque fois.", nl:"Als we een belofte maken — leveringsdatum, kwaliteit, budget — houden we die. Elke keer." },
"val.empathy":        { en:"Empathy",                  fr:"Empathie",             nl:"Empathie" },
"val.empathy.d":      { en:"We invest time understanding your business context and constraints before proposing any solution.", fr:"Nous investissons du temps à comprendre le contexte et les contraintes de votre entreprise avant de proposer toute solution.", nl:"We investeren tijd in het begrijpen van uw zakelijke context en beperkingen voordat we een oplossing voorstellen." },
"val.leadership":     { en:"Leadership",               fr:"Leadership",           nl:"Leiderschap" },
"val.leadership.d":   { en:"Full ownership from scoping to final handover with proactive communication throughout.", fr:"Responsabilité totale du cadrage à la remise finale avec une communication proactive tout au long.", nl:"Volledig eigenaarschap van scopingfase tot definitieve overdracht, met proactieve communicatie gedurende het hele traject." },
"cert.quality":       { en:"ISO 9001:2015 Quality Management", fr:"Management de la qualité ISO 9001:2015", nl:"ISO 9001:2015 Kwaliteitsmanagement" },
"cert.quality.d":     { en:"Consistent delivery processes and continuous improvement across all services.", fr:"Processus de livraison cohérents et amélioration continue de tous les services.", nl:"Consistente leveringsprocessen en continue verbetering in alle diensten." },
"cert.security":      { en:"ISO/IEC 27001 Information Security", fr:"Sécurité de l'information ISO/IEC 27001", nl:"ISO/IEC 27001 Informatiebeveiliging" },
"cert.security.d":    { en:"Certified security management with rigorous access controls and encryption on every project.", fr:"Gestion de la sécurité certifiée avec des contrôles d'accès rigoureux et un chiffrement sur chaque projet.", nl:"Gecertificeerd beveiligingsbeheer met strikte toegangscontroles en versleuteling op elk project." },
"cert.env":           { en:"ISO 14001:2015 Environmental", fr:"Environnemental ISO 14001:2015", nl:"ISO 14001:2015 Milieu" },
"cert.env.d":         { en:"Committed to minimising our environmental footprint through responsible practices.", fr:"Engagés à minimiser notre empreinte environnementale grâce à des pratiques responsables.", nl:"Toegewijd aan het minimaliseren van onze ecologische voetafdruk via verantwoordelijke praktijken." },
"cert.rba":           { en:"RBA Code of Conduct v6.0", fr:"Code de conduite RBA v6.0", nl:"RBA Gedragscode v6.0" },
"cert.rba.d":         { en:"Ethical labour practices and transparent business relationships across our supply chain.", fr:"Pratiques de travail éthiques et relations commerciales transparentes dans toute notre chaîne d'approvisionnement.", nl:"Ethische arbeidspraktijken en transparante zakelijke relaties in onze hele toeleveringsketen." },

/* ── ABOUT CTA ───────────────────────────────────────────────── */
"about.cta.h2":       { en:"Let's Start a Conversation", fr:"Commençons une conversation", nl:"Laten we een gesprek starten" },
"about.cta.p":        { en:"Free one-hour consulting session for new clients. Bring your challenge — we will bring the expertise.", fr:"Session de conseil d'une heure gratuite pour les nouveaux clients. Apportez votre défi — nous apporterons l'expertise.", nl:"Gratis consultancyuur voor nieuwe klanten. Breng uw uitdaging mee — wij brengen de expertise." },

/* ── SERVICES CTA ────────────────────────────────────────────── */
"svc.cta.p":          { en:"Contact us for a free one-hour consulting session and a no-obligation proposal.", fr:"Contactez-nous pour une session de conseil d'une heure gratuite et une proposition sans engagement.", nl:"Neem contact op voor een gratis consultancyuur en een vrijblijvend voorstel." },

/* ── LANGUAGE SWITCHER ───────────────────────────────────────── */
"lang.en":            { en:"EN", fr:"EN", nl:"EN" },
"lang.fr":            { en:"FR", fr:"FR", nl:"FR" },
"lang.nl":            { en:"NL", fr:"NL", nl:"NL" },

};

/* ── ENGINE ──────────────────────────────────────────────────── */
const I18N = {
  langs: ['en','fr','nl'],
  current: 'en',

  init() {
    // Detect from localStorage → browser → default en
    const stored = localStorage.getItem('lh_lang');
    const browser = navigator.language.split('-')[0].toLowerCase();
    this.current = stored || (this.langs.includes(browser) ? browser : 'en');
    this.apply();
    this.bindSwitcher();
  },

  t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[this.current] || entry.en || key;
  },

  apply() {
    // Set html lang attribute
    document.documentElement.lang = this.current;

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const raw = this.t(key);
      if (el.innerHTML !== raw) el.innerHTML = raw;
    });

    // Translate attributes: data-i18n-attr="placeholder:key,aria-label:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.getAttribute('data-i18n-attr').split(',').forEach(pair => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr.trim(), this.t(key.trim()));
      });
    });

    // Update switcher active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });

    // Update <title> if page has a data-i18n-title
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey) document.title = this.t(titleKey) + ' — LINKHIPU';
  },

  set(lang) {
    if (!this.langs.includes(lang)) return;
    this.current = lang;
    localStorage.setItem('lh_lang', lang);
    this.apply();
  },

  bindSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
