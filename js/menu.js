(function (global) {
  "use strict";

  function renderMenu(lang) {
    var container = document.getElementById("menu-sections");
    if (!container || !global.JuliosMenuData) return;

    lang = lang || (global.JuliosI18n && global.JuliosI18n.getLang()) || "pt";
    container.innerHTML = "";

    global.JuliosMenuData.forEach(function (section) {
      var sectionEl = document.createElement("div");
      sectionEl.className = "menu-section";

      var heading = document.createElement("h2");
      heading.textContent =
        global.JuliosI18n && global.JuliosI18n.t
          ? global.JuliosI18n.t(section.sectionKey)
          : section.sectionKey;
      sectionEl.appendChild(heading);

      section.items.forEach(function (item) {
        var row = document.createElement("div");
        row.className = "menu-item";

        var body = document.createElement("div");
        var name = document.createElement("div");
        name.className = "menu-item-name";
        name.textContent = item.name[lang] || item.name.pt;
        body.appendChild(name);

        if (item.desc) {
          var desc = document.createElement("div");
          desc.className = "menu-item-desc";
          desc.textContent = item.desc[lang] || item.desc.pt;
          body.appendChild(desc);
        }

        var price = document.createElement("div");
        price.className = "menu-item-price";
        price.textContent = item.price;

        row.appendChild(body);
        row.appendChild(price);
        sectionEl.appendChild(row);
      });

      if (section.sectionNoteKey && global.JuliosI18n && global.JuliosI18n.t) {
        var note = document.createElement("p");
        note.className = "menu-section-note";
        note.textContent = global.JuliosI18n.t(section.sectionNoteKey);
        sectionEl.appendChild(note);
      }

      container.appendChild(sectionEl);
    });
  }

  global.JuliosMenu = {
    render: renderMenu
  };
})(window);
