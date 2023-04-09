let points =0;
let lives;
let time ;

const balSound = document.querySelector("#balSound");
const astSound = document.querySelector("#astSound");
const winSound = document.querySelector("#winSound");
const loseSound = document.querySelector("#loseSound");
const backSound = document.querySelector("#backSound");



function killAllSounds1() {

    console.log(`sound1`);

    if (balSound.muted ===false) {

   
    balSound.muted = true;
    astSound.muted = true;
    winSound.muted = true;
    loseSound.muted = true;
    backSound.muted = true;
    document.getElementById('musicOn').style.backgroundImage="url(../graphics/VolumeOff.svg)";
    document.getElementById('musicOn1').style.backgroundImage="url(../graphics/VolumeOff.svg)";
    document.getElementById('musicOn2').style.backgroundImage="url(../graphics/VolumeOff.svg)";
    document.getElementById('musicOn3').style.backgroundImage="url(../graphics/VolumeOff.svg)";
    document.getElementById('musicOn4').style.backgroundImage="url(../graphics/VolumeOff.svg)";

}
    else {
        balSound.muted = false;
        astSound.muted = false;
        winSound.muted = false;
        loseSound.muted = false;
        backSound.muted = false;
        document.getElementById('musicOn').style.backgroundImage="url(../graphics/VolumeOn.svg)";
        document.getElementById('musicOn1').style.backgroundImage="url(../graphics/VolumeOn.svg)";
        document.getElementById('musicOn2').style.backgroundImage="url(../graphics/VolumeOn.svg)";
        document.getElementById('musicOn3').style.backgroundImage="url(../graphics/VolumeOn.svg)";
        document.getElementById('musicOn4').style.backgroundImage="url(../graphics/VolumeOn.svg)";
    }
}

window.addEventListener("load", start);



function start(){
    console.log("start");
    lives = 3;
    points = 0;
    time = 61;

    winSound.pause();
    winSound.currentTime = 0;

    loseSound.pause();
    loseSound.currentTime = 0;
    
    showPoints();

    WelcomePage();

    document.getElementById('musicOn').style.backgroundImage="url(../graphics/_VolumeOn.svg)";
}

function WelcomePage(){
    console.log(`showWelcomePage`);
    //show welcome page

    HideAllScreens();

    document.querySelector("#Welcome_Page").classList.remove("hidden");

    document.querySelector("#birds_sprite").classList.add("pattern");
    //sound control button
    //play sound
    //user clicks start button
    document.querySelector("#play_button").addEventListener("click" ,startGame);
    document.querySelector("#play_button").classList.add("pulse");
    //user clicks on instructions button
    document.querySelector("#instructions_button").addEventListener("click" ,showInstructions);

    document.querySelector("#musicOn_container1").addEventListener("click", killAllSounds1);

    
}

function startGame(){
    console.log("startGame");
    //show game screen

    HideAllScreens();

    backSound.play();
    backSound.volume = 0.2;

    document.querySelector("#game").classList.remove("hidden");
    
    //good elements start falling
    document.querySelector("#balloon1_container").classList.add("floating1" , "pos1" );
    document.querySelector("#balloon2_container").classList.add("floating1" , "pos4" );
    document.querySelector("#balloon3_container").classList.add("floating2" , "pos1");
    document.querySelector("#balloon4_container").classList.add("floating3" , "pos3" );
    document.querySelector("#balloon5_container").classList.add("floating4" , "pos7" );

    //bad elements start falling

    document.querySelector("#asteroid1_container").classList.add("falling2" , "pos2");
    document.querySelector("#asteroid2_container").classList.add("falling3" , "pos1");
    document.querySelector("#asteroid3_container").classList.add("falling1" , "pos8");
   
    //start timer
    showTimer();


    //user clicks balloon
    document.querySelector("#balloon1_container").addEventListener("click", BalloonHit);
    document.querySelector("#balloon2_container").addEventListener("click", Balloon2Hit);
    document.querySelector("#balloon3_container").addEventListener("click", Balloon3Hit);
    document.querySelector("#balloon4_container").addEventListener("click", Balloon4Hit);
    document.querySelector("#balloon5_container").addEventListener("click", Balloon5Hit);

    //user clicks asteroid
    document.querySelector("#asteroid1_container").addEventListener("click" , AsteroidHit1);
    document.querySelector("#asteroid2_container").addEventListener("click" , AsteroidHit2);
    document.querySelector("#asteroid3_container").addEventListener("click" , AsteroidHit3);

    

    //balloon completes iteration
    document.querySelector("#balloon1_container").addEventListener("animationiteration" , restartBalloon);
    document.querySelector("#balloon2_container").addEventListener("animationiteration" , restartBalloon2);
    document.querySelector("#balloon3_container").addEventListener("animationiteration" , restartBalloon3);
    document.querySelector("#balloon4_container").addEventListener("animationiteration" , restartBalloon4);
    document.querySelector("#balloon5_container").addEventListener("animationiteration" , restartBalloon5);


    //asteroid completes iteration
    document.querySelector("#asteroid1_container").addEventListener("animationiteration", restartAsteroid1);
    document.querySelector("#asteroid2_container").addEventListener("animationiteration", restartAsteroid2);
    document.querySelector("#asteroid3_container").addEventListener("animationiteration", restartAsteroid3);

    document.querySelector("#Home_button_game").addEventListener("click" ,start);


    document.querySelector("#musicOn_container").addEventListener("click", killAllSounds1);

    Lives();
    countPoints();
}


function BalloonHit(){
    console.log(`BalloonHit`);
    //stop falling
    document.querySelector("#balloon1_container").classList.add("stop");
    //play sound

    balSound.currentTime = 0;
    balSound.play();
    
    //zoom out
    document.querySelector("#balloon1_sprite").classList.add("zoom_out");
    //add point
    points = points + 1;
    console.log(`Points 1: ${points}`);

    showPoints();
   
    countPoints();
    //restart balloon when zoom out completes
    document.querySelector("#balloon1_sprite").addEventListener("animationend", restartBalloon )
}


function Balloon2Hit() {
    console.log("Balloon2Hit");

    document.querySelector("#balloon2_container").classList.add("stop");
    
    balSound.currentTime = 0;
    balSound.play();

    document.querySelector("#balloon2_sprite").classList.add("zoom_out");

    points = points +1;
    console.log(`Points 2: ${points}`);

    showPoints();
    countPoints();


    document.querySelector("#balloon2_sprite").addEventListener("animationend" , restartBalloon2);

}

function Balloon3Hit() {
    console.log("Balloon3Hit");

    document.querySelector("#balloon3_container").classList.add("stop");
    
    balSound.currentTime = 0;
    balSound.play();
    
    document.querySelector("#balloon3_sprite").classList.add("zoom_out");

    points = points +1;
    console.log(`Points 3: ${points}`);

    showPoints();
    countPoints();


    document.querySelector("#balloon3_sprite").addEventListener("animationend" , restartBalloon3);
    
}

function Balloon4Hit() {
    console.log("Balloon4Hit");

    document.querySelector("#balloon4_container").classList.add("stop");
    
    balSound.currentTime = 0;
    balSound.play();
    
    document.querySelector("#balloon4_sprite").classList.add("zoom_out");

    points = points +1;
    console.log(`Points 4: ${points}`);

    showPoints();
    countPoints();

    document.querySelector("#balloon4_sprite").addEventListener("animationend" , restartBalloon4);

}

function Balloon5Hit() {
    console.log("Balloon5Hit");

    document.querySelector("#balloon5_container").classList.add("stop");

    balSound.currentTime = 0;
    balSound.play();
    document.querySelector("#balloon5_sprite").classList.add("zoom_out");

   

    points = points +1;
    console.log(`Points 5: ${points}`);

    showPoints();
    countPoints();

    document.querySelector("#balloon5_sprite").addEventListener("animationend" , restartBalloon5);

}

function AsteroidHit1() {
    console.log(`Asteroid 1 Hit`);

    document.querySelector("#asteroid1_container").classList.add("stop");
    
    astSound.currentTime = 0;
    astSound.play();
    
    document.querySelector("#asteroid1_sprite").classList.add("zoom_out");

    lives = lives -1;
    console.log(`Lives: ${lives}`);

    document.querySelector("#asteroid1_sprite").addEventListener("animationend" , restartAsteroid1);

    Lives();
}

function AsteroidHit2() {
    console.log(`Asteroid 2 Hit`);

    document.querySelector("#asteroid2_container").classList.add("stop");
    
    astSound.currentTime = 0;
    astSound.play();
    
    document.querySelector("#asteroid2_sprite").classList.add("zoom_out");

    lives = lives -1;
    console.log(`Lives: ${lives}`);

    document.querySelector("#asteroid2_sprite").addEventListener("animationend" , restartAsteroid2);
 
    Lives();
}

function AsteroidHit3() {
    console.log(`Asteroid 3 Hit`);

    document.querySelector("#asteroid3_container").classList.add("stop");
    
    astSound.currentTime = 0;
    astSound.play();    
    
    document.querySelector("#asteroid3_sprite").classList.add("zoom_out");

    lives = lives -1;
    console.log(`Lives: ${lives}`);

    document.querySelector("#asteroid3_sprite").addEventListener("animationend" , restartAsteroid3);

    Lives();
}

function restartBalloon() {
    
    document.querySelector("#balloon1_container").classList.value="";
    document.querySelector("#balloon1_sprite").classList.value="";
    document.querySelector("#balloon1_sprite").removeEventListener("animationend", restartBalloon);

    document.querySelector("#balloon1_container").offsetHeight;

    let randomPosition = generateRandomNumber(10);
    document.querySelector("#balloon1_container").classList.add("floating1" , "pos"+randomPosition);

}


function restartBalloon2() {
    
    document.querySelector("#balloon2_container").classList.value="";
    document.querySelector("#balloon2_sprite").classList.value="";
    document.querySelector("#balloon2_sprite").removeEventListener("animationend" , restartBalloon2);

    document.querySelector("#balloon2_container").offsetHeight;

    let randomPosition = generateRandomNumber(10);
    document.querySelector("#balloon2_container").classList.add("floating2" , "pos"+randomPosition); 

}


function restartBalloon3() {
  
    document.querySelector("#balloon3_container").classList.value="";
    document.querySelector("#balloon3_sprite").classList.value="";
    document.querySelector("#balloon3_sprite").removeEventListener("animationend", restartBalloon3);

    document.querySelector("#balloon3_container").offsetHeight;

    let randomPosition = generateRandomNumber(10);
    document.querySelector("#balloon3_container").classList.add("floating4" , "pos"+randomPosition);

}

function restartBalloon4() {
    
    document.querySelector("#balloon4_container").classList.value="";
    document.querySelector("#balloon4_sprite").classList.value="";
    document.querySelector("#balloon4_sprite").removeEventListener("animationend", restartBalloon4);

    document.querySelector("#balloon4_container").offsetHeight;

    let randomPosition = generateRandomNumber(10);
    document.querySelector("#balloon4_container").classList.add("floating1" , "pos"+randomPosition);

}

function restartBalloon5() {
    
    document.querySelector("#balloon5_container").classList.value="";
    document.querySelector("#balloon5_sprite").classList.value="";
    document.querySelector("#balloon5_sprite").removeEventListener("animationend", restartBalloon5);

    document.querySelector("#balloon5_container").offsetHeight;

    let randomPosition = generateRandomNumber(10);
    document.querySelector("#balloon5_container").classList.add("floating3" , "pos"+randomPosition);

}


function restartAsteroid1() {
    
   
    document.querySelector("#asteroid1_container").classList.value="";
    document.querySelector("#asteroid1_sprite").classList.value="";
    document.querySelector("#asteroid1_sprite").removeEventListener("animationend", restartAsteroid1);

    document.querySelector("#asteroid1_container").offsetHeight;

    let randomPosition = generateRandomNumber(10);
    document.querySelector("#asteroid1_container").classList.add("falling1" , "pos"+randomPosition);

}

function restartAsteroid2() {
    
   
    document.querySelector("#asteroid2_container").classList.value="";
    document.querySelector("#asteroid2_sprite").classList.value="";
    document.querySelector("#asteroid2_sprite").removeEventListener("animationend", restartAsteroid2);

    document.querySelector("#asteroid2_container").offsetHeight;

    let randomPosition = generateRandomNumber(10);
    document.querySelector("#asteroid2_container").classList.add("falling3" , "pos"+randomPosition);

}

function restartAsteroid3() {
    
   
    document.querySelector("#asteroid3_container").classList.value="";
    document.querySelector("#asteroid3_sprite").classList.value="";
    document.querySelector("#asteroid3_sprite").removeEventListener("animationend", restartAsteroid1);

    document.querySelector("#asteroid3_container").offsetHeight;

    let randomPosition = generateRandomNumber(10);
    document.querySelector("#asteroid3_container").classList.add("falling2" , "pos"+randomPosition);

}


function startTimer() {
    console.log("startTimer");
}

function showTimer() {
    
    time = time -1;
    document.querySelector("#time_left").textContent = time;
    countTime();
}

function countTime() {
    

    if(time > 0) {
        setTimeout(showTimer , 1000);        
    } else {
        gameOver();
    }

    document.querySelector("#time").classList.add("pulse");
}

function Lives() {
    
    if( lives >2){
        document.getElementById('lives_sprite').style.backgroundImage="url(../graphics/Lives3.svg)";

    }
    else if ( lives >1) {
        document.getElementById('lives_sprite').style.backgroundImage="url(../graphics/Lives2.svg)";
    }
    else if (lives >0){
        document.getElementById('lives_sprite').style.backgroundImage="url(../graphics/Life1.svg)";

    }
    else {
        gameOver();
    }

}

function countPoints(){
    if(points > 29){
        Winning();
    }
}

function showPoints() {
    
    document.querySelector("#current_score").textContent = points;

    console.log(`Points 4: ${points}`);
}

showPoints();


function gameOver(){
    console.log(`gameOver`); 

    backSound.pause();
    backSound.currentTime = 0;

    //remove all animations
    document.querySelector("#balloon1_container").classList.value="";
    document.querySelector("#balloon2_container").classList.value="";
    document.querySelector("#balloon3_container").classList.value="";
    document.querySelector("#balloon4_container").classList.value="";
    document.querySelector("#balloon5_container").classList.value="";

    document.querySelector("#asteroid1_container").classList.value="";
    document.querySelector("#asteroid2_container").classList.value="";
    document.querySelector("#asteroid3_container").classList.value="";

    document.querySelector("#balloon1_container").removeEventListener("click", BalloonHit);
    document.querySelector("#balloon2_container").removeEventListener("click", Balloon2Hit);
    document.querySelector("#balloon3_container").removeEventListener("click", Balloon3Hit);
    document.querySelector("#balloon4_container").removeEventListener("click", Balloon4Hit);
    document.querySelector("#balloon5_container").removeEventListener("click", Balloon5Hit);

    //user clicks asteroid
    document.querySelector("#asteroid1_container").removeEventListener("click" , AsteroidHit1);
    document.querySelector("#asteroid2_container").removeEventListener("click" , AsteroidHit2);
    document.querySelector("#asteroid3_container").removeEventListener("click" , AsteroidHit3);

    document.querySelector("#balloon1_container").removeEventListener("animationiteration" , restartBalloon);
    document.querySelector("#balloon2_container").removeEventListener("animationiteration" , restartBalloon2);
    document.querySelector("#balloon3_container").removeEventListener("animationiteration" , restartBalloon3);
    document.querySelector("#balloon4_container").removeEventListener("animationiteration" , restartBalloon4);
    document.querySelector("#balloon5_container").removeEventListener("animationiteration" , restartBalloon5);


    //asteroid completes iteration
    document.querySelector("#asteroid1_container").removeEventListener("animationiteration", restartAsteroid1);
    document.querySelector("#asteroid2_container").removeEventListener("animationiteration", restartAsteroid2);
    document.querySelector("#asteroid3_container").removeEventListener("animationiteration", restartAsteroid3);

    //win or lose

    if(points >29 && lives >0) {
        Winning();
    } else {
        Losing();
    }

}

function Losing() {
    console.log(`Losing`);

    document.querySelector("#Game_Over").classList.remove("hidden");

    document.querySelector("#replay_button").classList.add("pulse");
    document.querySelector("#replay_button").addEventListener("click" ,start);

    document.querySelector("#instructions_button1").addEventListener("click" ,showInstructions);

    document.querySelector("#leaf_sprite").classList.add("leaf_falling");
    

    document.querySelector("#Home_button").addEventListener("click" ,start);

    loseSound.play();

    document.querySelector("#musicOn_container2").addEventListener("click", killAllSounds1);
}

function Winning() {
    console.log(`Winning`);

    document.querySelector("#Win_Screen").classList.remove("hidden");

    document.querySelector("#WinDino_sprite").classList.add("DinoFlying");

    document.querySelector("#replay_button_win").classList.add("pulse");
    document.querySelector("#replay_button_win").addEventListener("click" ,start);

    document.querySelector("#instructions_button2").addEventListener("click" ,showInstructions);

    document.querySelector("#Home_button_win").addEventListener("click" ,start);

    winSound.play();

    document.querySelector("#musicOn_container4").addEventListener("click", killAllSounds1);

}



function showInstructions(){
    console.log(`showInstructions`)

    winSound.pause();
    winSound.currentTime = 0;
    loseSound.pause();
    loseSound.currentTime = 0;
    
    HideAllScreens();
    document.querySelector("#Instructions_Screen").classList.remove("hidden");
   
    document.querySelector("#play_button_inst").classList.add("pulse");
    document.querySelector("#play_button_inst").addEventListener("click" ,start);
   
    document.querySelector("#Home_button_inst").addEventListener("click" ,start);
    
    document.querySelector("#musicOn_container3").addEventListener("click", killAllSounds1);
   
}

function HideAllScreens(){
    console.log(`Hide All Screens`);

    document.querySelector("#Instructions_Screen").classList.add("hidden");
    document.querySelector("#Game_Over").classList.add("hidden");
    document.querySelector("#Welcome_Page").classList.add("hidden");
    document.querySelector("#Win_Screen").classList.add("hidden");
}

function generateRandomNumber(number) {
    return Math.floor(Math.random() * number) +1;

}