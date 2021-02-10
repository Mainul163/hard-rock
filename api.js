const searchSongs=async ()=>{
    const searchText=document.getElementById("search-filed").value;
    //using api from programin hero => hard-rock=metal repositary (api)=>https://api.lyrics.ovh/suggest/:searchText
    const url=`https://api.lyrics.ovh/suggest/:${searchText}`
   //  fetch(url)
   // .then(res => res.json())
   // .then(data=>displaysong (data.data))
       const res= await fetch(url);
       const data=await res.json();
       displaysong(data.data);
}

const displaysong = songs =>{
 console.log(songs);
 const songContainers= document.getElementById("songContainer");
 songContainers.innerHTML="";

 //for array oject

 songs.forEach(song => {
   
    const songDiv=document.createElement("div");
    songDiv.className='single-result row align-items-center my-3 p-3';
    songDiv.innerHTML=`
    <div class="col-md-9">
    <h3 class="lyrics-name">${song.title}</h3>
    <p class="author lead">Album by <span>${song.artist.name}</span></p>
    <audio controls>
    <source src="${song.preview}" >
    
    </audio>
   </div>
   <div class="col-md-3 text-md-right text-center">
   <button  onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
   </div>
    `
   songContainers.appendChild(songDiv);
 });
     
}

const getLyric= async (artist,title) =>{
  const url =`https://api.lyrics.ovh/v15/${artist}/${title}`;

  fetch(url)
  .then(res => res.json())
  .then(data => diplayLyrics (data.lyrics))
//     try{
//       const res = await fetch(url);
//       const data=await res.json();
//       diplayLyrics(data.lyrics);
// }
    
//     catch(error){
//      console.log(error);
//     }
//    }
const diplayLyrics= lyrics =>{
  const lyricsDiv=document.getElementById("song");
  lyricsDiv.innerText=lyrics;

}