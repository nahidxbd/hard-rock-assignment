// diplayBlock for FancyPart :
document.getElementById("fancy").style.display = "none";



// searchbox result :
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function(){
    
  const searchBox= document.getElementById("search-box").value;
    fetch(`https://api.lyrics.ovh/suggest/${searchBox}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);

     const lyricList = document.getElementById('lyricList');

     lyricList.innerText = "";
     const allData = data.data;
     const dataInfo = allData.slice(0,10)
    for (let i = 0; i < dataInfo.length; i++) {
    

        const songTitle = dataInfo[i].title;
        const artistName = dataInfo[i].artist.name;
         lyricList.innerHTML += `<p  class="author lead"><strong>${songTitle}</strong> Album by <span>${artistName}</span> <button onclick="lyricsName('${artistName}', '${songTitle}')" class="btn btn-success">Get Lyrics</button></p>`
    }
   
   } )
   .catch(err => console.log(err));
})

// lyrics result
 function lyricsName(songTitle, artistName){
     fetch(`https://api.lyrics.ovh/v1/${songTitle}/${artistName}`)
     .then(response => response.json())
     .then(data =>{
         console.log(data);
         const songLyrics = document.getElementById('songLyrics');
         songLyrics.innerHTML = data.lyrics;

      const lyricTitle = document.getElementById('name');
      lyricTitle.innerText = `${songTitle} - ${artistName}`;
       
     })
     .catch(err => console.log(err));
 }

