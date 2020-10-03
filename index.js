const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
  if (message.author.username === "") // Username
  { 
function first(){
setTimeout( function(){
message.react(''); // here we throw this emoji
}, 500 );
} 
function second(){
	setTimeout(function(){
		message.react('');
	},1000 );
}
function third(){
	setTimeout(function(){
		message.react('');
	},1500 );
}
function four(){
	setTimeout(function(){
		message.react('');
	},2000 );
}
function five(){
	setTimeout(function(){
		message.react('');
	},2500 );
}

first();
second();
third();
four();
five();

}});
                                                                
client.login(token);