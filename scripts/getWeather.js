import { getCurrentWeather, type } from "./getWeather.mjs";

// Park data: name, coordinates, and image
const parks = [
    { name: "Redwoods", lat: 41.43569332463561, lon: -124.04898977946422, image: "redwoods.webp" },
    { name: "Olympic", lat: 47.9011, lon: -123.6044, image: "olympic.webp" },
    { name: "Kenai Fjords", lat: 59.6972, lon: -149.6897, image: "kenai.webp" },
    { name: "White Sands", lat: 32.3899, lon: -106.4707, image: "whitesands.webp" }
];

// Display the default park on page load
type(parks[0].name, parks[0].image);
getCurrentWeather(parks[0].lat, parks[0].lon, parks[0].name);

// Button click handlers
document.querySelector("#park1").addEventListener("click", () => {
    type(parks[0].name, parks[0].image);
    getCurrentWeather(parks[0].lat, parks[0].lon, parks[0].name);
});

document.querySelector("#park2").addEventListener("click", () => {
    type(parks[1].name, parks[1].image);
    getCurrentWeather(parks[1].lat, parks[1].lon, parks[1].name);
});

document.querySelector("#park3").addEventListener("click", () => {
    type(parks[2].name, parks[2].image);
    getCurrentWeather(parks[2].lat, parks[2].lon, parks[2].name);
});

document.querySelector("#park4").addEventListener("click", () => {
    type(parks[3].name, parks[3].image);
    getCurrentWeather(parks[3].lat, parks[3].lon, parks[3].name);
});
