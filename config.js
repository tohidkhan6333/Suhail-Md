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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_56_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDksXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODksXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICA1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDcsXG4gICAgICAgIDU0LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDc2LFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlLWEJ6T3JXRWlRZG5NQW9LeWtFSjJqQ3pTUW1OTmEydlorcXh3bU5KQW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3ODQ5OTE3MzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNkY4RTY0MTVFMDk0NzY3RTc3N0JBQjI3QzE2M0E3QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MjQxNjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc4NDk5MTczNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkzMjI5MzE5NkYyNDMwMTRDNTk1MTYzNTE3Q0Y4QUJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjUyNDE2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzg0OTkxNzM1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjQwRUE4MDBGNzVFNzVBMjU1NTE4QUNBQkUyMzdEQTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTI0MTcwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3ODQ5OTE3MzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NzUxMjdERUJGQzM4MTMwNjRDNTE1MzVCODc1MUJGRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MjQxNzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWDZJbnItaUFRVW1IeVNZam5ySFUzQVwiLFxuICBcInBob25lSWRcIjogXCJlM2FiZThiMS1jZWM4LTRlMmQtYWIyMy03ZjNlNjM0ZjBjZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAxMDEsXG4gICAgICAyMixcbiAgICAgIDE0OCxcbiAgICAgIDExOCxcbiAgICAgIDEwNixcbiAgICAgIDE4NixcbiAgICAgIDEzNSxcbiAgICAgIDIyNyxcbiAgICAgIDUzLFxuICAgICAgMjA3LFxuICAgICAgMSxcbiAgICAgIDY3LFxuICAgICAgMjI4LFxuICAgICAgMTg4LFxuICAgICAgMTc4LFxuICAgICAgMTIsXG4gICAgICAyNTIsXG4gICAgICAxMDUsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgOSxcbiAgICAgIDE5MyxcbiAgICAgIDIyMSxcbiAgICAgIDExNSxcbiAgICAgIDcyLFxuICAgICAgMjEzLFxuICAgICAgMjQ5LFxuICAgICAgMjQwLFxuICAgICAgMjI1LFxuICAgICAgMTc4LFxuICAgICAgMTEwLFxuICAgICAgMTQyLFxuICAgICAgMjUsXG4gICAgICA1MyxcbiAgICAgIDE2MixcbiAgICAgIDIxLFxuICAgICAgMTI5LFxuICAgICAgMTg2LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1RTUVg1R1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzg0OTkxNzM1MDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTExODYyNjU4MTU0NjI3OjE4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRvaGlkIEtoYW5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTHo2OFFFRUlIRXJyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQ5cytDVXh5c3Q1V2RGeWFUZ2VBUjFPS3BXYUZUZkg0OFRlc1RzQTAxVVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWDJWK1FzWjNmZEFNem5ZNVRTS3laNXFUWVNNdlY1M2loUUp1QUFDMVhoNCtUMHhxY1g5NzBlMEV1NXRUQ0dMM3JlMzlkK2dHdFY5MzI2R0FMV1FiREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHNVeFFmU3dpRkhZSDZscGtOOEVmclBmVFZvTXJlblA3TXBuQ3NnU1p3Q2JZZTFWYm1pQi9zNkFrUFhlRjVxZ0NoRWFTenJadHNhcFVaUE8ybndIanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3ODQ5OTE3MzUwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1MjQxNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBR1JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFHUi5qc29uIjogIntcImtleURhdGFcIjpcIjRwM3IxRy9ubHM3MEY3ZlFyUVBuQ3IybFB0Mk9rVTlKZDhWNHhUUWt5Rkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxODExNjA4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTI0MDM1MTk5XCJ9Igp9"  // PUT your SESSION_ID 


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
