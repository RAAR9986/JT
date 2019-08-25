const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'poo') {
    msg.reply('!!!!');
  }
});

client.on('message', msg => {
  if (msg.content === 'هلا'){
    msg.reply('هلاوات');
  }
});

client.on('message', msg => {
  if (msg.content === 'poo'){
    msg.reply('!!!!!');
  }
});

const moment = require('moment');
 
client.on('message',async message => { // كل الحقوق محفوظه لي سرونوا بوت
     if (message.content.startsWith(prefix + 'id')) {

        if (message.author.bot) return
        if (!message.guild) return message.reply('**This Command Just In Servers**')
        message.guild.fetchInvites().then(invs => {
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id)
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0)
          var roles = message.member.roles.map(roles => `**__${roles.name}__ |**`).join(` `)
        let id = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('📋 | User identity info')
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField('• Name :', message.author.username,true)
        .addField('• Tag :', message.author.discriminator,true)
        .addField('• ID :', message.author.id,true)
        .addField('• JoinedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• CreatedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• Total invites :', inviteCount,true)
        .addField('• Roles :', roles)
        .setTimestamp()
        message.channel.sendEmbed(id).then(c => {
            c.react('📋') // F I X M E 夢#3048
                })
            })
        }
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**MD_BOT 

1 $ping
2 $id
3 $clear
4 $bc
5 $ask : البوت يسألك سؤال
6 $giveaway
7 $help : لظهور هاذا الرساله
8 $new : لفتح تكت 
9 $avatar
10 $server
**`);
	   
            message.channel.sendEmbed(help); // رابط السيرفر يعود الى سيرفر CODES .
    }
});

client.on('message' , message => { // كل الحقوق موجوده لي Suron bot
    if(message.content.startsWith(prefix + "ping")) {
let msgping1 = new Date();
    let botping = new Date() - message.createdAt;
    let msgping2 = new Date() - msgping1;
    let pingembed = new Discord.RichEmbed()
.addField(`<:PandaCoolJuice:578820951224090644> | Informations.`,`
API Ping; \`${Math.floor(client.ping)}\`**ms.**
Bot Ping; \`${Math.floor(botping)}\`**ms.**
Message ping; \`${Math.round(msgping2)}\`**ms.**`)
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);
 
       
    return message.channel.send(pingembed); //F I X M E 夢#3048
}
});

////////////////////////////////// اى شخص يمسح الشات لكن لازم برتبه وخاصيه MANGE_MESSAGE
 
client.on('message', function(message) { ///////////////////////// Malicious Codes
    if (message.content == "clear") { ///////////////////////// Malicious Codes
        if (message.member.hasPermission("MANGE_MESSAGE")) {
            message.channel.fetchMessages() ///////////////////////// Malicious Codes
               .then(function(list){
                    message.channel.bulkDelete(list); ///////////////////////// Malicious Codes
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")}) ///////////////////////// Malicious Codes
        }
    }
 
});
 
 
 
 
 
 
 
//////////////// اى شخص يقدر يمسح الشات بدون رتبه
client.on('message', function(message) { ///////////////////////// Malicious Codes
    if (message.content == "-clear") { ///////////////////////// Malicious Codes
        if (message.member.hasPermission("EMBED_LINKS")) {
            message.channel.fetchMessages() ///////////////////////// Malicious Codes
               .then(function(list){
                    message.channel.bulkDelete(list); ///////////////////////// Malicious Codes
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")}) ///////////////////////// Malicious Codes
        }
    }
 
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help `,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "ask")) {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})

client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('💖');
                     setTimeout(() => {
                       let users = m.reactions.get("💖").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Support Team");
        let ticketsStation = message.guild.channels.find("name", "TICKETS.");
        if(!args) {
            return message.channel.send('**المرجو كتآبة موضوع للتذكرة**');
        };
                if(!support) {
                    return message.channel.send('** من فضلك قم بإنشاء رتبة اسمها `Support Team` **');
                };
            if(!ticketsStation) {
                message.guild.createChannel("TICKETS.", "category");
            };
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`Your ticket has been created. [ ${ticket} ]`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**New Ticket.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('Subject', args)
                                .addField('Author', message.author)
                                .addField('Channel', `<#${message.channel.id}>`);
 
                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("أعد الامر ، لديك 20 ثآنية")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {
 
                   
                        const filter = msg => msg.content.startsWith(prefix + 'close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**تم إلغاء العملية**')) .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
                        })
 
 
                    })
 
 
           
    }
});

client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
         
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('BayBot',client.user.avatarURL)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', function(msg) {
    const prefix = '$'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => { //////////////////////////// Malicious Codes , Galal
    var prefix = '$'
    if(!message.channel.guild) return; //////////////////////////// Malicious Codes , Galal
let args = message.content.split(' ').slice(1).join(' '); //////////////////////////// Malicious Codes , Galal
if (message.content.startsWith(prefix + 'Admin')){ //////////////////////////// Malicious Codes , Galal
if (message.author.id !== 'الايدى حقك') return message.reply(`**__Sorry Pro u Dont <@الايدى حقك>__**`) //////////////////////////// Malicious Codes , Galal
var Embed = new Discord.RichEmbed() //////////////////////////// Malicious Codes , Galal
.setDescription(`
 
**
 Done Send For  »  ${client.users.size} Members  
 
Guild Servers  »   ${client.guilds.size}
 
ping in BroadCast  »  ${Date.now() - message.createdTimestamp}
 
# Galal / Malicious Codes
**
`)
 
.addField(`Galal , Malicious Codes !`) //////////////////////////// Malicious Codes , Galal
.setColor('RANDOM')
message.channel.sendEmbed(Embed)
client.users.forEach(m =>{
m.sendMessage(`
**سلام عليكم المرسل   :   رساله من صاحب البوت **
 
${args}
 
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
تحياتى : <@525228761076072448>
`)
console.log(`Done Send For  : ${client.users.size}`) //////////////////////////// Malicious Codes , Galal
})
} //////////////////////////// Malicious Codes , Galal
});

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));
 
client.on('reconnecting', () => console.log('I am reconnecting now!'));
 
client.on('message', async msg => { // eslint disable line
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
 
    if (msg.content.startsWith(`${prefix}play`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}play command in ${msg.guild.name}`);
 
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'I\'m sorry but you need to be in a voice channel to play music!'
              }
            ]
          }
        });
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "❌ Error",
                    value: 'I cannot connect to your voice channel, make sure I have the proper permissions!'
                  }
                ]
              }
            });
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "❌ Error",
                    value: 'I cannot speak to your voice channel, make sure I have the proper permissions!'
                  }
                ]
              }
            });
        }
       
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true) // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "✅ Added playlist",
                    value: `Playlist: **${playlist.title}** has been added to the queue!`
                  }
                ]
              }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    msg.channel.send({embed: {
                        color: 15158332,
                        fields: [{
                            name: "📋 Song selection",
                            value: `${videos.map(video2 => `\`${++index}\` **-** ${video2.title}`).join('\n')}`
                          },
                          {
                              name: "You have 10 seconds!",
                              value: "Provide a value to select on of the search results ranging from 1-10."
                          }
                        ]
                      }
                    }).then(message =>{message.delete(20000)})
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send({embed: {
                            color: 15158332,
                            fields: [{
                                name: "❌ Error",
                                value: 'No or invalid value entered, cancelling video selection...'
                              }
                            ]
                          }
                        }).then(message =>{message.delete(5000)})
                    }
                    const videoIndex = (response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send({embed: {
                        color: 15158332,
                        fields: [{
                            name: "❌ Error",
                            value: 'I could not obtain any search results.'
                          }
                        ]
                      }
                    }).then(message =>{message.delete(5000)})
                }
            }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (msg.content.startsWith(`${prefix}skip`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}skip command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.connection.dispatcher.end();
        return undefined;
    } else if (msg.content.startsWith(`${prefix}stop`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}stop command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could stop for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
    } else if (msg.content.startsWith(`${prefix}volume`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}volume command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!args[1]) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🔊 Volume",
                value: `The current volume is: **${serverQueue.volume}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🔊 Volume",
                value: `I set the volume to: **${args[1]}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    } else if (msg.content.startsWith(`${prefix}np`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}np command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🎵 Now playing",
                value: `**${serverQueue.songs[0].title}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    } else if (msg.content.startsWith(`${prefix}queue`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}queue command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "📋 Song queue",
                value: `${serverQueue.songs.map(song => `**- ${song.title}**`).join('\n')}`
              },
              {
                  name: "🎵 Now playing",
                  value: `**${serverQueue.songs[0].title}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        } else if(msg.content.startsWith(`${prefix}help`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}help command in ${msg.guild.name}`);
 
        msg.channel.send('Please check your direct messages :inbox_tray:').then(message =>{message.delete(5000)})
 
        msg.react('✅');
 
        msg.author.send({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Bot's commands:",
                value: `**${prefix}help** - This message!\n\
**${prefix}play** - Play a song from YouTube.\n\
**${prefix}skip** - Skip a song.\n\
**${prefix}stop** - Stops the music.\n\
**${prefix}volume** - Change the volume of the bot.\n\
**${prefix}np** - The song that now playing.\n\
**${prefix}queue** - See the queue of songs.\n\
**${prefix}pause** - Pause the music.\n\
**${prefix}resume** - Resume the music.`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Misaka"
            }
          }
        });
    } else if (msg.content.startsWith(`${prefix}pause`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}pause command in ${msg.guild.name}`);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "⏯️ Pause",
                value: 'Paused the music for you!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        }
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing.'
              }
            ]
          }
        }).then(message =>{message.delete(2000)})
    } else if (msg.content.startsWith(`${prefix}resume`)) {
        console.log(`${msg.author.tag} has been used the ${prefix}resume command in ${msg.guild.name}`);
 
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing =  true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "⏯️ Resume",
                    value: 'Resumed the music for you!'
                  }
                ]
              }
            }).then(message =>{message.delete(5000)})
        }
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing or something is already playing.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    }
 
    return undefined;
});
 
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
        const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(msg.guild.id, queueConstruct);
 
            queueConstruct.songs.push(song);
 
            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`I could not join the voice channel: ${error}`);
                queue.delete(msg.guild.id);
                return msg.channel.send({embed: {
                    color: 15158332,
                    fields: [{
                        name: "❌ Error",
                        value: `I could not join the voice channel: ${error}`
                      }
                    ]
                  }
                });
            }
        } else {
            serverQueue.songs.push(song);
            if (playlist) return undefined;
            else return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "✅ Added song",
                    value: `**${song.title}** has been added to the queue!`
                  }
                ]
              }
            }).then(message =>{message.delete(5000)})
        }
        return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Song ended.');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.log(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send({embed: {
        color: 15158332,
        fields: [{
            name: "✅ Start playing",
            value: `Start playing: **${song.title}**`
          }
        ]
      }
    }).then(message =>{message.delete(5000)})
}

bot.on("message", msg => {
	let prefix = "!";
	
	console.log(0)
	if(!msg.content.startsWith(prefix)) return;
	
	//console.log(0.1)
	//if(msg.author.id != "Your ID") return;
	//Only use the above for testing as only the person with that ID can use the bot.
	
	console.log("help command")
	if (msg.content.startsWith(prefix + "help")) {
		msg.reply("Here are my commands: !help,")
	}
	
	let userData = XP[msg.author.id];
	if (!userData) userData = {XP: 0, level: 0};
	
	let userXP = XP[msg.author.id] ? XP[msg.author.id].XP : 0;
	let curLevel = Math.floor(0.1 * Math.sqrt(userXP));
	if (curLevel > userData.level) {
		userData.level = curLevel;
		msg.reply(`You have lvled ^ to lvl **${curLevel}**!`);
	}
	
	console.log("level")
	if (msg.content.startsWith(prefix + "level")) {
		msg.reply(`You are lvl ${userData.level}, with ${userData.XP} XP Right Now.`);
	}
	
	if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0}
	
	
	
	console.log("Example")
	if (msg.content.startsWith(prefix + "killExample")) {
		userData.XP += 10
		msg.channel.sendMessage(`${msg.author} has killed an Example!`)
	}
	
	console.log(XP)
	fs.writeFile('./XP.json', JSON.stringify(XP), console.error);
	
});








client.login(process.env.BOT_TOKEN);
