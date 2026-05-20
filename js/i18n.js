(function (global) {
  "use strict";

  var SITE_URL = "https://lilianalukash.github.io/JuliosWebsite";
  var STORAGE_KEY = "julios-lang";

  var translations = {
    pt: {
      "meta.index.title": "Julio's – Restaurante em Campo Pequeno, Lisboa",
      "meta.index.description":
        "Julio's em Campo Pequeno, Lisboa — cozinha portuguesa, tapas e pratos internacionais. Reserva mesa, descobre a ementa e vive noites de karaoke, quizzes e convívio multicultural.",
      "meta.index.keywords":
        "Julio's, restaurante Lisboa, Campo Pequeno, cozinha portuguesa, tapas, petiscos, restaurante internacional, reservas, Avenida Elias Garcia",
      "meta.menu.title": "Ementa — Julio's · Campo Pequeno, Lisboa",
      "meta.menu.description":
        "Consulta a ementa do Julio's: tábuas e petiscos, clássicos portugueses, arrozes, carnes, cocktails e doces da casa em Campo Pequeno, Lisboa.",

      "nav.about": "Sobre",
      "nav.gallery": "Sabores",
      "nav.events": "Eventos",
      "nav.menu": "Ementa",
      "nav.reservations": "Reservas",
      "nav.visit": "Visita-nos",
      "nav.back": "← Voltar",
      "lang.label": "Idioma",
      "lang.pt": "PT",
      "lang.en": "EN",

      "intro.location": "Campo Pequeno · Lisboa",
      "intro.cta": "Reservar mesa",
      "intro.aria": "Julio's — página inicial",

      "hero.tagline": "Lisboa · Campo Pequeno",
      "hero.title": "Senta-te.<br />O resto é com o Julio's.",
      "hero.subtitle":
        "Um espaço acolhedor, multicultural e cheio de autenticidade — onde cada cliente é recebido como um amigo e cada refeição é uma experiência para recordar.",
      "hero.cta": "Reservar mesa",
      "hero.meta1": "COZINHA PORTUGUESA",
      "hero.meta2": "TAPAS & INTERNACIONAL",
      "hero.meta3": "CONVÍVIO & CULTURA",
      "hero.img.main": "Mesa de petiscos no Julio's",
      "hero.img1": "Tábuas de enchidos",
      "hero.img2": "Arroz de marisco",
      "hero.img3": "Cocktail no bar",

      "about.kicker": "Sobre Julio's",
      "about.title": "Uma história de paixão e partilha",
      "about.lead":
        "Muito mais do que um restaurante, o Julio's é um espaço de convívio e cultura — onde cada visita é uma memória e cada cliente parte da nossa história.",
      "about.p1":
        "O Julio's nasceu da paixão pela gastronomia, pelas pessoas e pelas experiências que unem culturas à mesa. Fundado por Julio, que passou a sua infância em Tavira, no Algarve, o restaurante carrega consigo uma história de vida marcada por mais de três décadas dedicadas ao mundo da restauração e da cozinha internacional.",
      "about.p2":
        "Ao longo da sua trajetória, Julio viajou por vários países da América, Europa e África, onde teve a oportunidade de descobrir sabores, técnicas e tradições gastronómicas únicas. Cada experiência contribuiu para criar a identidade do Julio's: um espaço acolhedor, multicultural e cheio de autenticidade, onde cada cliente é recebido como um amigo e tratado como parte da família.",
      "about.p3":
        "Há 14 anos, Lisboa tornou-se o local escolhido para construir uma nova vida e um novo projeto. Foi aí que nasceu o primeiro Julio's, um restaurante criado com dedicação, espírito familiar e o objetivo de proporcionar momentos especiais através da comida, da música e da partilha. Com o passar dos anos, o restaurante cresceu, conquistou clientes de várias nacionalidades e tornou-se um ponto de encontro para a comunidade local e internacional.",
      "about.p4":
        "Hoje, o Julio's continua a expandir a sua história com a abertura de um novo espaço em Lagos, mantendo a mesma essência que o tornou especial desde o primeiro dia: boa comida, ambiente descontraído e experiências memoráveis.",
      "about.owner.label": "O Fundador",
      "about.owner.role": "Fundador de Julio's · Tavira, Algarve",
      "about.owner.bio":
        "Infância em Tavira, mais de três décadas na restauração e uma vida de viagens pela América, Europa e África — cada paragem deixou uma marca na cozinha e no espírito do Julio's. Seja em Lisboa ou em Lagos, todos são bem-vindos à família Julio's.",

      "gallery.kicker": "Sabores que falam por si",
      "gallery.title": "Do petisco ao prato internacional",
      "gallery.lead":
        "A carta combina sabores tradicionais portugueses, tapas e pratos internacionais cuidadosamente preparados para agradar a todos os gostos e celebrar a diversidade cultural que define o espírito do Julio's.",
      "gallery.c1": "Tábuas & Petiscos",
      "gallery.c2": "Clássicos Portugueses",
      "gallery.c3": "Arrozes & Mariscos",
      "gallery.c4": "Carnes Lentas",
      "gallery.c5": "Eventos & Grupos",
      "gallery.c6": "Cocktails de Assinatura",
      "gallery.c7": "Doces da Casa",
      "gallery.a1": "Tábua de queijos e enchidos",
      "gallery.a2": "Prato de bacalhau",
      "gallery.a3": "Arroz de marisco",
      "gallery.a4": "Entrecosto na tábua",
      "gallery.a5": "Mesa para eventos",
      "gallery.a6": "Cocktail no balcão",
      "gallery.a7": "Tiramisu",

      "events.kicker": "Eventos",
      "events.title": "Convívio e cultura à mesa",
      "events.lead":
        "Além da cozinha portuguesa e internacional, oferecemos diariamente atividades que aproximam pessoas de diferentes partes do mundo — boa comida, música e partilha num ambiente descontraído.",
      "events.e1.meta": "Semanal",
      "events.e1.title": "Noites de Karaoke",
      "events.e1.text":
        "Canta, ri e partilha a mesa com amigos e desconhecidos que se tornam família. Uma noite leve, multicultural e cheia de boa energia — à moda do Julio's.",
      "events.e2.meta": "Semanal · Quinta-feira",
      "events.e2.title": "Quizzes em Várias Línguas",
      "events.e2.text":
        "Joga connosco enquanto disfrutas de petiscos e bebidas. Quizzes em várias línguas que unem pessoas de diferentes nacionalidades numa competição amigável e cheia de gargalhadas.",
      "events.e3.meta": "Semanal · Domingo",
      "events.e3.title": "Jogos de Tabuleiro",
      "events.e3.text":
        "Escolhe um jogo, reúne-te com os teus amigos e passa uma tarde ou noite de pura diversão, com snacks, bebidas e o ambiente acolhedor que define o Julio's.",
      "events.e4.meta": "Por marcação",
      "events.e4.title": "Eventos Privados & Grupos",
      "events.e4.text":
        "Planeia o teu evento connosco. Desde reuniões até celebrações, oferecemos espaço acolhedor, menu personalizável e atendimento dedicado para tornar a tua ocasião inesquecível.",

      "reservations.kicker": "Reservas",
      "reservations.title": "Reserva a tua mesa",
      "reservations.lead":
        "Preenche os dados abaixo e envia o pedido diretamente por WhatsApp. Confirmamos a disponibilidade o mais rápido possível.",
      "reservations.form.title": "Pedido de reserva",
      "reservations.form.intro":
        "Indica a data, hora e número de pessoas. Para grupos com mais de 10 pessoas, menciona-o na mensagem.",
      "reservations.form.name": "Nome",
      "reservations.form.phone": "Telefone",
      "reservations.form.date": "Data",
      "reservations.form.time": "Hora",
      "reservations.form.guests": "Número de pessoas",
      "reservations.form.namePh": "O teu nome",
      "reservations.form.phonePh": "+351 900 000 000",
      "reservations.form.guestsPh": "Ex.: 4",
      "reservations.form.submit": "Enviar por WhatsApp",
      "reservations.form.note":
        "Serás redirecionado para o WhatsApp com a mensagem pronta.",
      "reservations.whatsapp":
        "Olá! Gostaria de fazer uma reserva no Julio's.\n\nNome: {name}\nTelefone: {phone}\nData: {date}\nHora: {time}\nNúmero de pessoas: {guests}",

      "visit.kicker": "Visita-nos",
      "visit.title": "Julio's · Campo Pequeno",
      "visit.address.label": "Morada",
      "visit.address":
        "Avenida Elias Garcia, 19B<br />1000-147 Lisboa · Campo Pequeno",
      "visit.directions": "Como chegar",
      "visit.hours.label": "Horário",
      "visit.hours":
        "Segunda a Sexta: 12h00–00h00<br />Sábado: 18h00–00h00<br />Domingo: Encerrado",
      "visit.contact.label": "Contacto",
      "visit.map.aria": "Mapa — Julio's em Campo Pequeno",
      "visit.popup.directions": "Como chegar",

      "menuSection.kicker": "Ementa",
      "menuSection.title": "Descobre a nossa gastronomia",
      "menuSection.lead":
        "Sabores tradicionais portugueses, tapas e pratos internacionais — explora a carta completa e descobre o que torna cada refeição no Julio's uma experiência para recordar.",
      "menuSection.cta": "Consultar Ementa",

      "menuPage.kicker": "Ementa",
      "menuPage.title": "Descobre o Nosso Menu",
      "menuPage.lead":
        "Petiscos, pratos tradicionais e cocktails criados com paixão pela gastronomia portuguesa e internacional.",

      "menu.sec.boards": "Tábuas & Petiscos",
      "menu.sec.classics": "Clássicos Portugueses",
      "menu.sec.seafood": "Arrozes & Mariscos",
      "menu.sec.meats": "Carnes Lentas",
      "menu.sec.cocktails": "Cocktails de Assinatura",
      "menu.sec.desserts": "Doces da Casa",
      "menu.sec.drinks": "Bebidas",

      "footer.copy": "© Julio's · Lisboa & Lagos",
      "footer.privacy": "Política de Privacidade",
      "footer.terms": "Termos & Condições"
    },
    en: {
      "meta.index.title": "Julio's – Restaurant in Campo Pequeno, Lisbon",
      "meta.index.description":
        "Julio's in Campo Pequeno, Lisbon — Portuguese cuisine, tapas and international dishes. Book a table, explore the menu and enjoy karaoke nights, quizzes and a welcoming multicultural atmosphere.",
      "meta.index.keywords":
        "Julio's, Lisbon restaurant, Campo Pequeno, Portuguese food, tapas, petiscos, international restaurant, reservations, Avenida Elias Garcia",
      "meta.menu.title": "Menu — Julio's · Campo Pequeno, Lisbon",
      "meta.menu.description":
        "Browse Julio's menu: boards & petiscos, Portuguese classics, rice dishes, meats, cocktails and house desserts in Campo Pequeno, Lisbon.",

      "nav.about": "About",
      "nav.gallery": "Flavours",
      "nav.events": "Events",
      "nav.menu": "Menu",
      "nav.reservations": "Book",
      "nav.visit": "Visit us",
      "nav.back": "← Back",
      "lang.label": "Language",
      "lang.pt": "PT",
      "lang.en": "EN",

      "intro.location": "Campo Pequeno · Lisbon",
      "intro.cta": "Book a table",
      "intro.aria": "Julio's — home",

      "hero.tagline": "Lisbon · Campo Pequeno",
      "hero.title": "Take a seat.<br />Julio's takes care of the rest.",
      "hero.subtitle":
        "A welcoming, multicultural space full of authenticity — where every guest is treated like a friend and every meal is an experience to remember.",
      "hero.cta": "Book a table",
      "hero.meta1": "PORTUGUESE CUISINE",
      "hero.meta2": "TAPAS & INTERNATIONAL",
      "hero.meta3": "COMMUNITY & CULTURE",
      "hero.img.main": "Petiscos table at Julio's",
      "hero.img1": "Charcuterie boards",
      "hero.img2": "Seafood rice",
      "hero.img3": "Cocktail at the bar",

      "about.kicker": "About Julio's",
      "about.title": "A story of passion and sharing",
      "about.lead":
        "Much more than a restaurant, Julio's is a place for community and culture — where every visit becomes a memory and every guest becomes part of our story.",
      "about.p1":
        "Julio's was born from a passion for gastronomy, people and the experiences that bring cultures together around the table. Founded by Julio, who spent his childhood in Tavira in the Algarve, the restaurant carries a life story shaped by more than three decades dedicated to restaurants and international cuisine.",
      "about.p2":
        "Throughout his journey, Julio travelled across countries in the Americas, Europe and Africa, discovering unique flavours, techniques and culinary traditions. Each experience helped shape Julio's identity: a welcoming, multicultural and authentic space where every guest is received as a friend and treated as family.",
      "about.p3":
        "Fourteen years ago, Lisbon became the place chosen to build a new life and a new project. That is where the first Julio's was born — a restaurant created with dedication, a family spirit and the goal of offering special moments through food, music and sharing. Over the years, the restaurant grew, won guests from many nationalities and became a meeting point for the local and international community.",
      "about.p4":
        "Today, Julio's continues to expand its story with a new location in Lagos, keeping the same essence that made it special from day one: great food, a relaxed atmosphere and memorable experiences.",
      "about.owner.label": "The Founder",
      "about.owner.role": "Founder of Julio's · Tavira, Algarve",
      "about.owner.bio":
        "A childhood in Tavira, more than three decades in hospitality and a life of travel across the Americas, Europe and Africa — every stop left its mark on Julio's kitchen and spirit. Whether in Lisbon or Lagos, everyone is welcome to the Julio's family.",

      "gallery.kicker": "Flavours that speak for themselves",
      "gallery.title": "From petiscos to international plates",
      "gallery.lead":
        "Our menu combines traditional Portuguese flavours, tapas and international dishes carefully prepared to suit every taste and celebrate the cultural diversity that defines Julio's spirit.",
      "gallery.c1": "Boards & Petiscos",
      "gallery.c2": "Portuguese Classics",
      "gallery.c3": "Rice & Seafood",
      "gallery.c4": "Slow-cooked Meats",
      "gallery.c5": "Events & Groups",
      "gallery.c6": "Signature Cocktails",
      "gallery.c7": "House Desserts",
      "gallery.a1": "Cheese and charcuterie board",
      "gallery.a2": "Codfish dish",
      "gallery.a3": "Seafood rice",
      "gallery.a4": "Ribs on the board",
      "gallery.a5": "Table for events",
      "gallery.a6": "Cocktail at the bar",
      "gallery.a7": "Tiramisu",

      "events.kicker": "Events",
      "events.title": "Community and culture at the table",
      "events.lead":
        "Beyond Portuguese and international cuisine, we offer daily activities that bring people from different parts of the world together — good food, music and sharing in a relaxed atmosphere.",
      "events.e1.meta": "Weekly",
      "events.e1.title": "Karaoke Nights",
      "events.e1.text":
        "Sing, laugh and share the table with friends and strangers who become family. A light, multicultural night full of good energy — the Julio's way.",
      "events.e2.meta": "Weekly · Thursday",
      "events.e2.title": "Multilingual Quizzes",
      "events.e2.text":
        "Play with us while enjoying petiscos and drinks. Quizzes in several languages that bring together people from different nationalities in friendly competition and plenty of laughter.",
      "events.e3.meta": "Weekly · Sunday",
      "events.e3.title": "Board Game Nights",
      "events.e3.text":
        "Pick a game, gather your friends and spend an afternoon or evening of pure fun with snacks, drinks and the welcoming atmosphere that defines Julio's.",
      "events.e4.meta": "By appointment",
      "events.e4.title": "Private Events & Groups",
      "events.e4.text":
        "Plan your event with us. From meetings to celebrations, we offer a welcoming space, a customisable menu and dedicated service to make your occasion unforgettable.",

      "reservations.kicker": "Reservations",
      "reservations.title": "Book your table",
      "reservations.lead":
        "Fill in the details below and send your request directly via WhatsApp. We will confirm availability as soon as possible.",
      "reservations.form.title": "Reservation request",
      "reservations.form.intro":
        "Please indicate the date, time and number of guests. For groups of more than 10 people, mention it in the message.",
      "reservations.form.name": "Name",
      "reservations.form.phone": "Phone",
      "reservations.form.date": "Date",
      "reservations.form.time": "Time",
      "reservations.form.guests": "Number of guests",
      "reservations.form.namePh": "Your name",
      "reservations.form.phonePh": "+351 900 000 000",
      "reservations.form.guestsPh": "e.g. 4",
      "reservations.form.submit": "Send via WhatsApp",
      "reservations.form.note":
        "You will be redirected to WhatsApp with a ready-made message.",
      "reservations.whatsapp":
        "Hello! I would like to make a reservation at Julio's.\n\nName: {name}\nPhone: {phone}\nDate: {date}\nTime: {time}\nNumber of guests: {guests}",

      "visit.kicker": "Visit us",
      "visit.title": "Julio's · Campo Pequeno",
      "visit.address.label": "Address",
      "visit.address":
        "Avenida Elias Garcia, 19B<br />1000-147 Lisbon · Campo Pequeno",
      "visit.directions": "Get directions",
      "visit.hours.label": "Opening hours",
      "visit.hours":
        "Monday to Friday: 12:00–00:00<br />Saturday: 18:00–00:00<br />Sunday: Closed",
      "visit.contact.label": "Contact",
      "visit.map.aria": "Map — Julio's in Campo Pequeno",
      "visit.popup.directions": "Get directions",

      "menuSection.kicker": "Menu",
      "menuSection.title": "Discover our cuisine",
      "menuSection.lead":
        "Traditional Portuguese flavours, tapas and international dishes — explore the full menu and discover what makes every meal at Julio's an experience to remember.",
      "menuSection.cta": "View Menu",

      "menuPage.kicker": "Menu",
      "menuPage.title": "Discover Our Menu",
      "menuPage.lead":
        "Petiscos, traditional dishes and cocktails created with a passion for Portuguese and international gastronomy.",

      "menu.sec.boards": "Boards & Petiscos",
      "menu.sec.classics": "Portuguese Classics",
      "menu.sec.seafood": "Rice & Seafood",
      "menu.sec.meats": "Slow-cooked Meats",
      "menu.sec.cocktails": "Signature Cocktails",
      "menu.sec.desserts": "House Desserts",
      "menu.sec.drinks": "Drinks",

      "footer.copy": "© Julio's · Lisbon & Lagos",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms & Conditions"
    }
  };

  var currentLang = "pt";
  var mapMarker = null;

  function t(key) {
    var pack = translations[currentLang] || translations.pt;
    return pack[key] != null ? pack[key] : translations.pt[key] || key;
  }

  function getInitialLang() {
    var params = new URLSearchParams(global.location.search);
    var fromUrl = params.get("lang");
    if (fromUrl === "pt" || fromUrl === "en") return fromUrl;
    try {
      var stored = global.localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en") return stored;
    } catch (e) {}
    var browser = (global.navigator.language || "").toLowerCase();
    if (browser.indexOf("pt") === 0) return "pt";
    return "en";
  }

  function pagePath() {
    var path = global.location.pathname.split("/").pop() || "index.html";
    return path === "" ? "index.html" : path;
  }

  function pageUrl(lang) {
    var base = SITE_URL + "/" + (pagePath() === "index.html" ? "" : pagePath());
    base = base.replace(/\/$/, "") || SITE_URL + "/";
    return base + "?lang=" + lang;
  }

  function updateMeta(page) {
    var titleKey = page === "menu" ? "meta.menu.title" : "meta.index.title";
    var descKey =
      page === "menu" ? "meta.menu.description" : "meta.index.description";
    document.title = t(titleKey);

    setMetaContent("meta-description", t(descKey));
    setMetaContent("og-title", t(titleKey));
    setMetaContent("og-description", t(descKey));
    setMetaContent("twitter-title", t(titleKey));
    setMetaContent("twitter-description", t(descKey));

    document.documentElement.lang = currentLang === "pt" ? "pt" : "en";

    var canonical = document.getElementById("canonical-link");
    if (canonical) canonical.href = pageUrl(currentLang);

    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.content = currentLang === "pt" ? "pt_PT" : "en_GB";
    }

    if (page !== "menu") {
      setMetaContent("meta-keywords", t("meta.index.keywords"));
    }
  }

  function setMetaContent(id, value) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("content", value);
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.alt = t(el.getAttribute("data-i18n-alt"));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    updateMapPopup();
    updateSchema();
  }

  function updateMapPopup() {
    if (!mapMarker || !global.L) return;
    var html =
      "<strong>Julio's</strong><br>Avenida Elias Garcia, 19B, 1000-147 " +
      (currentLang === "pt" ? "Lisboa" : "Lisbon") +
      '<br><a href="https://www.google.com/maps/search/?api=1&query=38.7394912,-9.1441767" target="_blank" rel="noopener">' +
      t("visit.popup.directions") +
      "</a>";
    mapMarker.bindPopup(html);
  }

  function updateSchema() {
    var script = document.getElementById("schema-restaurant");
    if (!script) return;

    var schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Julio's",
      image: SITE_URL + "/img/IMG_20260221_204051.png",
      url: SITE_URL + "/",
      telephone: "+351916475896",
      priceRange: "€€",
      servesCuisine: ["Portuguese", "International", "Tapas"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Elias Garcia, 19B",
        addressLocality: "Lisboa",
        postalCode: "1000-147",
        addressCountry: "PT"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.7394912,
        longitude: -9.1441767
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "12:00",
          closes: "00:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "18:00",
          closes: "00:00"
        }
      ],
      description: t("meta.index.description"),
      inLanguage: [currentLang === "pt" ? "pt-PT" : "en-GB"],
      sameAs: ["https://github.com/LilianaLukash/JuliosWebsite"]
    };

    script.textContent = JSON.stringify(schema);
  }

  function setLang(lang) {
    if (lang !== "pt" && lang !== "en") return;
    currentLang = lang;
    try {
      global.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyTranslations();
    var page = document.body.getAttribute("data-page") || "index";
    updateMeta(page);
  }

  function bindLangSwitcher() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function bindReservationForm() {
    var form = document.getElementById("reservation-form");
    if (!form) return;

    var dateInput = document.getElementById("res-date");
    if (dateInput) {
      dateInput.min = new Date().toISOString().split("T")[0];
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("res-name").value.trim();
      var phone = document.getElementById("res-phone").value.trim();
      var date = document.getElementById("res-date").value;
      var time = document.getElementById("res-time").value;
      var guests = document.getElementById("res-guests").value.trim();

      var formattedDate = date;
      if (date) {
        var parts = date.split("-");
        if (parts.length === 3) {
          formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];
        }
      }

      var template = t("reservations.whatsapp");
      var message = template
        .replace("{name}", name)
        .replace("{phone}", phone)
        .replace("{date}", formattedDate)
        .replace("{time}", time)
        .replace("{guests}", guests);

      var url =
        "https://wa.me/351916475896?text=" + encodeURIComponent(message);
      global.open(url, "_blank", "noopener");
    });
  }

  function registerMapMarker(marker) {
    mapMarker = marker;
    updateMapPopup();
    if (marker.openPopup) marker.openPopup();
  }

  function init(options) {
    options = options || {};
    currentLang = getInitialLang();
    bindLangSwitcher();
    bindReservationForm();
    applyTranslations();
    updateMeta(options.page || "index");

    if (typeof options.onMapReady === "function") {
      options.onMapReady(registerMapMarker);
    }
  }

  global.JuliosI18n = {
    init: init,
    setLang: setLang,
    t: t,
    registerMapMarker: registerMapMarker,
    SITE_URL: SITE_URL
  };
})(window);
