/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

<form id="contactForm">
  <input type="text" name="name" placeholder="Nom" required>
  <input type="email" name="email" placeholder="Email" required>
  <textarea name="message" placeholder="Votre message" required></textarea>
  <button type="submit">Envoyer</button>
  <div id="success-message" style="display:none; color: green;">Message envoyé avec succès ! ✅</div>
</form>


  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // empêche le rechargement de la page

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvgkearj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        document.getElementById("success-message").style.display = "block";
        form.reset(); // Réinitialise les champs du formulaire
      } else {
        alert("Une erreur s’est produite. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur réseau. Vérifiez votre connexion.");
    }
  });

