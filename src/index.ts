import { Company } from "./Company";
import { User } from "./User";

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap`;
script.defer = true;

// @ts-ignore
window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: { lat: 0, lng: 0 },
  });
};

document.body.appendChild(script);
