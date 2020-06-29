const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];


fetch(endPoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

//  console.log(cities);



function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        return place.city.match(wordToMatch) || place.state.match(wordToMatch);
    })

}


function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            return `
            <li>
                <span class="name">${place.city},${place.state}</span><span></span>
                <span class="population">${place.population}</span>
            </li>
            `;
        }).join('');
        suggest.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggest = document.querySelector('.suggestions');


searchInput.addEventListener('keyup', displayMatches);

