console.log("Welcome to Sportify");
//Initalize the variable
let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Aaj_Ki_Raat___Stree_2__",filePath:"songs/1.mp3",coverPath:"covers/img1.png"},
    {songName:"Aayi_Nai_-Stree_2",filePath:"songs/2.mp3",coverPath:"covers/img2.png"},
    {songName:"Abhijeet_Sawant___Official_Video___Prem___Hardeep(256k)",filePath:"songs/3.mp3",coverPath:"covers/img3.png"},
    {songName:"Choli_Ke_Peeche(0)",filePath:"songs/4.mp3",coverPath:"covers/img4.png"},
    {songName:"Chunnari_Chunnari_Song__Lyrical_",filePath:"songs/5.mp3",coverPath:"covers/img5.png"},
    {songName:"Dilbar(0)",filePath:"songs/6.mp3",coverPath:"covers/img6.png"},
    {songName:"Ishare_Tere__From__Ishare_Tere__(0)",filePath:"songs/7.mp3",coverPath:"covers/img7.png"},
    {songName:"Oh_Ho_Ho_Ho__Remix_(0)",filePath:"songs/8.mp3",coverPath:"covers/img8.png"},
    {songName:"Paani_Paani(0)",filePath:"songs/9.mp3",coverPath:"covers/img9.png"},
    {songName:"Tip_Tip(0)",filePath:"songs/10.mp3",coverPath:"covers/img10.png"}
]
songItems.forEach((element, i)=>{
 element.getElementsByTagName("img")[0].src = songs[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();

//handle play/pasue click

masterPlay.addEventListener('click',()=>{
 if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
 }
 else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
 }
})
//Listen to Event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update Seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
} 
Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('searchButton').onclick = function() {
    var searchTerm = document.getElementById('searchInput').value;
    alert('You searched for: ' + searchTerm);
};