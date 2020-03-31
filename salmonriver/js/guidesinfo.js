const requestURL = 'https://camiruth.github.io/JSON/guides.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const guides = jsonObject['guides'];
        console.log(guides);



        for (let i = 0; i < guides.length; i++) {
                let card = document.createElement('section');
                card.classList.add('hover');
                let div = document.createElement('div');

                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let img = document.createElement('img');


                h2.textContent = guides[i].name;
                h3.textContent = guides[i].biography;
                p1.textContent = "Certification Level: " + guides[i].certLevel;
                p2.textContent = "Years Experience: " + guides[i].yearsExp;
                p3.textContent = "Email: " + guides[i].emailAddress;
                img.setAttribute('src', 'images/' + guides[i].photo);
                img.setAttribute('alt', guides[i].name);

                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);

                card.appendChild(div);
                card.appendChild(img);

                document.querySelector('div.cards').appendChild(card);
        }
    });