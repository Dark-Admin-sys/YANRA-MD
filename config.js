const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBxTW0rcHc0MFNEK2gyUGd1NFZ3WWRtOTVXcFhJeDdYcDN5aHNXbmIzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUt0aUxHSjJOcldPUjBURU12YmJqblZpbmxKL0tMOE1jcUZORnJWTXEyOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSVBtUllIU09IUSt1RVVXTTRZcXhqc1FPWEswZTFsK1drSDVaelZZZjNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1SkxGMmNtQ1JMaDRZUjJXS2dxdnlLcmVmbEpGMmJkVWNtbFQyQk9PbXhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPOHViRCthTHYxYUZQNmUzdmRLODNKSWxWV04zRVByQkhrSC84bHpjSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhQdnBjbnFHNXZWSEVrY2VLbFpaZmIrRVMzM2N0STJMdm03MEUvN2U4Vk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xWaEx3K2Frdm9GZFFibDRteVhIM25IaWhrZ1RNaWV6QXRrK2Y0bG5Vaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGZ1Ykt2WGJDYnY4TkZTUlZTY2VzUkhyU2dGSS9GVUNLclhXQ3o5cGx5ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNnWVAzL29jMSt0MENjcWhRUGtkQ0gzcHhORDE0dnpZMGR3SDJFSGtMRzNuSys3TkV1cll4N2JhbzhJbmdRaU96amxmVzdWZXVzdUlYSGlZd0NpZmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiTUVDSW51bFpNakU3cXE1Mlc5Zy9YYkI3dDFFZXhua2F4RE5FMXdRWEtEdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRGt0MXZHV3FTNGlWRGxEcDBFaEZ3USIsInBob25lSWQiOiJlNWU0NGEyNS1mMjNlLTQ1MWUtOTQ3NS02MzliYzhkZDA0NzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkJwRDR4cVpuSUl0TXhlN1hKSHlEd0M2WlI4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNzYUwwVkJnM3h1cklQN25tNndhUHhhSEtWaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJURllSUFlCOSIsIm1lIjp7ImlkIjoiMjM3NjcwODgxMjIxOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZyZWQgUm9uc2FyZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzNMZ3FnTUVQdkEzYllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMCtnenNtV1IvZUo5ZjdnVTRPa1IwUVo1QmVnMlUvaloyRUhEQkJJelh4Yz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT3d0aGQ2ZXI1RnNySEN4ZUlNNFdPdVlPZEQwdFpWdlc1TUVoeFV6N281MjVqRndLOHQ4VitadTBzcXI4bkEvM3RWVVg4N0w4MGhLVkUvQjdLY3lEaHc9PSIsImRldmljZVNpZ25hdHVyZSI6InF1OWI2aWwzY1gyQkllUk5mVGVYT0Nrc014QkZFcEdDZTJCZlhZV0k0Nm1NaEwyL3Y1T3Z2NXZPbjE1RjYyUmdDQ2VDczY4ZTZ6bVhUSkNLc0hMOGlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjcwODgxMjIxOjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRQb003SmxrZjNpZlgrNEZPRHBFZEVHZVFYb05sUDQyZGhCd3dRU00xOFgifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUzOTA5ODV9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY YANRA-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/hmxpd8.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "YANRA-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "YANRA-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "237670881221",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Dark_Admin",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ Lord Kerm*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hmxpd8.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Welcome to *YANRA-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "237656520674",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
