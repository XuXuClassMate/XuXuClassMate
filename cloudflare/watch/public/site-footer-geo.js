(function () {
  var footers = document.querySelectorAll(".xuxu-site-footer");
  if (!footers.length) return;
  fetch("https://www.xuxuclassmate.com/api/geo", { credentials: "omit" })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      if (!data || !data.name) return;
      footers.forEach(function (footer) {
        var row = footer.querySelector("[data-footer-region]");
        var nameEl = footer.querySelector("[data-footer-region-name]");
        if (row && nameEl) {
          nameEl.textContent = data.name;
          row.hidden = false;
        }
      });
    })
    .catch(function () {});
})();