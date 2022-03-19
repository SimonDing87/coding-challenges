// This problem was asked by Apple.

// You are going on a road trip, and would like to create a suitable music playlist. The trip will require N songs, though you only have M songs downloaded, where M < N. A valid playlist should select each song at least once, and guarantee a buffer of B songs between repeats.

// Given N, M, and B, determine the number of valid playlists.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generatePlaylist(n, m, b) {
    let playlist = [];
    let songs = [];

    for (let i = 0; i < m; i++) {
        songs.push(i);
    }
    let availableSelections = songs.slice();

    // first ensure all songs are selected at least once;
    while (availableSelections.length) {
        let selectionsLength = availableSelections.length;
        let randomInt = getRandomInt(0, selectionsLength)
        let randomSong = availableSelections[randomInt];
        playlist.push(randomSong);
        availableSelections.splice(randomInt, 1);
    }

    // find the last b songs of playlist to exclude, keep track of available songs and songs to exclude
    let availableSongs = playlist.slice();
    let songsToExclude = [];
    for (let i = 0; i < b; i++) {
        songsToExclude.push(availableSongs.pop());
    }
    let selectionsLength = availableSongs.length; // available songs at this point will always be the same since

    while (playlist.length !== n) {
        // randomly select song from available songs
        let randomInt = getRandomInt(0, selectionsLength);
        let selectedSong = availableSongs[randomInt];
        playlist.push(selectedSong);

        // remove the song from available list, and add to exclude list
        availableSongs.splice(randomInt, 1);
        songsToExclude.unshift(selectedSong);
        availableSongs.push(songsToExclude.pop());
    }


    return playlist;
}

console.log(generatePlaylist(10, 6, 4));