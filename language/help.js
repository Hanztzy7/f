/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`Selamat ${salam} kak ${pushname}

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _Selamat ${salam} kak ${pushname}_

  *⏰ Time Server : ${time}*
  *📂 List Menu : ${botname}*

  *GROUP MENU*
  ୧⍤⃝💨 ${prefix}linkgroup
  ୧⍤⃝💨 ${prefix}ephemeral [option]
  ୧⍤⃝💨 ${prefix}setppgc
  ୧⍤⃝💨 ${prefix}setname 
  ୧⍤⃝💨 ${prefix}setdesc 
  ୧⍤⃝💨 ${prefix}group [option]
  ୧⍤⃝💨 ${prefix}editinfo [option]
  ୧⍤⃝💨 ${prefix}add @user
  ୧⍤⃝💨 ${prefix}kick @user
  ୧⍤⃝💨 ${prefix}hidetag 
  ୧⍤⃝💨 ${prefix}tagall 
  ୧⍤⃝💨 ${prefix}antilink [on/off]
  ୧⍤⃝💨 ${prefix}mute [on/off]
  ୧⍤⃝💨 ${prefix}promote @user
  ୧⍤⃝💨 ${prefix}demote @user
  ୧⍤⃝💨 ${prefix}vote 
  ୧⍤⃝💨 ${prefix}devote
  ୧⍤⃝💨 ${prefix}upvote
  ୧⍤⃝💨 ${prefix}cekvote
  ୧⍤⃝💨 ${prefix}hapusvote
  
  *DOWNLOADER MENU*
  ୧⍤⃝💨 ${prefix}tiktoknowm 
  ୧⍤⃝💨 ${prefix}tiktokwm 
  ୧⍤⃝💨 ${prefix}tiktokmp3 
  ୧⍤⃝💨 ${prefix}instagram 
  ୧⍤⃝💨 ${prefix}twitter 
  ୧⍤⃝💨 ${prefix}twittermp3 
  ୧⍤⃝💨 ${prefix}facebook 
  ୧⍤⃝💨 ${prefix}pinterestdl 
  ୧⍤⃝💨 ${prefix}ytmp3 
  ୧⍤⃝💨 ${prefix}ytmp4 
  ୧⍤⃝💨 ${prefix}getmusic 
  ୧⍤⃝💨 ${prefix}getvideo 
  ୧⍤⃝💨 ${prefix}umma 
  ୧⍤⃝💨 ${prefix}joox 
  ୧⍤⃝💨 ${prefix}soundcloud 
  
  *SEARCH MENU*
  ୧⍤⃝💨 ${prefix}play 
  ୧⍤⃝💨 ${prefix}yts 
  ୧⍤⃝💨 ${prefix}google 
  ୧⍤⃝💨 ${prefix}gimage 
  ୧⍤⃝💨 ${prefix}pinterest 
  ୧⍤⃝💨 ${prefix}wikimedia 
  ୧⍤⃝💨 ${prefix}ytsearch 
  ୧⍤⃝💨 ${prefix}ringtone 
  ୧⍤⃝💨 ${prefix}stalk [option] 
  ୧⍤⃝💨 ${prefix}webtoons 
  ୧⍤⃝💨 ${prefix}drakor 
  ୧⍤⃝💨 ${prefix}animesearch 
  ୧⍤⃝💨 ${prefix}character 
  ୧⍤⃝💨 ${prefix}manga 
  ୧⍤⃝💨 ${prefix}playstore 
  ୧⍤⃝💨 ${prefix}gsmarena 
  ୧⍤⃝💨 ${prefix}jadwalbioskop 
  ୧⍤⃝💨 ${prefix}nowplayingbioskop 
  ୧⍤⃝💨 ${prefix}aminio 
  ୧⍤⃝💨 ${prefix}wattpad 
  ୧⍤⃝💨 ${prefix}webtoons 
  ୧⍤⃝💨 ${prefix}drakor 
  
  *TELE STICK MENU*
  ୧⍤⃝💨 ${prefix}gurastick
  ୧⍤⃝💨 ${prefix}dogestick
  ୧⍤⃝💨 ${prefix}bucinstick
  ୧⍤⃝💨 ${prefix}patrick
  
  *RANDOM MENU*
  ୧⍤⃝💨 ${prefix}coffe
  ୧⍤⃝💨 ${prefix}quotesanime
  ୧⍤⃝💨 ${prefix}couple
  ୧⍤⃝💨 ${prefix}darkjokes
  
 
  *TEXT PRO MENU*
  ୧⍤⃝💨 ${prefix}3dchristmas
  ୧⍤⃝💨 ${prefix}3ddeepsea
  ୧⍤⃝💨 ${prefix}americanflag
  ୧⍤⃝💨 ${prefix}3dscifi
  ୧⍤⃝💨 ${prefix}3drainbow
  ୧⍤⃝💨 ${prefix}3dwaterpipe
  ୧⍤⃝💨 ${prefix}halloweenskeleton
  ୧⍤⃝💨 ${prefix}sketch
  ୧⍤⃝💨 ${prefix}bluecircuit
  ୧⍤⃝💨 ${prefix}space
  ୧⍤⃝💨 ${prefix}metallic
  ୧⍤⃝💨 ${prefix}fiction
  ୧⍤⃝💨 ${prefix}greenhorror
  ୧⍤⃝💨 ${prefix}transformer
  ୧⍤⃝💨 ${prefix}berry
  ୧⍤⃝💨 ${prefix}thunder
  ୧⍤⃝💨 ${prefix}magma
  ୧⍤⃝💨 ${prefix}3dcrackedstone
  ୧⍤⃝💨 ${prefix}3dneonlight
  ୧⍤⃝💨 ${prefix}impressiveglitch
  ୧⍤⃝💨 ${prefix}naturalleaves
  ୧⍤⃝💨 ${prefix}fireworksparkle
  ୧⍤⃝💨 ${prefix}matrix
  ୧⍤⃝💨 ${prefix}dropwater
  ୧⍤⃝💨 ${prefix}harrypotter
  ୧⍤⃝💨 ${prefix}foggywindow
  ୧⍤⃝💨 ${prefix}neondevils
  ୧⍤⃝💨 ${prefix}christmasholiday
  ୧⍤⃝💨 ${prefix}3dgradient
  ୧⍤⃝💨 ${prefix}blackpink
  ୧⍤⃝💨 ${prefix}gluetext
  
  *PHOTO OXY MENU*
  ୧⍤⃝💨 ${prefix}shadow
  ୧⍤⃝💨 ${prefix}romantic
  ୧⍤⃝💨 ${prefix}smoke
  ୧⍤⃝💨 ${prefix}burnpapper
  ୧⍤⃝💨 ${prefix}naruto
  ୧⍤⃝💨 ${prefix}lovemsg
  ୧⍤⃝💨 ${prefix}grassmsg
  ୧⍤⃝💨 ${prefix}lovetext
  ୧⍤⃝💨 ${prefix}coffecup
  ୧⍤⃝💨 ${prefix}butterfly
  ୧⍤⃝💨 ${prefix}harrypotter
  ୧⍤⃝💨 ${prefix}retrolol
  
  *EPHOTO MENU*
  ୧⍤⃝💨 ${prefix}ffcover
  ୧⍤⃝💨 ${prefix}crossfire
  ୧⍤⃝💨 ${prefix}galaxy
  ୧⍤⃝💨 ${prefix}glass
  ୧⍤⃝💨 ${prefix}neon
  ୧⍤⃝💨 ${prefix}beach
  ୧⍤⃝💨 ${prefix}blackpink
  ୧⍤⃝💨 ${prefix}igcertificate
  ୧⍤⃝💨 ${prefix}ytcertificate
  
  *GAME & FUN MENU*
  ୧⍤⃝💨 ${prefix}simih
  ୧⍤⃝💨 ${prefix}bagaimanakah
  ୧⍤⃝💨 ${prefix}kapankah
  ୧⍤⃝💨 ${prefix}apakah
  ୧⍤⃝💨 ${prefix}bisakah
  ୧⍤⃝💨 ${prefix}rate
  ୧⍤⃝💨 ${prefix}wangy
  ୧⍤⃝💨 ${prefix}gantengcek
  ୧⍤⃝💨 ${prefix}cekganteng
  ୧⍤⃝💨 ${prefix}cantikcek
  ୧⍤⃝💨 ${prefix}cekcantik
  ୧⍤⃝💨 ${prefix}sangecek
  ୧⍤⃝💨 ${prefix}ceksange
  ୧⍤⃝💨 ${prefix}gaycek
  ୧⍤⃝💨 ${prefix}cekgay
  ୧⍤⃝💨 ${prefix}lesbicek
  ୧⍤⃝💨 ${prefix}halah
  ୧⍤⃝💨 ${prefix}hilih
  ୧⍤⃝💨 ${prefix}huluh
  ୧⍤⃝💨 ${prefix}heleh
  ୧⍤⃝💨 ${prefix}holoh
  ୧⍤⃝💨 ${prefix}jadian
  ୧⍤⃝💨 ${prefix}jodohku
  ୧⍤⃝💨 ${prefix}tictactoe
  ୧⍤⃝💨 ${prefix}delttt
  ୧⍤⃝💨 ${prefix}family100
  ୧⍤⃝💨 ${prefix}tebak [option]
  ୧⍤⃝💨 ${prefix}math [mode]
  ୧⍤⃝💨 ${prefix}suitpvp [@tag]

  *PRIMBON MENU*
  ୧⍤⃝💨 ${prefix}nomorhoki
  ୧⍤⃝💨 ${prefix}artimimpi
  ୧⍤⃝💨 ${prefix}artinama
  ୧⍤⃝💨 ${prefix}ramaljodoh
  ୧⍤⃝💨 ${prefix}ramaljodohbali
  ୧⍤⃝💨 ${prefix}suamiistri
  ୧⍤⃝💨 ${prefix}ramalcinta
  ୧⍤⃝💨 ${prefix}cocoknama
  ୧⍤⃝💨 ${prefix}pasangan
  ୧⍤⃝💨 ${prefix}jadiannikah
  ୧⍤⃝💨 ${prefix}sifatusaha
  ୧⍤⃝💨 ${prefix}rezeki
  ୧⍤⃝💨 ${prefix}pekerjaan
  ୧⍤⃝💨 ${prefix}nasib
  ୧⍤⃝💨 ${prefix}penyakit
  ୧⍤⃝💨 ${prefix}tarot
  ୧⍤⃝💨 ${prefix}fengshui
  ୧⍤⃝💨 ${prefix}haribaik
  ୧⍤⃝💨 ${prefix}harisangar
  ୧⍤⃝💨 ${prefix}harisial
  ୧⍤⃝💨 ${prefix}nagahari
  ୧⍤⃝💨 ${prefix}arahrezeki
  ୧⍤⃝💨 ${prefix}peruntungan
  ୧⍤⃝💨 ${prefix}weton
  ୧⍤⃝💨 ${prefix}karakter
  ୧⍤⃝💨 ${prefix}keberuntungan
  ୧⍤⃝💨 ${prefix}memancing
  ୧⍤⃝💨 ${prefix}masasubur
  ୧⍤⃝💨 ${prefix}zodiak
  ୧⍤⃝💨 ${prefix}shio

  *CERPEN MENU*
  ୧⍤⃝💨 ${prefix}cerpen anak
  ୧⍤⃝💨 ${prefix}cerpen bahasa daerah
  ୧⍤⃝💨 ${prefix}cerpen bahasa inggris
  ୧⍤⃝💨 ${prefix}cerpen bahasa jawa
  ୧⍤⃝💨 ${prefix}cerpen bahasa sunda
  ୧⍤⃝💨 ${prefix}cerpen budaya
  ୧⍤⃝💨 ${prefix}cerpen cinta
  ୧⍤⃝💨 ${prefix}cerpen cinta islami
  ୧⍤⃝💨 ${prefix}cerpen cinta pertama
  ୧⍤⃝💨 ${prefix}cerpen cinta romantis
  ୧⍤⃝💨 ${prefix}cerpen cinta sedih
  ୧⍤⃝💨 ${prefix}cerpen cinta segitiga
  ୧⍤⃝💨 ${prefix}cerpen cinta sejati
  ୧⍤⃝💨 ${prefix}cerpen galau
  ୧⍤⃝💨 ${prefix}cerpen gokil
  ୧⍤⃝💨 ${prefix}cerpen inspiratif
  ୧⍤⃝💨 ${prefix}cerpen jepang
  ୧⍤⃝💨 ${prefix}cerpen kehidupan
  ୧⍤⃝💨 ${prefix}cerpen keluarga
  ୧⍤⃝💨 ${prefix}cerpen kisah nyata
  ୧⍤⃝💨 ${prefix}cerpen korea
  ୧⍤⃝💨 ${prefix}cerpen kristen
  ୧⍤⃝💨 ${prefix}cerpen liburan
  ୧⍤⃝💨 ${prefix}cerpen lingkungan
  ୧⍤⃝💨 ${prefix}cerpen lucu
  ୧⍤⃝💨 ${prefix}cerpen malaysia
  ୧⍤⃝💨 ${prefix}cerpen mengharukan
  ୧⍤⃝💨 ${prefix}cerpen misteri
  ୧⍤⃝💨 ${prefix}cerpen motivasi
  ୧⍤⃝💨 ${prefix}cerpen nasihat
  ୧⍤⃝💨 ${prefix}cerpen nasionalisme
  ୧⍤⃝💨 ${prefix}cerpen olahraga
  ୧⍤⃝💨 ${prefix}cerpen patah hati
  ୧⍤⃝💨 ${prefix}cerpen penantian
  ୧⍤⃝💨 ${prefix}cerpen pendidikan
  ୧⍤⃝💨 ${prefix}cerpen pengalaman pribadi
  ୧⍤⃝💨 ${prefix}cerpen pengorbanan
  ୧⍤⃝💨 ${prefix}cerpen penyesalan
  ୧⍤⃝💨 ${prefix}cerpen perjuangan
  ୧⍤⃝💨 ${prefix}cerpen perpisahan
  ୧⍤⃝💨 ${prefix}cerpen persahabatan
  ୧⍤⃝💨 ${prefix}cerpen petualangan
  ୧⍤⃝💨 ${prefix}cerpen ramadhan
  ୧⍤⃝💨 ${prefix}cerpen remaja
  ୧⍤⃝💨 ${prefix}cerpen renungan
  ୧⍤⃝💨 ${prefix}cerpen rindu
  ୧⍤⃝💨 ${prefix}cerpen rohani
  ୧⍤⃝💨 ${prefix}cerpen romantis
  ୧⍤⃝💨 ${prefix}cerpen sastra
  ୧⍤⃝💨 ${prefix}cerpen sedih
  ୧⍤⃝💨 ${prefix}cerpen sejarah
  ୧⍤⃝💨 ${prefix}cerpen slice of life
  ୧⍤⃝💨 ${prefix}cerpen terjemahan
  ୧⍤⃝💨 ${prefix}cerpen thriller
  
  *CONVERT MENU*
  ୧⍤⃝💨 ${prefix}toimage
  ୧⍤⃝💨 ${prefix}removebg
  ୧⍤⃝💨 ${prefix}sticker
  ୧⍤⃝💨 ${prefix}emojimix
  ୧⍤⃝💨 ${prefix}tovideo
  ୧⍤⃝💨 ${prefix}togif
  ୧⍤⃝💨 ${prefix}tourl
  ୧⍤⃝💨 ${prefix}tovn
  ୧⍤⃝💨 ${prefix}tomp3
  ୧⍤⃝💨 ${prefix}toaudio
  ୧⍤⃝💨 ${prefix}ebinary
  ୧⍤⃝💨 ${prefix}dbinary
  ୧⍤⃝💨 ${prefix}styletext
  ୧⍤⃝💨 ${prefix}smeme

  *INFORMATION MENU*
  ୧⍤⃝💨 ${prefix}merdeka-news 
  ୧⍤⃝💨 ${prefix}kontan-news 
  ୧⍤⃝💨 ${prefix}cnbc-news 
  ୧⍤⃝💨 ${prefix}tribun-news 
  ୧⍤⃝💨 ${prefix}indozone-news 
  ୧⍤⃝💨 ${prefix}kompas-news 
  ୧⍤⃝💨 ${prefix}detik-news 
  ୧⍤⃝💨 ${prefix}daily-news 
  ୧⍤⃝💨 ${prefix}inews-news 
  ୧⍤⃝💨 ${prefix}okezone-news 
  ୧⍤⃝💨 ${prefix}sindo-news 
  ୧⍤⃝💨 ${prefix}tempo-news 
  ୧⍤⃝💨 ${prefix}antara-news 
  ୧⍤⃝💨 ${prefix}cnn-news 
  ୧⍤⃝💨 ${prefix}fajar-news 
  
  *MAIN MENU*
  ୧⍤⃝💨 ${prefix}script
  ୧⍤⃝💨 ${prefix}ping
  ୧⍤⃝💨 ${prefix}runtime
  ୧⍤⃝💨 ${prefix}speed
  ୧⍤⃝💨 ${prefix}owner
  ୧⍤⃝💨 ${prefix}menu
  ୧⍤⃝💨 ${prefix}delete
  ୧⍤⃝💨 ${prefix}infochat
  ୧⍤⃝💨 ${prefix}quoted
  ୧⍤⃝💨 ${prefix}listpc
  ୧⍤⃝💨 ${prefix}listgc
  ୧⍤⃝💨 ${prefix}listonline
  
  *DATABASE MENU*
  ୧⍤⃝💨 ${prefix}setcmd
  ୧⍤⃝💨 ${prefix}listcmd
  ୧⍤⃝💨 ${prefix}delcmd
  ୧⍤⃝💨 ${prefix}lockcmd
  ୧⍤⃝💨 ${prefix}addmsg
  ୧⍤⃝💨 ${prefix}listmsg
  ୧⍤⃝💨 ${prefix}getmsg
  ୧⍤⃝💨 ${prefix}delmsg
  
  *ANONYMOUS MENU*
  ୧⍤⃝💨 ${prefix}anonymous
  ୧⍤⃝💨 ${prefix}start
  ୧⍤⃝💨 ${prefix}next
  ୧⍤⃝💨 ${prefix}keluar
  ୧⍤⃝💨 ${prefix}sendkontak
  
  *ISLAMIC MENU*
  ୧⍤⃝💨 ${prefix}iqra
  ୧⍤⃝💨 ${prefix}hadist
  ୧⍤⃝💨 ${prefix}alquran
  ୧⍤⃝💨 ${prefix}juzamma
  ୧⍤⃝💨 ${prefix}tafsirsurah
  
  *VOICE CHANGER*
  ୧⍤⃝💨 ${prefix}bass
  ୧⍤⃝💨 ${prefix}blown
  ୧⍤⃝💨 ${prefix}deep
  ୧⍤⃝💨 ${prefix}earrape
  ୧⍤⃝💨 ${prefix}fast
  ୧⍤⃝💨 ${prefix}fat
  ୧⍤⃝💨 ${prefix}nightcore
  ୧⍤⃝💨 ${prefix}reverse
  ୧⍤⃝💨 ${prefix}robot
  ୧⍤⃝💨 ${prefix}slow
  ୧⍤⃝💨 ${prefix}tupai
  
  *OWNER MENU*
  ୧⍤⃝💨 ${prefix}react [emoji]
  ୧⍤⃝💨 ${prefix}chat [option]
  ୧⍤⃝💨 ${prefix}join [link]
  ୧⍤⃝💨 ${prefix}leave
  ୧⍤⃝💨 ${prefix}block @user
  ୧⍤⃝💨 ${prefix}unblock @user
  ୧⍤⃝💨 ${prefix}bcgroup 
  ୧⍤⃝💨 ${prefix}bcall 
  ୧⍤⃝💨 ${prefix}setppbot  
  ୧⍤⃝💨 ${prefix}setexif
  ୧⍤⃝💨 ${prefix}setmenu
  ୧⍤⃝💨 ${prefix}setallmenu
  
  *THANKS TO*
  ୧⍤⃝💨 DikaArdnt
  ୧⍤⃝💨 ZeeoneOfc
  ୧⍤⃝💨 FatihArridho
  ୧⍤⃝💨 Yoga
  ୧⍤⃝💨 Riy
  ୧⍤⃝💨 Deff
  ୧⍤⃝💨 Sanzy
  ୧⍤⃝💨 Nekel
  ୧⍤⃝💨 Bagas Prdn
  `
}

//—————「 Welcome 」—————//
exports.welcome = () => {
	return`Welcome
`
}

//—————「 Leave 」—————//
exports.leave = () => {
	return`Byeee
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *DONATE* 」—————

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍

Thanks!

—————「 *SEWA | RUN BOT* 」—————

  *_SEWA BOT_* 
  ୧⍤⃝💨 Sewa Bot 15k (1 minggu)
  ୧⍤⃝💨 Sewa Bot 20k (1 bulan)
  ୧⍤⃝💨 Sewa Bot 25k (Permanen)

  *JADI BOT* 
  ୧⍤⃝💨 Jadi Bot 15k Tidak Owner (1 minggu)
  ୧⍤⃝💨 Jadi Bot + Owner 20k (1 bulan)
  ୧⍤⃝💨 Jadi Bot + Owner 25k (Permanen)

  *JASA RUN BOT*
  ୧⍤⃝💨 Run Bot 15k (1 minggu)
  ୧⍤⃝💨 Run Bot 20k (1 bulan)
  ୧⍤⃝💨 Run Bot 25k (Permanen)

  *Minat? Langsung chat aja ya cuy 🐦*

  *Contact person Owner* :
  wa.me/${ownernomer}
`
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
  *GROUP MENU*
  ୧⍤⃝💨 ${prefix}linkgroup
  ୧⍤⃝💨 ${prefix}ephemeral [option]
  ୧⍤⃝💨 ${prefix}setppgc  
  ୧⍤⃝💨 ${prefix}setname 
  ୧⍤⃝💨 ${prefix}setdesc 
  ୧⍤⃝💨 ${prefix}group [option]
  ୧⍤⃝💨 ${prefix}editinfo [option]
  ୧⍤⃝💨 ${prefix}add @user
  ୧⍤⃝💨 ${prefix}kick @user
  ୧⍤⃝💨 ${prefix}hidetag 
  ୧⍤⃝💨 ${prefix}tagall 
  ୧⍤⃝💨 ${prefix}antilink [on/off]
  ୧⍤⃝💨 ${prefix}mute [on/off]
  ୧⍤⃝💨 ${prefix}promote @user
  ୧⍤⃝💨 ${prefix}demote @user
  ୧⍤⃝💨 ${prefix}vote 
  ୧⍤⃝💨 ${prefix}devote
  ୧⍤⃝💨 ${prefix}upvote
  ୧⍤⃝💨 ${prefix}cekvote
  ୧⍤⃝💨 ${prefix}hapusvote
  `
}

exports.downloadermenu = (prefix) => {
	return`
  *DOWNLOADER MENU*
  ୧⍤⃝💨 ${prefix}tiktoknowm 
  ୧⍤⃝💨 ${prefix}tiktokwm 
  ୧⍤⃝💨 ${prefix}tiktokmp3 
  ୧⍤⃝💨 ${prefix}instagram 
  ୧⍤⃝💨 ${prefix}twitter 
  ୧⍤⃝💨 ${prefix}twittermp3 
  ୧⍤⃝💨 ${prefix}facebook 
  ୧⍤⃝💨 ${prefix}pinterestdl 
  ୧⍤⃝💨 ${prefix}ytmp3 
  ୧⍤⃝💨 ${prefix}ytmp4 
  ୧⍤⃝💨 ${prefix}getmusic 
  ୧⍤⃝💨 ${prefix}getvideo 
  ୧⍤⃝💨 ${prefix}umma 
  ୧⍤⃝💨 ${prefix}joox 
  ୧⍤⃝💨 ${prefix}soundcloud 
  `
}

exports.searchmenu = (prefix) => {
	return`
  *SEARCH MENU*
  ୧⍤⃝💨 ${prefix}play 
  ୧⍤⃝💨 ${prefix}yts 
  ୧⍤⃝💨 ${prefix}google 
  ୧⍤⃝💨 ${prefix}gimage 
  ୧⍤⃝💨 ${prefix}pinterest 
  ୧⍤⃝💨 ${prefix}wikimedia 
  ୧⍤⃝💨 ${prefix}ytsearch 
  ୧⍤⃝💨 ${prefix}ringtone 
  ୧⍤⃝💨 ${prefix}stalk [option] 
  ୧⍤⃝💨 ${prefix}webtoons 
  ୧⍤⃝💨 ${prefix}drakor 
  ୧⍤⃝💨 ${prefix}animesearch 
  ୧⍤⃝💨 ${prefix}character 
  ୧⍤⃝💨 ${prefix}manga 
  ୧⍤⃝💨 ${prefix}playstore 
  ୧⍤⃝💨 ${prefix}gsmarena 
  ୧⍤⃝💨 ${prefix}jadwalbioskop 
  ୧⍤⃝💨 ${prefix}nowplayingbioskop 
  ୧⍤⃝💨 ${prefix}aminio 
  ୧⍤⃝💨 ${prefix}wattpad 
  ୧⍤⃝💨 ${prefix}webtoons 
  ୧⍤⃝💨 ${prefix}drakor 
  `
}

exports.telestickmenu = (prefix) => {
	return`
  *TELE STICK MENU*
  ୧⍤⃝💨 ${prefix}gurastick
  ୧⍤⃝💨 ${prefix}dogestick
  ୧⍤⃝💨 ${prefix}bucinstick
  ୧⍤⃝💨 ${prefix}patrick
`
}

exports.randommenu = (prefix) => {
	return`
  *RANDOM MENU*
  ୧⍤⃝💨 ${prefix}coffe
  ୧⍤⃝💨 ${prefix}quotesanime
  ୧⍤⃝💨 ${prefix}couple
  ୧⍤⃝💨 ${prefix}darkjokes
  `
}

exports.textpromenu = (prefix) => {
	return`
  *TEXT PRO MENU*
  ୧⍤⃝💨 ${prefix}3dchristmas
  ୧⍤⃝💨 ${prefix}3ddeepsea
  ୧⍤⃝💨 ${prefix}americanflag
  ୧⍤⃝💨 ${prefix}3dscifi
  ୧⍤⃝💨 ${prefix}3drainbow
  ୧⍤⃝💨 ${prefix}3dwaterpipe
  ୧⍤⃝💨 ${prefix}halloweenskeleton
  ୧⍤⃝💨 ${prefix}sketch
  ୧⍤⃝💨 ${prefix}bluecircuit
  ୧⍤⃝💨 ${prefix}space
  ୧⍤⃝💨 ${prefix}metallic
  ୧⍤⃝💨 ${prefix}fiction
  ୧⍤⃝💨 ${prefix}greenhorror
  ୧⍤⃝💨 ${prefix}transformer
  ୧⍤⃝💨 ${prefix}berry
  ୧⍤⃝💨 ${prefix}thunder
  ୧⍤⃝💨 ${prefix}magma
  ୧⍤⃝💨 ${prefix}3dcrackedstone
  ୧⍤⃝💨 ${prefix}3dneonlight
  ୧⍤⃝💨 ${prefix}impressiveglitch
  ୧⍤⃝💨 ${prefix}naturalleaves
  ୧⍤⃝💨 ${prefix}fireworksparkle
  ୧⍤⃝💨 ${prefix}matrix
  ୧⍤⃝💨 ${prefix}dropwater
  ୧⍤⃝💨 ${prefix}harrypotter
  ୧⍤⃝💨 ${prefix}foggywindow
  ୧⍤⃝💨 ${prefix}neondevils
  ୧⍤⃝💨 ${prefix}christmasholiday
  ୧⍤⃝💨 ${prefix}3dgradient
  ୧⍤⃝💨 ${prefix}blackpink
  ୧⍤⃝💨 ${prefix}gluetext
  `
}

exports.photooxymenu = (prefix) => {
	return`
  *PHOTO OXY MENU*
  ୧⍤⃝💨 ${prefix}shadow
  ୧⍤⃝💨 ${prefix}romantic
  ୧⍤⃝💨 ${prefix}smoke
  ୧⍤⃝💨 ${prefix}burnpapper
  ୧⍤⃝💨 ${prefix}naruto
  ୧⍤⃝💨 ${prefix}lovemsg
  ୧⍤⃝💨 ${prefix}grassmsg
  ୧⍤⃝💨 ${prefix}lovetext
  ୧⍤⃝💨 ${prefix}coffecup
  ୧⍤⃝💨 ${prefix}butterfly
  ୧⍤⃝💨 ${prefix}harrypotter
  ୧⍤⃝💨 ${prefix}retrolol
  `
}

exports.ephotomenu = (prefix) => {
	return`
  *EPHOTO MENU*
  ୧⍤⃝💨 ${prefix}ffcover
  ୧⍤⃝💨 ${prefix}crossfire
  ୧⍤⃝💨 ${prefix}galaxy
  ୧⍤⃝💨 ${prefix}glass
  ୧⍤⃝💨 ${prefix}neon
  ୧⍤⃝💨 ${prefix}beach
  ୧⍤⃝💨 ${prefix}blackpink
  ୧⍤⃝💨 ${prefix}igcertificate
  ୧⍤⃝💨 ${prefix}ytcertificate
  `
}

exports.funmenu = (prefix) => {
	return`
  *GAME & FUN MENU*
  ୧⍤⃝💨 ${prefix}simih
  ୧⍤⃝💨 ${prefix}bagaimanakah
  ୧⍤⃝💨 ${prefix}kapankah
  ୧⍤⃝💨 ${prefix}apakah
  ୧⍤⃝💨 ${prefix}bisakah
  ୧⍤⃝💨 ${prefix}rate
  ୧⍤⃝💨 ${prefix}wangy
  ୧⍤⃝💨 ${prefix}gantengcek
  ୧⍤⃝💨 ${prefix}cekganteng
  ୧⍤⃝💨 ${prefix}cantikcek
  ୧⍤⃝💨 ${prefix}cekcantik
  ୧⍤⃝💨 ${prefix}sangecek
  ୧⍤⃝💨 ${prefix}ceksange
  ୧⍤⃝💨 ${prefix}gaycek
  ୧⍤⃝💨 ${prefix}cekgay
  ୧⍤⃝💨 ${prefix}lesbicek
  ୧⍤⃝💨 ${prefix}halah
  ୧⍤⃝💨 ${prefix}hilih
  ୧⍤⃝💨 ${prefix}huluh
  ୧⍤⃝💨 ${prefix}heleh
  ୧⍤⃝💨 ${prefix}holoh
  ୧⍤⃝💨 ${prefix}jadian
  ୧⍤⃝💨 ${prefix}jodohku
  ୧⍤⃝💨 ${prefix}tictactoe
  ୧⍤⃝💨 ${prefix}delttt
  ୧⍤⃝💨 ${prefix}family100
  ୧⍤⃝💨 ${prefix}tebak
  ୧⍤⃝💨 ${prefix}math
  ୧⍤⃝💨 ${prefix}suitpvp [@tag]
  `
}

exports.primbonmenu = (prefix) => {
	return`
  *PRIMBON MENU*
  ୧⍤⃝💨 ${prefix}nomorhoki
  ୧⍤⃝💨 ${prefix}artimimpi
  ୧⍤⃝💨 ${prefix}artinama
  ୧⍤⃝💨 ${prefix}ramaljodoh
  ୧⍤⃝💨 ${prefix}ramaljodohbali
  ୧⍤⃝💨 ${prefix}suamiistri
  ୧⍤⃝💨 ${prefix}ramalcinta
  ୧⍤⃝💨 ${prefix}cocoknama
  ୧⍤⃝💨 ${prefix}pasangan
  ୧⍤⃝💨 ${prefix}jadiannikah
  ୧⍤⃝💨 ${prefix}sifatusaha
  ୧⍤⃝💨 ${prefix}rezeki
  ୧⍤⃝💨 ${prefix}pekerjaan
  ୧⍤⃝💨 ${prefix}nasib
  ୧⍤⃝💨 ${prefix}penyakit
  ୧⍤⃝💨 ${prefix}tarot
  ୧⍤⃝💨 ${prefix}fengshui
  ୧⍤⃝💨 ${prefix}haribaik
  ୧⍤⃝💨 ${prefix}harisangar
  ୧⍤⃝💨 ${prefix}harisial
  ୧⍤⃝💨 ${prefix}nagahari
  ୧⍤⃝💨 ${prefix}arahrezeki
  ୧⍤⃝💨 ${prefix}peruntungan
  ୧⍤⃝💨 ${prefix}weton
  ୧⍤⃝💨 ${prefix}karakter
  ୧⍤⃝💨 ${prefix}keberuntungan
  ୧⍤⃝💨 ${prefix}memancing
  ୧⍤⃝💨 ${prefix}masasubur
  ୧⍤⃝💨 ${prefix}zodiak
  ୧⍤⃝💨 ${prefix}shio
  `
}

exports.cerpenmenu = (prefix) => {
	return`
  *CERPEN MENU*
  ୧⍤⃝💨 ${prefix}cerpen anak
  ୧⍤⃝💨 ${prefix}cerpen bahasa daerah
  ୧⍤⃝💨 ${prefix}cerpen bahasa inggris
  ୧⍤⃝💨 ${prefix}cerpen bahasa jawa
  ୧⍤⃝💨 ${prefix}cerpen bahasa sunda
  ୧⍤⃝💨 ${prefix}cerpen budaya
  ୧⍤⃝💨 ${prefix}cerpen cinta
  ୧⍤⃝💨 ${prefix}cerpen cinta islami
  ୧⍤⃝💨 ${prefix}cerpen cinta pertama
  ୧⍤⃝💨 ${prefix}cerpen cinta romantis
  ୧⍤⃝💨 ${prefix}cerpen cinta sedih
  ୧⍤⃝💨 ${prefix}cerpen cinta segitiga
  ୧⍤⃝💨 ${prefix}cerpen cinta sejati
  ୧⍤⃝💨 ${prefix}cerpen galau
  ୧⍤⃝💨 ${prefix}cerpen gokil
  ୧⍤⃝💨 ${prefix}cerpen inspiratif
  ୧⍤⃝💨 ${prefix}cerpen jepang
  ୧⍤⃝💨 ${prefix}cerpen kehidupan
  ୧⍤⃝💨 ${prefix}cerpen keluarga
  ୧⍤⃝💨 ${prefix}cerpen kisah nyata
  ୧⍤⃝💨 ${prefix}cerpen korea
  ୧⍤⃝💨 ${prefix}cerpen kristen
  ୧⍤⃝💨 ${prefix}cerpen liburan
  ୧⍤⃝💨 ${prefix}cerpen lingkungan
  ୧⍤⃝💨 ${prefix}cerpen lucu
  ୧⍤⃝💨 ${prefix}cerpen malaysia
  ୧⍤⃝💨 ${prefix}cerpen mengharukan
  ୧⍤⃝💨 ${prefix}cerpen misteri
  ୧⍤⃝💨 ${prefix}cerpen motivasi
  ୧⍤⃝💨 ${prefix}cerpen nasihat
  ୧⍤⃝💨 ${prefix}cerpen nasionalisme
  ୧⍤⃝💨 ${prefix}cerpen olahraga
  ୧⍤⃝💨 ${prefix}cerpen patah hati
  ୧⍤⃝💨 ${prefix}cerpen penantian
  ୧⍤⃝💨 ${prefix}cerpen pendidikan
  ୧⍤⃝💨 ${prefix}cerpen pengalaman pribadi
  ୧⍤⃝💨 ${prefix}cerpen pengorbanan
  ୧⍤⃝💨 ${prefix}cerpen penyesalan
  ୧⍤⃝💨 ${prefix}cerpen perjuangan
  ୧⍤⃝💨 ${prefix}cerpen perpisahan
  ୧⍤⃝💨 ${prefix}cerpen persahabatan
  ୧⍤⃝💨 ${prefix}cerpen petualangan
  ୧⍤⃝💨 ${prefix}cerpen ramadhan
  ୧⍤⃝💨 ${prefix}cerpen remaja
  ୧⍤⃝💨 ${prefix}cerpen renungan
  ୧⍤⃝💨 ${prefix}cerpen rindu
  ୧⍤⃝💨 ${prefix}cerpen rohani
  ୧⍤⃝💨 ${prefix}cerpen romantis
  ୧⍤⃝💨 ${prefix}cerpen sastra
  ୧⍤⃝💨 ${prefix}cerpen sedih
  ୧⍤⃝💨 ${prefix}cerpen sejarah
  ୧⍤⃝💨 ${prefix}cerpen slice of life
  ୧⍤⃝💨 ${prefix}cerpen terjemahan
  ୧⍤⃝💨 ${prefix}cerpen thriller
`
}

exports.convertmenu = (prefix) => {
	return`
  *CONVERT MENU*
  ୧⍤⃝💨 ${prefix}toimage
  ୧⍤⃝💨 ${prefix}removebg
  ୧⍤⃝💨 ${prefix}sticker
  ୧⍤⃝💨 ${prefix}emojimix
  ୧⍤⃝💨 ${prefix}tovideo
  ୧⍤⃝💨 ${prefix}togif
  ୧⍤⃝💨 ${prefix}tourl
  ୧⍤⃝💨 ${prefix}tovn
  ୧⍤⃝💨 ${prefix}tomp3
  ୧⍤⃝💨 ${prefix}toaudio
  ୧⍤⃝💨 ${prefix}ebinary
  ୧⍤⃝💨 ${prefix}dbinary
  ୧⍤⃝💨 ${prefix}styletext
  `
}

exports.informationmenu = (prefix) => {
	return`
  *INFORMATION MENU*
  ୧⍤⃝💨 ${prefix}merdeka-news 
  ୧⍤⃝💨 ${prefix}kontan-news 
  ୧⍤⃝💨 ${prefix}cnbc-news 
  ୧⍤⃝💨 ${prefix}tribun-news 
  ୧⍤⃝💨 ${prefix}indozone-news 
  ୧⍤⃝💨 ${prefix}kompas-news 
  ୧⍤⃝💨 ${prefix}detik-news 
  ୧⍤⃝💨 ${prefix}daily-news 
  ୧⍤⃝💨 ${prefix}inews-news 
  ୧⍤⃝💨 ${prefix}okezone-news 
  ୧⍤⃝💨 ${prefix}sindo-news 
  ୧⍤⃝💨 ${prefix}tempo-news 
  ୧⍤⃝💨 ${prefix}antara-news 
  ୧⍤⃝💨 ${prefix}cnn-news 
  ୧⍤⃝💨 ${prefix}fajar-news
`
}

exports.mainmenu = (prefix) => {
	return`
  *MAIN MENU*
  ୧⍤⃝💨 ${prefix}script
  ୧⍤⃝💨 ${prefix}ping
  ୧⍤⃝💨 ${prefix}runtime
  ୧⍤⃝💨 ${prefix}speed
  ୧⍤⃝💨 ${prefix}owner
  ୧⍤⃝💨 ${prefix}menu
  ୧⍤⃝💨 ${prefix}delete
  ୧⍤⃝💨 ${prefix}infochat
  ୧⍤⃝💨 ${prefix}quoted
  ୧⍤⃝💨 ${prefix}listpc
  ୧⍤⃝💨 ${prefix}listgc
  ୧⍤⃝💨 ${prefix}listonline
  `
}

exports.databasemenu = (prefix) => {
	return`
  *DATABASE MENU*
  ୧⍤⃝💨 ${prefix}setcmd
  ୧⍤⃝💨 ${prefix}listcmd
  ୧⍤⃝💨 ${prefix}delcmd
  ୧⍤⃝💨 ${prefix}lockcmd
  ୧⍤⃝💨 ${prefix}addmsg
  ୧⍤⃝💨 ${prefix}listmsg
  ୧⍤⃝💨 ${prefix}getmsg
  ୧⍤⃝💨 ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
  *ANONYMOUS CHAT*
  ୧⍤⃝💨 ${prefix}anonymous
  ୧⍤⃝💨 ${prefix}start
  ୧⍤⃝💨 ${prefix}next
  ୧⍤⃝💨 ${prefix}keluar
  ୧⍤⃝💨 ${prefix}sendkontak
  `
}

exports.islamicmenu = (prefix) => {
	return`
  *ISLAMIC MENU*
  ୧⍤⃝💨 ${prefix}iqra
  ୧⍤⃝💨 ${prefix}hadist
  ୧⍤⃝💨 ${prefix}alquran
  ୧⍤⃝💨 ${prefix}juzamma
  ୧⍤⃝💨 ${prefix}tafsirsurah
  `
}

exports.voicechargermenu = (prefix) => {
	return`
  *VOICE CHANGER*
  ୧⍤⃝💨 ${prefix}bass
  ୧⍤⃝💨 ${prefix}blown
  ୧⍤⃝💨 ${prefix}deep
  ୧⍤⃝💨 ${prefix}earrape
  ୧⍤⃝💨 ${prefix}fast
  ୧⍤⃝💨 ${prefix}fat
  ୧⍤⃝💨 ${prefix}nightcore
  ୧⍤⃝💨 ${prefix}reverse
  ୧⍤⃝💨 ${prefix}robot
  ୧⍤⃝💨 ${prefix}slow
  ୧⍤⃝💨 ${prefix}tupai
  `
}

exports.ownermenu = (prefix) => {
	return`
  *OWNER MENU*
  ୧⍤⃝💨 ${prefix}react
  ୧⍤⃝💨 ${prefix}chat
  ୧⍤⃝💨 ${prefix}join
  ୧⍤⃝💨 ${prefix}leave
  ୧⍤⃝💨 ${prefix}block @user
  ୧⍤⃝💨 ${prefix}unblock @user
  ୧⍤⃝💨 ${prefix}bcgroup 
  ୧⍤⃝💨 ${prefix}bcall 
  ୧⍤⃝💨 ${prefix}setppbot
  ୧⍤⃝💨 ${prefix}setexif
  ୧⍤⃝💨 ${prefix}setmenu 
  ୧⍤⃝💨 ${prefix}setallmenu 
  `
}

//tqto gsh di hps y :) kalau mai tmbhin aja nama kalian!
exports.thanksto = () => {
	return`
  *THANKS TO*
  ୧⍤⃝💨 DikaArdnt
  ୧⍤⃝💨 ZeeoneOfc
  ୧⍤⃝💨 FatihArridho
  ୧⍤⃝💨 Yoga
  ୧⍤⃝💨 Riy
  ୧⍤⃝💨 Deff
  ୧⍤⃝💨 Sanzy
  ୧⍤⃝💨 Nekel
  ୧⍤⃝💨 Bagas Prdn
`
}