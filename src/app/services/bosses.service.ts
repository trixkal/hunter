import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BossesService {
  private bosses: Boss[] = [
    {
      name: 'Broken Vessel',
      descShort: 'Shattered corpse, reanimated by infected parasites.',
      descLong: 'The shape of this creature... I have seen something like it before. More than once, perhaps. It looks a little like the bugs of Hallownest, but not quite the same. Where did these empty little wanderers come from?',
      idleName: 'Idle',
      thirdStageName: 'Empty Shell',
      fourthStageName: 'Stagger',
      health: '525'

    },
    {
      name: 'Brooding Mawlek',
      descShort: 'Ferocious but extremely social creature. Becomes aggressive if not able to mingle with its own kind.',
      descLong: 'I hear this beast crying out sometimes as I prowl the caverns, although I\'ve never actually laid eyes on it. Who or what is it calling for? As far as I can tell, its voice is never answered.',
      idleName: 'Idle',
      thirdStageName: '',
      fourthStageName: '',
      health: '300',
    },
    {
    name: 'Brothers Oro and Mato',
    descShort: 'Brothers of the nail, trained in combat by the Great Nailsage.',
    descLong: 'Gods by toil and nail bound, Brothers sworn to guard the weak, Masters of the sacred ground, Help Us find the God We seek!',
    idleName: 'Idle',
    thirdStageName: '',
    fourthStageName: '',
    health: '2100',
    },
    {
      name: 'Flukemarm',
      descShort: 'An insatiable breeder. Has populated the Waterways with its kind. Its insides double as a nest for young Flukefeys.',
      descLong: 'The desire to breed, to leave behind a memory of ourselves in the shape of a child... it seems to be etched deep into the heart of every living creature. I too have felt the pull of that base instinct.',
      idleName: 'Unprovoked',
      thirdStageName: '',
      fourthStageName: '',
      health: '350',
    },
    {
      name: 'False Knight',
      descShort: 'A maggot driven mad by a strange force. Inhabits a stolen armoured shell.',
      descLong: 'Weak creatures love to steal the strength of others. Their lives are brief and fearful, and they yearn to have the power to dominate those who have dominated them.',
      idleName: 'Stagger',
      thirdStageName: '',
      fourthStageName: '',
      health: '355',
    },
    {
      name: 'Dung Defender',
      descShort: 'Skilled combatant living at the heart of the Waterways. Assails intruders with balls of compacted dung.',
      descLong: 'Fighting for \'honour\', or for \'loyalty\'... you may as well be fighting for dust. If you want to kill, do it for your own sake. That is the nature of a true Hunter.',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: '',
      health: '700',
    },
    {
      name: 'Crystal Guardian',
      descShort: 'Heavyset miner of the Crystal Peak overcome by crystal growth. Can discharge blazing beams of light from its crystallised limbs.',
      descLong: 'How does the world look to this creature, gazing out from within its crystal prison? Does it see only light? Is that what drives it into a frenzy?',
      idleName: 'Idle',
      thirdStageName: 'Unmasked',
      fourthStageName: '',
      health: '280',
    },
    {
      name: 'The Collector',
      descShort: 'Dark figure locked inside the Tower of Love. Preserves Hallownest\'s creatures in glass jars with particular attention given to Grubs.',
      descLong: 'A shadow that sometimes flits through the caverns, making strange noises to itself. I\'ve never seen it clearly so I have no idea what type of creature it is.',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: '',
      health: '750',
    },
    {
      name: 'Great Nailsage Sly',
      descShort: 'Legendary sage of the nail arts and, recently, merchant of some success.',
      descLong: 'agely God of the cunning and bold,Sharpen Our nails and show Us the odds,O greatest of masters, We wish to behold,That one still greater, the God of Gods!',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: '',
      health: '1050',
    },
    {
      name: 'God Tamer',
      descShort: 'Veteran warrior of the Colosseum of Fools. Fights by the side of creatures she has trained.',
      descLong: 'Some hunters train beasts to join them in chasing down prey. I tried it once, but couldn\'t resist the urge to test my companion\'s strength against mine.',
      idleName: 'Beast',
      thirdStageName: 'Tamer',
      fourthStageName: '',
      health: '1050',
    },
    {
      name: 'Troupe Master Grimm',
      descShort: 'Master of the Grimm Troupe.',
      descLong: 'Through dream I travel, at lantern\'s call. To consume the flames of a kingdom\'s fall',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: 'Sleeping',
      health: '1000',
    },
    {
      name: 'Gruz Mother',
      descShort: 'Mature gruzzer that carries its young in its belly. Attacks by hurling its huge body around.',
      descLong: 'Bizarrely, this monster does not lay eggs but instead carries its young inside of its fat stomach. This strange practice seems to exhaust the creature, making it sleepy and vulnerable. Take advantage!',
      idleName: 'Awake',
      thirdStageName: '',
      fourthStageName: '',
      health: '120',
    },
    {
      name: 'Hive Knight',
      descShort: 'Loyal protector of the Hive\'s Queen. Flightless but ferocious in battle.',
      descLong: 'Some creatures are born with duties and loyalties marked indelibly upon their minds. They are strong, but they are also slaves.',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: '',
      health: '920',
    },
    {
      name: 'Hollow Knight',
      descShort: 'Fully grown Vessel, carrying the plague\'s heart within its body.',
      descLong: 'The old King of Hallownest... he must have been desperate to save his crumbling little world. The sacrifices he imposed on others... all for nothing.',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: 'Vessel',
      health: '1250',
    },
    {
      name: 'Hornet Protector',
      descShort: 'Skilled protector of Hallownest\'s ruins. Wields a needle and thread.',
      descLong: 'I have seen this nimble little creature. I thought her prey and pounced at her, but with a flash she stabbed me with her flying stinger and darted away. Could she be... a Hunter?',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: '',
      health: '225',
    },
    {
      name: 'Mantis Lords',
      descShort: 'Leaders of the Mantis tribe and its finest warriors. They bear thin nail-lances and attack with blinding speed.',
      descLong: 'The Mantis tribe and the bugs of old Hallownest had no love for each other. The Mantises outlived their rivals though, and their civilisation still stands.',
      idleName: 'Idle',
      thirdStageName: '',
      fourthStageName: '',
      health: '530',
    },
    {
      name: 'Massive Moss Charger',
      descShort: 'Family of creatures that have learnt to bulk up with moss and live as one.',
      descLong: 'There is strength in numbers, yes, but these creatures never had much strength to begin with. Cut through their trickery!',
      idleName: 'Without Moss',
      thirdStageName: '',
      fourthStageName: '',
      health: '100',
    },
    {
      name: 'Oblobble',
      descShort: 'Larger cousin of the Obble. Pairs with a mate for life and will never leave its side.',
      descLong: 'Having a mate by your side... one that will never leave you until death. Strange. No mate has ever come forth to stay by my side...',
      idleName: '',
      thirdStageName: '',
      fourthStageName: '',
      health: '260',
    },
    {
      name: 'Paintmaster Sheo',
      descShort: 'Skilled and respected master of the nail. Always eager to learn new things.',
      descLong: 'O God inspired, master of arts, Whose works shall eternal endure, Peer beyond Our minds and hearts, Reveal to Us the God most pure!',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: '',
      health: '950',
    },
    {
      name: 'Radiance',
      descShort: 'The light, forgotten.',
      descLong: 'The plague, the infection, the madness that haunts the corpses of Hallownest... the light that screams out from the eyes of this dead Kingdom. What is the source? I suppose mere mortals like myself will never understand.',
      idleName: 'Idle',
      thirdStageName: 'First Stagger',
      fourthStageName: 'Second Stagger',
      health: '1700',
    },
    {
      name: 'Soul Master',
      descShort: 'Head of the Soul Sanctum. Hoarded soul hoping to stave off Hallownest\'s affliction, but eventually became intoxicated by its power.',
      descLong: 'The bugs of Hallownest tried all kinds of tricks and rituals and prayers to rid themselves of the infection. But to no avail! Perhaps the infection came from somewhere deep inside of them that they could not escape.',
      idleName: 'Idle',
      thirdStageName: 'Stagger',
      fourthStageName: '',
      health: '385',
    },
    {
      name: 'Soul Warrior',
      descShort: 'Learned bug, wielding a refined pinblade. Enhances its combat prowess with harvested soul.',
      descLong: 'Where these strange warriors go, whispers follow them. Not only are they skilled with a nail, they can also use some strange power to shift suddenly from place to place. Stay on guard.',
      idleName: 'Idle',
      thirdStageName: '',
      fourthStageName: '',
      health: '200',
    },
    {
      name: 'Traitor Lord',
      descShort: 'Deposed Lord of the Mantis tribe. Embraced the infection and turned against his sisters.',
      descLong: 'I have felt that desire. The desire to take the infection into myself. To become stronger, more powerful... these thoughts haunt my dreams during the darkest times. A false hope, but it can burn so brilliantly in one\'s mind.',
      idleName: 'Idle',
      thirdStageName: '',
      fourthStageName: '',
      health: '800',
    },
    {
      name: 'Watcher Knights',
      descShort: 'Discarded shell of a Watcher Knight, re-animated by a swarm of infected flies.',
      descLong: 'When these silent warriors fall in battle, their bodies split open and strange bugs come flying out. I wonder, what will come flying out of me when I die? Will my hopes and fears drift away into the darkness?',
      idleName: 'Idle',
      thirdStageName: '',
      fourthStageName: '',
      health: '1560',
    },
    {
      name: 'Uumuu',
      descShort: 'Intelligent being that guards the inner chamber of the Teacher\'s Archives.',
      descLong: 'The canyon below us, the one thick with fog and crackling with strange energy... a Hunter can lose their senses down there. Be careful... strange and unnatural things lurk there.',
      idleName: 'Vulnerable',
      thirdStageName: '',
      fourthStageName: '',
      health: '300',
    }
  ];
  constructor() {

    // tslint:disable-next-line: prefer-for-of
    const bossesUpdated: Boss[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.bosses.length; i++) {
      const boss = this.bosses[i];
      boss.hunterJournal = this.updatedFirstImgName(boss.name);
      if (boss.idleName !== '') {
        boss.idleImg = this.updatedIdleImgName(boss.name, boss.idleName);
      }
      if (boss.thirdStageName !== '') {
        boss.thirdStageImg = this.updatedIdleImgName(boss.name, boss.thirdStageName);
      }
      if (boss.fourthStageName !== '') {
        boss.fourthStageImg = this.updatedIdleImgName(boss.name, boss.fourthStageName);
      }
      bossesUpdated.push(boss);
    }
    this.bosses = bossesUpdated;
   }

   updatedFirstImgName(name: string): string {
     name = 'assets/img/B_' + name.split(' ').join('_')  + '.png';
     return name;
  }

  updatedIdleImgName(name: string, idleName: string): string {
    idleName = idleName.split(' ').join('_');
    name = 'assets/img/' + name.split(' ').join('_') + '_' + idleName + '.png';
    return name;
  }
  getBosses() {
    return this.bosses;
  }

  getBoss(idx: number) {
   return this.bosses[idx];
 }

 searchBoss(term: string): Boss[] {
   const bossesArr: Boss[] = [];
   term = term.toLocaleLowerCase();

   for (let aux = 0; aux < this.bosses.length; aux++) {
     const bossAux = this.bosses[aux];
     const name: string = bossAux.name.toLocaleLowerCase();
     if (name.indexOf(term) >= 0) {
      bossAux.idx = aux;
      bossesArr.push(bossAux);
     }
   }
   return bossesArr;
 }

}
export interface Boss {
  name: string;
  descShort: string;
  descLong: string;
  idleName: string;
  thirdStageName: string;
  fourthStageName: string;
  health: string;

  hunterJournal?: string;
  idleImg?: string;
  thirdStageImg?: string;
  fourthStageImg?: string;
  idx?: number;
 }

