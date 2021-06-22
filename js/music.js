var audioPlayer = document.getElementById('audioplayer');
var loaded = false;

var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');

pauseBtn.addEventListener('click',(e)=>{
    e.preventDefault();
         
     playBtn.style.display = "inline";
     pauseBtn.style.display = "none";
     audioPlayer.pause();

    return false;
});

playBtn.addEventListener('click',(e)=>{
    e.preventDefault();
         
     playBtn.style.display = "none";
     pauseBtn.style.display = "inline";
     audioPlayer.play();

     

    return false;
});






const playSong = (file) => {
    if(loaded == false){
        audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3">`;
        
        loaded = true;
        
    }
    audioPlayer.play();

    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}
document.querySelectorAll('.main-col').forEach(item =>{

    item.addEventListener('click', Event=>{
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');

        
        let playerArtistComponent = document.getElementsByClassName('player-artist');

        playerArtistComponent[0].innerHTML=`
        <img src="`+image+`" /> 
        <h3>`+artist+`<br /> <span>`+song+` </span> </h3>
        
        `;

        playSong(file);
    })
});



function progress(){
    var prg = document.getElementById('progress');
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 50);
}
function frame(){
    if(progress == 500 && counter == 100){
        clearInterval(id);
    }else {
        progress += 5;
        counter += 1;
        prg.style.width = progress + 'px';
    }

}