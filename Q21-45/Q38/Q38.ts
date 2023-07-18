function describe_city(city: string, country: string = 'Default Country'): void {
  console.log(`${city} is in ${country}.`);
}

// Calling the describe_city() function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Paris', 'France');
describe_city('New York');