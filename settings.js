


const fs = require('fs');  //----- module----//

//checking if config.env exist otherwise settings.js will be used
//////////////////////////////////////////////////////////////
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
/////////////////////----END---///////////////////////////////




//////////////////////////////////////////////////
/////----------------Global---------------//////
/////////////////////////////////////////////////

global.thumb = fs.readFileSync('./lib/bugs/XByte.png') //Don't change
//////////////////////////////////////////////////////////
const BOTNAME = '𝐐𝐔𝐄𝐄𝐍𝐙𝐖'; //BOT name
//////////////////////////////////////////////////////////
const FOOTERNAME = '*Powered by TalkDrove*'; //Footer text











//----------------OWNER NUMBER------------------------------//
//////////////////////////////////////////////////////////////////

global.owner = process.env.OWNER_NUMBER  || '6282324526720' ;  //put your number without +

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//




//////////////////////Global-end////////////////////////////////////////
module.exports = { //exporting modules to use in plugins









//----------------Session ID------------------------------//
//////////////////////////////////////////////////////////////////

SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxPSWx6SVZjbjkzZENGek9QU2FmelhHMnJKZWZXYVNIMmJlczk0cjZWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGdzbXhXUHprZ1J3ZVp0andDbVBJZVhjeTNQc2hXY1g5STZETEg0ckVTcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTnoyUmpyanNIUXV4RGRVSGFPL215Y3Z4d3g0UUlrd09PVWgwai9hQ1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTDVPcFU2V1pQbDRqNlltR2xOVGhPVE4wM0N6TXRNMW9GSVdXWVlaaUd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PTDhVY1dwTkZ4ckloZUl6Q3dIKytPdFhOdHQ3V0lMSEovazFSLzFpbU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1oUVYydjQ0RTllWStFNFJrbzVzNk9weGJNN2VFWjllL0p3QVp6dTNlVWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUN0emsvbWg5NzJJU2dIZXczZkIzZnpHbmV6SHRDSW1CT2p5MWtoMHhVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1VjaTM1M3B1WTVuaFFiOGJPaE8yaERPekVSTDZqY0dEZkZmalJOV2VIYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkaCtvUjhlQ2xubjkxQnNtN0NlTy9weitERGdtd2FMa0t1ZjlyYVp6L2pFbGVFNUUrbmFwSUVFUTZXRmorLzd2R0tYQmg3YXZwYVpOUWJXdVZUcmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6InhaVVBXd3k0WkFjNzYyMVRCUVFQUHAxbnhiYjZiT1hUVzBra1pCaEpOWms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxHQjl5TmR3UTdPdWtzOHNOMDFpZ2ciLCJwaG9uZUlkIjoiNWQ3NjNiMGItMjNmZS00ZWJhLWFlYjEtOTY5MzUyNGE1MmVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9wWUU0L0hrbWlnVXV4Q3VmZ1UzNnBwU0Z4bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOYTdYUXBjNlZsZUtNSnU4aEt6cFJLVzNMY289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzRGNDlBWjIiLCJtZSI6eyJpZCI6IjYyODIzMjQ1MjY3MjA6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lEVzllc0NFTTZwNzdVR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii8veXB6SUs3MUJRMEhZaGFjdnY0QXFQSzdsSWxiWmRCWVFKS1psazdBQkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBscWRWbnY3QmpGWnlpQUVobU9kUW1ZdW5HSnBVdG9nTjcvbmV5RGtyQjJxSENtdUVHaWFyVElRVjBQbjROaHpHd242eWhPNVptbTNScDJMZFljakNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsU1hFa3doeTBWN0ZVWFVwQU1FVm5ad09NK0E0cEliMXpJenZMTVdFc25yMVJmNHFReEErMzIxLysvMjJsVTNpeFhFR1ExQ2FDS3ZYbERHMFk5S1Bndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODIzMjQ1MjY3MjA6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZi84cWN5Q3U5UVVOQjJJV25MNytBS2p5dTVTSlcyWFFXRUNTbVpaT3dBUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzU4NTc1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFrQUFNeE0ifQ==', //Paste your session ID here

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//










//----------------BOT LOGO------------------------------//
//////////////////////////////////////////////////////////////////
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` , //BOT logo
/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//





LANG:  process.env.LANG || 'EN' , //URDU OR EN
//////////////////////////////////////////////////////////

PREFIX: process.env.PREFIX || '.' , //PREFIX, LEAVE IT DEFAULT OTHERWISE BUTTON WILL NOT WORK
//////////////////////////////////////////////////////////

WORK_TYPE: process.env.WORK_TYPE || 'public' , //public or private
//////////////////////////////////////////////////////////

travaSend: process.env.TRAVA_SEND || '25' ,   //BUGS
//////////////////////////////////////////////////////////

COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' , //button or nonbutton
//////////////////////////////////////////////////////////

MODERATORS : process.env.MODERATORS === undefined ? "923072380380" : process.env.MODERATORS ,    
//////////////////////////////////////////////////////////

MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE, //Maximum size that bot can download a file   
//////////////////////////////////////////////////////////

OWNER_NAME: process.env.OWNER_NAME || 'Hamza' , //Your name
//////////////////////////////////////////////////////////

POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
//////////////////////////////////////////////////////////

FOOTER: process.env.FOOTER || '*Powered by TalkDrove*',    
//////////////////////////////////////////////////////////

ANTI_BAD: process.env.ANTI_BAD || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_REACT:  process.env.AUTO_REACT  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_TYPING:  process.env.AUTO_TYPING  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_READ:  process.env.AUTO_READ  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_BIO:  process.env.AUTO_BIO  || false  ,        //true or false
//////////////////////////////////////////////////////////

ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,  //true or false
//////////////////////////////////////////////////////////

HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
//////////////////////////////////////////////////////////

HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
//////////////////////////////////////////////////////////

INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
//////////////////////////////////////////////////////////

BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    //banned user number 
//////////////////////////////////////////////////////////

AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE, //true or false
//////////////////////////////////////////////////////////

ANTI_LINK: process.env.ANTI_LINK || false  , //true or false
//////////////////////////////////////////////////////////

BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,  //true or false    
//////////////////////////////////////////////////////////

ANTI_BOT: process.env.ANTI_BOT || false  , //true or false
//////////////////////////////////////////////////////////

ANTI_CALL: process.env.ANTI_CALL || false  , //true or false
//////////////////////////////////////////////////////////

ALIVE: process.env.ALIVE || `default`,     
//////////////////////////////////////////////////////////

AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_STICKER: process.env.AUTO_STICKER || false  , //true or false
//////////////////////////////////////////////////////////

WELCOME:  process.env.WELCOME  || false ,   //true or false
//////////////////////////////////////////////////////////

ANTI_DELETE : process.env.ANTI_DELETE || false , //true or false
//////////////////////////////////////////////////////////

DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
////////////---------X - B Y T E---------////////////////
};
