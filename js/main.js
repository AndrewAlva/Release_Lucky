jQuery(document).ready(function($) {

	var allDivs = $('div');
	// SET UI COLOURS ON TIME
		// var today = new Date();
		// var todayHour = today.getHours();
		// var todayMinutes = today.getMinutes();
		
		// // var todayHour = 19;
		// // var todayMinutes = 31;

		// var luckyBody = document.getElementById("luckyBody");
		// console.log("What time is it in here? " + todayHour + ":" + todayMinutes);

		// // NITE STYLE // LUCKY IS CLOSED
		// if(todayHour >= 0 && todayHour < 9 || todayHour >= 19 && todayHour < 24){
		// 	luckyBody.classList.add("niteTimeFontColor");
		// 	luckyBody.style.backgroundColor = "#0c1f28";
		// }
		
		// // GRAY STYLE // 9AM - 11AM && 4PM - 7PM
		// if(todayHour >= 9 && todayHour < 11 || todayHour >= 16 && todayHour < 19){
		// 	luckyBody.classList.add("dayTimeFontColor");
		// 	luckyBody.style.backgroundColor = "#d7dbe3";
		// }
		
		// // DAY STYLE // LUCKY IS OPEN
		// if(todayHour >= 11 && todayHour < 16){
		// 	luckyBody.classList.add("dayTimeFontColor");
		// 	luckyBody.style.backgroundColor = "#edf1fa";
		// }
	// END COLOURS ON TIME

	// RANDOM SHUFFLE FOR QUESTIONS EXPERIENCE
		function shuffle(array) {
			var m = array.length, t, i;

			// While there remain elements to shuffle…
			while (m) {

				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);

				// And swap it with the current element.
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}

			return array;
		}

		var randomClient = [0,1,2,3,4,5,6,7];
		var randomTalent = [0,1,2,3,4,5,6,7];

		shuffle(randomClient);
		shuffle(randomTalent);

		var selectedClientQAC1 = randomClient[0];
		var selectedClientQAC2 = randomClient[1];

		var selectedTalentQAC1 = randomTalent[0];
		var selectedTalentQAC2 = randomTalent[1];

		function checkRandomOrder(){
			// for (var i = 0; i < randomClient.length; i++) {
			// 	console.log('i count: ' + i + ' Random Client: ' + randomClient[i]);
			// };

			// for (var i = 0; i < randomTalent.length; i++) {
			// 	console.log('i count: ' + i + ' Random Talent: ' + randomTalent[i]);
			// };

			console.log("Selected as Client Question 1: " + (selectedClientQAC1 + 1) );
			console.log("Selected as Client Question 2: " + (selectedClientQAC2 + 1) );

			console.log("Selected as Talent Question 1: " + (selectedTalentQAC1 + 1) );
			console.log("Selected as Talent Question 2: " + (selectedTalentQAC2 + 1) );
		}

		checkRandomOrder();
	// END RANDOM SHUFFLE

	// SET PACK OF QUESTIONS, ANSWERS AND COPIES
		// DECLARE QUESTIONS, ANSWERS AND CONTINUE COPIES VARIABLES
			// Questions Variables
				var clientQ1, clientQ2, clientQ3, clientQ4, clientQ5, clientQ6, clientQ7, clientQ8, talentQ1, talentQ2, talentQ3, talentQ4, talentQ5, talentQ6, talentQ7, talentQ8; 

			// Answers Variables
				var clientA1, clientA2, clientA3, clientA4, clientA5, clientA6, clientA7, clientA8, talentA1, talentA2, talentA3, talentA4, talentA5, talentA6, talentA7, talentA8;

			// Continue Copys Variables
				var clientC1, clientC2, clientC3, clientC4, clientC5, clientC6, clientC7, clientC8, talentC1, talentC2, talentC3, talentC4, talentC5, talentC6, talentC7, talentC8;
		// END DECLARING Q, A & C VARIABLES



		// CLIENT QUESTION PACK
			// QUESTION 1
				clientQ1 = '1. ¿?';
				// ANSWER
				clientA1 = '1. Te recomendamos.';
				// CONTINUE COPY
				clientC1 = '1. Descúbrenos.';
			// END QUESTION 1

			// QUESTION 2
				clientQ2 = '2. ¿?';
				// ANSWER
				clientA2 = '2. Te recomendamos.';
				// CONTINUE COPY
				clientC2 = '2. Descúbrenos.';
			// END QUESTION 2

			// QUESTION 3
				clientQ3 = '3. ¿?';
				// ANSWER
				clientA3 = '3. Te recomendamos.';
				// CONTINUE COPY
				clientC3 = '3. Descúbrenos.';
			// END QUESTION 3

			// QUESTION 4
				clientQ4 = '4. ¿?';
				// ANSWER
				clientA4 = '4. Te recomendamos.';
				// CONTINUE COPY
				clientC4 = '4. Descúbrenos.';
			// END QUESTION 4

			// QUESTION 5
				clientQ5 = '5. ¿?';
				// ANSWER
				clientA5 = '5. Te recomendamos.';
				// CONTINUE COPY
				clientC5 = '5. Descúbrenos.';
			// END QUESTION 5

			// QUESTION 6
				clientQ6 = '6. ¿?';
				// ANSWER
				clientA6 = '6. Te recomendamos.';
				// CONTINUE COPY
				clientC6 = '6. Descúbrenos.';
			// END QUESTION 6

			// QUESTION 7
				clientQ7 = '7. ¿?';
				// ANSWER
				clientA7 = '7. Te recomendamos.';
				// CONTINUE COPY
				clientC7 = '7. Descúbrenos.';
			// END QUESTION 7

			// QUESTION 8
				clientQ8 = '8. ¿?';
				// ANSWER
				clientA8 = '8. Te recomendamos.';
				// CONTINUE COPY
				clientC8 = '8. Descúbrenos.';
			// END QUESTION 8
		// END CLIENT QUESTION PACK

		// TALENT QUESTION PACK
			// QUESTION 1
				talentQ1 = '1. ¿?';
				// ANSWER
				talentA1 = '1. Te recomendamos.';
				// CONTINUE COPY
				talentC1 = '1. Descúbrenos.';
			// END QUESTION 1

			// QUESTION 2
				talentQ2 = '2. ¿?';
				// ANSWER
				talentA2 = '2. Te recomendamos.';
				// CONTINUE COPY
				talentC2 = '2. Descúbrenos.';
			// END QUESTION 2

			// QUESTION 3
				talentQ3 = '3. ¿?';
				// ANSWER
				talentA3 = '3. Te recomendamos.';
				// CONTINUE COPY
				talentC3 = '3. Descúbrenos.';
			// END QUESTION 3

			// QUESTION 4
				talentQ4 = '4. ¿?';
				// ANSWER
				talentA4 = '4. Te recomendamos.';
				// CONTINUE COPY
				talentC4 = '4. Descúbrenos.';
			// END QUESTION 4

			// QUESTION 5
				talentQ5 = '5. ¿?';
				// ANSWER
				talentA5 = '5. Te recomendamos.';
				// CONTINUE COPY
				talentC5 = '5. Descúbrenos.';
			// END QUESTION 5

			// QUESTION 6
				talentQ6 = '6. ¿?';
				// ANSWER
				talentA6 = '6. Te recomendamos.';
				// CONTINUE COPY
				talentC6 = '6. Descúbrenos.';
			// END QUESTION 6

			// QUESTION 7
				talentQ7 = '7. ¿?';
				// ANSWER
				talentA7 = '7. Te recomendamos.';
				// CONTINUE COPY
				talentC7 = '7. Descúbrenos.';
			// END QUESTION 7

			// QUESTION 8
				talentQ8 = '8. ¿?';
				// ANSWER
				talentA8 = '8. Te recomendamos.';
				// CONTINUE COPY
				talentC8 = '8. Descúbrenos.';
			// END QUESTION 8
		// END TALENT QUESTION PACK



		// INSERTING QUESTIONS AND ANSWERS
			var questionsClient = [clientQ1,clientQ2,clientQ3,clientQ4,clientQ5,clientQ6,clientQ7,clientQ8];
			var questionsTalent = [talentQ1,talentQ2,talentQ3,talentQ4,talentQ5,talentQ6,talentQ7,talentQ8];

			var answersClient = [clientA1,clientA2,clientA3,clientA4,clientA5,clientA6,clientA7,clientA8];
			var answersTalent = [talentA1,talentA2,talentA3,talentA4,talentA5,talentA6,talentA7,talentA8];

			var copiesClient = [clientC1,clientC2,clientC3,clientC4,clientC5,clientC6,clientC7,clientC8];
			var copiesTalent = [talentC1,talentC2,talentC3,talentC4,talentC5,talentC6,talentC7,talentC8];
		// END INSERTING QUESTIONS AND ANSWERS
	// END SET PACK OF QUESTIONS, ANSWERS AND COPIES


	// SET HEIGHT CLASSES FOR QUESTIONS AND ANSWERS
		// DECLARING HEIGHT VARIABLES
			// Questions Variables
			var heightClientQ1, heightClientQ2, heightClientQ3, heightClientQ4, heightClientQ5, heightClientQ6, heightClientQ7, heightClientQ8, heightTalentQ1, heightTalentQ2, heightTalentQ3, heightTalentQ4, heightTalentQ5, heightTalentQ6, heightTalentQ7, heightTalentQ8; 

			// Answers Variables
			var heightClientA1, heightClientA2, heightClientA3, heightClientA4, heightClientA5, heightClientA6, heightClientA7, heightClientA8, heightTalentA1, heightTalentA2, heightTalentA3, heightTalentA4, heightTalentA5, heightTalentA6, heightTalentA7, heightTalentA8;
		// END DECLARING HEIGHT VARIABLES


		// CLASSES PACKS
			// HEIGHT CLIENT PACK
				// HEIGHT CLIENT 1
					heightClientQ1 = 'oneLineInfoMaster';
					heightClientA1 = 'oneLineInfoMaster';
				// END HEIGHT CLIENT 1

				// HEIGHT CLIENT 2
					heightClientQ2 = 'oneLineInfoMaster';
					heightClientA2 = 'oneLineInfoMaster';
				// END HEIGHT CLIENT 2

				// HEIGHT CLIENT 3
					heightClientQ3 = 'oneLineInfoMaster';
					heightClientA3 = 'oneLineInfoMaster';
				// END HEIGHT CLIENT 3

				// HEIGHT CLIENT 4
					heightClientQ4 = 'oneLineInfoMaster';
					heightClientA4 = 'oneLineInfoMaster';
				// END HEIGHT CLIENT 4

				// HEIGHT CLIENT 5
					heightClientQ5 = 'oneLineInfoMaster';
					heightClientA5 = 'oneLineInfoMaster';
				// END HEIGHT CLIENT 5

				// HEIGHT CLIENT 6
					heightClientQ6 = 'oneLineInfoMaster';
					heightClientA6 = 'oneLineInfoMaster';
				// END HEIGHT CLIENT 6

				// HEIGHT CLIENT 7
					heightClientQ7 = 'oneLineInfoMaster';
					heightClientA7 = 'oneLineInfoMaster';
				// END HEIGHT CLIENT 7

				// HEIGHT CLIENT 8
					heightClientQ8 = 'oneLineInfoMaster';
					heightClientA8 = 'oneLineInfoMaster';
				// END HEIGHT CLIENT 8
			// END HEIGHT CLIENT PACK

			// HEIGHT TALENT PACK
				// HEIGHT TALENT 1
					heightTalentQ1 = 'oneLineInfoMaster';
					heightTalentA1 = 'oneLineInfoMaster';
				// END HEIGHT TALENT 1

				// HEIGHT TALENT 2
					heightTalentQ2 = 'oneLineInfoMaster';
					heightTalentA2 = 'oneLineInfoMaster';
				// END HEIGHT TALENT 2

				// HEIGHT TALENT 3
					heightTalentQ3 = 'oneLineInfoMaster';
					heightTalentA3 = 'oneLineInfoMaster';
				// END HEIGHT TALENT 3

				// HEIGHT TALENT 4
					heightTalentQ4 = 'oneLineInfoMaster';
					heightTalentA4 = 'oneLineInfoMaster';
				// END HEIGHT TALENT 4

				// HEIGHT TALENT 5
					heightTalentQ5 = 'oneLineInfoMaster';
					heightTalentA5 = 'oneLineInfoMaster';
				// END HEIGHT TALENT 5

				// HEIGHT TALENT 6
					heightTalentQ6 = 'oneLineInfoMaster';
					heightTalentA6 = 'oneLineInfoMaster';
				// END HEIGHT TALENT 6

				// HEIGHT TALENT 7
					heightTalentQ7 = 'oneLineInfoMaster';
					heightTalentA7 = 'oneLineInfoMaster';
				// END HEIGHT TALENT 7

				// HEIGHT TALENT 8
					heightTalentQ8 = 'oneLineInfoMaster';
					heightTalentA8 = 'oneLineInfoMaster';
				// END HEIGHT TALENT 8
			// END HEIGHT TALENT PACK
		// END CLASSES PACKS


		// INSERTING HEIGHT CLASSES
			var heightClientQuestions = [heightClientQ1, heightClientQ2, heightClientQ3, heightClientQ4, heightClientQ5, heightClientQ6, heightClientQ7, heightClientQ8];
			var heightTalentQuestions = [heightTalentQ1, heightTalentQ2, heightTalentQ3, heightTalentQ4, heightTalentQ5, heightTalentQ6, heightTalentQ7, heightTalentQ8];

			var heightClientAnswers = [heightClientA1, heightClientA2, heightClientA3, heightClientA4, heightClientA5, heightClientA6, heightClientA7, heightClientA8];
			var heightTalentAnswers = [heightTalentA1, heightTalentA2, heightTalentA3, heightTalentA4, heightTalentA5, heightTalentA6, heightTalentA7, heightTalentA8];
		// END INSERTING HEIGHT CLASSES
	// END SET HEIGHT CLASSES FOR QUESTIONS AND ANSWERS



	// SET AGENCIES PACKS
		// DECLARE AGENCIES NAME AND CONTACT DATA VARIABLES
			// DECLARE AGENCIES NAME VARIABLES
			var agencyName1,agencyName2,agencyName3,agencyName4,agencyName5,agencyName6,agencyName7,agencyName8,agencyName9,agencyName10,agencyName11,agencyName12,agencyName13,agencyName14,agencyName15,agencyName16,agencyName17,agencyName18,agencyName19,agencyName20,agencyName21,agencyName22,agencyName23,agencyName24;

				
			// DECLARE AGENCIES DATA VARIABLES
			var agencyData1,agencyData2,agencyData3,agencyData4,agencyData5,agencyData6,agencyData7,agencyData8,agencyData9,agencyData10,agencyData11,agencyData12,agencyData13,agencyData14,agencyData15,agencyData16,agencyData17,agencyData18,agencyData19,agencyData20,agencyData21,agencyData22,agencyData23,agencyData24;
		// END DECLARE AGENCIES NAME AND CONTACT DATA VARIABLES

			
		// AGENCIES INFO: NAME AND CONTACT DATA
			// AGENCY 1
			agencyName1 = '1. Agency Name';
			agencyData1 = '1. Agency Data';

			// AGENCY 2
			agencyName2 = '2. Agency Name';
			agencyData2 = '2. Agency Data';

			// AGENCY 3
			agencyName3 = '3. Agency Name';
			agencyData3 = '3. Agency Data';

			// AGENCY 4
			agencyName4 = '4. Agency Name';
			agencyData4 = '4. Agency Data';

			// AGENCY 5
			agencyName5 = '5. Agency Name';
			agencyData5 = '5. Agency Data';

			// AGENCY 6
			agencyName6 = '6. Agency Name';
			agencyData6 = '6. Agency Data';

			// AGENCY 7
			agencyName7 = '7. Agency Name';
			agencyData7 = '7. Agency Data';

			// AGENCY 8
			agencyName8 = '8. Agency Name';
			agencyData8 = '8. Agency Data';

			// AGENCY 9
			agencyName9 = '9. Agency Name';
			agencyData9 = '9. Agency Data';

			// AGENCY 10
			agencyName10 = '10. Agency Name';
			agencyData10 = '10. Agency Data';

			// AGENCY 11
			agencyName11 = '11. Agency Name';
			agencyData11 = '11. Agency Data';

			// AGENCY 12
			agencyName12 = '12. Agency Name';
			agencyData12 = '12. Agency Data';

			// AGENCY 13
			agencyName13 = '13. Agency Name';
			agencyData13 = '13. Agency Data';

			// AGENCY 14
			agencyName14 = '14. Agency Name';
			agencyData14 = '14. Agency Data';

			// AGENCY 15
			agencyName15 = '15. Agency Name';
			agencyData15 = '15. Agency Data';

			// AGENCY 16
			agencyName16 = '16. Agency Name';
			agencyData16 = '16. Agency Data';

			// AGENCY 17
			agencyName17 = '17. Agency Name';
			agencyData17 = '17. Agency Data';

			// AGENCY 18
			agencyName18 = '18. Agency Name';
			agencyData18 = '18. Agency Data';

			// AGENCY 19
			agencyName19 = '19. Agency Name';
			agencyData19 = '19. Agency Data';

			// AGENCY 20
			agencyName20 = '20. Agency Name';
			agencyData20 = '20. Agency Data';

			// AGENCY 21
			agencyName21 = '21. Agency Name';
			agencyData21 = '21. Agency Data';

			// AGENCY 22
			agencyName22 = '22. Agency Name';
			agencyData22 = '22. Agency Data';

			// AGENCY 23
			agencyName23 = '23. Agency Name';
			agencyData23 = '23. Agency Data';

			// AGENCY 24
			agencyName24 = '24. Agency Name';
			agencyData24 = '24. Agency Data';
		// END AGENCIES INFO
		

		// INSERT AGENCIES NAMES AND DATA
			var agenciesName = [agencyName1,agencyName2,agencyName3,agencyName4,agencyName5,agencyName6,agencyName7,agencyName8,agencyName9,agencyName10,agencyName11,agencyName12,agencyName13,agencyName14,agencyName15,agencyName16,agencyName17,agencyName18,agencyName19,agencyName20,agencyName21,agencyName22,agencyName23,agencyName24];

			var agenciesData = [agencyData1,agencyData2,agencyData3,agencyData4,agencyData5,agencyData6,agencyData7,agencyData8,agencyData9,agencyData10,agencyData11,agencyData12,agencyData13,agencyData14,agencyData15,agencyData16,agencyData17,agencyData18,agencyData19,agencyData20,agencyData21,agencyData22,agencyData23,agencyData24];
		

			var topClientAgenciesNames 	  = [agenciesName[0], agenciesName[3], agenciesName[6], agenciesName[9], agenciesName[12]];
			var centerClientAgenciesNames = [agenciesName[1], agenciesName[4], agenciesName[7], agenciesName[10], agenciesName[13]];
			var bottomClientAgenciesNames = [agenciesName[2], agenciesName[5], agenciesName[8], agenciesName[11], agenciesName[14]];

			var topClientAgenciesData 	 = [agenciesData[0], agenciesData[3], agenciesData[6], agenciesData[9], agenciesData[12]];
			var centerClientAgenciesData = [agenciesData[1], agenciesData[4], agenciesData[7], agenciesData[10], agenciesData[13]];
			var bottomClientAgenciesData = [agenciesData[2], agenciesData[5], agenciesData[8], agenciesData[11], agenciesData[14]];


			var topTalentAgenciesNames 	  = [agenciesName[13], agenciesName[2], agenciesName[4], agenciesName[15]];
			var centerTalentAgenciesNames = [agenciesName[4], agenciesName[1], agenciesName[5], agenciesName[2]];
			var bottomTalentAgenciesNames = [agenciesName[1], agenciesName[0], agenciesName[3], agenciesName[3]];

			var topTalentAgenciesData 	 = [agenciesData[13], agenciesData[2], agenciesData[4], agenciesData[15]];
			var centerTalentAgenciesData = [agenciesData[4], agenciesData[1], agenciesData[5], agenciesData[2]];
			var bottomTalentAgenciesData = [agenciesData[1], agenciesData[0], agenciesData[3], agenciesData[3]];
		// END INSERT AGENCIES NAMES AND DATA
	// END SET AGENCIES PACKS



	// NAVIGATION FLOW
		// LABEL BUTTON RESET FULL PAGE
			$('#luckyLabel').click(function() {
				// masterResetLucky();
				// setTimeout(function(){
				// 	masterResetLucky();
				// },1500);
				window.location.href = "";
			});
		// END LABEL RESET FULL PAGE


		// MENU SHORTCUTS

			// SHOW CLIENT FIRST QUESTION
			$('#startClient').click(function() {
				if(curtEnd){

					masterResetLucky();
					masterCloseCurtain();

					setTimeout(function(){
						$('.welcomeLogoToPush').addClass('pushWelcomeLogo');
						$('.innerStartWeb').addClass('pushStartWeb');

						setTimeout(function(){

							$('#welcomePage').addClass('notHere');
							$('#whoRUOptions').addClass('notHere');

							masterInsertQAC('#clientFirstQuestion', questionsClient, heightClientQuestions, selectedClientQAC1);

							masterShowElement($('#clientFirstQuestion'),200);
							masterShowElement($('#clientFirstOption1'),600);
							masterShowElement($('#clientFirstOption2'),800);

						},1000);
					},800);
				}
			});


			// SHOW COMPETITION FIRST QUESTION
			$('#startCompetition').click(function() {
				
				if(curtEnd){
					masterResetLucky();
					masterCloseCurtain();

					setTimeout(function(){
						$('.welcomeLogoToPush').addClass('pushWelcomeLogo');
						$('.innerStartWeb').addClass('pushStartWeb');

						setTimeout(function(){

							$('#welcomePage').addClass('notHere');
							$('#whoRUOptions').addClass('notHere');

							masterShowElement($('#competitionFirstQuestion'),200);
							masterShowElement($('#competitionFirstOption1'),600);
							masterShowElement($('#competitionFirstOption2'),800);

						},1000);
					},800);
				}
			});


			// SHOW TALENT FIRST QUESTION
			$('#startTalent').click(function() {

				if(curtEnd){
					masterResetLucky();
					masterCloseCurtain();

					setTimeout(function(){
						$('.welcomeLogoToPush').addClass('pushWelcomeLogo');
						$('.innerStartWeb').addClass('pushStartWeb');

						setTimeout(function(){

							$('#welcomePage').addClass('notHere');
							$('#whoRUOptions').addClass('notHere');

							masterInsertQAC('#talentFirstQuestion', questionsTalent, heightTalentQuestions, selectedTalentQAC1);

							masterShowElement($('#talentFirstQuestion'),200);
							masterShowElement($('#talentFirstOption1'),600);
							masterShowElement($('#talentFirstOption2'),800);

						},1000);
					},800);
				}

			});


			// SHOW CLIENT FINAL INFORMATION
			$('#startInfo').click(function() {
				if(curtEnd){
					masterResetLucky();
					masterCloseCurtain();

					setTimeout(function(){
						$('.welcomeLogoToPush').addClass('pushWelcomeLogo');
						$('.innerStartWeb').addClass('pushStartWeb');

						// DISAPPEAR NEXT SLIDE MASTER SO YOU CAN CLICK ON INFO BUTTON
						$('#nextSlideMaster').addClass('hidden');

						setTimeout(function(){

							$('#welcomePage').addClass('notHere');
							$('#whoRUOptions').addClass('notHere');

							$('#finalInfoClientWrapper').removeClass('notHere');

							setTimeout(function(){
								$('#clientVideo').addClass('notHere');
								$('#videoMasterWrapper').addClass('notHere');

								masterShowElement($('#finalInfoClient'),100);
								$('#finalClientBackInfo').find('.finalArrow').removeClass('hiddenArrow');

								masterShowElement($('#infoRSTitle1'),200);
								masterShowElement($('#infoRSTitle2'),350);
								masterShowElement($('#infoRSTitle3'),500);
							},100);

						},1000);
					},800);
				}
			});
		// END MENU



		// INTRO
			$('#startWeb').click(function() {
				if(curtEnd){
					curtEnd = false;
					allDivs.addClass('waitPlease');
					$('.welcomeLogoToPush').addClass('pushWelcomeLogo');
					$('.innerStartWeb').addClass('pushStartWeb');

					setTimeout(function(){
						// HIDE INTRO				
						$('#welcomePage').addClass('notHere');

						// SHOW WHO ARE YOU ELEMENTS
						masterShowElement($('#whoRUQuestion'),0);
						masterShowElement($('#whoRUOption1'),150);
						masterShowElement($('#whoRUOption2'),350);
						masterShowElement($('#whoRUOption3'),550);

						setTimeout(function(){
							curtEnd = true;
							allDivs.removeClass('waitPlease');
						},1000);

					},600);
				}
			});
		// END INTRO

		// WHO ARE YOU: CLIENT FLOW
			// I'M CLIENT
				$('#whoRUOption1').click(function() {
					masterHideElement($('#whoRUOption3'),0);
					masterHideElement($('#whoRUOption2'),200);
					masterHideElement($('#whoRUOption1'),400);
					masterHideElement($('#whoRUQuestion'),600);

					masterInsertQAC('#clientFirstQuestion', questionsClient, heightClientQuestions, selectedClientQAC1);

					setTimeout(function(){
						$('#whoRUOptions').addClass('notHere');

						masterShowElement($('#clientFirstQuestion'),200);
						masterShowElement($('#clientFirstOption1'),600);
						masterShowElement($('#clientFirstOption2'),800);
					},1200);
				});
			// END I'M CLIENT

				// FIRST QUESTION FLOW
					// A) I'M LOOKING TO CONNECT WITH MY TARGET
						$('#clientFirstYes').click(function() {
							masterHideElement($('#clientFirstOption2'),0);
							masterHideElement($('#clientFirstOption1'),200);
							masterHideElement($('#clientFirstQuestion'),450);

							masterInsertQAC('#clientFirstAdvice', answersClient, heightClientAnswers, selectedClientQAC1);

							setTimeout(function(){
								masterShowElement($('#clientFirstAdvice'),600);
								masterShowElement($('#clientFirstNext'),700);
								masterShowElement($('#clientFirstAgency1'),750);
								masterShowElement($('#clientFirstAgency2'),950);
								masterShowElement($('#clientFirstAgency3'),1150);
							},100);
						});
					// END A) CONNECT WITH MY TARGET

						// A)1) NEXT SLIDE
							$('#clientFirstNext').click(function() {
								masterHideElement($('#clientFirstNext'),0);
								masterHideElement($('#clientFirstAgency3'),100);
								masterHideElement($('#clientFirstAgency2'),300);
								masterHideElement($('#clientFirstAgency1'),500);
								masterHideElement($('#clientFirstAdvice'),650);

								masterInsertQAC('#clientSecondQuestion', questionsClient, heightClientQuestions, selectedClientQAC2);

								setTimeout(function(){
									masterShowElement($('#clientSecondQuestion'),0);
									masterShowElement($('#clientSecondOption1'),400);
									masterShowElement($('#clientSecondOption2'),600);
								},1100);
							});
						// END A)1) END NEXT SLIDE

					// B) NOT TO CONNECT WITH MY TARGET
						$('#clientFirstNo').click(function() {
							masterHideElement($('#clientFirstOption2'),0);
							masterHideElement($('#clientFirstOption1'),200);
							masterHideElement($('#clientFirstQuestion'),450);

							masterInsertQAC('#clientSecondQuestion', questionsClient, heightClientQuestions, selectedClientQAC2);

							setTimeout(function(){
								masterShowElement($('#clientSecondQuestion'),0);
								masterShowElement($('#clientSecondOption1'),400);
								masterShowElement($('#clientSecondOption2'),600);
							},850);
						});
					// END B) NOT TO CONNECT WITH MY TARGET
				// END FIRST QUESTION FLOW


				// SECOND QUESTION FLOW
					// A) I'M AFRAID OF TAKING RISKS
						$('#clientSecondYes').click(function() {
							masterHideElement($('#clientSecondOption2'),0);
							masterHideElement($('#clientSecondOption1'),200);
							masterHideElement($('#clientSecondQuestion'),450);

							masterInsertQAC('#clientSecondAdvice', answersClient, heightClientAnswers, selectedClientQAC2);

							setTimeout(function(){
								masterShowElement($('#clientSecondAdvice'),600);
								masterShowElement($('#clientSecondNext'),700);
								masterShowElement($('#clientSecondAgency1'),750);
								masterShowElement($('#clientSecondAgency2'),950);
								masterShowElement($('#clientSecondAgency3'),1150);
							},100);
						});
					// END A) I'M AFRAID

						// A)1) NEXT SLIDE
							$('#clientSecondNext').click(function() {
								masterHideElement($('#clientSecondNext'),0);
								masterHideElement($('#clientSecondAgency3'),100);
								masterHideElement($('#clientSecondAgency2'),300);
								masterHideElement($('#clientSecondAgency1'),500);
								masterHideElement($('#clientSecondAdvice'),650);

								setTimeout(function(){
									masterShowElement($('#clientSuccessQuestion'),0);
									masterShowElement($('#clientSuccessOption1'),200);
								},1100);
							});
						// END A)1) NEXT

					// B) I'M NOT AFRAID
						$('#clientSecondNo').click(function() {
							masterHideElement($('#clientSecondOption2'),0);
							masterHideElement($('#clientSecondOption1'),200);
							masterHideElement($('#clientSecondQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#clientSuccessQuestion'),0);
								masterShowElement($('#clientSuccessOption1'),200);
							},850);
						});
					// END B) NOT AFRAID
				// END SECOND QUESTION FLOW



				// SUCCESS QUESTION FLOW
					// YES, I WANT TO FLY
						$('#clientSuccessYes').click(function() {
							masterHideElement($('#clientSuccessOption1'),0);
							masterHideElement($('#clientSuccessQuestion'),100);

							// DISAPPEAR NEXT SLIDE MASTER SO YOU CAN CLICK ON INFO BUTTON
							$('#nextSlideMaster').addClass('hidden');

							setTimeout(function(){
								$('#videoMasterWrapper').removeClass('notHere');
								$('#clientVideo').removeClass('notHere');

								masterShowElement($('#clientIframe'),100);
								masterShowElement($('#clientGetInfoBox'),300);
							},600);
						});
					// END YES, I WANT TO FLY


						// CLICK HERE TO GET INFO
							$('#clientInfoHere').click(function() {
								masterHideElement($('#clientGetInfoBox'),0);
								masterHideElement($('#clientIframe'),100);

								$('#finalInfoClientWrapper').removeClass('notHere');

								setTimeout(function(){
									$('#clientVideo').addClass('notHere');
									$('#videoMasterWrapper').addClass('notHere');

									masterShowElement($('#finalInfoClient'),100);
									$('#finalClientBackInfo').find('.finalArrow').removeClass('hiddenArrow');

									masterShowElement($('#infoRSTitle1'),200);
									masterShowElement($('#infoRSTitle2'),350);
									masterShowElement($('#infoRSTitle3'),500);
								},800);
							});
						// END CLICK TO GET INFO

						// CLICK HERE TO GO BACK TO VIDEO
							$('#finalClientBackInfo').click(function() {
								$('#finalClientBackInfo').find('.finalArrow').addClass('hiddenArrow');

								$('#videoMasterWrapper').removeClass('notHere');
								$('#clientVideo').removeClass('notHere');

								masterHideElement($('#infoRSTitle3'),50);
								masterHideElement($('#infoRSTitle2'),200);
								masterHideElement($('#infoRSTitle1'),350);

								masterHideElement($('#finalInfoClient'),450);
								setTimeout(function(){
									$('#finalInfoClientWrapper').removeClass('notHere');
								},850);

								masterShowElement($('#clientIframe'),850);
								masterShowElement($('#clientGetInfoBox'),950);
							});
						// END CLICK BACK TO VIDEO
				// END SUCCESS FLOW			
		// END CLIENT FLOW

		// WHO ARE YOU: COMPETITION FLOW
			// I'M COMPETITION
				$('#whoRUOption2').click(function() {
					masterHideElement($('#whoRUOption3'),0);
					masterHideElement($('#whoRUOption2'),200);
					masterHideElement($('#whoRUOption1'),400);
					masterHideElement($('#whoRUQuestion'),600);

					setTimeout(function(){
						$('#whoRUOptions').addClass('notHere');

						masterShowElement($('#competitionFirstQuestion'),0);
						masterShowElement($('#competitionFirstOption1'),400);
						masterShowElement($('#competitionFirstOption2'),600);
					},1200);
				});
			// END I'M COMPETITION

			// FIRST QUESTION FLOW
					// A) NO, IT'S NOT ENOUGH
						$('#competitionFirstYes').click(function() {
							masterHideElement($('#competitionFirstOption2'),0);
							masterHideElement($('#competitionFirstOption1'),200);
							masterHideElement($('#competitionFirstQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#talentFirstQuestion'),0);
								masterShowElement($('#talentFirstOption1'),150);
								masterShowElement($('#talentFirstOption2'),300);
							},700);
						});
					// END A) NOT ENOUGH

					// B) IT'S ENOUGH
						$('#competitionFirstNo').click(function() {
							masterHideElement($('#competitionFirstOption2'),0);
							masterHideElement($('#competitionFirstOption1'),200);
							masterHideElement($('#competitionFirstQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#competitionFirstAdvice'),0);
								masterShowElement($('#competitionAnywayOption1'),100);
							},700);
						});
					// END B) ENOUGH
				// END FIRST QUESTION FLOW
		// END COMPETITION FLOW

		// WHO ARE YOU: TALENT FLOW
			// I'M TALENT
				$('#whoRUOption3').click(function() {
					masterHideElement($('#whoRUOption3'),0);
					masterHideElement($('#whoRUOption2'),200);
					masterHideElement($('#whoRUOption1'),400);
					masterHideElement($('#whoRUQuestion'),600);

					masterInsertQAC('#talentFirstQuestion', questionsTalent, heightTalentQuestions, selectedTalentQAC1);

					setTimeout(function(){
						$('#whoRUOptions').addClass('notHere');

						masterShowElement($('#talentFirstQuestion'),0);
						masterShowElement($('#talentFirstOption1'),150);
						masterShowElement($('#talentFirstOption2'),300);
					},1000);
				});
			// END I'M TALENT

			// FIRST QUESTION FLOW
				// A) I LIKE TO DRINK
					$('#talentFirstYes').click(function() {
						masterHideElement($('#talentFirstOption2'),0);
						masterHideElement($('#talentFirstOption1'),200);
						masterHideElement($('#talentFirstQuestion'),450);

						masterInsertQAC('#talentSecondQuestion', questionsTalent, heightTalentQuestions, selectedTalentQAC2);

						setTimeout(function(){
							masterShowElement($('#talentSecondQuestion'),0);
							masterShowElement($('#talentSecondOption1'),400);
							masterShowElement($('#talentSecondOption2'),600);
						},850);
					});
				// END A) I DRINK

				// B) I DON'T DRINK
					$('#talentFirstNo').click(function() {
						masterHideElement($('#talentFirstOption2'),0);
						masterHideElement($('#talentFirstOption1'),200);
						masterHideElement($('#talentFirstQuestion'),450);

						masterInsertQAC('#talentFirstAdvice', answersTalent, heightTalentAnswers, selectedTalentQAC1);

						setTimeout(function(){
							masterShowElement($('#talentFirstAdvice'),600);
							masterShowElement($('#talentFirstNext'),700);
							masterShowElement($('#talentFirstAgency1'),750);
							masterShowElement($('#talentFirstAgency2'),950);
							masterShowElement($('#talentFirstAgency3'),1150);
						},100);
					});
				// END B) I DON'T DRINK

					// B)1) NEXT SLIDE
						$('#talentFirstNext').click(function() {
							masterHideElement($('#talentFirstNext'),0);
							masterHideElement($('#talentFirstAgency3'),100);
							masterHideElement($('#talentFirstAgency2'),300);
							masterHideElement($('#talentFirstAgency1'),500);
							masterHideElement($('#talentFirstAdvice'),650);

							masterInsertQAC('#talentSecondQuestion', questionsTalent, heightTalentQuestions, selectedTalentQAC2);

							setTimeout(function(){
								masterShowElement($('#talentSecondQuestion'),0);
								masterShowElement($('#talentSecondOption1'),400);
								masterShowElement($('#talentSecondOption2'),600);
							},1100);
						});
					// END B)1) END NEXT SLIDE
			// END FIRST QUESTION FLOW

			// SECOND QUESTION FLOW
				// A) I WON'T STAY AFTER 7PM
					$('#talentSecondYes').click(function() {
						masterHideElement($('#talentSecondOption2'),0);
						masterHideElement($('#talentSecondOption1'),200);
						masterHideElement($('#talentSecondQuestion'),450);

						masterInsertQAC('#talentSecondAdvice', answersTalent, heightTalentAnswers, selectedTalentQAC2);

						setTimeout(function(){
							masterShowElement($('#talentSecondAdvice'),600);
							masterShowElement($('#talentSecondNext'),700);
							masterShowElement($('#talentSecondAgency1'),750);
							masterShowElement($('#talentSecondAgency2'),950);
							masterShowElement($('#talentSecondAgency3'),1150);
						},100);
					});
				// END A) I WON'T STAY

					// A)1) NEXT SLIDE
						$('#talentSecondNext').click(function() {
							masterHideElement($('#talentSecondNext'),0);
							masterHideElement($('#talentSecondAgency3'),100);
							masterHideElement($('#talentSecondAgency2'),300);
							masterHideElement($('#talentSecondAgency1'),500);
							masterHideElement($('#talentSecondAdvice'),650);

							setTimeout(function(){
								masterShowElement($('#talentSuccessQuestion'),0);
								masterShowElement($('#talentSuccessOption1'),200);
								masterShowElement($('#talentSuccessOption2'),400);
							},1100);
						});
					// END A)1) END NEXT SLIDE

				// B) I WILL STAY, I'M PASSIONATE
					$('#talentSecondNo').click(function() {
						masterHideElement($('#talentSecondOption2'),0);
						masterHideElement($('#talentSecondOption1'),200);
						masterHideElement($('#talentSecondQuestion'),450);

						setTimeout(function(){
							masterShowElement($('#talentSuccessQuestion'),0);
							masterShowElement($('#talentSuccessOption1'),200);
							masterShowElement($('#talentSuccessOption2'),400);
						},850);
					});
				// END B) I WILL STAY, I'M PASSIONATE
			// END SECOND QUESTION FLOW


			// TALENT SUCCESS QUESTION FLOW
				// I'D PREFER DOBLADA
					$('#talentSuccessYes').click(function() {
						masterHideElement($('#talentSuccessOption2'),0);
						masterHideElement($('#talentSuccessOption1'),200);
						masterHideElement($('#talentSuccessQuestion'),350);

						// DISAPPEAR NEXT SLIDE MASTER SO YOU CAN CLICK ON INFO BUTTON
						$('#nextSlideMaster').addClass('hidden');

						setTimeout(function(){
							$('#videoMasterWrapper').removeClass('notHere');
							$('#talentVideo').removeClass('notHere');

							masterShowElement($('#talentIframe'),100);
							masterShowElement($('#talentGetInfoBox'),300);
						},600);
					});
				// END I'D PREFER DOBLADA

				// YES, I'D PREFER SUBTITULADA
					$('#talentSuccessNo').click(function() {
						masterHideElement($('#talentSuccessOption2'),0);
						masterHideElement($('#talentSuccessOption1'),200);
						masterHideElement($('#talentSuccessQuestion'),350);

						// DISAPPEAR NEXT SLIDE MASTER SO YOU CAN CLICK ON INFO BUTTON
						$('#nextSlideMaster').addClass('hidden');

						setTimeout(function(){
							$('#videoMasterWrapper').removeClass('notHere');
							$('#talentVideo').removeClass('notHere');

							masterShowElement($('#talentIframe'),100);
							masterShowElement($('#talentGetInfoBox'),300);
						},600);
					});
				// END YES, I'D PREFER SUBTITULADA


					// CLICK HERE TO GET CODE
						$('#talentInfoHere').click(function() {
							masterHideElement($('#talentGetInfoBox'),0);
							masterHideElement($('#talentIframe'),200);

							$('#talentSuccessAdviceWrapper').removeClass('notHere');

							setTimeout(function(){
								$('#talentVideo').addClass('notHere');
								$('#videoMasterWrapper').addClass('notHere');


								$('#talentSuccessAdviceBackInfo').find('.finalArrow').removeClass('hiddenArrow');

								masterShowElement($('#talentSuccessAdvice'),100);
								masterShowElement($('#talentAdviceCode1'),300);
							},800);
						});
					// END CLICK TO GET CODE


					// CLICK HERE TO GO BACK TO VIDEO
						$('#talentSuccessAdviceBackInfo').click(function() {

							$('#talentSuccessAdviceBackInfo').find('.finalArrow').addClass('hiddenArrow');
							masterHideElement($('#talentAdviceCode1'),0);
							masterHideElement($('#talentSuccessAdvice'),200);

							$('#talentVideo').removeClass('notHere');
							$('#videoMasterWrapper').removeClass('notHere');

							setTimeout(function(){
								$('#talentSuccessAdviceWrapper').addClass('notHere');

								masterShowElement($('#talentIframe'),0);
								masterShowElement($('#talentGetInfoBox'),200);
							},600);
						});
					// END CLICK TO GO BACK TO VIDEO
			// END TALENT SUCCESS FLOW 
		// END TALENT FLOW




		// MASTER SHOW/HIDE ELEMENTS
			function masterShowElement(thisElement,setDelay){
				setTimeout(function(){
					$(thisElement).addClass('masterInsertElement');
				},setDelay);
			}

			function masterHideElement(thisElement,setDelay){
				setTimeout(function(){
					$(thisElement).removeClass('masterInsertElement');
				},setDelay);
			}
		// END MASTER SHOW/HIDE

		// MASTER RESET FUNCTION
			function masterResetLucky(){

				// HIDE WHO ARE YOU ELEMENTS
				masterHideElement($('#whoRUOption3'),0);
				masterHideElement($('#whoRUOption2'),200);
				masterHideElement($('#whoRUOption1'),400);
				masterHideElement($('#whoRUQuestion'),550);
				
				

				// SHOW INTRO
				$('#welcomePage').removeClass('notHere');
				// RESET WHO ARE YOU OPTIONS
				$('#whoRUOptions').removeClass('notHere');
				

				// RESET MASKING CURRENT PAGE OBJECTS
				setTimeout(function(){
					$('.welcomeLogoToPush').removeClass('pushWelcomeLogo');
					$('.innerStartWeb').removeClass('pushStartWeb');
				},700);

				// SHUFFLE QUESTIONS ANSWERS AND COPIES AGAIN
					shuffle(randomClient);
					shuffle(randomTalent);
					checkRandomOrder();
				// END SHUFFLE AGAIN

				// RESET CLIENT FLOW
					// RESET CLIENT BOXES
					masterRemoveQAC('#clientFirstQuestion');
					masterRemoveQAC('#clientFirstAdvice');
					masterRemoveQAC('#clientSecondQuestion');
					masterRemoveQAC('#clientSecondAdvice');

					// RESET CLIENT FIRST QUESTION FLOW: CONNECT?
					masterHideElement($('#clientFirstOption2'),0);
					masterHideElement($('#clientFirstOption1'),200);
					masterHideElement($('#clientFirstQuestion'),350);

					// RESET CLIENT FIRST ADVICE AGENCIES
					masterHideElement($('#clientFirstAgency3'),0);
					masterHideElement($('#clientFirstAgency2'),100);
					masterHideElement($('#clientFirstAgency1'),200);
					masterHideElement($('#clientFirstNext'),300);
					masterHideElement($('#clientFirstAdvice'),450);


					// RESET CLIENT SECOND QUESTION: FEAR?
					masterHideElement($('#clientSecondOption2'),0);
					masterHideElement($('#clientSecondOption1'),200);
					masterHideElement($('#clientSecondQuestion'),350);

					// RESET CLIENT SECOND ADVICE AGENCIES
					masterHideElement($('#clientSecondAgency3'),0);
					masterHideElement($('#clientSecondAgency2'),100);
					masterHideElement($('#clientSecondAgency1'),200);
					masterHideElement($('#clientSecondNext'),300);
					masterHideElement($('#clientSecondAdvice'),450);


					// RESET CLIENT SUCCESS QUESTION: WANNA FLY?
					masterHideElement($('#clientSuccessOption1'),0);
					masterHideElement($('#clientSuccessQuestion'),200);


					// RESET CLIENT SUCCESS VIDEO
					masterHideElement($('#clientGetInfoBox'),0);
					masterHideElement($('#clientIframe'),100);

					setTimeout(function(){
						$('#clientVideo').addClass('notHere');
						$('#videoMasterWrapper').addClass('notHere');
					},800);


					// RESET CLIENT SUCCESS CONTACT INFO
					$('#finalClientBackInfo').find('.finalArrow').addClass('hiddenArrow');
					
					masterHideElement($('#infoRSTitle3'),100);
					masterHideElement($('#infoRSTitle2'),250);
					masterHideElement($('#infoRSTitle1'),400);

					masterHideElement($('#finalInfoClient'),450);
					setTimeout(function(){
						$('#finalInfoClientWrapper').addClass('notHere');
					},850);

					// APPEAR NEXT SLIDE MASTER SO YOU CAN CLICK ON IT AGAIN
					$('#nextSlideMaster').removeClass('hidden');
				// END RESET CLIENT

				// RESET COMPETITION FLOW
					// RESET COMPETITION FIRST QUESTION
					masterHideElement($('#competitionFirstOption2'), 0);
					masterHideElement($('#competitionFirstOption1'), 100);
					masterHideElement($('#competitionFirstQuestion'), 200);


					// RESET COMPETITION FIRST ADVICE
					masterHideElement($('#competitionAnywayOption1'),0);
					masterHideElement($('#competitionFirstAdvice'),150);
				// END RESET COMPETITION

				// RESET TALENT FLOW
					// RESET TALENT BOXES
					masterRemoveQAC('#talentFirstQuestion');
					masterRemoveQAC('#talentFirstAdvice');
					masterRemoveQAC('#talentSecondQuestion');
					masterRemoveQAC('#talentSecondAdvice');

					// RESET TALENT FIRST QUESTION FLOW: DO YOU DRINK?
					masterHideElement($('#talentFirstOption2'),0);
					masterHideElement($('#talentFirstOption1'),150);
					masterHideElement($('#talentFirstQuestion'),300);

					// RESET TALENT FIRST ADVICE AGENCIES
					masterHideElement($('#talentFirstAgency3'),150);
					masterHideElement($('#talentFirstAgency2'),300);
					masterHideElement($('#talentFirstAgency1'),450);
					masterHideElement($('#talentFirstNext'),550);
					masterHideElement($('#talentFirstAdvice'),700);


					// RESET TALENT SECOND QUESTION FLOW: 9AM TO 7PM?
					masterHideElement($('#talentSecondOption2'),0);
					masterHideElement($('#talentSecondOption1'),150);
					masterHideElement($('#talentSecondQuestion'),300);

					// RESET TALENT SECOND ADVICE AGENCIES
					masterHideElement($('#talentSecondAgency3'),150);
					masterHideElement($('#talentSecondAgency2'),300);
					masterHideElement($('#talentSecondAgency1'),450);
					masterHideElement($('#talentSecondNext'),550);
					masterHideElement($('#talentSecondAdvice'),700);


					// RESET TALENT SUCCESS QUESTION
					masterHideElement($('#talentSuccessOption2'),0);
					masterHideElement($('#talentSuccessOption1'),150);
					masterHideElement($('#talentSuccessQuestion'),300);

						// RESET TALENT SUCCESS VIDEO
						masterHideElement($('#talentGetInfoBox'),0);
						masterHideElement($('#talentIframe'),150);

						setTimeout(function(){
							$('#talentVideo').addClass('notHere');
							$('#videoMasterWrapper').addClass('notHere');
						},800);

						// RESET TALENT SUCCESS CODE
						$('#talentSuccessAdviceBackInfo').find('.finalArrow').addClass('hiddenArrow');

						masterHideElement($('#talentAdviceCode1'),0);
						masterHideElement($('#talentSuccessAdvice'),200);

						setTimeout(function(){
							$('#talentSuccessAdviceWrapper').addClass('notHere');
						},850);

						// APPEAR NEXT SLIDE MASTER SO YOU CAN CLICK ON IT AGAIN
						$('#nextSlideMaster').removeClass('hidden');
				// END RESET TALENT
			}
		// END MASTER RESET

		// MASTER INSERT/REMOVE QUESTIONS, ANSWERS AND COPIES
			function masterInsertQAC(insideOf, theQAC, heightQAC, positionInArray){
				$(insideOf).append(theQAC[positionInArray]);
				$(insideOf).addClass(heightQAC[positionInArray]);
			}

			function masterRemoveQAC(insideOf){
				$(insideOf).empty();
				$(insideOf).removeClass('oneLineInfoMaster');
				$(insideOf).removeClass('twoLineInfoMaster');
				$(insideOf).removeClass('threeLineInfoMaster');
				$(insideOf).removeClass('fourLineInfoMaster');
				$(insideOf).removeClass('fiveLineInfoMaster');
				$(insideOf).removeClass('sixLineInfoMaster');
				$(insideOf).removeClass('sevenLineInfoMaster');
			}
		// END MASTER INSERT QAC
	// END NAVIGATION FLOW


	// OPTIONS HOVER ANIMATIONS
		$('.placeAnimated').mouseenter(function() {
			$(this).find('.innerAnimateComment').addClass('revealComment');
		});
		$('.placeAnimated').mouseleave(function() {
			$(this).find('.innerAnimateComment').removeClass('revealComment');
		});



		$('.twoOptionsSingle').mouseenter(function() {
			$(this).find('img').addClass('masterOptionOp50');
		});
		$('.twoOptionsSingle').mouseleave(function() {
			$(this).find('img').removeClass('masterOptionOp50');
		});


		$('.oneOptionSingle').mouseenter(function() {
			$(this).find('img').addClass('masterOptionOp50');
		});
		$('.oneOptionSingle').mouseleave(function() {
			$(this).find('img').removeClass('masterOptionOp50');
		});
	// END OPTIONS HOVER



	// MENU TRIGGER INTERACTION
		
		$('#threeLinesWrap').mouseenter(function() {
			$('.menuLines').addClass('fullThreeLine');
		});

		$('#threeLinesWrap').mouseleave(function() {
			$('.menuLines').removeClass('fullThreeLine');
		});

		$('#threeLinesWrap').click(function() {
			if (curtEnd){
				// TURN OFF TRIGGER
				curtEnd = false;
				allDivs.addClass('waitPlease');


				// LABEL LOGO ANIMATION
					$('#luckyLabel').addClass('hideLabel');
				// END LABEL


				// TRIGGER BUTTON ANIMATION
					$('.menuLines').addClass('hideThreeLine')
					setTimeout(function(){
						$('#threeLinesWrap').addClass('notHere');
						setTimeout(function(){
							$('#crossCloseMenu').removeClass('hiddenCross');
						},200);
					},350);
				// END TRIGGER BUTTON ANIMATION


				// CURTAINS ANIMATION
					$('#curtainWrapper').removeClass('notHere');
					setTimeout(function(){
						curtainLoop();
						$('#curtainDivision').addClass('op10');
						$('#curtainDivision').addClass('bringToFront');
					},100);

					setTimeout(function(){
						showMenuTitles();
						showRsTitles();
					},500);
				// END CURTAINS


				// WINDOW MENU ANIMATION
					$('#menuWindow').removeClass('notHere');
				// END WINDOW MENU

				// ACTIVE MENU TRIGGER AGAIN
				setTimeout(function(){
					curtEnd = true;
					allDivs.removeClass('waitPlease');
				},2900);
			}

		});


		$('#crossWrap').click(function() {
			masterCloseCurtain();
		});

		// CURTAIN TRANSITIONS TRIGGER
			var curtEnd = true;

		// END CURTAIN TRIGGER

		// CURTAIN MOVEMENT FUNCTION
			var curtainFront0 = $('#curtainFront-0');
			var curtainFront1 = $('#curtainFront-1');
			var curtainFront2 = $('#curtainFront-2');
			var curtainFront3 = $('#curtainFront-3');
			var curtainFront4 = $('#curtainFront-4');
			var curtainFront5 = $('#curtainFront-5');
			var curtainFront6 = $('#curtainFront-6');
			var curtainFront7 = $('#curtainFront-7');
			var curtainFront8 = $('#curtainFront-8');

			var curtainLoopCount = 0;                     //  set your counter to 1
			var currentCurtain1;
			var currentCurtain2;

			// OPENING CURTAINS
			function curtainLoop() {           //  create a loop function
			    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			        if(curtainLoopCount == 0){
						currentCurtain1 = curtainFront0;

					} else if(curtainLoopCount == 1){
						currentCurtain1 = curtainFront1;

					} else if(curtainLoopCount == 2){
						currentCurtain1 = curtainFront2;

					} else if(curtainLoopCount == 3){
						currentCurtain1 = curtainFront3;

					} else if(curtainLoopCount == 4){
						currentCurtain1 = curtainFront4;

					} else if(curtainLoopCount == 5){
						currentCurtain1 = curtainFront5;

					} else if(curtainLoopCount == 6){
						currentCurtain1 = curtainFront6;

					} else if(curtainLoopCount == 7){
						currentCurtain1 = curtainFront7;

					} else if(curtainLoopCount == 8){
						currentCurtain1 = curtainFront8;

					}

					currentCurtain1.addClass('openedCurtains');

			        curtainLoopCount++;                     //  increment the counter
			        if (curtainLoopCount < 9) {            //  if the counter < 10, call the loop function
			        	curtainLoop();             //  ..  again which will trigger another 
			        }                        //  ..  setTimeout()
			    }, 30)
			}

			// CLOSING CURTAIN
			function curtainClose() {           //  create a loop function
			    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			        if(curtainLoopCount == 9){
						currentCurtain2 = curtainFront8;

					} else if(curtainLoopCount == 8){
						currentCurtain2 = curtainFront7;

					} else if(curtainLoopCount == 7){
						currentCurtain2 = curtainFront6;

					} else if(curtainLoopCount == 6){
						currentCurtain2 = curtainFront5;

					} else if(curtainLoopCount == 5){
						currentCurtain2 = curtainFront4;

					} else if(curtainLoopCount == 4){
						currentCurtain2 = curtainFront3;

					} else if(curtainLoopCount == 3){
						currentCurtain2 = curtainFront2;

					} else if(curtainLoopCount == 2){
						currentCurtain2 = curtainFront1;

					} else if(curtainLoopCount == 1){
						currentCurtain2 = curtainFront0;

					}

					currentCurtain2.removeClass('openedCurtains');

			        curtainLoopCount = curtainLoopCount - 1;                     //  increment the counter
			        if (curtainLoopCount > 0) {            //  if the counter < 10, call the loop function
			        	curtainClose();             //  ..  again which will trigger another 
			        }                        //  ..  setTimeout()
			    }, 30)
			}
		// END CURTAIN MOVEMENT FUNCTION

		// MENU TITLES FUNCTIONS
			var menuTitle1 = $('#menuTitle1');
			var menuTitle2 = $('#menuTitle2');
			var menuTitle3 = $('#menuTitle3');
			var menuTitle4 = $('#menuTitle4');

			var menuTitleLoopCount = 1;

			var currentMenuTitle1;
			var currentMenuTitle2;

			function showMenuTitles(){
				setTimeout(function(){
					if(menuTitleLoopCount == 1){
						currentMenuTitle1 = menuTitle1;

					} else if(menuTitleLoopCount == 2){
						currentMenuTitle1 = menuTitle2;

					} else if(menuTitleLoopCount == 3){
						currentMenuTitle1 = menuTitle3;

					} else if(menuTitleLoopCount == 4){
						currentMenuTitle1 = menuTitle4;

					}

					currentMenuTitle1.addClass('menuTitlesInserted');

					menuTitleLoopCount++;
					if(menuTitleLoopCount < 5){
						showMenuTitles();
					}
				},180);

			}

			function hideMenuTitles(){
				if(menuTitleLoopCount == 5){
					currentMenuTitle2 = menuTitle4;

				} else if(menuTitleLoopCount == 4){
					currentMenuTitle2 = menuTitle3;

				} else if(menuTitleLoopCount == 3){
					currentMenuTitle2 = menuTitle2;

				} else if(menuTitleLoopCount == 2){
					currentMenuTitle2 = menuTitle1;

				}

				currentMenuTitle2.removeClass('menuTitlesInserted');

				menuTitleLoopCount = menuTitleLoopCount -1;
				if(menuTitleLoopCount > 1){
					setTimeout(function(){
						hideMenuTitles();
					},180);
				}
			}
		// END MENU TITLES FUNCTIONS

		// RRSS TITLES FUNCTIONS
			var rsTitle1 = $('#rsTitle1');
			var rsTitle2 = $('#rsTitle2');
			var rsTitle3 = $('#rsTitle3');

			var rsTitleLoopCount = 1;

			var rsCurrentTitle1;
			var rsCurrentTitle2;

			function showRsTitles(){
				setTimeout(function(){
					if(rsTitleLoopCount == 1){
						rsCurrentTitle1 = rsTitle1;

					} else if(rsTitleLoopCount == 2){
						rsCurrentTitle1 = rsTitle2;

					} else if(rsTitleLoopCount == 3){
						rsCurrentTitle1 = rsTitle3;

					} 

					rsCurrentTitle1.addClass('menuTitlesInserted');

					rsTitleLoopCount++;
					if(rsTitleLoopCount < 4){
						showRsTitles();
					}
				},250);
			}

			function hideRsTitles(){
				if(rsTitleLoopCount == 4){
					rsCurrentTitle2 = rsTitle3;

				} else if(rsTitleLoopCount == 3){
					rsCurrentTitle2 = rsTitle2;

				} else if(rsTitleLoopCount == 2){
					rsCurrentTitle2 = rsTitle1;

				} 

				rsCurrentTitle2.removeClass('menuTitlesInserted');

				rsTitleLoopCount = rsTitleLoopCount - 1;
				if(rsTitleLoopCount > 0){
					setTimeout(function(){
						hideRsTitles();
					},250);
					
				} else {
					rsTitleLoopCount = 1;
				}
			}
		// END RSS FUNCTIONS


		// MASTER CLOSE MENU CURTAIN FUNCTION
			function masterCloseCurtain(){
				if (curtEnd){

					// TURN OFF TRIGGER
					curtEnd = false;
					allDivs.addClass('waitPlease');


					
					// CURTAINS ANIMATION
						hideMenuTitles();
						hideRsTitles();
						
						setTimeout(function(){
							curtainClose();
						},800);

						setTimeout(function(){
							$('#curtainDivision').removeClass('op10');
							$('#curtainDivision').removeClass('bringToFront');

							// TRIGGER BUTTON ANIMATION
								$('#crossCloseMenu').addClass('hiddenCross');
								$('#threeLinesWrap').removeClass('notHere');

								setTimeout(function(){
									$('.menuLines').removeClass('hideThreeLine');
								},350)
							// END TRIGGER BUTTON ANIMATION
						},1500);

						setTimeout(function(){
							$('#curtainWrapper').addClass('notHere');

							// WINDOW MENU ANIMATION
								$('#menuWindow').addClass('notHere');
							// END WINDOW MENU

							// LABEL LOGO ANIMATION
								$('#luckyLabel').removeClass('hideLabel');
							// END LABEL
						},2200);
					// END CURTAINS

					// ACTIVE MENU TRIGGER AGAIN
					setTimeout(function(){
						curtEnd = true;
						allDivs.removeClass('waitPlease');
					},2900);
				}
			}
		// END MASTER CLOSE MENU FUNCTION
	// END MENU TRIGGER INTERACTION












});