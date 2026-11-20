(function () {
  "use strict";
  var terms = window.DOC_TERMS || [];
  var KIND = { c: "Class", op: "Object property", dp: "Datatype property", ap: "Annotation property", i: "Individual" };
  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  terms.forEach(function (t) { t._n = norm(t.n); t._c = norm(t.p + ":" + t.n); t._d = norm(t.d); });

  // ---- search across all modules ----
  var q = document.getElementById("q"), box = document.getElementById("q-results"), items = [], sel = -1;
  function find(v) {
    v = norm(v.trim());
    if (!v) return [];
    var a = [], b = [], c = [];
    terms.forEach(function (t) {
      if (t._n.indexOf(v) === 0 || t._c.indexOf(v) === 0) a.push(t);
      else if (t._n.indexOf(v) > 0) b.push(t);
      else if (v.length > 2 && t._d.indexOf(v) >= 0) c.push(t);
    });
    return a.concat(b, c).slice(0, 15);
  }
  function close() { if (box) { box.hidden = true; q.setAttribute("aria-expanded", "false"); } }
  function show(list) {
    box.innerHTML = ""; items = list; sel = -1;
    var v = q.value.trim();
    if (!list.length) {
      if (!v) { close(); return; }
      var li = document.createElement("li");
      li.className = "q-empty";
      li.textContent = "No class or property matches “" + v + "”.";
      box.appendChild(li);
    }
    list.forEach(function (t, i) {
      var li = document.createElement("li"), a = document.createElement("a");
      li.setAttribute("role", "option"); li.id = "q-opt-" + i;
      a.href = t.h; a.className = "m-" + t.m;
      var n = document.createElement("span"); n.className = "q-name"; n.textContent = t.p + ":" + t.n;
      var m = document.createElement("span"); m.className = "q-meta"; m.textContent = KIND[t.k] || "";
      var d = document.createElement("span"); d.className = "q-desc"; d.textContent = t.d;
      a.appendChild(n); a.appendChild(m); a.appendChild(d); li.appendChild(a); box.appendChild(li);
    });
    box.hidden = false; q.setAttribute("aria-expanded", "true");
  }
  if (q && box) {
    q.addEventListener("input", function () { show(find(q.value)); });
    q.addEventListener("keydown", function (e) {
      var opts = box.querySelectorAll("li[role=option]");
      if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(sel + 1, opts.length - 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(sel - 1, 0); }
      else if (e.key === "Enter") {
        var t = items[sel >= 0 ? sel : 0];
        if (t) { e.preventDefault(); close(); location.href = t.h; }
        return;
      } else if (e.key === "Escape") { close(); return; }
      else return;
      opts.forEach(function (o, i) { o.classList.toggle("sel", i === sel); });
      if (opts[sel]) { opts[sel].scrollIntoView({ block: "nearest" }); q.setAttribute("aria-activedescendant", opts[sel].id); }
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".search")) close(); });
    box.addEventListener("click", function () { close(); });
    document.addEventListener("keydown", function (e) {
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") { e.preventDefault(); q.focus(); }
    });
  }

  // ---- copy buttons ----
  document.addEventListener("click", function (e) {
    var b = e.target.closest("button.copy");
    if (!b) return;
    var text = b.getAttribute("data-copy");
    function done(ok) { b.textContent = ok ? "Copied" : "Select the text to copy"; setTimeout(function () { b.textContent = "Copy"; }, 1600); }
    try { navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); }); }
    catch (err) { done(false); }
  });

  // ---- filter the terms of a module page ----
  var f = document.getElementById("filter");
  if (f) {
    f.addEventListener("input", function () {
      var v = norm(f.value.trim());
      document.querySelectorAll(".xref li").forEach(function (li) { li.hidden = !!v && norm(li.textContent).indexOf(v) < 0; });
      document.querySelectorAll("article.term").forEach(function (a) { a.hidden = !!v && norm(a.id).indexOf(v) < 0; });
    });
  }
})();
