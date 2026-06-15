(function (global) {
  "use strict";

  global.JuliosMenuData = [
    {
      sectionKey: "menu.sec.salgados",
      items: [
        { name: { pt: "Croquete", en: "Croquette" }, price: "1,80€" },
        { name: { pt: "Pastel de Bacalhau", en: "Codfish Cake" }, price: "1,80€" },
        { name: { pt: "Rissois de Leitão", en: "Suckling Pig Rissoles" }, price: "1,80€" },
        { name: { pt: "Chamuça de Carne", en: "Meat Samosa" }, price: "1,80€" }
      ]
    },
    {
      sectionKey: "menu.sec.boards",
      items: [
        {
          name: { pt: "Tábua de Enchidos de Porco Preto", en: "Black Pork Charcuterie Board" },
          price: "13,00€"
        },
        {
          name: { pt: "Tábua de Presunto Pata Negra", en: "Pata Negra Ham Board" },
          price: "13,00€"
        },
        { name: { pt: "Tábua de Queijos", en: "Cheese Board" }, price: "13,00€" },
        { name: { pt: "Tábua Mista", en: "Mixed Board" }, price: "19,00€" }
      ]
    },
    {
      sectionKey: "menu.sec.petiscos",
      items: [
        { name: { pt: "Pão com Chouriço", en: "Bread with Chouriço" }, price: "3,50€" },
        { name: { pt: "Tosta Mista Julio's", en: "Julio's Mixed Toastie" }, price: "4,00€" },
        {
          name: { pt: "Tosta Mista Julio's com Tomate", en: "Julio's Mixed Toastie with Tomato" },
          price: "4,50€"
        },
        {
          name: { pt: "Tosta Mista Julio's com Frango", en: "Julio's Mixed Toastie with Chicken" },
          price: "5,00€"
        },
        { name: { pt: "Palitos de Queijo", en: "Cheese Sticks" }, price: "7,00€" },
        { name: { pt: "Pimentos Padrón", en: "Padrón Peppers" }, price: "8,00€" },
        { name: { pt: "Tiras de Choco Frito", en: "Fried Cuttlefish Strips" }, price: "9,00€" },
        { name: { pt: "Cogumelos Salteados", en: "Sautéed Mushrooms" }, price: "9,00€" },
        {
          name: { pt: "Amêijoas à Bulhão Pato", en: "Clams Bulhão Pato Style" },
          desc: {
            pt: "Amêijoas em molho de alho e coentros",
            en: "Clams in garlic and coriander sauce"
          },
          price: "11,00€"
        },
        { name: { pt: "Gambas com Alho", en: "Garlic Prawns" }, price: "12,00€" },
        { name: { pt: "Batatas Bravas", en: "Patatas Bravas" }, price: "7,00€" },
        {
          name: { pt: "Tiras de Panados de Frango / Porco", en: "Breaded Chicken / Pork Strips" },
          price: "8,00€"
        },
        {
          name: { pt: "Pica Pau de Vitela", en: "Veal Pica-Pau" },
          desc: {
            pt: "Carne salteada com molho de mostarda",
            en: "Sautéed meat with mustard sauce"
          },
          price: "10,00€"
        },
        { name: { pt: "Asas de Frango", en: "Chicken Wings" }, price: "8,00€" },
        { name: { pt: "Ovos com Farinheira", en: "Eggs with Farinheira Sausage" }, price: "8,00€" },
        { name: { pt: "Chouriço de Porco Preto Assado", en: "Roasted Black Pork Chouriço" }, price: "7,00€" },
        {
          name: { pt: "Peixinhos da Horta", en: "Tempura Green Beans" },
          desc: {
            pt: "Feijão-verde frito e crocante",
            en: "Crispy fried green beans"
          },
          price: "7,00€"
        },
        { name: { pt: "Moelas Estufadas", en: "Braised Chicken Gizzards" }, price: "8,00€" }
      ]
    },
    {
      sectionKey: "menu.sec.burgers",
      sectionNoteKey: "menu.note.burgers",
      items: [
        {
          name: { pt: "Clássico Smashed Burger", en: "Classic Smashed Burger" },
          desc: {
            pt: "Duas carnes, cebolas caramelizadas, bacon, queijo e pickles",
            en: "Two patties, caramelized onions, bacon, cheese and pickles"
          },
          price: "13,90€"
        },
        {
          name: { pt: "New York Burger", en: "New York Burger" },
          desc: {
            pt: "Alface, tomate, bacon, queijo, pimentos vermelhos, molho barbecue e cogumelos",
            en: "Lettuce, tomato, bacon, cheese, red peppers, barbecue sauce and mushrooms"
          },
          price: "13,50€"
        },
        {
          name: { pt: "Chilli Con Carne Burger", en: "Chilli Con Carne Burger" },
          desc: {
            pt: "Hambúrguer com chilli con carne",
            en: "Burger with chilli con carne"
          },
          price: "13,90€"
        }
      ]
    },
    {
      sectionKey: "menu.sec.mains",
      items: [
        {
          name: { pt: "Crepe de Frango e Cogumelos", en: "Chicken and Mushroom Crepe" },
          price: "9,00€"
        },
        { name: { pt: "Crepe de Cogumelos", en: "Mushroom Crepe" }, price: "8,50€" },
        { name: { pt: "Nasi Goreng de Frango", en: "Chicken Nasi Goreng" }, price: "10,50€" },
        { name: { pt: "Nasi Goreng de Gambas", en: "Prawn Nasi Goreng" }, price: "13,50€" },
        { name: { pt: "Nasi Goreng Vegano", en: "Vegan Nasi Goreng" }, price: "9,50€" },
        { name: { pt: "Bami Goreng de Frango", en: "Chicken Bami Goreng" }, price: "10,50€" },
        { name: { pt: "Bami Goreng de Gambas", en: "Prawn Bami Goreng" }, price: "13,50€" },
        { name: { pt: "Bami Goreng Vegano", en: "Vegan Bami Goreng" }, price: "9,50€" },
        { name: { pt: "Rabo de Boi Estufado", en: "Braised Oxtail" }, price: "16,00€" },
        { name: { pt: "Bacalhau Cozido", en: "Boiled Cod" }, price: "15,00€" },
        { name: { pt: "Bacalhau à Brás", en: "Cod à Brás" }, price: "15,00€" },
        { name: { pt: "Choco Frito", en: "Fried Cuttlefish" }, price: "11,00€" },
        {
          name: { pt: "Entrecosto BBQ à Americana — Meio Piano", en: "American BBQ Ribs — Half Rack" },
          price: "13,50€"
        },
        {
          name: { pt: "Entrecosto BBQ à Americana — Piano Inteiro", en: "American BBQ Ribs — Full Rack" },
          price: "24,00€"
        }
      ]
    },
    {
      sectionKey: "menu.sec.pizza",
      items: [
        { name: { pt: "Pizza Marguerita", en: "Margherita Pizza" }, price: "8,90€" },
        {
          name: { pt: "Faça a sua pizza", en: "Build your own pizza" },
          desc: {
            pt: "Com ingredientes à sua escolha. Cada ingrediente extra 1,20€. Queijo de Cabra, Salame, Cogumelo, Presunto, Rúcula, Molho BBQ, Carne picada, Bacon, Cebola, Pimento, Frango.",
            en: "With ingredients of your choice. Each extra ingredient €1.20. Goat cheese, salami, mushroom, ham, rocket, BBQ sauce, minced meat, bacon, onion, bell pepper, chicken."
          },
          price: "8,90€"
        }
      ]
    },
    {
      sectionKey: "menu.sec.desserts",
      items: [
        { name: { pt: "Panacota", en: "Panna Cotta" }, price: "3,50€" },
        { name: { pt: "Tiramissu", en: "Tiramisu" }, price: "3,90€" },
        { name: { pt: "Baba de Camelo", en: "Baba de Camelo" }, price: "3,50€" },
        {
          name: { pt: "Bolo de Chocolate com Baunilha", en: "Chocolate Cake with Vanilla" },
          price: "3,90€"
        },
        {
          name: { pt: "Crumble de Maçã c/ Gelado de Baunilha", en: "Apple Crumble with Vanilla Ice Cream" },
          price: "3,90€"
        },
        { name: { pt: "Fruta do Dia", en: "Fruit of the Day" }, price: "2,50€" },
        { name: { pt: "Gelado com Chocolate", en: "Ice Cream with Chocolate" }, price: "3,90€" }
      ]
    }
  ];
})(window);
