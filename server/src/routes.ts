import { MessageEmbed, WebhookClient } from 'discord.js';
import { Router } from 'express';

const routes = Router();

const webhookClient = new WebhookClient({
  url: `WEBHOOK_CLIENT_URL_HERE`
});

const passwords = [
  'ningguangningguang',
  '13',
  '12',
  '1280',
  'sensanhyakujuni',
  'sim',
  '8',
  'II',
  '273'
]
const fases = [
  '/gAWluizyEQ',
  '/HsJCZBfTTk',
  '/YVNstGWeYY',
  '/QQMaTLJGWV',
  '/jkmejlnIfX',
  '/XuJvBdsHsE',
  '/xAmJhilvRC',
  '/wtRywNUnwP',
  '/xEILtlOpgl'
]
const hints = [
  'Uma DEUSA nasceu, oremos por ela, que dia é hoje?',
  'Neste dia não tem nada relacionado ao azar ou sorte, mas, sim, a chance de recomeços',
  'Passo por 1, passei por 483, matei 117, passarei por 119... em quantos dias?',
  'Hoje, está em paz, mas seus dias foram de glória, em qualquer dia',
  'Best waifu?',
  'Best husbando?',
  'The Start After Finish? TSAF',
  '01100011 01101111 01110000 01111001 01110000 01100001 01110011 01110100 01100001',
  'Minha deusa, querida deusa, diga-me suas dimensões'
]
const passwordsHints = [
  '26/08',
  '13',
  '176',
  'aniday',
  'ningguang',
  'zhongli',
  'tbate',
  '01100011 01101111 01110000 01111001 01110000 01100001 01110011 01110100 01100001',
  '220x220'
]

routes.post('/password/valid', (req, res) => {
  const {
    password,
    fase,
    user
  } = req.body;
  
  try {

    if(passwords.indexOf(password)===-1||fases.indexOf(fase)===-1) {
      const embed = new MessageEmbed()
        .setTitle(`${user} errou a resposta da fase ${fases.indexOf(fase)+1} !!! hihihiihihi`)
        .setColor('RED');

      webhookClient.send({
        embeds: [embed]
      });

      return res.status(200).json({ message: 'W R O N G ! ! !', code: 2 });
    }

    if(passwords.indexOf(password)===fases.indexOf(fase)) {
      const embed = new MessageEmbed()
        .setTitle(`${user} foi para a fase ${fases.indexOf(fase)+2} !!!`)
        .setColor('BLURPLE');

      webhookClient.send({
        embeds: [embed]
      });

      return res.status(200).json({ message: 'Mizeravi acertou, vá pra próxima fase!', code: 1, hint: hints[passwords.indexOf(password)] });
    }
    
    const embed = new MessageEmbed()
      .setTitle(`${user} errou a resposta da fase ${fases.indexOf(fase)+1} !!! hihihiihihi`)
      .setColor('RED');

    webhookClient.send({
      embeds: [embed]
    });
    
    return res.status(200).json({ message: 'W R O N G ! ! !', code: 2 });

  } catch(err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

routes.post('/password/final/valid', (req, res) => {
  const {
    password,
    user
  } = req.body;
  
  try {

    let invalidPassword = false;
    passwordsHints.map((p, i) => {
      if(p.toLowerCase()!==password[i].toLowerCase()) {
        invalidPassword = true;
        return;
      }
    });

    if(invalidPassword) {      
      const embed = new MessageEmbed()
        .setTitle(`${user} errou a resposta da penultima fase !!! hihihiihihi`)
        .setColor('RED');
      
      webhookClient.send({
        embeds: [embed]
      });

      return res.status(200).json({ message: 'W R O N G ! ! !', code: 2 });
    }

    const embed = new MessageEmbed()
      .setTitle(`${user} chegou na última FASE!!!`)
      .setColor('AQUA');

    webhookClient.send({
      embeds: [embed]
    });

    return res.status(200).json({ message: 'CONGRATS', code: 1 });

  } catch(err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

routes.post('/user/started', (req, res) => {
  const {
    user
  } = req.body;

  try {

    const embed = new MessageEmbed()
      .setTitle(`${user} iniciou o ENIGMA!!!`)
      .setColor('GREEN');

    webhookClient.send({
      embeds: [embed]
    });

    return res.status(200).json({ code: 1 });

  } catch(err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

export { routes }