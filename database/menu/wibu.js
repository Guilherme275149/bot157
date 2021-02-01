const wibu = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  🔰 Prefix: 「  ${prefix}  」
  🔰 Creator: ${ownerBot}
◪ *ABOUT*
  
  🔰─ ✔️ ${prefix}info
  🔰─ ✔️ ${prefix}blocklist
  🔰─ ✔️ ${prefix}chatlist
  🔰─ ✔️ ${prefix}ping
  🔰─ ✔️ ${prefix}bugreport
◪ *WIBU*
  
  🔰─ ✔️ ${prefix}neonime
  🔰─ ✔️ ${prefix}pokemon
  🔰─ ✔️ ${prefix}loli
  🔰─ ✔️ ${prefix}waifu
  🔰─ ✔️ ${prefix}randomanime
  🔰─ ✔️ ${prefix}husbu
  🔰─ ✔️ ${prefix}husbu2
  🔰─ ➰ ${prefix}wait
  🔰─ ✔️ ${prefix}nekonime`
}
exports.wibu = wibu
