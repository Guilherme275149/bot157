const stickermaker = (prefix, botName, ownerName) => {
	return `
「 *${botName}* 」

🔰 *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}

🔰 *ABOUT*
  
  🔰─ ✔️ ${prefix}info
  🔰─ ✔️ ${prefix}blocklist
  🔰─ ✔️ ${prefix}chatlist
  🔰─ ✔️ ${prefix}ping
  🔰─ ✔️ ${prefix}bugreport

◪ *STICKER MAKER*
  
  🔰─ ✔️ ${prefix}sticker
  🔰─ ✔️ ${prefix}stickergif
  🔰─ ✔️ ${prefix}ttp`
}
exports.stickermaker = stickermaker
