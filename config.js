const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_41_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDc2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NixcbiAgICAgICAgMTc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicGg1OFVwS25Ob0RoMUwxLytaOUJMaUx4allxcWpVWCtab3paRExmbko1WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjE2NjUwMzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVDRkIzODFBMzhFMDE2OTNENkIxNUQ1MzExRkVEREFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY3NDQ3OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2TFdjNkhEb1NKcUlwS19zNGtrVnBnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNjNzIwYzM0LWYxZTMtNDAyOC04MmY0LTEwODg5NGQzN2IwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDk3LFxuICAgICAgODIsXG4gICAgICAyMDAsXG4gICAgICAxMzIsXG4gICAgICA2MixcbiAgICAgIDE3NyxcbiAgICAgIDk2LFxuICAgICAgNDgsXG4gICAgICAyMzIsXG4gICAgICAxMTksXG4gICAgICAyMTAsXG4gICAgICAyMTMsXG4gICAgICAyMjcsXG4gICAgICAxOTYsXG4gICAgICAyNTAsXG4gICAgICAyMixcbiAgICAgIDEzMSxcbiAgICAgIDksXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAxNzcsXG4gICAgICAyMDQsXG4gICAgICA3OSxcbiAgICAgIDIsXG4gICAgICA5LFxuICAgICAgMTQxLFxuICAgICAgMjE1LFxuICAgICAgMixcbiAgICAgIDIyMixcbiAgICAgIDg1LFxuICAgICAgMTUzLFxuICAgICAgMTQsXG4gICAgICAxMTgsXG4gICAgICAxMTQsXG4gICAgICAxOSxcbiAgICAgIDQ3LFxuICAgICAgMTc5LFxuICAgICAgMTg1LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlg0TTkxWUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyMTY2NTAzMzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1MTYxNzE4MzkwODUwOjQyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKcpyDwnZWG8J2VmSDwnZWqIPCdlZYg8J2VpCDCoPCfjq4g4pynXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmk5dGVjRkVLamF0N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHTlNObGxNQjNvKzdrUVJoYjJFdUxaYTQ4cHRmNmRXM1ZET2VXNnJld1EwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInd4UTcxQ0JBZEJKandxV3pVN2N6VCt4WjdHL3JaS3JSNUFYMGk4bHJDYUZYSExnUlpvVHlna1JYNHVOODE1SDBpeVlFYi9ER3NvL1Awem55REhvR0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkwrWTJSK01LUDBobGRzTWkwSnlQRWU3a1QwdFN4VE5sZGhrTU8wZW9tbmVzS1pod1VQTDNDVW1KZTUwUTM5Qk9zN1oyNHEzSGhKbWtUelFzOXNnSWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyMTY2NTAzMzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY3NDQ3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBhdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGF1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNTJZMmoyQWlnb1B6OHA1RWZWYVFKcWE2bHpZQnJxVGdOV2VTWVRBbW04MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTU5MDYwMTc5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Manuu",
  packname: process.env.PACK_NAME || "ohyes",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "OHYES",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
