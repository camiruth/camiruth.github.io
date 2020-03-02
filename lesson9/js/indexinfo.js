const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towndata = jsonObject['towns'];
        console.log(towndata);

        let displaytowns = [towndata[4], towndata[5], towndata[1]];
        console.log(displaytowns);


        for (let i = 0; i < displaytowns.length; i++) {
            let card = document.createElement('section');
            let link = displaytowns[i].name.replace(/\s/g, '') + '.html'
            card.onclick = function() { window.open(link); };
            card.classList.add('hover');
            let div = document.createElement('div');
            if (i ==1) {
                div.classList.add("specialFloat");
            }
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = displaytowns[i].name;
            h3.textContent = displaytowns[i].motto;
            p1.textContent = "Year Founded: " + displaytowns[i].yearFounded;
            p2.textContent = "Population: " + displaytowns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + displaytowns[i].averageRainfall;
            img.setAttribute('src', 'images/' + displaytowns[i].photo);
            img.setAttribute('alt', displaytowns[i].name);

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