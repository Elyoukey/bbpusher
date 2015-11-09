<?php 
$encode = '123456789abcdefghijklmnopqrstuvwxyz';
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<script src='jquery/jquery-1.6.2.min.js'></script>
	<script src='jquery/jquery-ui-1.8.16.min.js'></script>
	<script src='jquery/jquery.rightClick.js'></script>
	<script src='scripts/datas.js'></script>
	<script src='scripts/bbpusher.js'></script>
	<link rel="StyleSheet" href="css/styles.css" type="text/css">
	<title>BBPusher by Elyoukey</title>

</head>
<body>
<h1>BBPusher</h1>
	
<!-- AddThis Button BEGIN -->
<div class="addthis_toolbox addthis_default_style " style="width:200px; margin: auto;">
<a class="addthis_button_preferred_1"></a>
<a class="addthis_button_preferred_2"></a>
<a class="addthis_button_preferred_3"></a>
<a class="addthis_button_preferred_4"></a>
<a class="addthis_button_compact"></a>
<a class="addthis_counter addthis_bubble_style"></a>
</div>
<script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52557ff7513bfa73"></script>
<!-- AddThis Button END -->
<h2>An HTML5 alternative to the bbplaycreator</h2>
<div id="ball"><img id="ball-img" class="ball" src="images/ball.png"/></div>

<div id="pitch">
	<!-------------------------------------------------------------------------->
<div id="vestiaireB" class="vestiaire">

	<h2>Team Home</h2>
	<div id="rosterpicker">
		<select name="rosterList" class="rosterList" id="rosterListB" onchange="changeroster($('#vestiaireB .bench'), this)"><option value="">Choose roster</option></select>
	</div>
	<div class="bench" id="benchB"></div>
</div>
<!-------------------------------------------------------------------------->
<!-------------------------------------------------------------------------->
<div id="vestiaireR" class="vestiaire">
	
	<h2>Team Away</h2>
	<div id="rosterpicker">
		<select name="rosterList" class="rosterList" id="rosterListR" onchange="changeroster($('#vestiaireR .bench'),this)"><option value="">Choose roster</option></select>
	</div>
	<div class="bench" id="benchR"></div>
</div>
<!-------------------------------------------------------------------------->


	<!-------------------------------------------------------------------------->
	<table id="grid" border=0 cellspacing=0 cellpadding=0 >
	<tr>
		<td></td>
		<?php for($j=0;$j<15;$j++):?>
			<td class="tacket"><?php echo $encode[$j];?></td>
		<?php endfor;?>
	</tr>
	<?php for ($i=0;$i<26;$i++): ?>
		<tr>
		<td  class="tacket"><?php echo $encode[$i] ?></td>
		<?php for($j=0;$j<15;$j++):?>
		<?php
		$sClass = '';
			if($i==12)$sClass .= ' los_left';
			if($i==13)$sClass .= ' los_right';
			if($j==3 || $j==10 )$sClass .= ' widezone_up';
			if($j==4 || $j==11 )$sClass .= ' widezone_down';
			if($i==0 || $i== 25)$sClass .= ' tdzone';
			if($i==0)$sClass .= ' red';
			if($i==25)$sClass .= ' blue';
		?>
			<td id="S<?php echo $encode[$i].$encode[$j] ?>" class="square <?php echo $sClass?>" ></td>
		<?php endfor;?>
		<td class="tacket"><?php echo $encode[$i] ?></td>
		</tr>
	<?php endfor;?>
	<tr>
		<td></td>
		<?php for($j=0;$j<15;$j++):?>
			<td class="tacket"><?php echo $encode[$j];?></td>
		<?php endfor;?>
	</tr>
	</table>
	
	<!-------------------------------------------------------------------------->
		
	
		
	
	<div style="clear: both"></div>
	<table id="dugout" border="0" cellspacing="1">
		<tr>
			<td class="reserve">reserve</td>
			<td class="ko">ko</td>
			<td class="dead">dead and injured</td>
			<td class="dead">dead and injured</td>
			<td class="ko">ko</td>
			<td class="reserve">reserve</td>
		</tr>
	</table>
</div>
		
<!--div id="dashboard">
	<input type="button" value="save" onclick="save('all')" />
	<input type="button" value="load" onclick="load()" />
	<div id="messages"></div>
</div-->
	<!-------------------------------------------------------------------------->

<div id="playertemplate" class="player">
	<img class="pixel" src="images/icons/roster/playerType1color.gif"/>
	
	<div class="info color">
		<div class="title">
			playerType (playerNumber)
		</div>
		
		<div class="carac ma">
			<div class="caractitle">MV</div>
			{ma}
		</div>
		<div class="carac st">
			<div class="caractitle">ST</div>
			{st}
		</div>
		<div class="carac st">
			<div class="caractitle">AG</div>
			{ag}
		</div>
		<div class="carac st">
			<div class="caractitle">AV</div>
			{av}
		</div>
		<div class="carac skills">
			<div class="caractitle">Skills</div>
		{skills}
			<div class="added-skills"></div>
		</div>
		<div class="cost">{cost} GOLD PIECES </div>
		
		<div class="buttons">
			<div class="buttontitle">State</div>
			<input class="upbutton" type="button" onclick="$(this).parents('.player').removeClass('stun').removeClass('prone').addClass('up')" value="stand up"/>
			<input class="pronebutton" type="button" onclick="$(this).parents('.player').removeClass('stun').removeClass('up').addClass('prone')" value="prone"/>
			<input class="stunbutton" type="button" onclick="$(this).parents('.player').removeClass('prone').removeClass('up').addClass('stun')" value="stun"/>
		</div>
	</div>
</div>

<div id="skillsList">
    <div class="skillGroup" id="Gskills">
    <b>General:</b>
        <a href="#" onclick="addSkill(this)" class="sk1">Block</a>
        <a href="#" onclick="addSkill(this)" class="sk2" >Dauntless</a>
        <a href="#" onclick="addSkill(this)" class="sk3" >Dirty Player</a>
        <a href="#" onclick="addSkill(this)" class="sk4" >Fend</a>
        <a href="#" onclick="addSkill(this)" class="sk5" >Frenzy</a>
        <a href="#" onclick="addSkill(this)" class="sk6" >Kick</a>
        <a href="#" onclick="addSkill(this)" class="sk7" >Kick-Off Return</a>
        <a href="#" onclick="addSkill(this)" class="sk8" >Pass Block</a>
        <a href="#" onclick="addSkill(this)" class="sk9" >Pro</a>
        <a href="#" onclick="addSkill(this)" class="sk0" >Shadowing</a>
        <a href="#" onclick="addSkill(this)" class="ska" >Strip Ball</a>
        <a href="#" onclick="addSkill(this)" class="skb" >Sure Hands</a>
        <a href="#" onclick="addSkill(this)" class="skc" >Tackle</a>
        <a href="#" onclick="addSkill(this)" class="skd" >Wrestle</a>
    </div>
    <div class="skillGroup" id="Sskills">
    <b>Strength:</b>
        <a href="#" onclick="addSkill(this)" class="ske" >Break Tackle</a>
        <a href="#" onclick="addSkill(this)" class="skf" >Grab</a>
        <a href="#" onclick="addSkill(this)" class="skg" >Guard</a>
        <a href="#" onclick="addSkill(this)" class="skh" >Juggernaut</a>
        <a href="#" onclick="addSkill(this)" class="ski" >Mighty Blow</a>
        <a href="#" onclick="addSkill(this)" class="skj" >Multiple Block</a>
        <a href="#" onclick="addSkill(this)" class="skk" >Piling On</a>
        <a href="#" onclick="addSkill(this)" class="skl" >Stand Firm</a>
        <a href="#" onclick="addSkill(this)" class="skm" >Strong Arm</a>
        <a href="#" onclick="addSkill(this)" class="skn" >Thick Skull</a>
    </div>
    <div class="skillGroup" id="Askills">
    <b>Agility:</b>
        <a href="#" onclick="addSkill(this)" class="sko" >Catch</a>
        <a href="#" onclick="addSkill(this)" class="skp" >Diving Catch</a>
        <a href="#" onclick="addSkill(this)" class="skq" >Diving Tackle</a>
        <a href="#" onclick="addSkill(this)" class="skr" >Dodge</a>
        <a href="#" onclick="addSkill(this)" class="sks" >Jump Up</a>
        <a href="#" onclick="addSkill(this)" class="skt" >Leap</a>
        <a href="#" onclick="addSkill(this)" class="sku" >Side Step</a>
        <a href="#" onclick="addSkill(this)" class="skv" >Sneaky Git</a>
        <a href="#" onclick="addSkill(this)" class="skw" >Sprint</a>
        <a href="#" onclick="addSkill(this)" class="skx" >Sure Feet</a>
    </div>
    <div class="skillGroup" id="Pskills">
    <b>Passing:</b>
        <a href="#" onclick="addSkill(this)" class="sky" >Accurate</a>
        <a href="#" onclick="addSkill(this)" class="skz" >Dump-Off</a>
        <a href="#" onclick="addSkill(this)" class="sk11" >Hail Mary Pass</a>
        <a href="#" onclick="addSkill(this)" class="sk12" >Leader</a>
        <a href="#" onclick="addSkill(this)" class="sk13" >Nerves of Steel</a>
        <a href="#" onclick="addSkill(this)" class="sk14" >Pass</a>
        <a href="#" onclick="addSkill(this)" class="sk15" >Safe Throw</a>
    </div>
    <div class="skillGroup" id="Mskills">
    <b>Mutation:</b>
        <a href="#" onclick="addSkill(this)" class="sk16" >Big Hand</a>
        <a href="#" onclick="addSkill(this)" class="sk17" >Claws</a>
        <a href="#" onclick="addSkill(this)" class="sk18" >Disturbing Presence</a>
        <a href="#" onclick="addSkill(this)" class="sk19" >Extra Arms</a>
        <a href="#" onclick="addSkill(this)" class="sk10" >Foul Appearance</a>
        <a href="#" onclick="addSkill(this)" class="sk1a" >Horns</a>
        <a href="#" onclick="addSkill(this)" class="sk1b" >Prehensile Tail</a>
        <a href="#" onclick="addSkill(this)" class="sk1c" >Tentacles</a>
        <a href="#" onclick="addSkill(this)" class="sk1d" >Two Heads</a>
        <a href="#" onclick="addSkill(this)" class="sk1e" >Very Long Legs</a>
    </div>
    <div class="skillGroup" id="Eskills">
    <b>Extraordinary:</b>
        <a href="#" onclick="addSkill(this)" class="sk1f" >Always Hungry</a>
        <a href="#" onclick="addSkill(this)" class="sk1g" >Ball and Chain</a>
        <a href="#" onclick="addSkill(this)" class="sk1h" >Blood Lust</a>
        <a href="#" onclick="addSkill(this)" class="sk1j" >Bombardier</a>
        <a href="#" onclick="addSkill(this)" class="sk1k" >Bone-head</a>
        <a href="#" onclick="addSkill(this)" class="sk1l" >Chainsaw</a>
        <a href="#" onclick="addSkill(this)" class="sk1m" >Decay</a>
        <a href="#" onclick="addSkill(this)" class="sk1n" >Fan Favourite</a>
        <a href="#" onclick="addSkill(this)" class="sk1o" >Hypnotic Gaze</a>
        <a href="#" onclick="addSkill(this)" class="sk1p" >Loner</a>
        <a href="#" onclick="addSkill(this)" class="sk1q" >No Hands</a>
        <a href="#" onclick="addSkill(this)" class="sk1r" >Nurgles Rot</a>
        <a href="#" onclick="addSkill(this)" class="sk1s" >Really Stupid</a>
        <a href="#" onclick="addSkill(this)" class="sk1t" >Regeneration</a>
        <a href="#" onclick="addSkill(this)" class="sk1u" >Right Stuff</a>
        <a href="#" onclick="addSkill(this)" class="sk1v" >Secret Weapon</a>
        <a href="#" onclick="addSkill(this)" class="sk1w" >Stab</a>
        <a href="#" onclick="addSkill(this)" class="sk1x" >Stakes</a>
        <a href="#" onclick="addSkill(this)" class="sk1y" >Stunty</a>
        <a href="#" onclick="addSkill(this)" class="sk1z" >Take Root</a>
        <a href="#" onclick="addSkill(this)" class="sk21" >Throw Team-Mate</a>
        <a href="#" onclick="addSkill(this)" class="sk22" >Titchy</a>
        <a href="#" onclick="addSkill(this)" class="sk23" >Wild Animal</a>
    </div>
</div>
</body>
</html>

