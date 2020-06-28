function getSong(){
    console.clear();
    const artist = document.getElementById("artist").value;
    const song = document.getElementById("song").value;
    const req = new XMLHttpRequest();
    let link = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
    req.open("GET", link);
    req.send();
    req.onload = function() {
      const json = JSON.parse(req.responseText);
      let lyrics = JSON.stringify(json["lyrics"]);
      try{
          console.log(lyrics.length);          
          document.getElementById("gen-artist").innerHTML = artist;
          document.getElementById("gen-title").innerHTML = song;
          lyrics = lyrics.substring(1,lyrics.length - 1).replace(/\\n|\\r\\n|\\r/g, '#').replace(/#{1,}/g,"<br/>");
          document.getElementById("gen-song").innerHTML = lyrics;
      }
      catch(err){
          alert("Invalid Selection");
      }
    }
}

function reset(){
    document.getElementById("artist").value ="";
    document.getElementById("song").value = "";
}