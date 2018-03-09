"use strict";

const TypingGame = function(){
	let player = {};
    const STARTING_TIME = 6000; //milliseconds//
    const listOfWords = ["abandon","abandoned","ability","able","abnormal","abnormally","about","above","abroad","absence","absent","absolute","absolutely","absorb","abstract","abstraction","abstractly","abuse","abuse","academia","academic","academic","academically","academy","accent","accept","acceptable","access","accident","accidental","accidentally","accommodate","accommodation","accommodation","accompany","account","accuracy","accurate","accurate","accurately","accurately","accuse","achievable","achieve","achieve","achievement","acid","acknowledge","acknowledgement","acquire","acquisition","across","act","action","active","actively","activity","actor","actress","actual","actually","ad","adapt","add","addition","additional","address","adequate","adequately","adjust","adjust","adjustment","administration","administrative","administratively","administrator","admiration","admire","admit","adopt","adult","advance","advanced","advantage","adventure","advert","advertise","affect","affective","affectively","aggregate","aggregation","allocate","allocation","alter","alterable","alteration","alternate","alternative","alternatively","amend","amendment","analogous","analogy","analyse","analysis","analyst","analytic","analytical","analytically","analyze","anticipate","anticipation","approach","approachable","appropriacy","appropriate","appropriately","area","aspect","assess","assessable","assessment","assign","assignment","assist","assistance","assistant","assume","assumed","assuming","assumption","assurance","assure","assured","assuredly","attach","attached","attachment","attain","attainable","attainment","author","authoritative","authority","authorship","availability","available","aware","awareness","behalf","beneficial","beneficiary","benefit","bond","bonding","brevity","brief","briefing","briefly","bulk","bulky","capability","capable","capacity","categorization","category","cease","ceaseless","challenge","challenger","challenging","chapter","circumstance","citation","cite","clause","coherence","coherent","coherently","coincide","coincidence","coincident","coincidental","commence","commencement","comment","commentary","commentator","commission","commissioner","community","compatibility","compatible","compensate","compensation","compensatory","complex","complexity","component","compound","computable","computation","computational","compute","computer","computing","concept","conception","conceptual","conceptually","conclude","conclusion","conclusive","conclusively","concurrent","concurrently","conduct","confine","confined","conflict","consensus","consent","consequence","consequent","consequently","considerable","considerably","consist","consistency","consistent","consistently","constancy","constant","constantly","constituency","constituent","constitute","constitution","constitutional","constitutionally","constitutive","constrain","constraint","construct","construction","constructive","consult","consultancy","consultant","consultation","consultative","consume","consumer","consumption","contact","contactable","context","contextual","contextualize","contract","contractor","contribute","contribution","contributor","controversial","controversially","controversy","convene","convention","conventional","conversely","cooperate","cooperation","cooperative","cooperatively","coordinate","coordination","core","corporate","corporation","correspond","correspondence","corresponding","correspondingly","create","creation","creative","creatively","creator","credit","creditor","criterion","cultural","culturally","culture","cultured","data","decline","deduce","deduction","definable","define","definition","demonstrable","demonstrably","demonstrate","demonstration","demonstrative","demonstratively","demonstrator","deregulation","derivation","derivative","derive","design","designer","device","devote","devotion","diminish","diminution","discrete","discretely","discretion","discretionary","discriminate","discrimination","disestablish","disestablishment","display","disproportion","disproportionate","disproportionately","dissimilar","distinct","distinction","distinctive","distinctively","distinctly","distort","distortion","distribute","distribution","distributional","distributive","distributor","diverse","diversification","diversify","diversity","document","documentation","domain","dominance","dominant","dominate","domination","draft","duration","economic","economical","economically","economics","economist","economy","edit","edition","editor","editorial","element","emphasis","emphasize","emphatic","emphatically","enable","energetic","energetically","energy","enforce","enforced","enhance","enhanced","ensure","entity","environment","environmental","environmentalist","environmentally","equate","equation","equivalence","equivalent","erode","erosion","establish","established","establishment","estate","estimate","estimation","ethic","ethical","ethically","evaluate","evaluation","evidence","evident","evidential","evidently","evolution","evolutionary","evolutionist","evolve","exceed","exclude","excluding","exclusion","exclusionary","exclusive","exclusively","expand","expansion","expansionism","expansive","expert","expertise","expertly","explicit","explicitly","export","exporter","expose","exposed","exposure","external","externality","externalization","externalize","externally","facilitate","facilitation","facilitator","facility","factor","feature","federal","federation","fee","final","finality","finalize","finally","finance","financial","financially","financier","flexibility","flexible","focus","format","formula","formulate","formulation","found","framework","function","functional","functionally","fund","fundamental","fundamentally","funder","funding","furthermore","gender","generate","generation","identifiable","identification","identify","identity","ignorance","ignorant","ignore","illegal","illegality","illegally","illogical","illustrate","illustration","illustrative","image","imagery","immature","immaturity","immigrant","immigrate","immigration","impact","imply","imprecise","inaccuracy","inaccurate","inappropriacy","inappropriate","incapable","incapacitate","incentive","incidence","incident","incidentally","incoherent","income","incompatibility","incompatible","inconclusive","inconclusively","inconsistency","inconsistent","inconstancy","incorporate","incorporation","index","indicate","indication","indicative","indicator","indiscretion","indistinct","indistinctly","individual","individualism","individualist","individuality","individually","inflexibility","inflexible","inherent","inherently","inhibit","inhibition","initial","initially","initiate","initiation","initiative","initiator","injure","injured","injury","input","insecure","insight","insightful","insignificant","instability","instance","institute","institution","institutional","institutionalized","institutionally","instruct","instruction","instructive","instructor","insufficient","insufficiently","integral","intelligence","intelligent","intelligently","interact","interaction","interactive","interactively","intermediate","interpret","interpretation","interpretative","interval","invalidate","invalidity","invariable","invariably","invest","investment","investor","involve","involved","involvement","irrational","irrelevance","irrelevant","issue","item","journal","justifiable","justifiably","justification","justified","justify","labor","labour","layer","lecture","lecturer","legal","legality","legally","legislate","legislation","legislative","legislator","legislature","liberal","liberalism","liberalization","liberalize","liberally","liberate","liberated","liberation","licence","license","licensed","link","linkage","locate","located","location","logic","logical","logically","logician","maintain","maintenance","major","majority","manual","manually","margin","marginal","marginally","maturation","maturational","mature","maturity","max","maximization","maximize","maximum","mediate","mediation","medical","medically","medium","mental","mentality","mentally","method","methodical","methodological","methodology","migrant","migrate","migration","migratory","military","minimal","minimalist","minimally","minimum","ministerial","minor","minority","misinterpret","misinterpretation","modification","modify","monitor","mutual","mutually","negate","negative","negatively","network","norm","normal","normality","normalization","normalize","normally","notion","objective","objectively","obtain","obtainable","occur","occurrence","orient","orientate","orientation","outcome","overestimate","overlap","participant","participate","participation","participatory","partner","partnership","passive","passively","passivity","perceive","percentage","perception","period","periodic","periodical","periodically","perspective","philosopher","philosophical","philosophically","philosophize","philosophizing","philosophy","physical","physically","policy","portion","positive","positively","potential","potentially","precise","precisely","precision","preliminary","previous","previously","primacy","primarily","primary","prime","principle","principled","procedural","procedure","proceed","proceeding","proceeds","processing","proportion","proportional","proportionally","proportionate","proportionately","protocol","psychological","psychologically","psychologist","psychology","publish","publisher","publishing","purchase","purchaser","purchasing","pursue","pursuit","qualitative","qualitatively","range","ratio","react","reaction","reactionary","reactivate","reactivation","reactive","reactor","readjust","readjustment","reassess","reassessment","reconstruct","reconstruction","recreate","redefine","redistribute","redistribution","redraft","refine","refined","refinement","refocus","reformulate","reformulation","region","regional","regionally","register","registration","regulate","regulation","regulator","regulatory","reinterpret","reinterpretation","reinvest","reinvestment","reject","rejection","relax","relaxation","relaxed","relaxing","relevance","relevant","reliability","reliable","reliance","reliant","relocate","relocation","rely","removable","removal","remove","reoccur","reorient","reorientation","require","requirement","research","researcher","reside","residence","resident","residential","resource","resourceful","respond","respondent","response","responsive","restrain","restrained","restraint","restrict","restricted","restriction","restrictive","restrictively","restructure","restructuring","revenue","revolution","revolutionary","revolutionize","rigid","rigidity","role","route","scenario","schematic","schematically","scheme","section","sector","secure","securely","security","seek","select","selection","selective","selectively","selector","sequence","sequential","sequentially","sex","sexism","sexual","sexuality","sexually","shift","significance","significant","significantly","signify","similar","similarity","similarly","site","sought","source","specifiable","specific","specifically","specification","specificity","specifics","specify","sphere","spherical","spherically","stability","stabilization","stabilize","stable","strategic","strategically","strategist","strategy","structural","structurally","structure","style","styling","stylish","stylized","subordinate","subordination","substitute","substitution","sufficiency","sufficient","sufficiently","supplement","supplementary","survey","suspend","suspension","sustain","sustainability","sustainable","sustenance","symbol","symbolic","symbolically","symbolism","symbolize","target","task","team","technical","technically","technique","technological","technology","temporarily","temporary","text","textual","theoretical","theoretically","theorist","theory","tradition","traditional","traditionalist","traditionally","transfer","transferable","transference","transit","transition","transitional","transitory","trend","trigger","unaffected","unalterable","unaltered","unanticipated","unapproachable","unassisted","unattainable","unavailable","unaware","unconfined","unconstitutional","unconstrained","uncontroversial","unconventional","uncultured","undefined","under-resourced","underestimate","undiminished","uneconomical","unethical","unfounded","unidentifiable","unification","unify","uninjured","uninvolved","unjustified","unlicensed","unmodified","unobtainable","unprincipled","unpublished","unregulated","unreliable","unresponsive","unrestrained","unrestricted","unspecified","unstable","unstructured","unsustainable","valid","validate","validation","validity","validly","variability","variable","variably","variance","variant","variation","varied","vary","version","violate","violation","vision","volume","welfare","whereas"];
	
//=================================================================
// GAME LOOP
//=================================================================
    const gameloop = function(){
        let lastFrame = performance.now(),
            dt = 0.0,
            stopped = false;

        const step = function() {
            let thisFrame = performance.now();
            dt = Math.min(1000, thisFrame - lastFrame);

            update(dt);
            draw();

            lastFrame = thisFrame;
            if(!stopped) 
                requestAnimationFrame(step);
        };
		step();
    }
    
    function update(dt){
		if(Timer.active){ Timer.update(dt); }
		if(Feedback.active){ Feedback.update(dt); }
	}
    function draw(){
		Timer.draw();
		Feedback.draw();
	}
    
//=================================================================//
// EVENTS
//=================================================================//
	const EVENT = {
		START_GAME: function(){
			player = Object.create(Player);
			player.init();
			Scoreboard.update();
			EVENT.NEW_WORD();
			Screen.toPlay();
		},
		GAME_OVER: function(){
			Screen.updateFinalScore();
			Screen.toGameOver();
		},
		TYPED_SUCCESSFULLY: function(){
			//Grants player points based on performance
			let typeSpeed = Timer.elapsedAsPercent(),
				performance,
				score;
			const REWARDS = {
				GREAT: 	{ msg: "GREAT", bonus: 2 },
				GOOD: 	{ msg: "GOOD", 	bonus: 1.00	},
				OK:		{ msg: "OK", 	bonus: 0.5 }
			}	
			//Reset Timer
			Timer.stop();
			Timer.reset();
			
			//Evalutate player performance
			if(typeSpeed < 0.4) 
				performance = REWARDS.GREAT; 
			else if(typeSpeed < 0.7)
				performance = REWARDS.GOOD;
			else 
				performance = REWARDS.OK;
			
			score = Answer.word.length * 20 + 50 * performance.bonus;
			player.addScore(score);
			Scoreboard.update();
			//Play Feedback Message
			Feedback.play(performance.msg,score);
		},
		TYPED_UNSUCCESSFULLY: function(){
			//Reduce player lives
			Timer.stop();
			Timer.reset();
			player.lives -= 1;
			Scoreboard.update();
			Feedback.play("MISS");
		},
		LEVEL_UP: function(){
			//Increase level and difficulty
			player.level += 1;
			Timer.time = Timer.time * 0.9;
			Scoreboard.update();
			Feedback.play("LEVELUP");
		},
		NEW_WORD: function(){
			//Get next word and restart timer
			Answer.nextWord();
			Screen.input.value = "";
			Timer.start();
		},
		FEEDBACK_END: function(){
			//End game or proceed playing
			if(player.lives < 1)
				EVENT.GAME_OVER();
			else if(player.canLevelUp())
				EVENT.LEVEL_UP();
			else
				EVENT.NEW_WORD();
		},
	}
	
//=================================================================//
// WORD
//=================================================================//
    const Answer = {
        lastWord: null,
        word: null,
		element: document.getElementById('answer'),
		
        getRandomWord: function(wordList){
            let rnd = Math.floor(Math.random() * wordList.length);
            return wordList[rnd];
        },
        nextWord: function(){
            do { 
               this.word = this.getRandomWord(listOfWords); 
            } while ( this.word === this.lastWord );
            
            this.lastWord = this.answer;
			this.element.textContent = this.word;
        },
		isCorrect: function(){
			return (Screen.input == this.word) ? true : false;
		}
    }

//=================================================================//
// TIMER
//=================================================================//
    const Timer = {        
        time: STARTING_TIME,
        elapsed: 0,
        active: false,
    
        start: function() { this.active = true; },
        stop: function()  { this.active = false; },
        reset: function() { this.elapsed = 0; },
        setTimer: function( milliseconds ) { this.time = (milliseconds === undefined) ? STARTING_TIME : milliseconds; },
        elapsedAsPercent: function(){ return this.elapsed/this.time; },
		
		//Draw Variables//
		clock: 	document.getElementById('clock'),
        bar:   	clock.getElementById('bar'),
		radius: clock.getAttribute('viewBox').split(" ")[3]/2,
		pi: Math.PI,
        
        
        update: function(dt){
            this.elapsed += dt;
            if(this.elapsed >= this.time) {
                this.elapsed = this.time;
                EVENT.TYPED_UNSUCCESSFULLY();
            }; 
            if(Screen.input.value == Answer.word){
                EVENT.TYPED_SUCCESSFULLY(); 
            }
        },
        draw: function() {
          let a = 360 * this.elapsedAsPercent()
            , r = ( a * this.pi / 180 )
            , x = Math.sin( r ) * this.radius
            , y =  Math.cos( r ) * - this.radius
            , mid = ( a > 180 ) ? 0 : 1
            , anim = 'M 0 0 v'+(-this.radius)
                   +'A'+this.radius+" "+this.radius+' 0 ' 
                   + mid + ' 0 ' 
                   +  x  + ' ' 
                   +  y  + ' z';       
          bar.setAttribute( 'd', anim );
        }
    }
//=================================================================//
// PLAYER
//================================================================= //
    const Player = {
        init: function(){
			this.points = 0;
			this.level = 1;
			this.lives = 10;
		},
		addScore: function(amount){
			this.points += amount;
		},
		canLevelUp: function(){
			return (this.points/this.level >= 1000) ? true : false;
		},
    }
    
//=================================================================//
// FEEDBACK
//=================================================================//
	const Feedback = {
		active: false,
		pos: 0,
		d: 10,  //distance
		t: 800, //speed
		dy: 0.0, //change in distance
		vy: 0.0125, //velocity
		opacity: 1.0,
		vOpacity: 1/800, //rate of change in opacity
		element: document.getElementById('feedback'),
		
		messages:{
			GREAT   : { text:"GREAT",   	color:"aqua"	},
			GOOD	: { text:"GOOD",    	color:"#33cc33"	},
			OK      : { text:"OK",      	color:"orange"	},
			MISS    : { text:"MISS",    	color:"red" 	},
			LEVELUP : { text:"LevelUp", 	color:"purple" 	},
			GAMEOVER: {	text:"GameOver", 	color:"black" 	}
		},

		play: function(msg,score){
			if(this.messages[msg] !== undefined){
				this.element.innerHTML = (score !== undefined) ? this.messages[msg].text + "<br/>" + score : this.messages[msg].text;
				this.element.style.textShadow = "0 0 0.4em "+this.messages[msg].color;
			}else{
				this.element.textContent = "ERROR";
			}
			this.active = true;
		},
		update: function(dt){
			this.dy += this.vy * dt;
			this.opacity -= this.vOpacity * dt;

			if(this.dy >= this.d){
			   this.reset();
			   EVENT.FEEDBACK_END();
			}
		},
		draw: function(){
			this.element.style.opacity = this.opacity;
			this.element.style.top = (this.pos - this.dy) + "px";
		},
		reset: function(){
			this.active = false;
			this.element.textContent = "";
			this.opacity = 1;
			this.dy = 0;
		},
	}

//=================================================================
// SCOREBOARD
//================================================================= 	
	const Scoreboard = {
		level: document.getElementById('scoreBoard-level'),
		score: document.getElementById('scoreBoard-points'),
		lives: document.getElementById('scoreBoard-lives'),
		highscore: 0,
		
		update: function(){
			this.level.textContent = pad(player.level,2);
			this.score.textContent = pad(player.points,6);
			this.lives.textContent = pad(player.lives,2);
		},
	}
	
//=================================================================
// INPUT
//================================================================= 
	const Input = {
		btnStart : document.getElementById('btn-start').onclick = EVENT.START_GAME,
		btnAgain : document.getElementById('btn-playAgain').onclick = EVENT.START_GAME,
	}


//=================================================================
// SCREENS
//================================================================= 
	const Screen = {
		menu: document.getElementById('start-screen'),
		play: document.getElementById('play-screen'),
		gameover: document.getElementById('gameover-screen'),
		input: document.getElementById('in'),
		
		toPlay: function(){
			this.gameover.classList.add('notActive');
			this.menu.classList.add('notActive');
			this.play.classList.remove('notActive');
			this.input.focus();
		},
		toGameOver: function(){
			this.play.classList.add('notActive');
			this.gameover.classList.remove('notActive');
		},
		getInput: function(){
			return this.input.value();
		},
		loadHighScore: function(){
			let savedScore = localStorage.getItem('score');
			Scoreboard.highscore = (savedScore)? savedScore : 0;
			var elements = document.getElementsByClassName("hi-score");
			for(var i=0; i<elements.length; i++){
				elements[i].textContent = pad(Scoreboard.highscore,6);
			}
		},
		updateFinalScore: function(){
			this.gameover.querySelector('#final-score').textContent = pad(player.points,6);
			if(player.points > Scoreboard.highscore){
				//NEW HIGH SCOREBOARD
				Scoreboard.highscore = player.points;
				this.gameover.querySelector('.new-hi-score').classList.remove('notActive');
				this.gameover.querySelector('.hi-score').textContent = pad(player.points,6);
				localStorage.setItem('score',player.points);
			}else{
				this.gameover.querySelector('.new-hi-score').classList.add('notActive');
			}
		}
	}
//=================================================================
// HELPER FUNCTIONS
//================================================================= 
	const pad = function(num, size){
			var s = "000000" + num;
			return s.slice(-size);
	}
	
	return (function(){
		gameloop();
		Screen.loadHighScore();
	})();
	
}; //end TypingGame
