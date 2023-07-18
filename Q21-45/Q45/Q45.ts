function create_car(manufacturer: string, model: string, ...kwargs: any[]): object {
  let car: any = {
    manufacturer: manufacturer,
    model: model
  };

  for (let i = 0; i < kwargs.length; i += 2) {
    let key = kwargs[i];
    let value = kwargs[i + 1];
    car[key] = value;
  }

  return car;
}

// Calling the create_car() function with required information and additional name-value pairs
let car = create_car('Toyota', 'Corolla', 'color', 'red', 'year', 2022);

// Printing the returned object to ensure all the information was stored correctly
console.log(car);
