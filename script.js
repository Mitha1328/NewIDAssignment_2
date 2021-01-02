/*Javascript for search_character*/
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};
loadCharacters();

/*index javascript*/
//boxoffice chart
var chart433875 = new CanvasJS.Chart("boxoffice_chart",
{
    backgroundColor: "transparent",
    animationEnabled: true,
    title:{
        text: "Budget vs. Box Office",
        fontSize: 30,
        fontFamily: "'Henny Penny'",
        fontColor: "black",
        },	
    legend: {
        fontFamily: "'Open Sans'"
        },
    axisX: {
        labelFontSize:10,
        labelFontFamily: "'Open Sans'"
        },
    axisY: {
        titleFontSize:20,
        labelFontSize:15,
        labelFontFamily: "'Open Sans'"
        },	
    axisY2: {
        labelFontSize:15,
        labelFontFamily: "'Open Sans'"
        },
    data: [{
        color: "#222f5b",
        type: "column",	
        name: "Budget",
        legendText: "Budget",
        showInLegend: true, 
        dataPoints:[
            {label: "Philosophers Stone ($)", y: 125000000},
            {label: "Chamber of Secrets ($)", y: 100000000},
            {label: "Prisoner of Azkaban ($)", y: 130000000},
            {label: "Goblet of Fire ($)", y: 150000000},
            {label: "Order of the Phoenix ($)", y: 150000000},
            {label: "Half-Blood Prince ($)", y: 250000000},
            {label: "Deathly Hallows I ($)", y: 125000000},
            {label: "Deathly Hallows II ($)", y: 125000000}


        ]},

        {
            color: "#ae0001",
            type: "column",	
            name: "Worldwide Box Office",
            legendText: "Worldwide Box Office",
            axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                {label: "Philosophers Stone ($)", y: 974755371	},
                {label: "Chamber of Secrets ($)", y: 878979634},
                {label: "Prisoner of Azkaban ($)", y: 796688549},
                {label: "Goblet of Fire ($)", y: 896911078},
                {label: "Order of the Phoenix ($)", y: 942943935},
                {label: "Half-Blood Prince ($)", y: 935083686},
                {label: "Deathly Hallows I ($)", y: 960283305},
                {label: "Deathly Hallows II ($)", y: 1341511219}
            ]
        }
    ],
});

chart433875.render();
chart433875 = {};

//award chart
var chart786968 = new CanvasJS.Chart("award_chart_container", {
backgroundColor: "transparent",
title: {
text: "Film Awards",
fontFamily: "'Henny Penny'",
fontColor: "black",
},
animationEnabled: true,
data: [{
type: "doughnut",
startAngle: 60,
indexLabelFontFamily: "'Open Sans'",
indexLabelFontSize: 15,
toolTipContent: "{legendText}: {y}",
showInLegend: false,
dataPoints: [{
    y: 17,
    indexLabel: "Philosopher's Stone",
    legendText: "Philosopher's Stone",
    color: "#b80c0c"
}, {
    y: 11,
    indexLabel: "Chamber of Secrets",
    legendText: "Chamber of Secrets",
    color: "#eee117"
}, {
    y: 14,
    indexLabel: "Prisoner of Azkaban",
    legendText: "Prisoner of Azkaban",
    color: "#b80c0c"
}, {
    y: 13,
    indexLabel: "Goblet of Fire",
    legendText: "Goblet of Fire",
    color: "#eee117"
}, {
    y: 14,
    indexLabel: "Order of the Phoenix",
    legendText: "Goblet of Fire",
    color: "#b80c0c"
}, {
    y: 8,
    indexLabel: "Half-Blood Prince",
    legendText: "Half-Blood Prince",
    color: "#eee117"
}, {
    y: 16,
    indexLabel: "Deathly Hallows I",
    legendText: "Deathly Hallows I",
    color: "#b80c0c"
}, {
    y: 46,
    indexLabel: "Deathly Hallows II",
    legendText: "Deathly Hallows II",
    color: "#eee117"
}]
}]
});
chart786968.render();
chart786968 = {};


//location map 
var map = L.map('location_map').setView([54.343,1.669], 4.3);
L.tileLayer('https://api.mapbox.com/styles/v1/sophhibb/cizzjlu5700h52ro47x1lkl7z/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic29waGhpYmIiLCJhIjoiY2l6emVhZDV5MDAzcjMzcGYxa3h4YW90cyJ9.bZMYZCAx4z-f2KleNaWtFA', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

//location data
$.getJSON('https://spreadsheets.google.com/feeds/list/1VEZ2yQ66hmULa1H4LAAoTFME5HVfs5avM2b-uFaPG8Y/1/public/values?alt=json-in-script&callback=?').then(function (data) {

data.feed.entry.forEach(function (item) {

var popupText = '<b>' + item.gsx$locationname.$t + '</b><br><i>' + item.gsx$film.$t + '</i><br>' + item.gsx$address.$t 

L.marker([item.gsx$latitude.$t, item.gsx$longitude.$t]).addTo(map)
.bindPopup(popupText)
})

})

//sources
$(".sources").hide();

$(".click_sources").click(function(){
$(".sources").show();
$(".click_sources").hide();
});
/*notebook javascript*/
