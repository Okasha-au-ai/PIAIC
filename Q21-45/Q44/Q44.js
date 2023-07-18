function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Bread");
    console.log("Enjoy your sandwich!\n");
}
// Calling the make_sandwich() function with different numbers of arguments
make_sandwich("Cheese", "Tomato", "Lettuce");
make_sandwich("Turkey", "Bacon");
make_sandwich("Ham", "Swiss", "Mustard", "Pickles", "Onions");
