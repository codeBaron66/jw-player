// const options = {method: 'GET', headers: {Accept: 'application/json; charset=utf-8'}};

// fetch('https://cdn.jwplayer.com/v2/media/xLfyEXIR?max_resolution=640&format=json&default_source_fallback=true&poster_width=720&sources=hls', options)
//   .then(response => response.json())
//   .then(response => console.log(response.playlist))
//   .catc(err => console.error(err));

//Get 1 video to play back in default player
jwplayer("myplayer").setup({
    "playlist": "https://cdn.jwplayer.com/v2/playlists/AEkgh9L2"
  });

// jwplayer("myplayer").setup({ 
//     "playlist": [{
//         "file": "https://cdn.jwplayer.com/v2/playlists/AEkgh9L2"
//     }]
// });
