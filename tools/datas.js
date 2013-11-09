//Datas for rosters :
/*
	[
		'rostername',
		'rerollcost',boolApothecary,
		[
			['playerType1','limit','ma','st','ag','av','skills','cost'],
			['playerType2','limit','ma','st','ag','av','skills','cost']
		]
	]
*/
var rosters =
[
	[
		'AMAZON',
		'50000',true,
		[
			['Linewoman','16','6','3','3','7','Dodge',50000, 'G', 'ASP'],
			['Thrower','2','6','3','3','7','Dodge,Pass',70000, 'GP', 'AS'],
			['Catcher','2','6','3','3','7','Dodge,Catch',70000, 'GA', 'SP'],
			['Blitzer','4','6','3','3','7','Dodge,Block',90000, 'GS', 'AP']
		]
	],
	[
		'CHAOS',
		'60000',true,
		[
			['Beastman','16','6','3','3','8','Horns',60000, 'GSM', 'AP'],
			['Chaos Warrior','4','5','4','3','9','',100000, 'GSM', 'AP'],
			['Minotaur','1','5','5','2','8','Loner,Frenzy,Horns,Mighty Blow,Thick Skull, Wild Animal',150000, 'SM', 'GAP']
		]
	],
    [
		'CHAOS DWARF',
		'70000',true,
		[
			['Hobgoblin','16','6','3','3','7','',40000, 'G', 'ASP'],
			['Chaos Dwarf','6','4','3','2','9','Block,Tackle,Thick Skull',70000, 'GS', 'APM'],
			['Bull Centaur','2','6','4','2','9','Sprint, Sure Feet, Thick Skull',130000, 'GS', 'AP'],
			['Minotaur','1','5','5','2','8','Loner,Frenzy,Horns,Mighty Blow,Thick Skull, Wild Animal',150000, 'S', 'GAPM']
		]
	],
    [
		'CHAOS PACT',
		'70000',true,
		[
			['Marauder','16','6','3','3','8','',50000, 'GSPM', 'A'],
			['Goblin Renegade','1','6','2','3','7','Animosity, Dodge, Right Stuff, Stunty',40000, 'AM', 'GSP'],
			['Skaven Renegade','1','7','3','3','7','Animosity',50000, 'GM', 'ASP'],
			['Dark Elf Renegade','1','6','3','4','8','Animosity',70000, 'GAM', 'SP'],
			['Chaos Troll','1','4','5','1','9','Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration, Throw Team-mate',110000, 'S', 'GAPM'],
			['Chaos Ogre','1','5','5','2','9','Loner, Bone-head, Mighty Blow, Thick Skull, Throw Team-mate',140000, 'S', 'GAPM'],
			['Minotaur','1','5','5','2','8','Loner,Frenzy,Horns,Mighty Blow,Thick Skull, Wild Animal',150000, 'S', 'GAPM']
		]
	],
    [
		'DARK ELF',
		'50000',true,
		[
			['Lineman','16','6','3','4','8','',70000, 'GA', 'SP'],
			['Runner','2','7','3','4','7','Dump-Off',80000, 'GAP', 'S'],
			['Assassin','2','6','3','4','7','Stab,Shadowing',90000, 'GA', 'SP'],
			['Blitzer','4','7','3','4','8','Block',100000, 'GA', 'SP'],
			['Witch Elf','2','7','3','4','7','Dodge,Jump Up,Frenzy',110000, 'GA', 'SP']
		]
	],
    [
		'DWARF',
		'40000',true,
		[
			['Blocker','16','4','3','2','9','Block, Tackle, Thick Skull',70000, 'GS', 'AP'],
			['Runner','2','6','3','3','8','Sure Hands, Thick Skull',80000, 'GP', 'AS'],
			['Blitzer','2','5','3','3','9','Block, Thick Skull',80000, 'GS', 'AP'],
			['Troll Slayer','2','5','3','2','8','Block, Dauntless, Frenzy,Thick Skull',90000, 'GS', 'AP'],
			['Deathroller','1','4','7','1','10','Break Tackle, Dirty Player,Juggernaut, Mighty Blow,No Hands, Secret Weapon,Stand Firm',160000, 'S', 'GAP']
		]
	],
    [
		'ELF',
		'50000',true,
		[
			['Lineman','16','6','3','4','7','',60000,'GA', 'SP'],
			['Thrower','2','6','3','4','7','Pass',70000,'GAP', 'S'],
			['Catcher','4','8','3','4','7','Catch, Nerves of Steel',100000,'GA', 'SP'],
			['Blitzer','2','7','3','4','8','Block, Side Step',110000,'GA', 'SP']
		]
	],
    [
		'GOBLIN',
		'60000',true,
		[
			['Goblin','16','6','2','3','7','Dodge, Right Stuff, Stunty',40000, 'A', 'GSP'],
			['Bombardier','1','6','2','3','7','Bombardier, Dodge, No Hands, Secret Weapon,Stunty',40000, 'A', 'GSP'],
			['Pogoer','1','7','2','3','7','Dirty Player, Dodge, Leap,Secret Weapon, Stunty, Very Long Legs',40000, 'A', 'GSP'],
			['Looney','1','6','2','3','7','Chainsaw, No Hands, Secret Weapon, Stunty',40000, 'A', 'GSP'],
			['Fanatic','1','3','7','3','7','Ball and Chain, No Hands,Secret Weapon, Stunty',70000, 'S', 'GAP'],
			['Troll','2','4','5','1','9','Loner, Always Hungry,Mighty Blow, Really Stupid,Regeneration, Throw Team-Mate',110000, 'S', 'GAP']
		]
	],
    [
		'HALFLING',
		'60000',true,
		[
			['Halfling','16','5','2','3','6','Dodge, Right Stuff, Stunty',30000, 'A', 'GSP'],
			['Treeman','2','2','6','1','10','Loner, Mighty Blow, Stand Firm, Strong Arm, Take Root, Thick Skull, Throw Team-Mate',120000, 'S', 'GAP']
		]
	],
    [
		'HIGH ELF',
		'50000',true,
		[
			['Lineman','16','6','3','4','8','',70000,'GA', 'SP'],
			['Thrower','2','6','3','4','8','Pass, Safe Throw',90000,'GAP', 'S'],
			['Catcher','4','8','3','4','7','Catch',90000,'GA', 'SP'],
			['Blitzer','2','7','3','4','8','Block',100000,'GA', 'SP']
		]
	],
	[
		'HUMAN',
		'50000',true,
		[
			['Lineman','16','6','3','3','8','',50000, 'G', 'ASP'],
			['Catcher','4','8','2','3','7','Catch,Dodge',70000, 'GA', 'SP'],
			['Thrower','2','6','3','3','8','Sure Hands,Pass',70000, 'GP', 'AS'],
			['Blitzer','4','7','3','3','8','Block',90000, 'GS', 'AP'],
			['Ogre','1','5','5','2','9','Loner, Bone head,Mighty Blow,Thick skull,Throw teammate',140000, 'S', 'GAP']
		]
	],
	[
		'KHEMRI',
		'70000',false,
		[
			['Skeleton','16','5','3','2','7','Regeneration',30000, 'G', 'ASP'],
			['Blitz-Ra','2','6','3','2','8','Block, Regeneration',90000, 'GS', 'AP'],
			['Thro-Ra','2','6','3','2','8','Pass, Sure Hands, Regeneration',70000, 'GP', 'AS'],
			['Mummy','4','3','5','1','9','Mighty Blow, Regeneration',110000, 'S', 'GAP']
		]
	],
	[
		'LIZARDMAN',
		'60000',true,
		[
			['Skink','16','8','2','3','7','Dodge, Stunty',60000, 'A', 'GSP'],
			['Saurus','6','6','4','1','9','',80000, 'GS', 'AP'],
			['Kroxigor','1','6','5','1','9','Loner, Bone-head, Mighty Blow, Prehensile Tail,Thick Skull',140000, 'S', 'GAP']
		]
	],
	[
		'NECROMANTIC',
		'70000',false,
		[
			['Zombie','16','4','3','2','8','Regeneration',40000, 'G', 'ASP'],
			['Ghoul','2','7','3','3','7','Dodge',70000, 'GA', 'SP'],
			['Wight','2','6','3','3','8','Block, Regeneration',90000, 'GS', 'AP'],
			['Flesh Golem','2','4','4','2','9','Regeneration, Stand Firm, Thick Skull',110000, 'GS', 'AP'],
			['Werewolf','2','8','3','3','8','Claws, Frenzy, Regeneration',120000, 'GA', 'SP']
		]
	],
	[
		'NORSE',
		'60000',true,
		[
			['Lineman','16','6','3','3','7','Block',50000, 'G', 'ASP'],
			['Thrower','2','6','3','3','7','Block, Pass',70000, 'GP', 'AS'],
			['Runner','2','7','3','3','7','Block, Dauntless',90000, 'GA', 'SP'],
			['Berserker','2','6','3','3','7','Block, Frenzy, Jump Up',90000, 'GS', 'AP'],
			['Ulfwerener','2','6','4','2','8','Frenzy',110000, 'GS', 'AP'],
            ['Snow Troll','1','5','5','1','8','Loner, Claws, Disturbing Presence, Frenzy, Wild Animal',140000, 'S', 'GAP']
		]
	],
	[
		'NURGLE',
		'70000',true,
		[
			['Rotter','16','5','3','3','8','Decay, Nurgles Rot',40000, 'GM', 'ASP'],
			['Pestigor','4','6','3','3','8','Horns, Nurgles Rot, Regeneration',80000, 'GSM', 'AP'],
			['Nurgle Warrior','4','4','4','2','9','Disturbing Presence, Foul Appearance, Nurgles Rot, Regeneration',110000, 'GSM', 'AP'],
			['Beast of Nurgle','1','4','5','1','9','Loner, Disturbing Presence, Foul Appearance, Mighty Blow, Nurgles Rot, Really Stupid, Regeneration, Tentacles',140000, 'S', 'GAPM']
		]
	],
    [
		'OGRE',
		'70000',true,
		[
			['Snotling','16','5','1','3','5','Dodge, Right Stuff, Side Step, Stunty, Titchy',20000, 'A', 'GSP'],
			['Ogre','6','5','5','2','9','Bone-head, Mighty Blow, Thick Skull, Throw Team-Mate',140000, 'S', 'GAP']
		]
	],
    [
		'ORC',
		'60000',true,
		[
			['Lineman','16','5','3','3','9','',50000, 'G', 'ASP'],
			['Goblin','4','6','2','3','7','Dodge, Right Stuff, Stunty',40000, 'A', 'GSP'],
			['Thrower','2','5','3','3','8','Sure Hands, Pass',70000, 'GP', 'AS'],
			['Black Orc','4','4','4','2','9','',80000, 'GS', 'AP'],
			['Blitzer','4','6','3','3','9','Block',80000, 'GS', 'AP'],
			['Troll','1','4','5','1','9','Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration,Throw Team-Mate',110000, 'S', 'GAP']
		]
	],
    [
		'SKAVEN',
		'60000',true,
		[
			['Lineman','16','7','3','3','7','',50000, 'G', 'ASPM'],
			['Thrower','2','7','3','3','7','Sure Hands, Pass',70000, 'GP', 'ASM'],
			['Gutter Runner','4','9','2','4','7','Dodge',80000, 'GA', 'SPM'],
			['Blitzer','2','7','3','3','8','Block',90000, 'GS', 'APM'],
			['Rat Ogre','1','6','5','2','8','Loner, Frenzy, Mighty Blow,Prehensile Tail, Wild Animal',160000, 'S', 'GAPM']
		]
	],
    [
		'SLANN',
		'50000',true,
		[
			['Lineman','16','6','3','3','8','Leap, Very Long Legs',60000, 'G', 'ASP'],
			['Catcher','4','7','2','4','7','Diving Catch, Leap, Very Long Legs',80000, 'GA', 'SP'],
			['Blitzer','4','7','3','3','8','Diving Tackle, Jump Up, Leap, Very Long Legs',110000, 'GAS', 'P'],
			['Kroxigor','1','6','5','1','9','Loner, Bone-head, Mighty Blow, Prehensile Tail, Thick Skull',140000, 'S', 'GAP']
		]
	],
    [
		'UNDEAD',
		'70000',false,
		[
			['Skeleton','16','5','3','2','7','Regeneration',30000, 'G', 'ASP'],
			['Zombie','16','4','3','2','8','Regeneration',40000, 'G', 'ASP'],
			['Ghoul','4','7','3','3','7','Dodge',70000, 'GA', 'SP'],
			['Wight','2','6','3','3','8','Block, Regeneration',90000, 'GS', 'AP'],
			['Mummy','2','3','5','1','9','Mighty Blow, Regeneration',110000, 'S', 'GAP']
		]
	],
    [
		'UNDERWORLD',
		'70000',true,
		[
			['Underworld Goblin','12','6','2','3','7','Right Stuff, Dodge, Stunty',40000, 'AM', 'GSP'],
            ['Skaven Lineman','16','7','3','3','7','Animosity',50000, 'GM', 'ASP'],
			['Skaven Thrower','2','7','3','3','7','Animosity, Sure Hands, Pass',70000, 'GPM', 'AS'],
			['Skaven Blitzer','2','7','3','3','8','Animosity, Block',90000, 'GSM', 'AP'],
			['Warpstone Troll','1','4','5','1','9','Loner, Always Hungry, Mighty Blow, Really Stupid, Regeneration,Throw Team-Mate',110000, 'SM', 'GAP']
		]
	],
    [
		'VAMPIRE',
		'70000',true,
		[
			['Thrall','16','6','3','3','7','',40000, 'G', 'ASP'],
			['Vampire','6','6','4','4','8','Blood Lust, Hypnotic Gaze, Regeneration',110000, 'GAS', 'P']
		]
	],
    [
		'WOOD ELF',
		'50000',true,
		[
			['Lineman','16','7','3','4','7','',70000, 'GA', 'SP'],
			['Thrower','2','7','3','4','7','Pass',90000, 'GAP', 'S'],
			['Catcher','4','9','2','4','7','Catch, Dodge',90000, 'GA', 'SP'],
			['Wardancer','2','8','3','4','7','Block, Dodge, Leap',120000, 'GA', 'SP'],
            ['Treeman','1','2','6','1','10','Loner, Mighty Blow, Stand Firm, Strong Arm, Take Root, Thick Skull, Throw Team-Mate',120000, 'S', 'GAP']
		]
	]
]
