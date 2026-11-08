(function () {
  function fillRegion(block, name) {
    if (!block || !name) return;
    var row = block.querySelector("[data-footer-region]");
    var nameEl = block.querySelector("[data-footer-region-name]");
    if (row && nameEl) {
      nameEl.textContent = name;
      row.hidden = false;
    }
  }
  var footers = document.querySelectorAll(".xuxu-site-footer");
  if (!footers.length) return;
  fetch("https://www.xuxuclassmate.com/api/geo", { credentials: "omit" })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      if (!data || !data.country || !data.names) return;
      footers.forEach(function (footer) {
        fillRegion(footer.querySelector('[data-footer-lang="en"]'), data.names.en);
        fillRegion(footer.querySelector('[data-footer-lang="zh"]'), data.names.zh);
      });
    })
    .catch(function () {});
})();