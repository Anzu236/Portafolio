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

    const navLinks =
        document.querySelectorAll(
            '.navbar-nav .nav-link'
        );

    const navbarCollapse =
        document.querySelector(
            '.navbar-collapse'
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            'click',
            function () {

                if (
                    navbarCollapse &&
                    navbarCollapse.classList.contains('show') &&
                    typeof bootstrap !== 'undefined'
                ) {

                    const collapseInstance =
                        bootstrap.Collapse.getOrCreateInstance(
                            navbarCollapse
                        );

                    collapseInstance.hide();
                }

            }
        );

    });


    // =========================================
    // RESALTAR SECCIÓN ACTIVA EN EL NAVBAR
    // =========================================

    const sections =
        document.querySelectorAll(
            'section[id]'
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
    // FORMULARIO DE CONTACTO
    // =========================================

    const contactForm =
        document.querySelector('#contact form');


    if (contactForm) {

        contactForm.addEventListener(
            'submit',
            function (event) {

                event.preventDefault();


                const nombre =
                    document
                        .getElementById('name')
                        .value
                        .trim();


                const correo =
                    document
                        .getElementById('email')
                        .value
                        .trim();


                const asunto =
                    document
                        .getElementById('subject')
                        .value
                        .trim();


                const mensaje =
                    document
                        .getElementById('floatingTextarea')
                        .value
                        .trim();


                // =====================================
                // VALIDACIÓN
                // =====================================

                if (
                    nombre === '' ||
                    correo === '' ||
                    asunto === '' ||
                    mensaje === ''
                ) {

                    alert(
                        'Por favor completa todos los campos.'
                    );

                    return;
                }


                // =====================================
                // VALIDACIÓN BÁSICA DE CORREO
                // =====================================

                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailRegex.test(correo)) {

                    alert(
                        'Por favor ingresa un correo válido.'
                    );

                    return;
                }


                // =====================================
                // CREAR MENSAJE
                // =====================================

                const cuerpoCorreo =
                    `Hola Angélica,%0D%0A%0D%0A` +
                    `${mensaje}%0D%0A%0D%0A` +
                    `Nombre: ${nombre}%0D%0A` +
                    `Correo: ${correo}`;


                const mailtoLink =
                    `mailto:ange.aps@gmail.com` +
                    `?subject=${encodeURIComponent(asunto)}` +
                    `&body=${cuerpoCorreo}`;


                // =====================================
                // ABRIR CLIENTE DE CORREO
                // =====================================

                window.location.href =
                    mailtoLink;

            }
        );

    }

});