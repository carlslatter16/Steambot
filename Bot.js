const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const client = new SteamUser();
const config = require('./Config.json')

const LogOnOptions = 

{
	accountName: config.username,
	password: config.password
	twoFactorCode: SteamTotp.generateAuthCode('your_steam_shared_secret')
};

client.logOn(LogOnOptions);

client.on('loggedOn', () => {

console.log('Succesfully Logged On')
console.log('Press 1 to change your name, 2 to play TF2 or 3 to exit')

 process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');

  process.stdin.on('data', function (text) {
   
  	console.log('received data:', util.inspect(text));
    if (text === '1\r\n') {
      Rename();
    }

    if (text === '2\r\n') {
      Game();
    }

     if (text === '3\r\n') {
      process.exit();
    }

  });

  	 function Rename() {
     client.setPersona(SteamUser.Steam.EPersonaState.Online, 'Test');
     console.log('Task Completed!');
  }

    function Game() {
  	client.gamesPlayed(440);
    console.log('Task Completed!');
    
  }


    






	
		
	
	

		
		
});