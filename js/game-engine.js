			var counter = 0;
			var index   = 0;
			var inc     = 1;
			var beat_queue = [];
			var animationTime = 4000;
			var endpoints = {};
			var config = {
				'red' :  {
					'startLeft' : '20%',
					'endLeft' : '20%',
					'startTop' : '0%',
					'endTop' : '60%'
				},
				'yellow' :  {
					'startLeft' : '48%',
					'endLeft' : '40%',
					'startTop' : '0%',
					'endTop' : '60%'	
				},
				'green' :  {
					'startLeft' : '52%',
					'endLeft' : '60%',
					'startTop' : '0%',
					'endTop' : '60%'	
				},
				'blue' :  {
					'startLeft' : '56%',
					'endLeft' : '80%',
					'startTop' : '0%',
					'endTop' : '60%'	
				}
			}

			$(document).ready (function () {
				var index = 0;
				var total_time = -1;
				var current_time = 0;
				var status = "ready"; 

				for ( key in config ) {
					console.log (key, config[key]);
					$('#startpoints_target_' + key).css('top', config[key].startTop); 
					$('#startpoints_target_' + key).css('left', config[key].startLeft); 
					$('#endpoints_target_' + key).css('top', config[key].endTop); 
					$('#endpoints_target_' + key).css('left', config[key].endLeft);
					endpoints [key] =  $('#endpoints_target_' + key);
				}

				$(document).keypress(function(event){
					console.log (event.which);
					if(event.which == 99)beatMatch("red");
					if(event.which == 118)beatMatch("yellow");
					if(event.which == 98)beatMatch("green");
					if(event.which == 110)beatMatch("blue");
				}) 

				window.setInterval (function () {
					if (status == 'wait') {
						//console.log("status waiting");
						current_time += quantum_size;	
					}

					if(status == "ready"){

						//console.log("status ready");
						var note = notes[index];
						note.startTime = new Date().getTime();
						var beat = null;
						total_time = note.duration;
						current_time = 0;
						if(note.hasOwnProperty("color")){
							switch (note.color) {
								case "red":  beat = createRedBeat ();
										break;
								case "blue": beat = createBlueBeat ();
										break;
								case "yellow":beat = createYellowBeat ();
										break;
								case "green": beat = createGreenBeat ();
										break;
							}
						}
						status = "wait";
						current_time += quantum_size;
						note.beat = beat;
						beat_queue.push(note);
						//start waiting a event

						
						/*press a button

							TODO: get the color of the button pressed
								  and control if the color of the queue
								  match the color of the button pressed
								  	TRUE: start assign score as follow
								if (startTime-clicktime <=max_point_delta)
										 assign max score
									else if(mid_point_delta<=startTime-clicktime <max_point_delta)
											assign mid score
											else
												assign minimum score
									FALSE: beat missed
							beat_queue.shift()		
						*/ 

					}

					if(total_time == current_time){
						//console.log("next note");
						status = "ready";
						index++;
					}



				}, 125);
				
			/*	$("#endpoints_target_red").click(beatMatch("red"));
				$("#endpoints_target_yellow").click(beatMatch("yellow"));
				$("#endpoints_target_blue").click(beatMatch("blue"));
				$("#endpoints_target_green").click(beatMatch("green"));
			*/
			});

			function createRedBeat () {
				return createBeat (counter ++, 'red');
			}

			function createYellowBeat () {
				return createBeat (counter ++, 'yellow');
			}

			function createGreenBeat () {
				return createBeat (counter ++, 'green');
			}

			function createBlueBeat () {
				return createBeat (counter ++, 'blue');
			}

			function createBeat (index, color) {


				var beat = document.createElement ('div');
				beat.id = 'ball_' + index;

				$('#container').append (beat);
				$(beat).css ('left', config[color].startLeft);
				$(beat).css ('top', config[color].startTop);
				$(beat).addClass (color);
				$(beat).animate ({'top': config[color].endTop, 'left':config[color].endLeft, 'height': '1.5em', 'width': '1.5em', 'border-radius': '1.5em'}, animationTime, 'linear', 
					function () {
						$(beat).remove ();
						//$('#target_' + color).css('opacity', 1);
						
						
						//non press on the endpoints

						beat_queue.shift();

				});

				return beat;
			}
			function beatMatch(color){
				var note = beat_queue.shift();
				console.log (note,beat_queue.length);
				endpoints [color].fadeTo (0, 1).fadeTo(500, 0.5);

				if(note == undefined || color != note.color){
					if(note != undefined)
						$(note.beat).remove();
					console.log("wrong button pressed");
				}else{

					var now         = new Date ();
					var elapsedTime = now.getTime() - note.startTime;
					if(elapsedTime >= 0 && elapsedTime <= 300 ){
						console.log("perfect");
					}else{
						if(elapsedTime > 300 && elapsedTime <= 600){
							console.log("ok");
						}else{
							console.log("donkey!");
						}
					}
						 
				}
			}



