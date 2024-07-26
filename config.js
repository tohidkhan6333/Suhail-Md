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
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu";
global.website=process.env.GURL || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ TOHID²²¹-KHAN" 


global.devs = "917849917350" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917849917350";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_55_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ3lhVnVzSUdnUjBnUCsvZnE2REFObnoyQzZ4T1p2V1BLUlF4SEVZUUZwdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaENNdzFkTEpUTnk1TldqR0xqZjJIQVwiLFxuICBcInBob25lSWRcIjogXCIwOGU1NzJiNC1mZmFlLTQ0MzMtYWRhMi1iNzc5YTVkZDgxOWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAyMTgsXG4gICAgICA0OCxcbiAgICAgIDIyNyxcbiAgICAgIDY3LFxuICAgICAgNDcsXG4gICAgICAyMjQsXG4gICAgICAyMTgsXG4gICAgICA3NCxcbiAgICAgIDMyLFxuICAgICAgMTAwLFxuICAgICAgNCxcbiAgICAgIDE1LFxuICAgICAgMjMsXG4gICAgICAyMjYsXG4gICAgICAxOTUsXG4gICAgICAyMzAsXG4gICAgICAyMjQsXG4gICAgICAzMSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTIzLFxuICAgICAgMTc0LFxuICAgICAgMjE4LFxuICAgICAgMTA1LFxuICAgICAgOSxcbiAgICAgIDc3LFxuICAgICAgMTUyLFxuICAgICAgMTY5LFxuICAgICAgMTU1LFxuICAgICAgMTc3LFxuICAgICAgMTI5LFxuICAgICAgMTgyLFxuICAgICAgMTk5LFxuICAgICAgMjA0LFxuICAgICAgMjMwLFxuICAgICAgNzQsXG4gICAgICAyLFxuICAgICAgOTEsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFRFQ0FFSkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzg0OTkxNzM1MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlYTwnZWjXFxuXFxuXFxuXFxuXFxu8J2Vi1xcblxcblxcblxcbvCdlaBcXG5cXG5cXG5cXG7wnZWZXFxuXFxuXFxuXFxu8J2VmlxcblxcblxcblxcbvCdlZVcIixcbiAgICBcImxpZFwiOiBcIjExMTg2MjY1ODE1NDYyNzoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT3hsYjBFRUsvaWo3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVocFJzcUpXd0NPUXJycmlSYUd6TVNBUE50V3J5cTlIOFk2MndOY2E3Uk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRmwyTjlXWnVvMGNjM29aL1BReXlZUDNaZ3JwaXlKTWUwZlM5SDdRVHhIVFJlanZMWUxKZmk0UGZqaXhWN2lmTmRzbnE5Slo2dHhwRk9yMzFvN3NLQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidUxxZWF2bWVjWCtuVGcycTZIdUNseFNUOWw4OHAxa1AxaEZINnFNMDhyN24rUnBCb0t1WXVJOHJRcVdWakFMU0RSdm5vQUpJYUNuNnQ3UzE4eTlPZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3ODQ5OTE3MzUwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDIwMTQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVNNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBU00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2SCsrMTRtRGlhV01lQmlWWHN5NDJORDErMEZNeTZnTmJrdjlCS0JYdDdrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMDIwMTg1NDYsXCJjdXJyZW50SW5kZXhcIjoyMyxcImRldmljZUluZGV4ZXNcIjpbMCwxNV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjY0MzY1NTg2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "『GITHUB • Tohidkhan6332" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author : process.env.PACK_AUTHER|| "MR TOHID",
  packname: process.env.PACK_NAME || "MR TOHID",
  botname : process.env.BOT_NAME  || "TOHID-KHAN",
  ownername:process.env.OWNER_NAME|| "𝕄𝕣     𝕋    𝕠    𝕙    𝕚    𝕕",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "TOHID"  ).toUpperCase(),



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
