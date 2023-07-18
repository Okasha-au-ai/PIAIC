function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making three function calls to create album objects
var album1 = make_album('Artist 1', 'Album 1');
var album2 = make_album('Artist 2', 'Album 2', 12);
var album3 = make_album('Artist 3', 'Album 3', 8);
// Printing the return values to show the album information stored in objects
console.log(album1);
console.log(album2);
console.log(album3);