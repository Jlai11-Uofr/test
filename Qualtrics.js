var path = "https://jlai11-uofr.github.io/test/"

var timeline = [];


//                ******************Helper Function in python 3.7 that will help do stuff*
/* import os

directory = "C:\\Users\\Jonathan\\Desktop\\Js\\stimuli\\stimuli"


empty_arary = []
for item in os.listdir(directory):
empty_arary.append(item)

*/
var fullscreen_trial = {
type: 'fullscreen',
message: '<p style="color:red;">The experiment will switch to full screen mode when you press the button below</p>',
fullscreen_mode: true
}



timeline.push(fullscreen_trial);


var form_trial = {
type: 'survey-html-form',
preamble: '<p style="color:red;">Input Participant ID</b> </p>',
html:'<p style="color:red;"> ID <input name="id" type="text" />  </p>'
};


timeline.push(form_trial);
var source1 =  "stimuli/stimuli/";
var x = ['Noise.wav', 'Sound10c.wav', 'Sound10s.wav', 'Sound11c.wav', 'Sound11s.wav', 'Sound12c.wav', 'Sound12s.wav', 'Sound13c.wav', 'Sound13s.wav', 'Sound14c.wav', 'Sound14s.wav', 'Sound15c.wav', 'Sound15s.wav', 'Sound16c.wav', 'Sound16s.wav', 'Sound17c.wav', 'Sound17s.wav', 'Sound18c.wav', 'Sound18s.wav','Sound19c.wav','Sound19s.wav', 'Sound1c.wav', 'Sound1s.wav', 'Sound20c.wav', 'Sound20s.wav', 'Sound21c.wav', 'Sound21s.wav', 'Sound22c.wav', 'Sound22s.wav', 'Sound23c.wav', 'Sound23s.wav', 'Sound24c.wav', 'Sound24s.wav', 'Sound25c.wav', 'Sound25s.wav', 'Sound2c.wav', 'Sound2s.wav', 'Sound3c.wav', 'Sound3s.wav', 'Sound4c.wav', 'Sound4s.wav', 'Sound5c.wav', 'Sound5s.wav', 'Sound6c.wav', 'Sound6s.wav', 'Sound7c.wav', 'Sound7s.wav', 'Sound8c.wav', 'Sound8s.wav', 'Sound9c.wav', 'Sound9s.wav']

var x =   shuffle(x)



var file =  [];

for(i = 0 ;i<x.length; ++i) {
      file.push(source1.concat(x[i]))
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}








//todo Add all the files to to this


var welcome = {
  type: "html-keyboard-response",
  stimulus: '<p style="color:red;">In this task, you will be asked to listen to sound fragments. After each sound fragment plays, you will be asked whether or not you hear a voice speaking. The voice may be loud or extremely soft and just below auditory threshold. Please listen carefully. After each sound fragement you will be asked whether or not you heard a voice and how confident you are in this judgement.Do you have any questions? If not press any key to begin</p>'
};
timeline.push(welcome);






var i;





//Pop
for( i = 0 ; i <5; ++i) {

//




var trial1 = {
type: 'audio-button-response',
stimulus: path+file.pop(),
// stimulus: "stimuli/stimuli/Noise.wav",
choices: ['yes','no'],
prompt: '<p style="color:red;"">Do you hear a voice?</p>',
response_ends_trial: true
};
timeline.push(trial1);




  var trial2 = {
    type: 'html-button-response',
    stimulus: '<p style="color:red;" >How confident are you<p>',
//  stimulus:' <p id=></p>',
    choices: ['1', '2','3','4','5','6','7'],
    prompt: '<p>Please Rate 1-7</p>',
    response_ends_trial: true
};
    timeline.push(trial2);
}
