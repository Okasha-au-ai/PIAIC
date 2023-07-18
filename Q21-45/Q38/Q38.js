function describe_city(city, country) {
    if (country === void 0) { country = 'Default Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the describe_city() function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Paris', 'France');
describe_city('New York');
