/*User Stories:

You should create a function named flattenPlaylists that accepts an array of playlists where each playlist is an array of objects with the following properties: trackId, artist, title, votes, bpm. If the input is not an array, flattenPlaylists should return an empty array. An example playlist has been provided for you. You can use this example to test out your function.

flattenPlaylists should return a flat array of track objects, where each object includes all the original track properties plus a source property set to an array with the playlist index and the track index indicating where the track originated.

You should create a function named scoreTracks that accepts an array of track objects as returned by flattenPlaylists (each with trackId, artist, title, votes, bpm, and source properties) and returns a new array of track objects, each with a score property added using the formula: votes * 10 - Math.abs(bpm - 120).

You should create a function named dedupeTracks that accepts an array of track objects as returned by scoreTracks and returns a new array with duplicate trackId entries removed, keeping only the first occurrence of each.You should create a function named enforceArtistQuota that accepts an array of track objects as returned by dedupeTracks and a number representing the maximum allowed occurrences per artist. The function should return a new array where no artist appears more times than the given number, keeping the earliest occurrences.
You should create a function named buildSchedule that accepts an array of track objects as returned by enforceArtistQuota and returns a new array of { slot, trackId } objects, where slot is a 1-based index representing each track's position in the broadcast order.
You should create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist. The function should return the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.

*/

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  let result = [];

  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      result.push({
        ...playlists[i][j],
        source: [i, j]
      });
    }
  }

  return result;
}

function scoreTracks(tracks) {
  return tracks.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}

function dedupeTracks(tracks) {
  let seen = new Set();

  return tracks.filter(track => {
    if (seen.has(track.trackId)) {
      return false;
    }

    seen.add(track.trackId);
    return true;
  });
}

function enforceArtistQuota(tracks, maxPerArtist) {
  let artistCounts = {};

  return tracks.filter(track => {
    if (!artistCounts[track.artist]) {
      artistCounts[track.artist] = 0;
    }

    if (artistCounts[track.artist] < maxPerArtist) {
      artistCounts[track.artist]++;
      return true;
    }

    return false;
  });
}

function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const unique = dedupeTracks(scored);
  const limited = enforceArtistQuota(unique, maxPerArtist);

  return buildSchedule(limited);
}
