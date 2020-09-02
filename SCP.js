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
message: '<p class ="hi">In this next task you will see a series of sentences appear on the screen one at a time. Please read each sentence carefully and decide whether the action described in the sentence was done ACCIDENTALLY or INTENTIONALLY. You will have a limited amount of time to make your judgment. Please respond as accurately as possible while the sentence is still on the screen.</p><p><br><br>  </p><p class ="hi">While performing the task, press E for ACCIDENTAL and I for INTENTIONAL on your keyboard.</p>' ,
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
   choices:['Start']

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




var welcome1 = {
    type: 'html-button-response',


    choices: ['Start'],
    post_trial_gap: 1500,
    stimulus: " <p class = 'hi' >First, we'll start with some practice trials. You'll have 5 seconds to make your response. Make sure to respond within this time period before the sentence is taken off the screen. Please respond as accurately as possible within the time period that the sentence is on the screen. When you're ready to begin the practice, press start. </p>"
  }


timeline.push(welcome1);



function practice(time,type,speed){
var Practice = [];
for (i = 0 ; i < 4; ++i)
 {

   var trial = {
       type: 'html-keyboard-response',
       stimulus: ua_shuffled.pop(),
       prompt: '<p class ="gg" style="color:rgb(128,128,128);">E = accidental &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I = intentional</p>',
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
      prompt: '<p class ="gg" style="color:rgb(128,128,128);">E = accidental &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I = intentional</p>',
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
var welcome1 = {
    type: 'html-button-response',


    choices: ['Start'],
    post_trial_gap: 1500,
    stimulus: "<p class = 'hi'> Ok, the practice is over. Now you'll complete the experiment. Remember e=accidental and i=intentional. Please respond as accurately as possible within the time period that the sentence is on the screen. Press start when you're ready to begin.</p>"
  }

timeline.push(welcome1);












var j;



function test(time,type,speed) {
  var Practice = [];
//Test
for( j = 0 ; j < 6; ++j) {
  var trial4 = {
      type: 'html-keyboard-response',
      stimulus:pa_shuffled.pop(),
       prompt: '<p class ="gg" style="color:rgb(128,128,128);">E = accidental &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I = intentional</p>',
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
       prompt: '<p class ="gg" style="color:rgb(128,128,128);">E = accidental &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I = intentional</p>',
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
var welcome1 = {
    type: 'html-button-response',


    choices: ['Start'],
    post_trial_gap: 1500,
    stimulus: " <p class = 'hi' > Great. Now we're going to have you do the same task, except you'll have less time to make your response. That is, the sentences will be on the screen for a shorter period of time. Make sure to make a response while the sentence is still on the screen. We'll start with a few practice trials. Remember, e=accidental and i=intentional. Respond as accurately as possible within the time period that the sentence is on the screen. When you're ready to begin, press start. </p>"
  }

timeline.push(welcome1);


//timeline.push(shuffledArray);






practice(2400,'practice','fast');

var welcome1 = {
    type: 'html-button-response',


    choices: ['Start'],
    post_trial_gap: 1500,
    stimulus: " <p class = 'hi' >Ok, the practice is over. Now you'll complete the experiment. Remember e=accidental and i=intentional. Please respond as accurately as possible within the time period that the sentence is on the screen. Press start when you're ready to begin. </p>"
  }
timeline.push(welcome1);


test(2400,'test','fast');
