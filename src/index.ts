import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap`;
script.defer = true;

// @ts-ignore
window.initMap = function () {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap("map");
  customMap.addUserMarker(user);
  customMap.addCompanyMarker(company);
};

document.body.appendChild(script);
