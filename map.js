let modalImage = document.getElementById("modalImage");
let mapContent = document.getElementById("mapContent");

// ASCENT
let ascent = `<div class="bg-map animate__animated animate__fadeIn animate__slow">
<img src="map/ascent.png" alt="">
</div>         
<div class="col-lg-6 map-image text-center animate__animated animate__fadeInLeft">
  <img class="blind-map mt-5" src="map/blindmap/ascent.png" alt="">
</div>
<div class="col-lg-6 d-flex text-desc text-start ps-5 animate__animated animate__fadeInRight">
<div class="col-6">
  <p 
  onclick="ascentDS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Defender Spawn
  </p>
  <p 
  onclick="ascentASite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Site
  </p>
  <p 
  onclick="ascentAGarden()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Garden
  </p>
  <p 
  onclick="ascentALink()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Link
  </p>
  <p 
  onclick="ascentAMain()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Main
  </p>
  <p 
  onclick="ascentALobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Lobby
  </p>
  <p 
  onclick="ascentCubby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Cubby
  </p>
</div>
<div class="col-6">
  <p 
  onclick="ascentAS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Attacker Spawn
  </p>
  <p 
  onclick="ascentMid()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Mid
  </p>
  <p 
  onclick="ascentMarket()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Market
  </p>
  <p 
  onclick="ascentAWindow()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Window
  </p>
  <p 
  onclick="ascentBLobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Lobby
  </p>
  <p 
  onclick="ascentBSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B site
  </p>
  <p 
  onclick="ascentBMain()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B main
  </p>
</div>
</div>  
<div class="col-lg-6"></div>
<div class="col-lg-6 map-story animate__animated animate__fadeInUp">
<div class="story">//Story</div>
<div class="story-text">An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.</div>
</div>`;

function ascentAS() {
  modalImage.src = "map/ascent/aSpawn.png";
}
function ascentDS() {
  modalImage.src = "map/ascent/dSpawn.png";
}
function ascentAGarden() {
  modalImage.src = "map/ascent/aGarden.png";
}
function ascentALink() {
  modalImage.src = "map/ascent/aLink.png";
}
function ascentASite() {
  modalImage.src = "map/ascent/aSite.png";
}
function ascentAMain() {
  modalImage.src = "map/ascent/aMain.png";
}
function ascentALobby() {
  modalImage.src = "map/ascent/aLobby.png";
}
function ascentCubby() {
  modalImage.src = "map/ascent/cubby.png";
}
function ascentMid() {
  modalImage.src = "map/ascent/mid.png";
}
function ascentMarket() {
  modalImage.src = "map/ascent/market.png";
}
function ascentAWindow() {
  modalImage.src = "map/ascent/aWindow.png";
}
function ascentBLobby() {
  modalImage.src = "map/ascent/bLobby.png";
}
function ascentBSite() {
  modalImage.src = "map/ascent/bSite.png";
}
function ascentBMain() {
  modalImage.src = "map/ascent/bMain.png";
}

//BIND
let bind = `<div class="bg-map animate__animated animate__fadeIn animate__slow">
<img src="map/bind.png" alt="">
</div>         
<div class="col-lg-6 map-image text-center animate__animated animate__fadeInLeft">
  <img class="blind-map mt-5" src="map/blindmap/bind.png" alt="">
</div>
<div class="col-lg-6 d-flex text-desc text-start ps-5 animate__animated animate__fadeInRight">
<div class="col-6">
  <p 
  onclick="bindDS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> defender Side Spawn
  </p>
  <p 
  onclick="bindBHall()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B hall
  </p>
  <p 
  onclick="bindBSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Site
  </p>
  <p 
  onclick="bindBLong()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Long
  </p>
  <p 
  onclick="bindBShort()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Short
  </p>
  <p 
  onclick="bindBLobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Lobby
  </p>
  <p 
  onclick="bindTeleport()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Teleport
  </p>
</div>
<div class="col-6">
  <p 
  onclick="bindAS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Attacker Side Spawn
  </p>
  <p 
  onclick="bindATower()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Tower
  </p>
  <p 
  onclick="bindASite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Site
  </p>
  <p 
  onclick="bindABath()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Bath
  </p>
  <p 
  onclick="bindAShort()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Short
  </p>
  <p 
  onclick="bindALobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Lobby
  </p>
  <p 
  onclick="bindExitTeleport()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Exit Teleport
  </p>
</div>
</div>  
<div class="col-lg-6"></div>
<div class="col-lg-6 map-story animate__animated animate__fadeInUp">
<div class="story">//Story</div>
<div class="story-text">Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.</div>
</div>`;

function bindAS() {
  modalImage.src = "map/bind/aSpawn.png";
}
function bindDS() {
  modalImage.src = "map/bind/dSpawn.png";
}
function bindABath() {
  modalImage.src = "map/bind/aBath.png";
}
function bindALobby() {
  modalImage.src = "map/bind/aLobby.png";
}
function bindAShort() {
  modalImage.src = "map/bind/aShort.png";
}
function bindASite() {
  modalImage.src = "map/bind/aSite.png";
}
function bindATower() {
  modalImage.src = "map/bind/aTower.png";
}
function bindBHall() {
  modalImage.src = "map/bind/bHall.png";
}
function bindBLobby() {
  modalImage.src = "map/bind/bLobby.png";
}
function bindBLong() {
  modalImage.src = "map/bind/bLong.png";
}
function bindBShort() {
  modalImage.src = "map/bind/bShort.png";
}
function bindBSite() {
  modalImage.src = "map/bind/bSite.png";
}
function bindExitTeleport() {
  modalImage.src = "map/bind/teleport.png";
}
function bindTeleport() {
  modalImage.src = "map/bind/exitTP.png";
}

//Fracture
let fracture = ` <div class="bg-map animate__animated animate__fadeIn animate__slow">
<img src="map/fracture.png" alt="">
</div>         
<div class="col-lg-6 map-image text-center animate__animated animate__fadeInLeft">
  <img class="blind-map mt-5" src="map/blindmap/fracture.png" alt="">
</div>
<div class="col-lg-6 d-flex text-desc text-start ps-5 animate__animated animate__fadeInRight">
<div class="col-6">
  <p 
  onclick="fractureDS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Defender Side Spawn
  </p>
  <p 
  onclick="fractureAMain()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Main
  </p>
  <p 
  onclick="fractureASite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Site
  </p>
  <p 
  onclick="fractureADoor()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Door
  </p>
  <p 
  onclick="fractureADrop()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Drop
  </p>
  <p 
  onclick="fractureADish()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Dish
  </p>
  <p 
  onclick="fractureABridge()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Attacker Side Bridge
  </p>
</div>
<div class="col-6">
  <p 
  onclick="fractureAS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Attacker side Spawn
  </p>
  <p 
  onclick="fractureBMain()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Main
  </p>
  <p 
  onclick="fractureBTunnel()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Tunnel
  </p>
  <p 
  onclick="fractureBGenerator()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Generator
  </p>
  <p 
  onclick="fractureBSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Site
  </p>
  <p 
  onclick="fractureBTower()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Tower
  </p>
  <p 
  onclick="fractureBArcade()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Arcade
  </p>
</div>
</div>  
<div class="col-lg-6"></div>
<div class="col-lg-6 map-story animate__animated animate__fadeInUp">
<div class="story">//Story</div>
<div class="story-text">Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.</div>
</div>`;

function fractureDS() {
  modalImage.src = "map/fracture/dSpawn.png";
}
function fractureAS() {
  modalImage.src = "map/fracture/Aspawn.png";
}
function fractureADoor() {
  modalImage.src = "map/fracture/aDoor.png";
}
function fractureAMain() {
  modalImage.src = "map/fracture/aMain.png";
}
function fractureASite() {
  modalImage.src = "map/fracture/aSite.png";
}
function fractureADrop() {
  modalImage.src = "map/fracture/aDrop.png";
}
function fractureADish() {
  modalImage.src = "map/fracture/aDish.png";
}
function fractureABridge() {
  modalImage.src = "map/fracture/aBridge.png";
}
function fractureBArcade() {
  modalImage.src = "map/fracture/bArcade.png";
}
function fractureBTower() {
  modalImage.src = "map/fracture/bTower.png";
}
function fractureBSite() {
  modalImage.src = "map/fracture/bSite.png";
}
function fractureBGenerator() {
  modalImage.src = "map/fracture/bGenerator.png";
}
function fractureBTunnel() {
  modalImage.src = "map/fracture/bTunnel.png";
}
function fractureBMain() {
  modalImage.src = "map/fracture/bMain.png";
}

//Breeze
let breeze = `<div class="bg-map animate__animated animate__fadeIn animate__slow">
<img src="map/breeze.png" alt="">
</div>         
<div class="col-lg-6 map-image text-center animate__animated animate__fadeInLeft">
  <img class="blind-map mt-5" src="map/blindmap/breeze.png" alt="">
</div>
<div class="col-lg-6 d-flex text-desc text-start ps-5 animate__animated animate__fadeInRight">
<div class="col-6">
  <p 
  onclick="breezeDS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Defender Spawn
  </p>
  <p 
  onclick="breezeArches()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Arches
  </p>
  <p 
  onclick="breezeBSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Site
  </p>
  <p 
  onclick="breezeBMain()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Main
  </p>
  <p 
  onclick="breezeElbow()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Elbow
  </p>
  <p 
  onclick="breezeMidNest()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Mid Nest
  </p>
  <p 
  onclick="breezeMidCannon()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Mid Cannon
  </p>
</div>
<div class="col-6">
  <p 
  onclick="breezeAS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Attacker Spawn
  </p>
  <p 
  onclick="breezeALobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Lobby
  </p>
  <p 
  onclick="breezeAHall()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Hall
  </p>
  <p 
  onclick="breezeCave()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Cave
  </p>
  <p 
  onclick="breezeASite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Site
  </p>
  <p 
  onclick="breezeABridge()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Bridge
  </p>
  <p 
  onclick="breezeMid()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Mid
  </p>
</div>
</div>  
<div class="col-lg-6"></div>
<div class="col-lg-6 map-story animate__animated animate__fadeInUp">
<div class="story">//Story</div>
<div class="story-text">Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.</div>
</div>`;

function breezeDS() {
  modalImage.src = "map/breeze/dSpawn.png";
}
function breezeAS() {
  modalImage.src = "map/breeze/aSpawn.png";
}
function breezeArches() {
  modalImage.src = "map/breeze/arches.png";
}
function breezeMidNest() {
  modalImage.src = "map/breeze/midNest.png";
}
function breezeBSite() {
  modalImage.src = "map/breeze/bSite.png";
}
function breezeElbow() {
  modalImage.src = "map/breeze/elbow.png";
}
function breezeBMain() {
  modalImage.src = "map/breeze/bMain.png";
}
function breezeMid() {
  modalImage.src = "map/breeze/mid.png";
}
function breezeMidCannon() {
  modalImage.src = "map/breeze/midCannon.png";
}
function breezeABridge() {
  modalImage.src = "map/breeze/aBridge.png";
}
function breezeAHall() {
  modalImage.src = "map/breeze/aHall.png";
}
function breezeASite() {
  modalImage.src = "map/breeze/aSite.png";
}
function breezeALobby() {
  modalImage.src = "map/breeze/aLobby.png";
}
function breezeCave() {
  modalImage.src = "aCave";
}

//Split
let split = ` <div class="bg-map animate__animated animate__fadeIn animate__slow">
<img src="map/split.png" alt="">
</div>         
<div class="col-lg-6 map-image text-center animate__animated animate__fadeInLeft">
  <img class="blind-map mt-5" src="map/blindmap/split.png" alt="">
</div>
<div class="col-lg-6 d-flex text-desc text-start ps-5 animate__animated animate__fadeInRight">
<div class="col-6">
  <p 
  onclick="splitDS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Defender Spawn
  </p>
  <p 
  onclick="splitASite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A SIte
  </p>
  <p 
  onclick="splitATower()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Tower
  </p>
  <p 
  onclick="splitVent()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Vent
  </p>
  <p 
  onclick="splitAMain()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Main
  </p>
  <p 
  onclick="splitALobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Lobby
  </p>
  <p 
  onclick="splitASewer()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Sewer
  </p>
</div>
<div class="col-6">
  <p 
  onclick="splitAS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Attacker Spawn
  </p>
  <p 
  onclick="splitBLobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Lobby
  </p>
  <p 
  onclick="splitMid()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Mid
  </p>
  <p 
  onclick="splitBMain()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Main
  </p>
  <p 
  onclick="splitBTower()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Tower
  </p>
  <p 
  onclick="splitBSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Site
  </p>
  <p 
  onclick="splitBAlley()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Alley
  </p>
</div>
</div>  
<div class="col-lg-6"></div>
<div class="col-lg-6 map-story animate__animated animate__fadeInUp">
<div class="story">//Story</div>
<div class="story-text">If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.</div>
</div>`;

function splitAS() {
  modalImage.src = "map/split/aSpawn.png";
}
function splitDS() {
  modalImage.src = "map/split/dSpawn.png";
}
function splitASewer() {
  modalImage.src = "map/split/aSewer.png";
}
function splitASite() {
  modalImage.src = "map/split/aSite.png";
}
function splitBSite() {
  modalImage.src = "map/split/bSite.png";
}
function splitALobby() {
  modalImage.src = "map/split/aLobby.png";
}
function splitAMain() {
  modalImage.src = "map/split/aMain.png";
}
function splitATower() {
  modalImage.src = "map/split/aTower.png";
}
function splitVent() {
  modalImage.src = "map/split/vent.png";
}
function splitMid() {
  modalImage.src = "map/split/mid.png";
}
function splitBLobby() {
  modalImage.src = "map/split/bLobby.png";
}
function splitBMain() {
  modalImage.src = "map/split/bMain.png";
}
function splitBTower() {
  modalImage.src = "map/split/bTower.png";
}
function splitBAlley() {
  modalImage.src = "map/split/bAlley.png";
}

//IceBox
let icebox = `<div class="bg-map animate__animated animate__fadeIn animate__slow">
<img src="map/icebox.png" alt="">
</div>         
<div class="col-lg-6 map-image text-center animate__animated animate__fadeInLeft">
  <img class="blind-map mt-5" src="map/blindmap/icebox.png" alt="">
</div>
<div class="col-lg-6 d-flex text-desc text-start ps-5 animate__animated animate__fadeInRight">
<div class="col-6">
  <p 
  onclick="iceboxDS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Defender Side Spawn
  </p>
  <p 
  onclick="iceboxBBack()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Back
  </p>
  <p 
  onclick="iceboxBHall()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Hall
  </p>
  <p 
  onclick="iceboxBSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Site
  </p>
  <p 
  onclick="iceboxTube()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Tube
  </p>
  <p 
  onclick="iceboxBYellow()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Yellow
  </p>
  <p 
  onclick="iceboxBGarrage()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Garrage
  </p>
</div>
<div class="col-6">
  <p 
  onclick="iceboxAS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Attacker Side Spawn
  </p>
  <p 
  onclick="iceboxMid()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Mid
  </p>
  <p 
  onclick="iceboxABelt()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Belt
  </p>
  <p 
  onclick="iceboxAPipes()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Pipes
  </p>
  <p 
  onclick="iceboxASite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Site
  </p>
  <p 
  onclick="iceboxAScreen()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A screen
  </p>
  <p 
  onclick="iceboxMidBoiler()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Mid Boiler
  </p>
</div>
</div>  
<div class="col-lg-6"></div>
<div class="col-lg-6 map-story animate__animated animate__fadeInUp">
<div class="story">//Story</div>
<div class="story-text">Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.</div>
</div>`;

function iceboxAS() {
  modalImage.src = "map/icebox/aSpawn.png";
}
function iceboxDS() {
  modalImage.src = "map/icebox/dSpawn.png";
}
function iceboxBSite() {
  modalImage.src = "map/icebox/bSite.png";
}
function iceboxASite() {
  modalImage.src = "map/icebox/aSite.png";
}
function iceboxMid() {
  modalImage.src = "map/icebox/mid.png";
}
function iceboxBBack() {
  modalImage.src = "map/icebox/bBack.png";
}
function iceboxBHall() {
  modalImage.src = "map/icebox/bHall.png";
}
function iceboxBYellow() {
  modalImage.src = "map/icebox/bYellow.png";
}
function iceboxBGarrage() {
  modalImage.src = "map/icebox/bGarrage.png";
}
function iceboxTube() {
  modalImage.src = "map/icebox/tube.png";
}
function iceboxMidBoiler() {
  modalImage.src = "map/icebox/midBoiler.png";
}
function iceboxAScreen() {
  modalImage.src = "map/icebox/aScreen.png";
}
function iceboxAPipes() {
  modalImage.src = "map/icebox/aPipes.png";
}
function iceboxABelt() {
  modalImage.src = "map/icebox/aBelt.png";
}

//Haven
let haven = `<div class="bg-map animate__animated animate__fadeIn animate__slow">
<img src="map/haven.png" alt="">
</div>         
<div class="col-lg-6 map-image text-center animate__animated animate__fadeInLeft">
  <img class="blind-map mt-5" src="map/blindmap/haven.png" alt="">
</div>
<div class="col-lg-6 d-flex text-desc text-start ps-5 animate__animated animate__fadeInRight">
<div class="col-6">
  <p 
  onclick="havenDS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Defender Spawn
  </p>
  <p 
  onclick="havenCSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> C Site
  </p>
  <p 
  onclick="havenCLink()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> C Link
  </p>
  <p 
  onclick="havenBSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> B Site
  </p>
  <p 
  onclick="havenCLong()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> C Long
  </p>
  <p 
  onclick="havenCShort()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> C Short
  </p>
  <p 
  onclick="havenCLobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> C Lobby
  </p>
</div>
<div class="col-6">
  <p 
  onclick="havenAS()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Attacker Spawn
  </p>
  <p 
  onclick="havenMid()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> Mid
  </p>
  <p 
  onclick="havenALobby()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Lobby
  </p>
  <p 
  onclick="havenALong()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Long
  </p>
  <p 
  onclick="havenSite()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Site
  </p>
  <p 
  onclick="havenAShort()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Short
  </p>
  <p 
  onclick="havenALink()"
  data-bs-toggle="modal"
  data-bs-target="#picMapModal"
  >
    <i class="bi bi-info-circle-fill"></i> A Link
  </p>
</div>
</div>  
<div class="col-lg-6"></div>
<div class="col-lg-6 map-story animate__animated animate__fadeInUp">
<div class="story">//Story</div>
<div class="story-text">Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.</div>
</div>`;

function havenAS() {
  modalImage.src = "map/haven/aSpawn.png";
}
function havenDS() {
  modalImage.src = "map/haven/dSpawn.png";
}
function havenASite() {
  modalImage.src = "map/haven/aSite.png";
}
function havenBSite() {
  modalImage.src = "map/haven/bSite.png";
}
function havenCSite() {
  modalImage.src = "map/haven/cSite.png";
}
function havenALong() {
  modalImage.src = "map/haven/aLong.png";
}
function havenALobby() {
  modalImage.src = "map/haven/aLobby.png";
}
function havenAShort() {
  modalImage.src = "map/haven/aShort.png";
}
function havenALink() {
  modalImage.src = "map/haven/aLink.png";
}
function havenMid() {
  modalImage.src = "map/haven/mid.png";
}
function havenCLong() {
  modalImage.src = "map/haven/cLong.png";
}
function havenCLobby() {
  modalImage.src = "map/haven/cLobby.png";
}
function havenCShort() {
  modalImage.src = "map/haven/cShort.png";
}
function havenCLink() {
  modalImage.src = "map/haven/cLink.png";
}

// MAP CLICK
// ASCENT
function callAscent() {
  mapContent.innerHTML = ascent;
}
function callBind() {
  mapContent.innerHTML = bind;
}
function callBreeze() {
  mapContent.innerHTML = breeze;
}
function callFracture() {
  mapContent.innerHTML = fracture;
}
function callSplit() {
  mapContent.innerHTML = split;
}
function callIcebox() {
  mapContent.innerHTML = icebox;
}
function callHaven() {
  mapContent.innerHTML = haven;
}

// active slider
let mapList = document.querySelectorAll(".map-select");

function mapActive() {
  mapList.forEach((link) => link.classList.remove("map-active"));
  this.classList.add("map-active");
}
mapList.forEach((link) => link.addEventListener("click", mapActive));
