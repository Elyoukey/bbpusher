/******************************************************************************
  _________ __                 __  .__                
 /   _____//  |______ ________/  |_|__| ____    ____  
 \_____  \\   __\__  \\_  __ \   __\  |/    \  / ___\ 
 /        \|  |  / __ \|  | \/|  | |  |   |  \/ /_/  >
/_______  /|__| (____  /__|   |__| |__|___|  /\___  / 
        \/           \/                    \//_____/  
  _____                    __  .__                      
_/ ____\_ __  ____   _____/  |_|__| ____   ____   ______
\   __\  |  \/    \_/ ___\   __\  |/  _ \ /    \ /  ___/
 |  | |  |  /   |  \  \___|  | |  (  <_> )   |  \\___ \ 
 |__| |____/|___|  /\___  >__| |__|\____/|___|  /____  >
                 \/     \/                    \/     \/ 

******************************************************************************/
$(function() {
	//Populate Roster select
	for(i=0;i<rosters.length;i++) $('.rosterList').append('<option value="'+i+'">'+rosters[i].name+'</option>');
	
	$('.square,.reserve,.ko,.dead').click(function(e){
			$(this).prepend($('.selected-player'));
			
			if($('#ball.active').length>0)
			{
				$(this).append($('#ball.active'));
			//$('#ball.active').removeClass('active');
			}
	});
	
	$('#ball').click( function(){
		$(this).toggleClass('active');
		if($('.selected-player').length>0)
		{
			$('.selected-player').removeClass('selected-player');
		}
		
	});
	
	$('body').click(bbpusher_save);
	bbpusher_load();
	window.scrollTo(0,300);
	
});

/* initialization*/
function initiateInfobox()
{
	$('.player').click( function(e) {
		$(this).children('.info').toggle();
	    });
}

/*
DOM attributes created for the application:
*/

/******************************************************************************
  ___ ___                    .___.__           ________                              __   
 /   |   \_____    ____    __| _/|  |   ____   \______ \  __ __  ____   ____  __ ___/  |_ 
/    ~    \__  \  /    \  / __ | |  | _/ __ \   |    |  \|  |  \/ ___\ /  _ \|  |  \   __\
\    Y    // __ \|   |  \/ /_/ | |  |_\  ___/   |    `   \  |  / /_/  >  <_> )  |  /|  |  
 \___|_  /(____  /___|  /\____ | |____/\___  > /_______  /____/\___  / \____/|____/ |__|  
       \/      \/     \/      \/           \/          \/     /_____/                     
******************************************************************************/
function changeroster(bench,selectelement)
{
	color = 'R';
	if(bench.attr('id')=='benchB')color = 'B';
	
	bench.empty();
	$('#grid .'+color).remove();//remove all other players from pitch
	
	i=$(selectelement).val();
	players=rosters[i].players;
	for(j=players.length-1;j>=0;j--)
	{
		for(k=0;k<rosters[i].players[j].limit;k++)
		{
			template = '<div id="Pcolor'+j+'-'+k+'" class="player up color">'+$('#playertemplate').html()+'</div>';
			
			template = template.replace(/roster/g,rosters[i].name);
			template = template.replace(/playerType/g,rosters[i].players[j].playerType);
			template = template.replace(/playerNumber/g,(k+1));
			template = template.replace(/color/g,color);
			template = template.replace('{ma}',rosters[i].players[j].ma);
			template = template.replace('{st}',rosters[i].players[j].st);
			template = template.replace('{ag}',rosters[i].players[j].ag);
			template = template.replace('{av}',rosters[i].players[j].av);
			template = template.replace('{cost}',(rosters[i].players[j].cost/1000)+',000');
			template = template.replace('{skills}',rosters[i].players[j].skills.replace(/,/g,'<br/>') );
			
			bench.append(template);
		}
		
	}
	
	bench.children('.player').click( function(e) {
		if($('.selected-player').length>0)
		{
			$('.selected-player').removeClass('selected-player');
		}
		$(this).addClass('selected-player');
		
		$info = $(this).children('.info');
		if($info.hasClass('R'))
			{$('.info.R').hide();}
		else
			{$('.info.B').hide();}
		$info.show();
		
	    });
}
/******************************************************************************  
  _________           .__                     .___       __                 
 /   _____/____ ___  _|__| ____    ____     __| _/____ _/  |______    ______
 \_____  \\__  \\  \/ /  |/    \  / ___\   / __ |\__  \\   __\__  \  /  ___/
 /        \/ __ \\   /|  |   |  \/ /_/  > / /_/ | / __ \|  |  / __ \_\___ \ 
/_______  (____  /\_/ |__|___|  /\___  /  \____ |(____  /__| (____  /____  >
        \/     \/             \//_____/        \/     \/          \/     \/ 
******************************************************************************/
var sep = '!';
var squaresep = '_';
var bbpusherVersion = '2';
function bbpusher_save()
{
	var result = '#'+bbpusherVersion+sep;
	var rosters = players = '';
	sep = '!';
	var ballposition = sep;
	
	//selected roster
	rosters+=$('#rosterListB').val();
	rosters+=sep;
	rosters+=$('#rosterListR').val();
	rosters+=sep;
	
	
	$('#grid td').each(function(){	
		//ball position
		if(  $(this).children('#ball').length>0 )
		{
			ballposition = $(this).attr('id')+sep;
		}
		//player
		if( $(this).children('.player').length>0 )
		{
			var $player = $(this).children('.player');
			players+=$(this).attr('id');
			players+=squaresep;
			players+=$player.attr('id');
			players+=squaresep;
			if( $player.hasClass('up') ){ players+='u'; }
			if( $player.hasClass('prone') ){ players+='p'; }
			if( $player.hasClass('stun') ){ players+='s'; }
			players+=sep;
			
		}
	
	});
	window.location = result+rosters+ballposition+players;
}

function bbpusher_load()
{
	res = window.location.href;
	
	switch( res.split('#')[1].charAt(0) )
	{//switch on url version
		case '1':
			sep='|';
			
		case '2':
			tDatas = res.split('#')[1].split(sep);
			if(tDatas[1]!='')
			{
				$('#rosterListB').val(tDatas[1]);
				changeroster($('#vestiaireB .bench'),document.getElementById('rosterListB'));
			}
			if(tDatas[2]!='')
			{
				$('#rosterListR').val(tDatas[2]);
				changeroster($('#vestiaireR .bench'),document.getElementById('rosterListR'));
			}
			
			//players
			for(i=4;i<tDatas.length-1;i++)
			{
				var a = tDatas[i].split(squaresep);
				$('#'+a[0]).append($('#'+a[1]));
				$('#'+a[1]).removeClass('up').removeClass('prone').removeClass('stun');
				if(a[2]=='u'){ $('#'+a[1]).addClass('up');}
				if(a[2]=='p'){ $('#'+a[1]).addClass('prone');}
				if(a[2]=='s'){ $('#'+a[1]).addClass('stun');}
			}
			
			//ball position
			$('#'+tDatas[3]).append($('#ball'));
			break;
	}
}


