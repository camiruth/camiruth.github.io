const sodaURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(sodaURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towndata = jsonObject['towns'];
        console.log(towndata);

        for (let i = 0; i < towndata.length; i++) {
            if (towndata[i].name == "Soda Springs") {
                let card = document.createElement('section');
                card.classList.add('soda');
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                h2.textContent = "Events";

                for (let e = 0; e < towndata[i].events.length; e++) {
                    let p1 = document.createElement('p');
                    p1.textContent = towndata[i].events[e];
                    div.appendChild(p1);
                }
                card.appendChild(h2);
                card.appendChild(div);

                document.querySelector('.sodaevents').appendChild(card);
            }
        }
    });