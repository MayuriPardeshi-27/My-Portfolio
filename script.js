// EmailJS init
(function () {
  emailjs.init("vrrx6al-wZFk8Pyb1");
})();

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      // validation
      if (!name || !email || !message) {
          alert("Please fill all fields");
          return;
      }

      // email format check
      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
          alert("Enter valid email address");
          return;
      }

      // disable button + loading text
      button.disabled = true;
      button.innerText = "Sending...";

      let params = {
          name: name,
          email: email,
          message: message
      };

      emailjs.send("service_hq8mhgm", "template_a10pqs4", params)

      .then(function () {
          alert("Message sent successfully ✅");
          form.reset();
      })

      .catch(function (error) {
          alert("Message failed ❌ Try again");
          console.log("EmailJS Error:", error);
      })

      .finally(function () {
          button.disabled = false;
          button.innerText = "Send Message";
      });

  });

});





