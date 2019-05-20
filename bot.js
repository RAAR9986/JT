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
            .setDescription(`**HI_BOT 

1 $ping
2 $id
3 $clear
4 $bc
5 ask : البوت يسألك سؤال
6 $giveaway
7 $help : لظهور هاذا الرساله
8 $new : لفتح تكت        
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
client.user.setGame(`$help by Power | باور#0669`,"http://twitch.tv/Death Shop")
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

client.on('message', async message => {
   
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
   
   //////////////////////mal ahmed ///////////////mal codes
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
      //////////////////////mal ahmed ///////////////mal codes
    let args = message.content.split(" ").slice(1);
      //////////////////////mal ahmed ///////////////mal codes
    if (command == "warn") {
      //////////////////////mal ahmed ///////////////mal codes
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
              //////////////////////mal ahmed ///////////////mal codes
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
   
    if (message.mentions.users.size < 1) return message.reply("**???? ???**");
    if(!reason) return message.reply ("**???? ??? ?????**");
   
      //////////////////////mal ahmed ///////////////mal codes
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };
      //////////////////////mal ahmed ///////////////mal codes
    warns[user.id].warns++;
   
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });
   
      //////////////////////mal ahmed ///////////////mal codes
    const banembed = new Discord.RichEmbed()
    .setAuthor(`WARNED!`, user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     client.channels.find('name', 'log').send({
      embed : banembed
    })
      //////////////////////mal ahmed ///////////////mal codes
      if(warns[user.id].warns == 2){ //??? ???????? ??????
      let muterole = message.guild.roles.find(`name`, "Muted");
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions:[]
          })   //////////////////////mal ahmed ///////////////mal codes
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }   //////////////////////mal ahmed ///////////////mal codes
     
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("**??? ???? ?????? ?????**:x: ") .then(m => m.delete(5000));
        //////////////////////mal ahmed ///////////////mal codes
      let mutetime = "60s";
      await(tomute.addRole(muterole.id));
      message.channel.send(`<@${user.id}> has been temporarily muted`);
   
      setTimeout(async function(){
      await(tomute.removeRole(muterole.id));
        message.reply(`<@${user.id}> has been unmuted.`)
      }, ms(mutetime))
    }   //////////////////////mal ahmed ///////////////mal codes
    if(warns[user.id].warns == 3){  //??? ???????? ??????
      message.guild.member(user).ban(reason);
      message.reply(`<@${user.id}> has been banned.`)
    }   //////////////////////mal ahmed ///////////////mal codes
   
  }
  }   //////////////////////mal ahmed ///////////////mal codes
  );   //////////////////////mal ahmed ///////////////mal codes















client.login(process.env.BOT_TOKEN);
