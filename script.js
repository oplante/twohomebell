(function () {
  var form = document.getElementById("lead-form");
  var success = document.getElementById("lead-success");
  if (success && /[?&]sent=1(?:&|$)/.test(location.search)) {
    if (form) form.classList.add("form-hidden");
    success.classList.add("is-visible");
    success.focus();
  }
})();
