




/*
     FILE ARCHIVED ON 22:51:32 Feb 6, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 7:02:38 Jul 22, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var i = 0;
var t = 0;

var className = "Paladin Talents - Wrath of the Lich King Beta Talents";
var talentPath = "/info/basics/talents/";

tree[i] = "Holy"; i++;
tree[i] = "Protection"; i++;
tree[i] = "Retribution"; i++;

i = 0;

talent[i] = [0, "Spiritual Focus", 5, 2, 1]; i++;
talent[i] = [0, "Seals of the Pure", 5, 3, 1]; i++; 
talent[i] = [0, "Healing Light", 3, 1, 2]; i++;
talent[i] = [0, "Divine Intellect", 5, 2, 2]; i++;
talent[i] = [0, "Unyielding Faith", 2, 3, 2]; i++;
talent[i] = [0, "Aura Mastery", 1, 1, 3]; i++;
talent[i] = [0, "Illumination", 5, 2, 3]; i++;
talent[i] = [0, "Improved Lay on Hands", 2, 3, 3]; i++;
talent[i] = [0, "Improved Concentration Aura", 3, 1, 4]; i++;
talent[i] = [0, "Improved Blessing of Wisdom", 2, 3, 4]; i++;
talent[i] = [0, "Pure of Heart", 2, 1, 5]; i++;
talent[i] = [0, "Divine Favor", 1, 2, 5, [getTalentID("Illumination"),5]]; i++;
talent[i] = [0, "Sanctified Light", 3, 3, 5]; i++;
talent[i] = [0, "Blessed Hands", 2, 4, 5]; i++;
talent[i] = [0, "Purifying Power", 2, 1, 6]; i++;
talent[i] = [0, "Holy Power", 5, 3, 6]; i++;
talent[i] = [0, "Light's Grace", 3, 1, 7]; i++;
talent[i] = [0, "Holy Shock", 1, 2, 7, [getTalentID("Divine Favor"),1]]; i++;
talent[i] = [0, "Blessed Life", 3, 3, 7]; i++;
talent[i] = [0, "Infusion of Light", 2, 2, 8, [getTalentID("Holy Shock"),1]]; i++;
talent[i] = [0, "Holy Guidance", 5, 3, 8]; i++;
talent[i] = [0, "Sacred Cleansing", 3, 1, 9]; i++;
talent[i] = [0, "Divine Illumination", 1, 2, 9]; i++;
talent[i] = [0, "Enlightened Judgements", 2, 3, 9]; i++;
talent[i] = [0, "Judgements of the Pure", 5, 2, 10]; i++;
talent[i] = [0, "Beacon of Light", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//protection talents

talent[i] = [1, "Blessing of Kings", 1, 1, 1]; i++;
talent[i] = [1, "Improved Blessing of Kings", 4, 2, 1, [getTalentID("Blessing of Kings"),1]]; i++;
talent[i] = [1, "Divine Strength", 5, 3, 1]; i++;
talent[i] = [1, "Stoicism", 3, 1, 2]; i++;
talent[i] = [1, "Guardian's Favor", 2, 2, 2]; i++;
talent[i] = [1, "Anticipation", 5, 3, 2]; i++;
talent[i] = [1, "Improved Righteous Fury", 3, 2, 3]; i++;
talent[i] = [1, "Toughness", 5, 3, 3]; i++;
talent[i] = [1, "Divine Guardian", 2, 1, 4]; i++;
talent[i] = [1, "Improved Hammer of Justice", 3, 2, 4]; i++;
talent[i] = [1, "Improved Devotion Aura", 3, 3, 4]; i++;
talent[i] = [1, "Blessing of Sanctuary", 1, 2, 5]; i++;
talent[i] = [1, "Reckoning", 5, 3, 5]; i++;
talent[i] = [1, "Sacred Duty", 2, 1, 6]; i++;
talent[i] = [1, "One-Handed Weapon Specialization", 5, 3, 6]; i++;
talent[i] = [1, "Holy Shield", 1, 2, 7, [getTalentID("Blessing of Sanctuary"),1]]; i++;
talent[i] = [1, "Ardent Defender", 5, 3, 7]; i++;
talent[i] = [1, "Redoubt", 3, 1, 8]; i++;
talent[i] = [1, "Combat Expertise", 3, 3, 8]; i++;
talent[i] = [1, "Touched by the Light", 3, 1, 9]; i++;
talent[i] = [1, "Avenger's Shield", 1, 2, 9, [getTalentID("Holy Shield"),1]]; i++;
talent[i] = [1, "Guarded by the Light", 2, 3, 9]; i++;
talent[i] = [1, "Shield of the Templar", 3, 2, 10, [getTalentID("Avenger's Shield"),1]]; i++;
talent[i] = [1, "Judgements of the Just", 2, 3, 10]; i++;
talent[i] = [1, "Hammer of the Righteous", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

//retribution talents
talent[i] = [2, "Deflection", 5, 2, 1]; i++;
talent[i] = [2, "Benediction", 5, 3, 1]; i++;
talent[i] = [2, "Improved Judgements", 2, 1, 2]; i++;
talent[i] = [2, "Heart of the Crusader", 3, 2, 2]; i++;
talent[i] = [2, "Improved Blessing of Might", 2, 3, 2]; i++;
talent[i] = [2, "Vindication", 2, 1, 3]; i++;
talent[i] = [2, "Conviction", 5, 2, 3]; i++;
talent[i] = [2, "Seal of Command", 1, 3, 3]; i++;
talent[i] = [2, "Pursuit of Justice", 2, 4, 3]; i++;
talent[i] = [2, "Eye for an Eye", 2, 1, 4]; i++;
talent[i] = [2, "Sanctified Seals", 3, 3, 4]; i++;
talent[i] = [2, "Crusade", 3, 4, 4]; i++;
talent[i] = [2, "Two-Handed Weapon Specialization", 3, 1, 5]; i++;
talent[i] = [2, "Sanctified Retribution", 1, 3, 5]; i++;
talent[i] = [2, "Divine Purpose", 2, 4, 5]; i++;
talent[i] = [2, "Vengeance", 3, 2, 6, [getTalentID("Conviction"),5]]; i++;
talent[i] = [2, "Improved Retribution Aura", 2, 3, 6]; i++;
talent[i] = [2, "The Art of War", 2, 1, 7]; i++;
talent[i] = [2, "Repentance", 1, 2, 7]; i++;
talent[i] = [2, "Judgements of the Wise", 3, 3, 7]; i++;
talent[i] = [2, "Fanaticism", 5, 2, 8, [getTalentID("Repentance"),1]]; i++;
talent[i] = [2, "Sanctified Wrath", 2, 3, 8]; i++;
talent[i] = [2, "Swift Retribution", 3, 1, 9]; i++;
talent[i] = [2, "Crusader Strike", 1, 2, 9]; i++;
talent[i] = [2, "Sheath of Light", 3, 3, 9]; i++;
talent[i] = [2, "Righteous Vengeance", 5, 2, 10]; i++;
talent[i] = [2, "Divine Storm", 1, 2, 11]; i++;

treeStartStop[t] = i -1;
t++;

i = 0;


//Holy Talents Begin

//Spiritual Focus - Holy
rank[i] = [
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 14%.",
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 28%.",
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 42%.",
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 56%.",
"Reduces the pushback suffered from damaging attacks while casting Flash of Light and Holy Light by 70%."
		];
i++;

//Seals of the Pure - Holy
rank[i] = [
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 3%.",
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 6%.",
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 9%.",
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 12%.",
"Increases the damage done by your Seal of Righteousness, Seal of Vengeance and Seal of Corruption and their Judgement effects by 15%."
		];
i++;	

//Healing Light - Holy
rank[i] = [
"Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 4%.",
"Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 8%.",
"Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by 12%."
		];
i++;
		
//Divine Intellect - Holy
rank[i] = [
"Increases your total Intellect by 3%.",
"Increases your total Intellect by 6%.",
"Increases your total Intellect by 9%.",
"Increases your total Intellect by 12%.",
"Increases your total Intellect by 15%."
		];
i++;		

		//Unyielding Faith - Holy
rank[i] = [ 
"Reduces the duration of all Fear and Disorient effects by 15%.",
"Reduces the duration of all Fear and Disorient effects by 30%."
		];
i++;
		
	

		

//Aura Mastery - Retribution 
rank[i]=[
		"Increases the radius of your Auras to 40 yards."
		];
i++;	

//Illumination - Holy
rank[i] = [
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 20% chance to gain Mana equal to 60% of the base cost of your spell.",
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 40% chance to gain Mana equal to 60% of the base cost of your spell.",
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 60% chance to gain Mana equal to 60% of the base cost of your spell.",
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 80% chance to gain Mana equal to 60% of the base cost of your spell.",
"After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain Mana equal to 60% of the base cost of your spell."
		];
i++;

//Improved Lay on Hands - Holy
rank[i] = [
"Gives the target of your Lay on Hands spell a 25% bonus to their armor value from items for 15 sec. In addition, the cooldown for your Lay on Hands spell is reduced by 2 min.",
"Gives the target of your Lay on Hands spell a 50% bonus to their armor value from items for 15 sec. In addition, the cooldown for your Lay on Hands spell is reduced by 4 min."
		];		
i++;		


		
//Improved Concentration Aura - Protection
rank[i] = [
"Increases the effect of your Concentration Aura by an additional 5% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 10%.  The duration reduction does not stack with any other effects.",
"Increases the effect of your Concentration Aura by an additional 10% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 20%.  The duration reduction does not stack with any other effects.",
"Increases the effect of your Concentration Aura by an additional 15% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 30%.  The duration reduction does not stack with any other effects."
		];i++;	
		

//Improved Blessing of Wisdom - Holy 
rank[i] = [
"Increases the effect of your Blessing of Wisdom spell by 10%.",
"Increases the effect of your Blessing of Wisdom spell by 20%."
		];
i++;		

//Pure of Heart - Holy 
rank[i] = [
"Reduces the duration of Curse and Disease effects by 25%.",
"Reduces the duration of Curse and Disease effects by 50%."
		];
i++;		

//Divine Favor - Holy 
rank[i] = [
		"131 Mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>2 min cooldown</span><br>When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance."
		];
i++;		

//Sanctified Light - Holy
rank[i] = [
		"Increases the critical effect chance of your Holy Light and Holy Shock spells by 2%.",
		"Increases the critical effect chance of your Holy Light and Holy Shock spells by 4%.",
		"Increases the critical effect chance of your Holy Light and Holy Shock spells by 6%."	
		];
i++;		
		
//Blessed Hands - Holy
rank[i] = [
"Reduces the mana cost and increases the resistance to Dispel effects of all Hand spells by 15%.",
"Reduces the mana cost and increases the resistance to Dispel effects of all Hand spells by 30%."
		];
i++;		
		

//Purifying Power - Holy
rank[i] = [
		"Reduces the mana cost of your Cleanse, Purify, and Consecration spells by 5% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 10%.",
		"Reduces the mana cost of your Cleanse, Purify, and Consecration spells by 10% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 20%."
		];
i++;		


//Holy Power - Holy
rank[i] = [
"Increases the critical effect chance of your Holy spells by 1%.",
"Increases the critical effect chance of your Holy spells by 2%.",
"Increases the critical effect chance of your Holy spells by 3%.",
"Increases the critical effect chance of your Holy spells by 4%.",
"Increases the critical effect chance of your Holy spells by 5%."
		];
i++;		

//Light's Grace - Holy
rank[i] = [
"Gives your Holy Light spell a 33% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.",
"Gives your Holy Light spell a 66% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.",
"Gives your Holy Light spell a 100% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec."
		];
i++;		

//Holy Shock - Holy			
rank[i] = [
"<span style=text-align:right;float:right;>Enemy: 20 yd range</span><br><span style=text-align:left;float:left;>922 Mana</span><span style=text-align:right;float:right;>Friendly: 40 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>Blasts the target with Holy energy, causing 314 to 340 Holy damage to an enemy, or 481 to 519 healing to an ally.\
		<br><br>&nbsp;Trainable Ranks Listed Below<br>\
		&nbsp;Rank 2: 922 Mana, 431 to 456 Holy Damage or 644 to 696 Healing<br>\
		&nbsp;Rank 3: 922 Mana, 562 to 608 Holy Damage or 845 to 915 Healing<br>\
		&nbsp;Rank 4: 922 Mana, 693 to 749 Holy Damage or 1061 to 1149 Healing<br>\
		&nbsp;Rank 5: 790 Mana, 904 to 978 Holy Damage or 1258 to 1362 Healing<br>\
		&nbsp;Rank 6: 790 Mana, 1043 to 1129 Holy Damage or 2065 to 2235 Healing<br>\
		&nbsp;Rank 7: 790 Mana, 1296 to 1402 Holy Damage or 2401 to 2599 Healing"
		];
i++;		

//Blessed Life - Holy
rank[i] = [
"All attacks against you have a 4% chance to cause half damage.",
"All attacks against you have a 7% chance to cause half damage.",
"All attacks against you have a 10% chance to cause half damage."
		];
i++;

//Infusion of Light - Holy
rank[i] = [
"Your Holy Shock critical hits reduce the cast time of your next Holy Light spell by 0.50 secs.",
"Your Holy Shock critical hits reduce the cast time of your next Holy Light spell by 1 secs."
		];
i++;

//Holy Guidance - Holy
rank[i] = [
"Increases your spell power by 4% of your total Intellect.",
"Increases your spell power by 8% of your total Intellect.",
"Increases your spell power by 12% of your total Intellect.",
"Increases your spell power by 16% of your total Intellect.",
"Increases your spell power by 20% of your total Intellect."
		];
i++;

//Sacred Cleansing - Holy
rank[i] = [
"Your Cleanse spell has a 10% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec.",
"Your Cleanse spell has a 20% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec.",
"Your Cleanse spell has a 30% chance to increase the target's resistance to Disease, Magic and Poison by 30% for 10 sec."
		];
i++;

//Divine Illumination - Holy			
rank[i] = [
		"<span style=text-align:left;float:left;>Instant</span><span style=text-align:right;float:right;>3 min cooldown</span><br>Reduces the mana cost of all spells by 50% for 15 sec."
		];
i++;

//Enlightened Judgements - Holy
rank[i] = [
"Increases the range of your Judgement spells by 15 yards and increases your chance to hit by 2%.",
"Increases the range of your Judgement spells by 30 yards and increases your chance to hit by 4%."
		];
i++;

//Judgements of the Pure - Holy
rank[i] = [
"Increases the damage done by your Seal and Judgement spells by 5%, and your Judgement spells increase your casting and melee haste by 3% for 1 min.",
"Increases the damage done by your Seal and Judgement spells by 10%, and your Judgement spells increase your casting and melee haste by 6% for 1 min.",
"Increases the damage done by your Seal and Judgement spells by 15%, and your Judgement spells increase your casting and melee haste by 9% for 1 min.",
"Increases the damage done by your Seal and Judgement spells by 20%, and your Judgement spells increase your casting and melee haste by 12% for 1 min.",
"Increases the damage done by your Seal and Judgement spells by 25%, and your Judgement spells increase your casting and melee haste by 15% for 1 min."
		];
i++;

//Beacon of Light - Holy			
rank[i] = [
		"<span style=text-align:left;float:left;>1537 Mana</span><span style=text-align:right;float:right;>40 yd range</span><br><span style=text-align:left;float:left;>Instant Cast</span><br>The target becomes a Beacon of Light to all targets within a 40 yard radius. Any heals you cast on those targets will also heal the Beacon for 100% of the amount healed. Only one target can be Beacon of Light at a time. Lasts 1 min."
		];
i++;

// PROTECTION TREE--------------------------------------------------------------------------


//Blessing of Kings - Retribution 
rank[i]=[
		"<span style=text-align:left;float:left;>263 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>Places a Blessing on the friendly target, increasing total stats by 2% for 10 min. Players may only have one Blessing on them per Paladin at any one time."
		];
i++;

//Improved Blessing of Kings - Protection
rank[i] = [
"Increases the effectiveness of Blessing of Kings by an additional 2%.",
"Increases the effectiveness of Blessing of Kings by an additional 4%.",
"Increases the effectiveness of Blessing of Kings by an additional 6%.",
"Increases the effectiveness of Blessing of Kings by an additional 8%."
		];
i++;

//Divine Strength - Protection
rank[i] = [
"Increases your total Strength by 3%.",
"Increases your total Strength by 6%.",
"Increases your total Strength by 9%.",
"Increases your total Strength by 12%.",
"Increases your total Strength by 15%."
		];
i++;


//Stoicism - Protection
rank[i] = [
"Reduces the duration of all Stun effects by an additional 10% and reduces the chance your spells will be dispelled by an additional 10%.",
"Reduces the duration of all Stun effects by an additional 20% and reduces the chance your spells will be dispelled by an additional 20%.",
"Reduces the duration of all Stun effects by an additional 30% and reduces the chance your spells will be dispelled by an additional 30%."
		];
i++;


//Guardian's Favor - Protection 
rank[i] = [
"Reduces the cooldown of your Hand of Protection by 60 sec and increases the duration of your Hand of Freedom by 2 sec.",
"Reduces the cooldown of your Hand of Protection by 120 sec and increases the duration of your Hand of Freedom by 4 sec."
		];		
i++;	



//Anticipation - Protection
rank[i] = [
"Increases your chance to dodge by 1%.",
"Increases your chance to dodge by 2%.",
"Increases your chance to dodge by 3%.",
"Increases your chance to dodge by 4%.",
"Increases your chance to dodge by 5%."
		];
i++;		



//Improved Righteous Fury - Protection 
rank[i] = [
"While Righteous Fury is active, all damage taken is reduced by 2%.",
"While Righteous Fury is active, all damage taken is reduced by 4%.",
"While Righteous Fury is active, all damage taken is reduced by 6%."
		];
i++;		

//Toughness - Protection 
rank[i] = [
"Increases your armor value from items by 2% and reduces the duration of all movement slowing effects by 6%.",
"Increases your armor value from items by 4% and reduces the duration of all movement slowing effects by 12%.",
"Increases your armor value from items by 6% and reduces the duration of all movement slowing effects by 18%.",
"Increases your armor value from items by 8% and reduces the duration of all movement slowing effects by 24%.",
"Increases your armor value from items by 10% and reduces the duration of all movement slowing effects by 30%."		
		];
i++;
	
//Divine Guardian - Protection 
rank[i] = [
"While Divine Shield is active 15% of all damage taken by party or raid members within 30 yards is redirected to the Paladin.",
"While Divine Shield is active 30% of all damage taken by party or raid members within 30 yards is redirected to the Paladin."
		];
i++;
		

//Improved Hammer of Justice - Protection 
rank[i] = [
"Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
"Decreases the cooldown of your Hammer of Justice spell by 20 sec.",
"Decreases the cooldown of your Hammer of Justice spell by 30 sec."
		];
i++;		

//Improved Devotion Aura - Protection 
rank[i] = [
"Increases the armor bonus of your Devotion Aura by 17% and increases the amount healed on any target affected by Devotion Aura by 2%.",
"Increases the armor bonus of your Devotion Aura by 34% and increases the amount healed on any target affected by Devotion Aura by 4%.",
"Increases the armor bonus of your Devotion Aura by 50% and increases the amount healed on any target affected by Devotion Aura by 6%."
		];
i++;			

//Blessing of Sanctuary - Protection 
rank[i] = [
		"<span style=text-align:left;float:left;>307 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br>Instant cast<br>Places a Blessing on the friendly target, reducing damage taken from all sources by 3% for 10 min.  In addition, when the target blocks, parries, or dodges a melee attack the target will gain 10 rage, 20 runic power, or 2% of the maximum mana. Players may only have one Blessing on them per Paladin at any one time."
		];
i++;		

//Reckoning - Protection
rank[i] = [
		"Gives you a 2% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
		"Gives you a 4% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
		"Gives you a 6% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
		"Gives you a 8% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
		"Gives you a 10% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack."						
		];
i++;

//Sacred Duty - Protection
rank[i] = [
"Increases your total Stamina by 4%, reduces the cooldown of your Divine Shield and Divine Protection spells by 30 sec.",
"Increases your total Stamina by 8%, reduces the cooldown of your Divine Shield and Divine Protection spells by 60 sec."
		];
i++;

//One-Handed Weapon Specialization - Protection
rank[i]=[
"Increases all damage you deal when a one-handed melee weapon is equipped by 2%.",
"Increases all damage you deal when a one-handed melee weapon is equipped by 4%.",
"Increases all damage you deal when a one-handed melee weapon is equipped by 6%.",
"Increases all damage you deal when a one-handed melee weapon is equipped by 8%.",
"Increases all damage you deal when a one-handed melee weapon is equipped by 10%."
			];
i++;			

		
//Holy Shield - Protection
rank[i] = [
"527 Mana<br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>8 sec cooldown</span><br>Requires Shields<br>Increases chance to block by 30% for 10 sec and deals 61 Holy damage for each attack blocked while active. Each block expends a charge. 8 charges.<br><br>\
		&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: 527 Mana, 89 Holy Damage<br>\
		&nbsp;Rank 3: 527 Mana, 121 Holy Damage<br>\
		&nbsp;Rank 4: 439 Mana, 160 Holy Damage<br>\
		&nbsp;Rank 5: 439 Mana, 181 Holy Damage<br>\
		&nbsp;Rank 6: 439 Mana, 211 Holy Damage"
		];
i++;

//Ardent Defender - Protection
rank[i]=[
"When you have less than 35% health, all damage taken is reduced by 6%.",
"When you have less than 35% health, all damage taken is reduced by 12%.",
"When you have less than 35% health, all damage taken is reduced by 18%.",
"When you have less than 35% health, all damage taken is reduced by 24%.",
"When you have less than 35% health, all damage taken is reduced by 30%."
			];
i++;

//Redoubt - Protection
rank[i] = [
"Increases your block value by 10% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 10%.  Lasts 10 sec or 5 blocks.",
"Increases your block value by 20% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 20%.  Lasts 10 sec or 5 blocks.",
"Increases your block value by 30% and damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 30%.  Lasts 10 sec or 5 blocks."
		];
i++;
		
//Combat Expertise - Protection
rank[i]=[
"Increases your expertise by 2, total Stamina and chance to critically hit by 2%.",
"Increases your expertise by 4, total Stamina and chance to critically hit by 4%.",
"Increases your expertise by 6, total Stamina and chance to critically hit by 6%."
			];
i++;		

//Touched by the Light - Protection
rank[i] = [
		"Increases your spell power by an amount equal to 10% of your Stamina and increases the amount healed by your critical heals by 10%.",
		"Increases your spell power by an amount equal to 20% of your Stamina and increases the amount healed by your critical heals by 20%.",
		"Increases your spell power by an amount equal to 30% of your Stamina and increases the amount healed by your critical heals by 30%."		
		];
i++;	
	
//Avenger's Shield - Protection
rank[i] = [
		"<span style=text-align:left;float:left;>1318 Mana</span><span style=text-align:right;float:right;>30 yd range</span><br><span style=text-align:left;float:left;>Instant Cast</span><span style=text-align:right;float:right;>30 sec cooldown</span><br>Hurls a holy shield at the enemy, dealing 376 to 450 Holy damage, Dazing them and then jumping to additional nearby enemies. Affects 3 total targets. Lasts 10 sec.<br><br>\
		&nbsp;Trainable Ranks Listed Below:<br>\
		&nbsp;Rank 2: 1318 Mana, 498-600 Holy Damage<br>\
		&nbsp;Rank 3: 1142 Mana, 648-784 Holy Damage<br>\
		&nbsp;Rank 4: 1142 Mana, 738-894 Holy Damage<br>\
		&nbsp;Rank 4: 1142 Mana, 882-1070 Holy Damage"
		];
i++;

//Guarded by the Light - Protection
rank[i]=[
"Reduces spell damage taken by 3% and reduces the mana cost of your Holy Shield, Avenger's Shield and Shield of Righteousness spells by 15%.",
"Reduces spell damage taken by 6% and reduces the mana cost of your Holy Shield, Avenger's Shield and Shield of Righteousness spells by 30%."
			];
i++;	

//Shield of the Templar - Protection
rank[i]=[
"Increases the damage of your Holy Shield, Avenger's Shield and Shield of the Righteousness spells by 10%.",
"Increases the damage of your Holy Shield, Avenger's Shield and Shield of the Righteousness spells by 20%.",
"Increases the damage of your Holy Shield, Avenger's Shield and Shield of the Righteousness spells by 30%."
			];
i++;	

//Judgements of the Just - Holy
rank[i] = [
"Your Judgement spells also reduce the melee attack speed of the target by 10%.",
"Your Judgement spells also reduce the melee attack speed of the target by 20%."
		];
i++;

//Hammer of the Righteous - Retribution 
rank[i]=[
		"<span style=text-align:left;float:left;>263 Mana</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant Cast</span><span style=text-align:right;float:right;>6 sec cooldown</span><br><span style=text-align:left;float:left;>Requires One-Handed Melee Weapon</span><br/>Hammer the current target and up to 2 additional nearby targets, causing 3 times your main hand damage per second as Holy damage."
		];
i++;
		
//RETRIBUTION TREE------------------------------------------------------------------------		

//Deflection - Retribution
rank[i]=[
"Increases your Parry chance by 1%.",
"Increases your Parry chance by 2%.",
"Increases your Parry chance by 3%.",
"Increases your Parry chance by 4%.",
"Increases your Parry chance by 5%."
		];
i++;
	
		
//Benediction - Retribution  
rank[i]=[
"Reduces the mana cost of all instant cast spells by 2%.",
"Reduces the mana cost of all instant cast spells by 4%.",
"Reduces the mana cost of all instant cast spells by 6%.",
"Reduces the mana cost of all instant cast spells by 8%.",
"Reduces the mana cost of all instant cast spells by 10%."
		];
i++;		
		
//Improved Judgements - Retribution 
rank[i]=[
"Decreases the cooldown of your Judgement spells by 1 sec.",
"Decreases the cooldown of your Judgement spells by 2 sec."
		];
i++;		
		
//Heart of the Crusader - Retribution  
rank[i]=[
"In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 1%.",
"In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 2%.",
"In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 3%."
		];
i++;

//Improved Blessing of Might - Retribution
rank[i]=[
"Increases the attack power bonus of your Blessing of Might by 12%.",
"Increases the attack power bonus of your Blessing of Might by 25%."
		];
i++;	
		
		
		
//Vindication - Retribution
rank[i]=[
"Gives the Paladin's damaging attacks a chance to reduce the target's attributes by 10% for 15 sec.",
"Gives the Paladin's damaging attacks a chance to reduce the target's attributes by 20% for 15 sec."
		];
i++;		
	
//Conviction - Retribution
rank[i]=[
		"Increases your chance to get a critical strike with all spells and attacks by 1%.",
		"Increases your chance to get a critical strike with all spells and attacks by 2%.",
		"Increases your chance to get a critical strike with all spells and attacks by 3%.",
		"Increases your chance to get a critical strike with all spells and attacks by 4%.",
		"Increases your chance to get a critical strike with all spells and attacks by 5%."				
		];
i++;	
		
//Seal of Command - Retribution
rank[i]=[
"615 Mana<br/>Instant cast<br/>Gives the Paladin a chance to deal 62 to 64 additional Holy damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec.<br/><br/>	Unleasing this Seal's energy will judge an enemy, instantly causing 145 to 146 Holy damage. This attack will always be a critical strike if the target is stunned or incapacitated.<br><br>"
		];
i++;		
		
//Pursuit of Justice - Retribution
rank[i]=[
"Reduces the duration of all Disarm effects by 25% and increases movement and mounted movement speed by 8%. This does not stack with other movement speed increasing effects.",
"Reduces the duration of all Disarm effects by 50% and increases movement and mounted movement speed by 15%. This does not stack with other movement speed increasing effects."
		];
i++;		
		
//Eye for an Eye - Retribution  
rank[i]=[
"All criticals against you cause 10% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
"All criticals against you cause 20% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health."
		];
i++;

//Sanctified Seals - Retribution 

rank[i]=[
		"Increases your chance to critically hit with all spells and attacks by 1% and reduces the chance your Seals will be dispelled by 33%.",
		"Increases your chance to critically hit with all spells and attacks by 2% and reduces the chance your Seals will be dispelled by 66%.",
		"Increases your chance to critically hit with all spells and attacks by 3% and reduces the chance your Seals will be dispelled by 100%."
		];
i++;
		
	

//Crusade - Retribution 
rank[i]=[
"Increases all damage caused by 1% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 1%.",
"Increases all damage caused by 2% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 2%.",
"Increases all damage caused by 3% and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 3%."
		];
i++;

//Two-Handed Weapon Specialization - Retribution 
rank[i]=[
		"Increases the damage you deal with two-handed melee weapons by 2%.",
		"Increases the damage you deal with two-handed melee weapons by 4%.",
		"Increases the damage you deal with two-handed melee weapons by 6%."
		];
i++;	


//Sanctified Retribution - Retribution
rank[i] = [
		"Damage caused by targets affected by Retribution Aura is increased by 3%."
		];
i++;		


//Divine Purpose - Retribution 
rank[i]=[
"Reduces your chance to be hit by spells and ranged attacks by 2% and gives your Hand of Freedom spell a 50% chance to remove any Stun effects on the target.",
"Reduces your chance to be hit by spells and ranged attacks by 4% and gives your Hand of Freedom spell a 100% chance to remove any Stun effects on the target."							
		];
i++;

//Vengeance - Retribution  
rank[i]=[
"Gives you a 1% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times.",
"Gives you a 2% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times.",
"Gives you a 3% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell or ability. This effect stacks up to 3 times."
		];
i++;

//Improved Retribution Aura - Retribution  
rank[i]=[
"Increases the damage done by your Retribution Aura by 25%.",
"Increases the damage done by your Retribution Aura by 50%."
		];
i++;

//The Art of War - Retribution 
rank[i]=[
"Increases the damage of your Judgement, Crusader Strike and Divine Storm abilities by 5% and when these abilities critically hit the cast time of your next Flash of Light is reduced by 0.75 sec.",
"Increases the damage of your Judgement, Crusader Strike and Divine Storm abilities by 10% and when these abilities critically hit the cast time of your next Flash of Light becomes instant cast."			
		];
i++;

//Repentance - Protection
rank[i]=[
		"<span style=text-align:left;float:left;>395 Mana</span><span style=text-align:right;float:right;>20 yd range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>1 min cooldown</span><br>Puts the enemy target in a state of meditation, incapacitating them for up to 1 min. Any damage caused will awaken the target. Usable against Demons, Dragonkin, Giants, Humanoids and Undead."
		];
i++;		


//Judgements of the Wise - Retribution 
rank[i]=[
"Your Judgement spells have a 33% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 0.25% of their maximum mana per second, and to immediately grant you 15% of your base mana.",
"Your Judgement spells have a 66% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 0.25% of their maximum mana per second, and to immediately grant you 15% of your base mana.",
"Your Judgement spells have a 100% chance to grant the Replenishment effect to up to 10 party or raid members mana regeneration equal to 0.25% of their maximum mana per second, and to immediately grant you 15% of your base mana."
		];
i++;	




	

//Fanaticism - Retribution 
rank[i]=[
		"Increases the critical strike chance of all Judgements capable of a critical hit by 5% and reduces threat caused by all actions by 6% except when under the effects of Righteous Fury.",
		"Increases the critical strike chance of all Judgements capable of a critical hit by 10% and reduces threat caused by all actions by 12% except when under the effects of Righteous Fury.",
		"Increases the critical strike chance of all Judgements capable of a critical hit by 15% and reduces threat caused by all actions by 18% except when under the effects of Righteous Fury.",
		"Increases the critical strike chance of all Judgements capable of a critical hit by 20% and reduces threat caused by all actions by 24% except when under the effects of Righteous Fury.",
		"Increases the critical strike chance of all Judgements capable of a critical hit by 25% and reduces threat caused by all actions by 30% except when under the effects of Righteous Fury."								
		];
i++;

//Sanctified Wrath - Retribution 
rank[i]=[
		"Increases the critical strike chance of Hammer of Wrath by 25%, reduces the cooldown of Avenging Wrath by 30 secs and while affected by Avenging Wrath 25% of all damage caused bypasses damage reduction effects.",
		"Increases the critical strike chance of Hammer of Wrath by 50%, reduces the cooldown of Avenging Wrath by 60 secs and while affected by Avenging Wrath 50% of all damage caused bypasses damage reduction effects."							
		];
i++;

//Swift Retribution - Retribution 
rank[i]=[
		"Your Retribution Aura also increases casting, ranged and melee attack speeds by 1%.",
		"Your Retribution Aura also increases casting, ranged and melee attack speeds by 2%.",
		"Your Retribution Aura also increases casting, ranged and melee attack speeds by 3%."							
		];
i++;

//Crusader Strike - Retribution 
rank[i]=[
		"<span style=text-align:left;float:left;>351 Mana</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>6 sec cooldown</span><br>Requires Melee Weapon<br>An instant strike that causes 110% weapon damage."						
		];
i++;

//Sheath of Light - Retribution 
rank[i]=[
"Increases your spell power by an amount equal to 10% of your attack power and your critical healing spells heal the target for 20% of the healed amount over 12 seconds.",
"Increases your spell power by an amount equal to 20% of your attack power and your critical healing spells heal the target for 40% of the healed amount over 12 seconds.",
"Increases your spell power by an amount equal to 30% of your attack power and your critical healing spells heal the target for 60% of the healed amount over 12 seconds."
		];
i++;	




//Righteous Vengeance - Retribution 
rank[i]=[
		"When your Judgement and Divine Storm spells deal a critical strike, your target will take 8% additional damage over 8 sec.",
		"When your Judgement and Divine Storm spells deal a critical strike, your target will take 16% additional damage over 8 sec.",
		"When your Judgement and Divine Storm spells deal a critical strike, your target will take 24% additional damage over 8 sec.",
		"When your Judgement and Divine Storm spells deal a critical strike, your target will take 32% additional damage over 8 sec.",
		"When your Judgement and Divine Storm spells deal a critical strike, your target will take 40% additional damage over 8 sec.",
		];
i++;

//Divine Storm - Retribution 
rank[i]=[
		"<span style=text-align:left;float:left;>474 Mana</span><span style=text-align:right;float:right;>Melee Range</span><br><span style=text-align:left;float:left;>Instant cast</span><span style=text-align:right;float:right;>10 sec cooldown</span><br>Requires Melee Weapon<br>An instant weapon attack that causes Holy damage to up to 4 enemies within 8 yards. The Divine Storm heals up to 3 party or raid members totalling 20% of the damage caused."						
		];
i++;

//Retribution Talents End^^
jsLoaded=true;//needed for ajax script loading


