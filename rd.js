const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {

        console.log(`----------------`);
      console.log(`Your Bot in  ${client.guilds.size} Servers `);
              console.log(`----------------`);
      console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
              console.log(`----------------`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
    console.log(`----------------`);

});

client.on('ready', () => {
   client.user.setGame(("https://discord.gg/KgW7HSR"),`http://www.twitch.tv/rebel711`);
    
});

         
         client.on('message', message => {
            if (message.content === 'اسامه') {
              
              message.channel.sendFile("cdn.discordapp.com/attachments/416459129524322305/418848380047851524/images_4.png");
               

            }
});

client.on("message", (message) => {
  if (message.content.startsWith(".")) {
    message.channel.send("فديت المنقط");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("كيفكم")) {
    message.channel.send("الحمدلله");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("الو")) {
    message.channel.send("ها");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("برب")) {
    message.channel.send("تيت ارجع من جديد");
  }
})

client.on("message", (message) => {
  if (message.content.startsWith("السلام عليكم")) {
    message.channel.send("وعليكم السلام ورحمة الله وبركاته");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("باك")) {
    message.channel.send("ولكم , نورت ي جميل");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("ريبل")) {
    message.channel.send("عيونه اذا م رد تفضل بالخاص");
  }
});



client.on("message", (message) => {
  if (message.content.startsWith("نروح")) {
    message.channel.send("الله معكم");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("كل")) {
    message.channel.send("م ياكلك  :(");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("دوال")) {
    message.channel.send("روح اشخل ي محترف (؛");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("والله")) {
    message.channel.send("لا لا مستحيل");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("الينينهييهيهينعب")) {
    message.channel.send("العب مفيد للصحة $؛");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("نجي")) {
    message.channel.send("حياكم");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("،")) {
    message.channel.send("يلبى كاتب الفاصلة");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!")) {
    message.channel.send("فديت التعجب");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("حلو")) {
    message.channel.send("آنا حلو");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("بوت")) {
    message.channel.send("يب انا اطلق بوت");
  }
})

client.on("message", (message) => {
  if (message.content.startsWith("؟")) {
    message.channel.send("اطلق استفهام");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("هه")) {
    message.channel.send("اطلق ضحكة , يلبى");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("خخ")) {
    message.channel.send("جعلها دوم");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("سكت")) {
    message.channel.send("ه ه ه  اسككت انت");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("تعال")) {
    message.channel.send("لا م بجي اخاف");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("انا")) {
    message.channel.send("اقلك اص احسن قال انا");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("تحب")) {
    message.channel.send("لا م احب");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("تسوي")) {
    message.channel.send("اك م بسوي انقلع");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("❤️")) {
    message.channel.send("شكلك تحبني ؟");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("😂")) {
    message.channel.send("جعلها دوم");
  }
});



client.on("message", (message) => {
  if (message.content.startsWith("يا4738خي")) {
    message.channel.send("ياخي لا تحتك");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("يلا")) {
    message.channel.send("فلتنطلق");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("صار")) {
    message.channel.send("صادق صار");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("ليه")) {
    message.channel.send("لا تسال اللي م يخصك");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("ليش")) {
    message.channel.send("صدق ليشً؟");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("ها")) {
    message.channel.send("وش تبي ؟");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("انت")) {
    message.channel.send("شكلك تقصد نفسك");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("يب")) {
    message.channel.send(" مؤدب انت كذا");
  }
});

var prefix = ""
client.on('message', message => {
const responses = [
'نعم', 'لا', 'تراني مثلك ؟', 'ابدا', 'ليس كل الوقت', 'احيانا', 'بالتأكيد','نوعا ما'
]
    if(message.content.startsWith(prefix + 'هل')) {
            if(!message.channel.guild) return;
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**لو سمحت اكتب السؤال الذي تريده!**');
            return;
            }
   message.channel.sendMessage(`${responses[Math.floor(Math.random() * responses.length)]}`);
               if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.login(process.env.BOT_TOKEN);
