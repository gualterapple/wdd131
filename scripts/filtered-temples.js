document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },


    {
        templeName: "Asunción Paraguay Temple",
        location: "Avda Brasilia Esquina Avda España Asunción, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg"
    },

    {
        templeName: "Atlanta Georgia Temple",
        location: "6450 Barfield Rd NE Sandy Springs, Georgia, United States",
        dedicated: "1983, June, 1–4",
        area: 34500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
    },

    {
        templeName: "Mendoza Argentina Temple",
        location: "Dr. E. Coni 2201 CP 5539  Ciudad de Mendoza, Mendoza",
        dedicated: "2024, September, 22",
        area: 21999,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739-main.jpg"
    },
];

function displayTemples(templesArray) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    templesArray.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName}" 
           loading="lazy">
    `;

        gallery.appendChild(card);
    });
}

displayTemples(temples);

function filterTemples(criteria) {
    let filtered = [];

    switch (criteria) {
        case "old":
            filtered = temples.filter(t => {
                const year = parseInt(t.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;

        case "new":
            filtered = temples.filter(t => {
                const year = parseInt(t.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;

        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;

        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;

        default:
            filtered = temples;
    }

    displayTemples(filtered);
}

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const text = e.target.textContent.toLowerCase();
        filterTemples(text);
        document.querySelector("main h2").textContent = e.target.textContent;
    });
});

