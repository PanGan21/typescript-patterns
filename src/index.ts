import { Company } from "./Company";
import { User } from "./User";

// Load google api in html
const API_KEY = process.env.GOOGLEMAP_API_KEY;
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
document.body.append(script);

const user = new User();
const company = new Company();
console.log(user);
console.log(company);
