// whatthekeycode.com
//  define some global variables

$(document).ready(function () {

	

	$(document).mousemove(function (e) {
	
		var mouseX = e.pageX; // e.pageX - gives you the X position.
		var mouseY = e.pageY; // e.pageY - gives you the Y position.
		// console.log(mouseX);
		// console.log(mouseY);
	});

	var KEYCODETOCHAR_UK = {
		// 8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/Break",20:"Caps Lock",27:"Esc",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",
		// 48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",
		65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z"	};

	var KEYCODETOCHAR_ISR = {
		// 8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/Break",20:"Caps Lock",27:"Esc",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",
		// 48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",
		65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",
		188: "," 
	};

	var KEYCODES = {
		'english' : KEYCODETOCHAR_UK,
		'hebrew': KEYCODETOCHAR_ISR
	}

	var KEYCHARTOCODE = {
		// "Backspace":8,"Tab":9,"Enter":13,"Shift":16,"Ctrl":17,"Alt":18,"Pause/Break":19,"Caps Lock":20,"Esc":27,"Space":32,"Page Up":33,"Page Down":34,"End":35,"Home":36,"Left":37,"Up":38,"Right":39,"Down":40,"Insert":45,"Delete":46,
		// "0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,
		"A":65,"B":66,"C":67,"D":68,"E":69,"F":70,"G":71,"H":72,"I":73,"J":74,"K":75,"L":76,"M":77,"N":78,"O":79,"P":80,"Q":81,"R":82,"S":83,"T":84,"U":85,"V":86,"W":87,"X":88,"Y":89,"Z":90
	};

	var SOUNDS = {
	
			"A" : "audio/Eating apple soundsnap.wav" ,
			"B" : "audio/human bee.wav" ,
			"C" : "audio/13 year old Tabby Cat - Meows-Irritated.wav" ,
			"D" : "audio/EFX INT Dog Panting 05 AAA.wav" ,
			"E" : "audio/CARTOON TROMBONE DEEP SLIDE 01.wav" ,
			"F" : "audio/Frogs croaking close in a loop.wav" ,
			"G" : "audio/Acoustic BPM 110 32_Shriek_2011.wav" ,
			"H" : "audio/horse.wav" ,
			"I" : "audio/Slurp_BLASTWAVEFX_13030.wav" ,
			"J" : "audio/Water  fish swimming.wav" ,
			"K" : "audio/doing - mouth harp 8 clean two kinds.wav" ,
			"L" : "audio/Male snoring with effects -sounds like a lion-_Nightingale Music Productions.wav" ,
			"M" : "audio/LTMacaque.wav" ,
			"N" : "audio/Male blow nose_BLASTWAVEFX_19918.wav" ,
			"O" : "audio/owl.wav" ,
			"P" : "audio/parrot 12007201.wav" ,
			"Q" : "audio/Late 20s Woman Says Shhh-Shush-Soft-Choppy.wav" ,
			"R" : "audio/chewing carrot.wav" ,
			"S" : "audio/sheep.wav" ,
			"T" : "audio/Trumpet-37 D BPM 77.wav" ,
			"U" : "audio/rain car interior wind shield wipers on.wav" ,
			"V" : "audio/Violin G major scale up down_BLASTWAVEFX_27410.wav" ,
			"W" : "audio/Submarine sonar ping multiple_BLASTWAVEFX_18257.wav" ,
			"X" : "audio/Pretty xylophone melody_AOS00288.wav" ,
			"Y" : "audio/HUMAN VOICE YAWN 01.wav" ,
			"Z" : "audio/Horse two horses neigh step in dirt_BLASTWAVEFX_00173.wav" ,
			"0" : "audio/1.wav" ,
			"1" : "audio/1.wav" ,
			"2" : "audio/2.wav" ,
			"3" : "audio/3.wav" ,
			"4" : "audio/4.wav" ,
			"5" : "audio/5.wav" ,
			"6" : "audio/6.wav" ,
			"7" : "audio/7.wav" ,
			"8" : "audio/8.wav" ,
			"9" : "audio/9.wav" ,
			"success" : "audio/Peppa.mp3",
			"other" : "audio/3.wav",
			"correct" : "audio/p.wav",
			"rocket"  : "audio/Rocket launch 05_SFXBible_ss06674.wav",
			"tick"	: "audio/Data beep counter tick 1.wav"
	};

	var PICS = {
		"A" : "apple2.svg",
		"B" : "bee2.svg",
		"C" : "cat.svg",
		"D" : "dog.svg",
		"E" : "elephant.svg",
		"F" : "frog.svg",
		"G"	: "guitar.svg",
		"H" : "horse.svg",
		"I" : "icecream.svg",
		"J" : "jellyfish.svg",
		"K" : "kangaroo.svg",
		"L" : "lion 2.svg",
		"M" : "monkey.svg",
		"N" : "nose.svg",
		"O"	: "owl.svg",
		"P" : "parrot.svg",
		"Q" : "quiet.svg",
		"R" : "rabbit.svg",
		"S" : "sheep.svg",
		"T" : "trumpet.svg",
		"U" : "umbrella.svg",
		"V" : "violin.svg",
		"W" : "whale.svg",
		"X" : "xylophone.svg",
		"Y" : "yawn.svg",
		"Z" : "zebra.svg",
		"rocket" : "rocket-ship-shooting-md.png"
	};

	var HEBREWSOUNDS = {
		"א" : "audio/Male snoring with effects -sounds like a lion-_Nightingale Music Productions.wav" ,
		"ב" : "audio/Animals duck quack -nature-_Nightingale Music Productions_13810.wav",
		"ג" : "audio/Acoustic BPM 110 32_Shriek_2011.wav" ,
		"ד" : "audio/human bee.wav" ,
		"ה" : "audio/hippo.wav",
		"ו" : "audio/HOSPITAL BED CURTAIN OP.wav",
		"ז" : "audio/Horse two horses neigh step in dirt_BLASTWAVEFX_00173.wav" ,
		"ח" : "audio/13 year old Tabby Cat - Meows-Irritated.wav" ,
		"ט" : "audio/parrot 12007201.wav" ,
		"י" : "audio/owl.wav" ,
		"כ" : "audio/EFX INT Dog Panting 05 AAA.wav" ,
		"ל" : "audio/Submarine sonar ping multiple_BLASTWAVEFX_18257.wav" ,
		"מ" : "audio/rain car interior wind shield wipers on.wav" ,
		"נ" : "audio/river churnet water 1998.wav",
		"ס" : "audio/horse.wav" ,
		"ע" : "audio/HUMAN VOICE YAWN 01.wav" ,
		"פ" : "audio/CARTOON TROMBONE DEEP SLIDE 01.wav" ,
		"צ" : "audio/Frogs croaking close in a loop.wav" ,
		"ק" : "audio/LTMacaque.wav" ,
		"ר" : "audio/Bartender shakes ice and drink in metal ice shaker_AOS01016.wav",
		"ש" : "audio/Late 20s Woman Says Shhh-Shush-Soft-Choppy.wav" ,
		"ת" : "audio/Eating apple soundsnap.wav" ,
		// "I" : "audio/Slurp_BLASTWAVEFX_13030.wav" ,
		// "J" : "audio/Water  fish swimming.wav" ,
		// "K" : "audio/doing - mouth harp 8 clean two kinds.wav" ,
		// "N" : "audio/Male blow nose_BLASTWAVEFX_19918.wav" ,
		// "R" : "audio/chewing carrot.wav" ,
		// "S" : "audio/sheep.wav" ,
		// "T" : "audio/Trumpet-37 D BPM 77.wav" ,
		// "V" : "audio/Violin G major scale up down_BLASTWAVEFX_27410.wav" ,
		// "X" : "audio/Pretty xylophone melody_AOS00288.wav" ,
		"success" : "audio/Peppa.mp3",
		"other" : "audio/3.wav",
		"correct" : "audio/p.wav",
		"rocket"  : "audio/Rocket launch 05_SFXBible_ss06674.wav",
		"tick"	: "audio/Data beep counter tick 1.wav"
	};	

	var HEBREWPICS = {
		"א" : "lion 2.svg",
		"ב" : "duck2.svg",
		"ג"	: "guitar.svg",
		"ד" : "bee2.svg",
		"ה" : "hippo.png",
		"ו" : "curtains.svg",
		"ז" : "zebra.svg",
		"ח" : "cat.svg",
		"ט" : "parrot.svg",
		"י" : "owl.svg",
		"כ" : "dog.svg",
		"ל" : "whale.svg",
		"מ" : "umbrella.svg",
		"נ" : "river.svg",		
		"ס" : "horse.svg",
		"ע" : "yawn.svg",
		"פ" : "elephant.svg",
		"צ" : "frog.svg",
		"ק" : "monkey.svg",
		"ר" : "shaker.svg",
		"ש" : "quiet.svg",
		"ת" : "apple2.svg",
	
		"rocket" : "rocket-ship-shooting-md.png"
	};

	var HEBREWLETTERS = {
		"A" : "ש",
		"B" : "נ",
		"C" : "ב",
		"D" : "ג",
		"E" : "ק",
		"F" : "כ",
		"G" : "ע",
		"H" : "י",
		"I" : "ן",
		"J" : "ח",
		"K" : "ל",
		"L" : "ך",
		"M" : "צ",
		"N" : "מ",
		"O" : "ם",
		"P" : "פ",
		"Q" : "",
		"R" : "ר",
		"S" : "ד",
		"T" : "א",
		"U" : "ו",
		"V" : "ה",
		"W" : "",
		"X" : "ס",
		"Y" : "ט",
		"Z" : "ז",
		"," : "ת",
		"." : "ץ",
		";" : "ף"
	};

	var HEBREWSOFIT = {
		"I" : "ן",
		"L" : "ך",
		"." : "ץ",
		";" : "ף"
	};
	
	var LANGUAGETODICT = {
		'english' : [PICS, SOUNDS],
		'hebrew' : [HEBREWPICS, HEBREWSOUNDS]
	};

	// image condition
	// Get the size of an object by using  defined function

	Object.size = function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	};

	// function negArray(arr) { // only experimental in Chrome
	//   return Proxy({
	//     set: function (proxy, index, value) {
	//         index = parseInt(index);
	//         return index < 0 ? (arr[arr.length + index] = value) : (arr[index] = value);
	//     }, 
	//     get: function (proxy, index) {
	//         index = parseInt(index);
	//         return index < 0 ? arr[arr.length + index] : arr[index];
	//     }
	//   });
	// }

	spectrum();
	function spectrum(){
	    var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random() + 0.3) + ')';
	    $('body, #inputs input').animate( { backgroundColor: hue }, 5000);
	    setTimeout(spectrum,1); // stop it from overloading max cache
	    // console.log(hue);
	};

	function shadeRGBColor(color, percent) { // http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
	};

	function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
	};

	function rgbToHex(r, g, b) { // http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	};

	function flashColours(div,timeOut,number) {
						
		for (var i = 0; i < number; i++) {
			var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random() + 0.3) + ')';
			var newhue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random() + 0.3) + ')';
		
			$(div).css("border-color", hue);
			$(div).animate({
				borderColor : newhue
			}, timeOut);
		};
	};

	function makeGaps(stringLength) {

		var gapsString = [];
		var spanString = "<span id='pix' class='col'><img  src='' /></span>";

		for (var i = 0; i < stringLength; i++) {
			gapsString.push(spanString);
		};

		return gapsString.join('');
	};

	function makeNums(stringLength) {

		var numsString = [];
		var spanString = "<span id='num' class='col'></span>";

		for (var i = 0; i < stringLength; i++) {
			numsString.push(spanString);
		};

		return numsString.join('');
	};

	function makeCols(stringLength) {
		var colsString = [];
		var spanString = "<div class='col'></div>";
		for (var i = 0; i < stringLength; i++) {
			colsString.push(spanString);
		};

		return colsString.join('');
	};

	function getOneRight(){
	};

	function loseALife() {
	};

	function startRocket(time){
		setTimeout(function() {
			$('#intro').addClass("shake");
				},time);
	};
		
	function getPosition(e) {
		var coordinates = e.offset();
		// console.log(coordinates);	
		return coordinates;
	};

	function checkPosition() {

			var allLetters = $('#name1').find('img');
			for (var i = 0; i < allLetters.length; i++) { // check coordinates

				var currentLetter = allLetters.eq(i);

				var coordinates = getPosition(currentLetter);
				var details = [currentLetter.text(), screen.width, coordinates.left, screen.height, coordinates.top];
				console.log(details);

				// if ((coordinates.left+100) > screen.width) {
				// 	// currentLetter.stop();
				// 	currentLetter.offset({
				// 		left: (coordinates.left - screen.width),
				// 		top: coordinates.top
				// 	});
				// 	// alert("right bump!");
				// };

				// if ((coordinates.top+200) > screen.height) {
				// 	currentLetter.stop();
				// 	currentLetter.offset({
				// 		top: (coordinates.top - screen.height)
				// 	});
				// 	// alert("bottom bump!");
				// };

			};

			setTimeout(checkPosition, 1000);
	};

	// **************************** START CODE ++++++++++++++++++++++++++++

	$('.container').css("display", "none");
	$('.letters').hide();

	$('#flags label img').on("click", function() {
		$(this).addClass('selected');
		$(this).parent().siblings().find('img').removeClass('selected');
	});



	$('#inputs').keypress(function(e) { // MAKE enter work as submit button
        if(e.which == 13) {
            jQuery(this).blur();
            jQuery('.submit').focus().click();
        }
    });

	$('.submit').on("click", function() {

		var language = $('input:radio:checked').val();
		if (language=='hebrew') {
			$('#intro h2').text(" ? מוכן ").css("font-size", "150px");

		}

		var dictsToUse = LANGUAGETODICT[language];
		var MYPICS = dictsToUse[0];
		var MYSOUNDS = dictsToUse[1];

		function playSound(s) {
			$('.sounds').html('<audio id="' + s + '" src="' + MYSOUNDS[s] + '" preload="auto"></audio>');
			document.getElementById(s).play();
		};

		function countdown(element, seconds) {

	 	   var interval = setInterval(function() {	

	    	$('#intro').show();
	    	startRocket(4000);
	    	playSound('tick');

	        var el = document.getElementById(element);

	        // if(seconds<=3 && seconds!=0 )  {
	        // 	$("div#rocket div").removeClass("shake").addClass("hovered");
	        // };
	        
	        if(seconds == 0) {
	            // el.innerHTML = "countdown's over!";    
	            clearInterval(interval);
	            playSound("rocket");

	            $('#countdown, #prepare h2').animate({
	            	fontSize : '600px',
	            	width : '500%',
	            	height: '150%',
	            	opacity : 0
	            },3000);

	            $("div#rocket div").addClass("liftoff");

	           
				setTimeout(function() {
					$('#intro').hide();
					$('.col').css("opacity", 1);
					return;	
				},3000);
	        }
	        
	        if (seconds < 10) seconds = "0" + seconds; 
	        // if (seconds <= 0 && seconds >= -4) seconds = "00"; 

	        el.innerHTML = seconds;
	        seconds--;
	        
	    }, 1000);
	};
		
	var name1String = $('input:text:first').val();

	if (language != 'hebrew') name1String = name1String.toUpperCase();

	var picArray = $.map(MYPICS, function(value, index) {return [value];});
	var availablePics = [];
	var size = Object.size(MYPICS);
	for (var i = 0; i < size; i++) {var thing = picArray[i];availablePics.push(thing);}

	var NumsCols = makeCols(name1String.length);

	$('#content').append(NumsCols);
	var cols = $('.col');

	var name1LettersArray = [];
	var name1LettersArray = name1String.split('');

	var imageSources = [];
	var randomColours = [];

	for (var i = 0; i < name1LettersArray.length; i++) {

		if (language == 'hebrew') {
			var j = -(i+1);
		} else {
			var j = i;
		}

		var random_colour = ('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
		
		var textValue = i+1;
		imageSources.push(MYPICS[name1LettersArray[i]]);

		cols.eq(j)
					.append('<div id="num" class="row circle">' + textValue + '</div>')
					.append('<div id="pix" class="row circle-center"><img src="images/question.svg" ></div>')
					.append('<div id="lex" class="row"><p></p></div>');
				
		cols.eq(j).find("#num").css("color", random_colour);
		randomColours.push(random_colour);			
	};
	
	var i = 0;
	if (language == 'hebrew') {var j = -1;} else {var j = i;};

	$('.col').eq(j)// .addClass('offset-by-' + divOffsetWords)
					.find("#pix")
					.css("opacity", "1");

	var imageDivs = $('#pix img');

	$(imageDivs.get(j)).attr("src", "images/" + imageSources[i]);
	
	$('#inputs').hide();
	$('.container').css("display", "inline");
	
	countdown('countdown', 5);

	startgame();

	function startgame(){

		$(document).on("keydown", function (e) {

			if ($('#intro').css("display") == 'block') return false;
			$('#intro').hide();
			$('.letters').hide();
			$('.col').css("opacity", 1);

			var random_colour = ('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
		
			var keycodeForLang = KEYCODES[language];

			if (language == 'hebrew') {var letter = HEBREWLETTERS[keycodeForLang[e.which || e.keyCode]]; }
			else {var letter = keycodeForLang[e.which || e.keyCode];}
			
			var letterSound = MYSOUNDS[letter];
			var letterDivs = $('#lex p');

			if (typeof letter === "undefined" ) {							    
			   	// playSound(other);
			} else {
				playSound(letter); //  play the audio
			}

			letters_function(name1LettersArray); //  play the game

			function letters_function (letters) {  // define the main game function

				if ($.inArray(letter, letters) == 0) {

					var realFontSize = $('#lex p').css("font-size");

					var counter = (name1String.length - letters.length);
					var nextCounter = counter + 1;

					if (language == 'hebrew') {
						counter = (name1LettersArray.length-1);
						nextCounter = (counter-1);
					}

					letterDivs.eq(counter)
									.text(letter) // problem here - get() does not work like eq()
									.css("font-size", (Math.floor(Math.random() * 800))) // create random font-size to animate from
									.css("display", "inline-block")
							 		.css("color", randomColours[counter])
							 		// .css("text-shadow", (5 + (Math.floor(maths * 10))) + "px " + (5 + (Math.floor(maths * 10))) + "px " + "darkgray")
							 		.animate({
							 			fontSize: realFontSize
									 		}, 3000);

					setTimeout(function() {							
						var myImage = "images/" + imageSources[0];
					
						console.log(counter);
						console.log(nextCounter);
						console.log(imageSources);
						console.log((imageSources[0]));
						

						$(".col").eq(counter).find(".circle-center").css("background-color", randomColours[counter]);
						$(".col").eq(counter).find("#pix").css("border-color", "rgba(255,255,255,0.25)")
						$(".col").eq(nextCounter)
									.find("#pix")
									.animate({
										opacity : 1},
										2000);

						// imageDivs.eq(counter+1).css("border", "solid white 20px");
						// flashColours($(".col").eq(counter+1)
						// 			.find(".circle-center"),200,10);

						if (name1LettersArray.length != 0) { 
							imageDivs.eq(nextCounter)
									.attr("src", myImage)
											.animate({
												opacity : 0},
														1000)
											.animate({
												opacity : 1},
													 	1000)
											.animate({
												opacity : 0},
														1000)
											.animate({
												opacity : 1},
													 	1000);

							setTimeout(function() {
								playSound("correct");
										}, (4000));
						}
						
					}, (3000));

					letters.splice(0, 1);
					imageSources.splice(0, 1);
					console.log(letters);

				} else if (typeof letter === "undefined"
				 // && language=="hebrew"
					) 
				{return;}
				 else {

					var maths = Math.random();
					var maths = (0.3 < maths || 0.8 > maths) ? maths : 0.5;
					var correctImg = (($.inArray(MYPICS[letter], availablePics))+1) ? MYPICS[letter] : "question.svg";

					$('.letters')
						.html("<span id='letterpix'><img src='images/" + correctImg + 
											"' /></span> <span id='letterpix'>" + letter  + "</span>")
							 .css("display", "inline-block")
							 .css("margin-left", "30%")
							 .css("text-align", "center")
							 // .css("height", "70px")
							 .css("border-radius", "200px")
							 .css("top", "60%")
							 .css("opacity", "1")
							 .css("background-color", "white")
							 .css("border", "solid white 20px")
							 // .css("font-size", "40px" )
							 // .animate(
							 // { marginLeft: (Math.floor(maths * screen.width)) -200 + 'px' },
							 // { duration: 500
							 // 	// , easing: 'easeOutBounce'
							 // }
							 	// )
								;

					flashColours('.letters',200,10);

					setTimeout(function() {
						$('.letters').fadeOut(2000);
													}, (3000));			
				};
			};


			// if (name1LettersArray.length == 0 && name2LettersArray.length != 0) {  // call the function for name2

			// 	$('#and p').animate({ opacity: 1}, 3000 );
			// 	$('#name2').slideDown(2000);
			// 	$('#congrats').css("display", "block")
			// 					.animate({ top: 0}, 1000 );

			// 	var myDiv = '#name2';
			// 	letters_function(name2LettersArray);
			// };

			if (name1LettersArray.length == 0) gameEnd();

			function gameEnd() {

				$('.letters').animate({   // make the single letter disappear
									 	paddingTop: '800px'
									 }, 1000)
							.hide(1000);

				var allPics = $('.col').find("img");
				var allCircles = $('.col #pix');
				var allLetters = $('.col #lex p');
				var allNums = $('.col #num'); 

				for (var i = 0; i < allPics.length; i++) { // make em dance
				
					var maths = Math.random();
					// var colorsBackwards = randomColours.reverse();
					var currentPic = allPics.eq(i);
					var currentLetter = allLetters.eq(i);
					var currentNumber = allNums.eq(i);
					var currentCircle = allCircles.eq(i);

					

					if ((i+1)%2==0) {
						
						currentPic.animate({   width: (Math.floor(maths * 1000)) + 'px'}, (Math.floor(maths * 60000)));
						// currentCircle.animate({   	paddingLeft: (Math.floor(maths * 800)) + 'px'
						// 							 }, (Math.floor(maths * 60000)));
						currentLetter.animate({  fontSize : "500px", top: (Math.floor(maths * 800)) + 'px'}, (Math.floor(maths * 60000)));	
						currentNumber.animate({  fontSize : "300px", bottom: (Math.floor(maths * 800)) + 'px'}, (Math.floor(maths * 60000)));		

					} else {
						currentPic.animate({  height: (Math.floor(maths * 1000)) + 'px'}, (Math.floor(maths * 60000)));
				// currentCircle.animate({   	paddingTop: (Math.floor(maths * 800)) + 'px'
				// 									 }, (Math.floor(maths * 60000)));
						currentLetter.animate({  fontSize : "500px", top: (Math.floor(maths * 800)) + 'px'}, (Math.floor(maths * 60000)));
						currentNumber.animate({  fontSize : "700px", top: (Math.floor(maths * 200)) + 'px'}, (Math.floor(maths * 60000)));	
					};
				};

									
				// $("#and p").animate({ fontSize: '500px', top: (Math.floor(Math.random() * 800)) + 'px'}, (Math.floor(Math.random() * 100000)));
				// $("#congrats img").animate({ width: '500px', paddingTop: (Math.floor(Math.random() * 800)) + 'px'}, (Math.floor(Math.random() * 100000)));
				$("#again p").animate({ fontSize: '100px', top: (Math.floor(Math.random() * 800)) + 'px', opacity: 1}, (Math.floor(Math.random() * 100000)));

				setTimeout(function() {
					playSound("success");
													}, (3000));

				// checkPosition();

				// function bounceIt(){

				// 	$(this).animate({
				// 		paddingTop: "-20px"},
				// 		{ duration: 1000, easing: 'easeOutBounce'
				// 	});

				// 	setTimeout(bounce, 1);
				// };
			}

		});
	};

	});
			
});

