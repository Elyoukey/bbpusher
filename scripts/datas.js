//Datas for rosters :
var rosters =
[
	{
		name:'amazon',
		rerollcost:'50000',
		apothecary:true,
		players:
		[
			{
			playerType:'Linewoman',
			limit:'16',
			ma:'6',
			st:'3',
			ag:'3',
			av:'7',
			skills:'Dodge',
			cost:50000, 
			normalskills:'G', 
			doubleskills:'ASP'
			},
			{playerType:'Thrower',limit:'2',ma:'6',st:'3',ag:'3',av:'7',skills:'Dodge,Pass',cost:70000, normalskills:'GP', doubleskills:'AS'},
			{playerType:'Catcher',limit:'2',ma:'6',st:'3',ag:'3',av:'7',skills:'Dodge,Catch',cost:70000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Blitzer',limit:'4',ma:'6',st:'3',ag:'3',av:'7',skills:'Dodge,Block',cost:90000, normalskills:'GS', doubleskills:'AP'}
		]
	},
	{
		name:'chaos',
		rerollcost:'60000',
		apothecary:true,
		players:[
			{playerType:'Beastman',limit:'16',ma:'6',st:'3',ag:'3',av:'8',skills:'Horns',cost:60000, normalskills:'GSM', doubleskills:'AP'},
			{playerType:'ChaosWarrior',limit:'4',ma:'5',st:'4',ag:'3',av:'9',skills:'',cost:100000, normalskills:'GSM', doubleskills:'AP'},
			{playerType:'Minotaur',limit:'1',ma:'5',st:'5',ag:'2',av:'8',skills:'Loner,Frenzy,Horns,Mighty Blow,Thick Skull, Wild Animal',cost:150000, normalskills:'SM', doubleskills:'GAP'}
		]
	},
	{
		name:'chaosdwarf',
		rerollcost:'70000',
		apothecary:true,
		players:[
			{playerType:'Hobgoblin',limit:'16',ma:'6',st:'3',ag:'3',av:'7',skills:'',cost:40000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'ChaosDwarfBlocker',limit:'6',ma:'4',st:'3',ag:'2',av:'9',skills:'Block,Tackle,Thick Skull',cost:70000, normalskills:'GS', doubleskills:'APM'},
			{playerType:'BullCentaur',limit:'2',ma:'6',st:'4',ag:'2',av:'9',skills:'Sprint, Sure Feet, Thick Skull',cost:130000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Minotaur',limit:'1',ma:'5',st:'5',ag:'2',av:'8',skills:'Loner,Frenzy,Horns,Mighty Blow,Thick Skull, Wild Animal',cost:150000, normalskills:'S',doubleskills:'GAPM'}
		]
	},
	{
		name:'chaospact',
		rerollcost:'70000',
		apothecary:true,
		players:[
			{playerType:'Marauder',limit:'16',ma:'6',st:'3',ag:'3',av:'8',skills:'',cost:50000, normalskills:'GSPM', doubleskills:'A'},
			{playerType:'GoblinRenegade',limit:'1',ma:'6',st:'2',ag:'3',av:'7',skills:'Animosity, Dodge, Right Stuff, Stunty',cost:40000, normalskills:'AM', doubleskills:'GSP'},
			{playerType:'SkavenRenegade',limit:'1',ma:'7',st:'3',ag:'3',av:'7',skills:'Animosity',cost:50000, normalskills:'GM', doubleskills:'ASP'},
			{playerType:'DarkElfRenegade',limit:'1',ma:'6',st:'3',ag:'4',av:'8',skills:'Animosity',cost:70000, normalskills:'GAM', doubleskills:'SP'},
			{playerType:'ChaosTroll',limit:'1',ma:'4',st:'5',ag:'1',av:'9',skills:'Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration, Throw Team-mate',cost:110000, normalskills:'S', doubleskills:'GAPM'},
			{playerType:'ChaosOgre',limit:'1',ma:'5',st:'5',ag:'2',av:'9',skills:'Loner, Bone-head, Mighty Blow, Thick Skull, Throw Team-mate',cost:140000, normalskills:'S', doubleskills:'GAPM'},
			{playerType:'Minotaur',limit:'1',ma:'5',st:'5',ag:'2',av:'8',skills:'Loner,Frenzy,Horns,Mighty Blow,Thick Skull, Wild Animal',cost:150000, normalskills:'S', doubleskills:'GAPM'}
		]
	},
	{
		name:'darkelf',
		rerollcost:'50000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'6',st:'3',ag:'4',av:'8',skills:'',cost:70000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Runner',limit:'2',ma:'7',st:'3',ag:'4',av:'7',skills:'Dump-Off',cost:80000, normalskills:'GAP', doubleskills:'S'},
			{playerType:'Assassin',limit:'2',ma:'6',st:'3',ag:'4',av:'7',skills:'Stab,Shadowing',cost:90000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Blitzer',limit:'4',ma:'7',st:'3',ag:'4',av:'8',skills:'Block',cost:100000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'WitchElf',limit:'2',ma:'7',st:'3',ag:'4',av:'7',skills:'Dodge,Jump Up,Frenzy',cost:110000, normalskills:'GA', doubleskills:'SP'}
		]
	},
	{
		name:'dwarf',
		rerollcost:'50000',
		apothecary:true,
		players:[
			{playerType:'Blocker',limit:'16',ma:'4',st:'3',ag:'2',av:'9',skills:'Block, Tackle, Thick Skull',cost:70000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Runner',limit:'2',ma:'6',st:'3',ag:'3',av:'8',skills:'Sure Hands, Thick Skull',cost:80000, normalskills:'GP', doubleskills:'AS'},
			{playerType:'Blitzer',limit:'2',ma:'5',st:'3',ag:'3',av:'9',skills:'Block, Thick Skull',cost:80000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'TrollSlayer',limit:'2',ma:'5',st:'3',ag:'2',av:'8',skills:'Block, Dauntless, Frenzy,Thick Skull',cost:90000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Deathroller',limit:'1',ma:'4',st:'7',ag:'1',av:'10',skills:'Loner, Break Tackle, Dirty Player,Juggernaut, Mighty Blow, No Hands, Secret Weapon,Stand Firm',cost:160000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'elf',
		rerollcost:'50000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'6',st:'3',ag:'4',av:'7',skills:'',cost:60000,normalskills:'GA', doubleskills:'SP'},
			{playerType:'Thrower',limit:'2',ma:'6',st:'3',ag:'4',av:'7',skills:'Pass',cost:70000,normalskills:'GAP', doubleskills:'S'},
			{playerType:'Catcher',limit:'4',ma:'8',st:'3',ag:'4',av:'7',skills:'Catch, Nerves of Steel',cost:100000,normalskills:'GA', doubleskills:'SP'},
			{playerType:'Blitzer',limit:'2',ma:'7',st:'3',ag:'4',av:'8',skills:'Block, Side Step',cost:110000,normalskills:'GA', doubleskills: 'SP'}
		]
	},
	{
		name:'goblin',
		rerollcost:'60000',
		apothecary:true,
		players:[
			{playerType:'Goblin',limit:'16',ma:'6',st:'2',ag:'3',av:'7',skills:'Dodge, Right Stuff, Stunty',cost:40000, normalskills:'A', doubleskills:'GSP'},
			{playerType:'Bombardier',limit:'1',ma:'6',st:'2',ag:'3',av:'7',skills:'Bombardier, Dodge, No Hands, Secret Weapon,Stunty',cost:40000, normalskills:'A', doubleskills:'GSP'},
			{playerType:'Pogoer',limit:'1',ma:'7',st:'2',ag:'3',av:'7',skills:'Dodge, Leap, Stunty, Very Long Legs',cost:70000, normalskills:'A', doubleskills:'GSP'},
			{playerType:'Looney',limit:'1',ma:'6',st:'2',ag:'3',av:'7',skills:'Chainsaw, No Hands, Secret Weapon, Stunty',cost:40000, normalskills:'A', doubleskills:'GSP'},
			{playerType:'Fanatic',limit:'1',ma:'3',st:'7',ag:'3',av:'7',skills:'Ball and Chain, No Hands, Secret Weapon, Stunty',cost:70000, normalskills:'S', doubleskills:'GAP'},
			{playerType:'Troll',limit:'2',ma:'4',st:'5',ag:'1',av:'9',skills:'Loner, Always Hungry,Mighty Blow, Really Stupid, Regeneration, Throw Team-Mate',cost:110000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'halfling',
		rerollcost:'50000',
		apothecary:true,
		players:[
			{playerType:'Halfling',limit:'16',ma:'5',st:'2',ag:'3',av:'6',skills:'Dodge, Right Stuff, Stunty',cost:30000, normalskills:'A', doubleskills:'GSP'},
			{playerType:'Treeman',limit:'2',ma:'2',st:'6',ag:'1',av:'10',skills:'Mighty Blow, Stand Firm, Strong Arm, Take Root, Thick Skull, Throw Team-Mate',cost:120000, normalskills: 'S', doubleskills:'GAP'}
		]
	},
	{
		name:'highelf',
		rerollcost:'50000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'6',st:'3',ag:'4',av:'8',skills:'',cost:70000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Thrower',limit:'2',ma:'6',st:'3',ag:'4',av:'8',skills:'Pass, Safe Throw',cost:90000, normalskills:'GAP', doubleskills:'S'},
			{playerType:'Catcher',limit:'4',ma:'8',st:'3',ag:'4',av:'7',skills:'Catch',cost:90000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Blitzer',limit:'2',ma:'7',st:'3',ag:'4',av:'8',skills:'Block',cost:100000, normalskills:'GA', doubleskills:'SP'}
		]
	},                                                                                                                      
	{
		name:'human',
		rerollcost:'50000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'6',st:'3',ag:'3',av:'8',skills:'',cost:50000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'Catcher',limit:'4',ma:'8',st:'2',ag:'3',av:'7',skills:'Catch,Dodge',cost:70000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Thrower',limit:'2',ma:'6',st:'3',ag:'3',av:'8',skills:'Sure Hands,Pass',cost:70000, normalskills:'GP', doubleskills:'AS'},
			{playerType:'Blitzer',limit:'4',ma:'7',st:'3',ag:'3',av:'8',skills:'Block',cost:90000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Ogre',limit:'1',ma:'5',st:'5',ag:'2',av:'9',skills:'Loner, Bone head,Mighty Blow,Thick skull,Throw teammate',cost:140000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'khemri',
		rerollcost:'70000',
		apothecary:false,
		players:[
			{playerType:'Skeleton',limit:'16',ma:'5',st:'3',ag:'2',av:'7',skills:'Regeneration, Thick Skull',cost:40000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'BlitzRa',limit:'2',ma:'6',st:'3',ag:'2',av:'8',skills:'Block, Regeneration',cost:90000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'ThroRa',limit:'2',ma:'6',st:'3',ag:'2',av:'7',skills:'Pass, Sure Hands, Regeneration',cost:70000, normalskills:'GP', doubleskills:'AS'},
			{playerType:'Mummy',limit:'4',ma:'3',st:'5',ag:'1',av:'9',skills:'Decay, Regeneration',cost:100000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'lizardman',
		rerollcost:'60000',
		apothecary:true,
		players:[
			{playerType:'Skink',limit:'16',ma:'8',st:'2',ag:'3',av:'7',skills:'Dodge, Stunty',cost:60000, normalskills:'A', doubleskills:'GSP'},
			{playerType:'Saurus',limit:'6',ma:'6',st:'4',ag:'1',av:'9',skills:'',cost:80000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Kroxigor',limit:'1',ma:'6',st:'5',ag:'1',av:'9',skills:'Loner, Bone-head, Mighty Blow, Prehensile Tail,Thick Skull',cost:140000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'necromantic',
		rerollcost:'70000',
		apothecary:false,
		players:[
			{playerType:'Zombie',limit:'16',ma:'4',st:'3',ag:'2',av:'8',skills:'Regeneration',cost:40000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'Ghoul',limit:'2',ma:'7',st:'3',ag:'3',av:'7',skills:'Dodge',cost:70000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Wight',limit:'2',ma:'6',st:'3',ag:'3',av:'8',skills:'Block, Regeneration',cost:90000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'FleshGolem',limit:'2',ma:'4',st:'4',ag:'2',av:'9',skills:'Regeneration, Stand Firm, Thick Skull',cost:110000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Werewolf',limit:'2',ma:'8',st:'3',ag:'3',av:'8',skills:'Claws, Frenzy, Regeneration',cost:120000, normalskills:'GA', doubleskills:'SP'}
		]
	},
	{                                                                                                                                                      
		name:'norse',
		rerollcost:'60000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'6',st:'3',ag:'3',av:'7',skills:'Block',cost:50000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'Thrower',limit:'2',ma:'6',st:'3',ag:'3',av:'7',skills:'Block, Pass',cost:70000, normalskills:'GP', doubleskills:'AS'},
			{playerType:'Runner',limit:'2',ma:'7',st:'3',ag:'3',av:'7',skills:'Block, Dauntless',cost:90000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Berserker',limit:'2',ma:'6',st:'3',ag:'3',av:'7',skills:'Block, Frenzy, Jump Up',cost:90000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Ulfwerener',limit:'2',ma:'6',st:'4',ag:'2',av:'8',skills:'Frenzy',cost:110000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'SnowTroll',limit:'1',ma:'5',st:'5',ag:'1',av:'8',skills:'Loner, Claws, Disturbing Presence, Frenzy, Wild Animal',cost:140000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'nurgle',
		rerollcost:'70000',
		apothecary:true,
		players:[
			{playerType:'Rotter',limit:'16',ma:'5',st:'3',ag:'3',av:'8',skills:'Decay, Nurgles Rot',cost:40000, normalskills:'GM', doubleskills:'ASP'},
			{playerType:'Pestigor',limit:'4',ma:'6',st:'3',ag:'3',av:'8',skills:'Horns, Nurgles Rot, Regeneration',cost:80000, normalskills:'GSM', doubleskills:'AP'},
			{playerType:'NurgleWarrior',limit:'4',ma:'4',st:'4',ag:'2',av:'9',skills:'Disturbing Presence, Foul Appearance, Nurgles Rot, Regeneration',cost:110000, normalskills:'GSM', doubleskills:'AP'},
			{playerType:'BeastOfNurgle',limit:'1',ma:'4',st:'5',ag:'1',av:'9',skills:'Loner, Disturbing Presence, Foul Appearance, Mighty Blow, Nurgles Rot, Really Stupid, Regeneration, Tentacles',cost:140000, normalskills:'S', doubleskills:'GAPM'}
		]
	},
	{
		name:'ogre',
		rerollcost:'70000',
		apothecary:true,
		players:[
			{playerType:'Snotling',limit:'16',ma:'5',st:'1',ag:'3',av:'5',skills:'Dodge, Right Stuff, Side Step, Stunty, Titchy',cost:20000, normalskills:'A', doubleskills:'GSP'},
			{playerType:'Ogre',limit:'6',ma:'5',st:'5',ag:'2',av:'9',skills:'Bone-head, Mighty Blow, Thick Skull, Throw Team-Mate',cost:140000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'orc',
		rerollcost:'60000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'5',st:'3',ag:'3',av:'9',skills:'',cost:50000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'Goblin',limit:'4',ma:'6',st:'2',ag:'3',av:'7',skills:'Dodge, Right Stuff, Stunty',cost:40000, normalskills:'A', doubleskills:'GSP'},
			{playerType:'Thrower',limit:'2',ma:'5',st:'3',ag:'3',av:'8',skills:'Sure Hands, Pass',cost:70000, normalskills:'GP', doubleskills:'AS'},
			{playerType:'BlackOrcBlocker',limit:'4',ma:'4',st:'4',ag:'2',av:'9',skills:'',cost:80000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Blitzer',limit:'4',ma:'6',st:'3',ag:'3',av:'9',skills:'Block',cost:80000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Troll',limit:'1',ma:'4',st:'5',ag:'1',av:'9',skills:'Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration,Throw Team-Mate',cost:110000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'skaven',
		rerollcost:'60000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'7',st:'3',ag:'3',av:'7',skills:'',cost:50000, normalskills:'G', doubleskills:'ASPM'},
			{playerType:'Thrower',limit:'2',ma:'7',st:'3',ag:'3',av:'7',skills:'Sure Hands, Pass',cost:70000, normalskills:'GP', doubleskills:'ASM'},
			{playerType:'GutterRunner',limit:'4',ma:'9',st:'2',ag:'4',av:'7',skills:'Dodge',cost:80000, normalskills:'GA', doubleskills:'SPM'},
			{playerType:'Blitzer',limit:'2',ma:'7',st:'3',ag:'3',av:'8',skills:'Block',cost:90000, normalskills:'GS', doubleskills:'APM'},
			{playerType:'RatOgre',limit:'1',ma:'6',st:'5',ag:'2',av:'8',skills:'Loner, Frenzy, Mighty Blow,Prehensile Tail, Wild Animal',cost:150000, normalskills:'S', doubleskills:'GAPM'}
		]
	},
	{
		name:'slann',
		rerollcost:'50000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'6',st:'3',ag:'3',av:'8',skills:'Leap, Very Long Legs',cost:60000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'Catcher',limit:'4',ma:'7',st:'2',ag:'4',av:'7',skills:'Diving Catch, Leap, Very Long Legs',cost:80000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Blitzer',limit:'4',ma:'7',st:'3',ag:'3',av:'8',skills:'Diving Tackle, Jump Up, Leap, Very Long Legs',cost:110000, normalskills:'GAS', doubleskills:'P'},
			{playerType:'Kroxigor',limit:'1',ma:'6',st:'5',ag:'1',av:'9',skills:'Loner, Bone-head, Mighty Blow, Prehensile Tail, Thick Skull',cost:140000, normalskills:'S', doubleskills:'GAP'}
		]                                                                                                                                                             
	},
	{
		name:'undead',
		rerollcost:'70000',
		apothecary:false,
		players:[
			{playerType:'Skeleton',limit:'16',ma:'5',st:'3',ag:'2',av:'7',skills:'Regeneration, Thick Skull',cost:40000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'Zombie',limit:'16',ma:'4',st:'3',ag:'2',av:'8',skills:'Regeneration',cost:40000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'Ghoul',limit:'4',ma:'7',st:'3',ag:'3',av:'7',skills:'Dodge',cost:70000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Wight',limit:'2',ma:'6',st:'3',ag:'3',av:'8',skills:'Block, Regeneration',cost:90000, normalskills:'GS', doubleskills:'AP'},
			{playerType:'Mummy',limit:'2',ma:'3',st:'5',ag:'1',av:'9',skills:'Mighty Blow, Regeneration',cost:120000, normalskills:'S', doubleskills:'GAP'}
		]
	},
	{
		name:'underworld',
		rerollcost:'70000',
		apothecary:true,
		players:[
			{playerType:'UnderworldGoblin',limit:'12',ma:'6',st:'2',ag:'3',av:'7',skills:'Right Stuff, Dodge, Stunty',cost:40000, normalskills:'AM', doubleskills:'GSP'},
			{playerType:'SkavenLineman',limit:'16',ma:'7',st:'3',ag:'3',av:'7',skills:'Animosity',cost:50000, normalskills:'GM', doubleskills:'ASP'},
			{playerType:'SkavenThrower',limit:'2',ma:'7',st:'3',ag:'3',av:'7',skills:'Animosity, Sure Hands, Pass',cost:70000, normalskills:'GPM', doubleskills:'AS'},
			{playerType:'SkavenBlitzer',limit:'2',ma:'7',st:'3',ag:'3',av:'8',skills:'Animosity, Block',cost:90000, normalskills:'GSM', doubleskills:'AP'},
			{playerType:'WarpstoneTroll',limit:'1',ma:'4',st:'5',ag:'1',av:'9',skills:'Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration,Throw Team-Mate',cost:110000, normalskills:'SM', doubleskills:'GAP'}
		]
	},
	{
		name:'vampire',
		rerollcost:'70000',
		apothecary:true,
		players:[
			{playerType:'Thrall',limit:'16',ma:'6',st:'3',ag:'3',av:'7',skills:'',cost:40000, normalskills:'G', doubleskills:'ASP'},
			{playerType:'Vampire',limit:'6',ma:'6',st:'4',ag:'4',av:'8',skills:'Blood Lust, Hypnotic Gaze, Regeneration',cost:110000, normalskills:'GAS', doubleskills:'P'}
		]
	},
	{
		name:'woodelf',
		rerollcost:'50000',
		apothecary:true,
		players:[
			{playerType:'Lineman',limit:'16',ma:'7',st:'3',ag:'4',av:'7',skills:'',cost:70000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Thrower',limit:'2',ma:'7',st:'3',ag:'4',av:'7',skills:'Pass',cost:90000, normalskills:'GAP', doubleskills:'S'},
			{playerType:'Catcher',limit:'4',ma:'8',st:'2',ag:'4',av:'7',skills:'Catch, Dodge, Sprint',cost:90000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Wardancer',limit:'2',ma:'8',st:'3',ag:'4',av:'7',skills:'Block, Dodge, Leap',cost:120000, normalskills:'GA', doubleskills:'SP'},
			{playerType:'Treeman',limit:'1',ma:'2',st:'6',ag:'1',av:'10',skills:'Loner, Mighty Blow, Stand Firm, Strong Arm, Take Root, Thick Skull, Throw Team-Mate',cost:120000, normalskills:'S', doubleskills:'GAP'}
		]
	}
]
