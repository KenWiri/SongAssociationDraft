//need at least 200 more words
var wordChoices = ['Love','Sex','Gone','Pretty','From','Look','Please','Win','Time','Call','Hide',
				 'Bye','Car','Sound','Deep','Sun','Down','Deep','Calm','Web','Candy','One','Day','Night','Hard'
				 ,'Hole','Hate','Sweet','Think','Sick','Burn','Eye','Back','With','You','Know','No','High','Kiss','Turn','Zombie',
				 'Company','Child','Kid','House','Calm','Rise','Up','Dance','Shallow','Hurt','Beautiful','Flicker','Fast','Play','Left','Right',
				 'Freind','Do','Stand','Sleep','Wake','Keep','Hey','Hot','Heat','We','I','High','Got','Morning','Year','Sing','Perfect','Line','Money',
				 'How','Have','Him','Her','His','There','Work','It','Miss','And','Second','First','Fight','Find',
				 'middle','Life','Give','Away','Die','Never','Ever','Man','Cut','World','Dream','Thunder','Little','Baby','Again','Around',
				 'Mind','Fall','Fool','Thang','Fire','Get','Good','Without','Road','Cross','Need','Jump','Bridge','Train','Hungry','Silly','Swear',
				 'Too','Grow','If','Or','Now','Lucky','Far','Home','New','Old','Meet','Met','Thank','Game','Rain','Who','Nothing','pain','Suffer','Soon',
				 'Swag','Swallow','Arm','Angel','Mad','Choose','Show','Real','Way','Live','Me','Part','Apart','Want','Two','Judge','Just','Christmas','Holiday','Summer',
				 'Season','Is','Adore','Freedom','Wrap','Power','Hope','Girl','Gun','Shoot','Mama','Side','Your','Heart','Beat','Put','Spell','Speak','Star','Change','Stop','Hello',
				 'Against','On','Name','Cold','Dad','Smile','Creep','Very','Face','Touch','Knock','Bless','Bring','Ready','Read','Lound','Round','Over','Done','Because','Clean',
				'Feet','Dive','Understand','Try','Wonder','Happiness','Grow','Born','This','Hotel','Hair','Floor','Street','More','Life','Shot','Cool','Dark','Tear','Torn','Broken',
				'Wing','What','Hell','Chair','Ground','Dumb','Cup','Glass','Grass','Leg','Lip','Avoid','Stole','Ten','Five','Minute','Thousand','Mile','Stare','Town','Proud','Mother','Father','Sin',
				'Style','Blank','Told','Tell','Tale','Chase','Card','Jeans','Mountain','Always','Wind','Evening','Say','Stop','Heaven','Phone','Where','When'];

var toGetWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];
document.getElementById("output").innerHTML = toGetWord;

function refreshPage(){
    window.location.reload();
} 

var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= -1){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0"
  }
}, 1000);

//Need more options and sound