(function (global) {
  "use strict";

  var SITE_URL = "https://julios.pt";
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
        "Consulta a ementa do Julio's: salgados, tábuas, petiscos, pratos principais e sobremesas em Campo Pequeno, Lisboa.",
      "meta.promos.title": "Ofertas Especiais — Julio's · Campo Pequeno, Lisboa",
      "meta.promos.description":
        "Marisco para Dois (28,99€) e Wine & Petiscos Experience (47,99€). Reserva as ofertas especiais do Julio's por WhatsApp.",

      "nav.about": "Sobre",
      "nav.secrets": "Segredos",
      "nav.promos": "Ofertas",
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

      "promos.kicker": "Ofertas Especiais",
      "promos.title": "Experiências para partilhar",
      "promos.lead":
        "Combinações especiais de marisco, petiscos e vinho — perfeitas para dois ou para uma noite completa à mesa.",
      "promos.view": "Ver oferta",
      "promos.order": "Reservar oferta",
      "promos.page.title": "Ofertas Especiais",
      "promos.page.lead":
        "Escolhe a experiência ideal e envia o pedido por WhatsApp. Confirmamos a disponibilidade o mais rápido possível.",
      "promos.marisco.title": "Marisco para Dois",
      "promos.marisco.includes":
        "Gambas ao Alho · Amêijoas à Bulhão Pato · Arroz · 2 copos de vinho branco",
      "promos.marisco.desc":
        "Uma seleção generosa de marisco para partilhar a dois, acompanhada de arroz e dois copos de vinho branco. Ideal para uma noite especial no Julio's.",
      "promos.wine.title": "Wine & Petiscos Experience",
      "promos.wine.includes":
        "Garrafa de vinho branco · Gambas ao Alho · Amêijoas à Bulhão Pato · Asas de Frango · Pimentos Padrón · Batatas Fritas",
      "promos.wine.desc":
        "A experiência completa: uma garrafa de vinho branco com os nossos petiscos mais populares — marisco, asas de frango, pimentos e batatas fritas. Perfeita para partilhar.",
      "promos.marisco.whatsapp":
        "Olá! Gostaria de reservar a oferta \"Marisco para Dois\" (28,99€).",
      "promos.wine.whatsapp":
        "Olá! Gostaria de reservar a oferta \"Wine & Petiscos Experience\" (47,99€).",
      "promos.marisco.alt": "Marisco para dois no Julio's",
      "promos.wine.alt": "Wine & Petiscos Experience no Julio's",

      "meta.secrets.title": "Os Segredos da Cozinha Portuguesa — Julio's · Campo Pequeno, Lisboa",
      "meta.secrets.description":
        "Os Segredos da Cozinha Portuguesa no Julio's: Tábua Mista, Amêijoas à Bulhão Pato e Pimentos Padrón por 34,99€. Campo Pequeno, Lisboa.",

      "secrets.kicker": "Segredos da Cozinha Portuguesa",
      "secrets.title": "Três pratos que todo português conhece",
      "secrets.lead":
        "Nem toda a comida portuguesa é bacalhau e pastel de nata. Descobre três favoritos locais partilhados à mesa há gerações: amêijoas frescas com alho e coentros, enchidos e queijos fumados, e os famosos pimentos de Padrón — onde um em cada dez pode surpreender-te.",
      "secrets.price": "Prova os três juntos por apenas 34,99€",
      "secrets.includes.title": "Inclui:",
      "secrets.includes.1": "Tábua Mista (enchidos, queijos e charcutaria)",
      "secrets.includes.2": "Amêijoas à Bulhão Pato",
      "secrets.includes.3": "Pimentos Padrón",
      "secrets.discover": "Descobre a história",
      "secrets.readmore": "Ler mais",
      "secrets.cardBtn": "Ver história",
      "secrets.promoBtn": "Os Três Segredos — 34,99€",
      "secrets.order": "Reservar experiência",
      "secrets.whatsapp":
        "Olá! Gostaria de reservar «Os Três Segredos» (34,99€).",
      "secrets.hero.alt": "Os Três Segredos no Julio's",
      "secrets.ameijoas.alt": "Amêijoas à Bulhão Pato",
      "secrets.padron.alt": "Pimentos Padrón",
      "secrets.tabua.alt": "Tábua Mista de enchidos e queijos",

      "secrets.page.title": "Os Segredos da Cozinha Portuguesa",
      "secrets.tradition.title": "Uma tradição que vale a pena preservar",
      "secrets.tradition.p1":
        "Encontrar comida portuguesa verdadeiramente tradicional está a tornar-se mais difícil a cada ano.",
      "secrets.tradition.p2":
        "Por toda a Europa, restaurantes de família antigos desaparecem, substituídos por menus internacionais quase idênticos quer estejas em Lisboa, Berlim, Londres ou Amesterdão.",
      "secrets.tradition.p3": "O resultado é conveniente. Mas algo importante perde-se.",
      "secrets.tradition.p4":
        "As receitas, histórias e sabores com que gerações cresceram desaparecem lentamente do quotidiano.",
      "secrets.tradition.p5":
        "No Julio's, acreditamos que estas tradições valem a pena manter vivas. Não num museu. Não atrás de vidro. Mas à mesa, exatamente onde pertencem.",
      "secrets.tradition.p6":
        "«Os Três Segredos» reúne três clássicos que contam a história de Portugal melhor do que qualquer guia.",

      "secrets.ameijoas.title": "Amêijoas à Bulhão Pato",
      "secrets.ameijoas.subtitle": "O prato que leva o nome de um poeta",
      "secrets.ameijoas.p1":
        "Um dos pratos de marisco mais queridos de Portugal leva o nome do poeta do século XIX Raimundo António de Bulhão Pato.",
      "secrets.ameijoas.p2":
        "Ninguém sabe ao certo se criou a receita ou se apenas adorava comê-la, mas o seu nome ficou ligado a ela para sempre.",
      "secrets.ameijoas.p3":
        "Amêijoas frescas são cozinhadas com azeite, alho e generosas quantidades de coentros — uma erva que os cozinheiros portugueses adoram há séculos, especialmente no sul.",
      "secrets.ameijoas.p4":
        "A receita é simples. E é exatamente esse o ponto. A cozinha portuguesa nunca foi sobre esconder ingredientes — é sobre deixar os bons ingredientes falarem por si.",
      "secrets.ameijoas.p5":
        "Tradicionalmente coloca-se um cesto de pão por perto, porque deixar o molho para trás seria quase um crime.",

      "secrets.padron.title": "Pimentos Padrón",
      "secrets.padron.subtitle": "O pequeno jogo português",
      "secrets.padron.p1":
        "Estes pequenos pimentos chegaram à Península Ibérica há séculos e tornaram-se companheiros favoritos de longos almoços em família e encontros com amigos.",
      "secrets.padron.p2": "A maioria é doce. Alguns são surpreendentemente picantes. Ninguém sabe qual vai sair.",
      "secrets.padron.quote": "«Uns picam, outros não.»",
      "secrets.padron.p3": "Cada prato torna-se um jogo. Alguém leva sempre o picante. Todos riem.",
      "secrets.padron.p4":
        "A tradição sobreviveu gerações porque transforma um simples petisco numa experiência partilhada. E a comida portuguesa sempre foi tanto sobre pessoas como sobre receitas.",

      "secrets.tabua.title": "Tábua Mista",
      "secrets.tabua.subtitle": "Um sabor do campo",
      "secrets.tabua.p1":
        "Antes de Portugal se tornar famoso pelo turismo, a maioria das pessoas vivia muito mais perto da terra.",
      "secrets.tabua.p2":
        "As famílias criavam animais, curavam carnes, faziam queijos e preservavam comida para os longos invernos. Essas tradições ainda vivem na melhor charcutaria do país.",
      "secrets.tabua.p3":
        "Uma tábua mista tradicional reúne presunto curado, enchidos regionais e queijos portugueses numa só tábua.",
      "secrets.tabua.p4":
        "Muitos dos melhores enchidos vêm de porcos ibéricos de raça negra que vagueiam por bosques de sobreiros e se alimentam naturalmente de bolotas.",
      "secrets.tabua.p5":
        "Este método lento e tradicional cria o sabor rico e a textura delicada que tornaram o presunto ibérico famoso em toda a Europa. Os queijos contam a sua própria história — dezenas de variedades regionais, de queijos de montanha amanteigados a queijos curados firmes feitos com métodos que mudaram pouco ao longo dos séculos.",

      "secrets.experience.title": "Experimenta os três juntos",
      "secrets.experience.lead":
        "Para visitantes, é uma das formas mais fáceis de descobrir sabores portugueses autênticos. Para locais, é um lembrete de tradições que valem a pena manter.",
      "secrets.experience.offer": "Os Três Segredos — 34,99€",
      "secrets.experience.formal": "Experiência de Entradas Portuguesas",
      "secrets.experience.closing":
        "Porque a melhor forma de compreender Portugal não é lendo sobre ele. É partilhando-o à mesa.",

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
      "reservations.whatsapp.lagos":
        "Olá! Gostaria de fazer uma reserva no Julio's Lagos.\n\nNome: {name}\nTelefone: {phone}\nData: {date}\nHora: {time}\nNúmero de pessoas: {guests}",

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
        "Salgados, tábuas, petiscos, pratos principais e sobremesas — a carta atual do Julio's em Campo Pequeno.",

      "menu.sec.salgados": "Salgados",
      "menu.sec.boards": "Tábuas",
      "menu.sec.petiscos": "Petiscos",
      "menu.sec.burgers": "Hambúrgueres",
      "menu.sec.mains": "Pratos Principais",
      "menu.sec.pizza": "Pizzas",
      "menu.sec.desserts": "Sobremesa",
      "menu.sec.salads": "Saladas",
      "menu.sec.extras": "Doses Extras",
      "menu.note.burgers":
        "Todos os hambúrgueres acompanham: ketchup, mostarda, maionese e batatas.",
      "menu.note.vat": "Todos os preços com IVA incluído.",
      "menu.note.instagram": "Siga-nos @julios_petiscaria_lisboa",

      "footer.copy": "© Julio's · Lisboa & Lagos",
      "footer.privacy": "Política de Privacidade",
      "footer.terms": "Termos & Condições",
      "loc.label": "Local",
      "loc.lisboa": "Lisboa",
      "loc.lagos": "Lagos",

      "meta.lagos.title": "Julio's Lagos — Restaurante no Algarve",
      "meta.lagos.description":
        "Julio's Lagos — petiscos, peixe grelhado, arroz de marisco e paella num espaço de amizade e boa mesa. Reserva por WhatsApp.",
      "meta.lagos.menu.title": "Ementa — Julio's Lagos",
      "meta.lagos.menu.description":
        "Consulta a ementa do Julio's Lagos: tábuas, petiscos, saladas, pratos principais e sobremesas.",

      "lagos.intro.location": "Lagos · Algarve",
      "lagos.hero.tagline": "Lagos · Algarve",
      "lagos.hero.title": "Onde a amizade<br />se senta à mesa.",
      "lagos.hero.subtitle":
        "Boa comida, espírito familiar e aquele sorriso de quem te recebe como se fosses de casa — bem-vindo ao Julio's Lagos.",
      "lagos.hero.meta1": "PETISCOS & MARISCO",
      "lagos.hero.meta2": "PEIXE GRELHADO",
      "lagos.hero.meta3": "PAELLA & CONVÍVIO",

      "lagos.about.kicker": "Sobre Julio's Lagos",
      "lagos.about.title": "Uma mesa que nasceu de uma amizade",
      "lagos.about.lead":
        "O Julio's Lagos é muito mais do que um restaurante — é o sítio onde a amizade, a família e a paixão pela boa gastronomia se sentam lado a lado.",
      "lagos.about.p1":
        "A história começou muito antes da abertura. Nasceu de uma amizade genuína e de uma visão partilhada: a de que uma boa refeição aproxima famílias, fortalece amizades e cria ligações novas — às vezes até melhores do que qualquer app de networking.",
      "lagos.about.p2":
        "Entre essas pessoas está o Dr. João Pedro César Machado, co-proprietário e apaixonado por Lagos. Depois de se mudar para a cidade, há mais de dois anos, entrou neste espaço pela primeira vez e viu imediatamente o potencial: ali podia nascer um lugar onde a boa comida, o acolhimento e o espírito familiar fossem os verdadeiros protagonistas.",
      "lagos.about.p3":
        "Com perseverança, dedicação e o apoio de amigos e familiares, a visão tornou-se realidade. Assim nasceu o Julio's Lagos — com os mesmos valores que estiveram na origem: proximidade, autenticidade, respeito pelas pessoas e amor pela gastronomia.",
      "lagos.about.p4":
        "Aqui cada cliente deve sentir-se em casa. Gostamos de receber quem nos visita como recebemos os nossos amigos. Muitos chegam como clientes e regressam como amigos — e isso, francamente, é o melhor feedback que um restaurante pode ter.",
      "lagos.about.p5":
        "A nossa cozinha mistura tradições e sabores do mundo: peixe grelhado, arroz de marisco, paella, petiscos e pratos preparados com ingredientes selecionados, atenção ao detalhe e, acima de tudo, paixão. Mais do que servir refeições, queremos proporcionar experiências — à mesa, exatamente onde a amizade se senta.",
      "lagos.owner.label": "Co-proprietário",
      "lagos.owner.role": "Co-proprietário de Julio's Lagos",
      "lagos.owner.bio":
        "Apaixonado por Lagos e pela sua atmosfera única, o Dr. João Pedro César Machado acreditou neste espaço desde o primeiro dia — e ajudou a transformar essa visão numa mesa à qual todos são bem-vindos.",

      "lagos.gallery.kicker": "Sabores de Lagos",
      "lagos.gallery.title": "Do peixe à paella",
      "lagos.gallery.lead":
        "Peixe grelhado, arroz de marisco generoso e paella para partilhar — a carta do Julio's Lagos celebra o mar e a mesa.",
      "lagos.gallery.c1": "Peixe Grelhado",
      "lagos.gallery.c2": "Arroz de Marisco",
      "lagos.gallery.c3": "Paella",
      "lagos.gallery.a1": "Peixe grelhado no Julio's Lagos",
      "lagos.gallery.a2": "Arroz de marisco no Julio's Lagos",
      "lagos.gallery.a3": "Paella no Julio's Lagos",

      "lagos.visit.title": "Julio's · Lagos",
      "lagos.visit.address":
        "Praceta João da Costa Reis<br />8600-315 Lagos · Algarve",
      "lagos.visit.hours":
        "Segunda: 12h00–00h00<br />Terça: Encerrado<br />Quarta: 12h00–00h30<br />Quinta e Sexta: 12h00–00h00<br />Sábado: 12h00–01h30<br />Domingo: 12h00–00h00",
      "lagos.visit.map.aria": "Mapa — Julio's em Lagos",

      "lagos.menuPage.lead":
        "Tábuas, petiscos, saladas, pratos principais e sobremesas — a carta do Julio's Lagos.",

      "meta.legal.title": "Política de Privacidade e Termos — Julio's · Lisboa",
      "meta.legal.description":
        "Política de Privacidade e Termos & Condições do Julio's, Campo Pequeno, Lisboa.",

      "legal.privacy.title": "Política de Privacidade",
      "legal.privacy.updated": "Última atualização: 23 de junho de 2026",
      "legal.privacy.responsible":
        "Responsável: Julio's Restaurante, Avenida Elias Garcia, 19B, 1000-147 Lisboa. Contacto: +351 916 475 896 (WhatsApp).",
      "legal.privacy.data":
        "Dados recolhidos: dados de reserva (nome, telefone) e dados de navegação via cookies.",
      "legal.privacy.purpose":
        "Finalidades e base legal: gerir reservas (execução de contrato); medir e melhorar publicidade e desempenho do site (consentimento).",
      "legal.privacy.cookies":
        "Cookies de terceiros: usamos Google Ads e Google Analytics para medir conversões. Pode recusar cookies não essenciais no banner de consentimento ou no navegador.",
      "legal.privacy.retention":
        "Conservação: apenas pelo período necessário ou exigido por lei.",
      "legal.privacy.rights":
        "Direitos: acesso, retificação, apagamento, limitação, oposição e portabilidade — contacte +351 916 475 896. Pode reclamar à CNPD.",

      "legal.terms.title": "Termos & Condições",
      "legal.terms.offer":
        "Oferta: «Os Três Segredos» inclui Tábua Mista, Amêijoas à Bulhão Pato e Pimentos Padrón, por 34,99€, indicado para partilha entre duas pessoas.",
      "legal.terms.prices":
        "Preços: incluem IVA. Oferta sujeita a disponibilidade, pode ser alterada sem aviso. Ingredientes podem ser substituídos conforme disponibilidade.",
      "legal.terms.booking": "Reservas: sujeitas a confirmação do Julio's.",
      "legal.terms.allergens":
        "Alergénios: os pratos podem conter alergénios — informe a equipa antes do pedido.",
      "legal.terms.law":
        "Lei aplicável: lei portuguesa. Litígios de consumo: entidade RAL competente. Mais info em www.consumidor.gov.pt."
    },
    en: {
      "meta.index.title": "Julio's – Restaurant in Campo Pequeno, Lisbon",
      "meta.index.description":
        "Julio's in Campo Pequeno, Lisbon — Portuguese cuisine, tapas and international dishes. Book a table, explore the menu and enjoy karaoke nights, quizzes and a welcoming multicultural atmosphere.",
      "meta.index.keywords":
        "Julio's, Lisbon restaurant, Campo Pequeno, Portuguese food, tapas, petiscos, international restaurant, reservations, Avenida Elias Garcia",
      "meta.menu.title": "Menu — Julio's · Campo Pequeno, Lisbon",
      "meta.menu.description":
        "Browse Julio's menu: savouries, boards, petiscos, main courses and desserts in Campo Pequeno, Lisbon.",
      "meta.promos.title": "Special Offers — Julio's · Campo Pequeno, Lisbon",
      "meta.promos.description":
        "Seafood for Two (€28.99) and Wine & Petiscos Experience (€47.99). Book Julio's special offers via WhatsApp.",

      "nav.about": "About",
      "nav.secrets": "Secrets",
      "nav.promos": "Offers",
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

      "promos.kicker": "Special Offers",
      "promos.title": "Experiences to share",
      "promos.lead":
        "Special combinations of seafood, petiscos and wine — perfect for two or for a full evening at the table.",
      "promos.view": "View offer",
      "promos.order": "Book this offer",
      "promos.page.title": "Special Offers",
      "promos.page.lead":
        "Choose your experience and send your request via WhatsApp. We will confirm availability as soon as possible.",
      "promos.marisco.title": "Seafood for Two",
      "promos.marisco.includes":
        "Garlic Prawns · Clams Bulhão Pato Style · Rice · 2 glasses of white wine",
      "promos.marisco.desc":
        "A generous seafood selection to share for two, served with rice and two glasses of white wine. Ideal for a special evening at Julio's.",
      "promos.wine.title": "Wine & Petiscos Experience",
      "promos.wine.includes":
        "Bottle of white wine · Garlic Prawns · Clams Bulhão Pato Style · Chicken Wings · Padrón Peppers · French Fries",
      "promos.wine.desc":
        "The full experience: a bottle of white wine with our most popular petiscos — seafood, chicken wings, peppers and fries. Perfect for sharing.",
      "promos.marisco.whatsapp":
        "Hello! I would like to book the \"Seafood for Two\" offer (€28.99).",
      "promos.wine.whatsapp":
        "Hello! I would like to book the \"Wine & Petiscos Experience\" offer (€47.99).",
      "promos.marisco.alt": "Seafood for two at Julio's",
      "promos.wine.alt": "Wine & Petiscos Experience at Julio's",

      "meta.secrets.title": "The Secrets of Portuguese Cuisine — Julio's · Campo Pequeno, Lisbon",
      "meta.secrets.description":
        "The Secrets of Portuguese Cuisine at Julio's: Tábua Mista, Amêijoas à Bulhão Pato and Padrón Peppers for €34.99. Campo Pequeno, Lisbon.",

      "secrets.kicker": "Secrets of Portuguese Cuisine",
      "secrets.title": "Three dishes every Portuguese knows",
      "secrets.lead":
        "Not all Portuguese food is codfish and pastel de nata. Discover three local favourites that have been shared around Portuguese tables for generations: fresh clams cooked with garlic and coriander, smoky cured meats and cheeses, and the famous Padrón peppers — where one in ten might surprise you.",
      "secrets.price": "Taste all three together for just €34.99",
      "secrets.includes.title": "Includes:",
      "secrets.includes.1": "Tábua Mista (cured meats, cheeses & charcuterie)",
      "secrets.includes.2": "Amêijoas à Bulhão Pato",
      "secrets.includes.3": "Pimentos Padrón",
      "secrets.discover": "Discover the story",
      "secrets.readmore": "Read more",
      "secrets.cardBtn": "View story",
      "secrets.promoBtn": "The Three Secrets — €34.99",
      "secrets.order": "Book this experience",
      "secrets.whatsapp":
        "Hello! I would like to book \"The Three Secrets\" (€34.99).",
      "secrets.hero.alt": "The Three Secrets at Julio's",
      "secrets.ameijoas.alt": "Amêijoas à Bulhão Pato",
      "secrets.padron.alt": "Pimentos Padrón",
      "secrets.tabua.alt": "Tábua Mista cured meats and cheeses",

      "secrets.page.title": "The Secrets of Portuguese Cuisine",
      "secrets.tradition.title": "A tradition worth preserving",
      "secrets.tradition.p1":
        "Finding truly traditional Portuguese food is becoming harder every year.",
      "secrets.tradition.p2":
        "Across Europe, old family restaurants are disappearing, replaced by international menus that look almost identical whether you are in Lisbon, Berlin, London or Amsterdam.",
      "secrets.tradition.p3": "The result is convenient. But something important gets lost.",
      "secrets.tradition.p4":
        "The recipes, stories and flavours that generations grew up with slowly disappear from everyday life.",
      "secrets.tradition.p5":
        "At Julio's, we believe these traditions are worth keeping alive. Not in a museum. Not behind glass. But on the table, exactly where they belong.",
      "secrets.tradition.p6":
        "\"The Three Secrets\" brings together three classics that tell the story of Portugal better than any guidebook.",

      "secrets.ameijoas.title": "Amêijoas à Bulhão Pato",
      "secrets.ameijoas.subtitle": "The dish named after a poet",
      "secrets.ameijoas.p1":
        "One of Portugal's most beloved seafood dishes is named after a 19th-century poet, Raimundo António de Bulhão Pato.",
      "secrets.ameijoas.p2":
        "Nobody is quite sure whether he created the recipe or simply loved eating it, but his name became attached to it forever.",
      "secrets.ameijoas.p3":
        "Fresh clams are cooked with olive oil, garlic and generous amounts of coriander — a herb that Portuguese cooks have adored for centuries, especially in the southern regions.",
      "secrets.ameijoas.p4":
        "The recipe is simple. And that is exactly the point. Portuguese cuisine has never been about hiding ingredients. It is about letting great ingredients speak for themselves.",
      "secrets.ameijoas.p5":
        "A basket of bread is traditionally placed nearby because leaving the sauce behind would be considered almost a crime.",

      "secrets.padron.title": "Pimentos Padrón",
      "secrets.padron.subtitle": "The little Portuguese gamble",
      "secrets.padron.p1":
        "These small peppers arrived on the Iberian Peninsula centuries ago and became a favourite companion to long family lunches and gatherings with friends.",
      "secrets.padron.p2": "Most are sweet. A few are surprisingly spicy. Nobody knows which one they will get.",
      "secrets.padron.quote": "\"Some are hot, some are not.\"",
      "secrets.padron.p3": "Every plate becomes a game. Someone always gets the spicy one. Everyone laughs.",
      "secrets.padron.p4":
        "The tradition has survived for generations because it turns a simple snack into a shared experience. And Portuguese food has always been as much about people as it is about recipes.",

      "secrets.tabua.title": "Tábua Mista",
      "secrets.tabua.subtitle": "A taste of the countryside",
      "secrets.tabua.p1":
        "Before Portugal became famous for tourism, most people lived much closer to the land.",
      "secrets.tabua.p2":
        "Families raised animals, cured meats, made cheeses and preserved food for long winters. Those traditions still live on in the country's finest charcuterie.",
      "secrets.tabua.p3":
        "A traditional tábua mista brings together cured ham, regional sausages and Portuguese cheeses on one board.",
      "secrets.tabua.p4":
        "Many of the finest cured meats come from black Iberian pigs that roam oak forests and feed naturally on acorns.",
      "secrets.tabua.p5":
        "This slow traditional method creates the rich flavour and delicate texture that made Iberian ham famous throughout Europe. The cheeses tell their own story — dozens of regional varieties, from buttery mountain cheeses to firm aged cheeses made using methods that have changed little for centuries.",

      "secrets.experience.title": "Experience all three together",
      "secrets.experience.lead":
        "For visitors, this is one of the easiest ways to discover authentic Portuguese flavours. For locals, it is a reminder of traditions worth keeping.",
      "secrets.experience.offer": "The Three Secrets — €34.99",
      "secrets.experience.formal": "Portuguese Starter Experience",
      "secrets.experience.closing":
        "Because the best way to understand Portugal is not by reading about it. It's by sharing it around a table.",

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
      "reservations.whatsapp.lagos":
        "Hello! I would like to make a reservation at Julio's Lagos.\n\nName: {name}\nPhone: {phone}\nDate: {date}\nTime: {time}\nNumber of guests: {guests}",

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
        "Savouries, boards, petiscos, main courses and desserts — Julio's current menu in Campo Pequeno.",

      "menu.sec.salgados": "Savouries",
      "menu.sec.boards": "Boards",
      "menu.sec.petiscos": "Petiscos",
      "menu.sec.burgers": "Burgers",
      "menu.sec.mains": "Main Courses",
      "menu.sec.pizza": "Pizzas",
      "menu.sec.desserts": "Dessert",
      "menu.sec.salads": "Salads",
      "menu.sec.extras": "Extras",
      "menu.note.burgers":
        "All burgers are served with ketchup, mustard, mayonnaise and fries.",
      "menu.note.vat": "All prices include VAT.",
      "menu.note.instagram": "Follow us @julios_petiscaria_lisboa",

      "footer.copy": "© Julio's · Lisbon & Lagos",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms & Conditions",
      "loc.label": "Location",
      "loc.lisboa": "Lisbon",
      "loc.lagos": "Lagos",

      "meta.lagos.title": "Julio's Lagos — Restaurant in the Algarve",
      "meta.lagos.description":
        "Julio's Lagos — petiscos, grilled fish, seafood rice and paella in a warm, friendly space. Book via WhatsApp.",
      "meta.lagos.menu.title": "Menu — Julio's Lagos",
      "meta.lagos.menu.description":
        "Browse Julio's Lagos menu: boards, petiscos, salads, mains and desserts.",

      "lagos.intro.location": "Lagos · Algarve",
      "lagos.hero.tagline": "Lagos · Algarve",
      "lagos.hero.title": "Where friendship<br />takes a seat.",
      "lagos.hero.subtitle":
        "Great food, a family spirit and the smile of people who welcome you like you're home — welcome to Julio's Lagos.",
      "lagos.hero.meta1": "PETISCOS & SEAFOOD",
      "lagos.hero.meta2": "GRILLED FISH",
      "lagos.hero.meta3": "PAELLA & COMPANY",

      "lagos.about.kicker": "About Julio's Lagos",
      "lagos.about.title": "A table born from friendship",
      "lagos.about.lead":
        "Julio's Lagos is much more than a restaurant — it is where friendship, family and a passion for good food sit side by side.",
      "lagos.about.p1":
        "The story began long before opening day. It grew from a genuine friendship and a shared belief: that a good meal brings families closer, strengthens friendships and creates new connections — sometimes better than any networking app.",
      "lagos.about.p2":
        "Among those people is Dr. João Pedro César Machado, co-owner and a true lover of Lagos. After moving to the city more than two years ago, he walked into this space for the first time and immediately saw its potential: a place where good food, warm hospitality and a family spirit would be the real stars.",
      "lagos.about.p3":
        "With perseverance, dedication and the support of friends and family, that vision became reality. Julio's Lagos was born — with the same values that started it all: closeness, authenticity, respect for people and love for gastronomy.",
      "lagos.about.p4":
        "Here every guest should feel at home. We like to welcome visitors the way we welcome our friends. Many arrive as customers and return as friends — and honestly, that is the best feedback a restaurant can get.",
      "lagos.about.p5":
        "Our kitchen mixes traditions and flavours from around the world: grilled fish, seafood rice, paella, petiscos and dishes made with carefully chosen ingredients, attention to detail and, above all, passion. More than serving meals, we want to create experiences — at the table, exactly where friendship takes a seat.",
      "lagos.owner.label": "Co-owner",
      "lagos.owner.role": "Co-owner of Julio's Lagos",
      "lagos.owner.bio":
        "Passionate about Lagos and its unique atmosphere, Dr. João Pedro César Machado believed in this space from day one — and helped turn that vision into a table where everyone is welcome.",

      "lagos.gallery.kicker": "Flavours of Lagos",
      "lagos.gallery.title": "From fish to paella",
      "lagos.gallery.lead":
        "Grilled fish, generous seafood rice and paella to share — Julio's Lagos celebrates the sea and the table.",
      "lagos.gallery.c1": "Grilled Fish",
      "lagos.gallery.c2": "Seafood Rice",
      "lagos.gallery.c3": "Paella",
      "lagos.gallery.a1": "Grilled fish at Julio's Lagos",
      "lagos.gallery.a2": "Seafood rice at Julio's Lagos",
      "lagos.gallery.a3": "Paella at Julio's Lagos",

      "lagos.visit.title": "Julio's · Lagos",
      "lagos.visit.address":
        "Praceta João da Costa Reis<br />8600-315 Lagos · Algarve",
      "lagos.visit.hours":
        "Monday: 12:00–00:00<br />Tuesday: Closed<br />Wednesday: 12:00–00:30<br />Thursday & Friday: 12:00–00:00<br />Saturday: 12:00–01:30<br />Sunday: 12:00–00:00",
      "lagos.visit.map.aria": "Map — Julio's in Lagos",

      "lagos.menuPage.lead":
        "Boards, petiscos, salads, mains and desserts — the Julio's Lagos menu.",

      "meta.legal.title": "Privacy Policy & Terms — Julio's · Lisbon",
      "meta.legal.description":
        "Privacy Policy and Terms & Conditions for Julio's, Campo Pequeno, Lisbon.",

      "legal.privacy.title": "Privacy Policy",
      "legal.privacy.updated": "Last updated: 23 June 2026",
      "legal.privacy.responsible":
        "Data controller: Julio's Restaurante, Avenida Elias Garcia, 19B, 1000-147 Lisbon. Contact: +351 916 475 896 (WhatsApp).",
      "legal.privacy.data":
        "Data collected: reservation details (name, phone) and browsing data via cookies.",
      "legal.privacy.purpose":
        "Purposes and legal basis: managing reservations (contract performance); measuring and improving advertising and site performance (consent).",
      "legal.privacy.cookies":
        "Third-party cookies: we use Google Ads and Google Analytics to measure conversions. You may refuse non-essential cookies via the consent banner or your browser.",
      "legal.privacy.retention":
        "Retention: only for as long as necessary or required by law.",
      "legal.privacy.rights":
        "Rights: access, rectification, erasure, restriction, objection and portability — contact +351 916 475 896. You may lodge a complaint with the CNPD.",

      "legal.terms.title": "Terms & Conditions",
      "legal.terms.offer":
        "Offer: \"The Three Secrets\" includes Tábua Mista, Amêijoas à Bulhão Pato and Padrón Peppers for €34.99, intended for sharing between two people.",
      "legal.terms.prices":
        "Prices: include VAT. Offer subject to availability and may change without notice. Ingredients may be substituted depending on availability.",
      "legal.terms.booking": "Reservations: subject to confirmation by Julio's.",
      "legal.terms.allergens":
        "Allergens: dishes may contain allergens — please inform our team before ordering.",
      "legal.terms.law":
        "Applicable law: Portuguese law. Consumer disputes: competent ADR entity. More info at www.consumidor.gov.pt."
    }
  };

  var currentLang = "pt";
  var mapMarker = null;

  function hasTranslation(key) {
    var pack = translations[currentLang] || translations.pt;
    return pack[key] != null || translations.pt[key] != null;
  }

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
    var pathname = global.location.pathname || "/";
    var clean = pathname.replace(/index\.html$/i, "");
    if (clean === "") clean = "/";
    if (!/\.html$/i.test(clean) && clean.charAt(clean.length - 1) !== "/") {
      clean += "/";
    }
    return SITE_URL + clean + "?lang=" + lang;
  }

  function isLagosLocation() {
    return document.body.getAttribute("data-location") === "lagos";
  }

  function updateMeta(page) {
    var titleKey = "meta.index.title";
    var descKey = "meta.index.description";
    if (page === "menu") {
      titleKey = "meta.menu.title";
      descKey = "meta.menu.description";
    } else if (page === "promos") {
      titleKey = "meta.promos.title";
      descKey = "meta.promos.description";
    } else if (page === "secrets") {
      titleKey = "meta.secrets.title";
      descKey = "meta.secrets.description";
    } else if (page === "legal") {
      titleKey = "meta.legal.title";
      descKey = "meta.legal.description";
    } else if (page === "lagos") {
      titleKey = "meta.lagos.title";
      descKey = "meta.lagos.description";
    } else if (page === "lagos-menu") {
      titleKey = "meta.lagos.menu.title";
      descKey = "meta.lagos.menu.description";
    }
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

    if (
      page !== "menu" &&
      page !== "promos" &&
      page !== "secrets" &&
      page !== "legal" &&
      page !== "lagos" &&
      page !== "lagos-menu"
    ) {
      setMetaContent("meta-keywords", t("meta.index.keywords"));
    }
  }

  function setMetaContent(id, value) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("content", value);
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (hasTranslation(key)) el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (hasTranslation(key)) el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (hasTranslation(key)) el.alt = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (hasTranslation(key)) el.placeholder = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (hasTranslation(key)) {
        el.setAttribute("aria-label", t(key));
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    updateMapPopup();
    updateSchema();

    if (global.JuliosMenu && typeof global.JuliosMenu.render === "function") {
      global.JuliosMenu.render(currentLang);
    }
  }

  function updateMapPopup() {
    if (!mapMarker || !global.L) return;
    var html;
    if (isLagosLocation()) {
      html =
        "<strong>Julio's Lagos</strong><br>Praceta João da Costa Reis, 8600-315 Lagos" +
        '<br><a href="https://maps.app.goo.gl/KJktdeved2WiD9Fr7" target="_blank" rel="noopener">' +
        t("visit.popup.directions") +
        "</a>";
    } else {
      html =
        "<strong>Julio's</strong><br>Avenida Elias Garcia, 19B, 1000-147 " +
        (currentLang === "pt" ? "Lisboa" : "Lisbon") +
        '<br><a href="https://www.google.com/maps/search/?api=1&query=38.7394912,-9.1441767" target="_blank" rel="noopener">' +
        t("visit.popup.directions") +
        "</a>";
    }
    mapMarker.bindPopup(html);
  }

  function updateSchema() {
    var script = document.getElementById("schema-restaurant");
    if (!script) return;

    var schema;
    if (isLagosLocation()) {
      schema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Julio's Lagos",
        image: SITE_URL + "/img/lagos/exterior-1.png",
        url: SITE_URL + "/lagos/",
        telephone: "+351916475896",
        priceRange: "€€",
        servesCuisine: ["Portuguese", "Seafood", "Mediterranean"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Praceta João da Costa Reis",
          addressLocality: "Lagos",
          postalCode: "8600-315",
          addressRegion: "Algarve",
          addressCountry: "PT"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.1069131,
          longitude: -8.6804093
        },
        description: t("meta.lagos.description"),
        inLanguage: [currentLang === "pt" ? "pt-PT" : "en-GB"],
        sameAs: ["https://julios.pt"]
      };
    } else {
      schema = {
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
        sameAs: ["https://julios.pt"]
      };
    }

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
    if (global.JuliosMenu && typeof global.JuliosMenu.render === "function") {
      global.JuliosMenu.render(currentLang);
    }
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

      var templateKey =
        document.body.getAttribute("data-location") === "lagos"
          ? "reservations.whatsapp.lagos"
          : "reservations.whatsapp";
      var template = t(templateKey);
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

  function bindPromoButtons() {
    document.querySelectorAll("[data-promo-whatsapp]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-promo-whatsapp");
        var message = t(key);
        var url =
          "https://wa.me/351916475896?text=" + encodeURIComponent(message);

        if (typeof global.gtag_report_conversion === "function") {
          global.gtag_report_conversion(url);
        } else {
          global.open(url, "_blank", "noopener");
        }
      });
    });
  }

  function init(options) {
    options = options || {};
    currentLang = getInitialLang();
    bindLangSwitcher();
    bindReservationForm();
    bindPromoButtons();
    applyTranslations();
    updateMeta(options.page || "index");
    if (global.JuliosMenu && typeof global.JuliosMenu.render === "function") {
      global.JuliosMenu.render(currentLang);
    }

    if (typeof options.onMapReady === "function") {
      options.onMapReady(registerMapMarker);
    }
  }

  global.JuliosI18n = {
    init: init,
    setLang: setLang,
    t: t,
    getLang: function () {
      return currentLang;
    },
    registerMapMarker: registerMapMarker,
    SITE_URL: SITE_URL
  };
})(window);
