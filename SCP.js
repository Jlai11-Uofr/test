var path = "https://jlai11-uofr.github.io/test/"
var timeline = [];

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




var y = 0;


var pa = ["He forgot his homework", "He arrived 5 min late for class","He bumped into a classmate in the hall", "He broke the window","The painter inhaled the fumes","He drank the spoiled milk","She woke the baby up","He stepped in the puddle","He set off the alarm","She jumped when the bell rang","He dripped paint on the canvas","She kicked her dog"]
var pi = ["She cut him off driving","The boy knocked over the sand castle","She walked by without saying hello","He took an illegal left turn","He ripped the piece of paper","She sprayed him with water","The man left without leaving a tip","She made a mark on the paper","She drove over the speed limit","He deleted the email","She ignored the question","She averted her eyes"]



var ua = ["He poked himself in the eye","He sneezed from the allergies","He stubbed his toe","He failed the driving test"," She tripped on the curb", "She caught a cold","She lost her keys","She broke her cell phone"]

var ui = ["He buttoned his jacket","He drew a picture of the beach","He erased the scribbles","He folded the letter carefully","She addressed the letter","She baked a cake","She changed the flat tire","She followed the recipe"]


//pa = shuffle(pa);
//pi = shuffle(pi);
//ua = shuffle(ua);
//ui= shuffle(ui);


var pa_shuffled = jsPsych.randomization.repeat(pa, 1);
var pi_shuffled = jsPsych.randomization.repeat(pi, 1);
var ua_shuffled = jsPsych.randomization.repeat(ua, 1);
var ui_shuffled = jsPsych.randomization.repeat(ui, 1);

//Shuffling for random;
//Essentially task consits of 8 UA/UB slow.
//Then we go and do test the slow



//Do fast


var fullscreen_trial = {
button_label :"Start",
type: 'fullscreen',
message: '<p class ="hi">In this next task you will see a series of sentences appear one at a time. Please read the following statements and decide whether these items describe actions that were done accidentally OR intentionally. The questions will only be displayed for a short period of time--please respond as quickly and accurately as possible.</p><p><br><br>  </p><p class ="hi">Press e for accidental and i for intentional on your keyboard.</p>' ,
fullscreen_mode: true,
post_trial_gap:1500
}

timeline.push(fullscreen_trial);


 var truth;


 var practice_max = 4;
 var test_max = 6;



  var hi = {
      type: 'html-keyboard-response',
       stimulus: '<p class ="hi"> Which key should you press if you think the action is ACCIDENTAL? </p>',


       on_finish: function(data){
       if(data.key_press == 69){
         data.correct = true; // can add property correct by modify data object directly
           } else {
             data.correct = false;
           }
       }

   };
 timeline.push(hi);
 var feedback = {
   type: 'html-button-response',
   stimulus: function(){
     var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
     if(last_trial_correct){
       return "<p class ='hi'>Right! Press E when the action is accidental.<br><br>Let's try another one.</p>";
     } else {
       return  "<p class ='hi'>That's not quite right. You should have selected e. <br><br>Let's try another one. </p>";
     }
   },
   choices:['Continue']

 }


timeline.push(feedback)




var hi = {
    type: 'html-keyboard-response',
     stimulus: '<p class ="hi"> Which key should you press if you think the action is INTENTIONAL? </p>',



     on_finish: function(data){
     if(data.key_press == 73){
       data.correct = true; // can add property correct by modify data object directly
         } else {
           data.correct = false;
         }
     }

 };


timeline.push(hi);
var feedback = {
  type: 'html-button-response',
  stimulus: function(){
    var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
    if(last_trial_correct){
       return"<p class ='hi'>Right! Press i when the action is accidental.<br><br>Let's start the test now. Press continue to begin.</p>";
    } else {
       return  "<p class ='hi'>That's not quite right. You should have selected i. <br><br>Let's start the test now. Press continue to begin.</p>";
    }
  },
  choices:['Continue'],
  post_trial_gap:1500
}


timeline.push(feedback)















function practice(time,type,speed){
var Practice = [];
for (i = 0 ; i < 4; ++i)
 {

   var trial = {
       type: 'html-keyboard-response',
       stimulus: ua_shuffled.pop(),
       prompt: '<br><br><br><br><p class ="gg" style="color:rgb(128,128,128);">E = accidental &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I = intentional</p>',
       choices: ['e', 'i'],
       trial_duration: time,
        post_trial_gap: 1500,
       data: {
   trialtype: type,
   key: 'ua',
   speed_trial:speed,
   trial_num : y+1
 }
   };
//   timeline.push(trial);
Practice.push(trial)


var trial1 = {
       type: 'html-keyboard-response',
       stimulus:ui_shuffled.pop(),
       prompt: '<br><br><br><br><p class ="gg" style="color:rgb(128,128,128);">E = accidental &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I = intentional</p>',
       choices: ['e', 'i'],
       trial_duration: time,
        post_trial_gap: 1500,
       data: {
  trialtype:type,
   key: 'ui',
   speed_trial:speed, trial_num : y+1
 }
   };
Practice.push(trial1);
//timeline.push(trial1);


//Practice.push(ua_shuffled.pop());

//Practice.push(ui_shuffled.pop());
 }

 var shuffledArray = jsPsych.randomization.repeat(Practice, 1);
 for(z = 0 ; z < shuffledArray.length; ++z) {
 timeline.push(shuffledArray[z]);

 }
}






practice(5000,'practice','slow');









var j;



function test(time,type,speed) {
  var Practice = [];
//Test
for( j = 0 ; j < 6; ++j) {
  var trial4 = {
      type: 'html-keyboard-response',
      stimulus:pa_shuffled.pop(),
       prompt: '<br><br><br><br><p class ="gg" style="color:rgb(128,128,128);">E = accidental &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I = intentional</p>',
      choices: ['e', 'i'],
      trial_duration: time,
      post_trial_gap: 1500,
      data: {
  trialtype:type,
  key: 'pa',
  speed_trial:speed, trial_num : y+1
 }
  };
Practice.push(trial4);


  var trial5 = {
      type: 'html-keyboard-response',
      stimulus:pi_shuffled.pop(),
       prompt: '<br><br><br><br><p class ="gg" style="color:rgb(128,128,128);">E = accidental &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I = intentional</p>',
      choices: ['e', 'i'],
      trial_duration: time,
      post_trial_gap: 1500,
      data: {
  trialtype: 'Test',
  key: 'pi',
  speed_trial:speed, trial_num : y+1
 }
  };
Practice.push(trial5);


}


var shuffledArray = jsPsych.randomization.repeat(Practice, 1);
var z;

for(z = 0 ; z < shuffledArray.length; ++z) {
timeline.push(shuffledArray[z]);

}
}

test(5000,"test","slow");
//timeline.push(shuffledArray);






practice(2400,'practice','fast');

test(2400,'test','fast');
