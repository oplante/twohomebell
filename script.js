(function () {
  var form = document.getElementById("lead-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = form.querySelector('input[type="email"]');
    if (!email.value || !email.checkValidity()) {
      email.reportValidity();
      return;
    }
    form.classList.add("form-hidden");
    var success = document.getElementById("lead-success");
    if (success) {
      success.classList.add("is-visible");
      success.focus();
    }
  });
})();
