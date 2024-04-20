
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");



const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("vr active");
};

recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    console.log(`my words : ${transcript}`);

    if(transcript.includes("hello, jarvis")){
        readOut("hello sir");
    }
    if(transcript.includes("what is my blood group")){
        readOut("sir your blood group is O positive");
    }
    if(transcript.includes("how are you")){
        readOut("i am fine sir what about you");
    }

    if(transcript.includes("tell me the poem in english")){
        readOut("sure sir");
        readOut("She walks in beauty, like the night Of cloudless climes and starry skies And all that’s best of dark and bright meet in her aspect and her eyes;thus mellowed to that tender light which heaven to gaudy day denies perhaps Byron’s best-loved and most widely anthologised lyric poem, ‘She Walks in Beauty’ is quoted in Dead Poets Society as an attempt to seduce a young woman, and it epitomises the Romantic poem idolising (and idealising) a woman’s beauty, as the opening lines (quoted above) make clear.");
    }
    if(transcript.includes("what is the name of the poem")){
        readOut("sir the poem name is she walks in beauty and the poet name is lord byron");
    }

    
    
    if(transcript.includes("open my notes app")){
        readOut("sure sir");
        window.open("file:///C:/Users/yashd/Documents/Notes%20app/index.html");
    }

    if(transcript.includes("open my calculator app")){
        readOut("sure sir");
        window.open("file:///C:/Users/yashd/Documents/Calculator/index.html");
    }
   
    if(transcript.includes("open my weather app")){
        readOut("sure sir");
        window.open("file:///C:/Users/yashd/Documents/Weather%20App/index.html");
    }

    if(transcript.includes("open my clock app")){
        readOut("sure sir");
        window.open("file:///C:/Users/yashd/Documents/clock/index.html");
    }
   
    
    if(transcript.includes("open course app")){
        readOut("sure sir");
        window.open("https://www.coursera.org/courseraplus?utm_source=bg&utm_medium=sem&utm_campaign=B2C_INDIA_subscribe__FTCOF_courseraplus_arte_bing&utm_content=B2C_INDIA_subscribe__FTCOF_courseraplus_arte_bing&campaignid=426115656&adgroupid=1209463278664114&device=c&keyword=coursera&matchtype=e&network=o&devicemodel=&adpostion=&creativeid=&hide_mobile_promo&msclkid=381a2208d0fe13748b9e478bdf017f1e&utm_term=coursera");
    }

    if(transcript.includes("open my dating app")){
        readOut("sure sir");
        window.open("file:///C:/Users/yashd/Documents/Dating%20App/index.html");
    }

    if(transcript.includes("jarvis what is my name?")){
        readOut("sir you name is yash singh");
    }

   

    if(transcript.includes("how old i am")){
        readOut("sir you are 21 years old");
    }
    if(transcript.includes("let's go")){
        readOut("sure sir");
    }
    if(transcript.includes("who are you")){
        readOut("i am jarvis");
    }
    if(transcript.includes("who is the creator of jarvis")){
        readOut("yash singh is the creator of jarvis");
    }


    if(transcript.includes("open youtube")){
        readOut("opening youtube sir");
        window.open("https://www.youtube.com/");
    }
    if(transcript.includes("open whatsapp")){
        readOut("opening whatsapp sir");
        window.open("https://web.whatsapp.com/");
    }
    if(transcript.includes("open spotify")){
        readOut("opening spotify sir");
        window.open("https://open.spotify.com/?");
    }
    if(transcript.includes("open amazon")){
        readOut("opening Amazon sir");
        window.open("https://www.amazon.in/?tag=msndeskstdin-21&ref=pd_sl_5hdwuvmnkr_e&adgrpid=1316117075550739&hvadid=82257581515009&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=149446&hvtargid=kwd-82258246315412:loc-90&hydadcr=14451_2334183");
    }
    if(transcript.includes("open instagram")){
        readOut("opening instagram sir");
        window.open("https://www.instagram.com/?hl=en");
    }
    if(transcript.includes("open google")){
        readOut("opening google sir");
        window.open("https://www.google.co.in/");
    }
    
    if(transcript.includes("open cinema")){
        readOut("opening jio cinema sir");
        window.open("https://www.jiocinema.com/");
    }

   
    if(transcript.includes("search for")){
        readOut("sir here your result");
        let input = transcript.split("");
        input.splice(0,11);
        input.pop();
        input = input.join("").split("").join("+");
        console.log(input);
        window.open(`https://www.google.co.in/search?q=${input}`);
    }


    if(transcript.includes("search for")){
        readOut("sir here your result");
        let input = transcript.split("");
        input.splice(0,11);
        input.pop();
        input = input.join("").split("").join("+");
        console.log(input);
        window.open(`https://www.youtube.com/results?search_query=${input}`);
    }




    if(transcript.includes("open bootstrap")){
        readOut("opening bootstrap sir");
        window.open("https://getbootstrap.com/docs/5.3/getting-started/introduction/");
    }
    if(transcript.includes("open firebase console")){
        readOut("opening firebase console sir");
        window.open("https://console.firebase.google.com/u/0/?_gl=1*2p4aw8*_ga*MTA5MDc5NzA0My4xNjk4Njc4OTkz*_ga_CW55HF8NVT*MTY5ODY3ODk5My4xLjEuMTY5ODY3OTE0Ni42MC4wLjA.&pli=1");
    }
    if(transcript.includes("open gmail")){
        readOut("opening gmail sir");
        window.open("https://mail.google.com/mail/u/0/#inbox");
    }
};

recognition.onend = function () {
    console.log("vr deactive");
};

// recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start();
});

stopBtn.addEventListener("click", () => {
    recognition.stop();
});


function readOut(message){
    const speech = new SpeechSynthesisUtterance();
   // const allVoices = speechSynthesis.getVoices();
    speech.text = message;
   // speech.voice = allVoices[36];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}


speakBtn.addEventListener("click", ()=> {
    readOut("hi,Good Evening To all Of You This is Jarvis I am going to tell about Yash Singh He Belongs to Varanasi but for studying purpose he is in prayagraj He has Completed his 10+2 from Mumbai He is pursuing Bachelor of Arts Degree from Varanasi.He Wants To be Frontend Developer That's all for today Thank You Have a Nice Day")
});




