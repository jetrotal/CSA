tpc_commands = {
    "Text": `
 @msg.show "one_liner"
 @msg.show "multiliner 1
 2
 3
 4"
 
`,


    "Display Text Options": `
 @msg.opt {
 .opaq
 .top
 .size 0, 0
 .font "", 0
 }
 @msg.opt {
 .trans
 .top
 .size 0, 0
 .font "", 0
 }
 @msg.opt {
 .opaq
 .middle
 .size 0, 0
 .font "", 0
 }
 @msg.opt {
 .opaq
 .bottom
 .size 0, 0
 .font "", 0
 }
 @msg.opt {
 .opaq
 .top
 .varyPos
 .size 0, 0
 .font "", 0
 }
 @msg.opt {
 .opaq
 .top
 .allowEventMove
 .size 0, 0
 .font "", 0
 }
 
`,


    "Change Faceset": `
 @msg.face "Actor1", 0, .left
 @msg.face "Actor1", 0, .right
 @msg.face "Actor1", 0, .left, .hrev
 @msg.face "", 0, .left
 
`,


    "Show Choices": `
 @msg.choice {
 .case "c1" {
 
 }
 .case "c2" {
 
 }
 .case "c3" {
 
 }
 .case "c4" {
 
 }
 .cancel .ignore
 }
 @msg.choice {
 .case "c1" {
 
 }
 .case "c2" {
 
 }
 .case "c3" {
 
 }
 .case "c4" {
 
 }
 .cancel 0
 }
 @msg.choice {
 .case "c1" {
 
 }
 .case "c2" {
 
 }
 .case "c3" {
 
 }
 .case "c4" {
 
 }
 .cancel 1
 }
 @msg.choice {
 .case "c1" {
 
 }
 .case "c2" {
 
 }
 .case "c3" {
 
 }
 .case "c4" {
 
 }
 .cancel 2
 }
 @msg.choice {
 .case "c1" {
 
 }
 .case "c2" {
 
 }
 .case "c3" {
 
 }
 .case "c4" {
 
 }
 .cancel 3
 }
 @msg.choice {
 .case "c1" {
 
 }
 .case "c2" {
 
 }
 .case "c3" {
 
 }
 .case "c4" {
 
 }
 .cancel bl {
 
 }
 }
 @msg.choice {
 .case "c1" {
 
 }
 .cancel .ignore
 }
 
`,


    "Input Number": `
 @msg.inputNum .digit 1 .dst v[1]
 @msg.inputNum .digit 2 .dst v[1]
 @msg.inputNum .digit 1 .dst v[2]
 
`,


    "Control Switches": `
 s[1].on
 s[1..5].on
 s[v[1]].on
 s[1].off
 s[1..5].toggle
 
`,


    "Control Variables": `
 v[1] = 0
 v[v[1]] = 0
 v[1..3] = 0
 v[v[1]..v[5]] = 0
 v[1] += 0
 v[1] -= 0
 v[1] *= 0
 v[1] /= 0
 v[1] %= 0
 v[1] |= 0
 v[1] &= 0
 v[1] ^= 0
 v[1] <<= 0
 v[1] >>= 0
 v[1] = v[2]
 v[1] = v[v[2]]
 v[1] = rnd(0, 1)
 v[1] = item[1].count
 v[1] = item[1]..equipCount
 v[1] = actor[1].level
 v[1] = actor[1].exp
 v[1] = actor[1].hp
 v[1] = actor[1].mp
 v[1] = actor[1].mhp
 v[1] = actor[1].mmp
 v[1] = actor[1].atk
 v[1] = actor[1].def
 v[1] = actor[1].mag
 v[1] = actor[1].spd
 v[1] = actor[1].weapon
 v[1] = actor[1].shield
 v[1] = actor[1].armor
 v[1] = actor[1].helm
 v[1] = actor[1].accessory
 v[1] = actor[1].id
 v[1] = actor[1].gauge
 v[1] = player.mapId
 v[1] = player.x
 v[1] = player.y
 v[1] = player.dir
 v[1] = player.scrx
 v[1] = player.scry
 v[1] = boat.mapId
 v[1] = ship.mapId
 v[1] = airship.mapId
 v[1] = self.mapId
 v[1] = sys.money
 v[1] = sys.timer1
 v[1] = sys.timer2
 v[1] = sys.memberCount
 v[1] = sys.saveCount
 v[1] = sys.battleCount
 v[1] = sys.winCount
 v[1] = sys.loseCount
 v[1] = sys.escapeCount
 v[1] = sys.tick
 v[1] = sys.date
 v[1] = sys.time
 v[1] = sys.frame
 v[1] = sys.version
 v[1] = s[1]
 v[1] = s[v[1]]
 v[1] = item[v[1]]..equipCount
 v[1] = item[v[v[1]]]..equipCount
 v[1] = s[v[1]]
 v[1] = 1 + 1
 v[1] = v[1] + 1
 v[1] = v[v[1]] + 1
 v[1] = 1 + v[1]
 v[1] = 1 + v[v[1]]
 v[1] = 1 - 1
 v[1] = 1 * 1
 v[1] = 1 / 1
 v[1] = 1 % 1
 v[1] = 1 | 1
 v[1] = 1 & 1
 v[1] = 1 ^ 1
 v[1] = 1 << 1
 v[1] = 1 >> 1
 v[1] = pow(1, 1)
 v[1] = sqrt(1, 1000)
 v[1] = sin(1, 1, 1000)
 v[1] = cos(1, 1, 1000)
 v[1] = atan2(1, 1, 1000)
 v[1] = min(1, 1)
 v[1] = max(1, 1)
 v[1] = abs(1)
 v[1] = rnd(1, 1)
 v[1] = 0 == 0 ? 0 : 0
 v[1] = v[0] == 0 ? 0 : 0
 v[1] = v[v[0]] == 0 ? 0 : 0
 v[1] = s[0] == 0 ? 0 : 0
 v[1] = s[v[0]] == 0 ? 0 : 0
 v[1] = 0 == v[0] ? 0 : 0
 v[1] = 0 == v[v[0]] ? 0 : 0
 v[1] = 0 == s[0] ? 0 : 0
 v[1] = 0 == s[v[0]] ? 0 : 0
 v[1] = 0 == 0 ? v[0] : 0
 v[1] = 0 == 0 ? v[v[0]] : 0
 v[1] = 0 == 0 ? v[v[0]] : 0
 v[1] = 0 == 0 ? v[v[0]] : 0
 v[1] = 0 == 0 ? 0 : v[0]
 v[1] = 0 == 0 ? 0 : v[v[0]]
 v[1] = 0 == 0 ? 0 : v[v[0]]
 v[1] = 0 == 0 ? 0 : v[v[0]]
 v[1] = 0 >= 0 ? 0 : 0
 v[1] = 0 <= 0 ? 0 : 0
 v[1] = 0 > 0 ? 0 : 0
 v[1] = 0 < 0 ? 0 : 0
 v[1] = 0 != 0 ? 0 : 0
 
`,


    "Timer Operation": `
 @timer .timer1 .set 0
 @timer .timer2 .set 0
 @timer .timer1 .set v[1]
 @timer .timer1 .start
 @timer .timer1 .start .show
 @timer .timer1 .start .continueInBattle
 @timer .timer1 .stop
 
`,


    "Change Gold": `
 @party.money .add 1
 @party.money .sub 1
 @party.money .add v[2]
 
`,


    "Change Items": `
 @party.item[1] .add 1
 @party.item[1] .sub 1
 @party.item[v[1]] .add 1
 @party.item[1] .add v[1]
 
`,


    "Change Party Member": `
 @party.member .add 1
 @party.member .sub 1
 @party.member .add v[1]
 
`,


    "Change EXP": `
 @actor.exp .all .add 1
 @actor[1].exp .add 1
 @actor[v[1]].exp .add 1
 @actor.exp .all .sub 1
 @actor.exp .all .add v[1]
 @actor.exp .all .add 1 .notify
 
`,


    "Change Level": `
 @actor.level .all .add 1
 @actor[1].level .add 1
 @actor[v[1]].level .add 1
 @actor.level .all .sub 1
 @actor.level .all .add v[1]
 @actor.level .all .add 1 .notify
 
`,


    "Change Parameters": `
 @actor.param .all .hp .add 1
 @actor[1].param .hp .add 1
 @actor[v[1]].param .hp .add 1
 @actor.param .all .hp .sub 1
 @actor.param .all .hp .sub v[1]
 @actor.param .all .mp .add 1
 @actor.param .all .atk .add 1
 @actor.param .all .def .add 1
 @actor.param .all .mag .add 1
 @actor.param .all .spd .add 1
 
`,


    "Change Skills": `
 @actor.skill .all .add 1
 @actor[1].skill .add 1
 @actor[v[1]].skill .add 1
 @actor.skill .all .sub 1
 @actor.skill .all .add v[1]
 
`,


    "Change Equipment": `
 @actor.equipment .all .add 1
 @actor[1].equipment .add 1
 @actor[v[1]].equipment .add 1
 @actor.equipment .all .clear
 @actor.equipment .all .add v[1]
 
`,


    "Change HP": `
 @actor.hp .all .add 1
 @actor[1].hp .add 1
 @actor[v[1]].hp .add 1
 @actor.hp .all .sub 1
 @actor.hp .all .add v[1]
 @actor.hp .all .sub 1 .possibleDie
 
`,


    "Change MP": `
 @actor.mp .all .add 1
 @actor[1].mp .add 1
 @actor[v[1]].mp .add 1
 @actor.mp .all .sub 1
 @actor.mp .all .add v[1]
 
`,


    "Change State": `
 @actor.state .all .add 1
 @actor[1].state .add 1
 @actor[v[1]].state .add 1
 @actor[v[1]].state .sub 1
 
`,


    "Recover All": `
 @actor.recoverAll .all
 @actor[1].recoverAll
 @actor[v[1]].recoverAll
 
`,


    "Damage Processing": `
 @actor.damage .all .value 1 .defModifier 100 .magModifier 0 .variance 5
 @actor[1].damage .value 1 .defModifier 100 .magModifier 0 .variance 5
 @actor[v[1]].damage .value 1 .defModifier 100 .magModifier 0 .variance 5
 @actor.damage .all .value 1 .defModifier 100 .magModifier 0 .variance 5 .dst v[1]
 @actor.damage .all .value 2 .defModifier 99 .magModifier 1 .variance 4
 
`,


    "Change Actor Name": `
 @actor[1].name "NewName"

`,


    "Change Actor Nickname": `
 @actor[1].nickname "NewNickname"

`,


    "Change Actor Graphic": `
 @actor[1].body "Actor4" 0
 @actor[1].body "Actor4" 0 .trans
 
`,


    "Change Actor Faceset": `
 @actor[1].face "Actor2" 8

`,


    "Change Vehicle Graphic": `
 @vehicle.body .boat "Vehicles" 0
 @vehicle.body .ship "Vehicles" 1
 @vehicle.body .airship "Vehicles" 3
 
`,


    "Change System BGM": `
 @sys.bgm .battle "Battle 1" .opt 0, 100, 100, 50
 @sys.bgm .endBattle "JEnd of Battle 1" .opt 0, 100, 100, 50
 @sys.bgm .inn "JInn 1" .opt 0, 100, 100, 50
 @sys.bgm .boat "Vehicle 1" .opt 0, 100, 100, 50
 @sys.bgm .ship "Vehicle 2" .opt 0, 100, 100, 50
 @sys.bgm .airship "Vehicle 1" .opt 0, 100, 100, 50
 @sys.bgm .gameover "Game Over 1" .opt 0, 100, 100, 50
 
`,


    "Change System SE": `
 @sys.se .cursor "Cursor1" .opt 100, 100, 50
 @sys.se .decision "Decision1" .opt 100, 100, 50
 @sys.se .cancel "Cancel1" .opt 100, 100, 50
 @sys.se .buzzer "Buzzer1" .opt 100, 100, 50
 @sys.se .beginBattle "Combat1" .opt 100, 100, 50
 @sys.se .escape "Escape" .opt 100, 100, 50
 @sys.se .enemyAttack "Attack1" .opt 100, 100, 50
 @sys.se .enemyDamage "Damage2" .opt 100, 100, 50
 @sys.se .actorDamage "Damage1" .opt 100, 100, 50
 @sys.se .avoid "Evade1" .opt 100, 100, 50
 @sys.se .defeat "Collapse1" .opt 100, 100, 50
 @sys.se .item "Item1" .opt 100, 100, 50
 
`,


    "Change Tile": `
 @map.replaceTile .lower [0] 0
 @map.replaceTile .upper [0] 0
 
`,


    "Change System Graphic": `
 @sys.skin "blue" .stretch .gothic
 @sys.skin "blue" .tiled .gothic
 @sys.skin "blue" .stretch .mincho
 
`,


    "Change Screen Transition": `
 @sys.transition .transfer_hide 0
 @sys.transition .transfer_show 0
 @sys.transition .beginBattle_hide 0
 @sys.transition .beginBattle_show 0
 @sys.transition .endBattle_hide 0
 @sys.transition .endBattle_show 0
 @sys.transition .transfer_hide 1
 @sys.transition .transfer_hide 2
 @sys.transition .transfer_hide 3
 @sys.transition .transfer_hide 4
 @sys.transition .transfer_hide 5
 @sys.transition .transfer_hide 6
 @sys.transition .transfer_hide 7
 @sys.transition .transfer_hide 8
 @sys.transition .transfer_hide 9
 @sys.transition .transfer_hide 10
 @sys.transition .transfer_hide 11
 @sys.transition .transfer_hide 12
 @sys.transition .transfer_hide 13
 @sys.transition .transfer_hide 14
 @sys.transition .transfer_hide 15
 @sys.transition .transfer_hide 16
 @sys.transition .transfer_hide 17
 @sys.transition .transfer_hide 18
 @sys.transition .transfer_hide 19
 @sys.transition .transfer_hide 20
 @sys.transition .transfer_show 1
 @sys.transition .transfer_show 2
 @sys.transition .transfer_show 3
 @sys.transition .transfer_show 4
 @sys.transition .transfer_show 5
 @sys.transition .transfer_show 6
 @sys.transition .transfer_show 7
 @sys.transition .transfer_show 8
 @sys.transition .transfer_show 9
 @sys.transition .transfer_show 10
 @sys.transition .transfer_show 11
 @sys.transition .transfer_show 12
 @sys.transition .transfer_show 13
 @sys.transition .transfer_show 14
 @sys.transition .transfer_show 15
 @sys.transition .transfer_show 16
 @sys.transition .transfer_show 17
 @sys.transition .transfer_show 18
 @sys.transition .transfer_show 19
 
`,


    "Battle Processing": `
 @btl.begin {
 .normal
 .troop 1
 .disableEscape
 .enableGameover
 }
 @btl.begin {
 .back_actor
 .troop 1
 .disableEscape
 .enableGameover
 }
 @btl.begin {
 .side_actor
 .troop 1
 .disableEscape
 .enableGameover
 }
 @btl.begin {
 .back_enemy
 .troop 1
 .disableEscape
 .enableGameover
 }
 @btl.begin {
 .side_enemy
 .troop 1
 .disableEscape
 .enableGameover
 }
 @btl.begin {
 .normal
 .troop v[1]
 .disableEscape
 .enableGameover
 }
 @btl.begin {
 .normal
 .troop 1
 .backdropFile "" .shallow
 .disableEscape
 .enableGameover
 }
 @btl.begin {
 .normal
 .troop 1
 .backdropId 1
 .disableEscape
 .enableGameover
 }
 @btl.begin {
 .normal
 .troop 1
 .enableEscape
 .enableGameover
 }
 @btl.begin {
 .normal
 .troop 1
 .enableGameover
 .win bl {
 
 }
 .escape bl {
 
 }
 }
 @btl.begin {
 .normal
 .troop 1
 .disableEscape
 .win bl {
 
 }
 .lose bl {
 
 }
 }
 @btl.begin {
 .normal
 .troop 1
 .disableEscape
 .enableGameover
 .preempt
 }
 @btl.begin {
 .normal
 .troop 1
 .disableEscape
 .enableGameover
 .disableFlash
 }
 
`,


    "Shop Processing": `
 @shop {
 .normal
 .msg 0
 }
 @shop {
 .buyOnly
 .msg 0
 }
 @shop {
 .sellOnly
 .msg 0
 }
 @shop {
 .normal
 .msg 0
 .transaction bl {
 
 }
 .noTransaction bl {
 
 }
 }
 @shop {
 .normal
 .msg 1
 }
 @shop {
 .normal
 .msg 2
 }
 @shop {
 .normal
 .msg 0
 1
 }
 
`,


    "Inn Processing": `
 @inn {
 .msg 0
 .cost 0
 }
 @inn {
 .msg 1
 .cost 0
 }
 @inn {
 .msg 0
 .cost 0
 .stay bl {
 
 }
 .leave bl {
 
 }
 }
 
 
`,


    "Name Input Processing": `
 @actor[1].inputName
 @actor[1].inputName .kana
 @actor[1].inputName .preset
 
`,


    "Transfer Player": `
 @map[1].setPlayerPos .pos 0, 0 .retain
 @map[1].setPlayerPos .pos 0, 0 .up
 @map[1].setPlayerPos .pos 0, 0 .right
 @map[1].setPlayerPos .pos 0, 0 .down
 @map[1].setPlayerPos .pos 0, 0 .left
 
`,


    "Get Player Location": `
 @map.getPlayerPos v[1] v[2] v[3]

`,


    "Move to Variable Location": `
 @map[v[1]].setPlayerPos .pos v[2] v[3]

`,


    "Get On/Off Vehicle": `
 @vehicle.ride

`,


    "Set Vehicle Location": `
 @map[1].setVehiclePos .boat .pos 0, 0 .retain
 @map[1].setVehiclePos .boat .pos 0, 0 .up
 @map[1].setVehiclePos .boat .pos 0, 0 .right
 @map[1].setVehiclePos .boat .pos 0, 0 .down
 @map[1].setVehiclePos .boat .pos 0, 0 .left
 @map[v[1]].setVehiclePos .boat .pos v[2], v[3] .retain
 @map[1].setVehiclePos .ship .pos 0, 0 .retain
 @map[1].setVehiclePos .airship .pos 0, 0 .retain
 
`,


    "Set Event Location": `
 @ev.setPos .self .pos 0, 0 .retain
 @ev.setPos .self .pos 0, 0 .up
 @ev.setPos .self .pos 0, 0 .right
 @ev.setPos .self .pos 0, 0 .down
 @ev.setPos .self .pos 0, 0 .left
 @ev.setPos .self .pos v[2], v[3]
 @ev[1].setPos .pos 0, 0 .retain
 
`,


    "Swap Event Location": `
 @ev[10005].swap .self
 @ev[1].swap .self
 @ev[10005].swap 1
 
`,


    "Get Terrain ID": `
 @map.getTerrain .pos 0, 0 .dst v[1]
 @map.getTerrain .pos v[2], v[3] .dst v[1]
 
`,


    "Get Event ID": `
 @map.getEv .pos 0, 0 .dst v[1]
 @map.getEv .pos v[2], v[3] .dst v[1]
 
`,


    "Hide Screen": `
 @scr.hide .default
 @scr.hide 0
 @scr.hide 1
 @scr.hide 2
 @scr.hide 3
 @scr.hide 4
 @scr.hide 5
 @scr.hide 6
 @scr.hide 7
 @scr.hide 8
 @scr.hide 9
 @scr.hide 10
 @scr.hide 11
 @scr.hide 12
 @scr.hide 13
 @scr.hide 14
 @scr.hide 15
 @scr.hide 16
 @scr.hide 17
 @scr.hide 18
 @scr.hide 19
 
`,


    "Show Screen": `
 @scr.show .default
 @scr.show 0
 @scr.show 1
 @scr.show 2
 @scr.show 3
 @scr.show 4
 @scr.show 5
 @scr.show 6
 @scr.show 7
 @scr.show 8
 @scr.show 9
 @scr.show 10
 @scr.show 11
 @scr.show 12
 @scr.show 13
 @scr.show 14
 @scr.show 15
 @scr.show 16
 @scr.show 17
 @scr.show 18
 @scr.show 19
 
`,


    "Tint Screen": `
 @scr.tint .rgbs 100, 100, 100, 100 .time 10
 @scr.tint .rgbs 100, 100, 100, 100 .time 10.wait
 
`,


    "Flash Screen": `
 @scr.flash .once 5 .rgbv 31, 31, 31, 31
 @scr.flash .once 5 .rgbv 31, 31, 31, 31 .wait
 @scr.flash .begin 5 .rgbv 31, 31, 31, 31
 @scr.flash .end
 
`,


    "Shake Screen": `
 @scr.shake .once 2 .value 5, 5
 @scr.shake .once 2 .value 5, 5 .wait
 @scr.shake .begin .value 5, 5
 @scr.shake .end
 @scr.shake .once 1 .value 9, 9
 
`,


    "Scroll Map": `
 @scr.scroll .fix
 @scr.scroll .unfix
 @scr.scroll .shift 1 .up .speed 1
 @scr.scroll .shift 1 .right .speed 1
 @scr.scroll .shift 1 .down .speed 1
 @scr.scroll .shift 1 .left .speed 1
 @scr.scroll .shift 1 .up .speed 2
 @scr.scroll .shift 1 .up .speed 3
 @scr.scroll .shift 1 .up .speed 4
 @scr.scroll .shift 1 .up .speed 5
 @scr.scroll .shift 1 .up .speed 6
 @scr.scroll .restore .speed 1 .wait
 
`,


    "Weather Effect Settings": `
 @scr.weather .none .weak
 @scr.weather .none .medium
 @scr.weather .none .strong
 @scr.weather .rain .weak
 @scr.weather .snow .weak
 @scr.weather .mist .weak
 @scr.weather .sandstorm .weak
 
`,


    "Show Picture": `
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[v[1]].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[v[v[1]]].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos v[160], v[120] .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos v[v[160]], v[v[120]] .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos v[v[160]], v[v[120]] .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .topLeft
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .bottomLeft
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .topRight
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .bottomRight
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .top
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .bottom
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .left
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .right
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale v[100]
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale v[v[100]]
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans v[0]
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans v[v[0]]
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 1
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 2
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 3
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 4
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 5
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 6
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 7
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 8
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 9
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .mapLayer 10
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .battleLayer 1
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .battleLayer 2
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .battleLayer 3
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .battleLayer 4
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .battleLayer 5
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .eraseWhenTransfer
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .eraseWhenEndBattle
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .affectedByTint
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .affectedByFlash
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .affectedByShake
 }
 @pic[1].show {
 "" .repl 4 v[1]
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .affectedByShake
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .grid 1, 1 .cell 1
 .affectedByShake
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .grid 1, 1 .cell v[1]
 .affectedByShake
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .grid 1, 1 .anim 6 .repeat
 .affectedByShake
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .grid 1, 1 .anim 6 .once
 .affectedByShake
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .grid 1, 1 .anim 6 .once
 .affectedByShake
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .rotate 5
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .wave 5
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .angle 0, 1
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .angle v[0], 1
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .angle 0, v[1]
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .multi
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .add
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .overlay
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .hrev 
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .vrev 
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .scrollWithMap
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 ""
 .pos 160, 120 .center
 .chromakey 1
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 @pic[1].show {
 "Light"
 .pos 160, 120 .center
 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 }
 
`,


    "Move Picture": `
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[v[1]].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[v[v[1]]].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos v[160], v[120] .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos v[v[160]], v[v[120]] .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .topLeft
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .bottomLeft
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .topRight
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .bottomRight
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .top
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .bottom
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .left
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .right
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale v[100]
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale v[v[100]]
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans v[0]
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans v[v[0]]
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time v[10] .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time v[v[10]] .wait
 .rgbs 100, 100, 100, 100
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .rotate 5
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .wave 5
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .angle 0, 1
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .angle v[0], 1
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .angle 0, v[1]
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .multi
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .add
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .overlay
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .hrev 
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10 .wait
 .rgbs 100, 100, 100, 100
 .vrev 
 }
 @pic[1].move {
 .pos 160, 120 .center
 .scale 100
 .trans 0
 .time 10
 .rgbs 100, 100, 100, 100
 }
 
`,


    "Erase Picture": `
 @pic[1].erase
 @pic[v[1]].erase
 @pic[v[v[1]]].erase
 @pic[1..1000].erase
 @pic[v[1]..v[2]].erase
 @pic.erase .all
 
`,


    "Show Animation": `
 @anim[1].show {
 .player
 .buffer 0
 .reverse 0
 }
 @anim[1].show {
 .boat
 .buffer 0
 .reverse 0
 }
 @anim[1].show {
 .ship
 .buffer 0
 .reverse 0
 }
 @anim[1].show {
 .airship
 .buffer 0
 .reverse 0
 }
 @anim[1].show {
 .self
 .buffer 0
 .reverse 0
 }
 @anim[1].show {
 .target 1
 .buffer 0
 .reverse 0
 }
 @anim[1].show {
 .player
 .buffer 0
 .reverse 0
 .wait
 }
 @anim[1].show {
 .player
 .buffer 0
 .reverse 0
 .tiled
 }
 
`,


    "Show/Hide Player": `
 @player.trans .on
 @player.trans .off
 
`,


    "Flash Event": `
 @ev.flash .player .rgbv 31, 31, 31, 31 .time 10
 @ev.flash .boat .rgbv 31, 31, 31, 31 .time 10
 @ev.flash .ship .rgbv 31, 31, 31, 31 .time 10
 @ev.flash .airship .rgbv 31, 31, 31, 31 .time 10
 @ev.flash .self .rgbv 31, 31, 31, 31 .time 10
 @ev[1].flash .rgbv 31, 31, 31, 31 .time 10
 @ev.flash .player .rgbv 31, 31, 31, 31 .time 10 .wait
 
`,


    "Set Move Route": `
 @ev.setAction .player .freq 1 .unskippable .act {
 }
 @ev.setAction .boat .freq 1 .unskippable .act {
 }
 @ev.setAction .ship .freq 1 .unskippable .act {
 }
 @ev.setAction .airship .freq 1 .unskippable .act {
 }
 @ev.setAction .self .freq 1 .unskippable .act {
 }
 @ev[1].setAction .freq 1 .unskippable .act {
 }
 @ev.setAction .player .freq 1 .repeat .unskippable .act {
 }
 @ev.setAction .player .freq 1 .skippable .act {
 }
 @ev.setAction .player .freq 2 .unskippable .act {
 }
 @ev.setAction .player .freq 3 .unskippable .act {
 }
 @ev.setAction .player .freq 4 .unskippable .act {
 }
 @ev.setAction .player .freq 5 .unskippable .act {
 }
 @ev.setAction .player .freq 6 .unskippable .act {
 }
 @ev.setAction .player .freq 7 .unskippable .act {
 }
 @ev.setAction .player .freq 8 .unskippable .act {
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveUp
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveRight
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveDown
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveLeft
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveUpperRight
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveLowerRight
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveUpperLeft
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveLowerLeft
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveRandom
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveToward
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveAway
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .moveForward
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .speedUp
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .speedDown
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .faceUp
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .faceRight
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .faceDown
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .faceLeft
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .turnRight
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .turnLeft
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .turnBack
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .turnSide
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .turnRandom
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .turnToward
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .turnAway
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .pause
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .freqUp
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .freqDown
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .beginJump
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .endJump
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .fixDir
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .unfixDir
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .beginThrough
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .endThrough
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .pauseAnim
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .resumeAnim
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .transUp
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .transDown
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .switchOn 1
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .switchOff 1
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .setBody "", 0
 }
 @ev.setAction .player .freq 1 .unskippable .act {
 .se "(OFF)", 100, 100, 50
 }
 
`,


    "Wait for All Movement": `
 @ev.execAction

`,


    "Stop All Movement": `
 @ev.stopAction

`,


    "Wait": `
 @wait 10
 @wait .input
 
`,


    "Play BGM": `
 @bgm.stop
 @bgm.play "Ship 1" .opt 0, 100, 100, 50
 

`,


    "Fadeout BGM": `
 @bgm.fadeout 5000

`,


    "Memorize BGM": `
 @bgm.store

`,


    "Play Memorized BGM": `
 @bgm.restore

`,


    "Play SE": `
 @se.stop
 @se.play "Blow1" .opt 100, 100, 50 

`,


    "Play Movie": `
 @movie.play "Babbit" .pos 0, 0 .size 320, 240
 @movie.play "Babbit" .pos v[1], v[1] .size 320, 240
 
`,


    "Key Input Processing": `
 @key.input .dst v[1] {
 }
 @key.input .wait .dst v[1] {
 }
 @key.input .dst v[1] {
 .down
 }
 @key.input .dst v[1] {
 .left
 }
 @key.input .dst v[1] {
 .right
 }
 @key.input .dst v[1] {
 .up
 }
 @key.input .dst v[1] {
 .decision
 }
 @key.input .dst v[1] {
 .cancel
 }
 @key.input .dst v[1] {
 .shift
 }
 @key.input .dst v[1] {
 .number
 }
 @key.input .dst v[1] {
 .symbol
 }
 @key.input .dst v[1] {
 .wheelDown
 }
 @key.input .dst v[1] {
 .wheelUp
 }
 @key.input .dst v[1] {
 .lclick
 }
 @key.input .dst v[1] {
 .rclick
 }
 @key.input .dst v[1] {
 .mclick
 }
 
`,


    "Change Tileset": `
 @map.tileset 1

`,


    "Change Parallax Back": `
 @map.parallax "space"
 @map.parallax "space" .hloop
 @map.parallax "space" .hscroll 0
 @map.parallax "space" .vloop
 @map.parallax "space" .vscroll 0
 
`,


    "Set Encounter Rate": `
 @btl.encounterRate 25

`,


    "Set Teleportation Point": `
 @raw 11810, "", 0, 1, 0, 0, 0, 1
 @raw 11810, "", 1, 1, 9, 7, 0, 1
 @raw 11810, "", 0, 1, 0, 0, 1, 1
 
`,


    "Teleportation On/Off": `
 @raw 11820, "", 0
 @raw 11820, "", 1
 
`,


    "Set Escape Location": `
 @raw 11830, "", 1, 0, 0, 0, 1
 @raw 11830, "", 1, 0, 0, 1, 1
 
`,


    "Change Escape Access": `
 @raw 11840, "", 0
 @raw 11840, "", 1
 
`,


    "Call System Functions": `
 @sys.call .saveMenu

`,


    "Control System Functions": `
 @sys.limitation {
 .saveMenu
 }
 @sys.limitation {
 }
 
`,


    "Open Menu Screen": `
 @sys.partyMenu

`,


    "Change Menu Access": `
 @sys.menuAccess .off
 @sys.menuAccess .on
 
`,


    "Conditional Branch": `
 @if s[1] .isOn() {
 
 }
 @if s[v[1]] .isOn() {
 
 }
 @if s[1] .isOff() {
 
 }
 @if v[1] == 0 {
 
 }
 @if v[v[1]] == 0 {
 
 }
 @if v[1] >= 0 {
 
 }
 @if v[1] <= 0 {
 
 }
 @if v[1] > 0 {
 
 }
 @if v[1] < 0 {
 
 }
 @if v[1] != 0 {
 
 }
 @if v[1] == v[1] {
 
 }
 @if v[1] == v[v[1]] {
 
 }
 @if .money .geq 0 {
 
 }
 @if .money .leq 0 {
 
 }
 @if .timer1 .geq 0 {
 
 }
 @if .timer1 .leq 0 {
 
 }
 @if .timer2.geq 0 {
 
 }
 @if .timer2.leq 0 {
 
 }
 @if .item[1] .notExists() {
 
 }
 @if .item[1] .exists() {
 
 }
 @if .actor[1] .isMember() {
 
 }
 @if .actor[1] .isNamed "newName" {
 
 }
 @if .actor[1] .level .geq 1 {
 
 }
 @if .actor[1] .hp .geq 1 {
 
 }
 @if .actor[1] .hasSkill 1 {
 
 }
 @if .actor[1] .isEquip 1 {
 
 }
 @if .actor[1] .hasState 1 {
 
 }
 @if .player .facingUp() {
 
 }
 @if .player .facingRight() {
 
 }
 @if .player .facingDown() {
 
 }
 @if .player .facingLeft() {
 
 }
 @if .boat .facingUp() {
 
 }
 @if .ship .facingUp() {
 
 }
 @if .airship .facingUp() {
 
 }
 @if .self .facingUp() {
 
 }
 @if .ev[1] .facingUp() {
 
 }
 @if .boat .isDriven() {
 
 }
 @if .ship .isDriven() {
 
 }
 @if .airship .isDriven() {
 
 }
 @if .triggeredByDecision() {
 
 }
 @if .bgmHasLooped() {
 
 }
 @if .saveExists {
 
 }
 @if .testPlay {
 
 }
 @if .atbWaitMode {
 
 }
 @if .fullscreen {
 
 }
 @if .rightAfterLoad() {
 
 }
 @if .enableJoy() {
 
 }
 @if .active() {
 
 }
 @if s[1] .isOn() {
 
 } .else bl {
 
 }
 
`,


    "Label": `
 @label.set 1

`,


    "Jump to Label": `
 @label.jump 1

`,


    "Loop": `
 @loop .inf() {
 
 }
 
 @loop 1 {
 
 }
 
 @loop v[1] {
 
 }
 
 @loop v[v[1]] {
 
 }
 
 @loop s[1] {
 
 }
 
 @loop s[v[1]] {
 
 }
 
 @countUp 1..1 {
 
 }
 
 @countUp v[1]..1 {
 
 }
 
 @countUp v[v[1]]..1 {
 
 }
 
 @countUp s[1]..1 {
 
 }
 
 @countUp s[v[1]]..1 {
 
 }
 
 @countDown 1..1 {
 
 }
 
 @countUp 1..v[1] {
 
 }
 
 @countUp 1..v[v[1]] {
 
 }
 
 @countUp 1..s[1] {
 
 }
 
 @countUp 1..s[v[1]] {
 
 }
 
 @while 1 == 1 {
 
 }
 
 @doWhile 1 == 1 {
 
 }
 
 @while v[1] == 1 {
 
 }
 
 @while v[v[1]] == 1 {
 
 }
 
 @while s[1] == 1 {
 
 }
 
 @while s[v[1]] == 1 {
 
 }
 
 @while 1 == v[1] {
 
 }
 
 @while 1 == v[v[1]] {
 
 }
 
 @while 1 == s[1] {
 
 }
 
 @while 1 == s[v[1]] {
 
 }
 
 @while 1 == s[v[1]] {
 
 }
 
 @while 1 >= 1 {
 
 }
 
 @while 1 <= 1 {
 
 }
 
 @while 1 > 1 {
 
 }
 
 @while 1 < 1 {
 
 }
 
 @while 1 != 1 {
 
 }
 
 @while 1 == 1 .dst v[1] {
 
 }
 
 
`,


    "Break Loop": `
 @break

`,


    "End Event Processing": `
 @ev.abort

`,


    "Erase Event": `
 @ev.erase

`,


    "Call Event": `
 @call .cev 1
 @call .cev v[1]
 @call .cev v[v[1]]
 @call .mev 10005, 1
 @call .mev v[1], v[2]
 
`,


    "Comment": `
 @comment "oneLiner"
 @comment "MultiLiner
 2
 3
 4"
 
`,


    "Game Over": `
 @sys.gameover

`,


    "Return to Title Screen": `
 @sys.reset

`,


    "Change Actor Class": `
 @actor[1].class 1 .keepLevel .keepSkill .keepParams
 @actor[1].class 1 .initLevel .keepSkill .keepParams
 @actor[1].class 1 .keepLevel .initSkill .keepParams
 @actor[1].class 1 .keepLevel .addSkill .keepParams
 @actor[1].class 1 .keepLevel .keepSkill .halveParams
 @actor[1].class 1 .keepLevel .keepSkill .level1Params
 @actor[1].class 1 .keepLevel .keepSkill .initParams
 @actor[1].class 1 .keepLevel .keepSkill .keepParams .showMsg
 @actor[1].class 0 .keepLevel .keepSkill .keepParams
 
`,


    "Change Battle Commands": `
 @actor[1].cmd .add 1
 @actor[1].cmd .sub 1
 @actor[1].cmd .sub .all
 
`,


    "Open Load Menu": `
 @sys.loadMenu

`,


    "Exit Game": `
 @sys.shutdown

`,


    "Toggle ATB Wait Mode": `
 @btl.atbMode .toggle

`,


    "Toggle Fullscreen Mode": `
 @sys.fullscreen .toggle

`,


    "Open Video Option": `
 @sys.optionMenu

`,


    "Get Save Info": `
 @save[1].getInfo .datetime v[1], v[1] .level v[1] .hp v[1] .face 0, 0, 0, 0
 @save[v[1]].getInfo .datetime v[1], v[1] .level v[1] .hp v[1] .face 0, 0, 0, 0
 @save[1].getInfo .datetime v[1], v[1] .level v[1] .hp v[1] .face v[1], v[1], v[1], v[1]
 
`,


    "Save": `
 @save[1].save
 @save[v[1]].save
 @save[1].save .res v[1]
 
`,


    "Load": `
 @save[1].load
 @save[v[1]].load
 @save[1].load .disableFileCheck
 
`,


    "End Load Processing (Do Nothing)": `
 @raw 3004, ""

`,


    "Get Mouse Position": `
 @mouse.getPos v[1], v[2]

`,


    "Set Mouse Position": `
 @mouse.setPos 0, 0
 @mouse.setPos v[1], v[1]
 
`,


    "Show String Picture": `
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[v[1]].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[v[v[1]]].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos v[160], v[120] .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos v[v[160]], v[v[120]] .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .topLeft
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .bottomLeft
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .topRight
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .bottomRight
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .top
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .bottom
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .left
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .right
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size v[0], v[0] .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size v[v[0]], v[v[0]] .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale v[100]
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale v[100]
 .trans v[0]
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale v[100]
 .trans v[v[0]]
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .scrollWithMap
 .chromakey 0
 .scale v[100]
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 7
 .eraseWhenTransfer
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 1
 .scale v[100]
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 7
 .eraseWhenTransfer
 }
 @pic[1].strpic {
 "typed_string"
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale v[100]
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 7
 .eraseWhenTransfer
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .rotate 5
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .wave 5
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .angle 0, 1
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .angle v[0], 1
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .angle v[v[0]], 1
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .angle 0, v[1]
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .angle 0, v[v[1]]
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .multi
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .add
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .overlay
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .hrev 
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .vrev 
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 1
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 2
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 3
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 4
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 5
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 6
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 7
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 8
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 9
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .mapLayer 10
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .battleLayer 1
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .battleLayer 2
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .battleLayer 3
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .battleLayer 4
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .battleLayer 5
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .eraseWhenTransfer
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .eraseWhenEndBattle
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .affectedByTint
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .affectedByFlash
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "System", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", v[12] .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", v[v[12]] .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .bold .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "blue" .stretch .noframe .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .nobg .noframe .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .tiled .noframe .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noGradation .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12 .noShadow
 .spacing 0, 4
 .skin "" .stretch .noframe .noPadding
 .affectedByShake
 }
 @pic[1].strpic {
 ""
 .pos 160, 120 .center
 .size 0, 0 .chromakey 0
 .scale 100
 .trans 0
 .rgbs 100, 100, 100, 100
 .font "", 12
 .spacing 0, 4
 .skin "" .stretch .noframe .noGradation .noPadding
 .affectedByShake
 }
 
`,


    "Get Picture Info": `
 @pic[1].getInfo .cewh .baseRect v[1], v[1], v[1], v[1]
 @pic[1].getInfo .cewh .currentRect v[1], v[1], v[1], v[1]
 @pic[1].getInfo .cewh .goalRect v[1], v[1], v[1], v[1]
 @pic[1].getInfo .xywh .baseRect v[1], v[1], v[1], v[1]
 @pic[1].getInfo .ltrb .baseRect v[1], v[1], v[1], v[1]
 @pic[v[1]].getInfo .cewh .baseRect v[1], v[1], v[1], v[1]
 @pic[v[v[1]]].getInfo .cewh .baseRect v[1], v[1], v[1], v[1]
 
`,


    "Control Battle": `
 @btl.hook .atb .none
 @btl.hook .damagePop .none
 @btl.hook .targeting .none
 @btl.hook .addState .none
 @btl.hook .paramBuff .none
 @btl.hook .atb .cev 1 .var v[1]
 @btl.hook .atb .cev v[1] .var v[1]
 @btl.hook .atb .cev v[v[1]] .var v[1]
 
`,


    "Control ATB Gauge": `
 @btl.atb .actor[1] .set 0
 @btl.atb .member[1] .set 0
 @btl.atb .party .set 0
 @btl.atb .enemy[1] .set 0
 @btl.atb .troop .set 0
 @btl.atb .actor[v[1]] .set 0
 @btl.atb .actor[v[v[1]]] .set 0
 @btl.atb .actor[1] .add 0
 @btl.atb .actor[1] .sub 0
 @btl.atb .actor[1] .set 0 .percent
 @btl.atb .actor[1] .set v[0]
 @btl.atb .actor[1] .set v[v[0]]
 
`,


    "Battle Command EX": `
 @btl.cmdex {
 .change 0
 .fight 0
 .auto 0
 .escape 0
 .win 0
 .lose 0
 }
 @btl.cmdex {
 .change 1
 .fight 0
 .auto 0
 .escape 0
 .win 0
 .lose 0
 }
 @btl.cmdex {
 .change 0
 .fight 1
 .auto 0
 .escape 0
 .win 0
 .lose 0
 }
 @btl.cmdex {
 .change 0
 .fight 0
 .auto 1
 .escape 0
 .win 0
 .lose 0
 }
 @btl.cmdex {
 .change 0
 .fight 0
 .auto 0
 .escape 1
 .win 0
 .lose 0
 }
 @btl.cmdex {
 .change 0
 .fight 0
 .auto 0
 .escape 0
 .win 1
 .lose 0
 }
 @btl.cmdex {
 .change 0
 .fight 0
 .auto 0
 .escape 0
 .win 0
 .lose 1
 }
 
`,


    "Get Battle Info": `
 @btl.getInfo .actor[1] .buff .dst v[1]
 @btl.getInfo .member[1] .buff .dst v[1]
 @btl.getInfo .party .list .dst v[1]
 @btl.getInfo .enemy[0] .buff .dst v[1]
 @btl.getInfo .troop .list .dst v[1]
 @btl.getInfo .actor[v[1]] .buff .dst v[1]
 @btl.getInfo .actor[v[v[1]]] .buff .dst v[1]
 @btl.getInfo .actor[1] .state .dst v[1]
 @btl.getInfo .actor[1] .element .dst v[1]
 @btl.getInfo .actor[1] .misc .dst v[1]
 
`,


    "Control Variable Array": `
 v[1].copy v[1], 1
 v[1].swap v[1], 1
 v[1].sort 1
 v[1].sortDescending 1
 v[1].shuffle 1
 v[1].enum 1, 1
 v[1] .add v[1], 1
 v[1] .sub v[1], 1
 v[1] .mul v[1], 1
 v[1] .div v[1], 1
 v[1] .mod v[1], 1
 v[1] .or v[1], 1
 v[1] .and v[1], 1
 v[1] .xor v[1], 1
 v[1] .shl v[1], 1
 v[1] .shr v[1], 1
 v[v[1]].copy v[1], 1
 v[1].copy v[v[1]], 1
 v[1].copy v[1], v[1]
 v[1].copy v[1], v[v[1]]
 
`,


    "Key Input Processing EX": `
 @key.inputEx .keybdWithBind .dst v[1]
 @key.inputEx .keybd .dst v[1]
 @key.inputEx .keyCode 0 .dst v[1]
 @key.inputEx .joy .dst v[1]
 @key.inputEx .getBind .dst v[1]
 @key.inputEx .setBind .src v[1]
 @key.inputEx .keyCode v[0] .dst v[1]
 @key.inputEx .keyCode v[v[0]] .dst v[1]
 
`,


    "Rewrite Map": `
 @map.rewrite .lower .single 0 .xywh 0, 0, 0, 0
 @map.rewrite .upper .single 0 .xywh 0, 0, 0, 0
 @map.rewrite .lower .single v[0] .xywh 0, 0, 0, 0
 @map.rewrite .lower .single v[v[0]] .xywh 0, 0, 0, 0
 @map.rewrite .lower .range v[1] .xywh 0, 0, 0, 0
 @map.rewrite .lower .range v[v[1]] .xywh 0, 0, 0, 0
 @map.rewrite .lower .single 0 .xywh v[0], 0, 0, 0
 @map.rewrite .lower .single 0 .xywh v[v[0]], 0, 0, 0
 @map.rewrite .lower .single 0 .xywh 0, v[0], 0, 0
 @map.rewrite .lower .single 0 .xywh 0, v[v[0]], 0, 0
 @map.rewrite .lower .single 0 .xywh 0, 0, v[0], 0
 @map.rewrite .lower .single 0 .xywh 0, 0, v[v[0]], 0
 @map.rewrite .lower .single 0 .xywh 0, 0, 0, v[0]
 @map.rewrite .lower .single 0 .xywh 0, 0, 0, v[v[0]]
 @map.rewrite .lower .single 0 .xywh 0, 0, 0, 0 .disableAutoTile
 
`,


    "Control Shared Save": `
 @gsave.open
 @gsave.close
 @gsave.save
 @gsave.saveAndClose
 gs[1].copyTo s[1], 1
 gs[1].copyTo s[v[1]], 1
 gs[v[1]].copyTo s[1], 1
 gs[1].copyTo s[1], v[1]
 gs[1].copyTo s[1], v[v[1]]
 gv[1].copyTo v[1], 1
 gv[1].copyTo v[v[1]], 1
 gs[1].copyFrom s[1], 1
 gs[1].copyFrom s[v[1]], 1
 gs[v[1]].copyFrom s[1], 1
 gs[1].copyFrom s[1], v[1]
 gs[1].copyFrom s[1], v[v[1]]
 gv[1].copyFrom v[1], 1
 gv[1].copyFrom v[v[1]], 1
 
`,


    "Set Picture ID": `
 @pic[1].setId .move 1, 0
 @pic[1].setId .swap 1, 0
 @pic[1].setId .slide 1, 0
 @pic[v[1]].setId .move 1, 0
 @pic[1].setId .move 1, 0
 @pic[v[v[1]]].setId .move 1, 0
 @pic[1].setId .move v[1], 0
 @pic[1].setId .move v[v[1]], 0
 @pic[1].setId .move 1, v[0]
 @pic[1].setId .move 1, v[v[0]]
 @pic[1].setId .move 1, 0 .ignoreError
 
`,


    "Set Game Option": `
 @sys.gameOpt .pauseWhenInactive
 @sys.gameOpt .runWhenInactive
 @sys.gameOpt .fatal 60, 0, 0
 @sys.gameOpt .fatal v[60], 0, 0
 @sys.gameOpt .fatal v[v[60]], 0, 0
 @sys.gameOpt .fatal 60, 1, 0
 @sys.gameOpt .fatal 60, 2, 0
 @sys.gameOpt .fatal 60, 0, 1
 @sys.gameOpt .picLimit 1000
 @sys.gameOpt .picLimit v[1000]
 @sys.gameOpt .picLimit v[v[1000]]
 @sys.gameOpt .fullFrame
 @sys.gameOpt .oneFifth
 @sys.gameOpt .oneThird
 @sys.gameOpt .oneHalf
 
`,


    "Call Command": `
 @cmd 0, "", .args v[0], 0
 @cmd v[0], "", .args v[0], 0
 @cmd v[v[0]], "", .args v[0], 0
 @cmd 0, "", .args v[v[0]], 0
 @cmd 0, "", .args v[0], v[0]
 @cmd 0, "", .args v[0], v[v[0]]
 @cmd 0, "idk_what_goes_here", .args v[0], v[v[0]]
 
`,


    "BT | Change Enemy HP": `
 @enemy[0].hp .add 1
 @enemy[0].hp .sub 1
 @enemy[0].hp .sub 1 .possibleDie
 @enemy[0].hp .add 1 .percent
 @enemy[0].hp .add v[1]
 
`,


    "BT | Change Enemy MP": `
 @enemy[0].mp .add 1
 @enemy[0].mp .sub 1
 @enemy[0].mp .add v[1]
 
`,


    "BT | Change Enemy State": `
 @enemy[0].state .add 1
 @enemy[0].state .sub 1
 
`,


    "BT | Enemy Encounter": `
 @enemy[0].appear

`,


    "BT | Change Battle Background": `
 @btl.backdrop "title01"

`,


    "BT | Show Animation": `
 @btl.anim[1] .troop
 @btl.anim[1] .enemy 0
 @btl.anim[1] .party
 @btl.anim[1] .actor 1
 @btl.anim[1] .troop .wait
 
`,


    "BT | Action Times +": `
 @actor[1] .multipleAct .cmd 1 .times 2

`,


    "BT | Force Escape": `
 @btl.forceEscape .party
 @btl.forceEscape .troop
 @btl.forceEscape .enemy 0
 @btl.forceEscape .party .cancelIfSideAttack
 
`,


    "BT | Conditional Branch": `
 @btl.if s[1] .isOn() {
 
 }
 @btl.if v[1] == 0 {
 
 }
 @btl.if v[1] >= 0 {
 
 }
 @btl.if v[1] <= 0 {
 
 }
 @btl.if v[1] > 0 {
 
 }
 @btl.if v[1] < 0 {
 
 }
 @btl.if v[1] != 0 {
 
 }
 @btl.if v[1] == v[1] {
 
 }
 @btl.if .actor[1] .canMove {
 
 }
 @btl.if .enemy[0] .canMove {
 
 }
 @btl.if .enemy[0] .isTarget {
 
 }
 @btl.if .actor[1] .use 1 {
 
 }
 @btl.if s[1] .isOn() {
 
 } .else bl {
 
 }
 
`,


    "BT | Call Common Event": `
 @btl.cev[1]

`,


    "BT | Abort Battle": `
 @btl.abort


`,


}