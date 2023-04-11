//JETT
let jettSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),jettSkillQ()"
  class="pic-skill"
  src="skill/Q/jettQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),jettSkillE()"
  class="pic-skill"
  src="skill/E/jettE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick="skillC(),jettSkillC()"
  class="pic-skill"
  src="skill/C/jettC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),jettSkillX()"
  class="pic-skill pic-skill-active"
  src="skill/X/jettX.png"
  alt=""
/>
</div>`;
let jettBio =
  "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.";
let jettQ = "Q - UPDRAFT";
let jettQdesc = "INSTANTLY propel Jett high into the air.";
let jettE = "E - TAILWIND";
let jettEdesc =
  "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.";
let jettC = "C - CLOUDBURST";
let jettCdesc =
  "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.";
let jettX = "X - BLADE STORM";
let jettXdesc =
  "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.";

//
//RAZE
let razeSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),razeSkillQ()"
  class="pic-skill"
  src="skill/Q/razeQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),razeSkillE()"
  class="pic-skill"
  src="skill/E/razeE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),razeSkillC()"
  class="pic-skill aaaa"
  src="skill/C/razeC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),razeSkillX()"
  class="pic-skill"
  src="skill/X/razeX.png"
  alt=""
/>
</div>`;
let razeBio =
  "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”";
let razeQ = "Q - BLAST PACK";
let razeQdesc =
  "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.";
let razeE = "E - PAINT SHELLS";
let razeEdesc =
  "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.";
let razeC = "C - BOOM BOT";
let razeCdesc =
  "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.";
let razeX = "X - SHOWSTOPPER";
let razeXdesc =
  "EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.";

//
//BREACH
let breachSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),breachSkillQ()"
  class="pic-skill"
  src="skill/Q/breachQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),breachSkillE()"
  class="pic-skill"
  src="skill/E/breachE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),breachSkillC()"
  class="pic-skill aaaa"
  src="skill/C/breachC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),breachSkillX()"
  class="pic-skill"
  src="skill/X/breachX.png"
  alt=""
/>
</div>`;
let breachBio =
  "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.";
let breachQ = "Q - FLASHPOINT";
let breachQdesc =
  "EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.";
let breachE = "E - FAULT LINE";
let breachEdesc =
  "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.";
let breachC = "C - AFTERSHOCK";
let breachCdesc =
  "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.";
let breachX = "X - ROLLING THUNDER";
let breachXdesc =
  "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.";

//
//OMEN
let omenSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),omenSkillQ()"
  class="pic-skill"
  src="skill/Q/omenQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),omenSkillE()"
  class="pic-skill"
  src="skill/E/omenE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),omenSkillC()"
  class="pic-skill aaaa"
  src="skill/C/omenC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),omenSkillX()"
  class="pic-skill"
  src="skill/X/omenX.png"
  alt=""
/>
</div>`;
let omenBio =
  "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.";
let omenQ = "Q - PARANOIA";
let omenQdesc =
  "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.";
let omenE = "E - DARK COVER";
let omenEdesc =
  "EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the marker closer.";
let omenC = "C - SHROUDED STEP";
let omenCdesc =
  "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.";
let omenX = "X - FROM THE SHADOWS";
let omenXdesc =
  "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.";

//
//BRIMSTONE
let brimstoneSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),brimSkillQ()"
  class="pic-skill"
  src="skill/Q/brimstoneQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),brimSkillE()"
  class="pic-skill"
  src="skill/E/brimstoneE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),brimSkillC()"
  class="pic-skill aaaa"
  src="skill/C/brimstoneC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),brimSkillX()"
  class="pic-skill"
  src="skill/X/brimstoneX.png"
  alt=""
/>
</div>`;
let brimstoneBio =
  "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.";
let brimstoneQ = "Q - INCENDIARY";
let brimstoneQdesc =
  "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.";
let brimstoneE = "E - SKY SMOKE";
let brimstoneEdesc =
  "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.";
let brimstoneC = "C - STIM BEACON";
let brimstoneCdesc =
  "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.";
let brimstoneX = "X - ORBITAL STRIKE";
let brimstoneXdesc =
  "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.";

//
//phoenix
let phoenixSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),phoenixSkillQ()"
  class="pic-skill"
  src="skill/Q/phoenixQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),phoenixSkillE()"
  class="pic-skill"
  src="skill/E/phoenixE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),phoenixSkillC()"
  class="pic-skill aaaa"
  src="skill/C/phoenixC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),phoenixSkillX()"
  class="pic-skill"
  src="skill/X/phoenixX.png"
  alt=""
/>
</div>`;
let phoenixBio =
  "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.";

let phoenixQ = "Q - CURVEBALL";
let phoenixQdesc =
  "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.";

let phoenixE = "E - HOT HANDS";
let phoenixEdesc =
  "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.";

let phoenixC = "C - BLAZE";
let phoenixCdesc =
  "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.";
let phoenixX = "X - RUN IT BACK";
let phoenixXdesc =
  "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.";

//
//SAGE
let sageSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),sageSkillQ()"
  class="pic-skill"
  src="skill/Q/sageQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),sageSkillE()"
  class="pic-skill"
  src="skill/E/sageE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),sageSkillC()"
  class="pic-skill aaaa"
  src="skill/C/sageC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),sageSkillX()"
  class="pic-skill"
  src="skill/X/sageX.png"
  alt=""
/>
</div>`;
let sageBio =
  "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.";
let sageQ = "Q - SLOW ORB";
let sageQdesc =
  "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.";
let sageE = "E - HEALING ORB";
let sageEdesc =
  "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.";
let sageC = "C - BARRIER ORB";
let sageCdesc =
  "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.";
let sageX = "X - RESURRECTION";
let sageXdesc =
  "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.";

//
//SOVA
let sovaSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),sovaSkillQ()"
  class="pic-skill"
  src="skill/Q/sovaQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),sovaSkillE()"
  class="pic-skill"
  src="skill/E/sovaE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),sovaSkillC()"
  class="pic-skill aaaa"
  src="skill/C/sovaC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),sovaSkillX()"
  class="pic-skill"
  src="skill/X/sovaX.png"
  alt=""
/>
</div>`;
let sovaBio =
  "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.";
let sovaQ = "Q - SHOCK BOLT";
let sovaQdesc =
  "EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.";
let sovaE = "E - RECON BOLT";
let sovaEdesc =
  "EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.";
let sovaC = "C - OWL DRONE";
let sovaCdesc =
  "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.";
let sovaX = "X - HUNTER'S FURY";
let sovaXdesc =
  "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.";

//
//VIPER
let viperSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),viperSkillQ()"
  class="pic-skill"
  src="skill/Q/viperQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),viperSkillE()"
  class="pic-skill"
  src="skill/E/viperE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),viperSkillC()"
  class="pic-skill aaaa"
  src="skill/C/viperC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),viperSkillX()"
  class="pic-skill"
  src="skill/X/viperX.png"
  alt=""
/>
</div>`;
let viperBio =
  "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.";
let viperQ = "Q - POISON CLOUD";
let viperQdesc =
  "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.";
let viperE = "E - TOXIC SCREEN";
let viperEdesc =
  "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.";
let viperC = "C - SNAKE BITE";
let viperCdesc =
  "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.";
let viperX = "X - VIPER'S PIT";
let viperXdesc =
  "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.";

//
//CYPHER
let cypherSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),cypherSkillQ()"
  class="pic-skill"
  src="skill/Q/cypherQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),cypherSkillE()"
  class="pic-skill"
  src="skill/E/cypherE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),cypherSkillC()"
  class="pic-skill aaaa"
  src="skill/C/cypherC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),cypherSkillX()"
  class="pic-skill"
  src="skill/X/cypherX.png"
  alt=""
/>
</div>`;
let cypherBio =
  "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching. ";
let cypherQ = "Q - CYBER CAGE";
let cypherQdesc =
  "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.";
let cypherE = "E - SPYCAM";
let cypherEdesc =
  "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.";
let cypherC = "C - TRAPWIRE";
let cypherCdesc =
  "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.";
let cypherX = "X - NEURAL THEFT";
let cypherXdesc =
  "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.";

//
//REYNA
let reynaSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),reynaSkillQ()"
  class="pic-skill"
  src="skill/Q/reynaQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),reynaSkillE()"
  class="pic-skill"
  src="skill/E/reynaE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),reynaSkillC()"
  class="pic-skill aaaa"
  src="skill/C/reynaC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),reynaSkillX()"
  class="pic-skill"
  src="skill/X/reynaX.png"
  alt=""
/>
</div>`;
let reynaBio =
  "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.";
let reynaQ = "Q - DEVOUR";
let reynaQdesc =
  "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.";
let reynaE = "E - DISMISS";
let reynaEdesc =
  "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.";
let reynaC = "C - LEER";
let reynaCdesc =
  "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.";
let reynaX = "X - EMPRESS";
let reynaXdesc =
  "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.";

//
//KILLJOY
let killjoySKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),kjSkillQ()"
  class="pic-skill"
  src="skill/Q/kjQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),kjSkillE()"
  class="pic-skill"
  src="skill/E/kjE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),kjSkillC()"
  class="pic-skill aaaa"
  src="skill/C/kjC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),kjSkillX()"
  class="pic-skill"
  src="skill/X/kjX.png"
  alt=""
/>
</div>`;
let killjoyBio =
  "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.";
let kjQ = "Q - ALARMBOT";
let kjQdesc =
  "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.";
let kjE = "E - TURRET";
let kjEdesc =
  "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.";
let kjC = "C - NANOSWARM";
let kjCdesc =
  "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.";
let kjX = "X - LOCKDOWN";
let kjXdesc =
  "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.";

//
//SKYE
let skyeSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),skyeSkillQ()"
  class="pic-skill"
  src="skill/Q/skyeQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),skyeSkillE()"
  class="pic-skill"
  src="skill/E/skyeE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),skyeSkillC()"
  class="pic-skill aaaa"
  src="skill/C/skyeC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),skyeSkillX()"
  class="pic-skill"
  src="skill/X/skyeX.png"
  alt=""
/>
</div>`;
let skyeBio =
  "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.";
let skyeQ = "Q - TRAILBLAZER";
let skyeQdesc =
  "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.";
let skyeE = "E - GUIDING LIGHT";
let skyeEdesc =
  "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.";
let skyeC = "C - REGROWTH";
let skyeCdesc =
  "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.";
let skyeX = "X - SEEKERS";
let skyeXdesc =
  "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.";

//
//YORU
let yoruSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),yoruSkillQ()"
  class="pic-skill"
  src="skill/Q/yoruQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),yoruSkillE()"
  class="pic-skill"
  src="skill/E/yoruE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),yoruSkillC()"
  class="pic-skill aaaa"
  src="skill/C/yoruC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),yoruSkillX()"
  class="pic-skill"
  src="skill/X/yoruX.png"
  alt=""
/>
</div>`;
let yoruBio =
  "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.";
let yoruQ = "Q - BLINDSIDE";
let yoruQdesc =
  "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in the world.";
let yoruE = "E - GATECRASH";
let yoruEdesc =
  "EQUIP to harness a rift tether FIRE to send the tether out moving forward ALT FIRE to place a tether in place ACTIVATE to teleport to the tether's location.";
let yoruC = "C - FAKEOUT";
let yoruCdesc =
  "EQUIP an echo that mimics footsteps when activated FIRE to activate and send the echo forward ALT FIRE to place an echo in place USE the inactive echo to send it forward.";
let yoruX = "X - DIMENSIONAL DRIFT";
let yoruXdesc =
  "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.";

//
//ASTRA
let astraSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),astraSkillQ()"
  class="pic-skill"
  src="skill/Q/astraQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),astraSkillE()"
  class="pic-skill"
  src="skill/E/astraE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),astraSkillC()"
  class="pic-skill"
  src="skill/C/astraC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),astraSkillX()"
  class="pic-skill"
  src="skill/X/astraX.png"
  alt=""
/>
</div>`;
let astraBio =
  "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.";
let astraQ = "Q - NOVA PULSE";
let astraQdesc =
  "Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.";
let astraE = "E - NEBULA";
let astraEdesc =
  "Place Stars in Astral Form (X) ACTIVATE a Star to transform it into a Nebula (smoke). Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star's location before returning..";
let astraC = "C - GRAVITY WELL";
let astraCdesc =
  "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile..";
let astraX = "X - ASTRAL FORM / COSMIC DIVIDE";
let astraXdesc =
  "ACTIVATE (X) to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio..";

//
//KAY/O
let kayoSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),kayoSkillQ()"
  class="pic-skill"
  src="skill/Q/kayoQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),kayoSkillE()"
  class="pic-skill"
  src="skill/E/kayoE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),kayoSkillC()"
  class="pic-skill aaaa"
  src="skill/C/kayoC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),kayoSkillX()"
  class="pic-skill"
  src="skill/X/kayoX.png"
  alt=""
/>
</div>`;
let kayoBio =
  "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.";
let kayoQ = "Q - FLASH/DRIVE";
let kayoQdesc =
  "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.";
let kayoE = "E - ZERO/POINT";
let kayoEdesc =
  "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.";
let kayoC = "C - FRAG/MENT";
let kayoCdesc =
  "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.";
let kayoX = "X - NULL/CMD";
let kayoXdesc =
  "INSTANTLY overload with polarized radianite energy that empowers KAY/O and causes large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration.";

//
//CHAMBER
let chamberSKill = `<div class="skill-Q mx-5">
<img
  id="skillQ"
  onclick="skillQ(),chamberSkillQ()"
  class="pic-skill"
  src="skill/Q/chamberQ.png"
  alt=""
/>
</div>
<div class="skill-E mx-4">
<img
  id="skillE"
  onclick="skillE(),chamberSkillE()"
  class="pic-skill"
  src="skill/E/chamberE.png"
  alt=""
/>
</div>
<div class="skill-C mx-4">
<img
  id="skillC"
  onclick=" skillC(),chamberSkillC()"
  class="pic-skill aaaa"
  src="skill/C/chamberC.png"
  alt=""
/>
</div>
<div class="skill-X mx-4">
<img
  id="skillX"
  onclick="skillX(),chamberSkillX()"
  class="pic-skill"
  src="skill/X/chamberX.png"
  alt=""
/>
</div>`;
let chamberBio =
  "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.";
let chamberQ = "Q - HEADHUNTER";
let chamberQdesc =
  "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.";
let chamberE = "E - RENDEZVOUS";
let chamberEdesc =
  "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED.";
let chamberC = "C - TRADEMARK ";
let chamberCdesc =
  "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it.";
let chamberX = "X - TOUR DE FORCE";
let chamberXdesc =
  "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.";

//
// Agent  role
let duelist = "|Duelist";
let controller = "|Controller";
let initiator = "|Initiator";
let sentinel = "|Sentinel";

//
// Biography
let bio = "//Biography";

//
// blank var
let blankvar = "";

//
// AGENT FUNCTION

// Jett
function callJett() {
  document.body.style.backgroundColor = "#3b454e";
  document.getElementById("bg1").src = "Agent/jett.png";
  document.getElementById("bg2").src = "bg2/jett-draw2.png";
  document.getElementById("roleName").innerText = duelist;
  document.getElementById("rolePic").src = "role/Duelist.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = jettBio;
  document.getElementById("skillContent").innerHTML = jettSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function jettSkillQ() {
  document.getElementById("skillName").innerText = jettQ;
  document.getElementById("skillDesc").innerText = jettQdesc;
}
function jettSkillE() {
  document.getElementById("skillName").innerText = jettE;
  document.getElementById("skillDesc").innerText = jettEdesc;
}
function jettSkillC() {
  document.getElementById("skillName").innerText = jettC;
  document.getElementById("skillDesc").innerText = jettCdesc;
}
function jettSkillX() {
  document.getElementById("skillName").innerText = jettX;
  document.getElementById("skillDesc").innerText = jettXdesc;
}
// Raze
function callRaze() {
  document.body.style.backgroundColor = "#4e4b3b";
  document.getElementById("bg1").src = "Agent/raze.png";
  document.getElementById("bg2").src = "bg2/raze1.png";
  document.getElementById("roleName").innerText = duelist;
  document.getElementById("rolePic").src = "role/Duelist.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = razeBio;
  document.getElementById("skillContent").innerHTML = razeSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function razeSkillQ() {
  document.getElementById("skillName").innerText = razeQ;
  document.getElementById("skillDesc").innerText = razeQdesc;
}
function razeSkillE() {
  document.getElementById("skillName").innerText = razeE;
  document.getElementById("skillDesc").innerText = razeEdesc;
}
function razeSkillC() {
  document.getElementById("skillName").innerText = razeC;
  document.getElementById("skillDesc").innerText = razeCdesc;
}
function razeSkillX() {
  document.getElementById("skillName").innerText = razeX;
  document.getElementById("skillDesc").innerText = razeXdesc;
}

// Breach
function callBreach() {
  document.body.style.backgroundColor = "#4e473b";
  document.getElementById("bg1").src = "Agent/breach.png";
  document.getElementById("bg2").src = "bg2/breach1.png";
  document.getElementById("roleName").innerText = initiator;
  document.getElementById("rolePic").src = "role/initiator.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = breachBio;
  document.getElementById("skillContent").innerHTML = breachSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function breachSkillQ() {
  document.getElementById("skillName").innerText = breachQ;
  document.getElementById("skillDesc").innerText = breachQdesc;
}
function breachSkillE() {
  document.getElementById("skillName").innerText = breachE;
  document.getElementById("skillDesc").innerText = breachEdesc;
}
function breachSkillC() {
  document.getElementById("skillName").innerText = breachC;
  document.getElementById("skillDesc").innerText = breachCdesc;
}
function breachSkillX() {
  document.getElementById("skillName").innerText = breachX;
  document.getElementById("skillDesc").innerText = breachXdesc;
}

// Omen
function callOmen() {
  document.body.style.backgroundColor = "#3b3e4e";
  document.getElementById("bg1").src = "Agent/omen.png";
  document.getElementById("bg2").src = "bg2/omen1.png";
  document.getElementById("roleName").innerText = controller;
  document.getElementById("rolePic").src = "role/controller.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = omenBio;
  document.getElementById("skillContent").innerHTML = omenSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function omenSkillQ() {
  document.getElementById("skillName").innerText = omenQ;
  document.getElementById("skillDesc").innerText = omenQdesc;
}
function omenSkillE() {
  document.getElementById("skillName").innerText = omenE;
  document.getElementById("skillDesc").innerText = omenEdesc;
}
function omenSkillC() {
  document.getElementById("skillName").innerText = omenC;
  document.getElementById("skillDesc").innerText = omenCdesc;
}
function omenSkillX() {
  document.getElementById("skillName").innerText = omenX;
  document.getElementById("skillDesc").innerText = omenXdesc;
}

// Brimstone
function callBrimstone() {
  document.body.style.backgroundColor = "#4e443b";
  document.getElementById("bg1").src = "Agent/brimstone.png";
  document.getElementById("bg2").src = "bg2/brimstone1.png";
  document.getElementById("roleName").innerText = controller;
  document.getElementById("rolePic").src = "role/controller.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = brimstoneBio;
  document.getElementById("skillContent").innerHTML = brimstoneSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function brimSkillQ() {
  document.getElementById("skillName").innerText = brimstoneQ;
  document.getElementById("skillDesc").innerText = brimstoneQdesc;
}
function brimSkillE() {
  document.getElementById("skillName").innerText = brimstoneE;
  document.getElementById("skillDesc").innerText = brimstoneEdesc;
}
function brimSkillC() {
  document.getElementById("skillName").innerText = brimstoneC;
  document.getElementById("skillDesc").innerText = brimstoneCdesc;
}
function brimSkillX() {
  document.getElementById("skillName").innerText = brimstoneX;
  document.getElementById("skillDesc").innerText = brimstoneXdesc;
}

// Phoenix
function callPhoenix() {
  document.body.style.backgroundColor = "#4e3e3b";
  document.getElementById("bg1").src = "Agent/phoenix.png";
  document.getElementById("bg2").src = "bg2/phoenix1.png";
  document.getElementById("roleName").innerText = duelist;
  document.getElementById("rolePic").src = "role/duelist.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = phoenixBio;
  document.getElementById("skillContent").innerHTML = phoenixSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function phoenixSkillQ() {
  document.getElementById("skillName").innerText = phoenixQ;
  document.getElementById("skillDesc").innerText = phoenixQdesc;
}
function phoenixSkillE() {
  document.getElementById("skillName").innerText = phoenixE;
  document.getElementById("skillDesc").innerText = phoenixEdesc;
}
function phoenixSkillC() {
  document.getElementById("skillName").innerText = phoenixC;
  document.getElementById("skillDesc").innerText = phoenixCdesc;
}
function phoenixSkillX() {
  document.getElementById("skillName").innerText = phoenixX;
  document.getElementById("skillDesc").innerText = phoenixXdesc;
}

// Sage
function callSage() {
  document.body.style.backgroundColor = "#3b4e4e";
  document.getElementById("bg1").src = "Agent/sage.png";
  document.getElementById("bg2").src = "bg2/sage1.png";
  document.getElementById("roleName").innerText = sentinel;
  document.getElementById("rolePic").src = "role/sentinel.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = sageBio;
  document.getElementById("skillContent").innerHTML = sageSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function sageSkillQ() {
  document.getElementById("skillName").innerText = sageQ;
  document.getElementById("skillDesc").innerText = sageQdesc;
}
function sageSkillE() {
  document.getElementById("skillName").innerText = sageE;
  document.getElementById("skillDesc").innerText = sageEdesc;
}
function sageSkillC() {
  document.getElementById("skillName").innerText = sageC;
  document.getElementById("skillDesc").innerText = sageCdesc;
}
function sageSkillX() {
  document.getElementById("skillName").innerText = sageX;
  document.getElementById("skillDesc").innerText = sageXdesc;
}

// Sova
function callSova() {
  document.body.style.backgroundColor = "#3b414e";
  document.getElementById("bg1").src = "Agent/sova.png";
  document.getElementById("bg2").src = "bg2/sova1.png";
  document.getElementById("roleName").innerText = initiator;
  document.getElementById("rolePic").src = "role/initiator.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = sovaBio;
  document.getElementById("skillContent").innerHTML = sovaSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function sovaSkillQ() {
  document.getElementById("skillName").innerText = sovaQ;
  document.getElementById("skillDesc").innerText = sovaQdesc;
}
function sovaSkillE() {
  document.getElementById("skillName").innerText = sovaE;
  document.getElementById("skillDesc").innerText = sovaEdesc;
}
function sovaSkillC() {
  document.getElementById("skillName").innerText = sovaC;
  document.getElementById("skillDesc").innerText = sovaCdesc;
}
function sovaSkillX() {
  document.getElementById("skillName").innerText = sovaX;
  document.getElementById("skillDesc").innerText = sovaXdesc;
}

// Viper
function callViper() {
  document.body.style.backgroundColor = "#3b4e40";
  document.getElementById("bg1").src = "Agent/viper.png";
  document.getElementById("bg2").src = "bg2/viper1.png";
  document.getElementById("roleName").innerText = controller;
  document.getElementById("rolePic").src = "role/initiator.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = viperBio;
  document.getElementById("skillContent").innerHTML = viperSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function viperSkillQ() {
  document.getElementById("skillName").innerText = viperQ;
  document.getElementById("skillDesc").innerText = viperQdesc;
}
function viperSkillE() {
  document.getElementById("skillName").innerText = viperE;
  document.getElementById("skillDesc").innerText = viperEdesc;
}
function viperSkillC() {
  document.getElementById("skillName").innerText = viperC;
  document.getElementById("skillDesc").innerText = viperCdesc;
}
function viperSkillX() {
  document.getElementById("skillName").innerText = viperX;
  document.getElementById("skillDesc").innerText = viperXdesc;
}

// Cypher
function callCypher() {
  document.body.style.backgroundColor = "#666665";
  document.getElementById("bg1").src = "Agent/cypher.png";
  document.getElementById("bg2").src = "bg2/cypher1.png";
  document.getElementById("roleName").innerText = sentinel;
  document.getElementById("rolePic").src = "role/sentinel.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = cypherBio;
  document.getElementById("skillContent").innerHTML = cypherSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function cypherSkillQ() {
  document.getElementById("skillName").innerText = cypherQ;
  document.getElementById("skillDesc").innerText = cypherQdesc;
}
function cypherSkillE() {
  document.getElementById("skillName").innerText = cypherE;
  document.getElementById("skillDesc").innerText = cypherEdesc;
}
function cypherSkillC() {
  document.getElementById("skillName").innerText = cypherC;
  document.getElementById("skillDesc").innerText = cypherCdesc;
}
function cypherSkillX() {
  document.getElementById("skillName").innerText = cypherX;
  document.getElementById("skillDesc").innerText = cypherXdesc;
}

// Reyna
function callReyna() {
  document.body.style.backgroundColor = "#4e3b46";
  document.getElementById("bg1").src = "Agent/reyna.png";
  document.getElementById("bg2").src = "bg2/reyna1.png";
  document.getElementById("roleName").innerText = duelist;
  document.getElementById("rolePic").src = "role/duelist.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = reynaBio;
  document.getElementById("skillContent").innerHTML = reynaSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function reynaSkillQ() {
  document.getElementById("skillName").innerText = reynaQ;
  document.getElementById("skillDesc").innerText = reynaQdesc;
}
function reynaSkillE() {
  document.getElementById("skillName").innerText = reynaE;
  document.getElementById("skillDesc").innerText = reynaEdesc;
}
function reynaSkillC() {
  document.getElementById("skillName").innerText = reynaC;
  document.getElementById("skillDesc").innerText = reynaCdesc;
}
function reynaSkillX() {
  document.getElementById("skillName").innerText = reynaX;
  document.getElementById("skillDesc").innerText = reynaXdesc;
}

// Killjoy
function callKilljoy() {
  document.body.style.backgroundColor = "#4e4e3b";
  document.getElementById("bg1").src = "Agent/killjoy.png";
  document.getElementById("bg2").src = "bg2/KJ1.png";
  document.getElementById("roleName").innerText = sentinel;
  document.getElementById("rolePic").src = "role/sentinel.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = killjoyBio;
  document.getElementById("skillContent").innerHTML = killjoySKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function kjSkillQ() {
  document.getElementById("skillName").innerText = kjQ;
  document.getElementById("skillDesc").innerText = kjQdesc;
}
function kjSkillE() {
  document.getElementById("skillName").innerText = kjE;
  document.getElementById("skillDesc").innerText = kjEdesc;
}
function kjSkillC() {
  document.getElementById("skillName").innerText = kjC;
  document.getElementById("skillDesc").innerText = kjCdesc;
}
function kjSkillX() {
  document.getElementById("skillName").innerText = kjX;
  document.getElementById("skillDesc").innerText = kjXdesc;
}

// Skye
function callSkye() {
  document.body.style.backgroundColor = "#444e3b";
  document.getElementById("bg1").src = "Agent/skye.png";
  document.getElementById("bg2").src = "bg2/skye1.png";
  document.getElementById("roleName").innerText = initiator;
  document.getElementById("rolePic").src = "role/initiator.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = skyeBio;
  document.getElementById("skillContent").innerHTML = skyeSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function skyeSkillQ() {
  document.getElementById("skillName").innerText = skyeQ;
  document.getElementById("skillDesc").innerText = skyeQdesc;
}
function skyeSkillE() {
  document.getElementById("skillName").innerText = skyeE;
  document.getElementById("skillDesc").innerText = skyeEdesc;
}
function skyeSkillC() {
  document.getElementById("skillName").innerText = skyeC;
  document.getElementById("skillDesc").innerText = skyeCdesc;
}
function skyeSkillX() {
  document.getElementById("skillName").innerText = skyeX;
  document.getElementById("skillDesc").innerText = skyeXdesc;
}

// Yoru
function callYoru() {
  document.body.style.backgroundColor = "#3c3b4e";
  document.getElementById("bg1").src = "Agent/yoru.png";
  document.getElementById("bg2").src = "bg2/yoru1.png";
  document.getElementById("roleName").innerText = duelist;
  document.getElementById("rolePic").src = "role/duelist.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = yoruBio;
  document.getElementById("skillContent").innerHTML = yoruSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function yoruSkillQ() {
  document.getElementById("skillName").innerText = yoruQ;
  document.getElementById("skillDesc").innerText = yoruQdesc;
}
function yoruSkillE() {
  document.getElementById("skillName").innerText = yoruE;
  document.getElementById("skillDesc").innerText = yoruEdesc;
}
function yoruSkillC() {
  document.getElementById("skillName").innerText = yoruC;
  document.getElementById("skillDesc").innerText = yoruCdesc;
}
function yoruSkillX() {
  document.getElementById("skillName").innerText = yoruX;
  document.getElementById("skillDesc").innerText = yoruXdesc;
}

// Astra
function callAstra() {
  document.body.style.backgroundColor = "#493b4e";
  document.getElementById("bg1").src = "Agent/astra.png";
  document.getElementById("bg2").src = "bg2/astra1.png";
  document.getElementById("roleName").innerText = controller;
  document.getElementById("rolePic").src = "role/controller.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = astraBio;
  document.getElementById("skillContent").innerHTML = astraSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function astraSkillQ() {
  document.getElementById("skillName").innerText = astraQ;
  document.getElementById("skillDesc").innerText = astraQdesc;
}
function astraSkillE() {
  document.getElementById("skillName").innerText = astraE;
  document.getElementById("skillDesc").innerText = astraEdesc;
}
function astraSkillC() {
  document.getElementById("skillName").innerText = astraC;
  document.getElementById("skillDesc").innerText = astraCdesc;
}
function astraSkillX() {
  document.getElementById("skillName").innerText = astraX;
  document.getElementById("skillDesc").innerText = astraXdesc;
}

// Kayo
function callKayo() {
  document.body.style.backgroundColor = "#3b434e";
  document.getElementById("bg1").src = "Agent/kayo.png";
  document.getElementById("bg2").src = "bg2/kayo1.png";
  document.getElementById("roleName").innerText = initiator;
  document.getElementById("rolePic").src = "role/initiator.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = kayoBio;
  document.getElementById("skillContent").innerHTML = kayoSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function kayoSkillQ() {
  document.getElementById("skillName").innerText = kayoQ;
  document.getElementById("skillDesc").innerText = kayoQdesc;
}
function kayoSkillE() {
  document.getElementById("skillName").innerText = kayoE;
  document.getElementById("skillDesc").innerText = kayoEdesc;
}
function kayoSkillC() {
  document.getElementById("skillName").innerText = kayoC;
  document.getElementById("skillDesc").innerText = kayoCdesc;
}
function kayoSkillX() {
  document.getElementById("skillName").innerText = kayoX;
  document.getElementById("skillDesc").innerText = kayoXdesc;
}

// Chamber
function callChamber() {
  document.body.style.backgroundColor = "#4e3b4d";
  document.getElementById("bg1").src = "Agent/chamber.png";
  document.getElementById("bg2").src = "bg2/chamber1.png";
  document.getElementById("roleName").innerText = sentinel;
  document.getElementById("rolePic").src = "role/sentinel.png";
  document.getElementById("bio").innerText = bio;
  document.getElementById("biography").innerText = chamberBio;
  document.getElementById("skillContent").innerHTML = chamberSKill;
  document.getElementById("skillName").innerText = blankvar;
  document.getElementById("skillDesc").innerText = blankvar;
}
function chamberSkillQ() {
  document.getElementById("skillName").innerText = chamberQ;
  document.getElementById("skillDesc").innerText = chamberQdesc;
}
function chamberSkillE() {
  document.getElementById("skillName").innerText = chamberE;
  document.getElementById("skillDesc").innerText = chamberEdesc;
}
function chamberSkillC() {
  document.getElementById("skillName").innerText = chamberC;
  document.getElementById("skillDesc").innerText = chamberCdesc;
}
function chamberSkillX() {
  document.getElementById("skillName").innerText = chamberX;
  document.getElementById("skillDesc").innerText = chamberXdesc;
}
