(function (global) {
  "use strict";

  var STORAGE_KEY = "julios-location";
  var LISBOA = "lisboa";
  var LAGOS = "lagos";

  function isLagosPath() {
    return /\/lagos(\/|$)/i.test(global.location.pathname);
  }

  function getStored() {
    try {
      var v = global.localStorage.getItem(STORAGE_KEY);
      if (v === LISBOA || v === LAGOS) return v;
    } catch (e) {}
    return null;
  }

  function setStored(loc) {
    try {
      global.localStorage.setItem(STORAGE_KEY, loc);
    } catch (e) {}
  }

  function lisboaHref(page) {
    page = page || "index.html";
    if (isLagosPath()) {
      return page === "index.html" ? "../index.html" : "../" + page;
    }
    return page === "index.html" ? "index.html" : page;
  }

  function lagosHref(page) {
    page = page || "index.html";
    if (isLagosPath()) {
      return page === "index.html" ? "index.html" : page;
    }
    return page === "index.html" ? "lagos/" : "lagos/" + page;
  }

  function goTo(loc) {
    setStored(loc);
    if (loc === LAGOS && !isLagosPath()) {
      global.location.href = lagosHref("index.html");
    } else if (loc === LISBOA && isLagosPath()) {
      global.location.href = lisboaHref("index.html");
    } else {
      updateSwitcherUI();
    }
  }

  function updateSwitcherUI() {
    var current = isLagosPath() ? LAGOS : LISBOA;
    document.querySelectorAll(".loc-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-loc") === current;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function bindSwitcher() {
    document.querySelectorAll(".loc-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        goTo(btn.getAttribute("data-loc"));
      });
    });
    updateSwitcherUI();
  }

  function looksLikeAlgarve(data) {
    if (!data) return false;
    var blob = [
      data.city,
      data.region,
      data.region_name,
      data.regionName,
      data.country,
      data.timezone
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return (
      blob.indexOf("lagos") !== -1 ||
      blob.indexOf("faro") !== -1 ||
      blob.indexOf("algarve") !== -1 ||
      blob.indexOf("portimao") !== -1 ||
      blob.indexOf("portimão") !== -1
    );
  }

  function maybeAutoRedirect() {
    if (getStored()) return;
    if (isLagosPath()) {
      setStored(LAGOS);
      return;
    }
    // Only auto-suggest from Lisbon home, without geolocation permission
    var path = global.location.pathname.split("/").pop() || "index.html";
    if (path !== "" && path !== "index.html" && path !== "/") return;

    var ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer = global.setTimeout(function () {
      if (ctrl) ctrl.abort();
    }, 2500);

    fetch("https://get.geojs.io/v1/ip/geo.json", {
      signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        global.clearTimeout(timer);
        if (looksLikeAlgarve(data)) {
          setStored(LAGOS);
          global.location.replace(lagosHref("index.html"));
        } else {
          setStored(LISBOA);
        }
      })
      .catch(function () {
        global.clearTimeout(timer);
        setStored(LISBOA);
      });
  }

  function init() {
    bindSwitcher();
    maybeAutoRedirect();
  }

  global.JuliosLocation = {
    init: init,
    get: function () {
      return isLagosPath() ? LAGOS : getStored() || LISBOA;
    },
    set: goTo,
    lisboaHref: lisboaHref,
    lagosHref: lagosHref
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
