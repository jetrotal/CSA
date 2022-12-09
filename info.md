<details>
<summary> ◇ TPC Overview</summary>
    TPC! TPC!
   
    Pass the source file as the first argument and run
    Maker 2003 + Maniac Patch event commands and
    A tool to generate common events
   
    Grammar is loose and fluffy
   

### ◆ Boot option
    -en                    Output error log in suspicious English    
    -pop                    Show error log in message box
   
   

### ◆ Type of value
    Character string                   Enclose in "" or ""
    Numeric                     Decimal and Hexadecimal (0x***)
    Array                     [element 0, element 1, ...]
    block                 { element 0, element 1, ... } or bl { element 0, element 1, ... }
    Constant definitions               Non-symbolic characters and numbers (the beginning is not allowed) and _
    meta variable                 $definition name
    event command         @command name
    subcommand             .command name
    variable                     v[id] or v:id
    Switch                 s[id] or s:id
    String variable               t[id] or t:id
    Variable Manipulation Expression               `Expression


### ◆ Comment
    //                      Line comment
    /**/                    Range comment

   
### ◆ Reserved words
    def              
    defs              
    defv              
    deft              
    vname
    sname
    tname
    cev
    mev
    mep
    bl
    v
    s
    t
    gv
    gs
    gt
    items
    actors
    members
    ev
    self
    player
    boats
   
    airships
   
    sys
    __fn
    __loop
    __if
    __id
    __str
    __defined



### ◆ Common event
    cev

    [argument]
    Array                 Event ID
    Number                 Event ID
    .id(a)              Event ID
   
    String               Event name
    .name(a)            Event name    
   
    .auto              Start condition Automatic start
    .parallel          start condition parallel processing
    .beginBattle        Starting condition At the start of the default battle
    .battleParallel    Start condition Parallel processing in default battle
    .beCalled          Start condition When called (default)
    .cond(n)            Event appearance condition switch
    .ev(n)
    Others               Execution details


    [Sample]
    cev 4, "qwe", .parallel, {      // common event[4] name=qwe  Parallel processing
        "msg"
    }
   

### ◆ Map event
    mev
   
    [argument]
    Array                  
    Number                  
    .id(n)              Event ID
   
    String              
    .name(n)            event name
   
    .parent(n)
    .map(n)            Map ID to place
    .pos(x, y)          Placement position (square)
   
   
    The last specified map ID and event ID will be remembered
    The initial value of the map ID that was memorized when the event was created will be inherited.

   
### ◆ Map event page
    mep
   
    [argument]
    Array                  
    Number                  
    .id(n)              Page ID
   
    .ev
    Block             Event Command

    .parent              
    .mev                Map Event ID
   
    .grandParent
    .map                Map ID
   
    .decision          Start condition When the decision key is pressed (default)
    .touched            Start condition When touched by the main character
    .beTouched          Start condition When touched from an event
    .auto              Start condition Automatic start
    .parallel          start condition parallel processing
   
    .body(a, b)        Walking graphic a and position in file b
    .trans
    .transparent        Make the walking graphic translucent
   
    .anim(*)            Animation Settings
        .normal        Normal (default)
        .fixDir        Fixed orientation
        .step          (Normal or fixed orientation) with step
        .fix            Graphics completely fixed
        .spin          4 animations
        .noWalk        Disable walking
       
    .priority(*)        Priority type
        .low            Below the normal character (default)
        .middle        Does not overlap with normal characters
        .high          Above normal characters
       
    .disableOverlap    Does not overlap with another event
   
    .dir(*)            Event Orientation
        .up           
        .right         
        .down          Down (default)
        .left          Left
       
    .pattern            Graphic pattern
        .left               
        .middle        (default)
        .right
   
    .cond(*)            Appearance condition
        Comparison operation         Variable l is equal to r
       
        .sw1(n)        Switch n is on
        .sw2(n)        Switch n is on
        .item(n)        Possess item n
        .actor(n)      Hero n is at the party
        .timer1(n)      Remaining seconds of timer 1 is less than or equal to n
        .timer2(n)      Remaining seconds of timer 2 is less than or equal to n
       
    .action(*)          Action
        .freq(n)        Movement frequency
        .speed(n)      Movement speed
        .repeat        Repeat an action
        .skippable      Ignore if not moveable (default)
        .unskippable    Don't ignore regardless of moveability
       
        .random        Random move
        .vert          Up and down round trip
        .horiz          Left and right round trip
        .approach      Approach the hero
        .away          Run away from the main character
       
        .custom(*)
        Block         Designate movement route

       
    [Moving route]
    .moveUp
    .moveRight
    .moveDown
    .moveLeft
    .moveUpperRight
    .moveLowerRight
    .moveUpperLeft
    .moveLowerLeft
    .moveRandom
    .moveToward
    .moveAway
    .moveForward
    .faceUp
    .faceRight
    .faceDown
    .faceLeft
    .turnRight
    .turnLeft
    .turnBack
    .turnSide
    .turnRandom
    .turnToward
    .turnAway
    .pause
    .beginJump
    .endJump
    .fixDir
    .unfixDir
    .speedUp
    .speedDown
    .freqUp
    .freqDown
    .switchOn(id)
    .switchOff(id)
    .setBody(file, idx)
    .se(file, vol, pitch, balance)
    .beginThrough
    .endThrough
    .pauseAnim
    .resumeAnim
    .transUp
    .transDown

   
    The initial values of the map ID and event ID that were memorized when the page was created will be inherited.


### ◆ Setting switch/variable names
    sname/vname
   
   
    [argument]
    Array/Number           Current ID
    String               Name currently assigned to ID
   
    .expand(a)         Secure the minimum number of elements a
    .shrink            Remove trailing blank name elements

    .pad(a)            Add an empty character name to a items from the current ID
    .pad(a)            Add an empty character name to the specified range a

    .wipe              Clear all original names
    .append            Do not clear original name (default)



### ◆ Command notation
    @name.subname(arg1, arg2, ...)   
    @name.subname arg1, arg2, ...
    @name.subname arg1  arg2  ...
    @name.subname {
        arg1
        arg2
        ...
    }
   
    Some arguments take additional arguments
   
    @name.subname arg1(subarg1, ...), arg2
   
   
    As a general rule, command arguments are in no particular order (*there are exceptions),
    The order of arguments is fixed
    Unnecessary command arguments can be omitted.
   
   
    Subcommands with a fixed number of arguments return excess arguments.
   
    @timer.set5.timer2
   
    The command above is interpreted as follows,
   
    @timer(.set(5, .timer2))
   
    The return sets the value as expected
   
    @timer(.set(5), .timer2)
   
   
    If the argument is an array, the argument can be written between @name and .subname
   
    @pic.erase [10]
    @pic[10].erase
   
    The last @name described is remembered and can be omitted when using the same one continuously
    Also, arguments written between @name and .subname are inherited
   
    @pic[2].show "qwe"
    .move.pos(160, 120).time(6).wait    //@> Move picture: [2]
    .erase                              //@> Erase Picture: [2]
   
   
    Multiple operations on the same item will be overwritten by the last change
   
    @party.item[1].add(5).sub(3)        //@> Increase or decrease item: item[1] -= 3
   

</details>
<details>

 <summary> ◇ Commands Overview</summary>
Those are the Event Commands:

    @msg.show                  Show text    
    @msg.opt                    Setting text options
    @msg.option                Set text options
    @msg.face
    @msg.choice
    @msg.input
    @msg.inputNum
    @msg.hook                   
   
    @timer
   
    @party.money
    @party.item
    @party.member
   
    @actor.exp
    @actor.level
    @actor.param
    @actor.skill
    @actor.equip
    @actor.equipment
    @actor.hp
    @actor.mp
    @actor.state
    @actor.recoverAll
    @actor.damage
    @actor.name
    @actor.nickname
    @actor.face
    @actor.faceset
    @actor.body
    @actor.charset
    @actor.inputName
    @actor.class
    @actor.cmd
    @actor.multipleAct
   
    @player.setPos
    @player.getPos
    @player.trans
    @player.transparent
   
    @vehicle.body
    @vehicle.charset
    @vehicle.ride
    @vehicle.setPos
   
    @sys.bgm
    @sys.se
    @sys.skin
    @sys.transition
    @sys.call
    @sys.limitation
    @sys.gameover
    @sys.reset
    @sys.shutdown
    @sys.gameOpt
    @sys.gameOption
    @sys.wait
    @wait
    @sys.getInfo
    @sys.fullscreen
    @sys.partyMenu
    @sys.menuAccess
    @sys.loadMenu
    @sys.optionMenu
   
    @shop
    @inn
   
    @map.getPlayerPos
    @map.setPlayerPos
    @map.setVehiclePos
    @map.setEv
    @map.setEvPos
    @map.setEventPos
    @map.getTerrain
    @map.getEv
    @map.tileset
    @map.parallax
    @map.replaceTile
    @map.rewrite
   
    @scr.hide
    @scr.show
    @scr.tint
    @scr.flash
    @scr.shake
    @scr.scroll
    @scr.weather
   
    @btl.encounterRate
    @btl.begin
    @btl.atbMode
    @btl.hook
    @btl.atb
    @btl.cmdex
    @btl.getInfo
    @btl.forceEscape
    @btl.if
    @btl.cev
    @btl.abort
    @btl.backdrop
    @btl.anim
   
    @enemy.hp
    @enemy.mp
    @enemy.state
    @enemy.appear
   
    @pic.show
    @pic.move
    @pic.erase
    @pic.strpic
    @pic.getInfo
    @pic.setId
    @pic.setPixel
    @pic.drawTile
   
    @img.save
   
    @label.set
    @label.jump
    @goto
   
    @loop
    @countUp
    @countDown
    @while
    @doWhile
    @foreach
    @break
    @continue
   
    @bgm.play
    @bgm.stop
    @bgm.fadeout
    @bgm.store
    @bgm.restore
   
    @se.play
    @se.stop
   
    @movie.play
   
    @key.input
    @key.inputEx
   
    @anim.show
   
    @ev.setPos
    @ev.swap
    @ev.setAction
    @ev.setAnim
    @ev.flash
    @ev.execAction
    @ev.stopAction
    @ev.abort
    @ev.erase
    @ev.call
    @call
   
    @save.getInfo
    @save.save
    @save.load
   
    @gsave
    @mouse
    @comment
    @cmd
    @if
    v
    s
    t
   
    @raw
   </details>

<details open>
<summary open> ◇ Event command</summary>
   
### ◆ Text <a id='Text'></a>
    @msg.show
   
    [argument]
    String                   Text
    .br                    Line break
    Other                   Convert to string
   
    Multiple arguments are concatenated
    In addition, the following description in the source is interpreted as text display
   
    Single string             "txt" or "sentence"
   
   
   
### ◆ Display Text Options <a id='Display Text Options'></a>
    @msg.opt
   
    [argument]
    .opaq                  Normal window (default)
    .trans             
    .transparent            Transparent window
    .top                    Top placement
    .middle                centered
    .bottom                Bottom alignment (default)
    .varyPos                Change the placement to match the main character
    .allowEventMove        Allow moving events while viewing
   
    .size(a, b)            Text window width a and height b 0, no change
   
    .font(a, b)            Text window font name a and size b
   
   
### ◆ Change Faceset <a id='Change Faceset'></a>
    @msg.face
   
    [argument]
    Character string                   File name
    String variable               File name
   
    Numeric value                     File index
    Variable                     File index
    a..b                    Animated index a~b
   
    .left                  Left alignment (default)
    .right                  Right placement
    .hrev                
    .hreverse              Flip horizontally
    .force                  Forced change even in situations where movement is suppressed, such as when text is being displayed.

    [Arguments for animation]
    .interval(a, b, c)      Wait time. Base frame a, random number increase/decrease b, flag c to limit random numbers to addition
    .fpc(a, b, c)           Display time for one image. Base frame a, random number increase/decrease b, flag c to limit random numbers to addition
    .once                  Do not loop animation
    .loopback(a)            Loop back after finishing the specified range. Flag a for whether to set an interval by wrapping
   

### ◆ Show Choices <a id='Show Choices'></a>
    @msg.choice

    [argument]
    .case                  Each choice
    .cancel                Cancel behavior
   
    [argument of case]   
    String                   Choice text
    Others                     Execution details of options
   
    [argument for cancel]
    String                   Optional Choice Text
    Numeric                     Index of optional choices
    .ignore                Ignore (default)
    Others                     Execution contents at the time of cancellation
   

### ◆ Input Number <a id='Input Number'></a>
    @msg.input
    @msg.inputNum
   
    [argument]
    .digit(n)         Number of digits
    .dst(n)            Variable to receive result
   
   
### ◆ TPC | Control Text Processing <a id='TPC | Control Text Processing'></a>
    @msg.hook
   
    .e                  Watch for \e in sentences
    .showing            Monitor window creation
    .closing            Observe window destruction
    .blit              Monitor character drawing
   
    .cev(a)            Common event a to receive notification
   
    .sys(v[a], t[b])    Head a of variables that receive arguments from the system, head b of string variables
    .user(v[a], t[b])  Head a of variables that receive arguments from the user, head b of string variables
   
   
   
### ◆ Timer Operation <a id='Timer Operation'></a>
    @timer

    [argument]
    .set(n)            seconds
    .start              start
    .stop              stop
    .show              Show Timer
    .continueInBattle  Continue during battle
    .timer1            Operate timer 1 (default)
    .timer2            Operate timer 2
   
   
### ◆ Change Gold <a id='Change Gold'></a>
    @party.money
   
    [argument]
    .add(n)            Increase value
    .sub(n)            Decrease value

   
### ◆ Change Items <a id='Change Items'></a>
    @party.item
   
    [argument]
    Array                 Item ID
    .add(n)            Increase value
    .sub(n)            Decrease value


### ◆ Change Party Member <a id='Change Party Member'></a>
    @party.member
   
    [argument]
    .add(n)            Actor to join
    .sub(n)            Leaving actor


### ◆ Change EXP <a id='Change EXP'></a>
    @actor.exp
   
    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .add(n)            Increase value
    .sub(n)            Decrease value
    .notify            Show level up message


### ◆ Change Level <a id='Change Level'></a>
    @actor.level
   
    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .add(n)            Increase value
    .sub(n)            Decrease value
    .notify            Show level up message


### ◆ Change Parameters <a id='Change Parameters'></a>
    @actor.param
   
    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .add(n)            Increase value
    .sub(n)            Decrease value
    .hp                Change item to max HP
    .mp                Increase or decrease items to maximum MP
    .atk                Change item to attack power
    .def                Change item to defense
    .mag                Make the increase/decrease item mental
    .spd                Make the increase/decrease item agility
   
   
### ◆ Change Skills <a id='Change Skills'></a>
    @actor.skill
   
    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .add(n)            Skill ID to learn
    .sub(n)            Forgetting Special Skill ID

   
### ◆ Change Equipment <a id='Change Equipment'></a>
    @actor.equipment
   
    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .add(n)            Item ID to equip
    .removeWeapon      Remove Weapon
    .removeShield      Remove the shield
    .removeHelm        Remove the helmet
    .removeArmor        Remove Armor
    .removeAccessory    Remove the decoration
    .clear              Remove all equipment
   

### ◆ Change HP <a id='Change HP'></a>
    @actor.hp

    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .add(n)            Increase value
    .sub(n)            Decrease value
    .possibleDie         Allow Manipulation Death    
   
### ◆ Change MP <a id='Change MP'></a>
    @actor.mp

    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .add(n)            Increase value
    .sub(n)            Decrease value


### ◆ Change State <a id='Change State'></a>
    @actor.state

    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .add(n)            Status to add
    .sub(n)            Status to release
 
 
### ◆ Recover All <a id='Recover All'></a>
    @actor.recoverAll
   
    [argument]
    Array                 Target actor ID
    .all                Target all party members
   

### ◆ Damage Processing <a id='Damage Processing'></a>
    @actor.damage
   
    [argument]
    Array                 Target actor ID
    .all                Target all party members
    .value(n)          Base damage
    .defModifier(n)    Defense Influence
    .magModifier(n)    Influence of Mental Strength
    .variance(n)         Variance
    .dst(n)            Variable to receive damage value

   
### ◆ Change Actor Name <a id='Change Actor Name'></a>
    @actor.name
   
    [argument]
    Array                 Target actor ID
    String               Name

   
### ◆ Change Actor Nickname <a id='Change Actor Nickname'></a>
    @actor.nickname
   
    [argument]
    Array                 Target actor ID
    String               Title


### ◆ Change Actor Graphic <a id='Change Actor Graphic'></a>
    @actor.body
   
    [argument]
    Array                 Target actor ID
    Character string               File name
    Numeric value                 File index
    .trans              Make translucent

### ◆ Change Actor Faceset <a id='Change Actor Faceset'></a>
    @actor.face
   
    [argument]
    Array                 Target actor ID
    Character string               File name
    Numeric value                 File index
   

### ◆ Change Vehicle Graphic <a id='Change Vehicle Graphic'></a>
    @vehicle.body
   
    [argument]
    Character string               File name
    Numeric value                 File index
    .boat              Targets small boats
    .ship              Target large ships
    .airship            Target an airship
   

### ◆ Change System BGM <a id='Change System BGM'></a>
    @sys.bgm

    [argument]
    Character string               File name
    .battle            Target battle BGM
    .endBattle          Target the battle end BGM
    .inn                Target inn BGM
    .boat              Target small ship BGM
    .ship              Target large ship BGM
    .airship            Target airship BGM
    .gameover          Target game over BGM
    .opt(a, b, c, d)     Set fade-in time, volume, tempo and balance of BGM    

   
### ◆ Change System SE <a id='Change System SE'></a>
    @sys.se
   
    [argument]
    .cursor            Target Cursor SE
    .decision          Target Decision SE
    .cancel            Target Cancel SE
    .buzzer            Target Buzzer SE
    .escape            Target escape SE
    .enemyAttack        Target enemy attack SE
    .enemyDamage        Target enemy damage SE
    .actorDamage        Targets allied damage SE
    .avoid              Target avoid SE
    .defeat            Target Repel SE
    .item              Target item use SE
    .opt(a, b, c)       Set SE volume, tempo and balance    


### ◆ Change System Graphic <a id='Change System Graphic'></a>
    @sys.skin
   
    [argument]
    Character string               File name
    .stretch           
    .tiled              Tile
    .gothic            MS Gothic
    .mincho            MS Mincho
   
   
### ◆ Change Screen Transition <a id='Change Screen Transition'></a>
    @sys.transition
   
    [argument]
    Numeric value                 Switching method
    .transfer_hide      Move (delete)
    .transfer_show      Move (show)
    .beginBattle_hide  Begin battle (delete)
    .beginBattle_show  Begin battle (show)
    .endBattle_hide    End battle (delete)
    .endBattle_show    Battle end (show)


### ◆ Change location
### ◆ Transfer Player <a id='Transfer Player'></a>
    @map.setPlayer
    @map.setPlayerPos 
    @player.setPos
   
    [argument]
    Array                 Map ID
    .pos(x, y)           coordinates
    .retain            Retain the orientation of the player (only when a constant is specified, default)
    .up                Looking up (only when a constant is specified)
    .right              Turn right (only when a constant is specified)
    .down              Looking down (only when a constant is specified)
    .left              Turn left (only when a constant is specified)

   
### ◆ Get Player Location <a id='Get Player Location'></a>
    @map.getPlayerPos
    @map.getPlayer
    @player.getPos
   
    [argument]
    Argument 0               Map ID storage variable
    Argument 1               x-coordinate storage variable
    Argument 2               y-coordinate storage variable

   
### ◆ Get On/Off Vehicle <a id='Get On/Off Vehicle'></a>
    @vehicle.ride


### ◆ Set Vehicle Location <a id='Set Vehicle Location'></a>"
    @map.setVehicle
    @map.setVehiclePos
    @vehicle.setPos
   
   
    [argument]
    Array                 Map ID
    .pos(x, y)           coordinates
    .boat              Small boat
    .ship              Large ship
    .airship           
    .retain            Retain orientation (default)
    .up                Looking up
    .right              Turn right
    .down              Looking down
    .left              Turn left
   

### ◆ Set Event Location <a id='Set Event Location'></a>
    @map.setEv
    @map.setEvPos
    @ev.setPos
   
    [argument]
    Array                 Event ID
    .player            Protagonist
    .boat              Small boat
    .ship              Large ship
    .airship           
    .self              This event
   
    .pos(x, y)           coordinates
   
    .retain            Retain orientation (default)
    .up                Looking up
    .right              Turn right
    .down              Looking down
    .left              Turn left
    .face(x)            Face x (up = 0, right, down, left)
   
   
### ◆ Swap Event Location <a id='Swap Event Location'></a>
    @ev.swap
   
    [argument]
    Array                 Event ID
    Numeric value                 ID to be exchanged
    .self              Set the exchange target to this event
   

### ◆ Get Terrain ID <a id='Get Terrain ID'></a>
    @map.getTerrain
   
    [argument]
    .pos(x, y)           coordinates
    .dst(n)            Destination

   
### ◆ Get Event ID <a id='Get Event ID'></a>
    @map.getEv
   
    [argument]
    .pos(x, y)           coordinates
    .dst(n)            Destination

   
### ◆ Hide Screen <a id='Hide Screen'></a>
    @scr.hide
   
    [argument]
    Number                 How to delete
    .default            Follow system switching method (default)


### ◆ Show Screen <a id='Show Screen'></a>
    @scr.show
   
    [argument]
    Numeric value                 Display method
    .default            Follow system switching method (default)


### ◆ Tint Screen <a id='Tint Screen'></a>
    @scr.tint
   
    [argument]
    .rgbs(r, g, b, s)  red, green, blue, saturation
    .time(n)            Time to change n * 0.1 sec
    .wait              Wait until completion


### ◆ Flash Screen <a id='Flash Screen'></a>
    @scr.flash
   
    [argument]
    .rgbv(r, g, b, v)  red, green, blue, strength
    .once(n)            Execute only once Time n * 0.1 sec
    .begin(n)          Flash start time n * 0.1 sec
    .end                  Flash end
    .wait              Wait until completion

   
### ◆ Shake Screen <a id='Shake Screen'></a>
    @scr.shake
   
    [argument]
    .value(a, b)        Strength, Speed
    .once(n)            Execute only once Time n * 0.1 sec
    .begin(n)          Shake start time n * 0.1 sec
    .end                  Shake end
    .wait              Wait until completion

   
### ◆ Scroll Map <a id='Scroll Map'></a>
    @scr.scroll
   
    [argument]
    .fix                  fixed
    .unfix              Unfix
    .restore            Restore position
    .shift(n)          Shift n squares
    .pxShift(h, v)      Shift the specified value horizontally and vertically in units of pixels
    .set(x, y)          Specify coordinates in pixels
    .up
    .right
    .down
    .left              Direction when operation is shift
    .speed(n)          When the operation is shift/restore Movement speed 1-6
              .
    .time              When the operation is pxShift/set Frame to move
    .wait              Wait until completion
    .center            When the operation is set Treat the specified value as the center coordinate
    .relative          When the operation is set Treat the specified value as relative coordinates from the current position
   
   
### ◆ Weather Effect Settings <a id='Weather Effect Settings'></a>
    @scr.weather
   
    [argument]
    .none              None
    .rain                   
    .snow              snow
    .mist              Fog
    .sandstorm         
    .weak              Effect Strength Weak
    .medium            Effect Strength Medium
    .strong            Effect Strength Strong
   

### ◆ Show Picture <a id='Show Picture'></a>
    @pic.show
   
    [argument]
    Array                 Picture ID
    Character string               File name
    String variable           File name
   
    .pos(x, y)           coordinates
    .center            Center coordinates
    .topLeft            Top left coordinates
    .bottomLeft        Bottom left coordinates
    .topRight          Upper right coordinate
    .bottomRight        Bottom right coordinate
    .top                top coordinate
    .bottom            Bottom coordinates
    .left              left coordinate
    .right              right coordinate
   
    .scrollWithMap      Linked map scroll
    .useChromakey      With transparent color
    .chromakey(n)      Specify whether to use transparent color
   
    .scale(n)          Scale factor n%
    .scale2(a, b)      Horizontal expansion rate a%, Vertical b%
   
    .trans(n)              
    .transparency(n)    Transparency
    .rgbs(r, g, b, s)   Hue
   
    .rotate(n)          Rotate effect
    .wave(n)            Wave effect
    .angle(a, b)        Angle designation effect a / b
   
    .multi              Multiplication
    .add                Add
    .overlay            overlay
   
    .hrev
    .hreverse          Flip horizontally
    .vrev
    .vreverse          Flip vertically
    .hvrev
    .hvreverse          Flip horizontally/vertically
   
    .repl(a, b)        Replace letter a at the end of file name with variable b
   
    .grid(a, b)       Split by a, b as a sprite sheet
    .cell(n)            Display ID of the sprite sheet
   
    .anim(n)          
    .animation(n)      Animate the sprite sheet (display frame n per sheet)
    .rangeAnim(a, b, c) Animate with ID[b..c] (display frame a per frame)
   
    .once              Play animation only once
    .repeat            Play animation repeatedly
   
    .mapLayer          Layers in fields
    .battleLayer        Layer in battle

    .eraseWhenTransfer  Erase when moving map
    .eraseWhenEndBattle Erase when the battle ends
    .affectedByTint    Affected by screen tint
    .affectedByFlash    Affected by screen flash
    .affectedByShake    Affected by screen shake
 
 
### ◆ Move Picture <a id='Move Picture'></a>
    @pic.move
   
    [argument]
    Array                 Picture ID
   
    .pos(x, y)           coordinates
    .center            Center coordinates
    .topLeft            Top left coordinates
    .bottomLeft        Bottom left coordinates
    .topRight          Upper right coordinate
    .bottomRight        Bottom right coordinate
    .top                top coordinate
    .bottom            Bottom coordinates
    .left              left coordinate
    .right              right coordinate
   
    .scale(n)          Scale factor n%
    .scale2(a, b)      Horizontal expansion rate a%, Vertical b%
   
    .trans(n)              
    .transparency(n)    Transparency
    .rgbs(r, g, b, s)  Hue (variables can be used)
   
    .rotate(n)          Rotate effect
    .wave(n)            Wave effect
    .angle(a, b)        Angle designation effect a / b
   
    .multi              Multiplication
    .add                Add
    .overlay            overlay
   
    .hrev
    .hreverse          Flip horizontally
    .vrev
    .vreverse          Flip vertically
    .hvrev
    .hvreverse          Flip horizontally/vertically
   
    .time(n)            travel time n * 0.1 sec
    .wait              Wait until completion
 
    .relative          Specify coordinates, magnification, and transparency as relative values
    .keepRgbs          Do not change tint values
    .keepEffect        Do not change special effects
    .keepBlend          Do not change blend mode
    .keepFlip          Do not change the flip state
    .keepTime          Do not change duration
   
 
### ◆ Erase Picture <a id='Erase Picture'></a>
    @pic.erase

    [argument]
    Array                 Picture ID
    .all                Target all pictures
   

### ◆ Show Animation <a id='Show Animation'></a>
    @anim.show
   
    [argument]
    Array                 Battle Anime ID
    Numeric value                 Target event ID
    Variable                 Target event ID

    .target(n)          Target event ID
    .player            player
    .boat              Small boat
    .ship              Large ship    
    .airship           
    .self              This event
   
    .picTarget(a)     Follow picture a
    .pos(a, b)          Display at specified coordinates (a, b)
    .bind(a, b)        Follow the value of variables (a, b)
   
    .buffer(a)         Play in buffer a
   
    .reverse(a)       Whether to reverse a
    .wait              Wait until completion
    .tiled              Arrange across the screen

    * picTarget/pos/bind cannot be used with tiled


### ◆ Show/Hide Player <a id='Show/Hide Player'></a>
    @player.trans
    @player.transparent

    [argument]
    Numeric value                 Specify status with numeric value
    .on                Transparent
    .off                Unlock
   

### ◆ Flash Event <a id='Flash Event'></a>
    @ev.flash
   
    [argument]
    Array                 Event ID
    .player            player
    .boat              Small boat
    .ship              Large ship    
    .airship           
    .self              This event
   
    .rgbv(r, g, b, v)  red, green, blue, strength
    .time(n)            Time taken for action n * 0.1 sec
    .wait              Wait until completion
   

### ◆ Set Move Route <a id='Set Move Route'></a>
    @ev.setAction
   
    [argument]
    Array                 Event ID
   
    .act
    block             subcommand
   
    .player            player
    .boat              Small boat
    .ship              Large ship    
    .airship           
    .self              This event
   
    .freq(n)            Movement frequency
    .repeat            Repeat an action
    .skippable          Ignore if not moveable (default)
    .unskippable        Do not ignore regardless of moveability

    [subcommand]
    .moveUp
    .moveRight
    .moveDown
    .moveLeft
    .moveUpperRight
    .moveLowerRight
    .moveUpperLeft
    .moveLowerLeft
    .moveRandom
    .moveToward
    .moveAway
    .moveForward
    .faceUp
    .faceRight
    .faceDown
    .faceLeft
    .turnRight
    .turnLeft
    .turnBack
    .turnSide
    .turnRandom
    .turnToward
    .turnAway
    .pause
    .beginJump
    .endJump
    .fixDir
    .unfixDir
    .speedUp
    .speedDown
    .freqUp
    .freqDown
    .switchOn(id)
    .switchOff(id)
    .setBody(file, idx)
    .se(file, vol, pitch, balance)
    .beginThrough
    .endThrough
    .pauseAnim
    .resumeAnim
    .transUp
    .transDown
   

### ◆ TPC | Add Move Route <a id='TPC | Add Move Route'></a>
    @ev.addAction
   
    [argument]
    .moveUp(n)
    .moveRight(n)
    .moveDown(n)
    .moveLeft(n)
    .moveUpperRight(n)
    .moveLowerRight(n)
    .moveUpperLeft(n)
    .moveLowerLeft(n)
    .moveRandom(n)
    .moveRandom(n)
    .moveToward(n)
    .moveAway(n)
    .moveForward(n)            Move n steps to each
    .move(a, b)               Move b steps to a
   
    .faceUp
    .faceRight
    .faceDown
    .faceLeft
    .turnRight
    .turnLeft
    .turnBack
    .turnSide
    .turnRandom
    .turnToward
    .turnAway
    .face(a)                    Face a
   
    .pause
   
    .beginJump
    .endJump
    .jump (a), (b)              Jump a on the x-axis and b on the y-axis from the current position
   
    .fixDir
    .unfixDir
    .setBody(file, idx)
    .se(file, vol, pitch, balance)
    .beginThrough
    .endThrough
    .pauseAnim
    .resumeAnim                  

    .speed(n)                  Set movement speed (-3~2)
    .freq(n)                    Set movement frequency (0-7)
    .switch(id, val)            Switch ID, boolean
    .trans(n)                  Transparency setting (0~7)
   
   
    [Argument a of .move]
    00: Move up
    ...
    11: Forward


    [.face argument a]
    00: Look up
    ...
    10: Face opposite the main character
   
   

### ◆ Wait for All Movement <a id='Wait for All Movement'></a>
    @ev.execAction
   

### ◆ Stop All Movement <a id='Stop All Movement'></a>
    @ev.stopAction

   
### ◆ Wait <a id='Wait'></a>
    @sys.wait
    @wait
   
    [argument]
    Number                 Time n * 0.1 sec
    Variable                 Time n * 0.1 sec
    .input              Wait for key input instead of time
    .frame              Make time units frames
   

### ◆ Play BGM <a id='Play BGM'></a>
    @bgm.play
   
    [argument]
    Character string               File name
    String variable           File name
    .opt(a, b, c, d)     Fade-in time, volume, tempo, balance    

   
    @bgm.stop
   
   

### ◆ Fadeout BGM' <a id='Fadeout BGM'></a>
    @bgm.fadeout
   
    [argument]
    Numeric value                 Fade out time
   

### ◆ Memorize BGM <a id='Memorize BGM'></a>
    @bgm.store


### ◆ Play Memorized BGM <a id='Play Memorized BGM'></a>
    @bgm.restore

   
### ◆ Play SE <a id='Play SE'></a>
    @se.play
   
    [argument]
    Character string               File name
    String variable           File name
    .opt(a, b, c)       Volume, Tempo, Balance    


    @se.stop

   
### ◆ Play Movie <a id='Play Movie'></a>
    @movie.play
   
    [argument]
    Character string               File name
    .pos(a, b)         Coordinates
    .size(a, b)         Display size

   
### ◆ Key Input Processing <a id='Key Input Processing'></a>
    @key.input
   
    [argument]
    .dst(n)            Variable to receive result
    .wait              wait until pressed
    .elapsed            Variable to receive time until pressed
   
    .decision           
    .cancel
    .number
    .symbol
    .shift
    .down
    .left
    .right
    .up
   
    .lclick
    .rclick
    .mclick
    .wheelDown
    .wheelUp


### ◆ Change Tileset <a id='Change Tileset'></a>
    @map.tileset
   
    [argument]
    Numeric                 Tileset ID
    Variable                 Tileset ID
   

### ◆ Change Parallax Back <a id='Change Parallax Back'></a>
    @map.parallax
   
    [argument]
    Character string               File name
    .hloop              Loop horizontally
    .vloop              Loop vertically
    .hscroll(n)        Auto scroll horizontally
    .vscroll(n)        Auto scroll vertically

   
### ◆ Change Tile <a id='Change Tile'></a>
    @map.replaceTile
   
    [argument]
    Array                 Original Chip ID
    Number                 Chip ID to replace
    .lower              Lower
    .upper              Upper


### ◆ Set Encounter Rate <a id='Set Encounter Rate'></a>
    @btl.encounterRate
   
    [argument]
    Number                 Steps

### ◆ Set Teleportation Point ??????? <a id='Set Teleportation Point'></a>

    @raw 11810, "", 0, 1, 0, 0, 0, 1     

    @raw 11810, "", 1, 1, 9, 7, 0, 1

    @raw 11810, "", 0, 1, 0, 0, 1, 1

### ◆ Teleportation On/Off  ??????? <a id='Teleportation On/Off'></a>

    @raw 11820, "", 0

    @raw 11820, "", 1

### ◆ Set Escape Location ??????? <a id='Set Escape Location'></a>

    @raw 11830, "", 1, 0, 0, 0, 1

    @raw 11830, "", 1, 0, 0, 1, 1
    
### ◆ Change Escape Access ??????? <a id='Change Escape Access'></a>

    @raw 11840, "", 0

    @raw 11840, "", 1



### ◆ TPC | Call System Functions <a id='Call System Functions'></a>
 <a id='TPC | Call System Functions'></a>
    @sys.call
   
    [argument]
    .saveMenu         Save screen
    .loadMenu           Load screen    
    .partyMenu          Party Menu
    .optionMenu        Options window
    .licenseMenu         License Window    
    .debugMenu         Debug Window    
    .toggleScreen      Toggle full screen mode
    .f12                GAME RESET
   
    .pause              Pause (debug window only)

   
### ◆ TPC | Control System Functions <a id='Control System Functions'></a>
 <a id='TPC | Control System Functions'></a>
    @sys.limitation
   
    [argument]
    .saveMenu          Disable save screen
    .partyMenu          Ban party menu
    .toggleScreen      Disable screen switching (F4)
    .optionMenu        Disable option window (F5)
    .debugMenu          Disable debug window (F9)
    .f12                Disable game reset (F12)
   
   
   
### ◆ Label <a id='Label'></a>
    @label.set
   
    [argument]
    Numeric value                 Label number
    Character string               Label name (number automatically assigned)
   
   
    The following description is also possible
   
    (label name):
   
   
### ◆ Jump to Label <a id='Jump to Label'></a>
    @label.jump
    @goto
   
    [argument]
    Numeric value                 Label number
    Character string               Label name (number automatically assigned)

   
### ◆ Loop <a id='Loop'></a>
    Infinite loop/number of times
   
    @loop
   
    [argument]
    Number                  
    variables
    Switch             Loop count
    .inf                Infinite loop (default)
    .dst                Variable that receives the index (only when specifying the number of times)
    Others               Loop content

   
    Count Up/Count Down
   
    @countUp / @countDown
   
    [argument]
    Range                 Range to count
    .dst                Variable to receive index
    Others               Loop content

   
    Conditional loops
   
    @while / @doWhile
   
    [argument]
    Comparison operations             Conditional expressions (==, >=, <=, >, <, !=)
    .dst                Variable to receive index
    Others               Loop content
   
   
    Element enumeration
   
### ◆ TPC | foreach <a id='TPC | foreach'></a>
    @foreach
   
    [Arguments for temporary arrays]
    Array                 Elements to enumerate (constants, variables, variable numbers)
    .dst                element, variable receiving index
    Others               Loop content
   
    [Arguments for pointer arrays]
    variable                 head of array
    .cnt                Number of elements
    .dst                element, variable receiving index
    Others               Loop content

    [Arguments for map events]
    .mev
    .dst                Variable to receive event ID, index
    Others               Loop content


### ◆ Break Loop <a id='Break Loop'></a>
    @break
   
    [argument]
    Numeric value                 Number of blocks to escape
    .level(n)          Number of blocks to exit
   
   

### ◆ Continue <a id='Continue'></a>
    @continue
   
    [argument]
    Numeric value                 Number of blocks to escape
    .level(n)          Number of blocks to exit
   
   

### ◆ End Event Processing <a id='End Event Processing'></a>
    @ev.abort
   

### ◆ Erase Event <a id='Erase Event'></a>
    @ev.erase
   
   
### ◆ Call Event <a id='Call Event'></a>
    @ev.call
    @call
   
    [argument]
    .cev(n)
    .cmn(n)
    .common(n)          Common Event ID
    .mev(a, b)
    .map(a, b)          map event ID, page
   

### ◆ Comment <a id='Comment'></a>
    @comment
   
    [argument]
    Character string               Comment content
   
   
### ◆ Game Over <a id='Game Over'></a>
    @sys.gameover
   
   
### ◆ Return to Title Screen <a id='Return to Title Screen'></a>
    @sys.reset
   
   
### ◆ Exit Game <a id='Exit Game'></a>
    @sys.shutdown
   
   
### ◆ MNC | Get Save Info <a id='MNC | Get Save Info'></a>
    @save.getInfo
   
    [argument]
    Array                 Save number
    .datetime(a, b)    Variables that receive date and time
    .leader(a, b)      Variable that receives the leader member's level and HP
    .level(a)          Variable to receive the level of the first member
    .hp(a)              Variable to receive the HP of the first member
    .name(a)            A string variable that receives the name of the first member
    .face(a, b, c, d)   Picture ID to draw the member's face graphic
   
   
### ◆ MNC | Save <a id='MNC | Save'></a>
    @save.save
   
    [argument]
   
    Array                 Save number
    .res(n)
    .result(n)          Variable to receive save result
   
   
### ◆ MNC | Load <a id='MNC | Load'></a>
    @save.load
   
    [argument]
   
    Array                 Save number
    .disableFileCheck  Disable file content checking
    .disableBlackout    Disable blackout on load
   
   ### ◆ MNC | End Load Processing (Do Nothing) ??????? <a id='MNC | End Load Processing (Do Nothing)'></a>

    @raw 3004, ""
   
### ◆ MNC | Get/Set Mouse Position <a id='MNC | Get Mouse Position'></a> <a id='MNC | Set Mouse Position'></a>
    @mouse
   
    [argument]
    .getPos(a, b)      Variable to receive coordinates
    .setPos(a, b)       Coordinates to set
   
   
### ◆ MNC | Show String Picture <a id='MNC | Show String Picture'></a>
    @pic.strpic
   
    [argument]
    Array                 Picture ID
    String               Drawing Text
   
    .pos(a, b)          Display position
    .center            Center coordinates
    .topLeft            Top left coordinates
    .bottomLeft        Bottom left coordinates
    .topRight          Upper right coordinate
    .bottomRight        Bottom right coordinate
    .top                top coordinate
    .bottom            Bottom coordinates
    .left              left coordinate
    .right              right coordinate

    .scrollWithMap      Linked map scroll
    .useChromakey      With transparent color
    .chromakey(n)      Set transparent color
   
    .scale(n)          Scale factor n%
    .scale2(a, b)      Horizontal expansion rate a%, Vertical b%

    .trans(n)           Transparency n%
    .rgbs(r, g, b, s)   Hue
   
    .size(a, b)         Picture size
    .font(a, b)        Font name, font size
    .skin(a)            Graphic filename to use for drawing
   
    .noframe            Disable window borders
    .noGradation        Disable character gradation
    .noShadow          Disable character shadows
    .noPadding          Disable padding outside characters
   
    .nobg              Don't draw window backgrounds
    .stretch            Stretch drawing
    .tiled              Tile
   
    .bold             
    .charSpacing(n)    Character spacing
    .lineSpacing(n)    Line spacing
    .spacing(a, b)      Character/line spacing
   
    .rotate(n)          Rotate effect
    .wave(n)            Wave effect
    .angle(a, b)        Angle designation effect a / b
   
    .multi              Multiplication
    .add                Add
    .overlay            overlay
   
    .hrev
    .hreverse          Flip horizontally
    .vrev
    .vreverse          Flip vertically
    .hvrev
    .hvreverse          Flip horizontally/vertically
   
    .mapLayer          Layers in fields
    .battleLayer        Layer in battle

    .eraseWhenTransfer  Erase when moving map
    .eraseWhenEndBattle Erase when the battle ends
    .affectedByTint    Affected by screen tint
    .affectedByFlash    Affected by screen flash
    .affectedByShake    Affected by screen shake
   
   
### ◆ MNC | Get Picture Info <a id='MNC | Get Picture Info'></a>
    @pic.getInfo
   
    [Argument for rectangle]
    Array                         Picture ID
    .baseRect(a, b, c, d)       Rectangle without scaling
    .currentRect(a, b, c, d)    The current rectangle
    .goalRect(a, b, c, d)       Rectangle after moving
   
    .xywh                      Let the rectangle be x, y, w, h
    .ltrb                      Let the rectangle values ​​be left, top, right, bottom
    .cewh                      Let the rectangle values ​​be cx, cy, w, h
   
    [Argument for pixels]
    Array                         Picture ID
    .pixel(a, b, c, d)           Rectangle to get (xywh)    
   
    .dst(a)                    Result destination
    .ignoreA                    Ignore pixel alpha
    .dynamic                    Get value with effect
    .static                    Get value without effect (default)


### ◆ TPC | Edit Picture <a id='TPC | Edit Picture'></a>
    @pic.setPixel
   
    [argument]
    Array                         Picture ID
    .xywh(a, b, c, d)           Rectangle to change    
    .src(a)                    Start of variable number where pixel information is stored
   
    .opaq                      Always set pixel A to 0xFF regardless of the specified value.
    .skipTrans
    .skipTransparent            Do not apply transparent pixel data


### ◆ TPC | Edit Picture (Tile) <a id='TPC | Edit Picture (Tile)'></a>
    @pic.drawTile
   
    [argument]
    Array                         Picture ID
    .xywh(a, b, c, d)           Rectangle to change    
    .src(a)                    Start of variable number where tile ID is stored
    .lower                      Draw the lower layer
    .upper                      Draw the upper layer

    .single (n)               Draw with a single tile n
    .range (n)                  Read tile IDs in the specified range from variable n

    .disableAutoTile            Disable auto-tiling in underlying drawing
    .wipe                      Clear the specified range before drawing

    .tilesetId (n)              Tileset to use for drawing
    .pattern (n)                Anime pattern
   
    *The tile ID is the same as the "Rewrite map" command.
    * Use the current map by specifying 0 for tilesetId
    * Use the same pattern as the map by specifying -1 for the pattern    

   
### ◆ TPC | Output Image <a id='TPC | Output Image'></a>
    @img.save
   
    [argument]
    .screen                    Target the game screen
    .pic(a)                    Target pictures
   
    .static                    (Picture) Does not reflect color tone/flash
    .dynamic                    (Picture) Reflect color and flash
   
    .opaq                      Make all pixels opaque (for pictures)
   
    .dst(n)                      Output file name
   
   
### ◆ MNC | Key Input Processing EX <a id='MNC | Key Input Processing EX'></a>
    @key.inputEx
   
    [argument]
    .keybd                      Get keyboard status
    .keybdWithBind              Get keyboard state with bind
    .keyCode(n)                Get key state for code n
    .joy                        Get joypad status
    .getBind                    Get the joypad binding status
    .setBind                    Set joypad binding state
   
    .src(n)                    
    .dst(n)                    Start of variable used to get or set
   
   
### ◆ MNC | Rewrite Map <a id='MNC | Rewrite Map'></a>
    @map.rewrite
   
    [argument]
    .pos(a, b)                  Start point of rewriting position
    .size(a, b)                Rewriting range
    .xywh(a, b, c, d)           Starting point and range of rewrite position
    .lower                      Make the target the lower layer
    .upper                      Make the target the upper layer
    .single(n)                  Rewrite with a single tile n
    .range(n)                  Read tile IDs in the specified range from variable n
    .disableAutoTile            Disable auto-tile processing when rewriting the lower layer


### ◆ MNC | Control Variable Array <a id='MNC | Control Variable Array'></a>
    Copy
    v[tag1].copy(v[tag2], count)

    Swap values
    v[tag1].swap(v[tag2], count)

    Ascending sort
    v[tag1].sort(count)
   
    Descending sort
    v[tag1].sortDescending(count)
   
    Shuffle
    v[tag1].shuffle(count)
   
    Enumeration of values
    v[tag1].enum(beg, count)
   
    Dereference
    v[tag1].deref(v[tag2], count)
   
    Binary operations
    v[tag1].***(v[tag2].count)
   
    .add
    .sub
    .mul
    .div
    .mod
    .or
    .and
    .xor
    .shl
    .shr
   
    [Sort/Shuffle Options]
    .sync(a)                      Head a of the array to be operated in conjunction
   
   
### ◆ MNC | Control Shared Save <a id='MNC | Control Shared Save'></a>

    Open/Close/Save/Save and Close
    @gsave.open
    @gsave.close
    @gsave.save
    @gsave.saveAndClose
   
    Switch/variable/string variable operations
    gs[a].***(s[b], count)
    gv[a].***(v[b], count)
    gt[a].***(t[b], count)
   
    copyto
    copyTo              Copy from shared save
    copy from
    copyfrom            copy to shared save
   

### ◆ MNC | Set Picture ID <a id='MNC | Set Picture ID'></a>
    @pic.setId
   
    [argument]
    Array                 Picture ID
   
    .move(a, b)         move length b to a
    .swap(a, b)         Exchange ID for length b with a
    .slide(a, b)        Shift ID by length b
   
    .ignoreError        Do not make an error for an out-of-range ID operation    



### ◆ MNC | Set Game Option <a id='MNC | Set Game Option'></a>
    @sys.gameOpt
   
    [argument]
    .pauseWhenInactive      Pause When Inactive
    .runWhenInactive        Continue running when inactive    
    .fatal(a, b, c)         Set FPS, test play, message skip
    .picLimit(n)           Set the picture ID limit
    .animLimit(n)         Set the upper limit for the number of battle animations displayed
    .fullFrame              No frame skip
    .oneFifth              Skip rendering once every 5 frames
    .oneThird              Skip rendering once every 3 frames    
    .oneHalf                Skip rendering once every two frames
    .mouse.disableMsgProcession(n)
              .
   
    .btlOrigin                Specify the display position of the default battle screen
        .center            center
        .topLeft           
        .bottomLeft       
        .topRight         
        .bottomRight       
        .top                Top
        .bottom           
        .left              left
        .right             
   
    .winFaceSize(a, b)      Text window face graphic width a, height b
   
   
    * Arguments for this command can be properly divided into multiple commands except for items that overlap
   

### ◆ MNC | Call Command <a id='MNC | Call Command'></a>
    @cmd
   
    [argument]
    Numeric value                 Command code
    String               Command string argument
    Array                 Each argument when directly specifying a numeric argument
    `[(expr), ...]      Arguments when specifying numeric arguments in a formula            
    .args(a, b)        Variable head a and number of elements b when specifying numeric arguments in a variable array

   


### ◆ Conditional Branch <a id='Conditional Branch'></a>
    @if
   
    ・Switch
        s[n]
       
        [argument]
        .isOn                    Switch is ON (default)
        .isOff                    Switch is OFF
       
   
    ・Variables
        l (op) r
       
        [op]
        Comparison operations                 Variable comparisons (==, >=, <=, >, <, !=)
   
   
    ・String variable (TPC | If stringVar)
        String variable (op) String
       
        [op]
        .eq                    l is the same as r
        .neq                      l is not r
        .contains              l contains r
        .notContains            l does not contain r

        [argument]
        .ignoreCase            Ignore Case
   
   
    ・Money
        .money
   
        [argument]
        .geq(n)                  Have more than n money
        .leq(n)                  Your money is n or less
       
   
    ・Timers 1 and 2
        .timer1
        .timer2
       
        [argument]
        .geq(n)                 Remaining seconds is n or more
        .leq(n)                Remaining seconds less than or equal to n
   
   
    ・Items    
        .item
       
        [argument]
        Array                     Item ID
        .exists                Own item
        .notExists              I don't own the item
   
   
    ・Main character
        .
       
        [argument]
        Array                     Hero ID
        .isMember              The main character is at the party
        .isNamed(n)            The main character's name is n
        .level.geq(n)          Hero's level is n or higher
        .hp.geq(n)              Hero's HP is n or more
        .hasSkill(n)            Hero can use special skill n
        .isEquip(n)            Hero is equipped with item n
        .hasState(n)            Hero is in state n
   
   
    ・Character
        .ev
       
        [argument]
        Array                     Character ID
        .player
        .boat
        .ship
        .airship
        .self                  Special Events
       
        [argument for orientation]
        .facingUp              facing up
        .facingRight            .facing right
        .facingDown            facing down
        .facingLeft            facing left
       
        [Argument for existence check]
        .exists
       
   
    ・Vehicles
        .boat
        .ship
        .airship
       
        .isDriven             
       
       
    ・Formula
        `expr                  any expression
       
       
    ・Other
        .triggeredByDecision    Start with decision key
        .bgmHasLooped          BGM goes around
        .saveExists            save exists
        .testPlay              Test play enabled
        .atbWaitMode            ATB wait enabled
        .fullscreen            Full screen state
        .rightAfterLoad        Right after loading
        .enableJoy              Joypad enabled
        .active                Window Active
        .canOutput              File output possible
       
   
   
    .elif(...)              Conditional branching in other cases and execution contents when it is satisfied
    .else(n)                What to do otherwise
   
    Others                   Execution details when the conditions are met
   
 ### ◆ TPC | If stringVar <a id='TPC | If stringVar'></a>
        (related to @if)
        String variable (op) String
       
        [op]
        .eq                    l is the same as r
        .neq                      l is not r
        .contains              l contains r
        .notContains            l does not contain r

        [argument]
        .ignoreCase            Ignore Case
   
   

### ◆ Control Switches <a id='Control Switches'></a>
    s[n].on
    s[n].off
    s[n].toggle
    s[n] = 1
    s[n] = 0
   
   
### ◆ Control Variables <a id='Control Variables'></a>

    [Operation Details]

    v[a] = b                 Assignment    
    v[a] += b              Addition    
    v[a] -= b               subtract
    v[a] *= b              Multiplication
    v[a] /= b               Division
    v[a] %= b              remainder
    v[a] |= b               Or
    v[a] &= b               And
    v[a] ^= b               Xor
    v[a] <<= b               Shl
    v[a] >>= b               Shr
   
    [Special Operands]
    item[a].count           The number of possessions of item a
    item[a].equipCount       Equip count of item a
    actor[a].level          Level of hero a
    actor[a].exp             Current experience of hero a
    actor[a].hp            HP of hero a
    actor[a].mp             MP of hero a
    actor[a].mhp            Maximum HP of hero a
    actor[a].mmp             Maximum MP of hero a
    actor[a].atk           Attack power of hero a
    actor[a].def            Defense of hero a
    actor[a].mag            Mental strength of main character a
    actor[a].spd             Agility of hero a
    actor[a].weapon         Weapon ID of hero a
    actor[a].shield        Shield ID of hero a
    actor[a].armor          Armor ID of hero a
    actor[a].helm          Helm ID of hero a
    actor[a].accessory     Accessory ID of hero a    
    actor[a].id           ID of actor a
    actor[a].gauge          ATB gauge for hero a
    actor[a].reqExp         Exp required for hero a's next level
    member[a].***          *** of party member a (same as .actor)
    ev[a].mapId            Map ID of event a
    ev[a].x               X coordinate of event a
    ev[a].y                Y coordinate of event a
    ev[a].dir             Orientation of event a
    ev[a].scrx               Screen X of event a
    ev[a].scry              Screen Y of event a
    ev[a].id                ID of event a
    enemy[a].hp            HP of enemy character a
    enemy[a].mp            MP of enemy character a
    enemy[a].mhp            Maximum HP of enemy character a
    enemy[a].mmp           Maximum MP of enemy character a
    enemy[a].atk            Attack power of enemy character a
    enemy[a].def            Defense of enemy character a
    enemy[a].mag            Character a's mental strength
    enemy[a].spd            Agility of enemy character a
    enemy[a].id            ID of enemy character a
    enemy[a].gauge          Enemy character a's ATB gauge
    sys.money              Money
    sys.timer1               Remaining seconds of timer 1
    sys.timer2             Remaining seconds of timer 2
    sys.memberCount         Number of party members
    sys.saveCount           Number of saves
    sys.battleCount         Number of battles
    sys.winCount            Number of wins
    sys.loseCount           Number of losses    
    sys.escapeCount         Number of escapes
    sys.tick                 MIDI playing position
    sys.date                Date
    sys.time                Time
    sys.frame              Elapsed frame
    sys.version            Version of Maniacs
    rnd(a, b)                
    pow                      
    sqrt                   
    sin                     
    cos
    atan2
    min
    max
    abs
    clamp
    muldiv
    divmul
    between                Mathematical functions that can be used in variable manipulation expressions
    lerp(a, b, t, td)       a + (t / td) * (b - a)
    sum(id, cnt)            Total value of v[id]..v[id+cnt-1]      
    amin(id, cnt)          Minimum of v[id]..v[id+cnt-1]
    amax(id, cnt)          Maximum value of v[id]..v[id+cnt-1]
   
   
### ◆ TPC | Control String Variables <a id='TPC | Control String Variables'></a>
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .asg                    Assignment
    .cat                    Concatenation
   
    [string operand]
    String                   Value
    .min(n)                Minimum number of characters
    .extract                Variable expansion within strings
   
    [numeric operand]
    Number                     Value
    .min(n)                Minimum number of digits
   
    [Switch Operands]
    Switch                 Value
    .min(n)                Minimum number of characters
   
    [name operand]
    .actor[a].name
    .skill[a].name
    .item[a].name
    .enemy[a].name
    .troop[a].name
    .terrain[a].name
    .element[a].name
    .state[a].name
    .anim[a].name
    .tileset[a].name
    .s[a].name
    .v[a].name              
    .t[a].name            
    .cev[a].name          
    .class[a].name          
    .anim2[a].name          
    .map[a].name            
    .mev[a].name            
    .member[a].name        Data type
    .static                Get database value
    .dynamic                Get game data value
    .extract                Variable expansion within strings
   
    [description operand]
    .actor[a].desc
    .skill[a].desc
    .item[a].desc
    .member[a].desc        Data type
    .static                Get database value
    .dynamic                Get game data value
    .extract                Variable expansion within strings
   
    [operands of concatenation]
    .cat(a, b, c)           String
    .extract                Variable expansion within strings
   
    [insert operand]
    .ins(a, b, c)          base string a, index b, insertion string c
    .extract                Variable expansion within strings
   
    [operand for partial deletion]
    .rem
    .remove(a, b, c)         base string a, index b, number of characters c
    .extract                Variable expansion within strings
   
    [operand for replacement]
    .rep(a, b, c)          base string a, search string b, replacement string c
    .extract                Variable expansion within strings
   
    [operand of replacement (regular expression)]
    .exrep(a, b, c)      
    .exRep(a, b, c)        Base String a, Search Term b, Replacement String c
    .first                  Only replace the first matching string
    .extract                Variable expansion within strings
   
    [Cut Operand]
    .subs(a, b, c)           base string a, index b, number of characters c
    .extract                Variable expansion within strings
   
    [array operand]
    .join(a, b, c)          delimiter a, first element b, number of elements c
    .extract                Variable expansion within strings
   
    [file operands]
    .file(a)               File name a
    .sjis                  Set encoding to shift-jis
    .utf8                  Set encoding to utf-8
    .extract                Variable expansion within strings

   
(cont.) Character string variable (numericalization)<br>
-

    [Target]
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .toNum(a, *)            Numericalize and output to variable a
   
    [*(optional)]
    .extract                Variable expansion within strings
    .hex                    Convert as hexadecimal
   
   
(cont.) Character string variable (get length)<br>
-

    [Target]
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .getLen(a)             Output length to variable a

   
(cont.) Character string variable (search)<br>
-

    [Target]
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .inStr(a, b, *)        Output the occurrence position of string a to variable b
   
    [*(optional)]    
    .beg(a)                Search start position (number of characters)
    .extract                Variable expansion in search strings
    .hex                    Convert as hexadecimal numbers when expanding numbers


(cont.) Character string variable (search by regular expression)<br>
-

    [Target]
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .exInStr(a, b, *)      Output the occurrence position of search term a to variable b
   
    [*(optional)]    
    .beg(a)                Search start position (number of characters)
    .extract                Variable expansion in search strings
    .hex                    Convert as hexadecimal numbers when expanding numbers


(cont.) Character string variable (extracted by regular expression)<br>
-

    [Target]
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .exMatch(a, b, c, *)    Output capture of search term a to b, appearance position to c
   
    [*(optional)]    
    .beg(a)                Search start position (number of characters)
    .extract                Variable expansion in search strings
    .hex                    Convert as hexadecimal numbers when expanding numbers


(cont.) String variable (split)<br>
-

    [Target]
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .split(a, b, c, *)      Output the array split by string a to string variable b and the number of splits to variable c.
   
    [*(optional)]
    .extract                Variable expansion within split strings
    .hex                    Convert as hexadecimal numbers when expanding numbers


(cont.) Character string variable (file output)<br>
-

    [Target]
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .toFile(a, *)          Output to file name a
   
    [*(optional)]
    .sjis                  Set encoding to shift-jis
    .utf8                  Set encoding to utf-8
    .extract                Variable expansion of file name strings
    .hex                    Convert as hexadecimal numbers when expanding numbers


   
(cont.) Character string variable (cut out one line)<br>
-

    [Target]
    t[n]
    t[v[n]]
    t[a..b]
    t[v[a]..v[b]]

    [Operation Details]
    .popLine(a, *)          Output the extracted line to a
   
    [*(optional)]
    .extract                String variable expansion
    .hex                    Convert as hexadecimal numbers when expanding numbers


   
### ◆ TPC | Get Game Info <a id='TPC | Get Game Info'></a>
    @sys.getInfo
   
    [common arguments]
    Variable                     Result destination
    .dst                    Result destination
   
    [Map Size]
    .mapSize                Get w, h of map    
   
    -> dst[0] ~ dst[1]
   
   
    [Tile ID]
    .tiles(x, y, w, h)       Get the tile ID of the map rectangle xywh
    .lower                  Get Lower
    .upper                  Get upper
   
    -> dst[0] ~ dst[w*h]
   
   
    [Resolution]
    .winSize                Get window w, h
   
    -> dst[0] ~ dst[1]
   
   
    [Screen pixel data]
    .pixel(x, y, w, h)       Get the pixels in the map rectangle xywh
    .ignoreA                Ignore pixel alpha
   
    -> dst[0] ~ dst[w*h]
   
   
    [Event Information]
    .interpreter.current(n) Get call hierarchy n* of running event
   
    ・Hierarchy
        0:  Running
        n>0: up the call hierarchy
        n<0: trace from the first event
   
    ・Contents of output
        dst[0]                    Event type*
        dst[1]                    Event ID
        dst[2]                   Page ID
        dst[3]                    Start condition*
        dst[4]                  line being executed
   
    ・Event type
        01: Map Event
        02: Common Event
        04: Battle Event
   
    ・Reason for calling
        00: Enter key
        01: Contact
        02: Touched
        03: Automatic start
        04: Parallel processing
        05: Call
        06: Battle Begins
        07: Parallel processing (in combat)
       
       
    [Chipset ID]
    .tilesetId                 
   
   
    [Face image]
    .face
   
    .actor[n]                  Target actor n
    .win                        Target text window settings
   
    .static                    Get project data
    .dynamic                    Get running data

    .dst (a), (b)              File destination T[a], index V[b]
   
   
    [Walking graph]
    .body                   
   
    .actor[n]              Target actor n
    .ev[n]                  Target map event n
   
    .static                Get project data
    .dynamic                Get running data

    .dst (a), (b)          File destination T[a], index V[b]
   
   
    [Camera Position]
    .camera
   

    [Shake]
    .shake                  Screen shake value x, y
   
   
    [BGM]
    .bgm

    .dst (a), (b)          File output destination T[a], fade-in/volume/tempo/balance V[b..b+3]
   

### ◆ Change Actor Class <a id='Change Actor Class'></a>
    @actor.class
   
    [argument]
    Array                     Actor ID    
    Numeric                     Occupation ID
    Variable                     Occupation ID
   
    .initLevel              Set level to 1
    .keepLevel              Keep Level
   
    .keepSkill              Keep Skills
    .initSkill              Learn special skills according to level
    .addSkill              Add Skill
   
    .keepParams            Keep stats
    .halveParams            Halves stats
    .level1Params          Makes stats equivalent to level 1
    .initParams            Set ability values ​​according to level
   
    .showMsg                Show level up message



### ◆ Change Battle Commands <a id='Change Battle Commands'></a>
    @actor.cmd
   
    [argument]
    Array                     Actor ID    
    Numeric value                     Command ID
    Variable                     Command ID

    .add                    Add command
    .sub                    Delete command
    .all                    (When deleting) Specify all commands



### ◆ Toggle ATB Wait Mode <a id='Toggle ATB Wait Mode'></a>
    @btl.atbMode
   
    [argument]
    .toggle                Switch ON/OFF of weight

   
   
### ◆ MNC | Control Battle <a id='MNC | Control Battle'></a>
    @btl.hook
   
    [argument]
    .atb                    ATB gauge increase/decrease
    .damagePop              Damage Pop
    .targeting              Targeting
    .addState              Add state
    .paramBuff               Targets ability value changes other than HP
   
    .none                  Release control
    .cev(a)                Common event used for control
    .var(a)                Start of variables used for control



### ◆ MNC | Control ATB Gauge <a id='MNC | Control ATB Gauge'></a>
    @btl.atb
   
    [argument]
    Array                     (In the case of a single unit) Target ID
    .actor                  Make the target an actor
    .member                Make the target a member
    .party                  Target the entire party
    .enemy                  Make the target an enemy character
    .troop                  Target all enemies
   
    .set(a)                Set gauge
    .add(a)                Add gauge
    .sub(a)                Subtract gauge
   
    .percent                Make a value a percentage    
   
   
   
### ◆ MNC | Battle Command EX <a id='MNC | Battle Command EX'></a>
    @btl.cmdex
   
    [argument]
    .change(a)              "change" command
    .fight(a)              "fight" command
    .auto(a)                The "automatic" command
    .escape(a)             Escape command
    .win(a)                "Win" command
    .lose(a)                Set "Lose" command (disabled with 0)
   
   
   
### ◆ MNC | Get Battle Info <a id='MNC | Get Battle Info'></a>
    @btl.getInfo

    [argument]
    .actor(a)              Set the target to actor a
    .member(a)              Set the target to member a
    .party                  Target the entire party
    .enemy(a)              Target is enemy character a
    .troop                  Target all enemies
   
    .buff                  Status Correction
    .state                  State
    .element                Attribute
    .misc                  Other
   
    .list                  Member List
    .alive                  Survivor List
    .canMove                Available list
   
    .dst(a)                Start of output variables
   
   
   
### ◆ BT | Change Enemy HP <a id='BT | Change Enemy HP'></a>
    @enemy.hp
   
    [argument]
    Array                     Target ID
   
    .add(a)                Increase
    .sub(a)                decrease
   
    .percent                Make a value a percentage
    .possibleDie            Allow Manipulation Death
   
   
   
### ◆ BT | Change Enemy MP <a id='BT | Change Enemy MP'></a>
    @enemy.mp
   
    [argument]
    Array                     Target ID
   
    .add(a)                Increase
    .sub(a)                decrease
   
   

### ◆ BT | Change Enemy State <a id='BT | Change Enemy State'></a>
    @enemy.state
   
    [argument]
    Array                     Target ID
   
    .add(a)                grant
    .sub(a)                Unlock
   
   
   
### ◆ BT | Enemy Encounter <a id='BT | Enemy Encounter'></a>
    @enemy.appear
   
    [argument]
    Array                     Target ID
   
   
   
### ◆ BT | Change Battle Background <a id='BT | Change Battle Background'></a>
    @btl.backdrop

    [argument]
    Character string                   Target file



### ◆ BT | Show Animation <a id='BT | Show Animation'></a>
    @btl.anim
   
    [argument]
    Array                     Anime ID

    .troop                  Targets all enemies
    .enemy(a)              Targets a single enemy character a
    .party                  Target all allies
    .actor(a)              Targets a single ally
   
    .wait                  Wait until completion    



### ◆ BT | Action Times + <a id='BT | Action Times +'></a>
    @actor.multipleAct
   
    [argument]
    Array                     Hero ID
    .cmd(a)                Target command
    .times(a)              Repeat times
   
   

### ◆ BT | Force Escape <a id='BT | Force Escape'></a>
    @btl.forceEscape
   
    [argument]
    .party                  Target all allies
    .troop                  Targets all enemies
    .enemy(a)              Targets a single enemy a
   
    .cancelIfSideAttack    You can't escape with a side attack
   
   

### ◆ BT | Conditional Branch <a id='BT | Conditional Branch'></a>
    @btl.if
   
    [argument]
    ・Switch
        s[n]
       
        [argument]
        .isOn                    Switch is ON (default)
        .isOff                    Switch is OFF
       
   
    ・Variables
        l (op) r
       
        [op]
        Comparison operations                 Variable comparisons (==, >=, <=, >, <, !=)
       
       
    ・Main character
        .
       
        Array                     Hero ID
        .canMove                ~ can move
        .use(a)                ~ selects a


    ・Enemy character
        .enemy
       
        Array                     Enemy character number
        .canMove                ~ can move
        .isTarget              is the target
        .hasState(a)            Is in state a

   
    .elif(...)                  Otherwise, the conditional branch and what to do if it is met
    .else(n)                      What to do otherwise
   
    Others                       Execution contents when the conditions are met
   
   

### ◆ BT | Call Common Event <a id='BT | Call Common Event'></a>
    @btl.cev
   
    [argument]
    Number
    Variable                         Event ID
   
   

### ◆ BT | Abort Battle <a id='BT | Abort Battle'></a>
    @btl.abort



### ◆ Name Input Processing <a id='Name Input Processing'></a>
    @actor.inputName
   
    [argument]
    Array                         Actor ID
   
    .kana                        Katakana is selected by default
    .preset                    Put the current name into input mode
   
   

### ◆ Battle Processing <a id='Battle Processing'></a>
    @btl.begin
   
    [argument]
    .troop                      Enemy groups spawned
   
    .normal                    Normal battle format
    .back_actor                Back attack (enemy ← ally)
    .back_enemy                Back attack (ally ← enemy)
    .side_actor                Side attack (enemy ← ally)
    .side_enemy                Side attack (ally ← enemy)
   
    .backdropFile(a)           Battle background file namea  
    .backdropId(a)              Battle background terrain ID a   
   
    .shallow                    Looking down
    .deep                      Deep type
   
    .disableEscape              No Escape
    .enableEscape              Event interrupted by escape
    .enableGameover            Game over on defeat
   
    .preempt                   
    .disableFlash              Disable Flash
   
    .win                        Branching when winning
    .lose                      Branch when defeated
    .escape                    Branches when escaping  
   


### ◆ Inn Processing <a id='Inn Processing'></a>
    @inn
   
    [argument]
    .msg(a)                    Message type (0..2)
    .cost(a)                     Price
   
    .stay                      Branch when staying
    .leave                      Branch when not staying



### ◆ Shop Processing <a id='Shop Processing'></a>
    @shop
   
    [argument]
    Number                         Item ID
   
    .msg(a)                    Message type (0..2)
   
    .normal                    normal
    .buyOnly                    Buy Only
    .sellOnly                  Sell Only
   
    .goods(a, b)               Head a of variable storing item ID, number of elements b
   
    .transaction                Branching when trading
    .noTransaction              Branch when not trading
 

   
### ◆ Open Load Menu <a id='Open Load Menu'></a>
    @sys.loadMenu
   
   

### ◆ Open Video Option <a id='Open Video Option'></a>
    @sys.optionMenu
   
   

### ◆ Toggle Fullscreen Mode <a id='Toggle Fullscreen Mode'></a>
    @sys.fullscreen

    [argument]
    .toggle                    Toggle (default)



### ◆ Open Menu Screen <a id='Open Menu Screen'></a>
    @sys.partyMenu
   
   
   
### ◆ Change Menu Access <a id='Change Menu Access'></a>
    @sys.menuAccess
   
    [argument]
    .on                          ALLOW
    .off                        Prohibit
   
   
   
### ◆ Others
    @raw

    [argument]
    Argument 0 is the command code
    Argument 1 is a string argument
    Generate a command considering argument 2 and later as numeric arguments
   
   
   
</details>
<details>
<summary> ◇ Directive</summary>
    Specifies what operation to perform


### ◆ Operation
    Specify one

    #doNothing
    Do nothing (default)
   
   
    #apply
    Read the files associated with the items mentioned in the source,
    Update content
    Commands that don't belong anywhere are ignored
   
   
    #toClip
    Outputs the item described in the source to the clipboard
    IDs for common events, map events, and event pages are ignored
   
   
    #bin2text
    Convert game project data into text
    The text is in a unique format that follows the blueprint, not tpc
    If the tpc source code contains common events, etc., the changes will be applied before output.       
    For map data, a 4-digit ID will be added to the end of the specified file name.
    *Don't forget to make a backup for troubleshooting.
   
   
        [bin2text arguments]
        .db(n)                  Text file n to output the converted database
        .map(n)                Text file n to output converted map data
        .tree(n)                Text file n that outputs the converted map tree
        Array                     Target map ID


    #text2bin
    Generate game project data from text
    The text is in a unique format that follows the blueprint, not tpc
    If the tpc source code contains common events, etc., the changes will be applied before output.       
    For map data, a 4-digit ID will be added to the end of the specified file name.
    *Don't forget to make a backup for troubleshooting.
   
        [text2bin arguments]
        .db(n)                  File n that outputs the generated database
        .map(n)                File n to output generated map data
        .tree(n)                File n that outputs the generated map tree
        Array                     Target map ID
       

### ◆ Loading blueprints
    #blueprints
   
    [argument]
    .db(n)                  Load database blueprint file n
    .map(n)                Load map data blueprint file n
    .tree(n)                Load map tree blueprint file n

    Required when updating files or outputting clips other than event commands
   
   
### ◆ Directory specification
    #directory

    [argument]
    String                   Directory to use for input/output

   
    Required when updating files
   

### ◆ Operation settings when files are duplicated
    #copyMode
   
    [argument]
    .backup                Back up and overwrite (default)
    .force                  Overwrite as is
   
   
    Take the backup in the same place as the 2003 extension editor
    (specified directory)/Backup/(date and time).zip

   
### ◆ Read source file
    #include "src"
   
    [argument]
    String                   File name to read
   
   
    Add source text at the position you write
    If you write other than at the beginning of the line, it will fail.
   

### ◆ Text option
    #msg

    [argument]
    .none                  None (default)
    .instant                Append "\>" to all lines
   
   
### ◆ Optimization
    #optimize

    [argument]
    A number                     Specifies the optimization level Default is 0 (none)
   

    *Currently, only distinction between 0 (disabled) and 1 or more (enabled)
   
   
### ◆ Grammar option
    #brace
   
    [argument]
    .does                  Forms part of the arguments
   
      [argument]
      .not                  Forms part of the argument

        [argument]
        .represent          Form part of the arguments

          [argument]
          .the              Forms part of the arguments

            [argument]
            .start          Forms part of the arguments
   
              [argument]
              .of          Forms part of the arguments
   
                [argument]
                .the        form part of the arguments
       
                  [argument]
                  .argument     
                  .arguments     
                            Do not recognize braces as argument opening symbols
                            Abbreviations for event command names cannot be used when setting


</details>
<details>
<summary> ◇ Meta syntax</summary>


### ◆ Constant definition
    def
   
    Assign a value to any defined name

    If you omit the value, it is assumed to be a number and assigned in order starting with the initial value 0.
    If a number is specified, the value after that +1 will be the default value
   
    Some values, such as event command names, do not work well even if defined
   
   
    [Sample]
    def qwe = 33
   
    def {
        a = 6
        b              // b is 7
        c              //c is 8
        d="aaa"
        e              //e is 9
    }

   
### ◆ Switch/variable/character string variable definition
    defs / defv / deft
   
    Assign Maker switches/variables/string variables to any defined name
    The basics are the same as def, but only numeric values ​​or range values ​​can be placed on the right side, and the default value when omitted is 1.

    [Sample]
    defv qwe = 10      //qwe is v[10]   
   
   

### ◆ Meta variables
    $variable name
   

### ◆ meta function
    __fn
   
    [argument]
    0th is meta function name
    Meta variables that receive arguments from the first to number-of-arguments-1
    The last argument is what to do
   
    [Sample]
   
    __fn qwe $a $b {
        @comment $b
        @msg.show $a
    }
   
    qwe("abcd" "efgh")
   
   
### ◆ Loop
    __loop
   
    [Argument (number of times)]
    0th is the number of executions
    A meta variable whose first receives the index (optional)
    The execution contents after the second
   
    [argument (element enumeration)]
    An array containing the elements enumerated by the 0th
    A meta variable whose first receives the element (optional)
    a meta variable whose second receives the index (optional)
    Execution contents after the 3rd
   
    [Sample]
   
    __loop 5 $i {
        @msg.face "Actor1" $i
    }
   
    __loop ["qwe" "rty" "uio"] $e {
        $e
    }

    __loop ["qwe" "rty" "uio"] $e $i {
        @msg.face $e $i
    }


### ◆ Conditional branch
    __if
   
    [argument]
    0th condition
    What to do when the first is true
    The second is .elif or .else (optional)

    [.elif arguments]
    Same as __if

    [.else arguments]
    0th is the execution content
   
    [Sample]
   
    __if qwe == 2 {
        "if"
   
    } .elif qwe == 3 {
        "elif"
       
    } .else {
        "else"
       
    }
   
   
### ◆ ID acquisition

    __id
   
    [argument]
    Maker variables (v, s, t)
   
   
   
### ◆ String conversion

    __str
   
    [argument]
    any value
   
   
    *Multiple arguments are concatenated in the order they are given.
   
   
### ◆ Definition check
    __defined
   
    Checks if the given argument is a definition or metavariable with a value

    [argument]
    any value
