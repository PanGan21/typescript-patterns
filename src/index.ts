import { CustomMap } from "./CustomMap";

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap`;
script.defer = true;

// @ts-ignore
window.initMap = function () {
  new CustomMap("map");
};

document.body.appendChild(script);
