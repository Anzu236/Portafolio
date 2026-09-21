document.addEventListener('DOMContentLoaded', function () {

    // =========================================
    // NAVBAR FIJA AL HACER SCROLL
    // =========================================

    const navbar = document.querySelector('.sticky-navbar');

    if (navbar) {

        const sticky = navbar.offsetTop;

        function stickyNavbar() {

            if (window.scrollY > sticky) {
                navbar.classList.add('fixed');
            } else {
                navbar.classList.remove('fixed');
            }

        }

        window.addEventListener('scroll', stickyNavbar);

        // Ejecutar una vez al cargar
        stickyNavbar();
    }


    // =========================================
    // TEXTO ANIMADO CON TYPED.JS
    // =========================================

    const typedElement = document.querySelector('#type-it');

    if (
        typedElement &&
        typeof Typed !== 'undefined'
    ) {

        new Typed('#type-it', {

            strings: [
                'Programación',
                'Frontend',
                'Backend',
                'Bases de Datos',
                'Soluciones Digitales'
            ],

            typeSpeed: 60,

            backSpeed: 35,

            backDelay: 1400,

            startDelay: 400,

            loop: true,

            showCursor: true,

            cursorChar: '|'

        });

    }


    // =========================================
    // CERRAR MENÚ MÓVIL AL HACER CLIC
    // =========================================

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const navbarCollapse =
        document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {

        link.addEventListener('click', function () {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains('show')
            ) {

                const collapseInstance =
                    bootstrap.Collapse.getOrCreateInstance(
                        navbarCollapse
                    );

                collapseInstance.hide();
            }

        });

    });


    // =========================================
    // RESALTAR SECCIÓN ACTIVA EN EL NAVBAR
    // =========================================

    const sections =
        document.querySelectorAll(
            'section[id], div.section-container[id]'
        );


    function activeSection() {

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute('id');


            const correspondingLink =
                document.querySelector(
                    `.navbar-nav .nav-link[href="#${sectionId}"]`
                );


            if (!correspondingLink) {
                return;
            }


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                });


                correspondingLink.classList.add('active');

            }

        });

    }


    window.addEventListener(
        'scroll',
        activeSection
    );


    activeSection();


    // =========================================
    // EVITAR ENVÍO DEL FORMULARIO DE CONTACTO
    // =========================================

    const contactForm =
        document.querySelector('#contact form');


    if (contactForm) {

        contactForm.addEventListener(
            'submit',
            function (event) {

                event.preventDefault();

            }
        );

    }

});