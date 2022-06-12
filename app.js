//PLAYBACK A SINGLE VIDEO
jwplayer("player1").setup({
    "file": "https://cdn.jwplayer.com/videos/xLfyEXIR-4VYd6OwD.mp4",
    "width": 540,
    "height": 360,
    "autostart": true,
    "repeat": true,
    "horizontalVolumeSlider": true
});



// ADD CAPTION TO VIDEO 
jwplayer("player2").setup({
    "playlist": [{
          "file": "https://cdn.jwplayer.com/videos/xLfyEXIR-4VYd6OwD.mp4",
          "tracks": [{
              "kind": "captions",
              "file": "https://cdn.jwplayer.com/tracks/DVXtluWe.vtt",
              "label": "English"
            },   
            ]
        }],
    "width": 540,
    "height": 360,
    "autostart": true,
    "repeat": true,
    "horizontalVolumeSlider": true
}).setCaptions({
    "backgroundOpacity": 80,
    "fontFamily": "Arial, sans-serif"
});



// ADD CHAPTERS TO VIDEO
jwplayer("player3").setup({
    "file": "https://cdn.jwplayer.com/videos/xLfyEXIR-4VYd6OwD.mp4",
    "tracks": [{
        "file":'https://cdn.jwplayer.com/tracks/mJclkSRr.vtt',
        "kind":'chapters'
      }],
    "width": 540,
    "height": 360,
    "autostart": true,
    "repeat": true,
    "horizontalVolumeSlider": true
});
    
