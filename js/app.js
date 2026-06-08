async function loadContent() {

    const response = await fetch("./data/content.json");
    const data = await response.json();

    document.getElementById("logo").textContent =
        data.site.logo;

    document.getElementById("hero-title").textContent =
        data.hero.title;

    document.getElementById("hero-description").textContent =
        data.hero.description;

    document.getElementById("hero-btn1").textContent =
        data.hero.button1;

    document.getElementById("hero-btn2").textContent =
        data.hero.button2;

    document.getElementById("services-title").textContent =
        data.services.title;

    document.getElementById("services-subtitle").textContent =
        data.services.subtitle;

    const servicesContainer =
        document.getElementById("services-container");

    data.services.items.forEach(service => {

        servicesContainer.innerHTML += `
        <div class="service-card reveal">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>`;
    });

    document.getElementById("about-title").textContent =
        data.about.title;

    document.getElementById("about-p1").textContent =
        data.about.paragraph1;

    document.getElementById("about-p2").textContent =
        data.about.paragraph2;

    document.getElementById("about-image").src =
        data.about.image;

    const statsContainer =
        document.getElementById("stats-container");

    data.stats.forEach(stat => {

        statsContainer.innerHTML += `
        <div class="stat reveal">
            <h3>${stat.number}</h3>
            <p>${stat.label}</p>
        </div>`;
    });

    const testimonialContainer =
        document.getElementById("testimonials-container");

    data.testimonials.forEach(item => {

        testimonialContainer.innerHTML += `
        <div class="testimonial reveal">
            <p>${item.message}</p>
            <h4>${item.name}</h4>
        </div>`;
    });

    document.getElementById("contact-title").textContent =
        data.contact.title;

    document.getElementById("contact-description").textContent =
        data.contact.description;

    document.getElementById("footer-text").textContent =
        data.footer.text;

    revealElements();
}

loadContent();

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function revealElements() {

    const reveals =
        document.querySelectorAll('.reveal');

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop =
            el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }

    });
}

window.addEventListener('scroll', revealElements);

document.addEventListener("submit", function(e){

    if(e.target.tagName === "FORM"){
        e.preventDefault();
        alert("Thank you! Your message has been received.");
        e.target.reset();
    }

});