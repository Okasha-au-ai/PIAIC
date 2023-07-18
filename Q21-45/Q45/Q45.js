function create_car(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < kwargs.length; i += 2) {
        var key = kwargs[i];
        var value = kwargs[i + 1];
        car[key] = value;
    }
    return car;
}
// Calling the create_car() function with required information and additional name-value pairs
var car = create_car('Toyota', 'Corolla', 'color', 'red', 'year', 2022);
// Printing the returned object to ensure all the information was stored correctly
console.log(car);
