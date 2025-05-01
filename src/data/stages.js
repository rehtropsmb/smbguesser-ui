const stages = [
    // Days 1 to 5
    { name: "Visionary", pack: "Gaiden", slot: "8-9" },
    { name: "Giant Swing", pack: "SMB2", slot: "Expert Extra 4"},
    { name: "Imbalance", pack: "Stardust", slot: "6-2" },
    { name: "Drills", pack: "Launch!", slot: "7-4" },
    { name: "Downhill", pack: "SMB2", slot: "3-9" },
    // Days 6 to 10
    { name: "Electric Fence", pack: "Invasion", slot: "8-7" },
    { name: "Ease", pack: "Gaiden", slot: "1-1" },
    { name: "Quaketray", pack: "Gaiden", slot: "3-4" },
    { name: "Pro Skaters", pack: "SMB2", slot: "4-1" },
    { name: "Monorails", pack: "Stardust", slot: "3-8" },
    // Days 11 to 15
    { name: "Carpets", pack: "Gaiden", slot: "7-4" },
    { name: "Arbitrary Restriction", pack: "Invasion", slot: "10-8" },
    { name: "Seesaw Cockfight", pack: "Invasion", slot: "9-2" },
    { name: "Harmonic", pack: "Launch!", slot: "7-5" },
    { name: "Flip Switches", pack: "Stardust", slot: "9-3" },
    // Days 16 to 20
    { name: "Awesome Sauce", pack: "Stardust", slot: "Debug 4" },
    { name: "Rickety Ridge", pack: "Launch!", slot: "4-8" },
    { name: "Flat Maze", pack: "SMB2", slot: "9-5" },
    { name: "Revision", pack: "Gaiden", slot: "8-7" },
    { name: "Drill Bits", pack: "Stardust", slot: "5-7" },
    // Days 21 to 25
    { name: "Floaters", pack: "SMB2", slot: "1-6" },
    { name: "Sky Trampolines", pack: "Invasion", slot: "5-2" },
    { name: "Expedition", pack: "Gaiden", slot: "1-4" },
    { name: "Network", pack: "651", slot: "9-4" },
    { name: "Crumbled Castle", pack: "Invasion", slot: "7-8" },
    // Days 26 to 30
    { name: "Slippery Speedway", pack: "Stardust", slot: "7-9" },
    { name: "Scoop", pack: "651", slot: "4-7" },
    { name: "Dominion", pack: "Launch!", slot: "1-4" },
    { name: "Drop In", pack: "651", slot: "6-6" },
    { name: "Matrix", pack: "Launch!", slot: "10-1" },
    // Days 31 to 35
    { name: "Pistons", pack: "SMB2", slot: "Expert 31" },
    { name: "Restless", pack: "651", slot: "1-6" },
    { name: "Reveal", pack: "Stardust", slot: "1-6" },
    { name: "Rotary Orbit", pack: "Launch!", slot: "9-10" },
    { name: "Crease", pack: "Launch!", slot: "1-7" },
    // Days 36 to 40
    { name: "Lunchbox", pack: "Deluxe", slot: "Beginner 18" },
    { name: "Nice Shot!", pack: "Invasion", slot: "3-8" },
    { name: "Solar Flare", pack: "Launch!", slot: "3-3" },
    { name: "Ice Skate Park", pack: "Invasion", slot: "4-9" },
    { name: "Warp", pack: "SMB2", slot: "E37" },
    // Days 41 to 45
    { name: "Pandora's Box", pack: "Gaiden", slot: "10-2" },
    { name: "Ikaruga", pack: "Gaiden", slot: "7-1" },
    { name: "Mountain", pack: "SMB2", slot: "10-3" },
    { name: "Nanobot Invasion", pack: "Stardust", slot: "9-4" },
    { name: "Infinity Mirror", pack: "Invasion", slot: "2-1" },
    // Days 46 to 50
    { name: "Exodus", pack: "Gaiden", slot: "10-1" },
    { name: "Mini Map Assist", pack: "651", slot: "7-10" },
    { name: "Waves", pack: "651", slot: "3-8" },
    { name: "8 Friends :)", pack: "Stardust", slot: "7-7" },
    { name: "Shatter", pack: "Stardust", slot: "3-1" },
    // Days 51 to 55
    { name: "Collapsing Bridge", pack: "Invasion", slot: "7-1" },
    { name: "Train Worm", pack: "SMB2", slot: "Expert Extra 10" },
    { name: "Pulley", pack: "Launch!", slot: "7-9" },
    { name: "Domes", pack: "SMB2", slot: "Advanced Extra 6" },
    { name: "Gauntlet", pack: "Gaiden", slot: "Master Extra 9" },
    // Days 56 to 60
    { name: "Proportional Editing", pack: "Invasion", slot: "10-3" },
    { name: "Snake", pack: "Deluxe", slot: "Expert 42" },
    { name: "Partition", pack: "SMB2", slot: "Expert 5" },
    { name: "Ant Lion Super", pack: "Deluxe", slot: "9-20" },
    { name: "Pour", pack: "651", slot: "7-8" },
    // Days 61 to 65
    { name: "Cycle Hit", pack: "Gaiden", slot: "3-1" },
    { name: "Rapids", pack: "Stardust", slot: "10-6" },
    { name: "Reel", pack: "Launch!", slot: "3-5" },
    { name: "Birth", pack: "SMB2", slot: "Beginner Extra 10" },
    { name: "Deranged Toy", pack: "Invasion", slot: "5-9" },
    // Days 66 to 70
    { name: "Lava Plume", pack: "Launch!", slot: "6-2" },
    { name: "Middle Jam", pack: "Deluxe", slot: "5-10" },
    { name: "Ruffle", pack: "Invasion", slot: "5-8" },
    { name: "Feedback Loop", pack: "651", slot: "4-4" },
    { name: "Showerhead", pack: "Stardust", slot: "1-4" },
    // Days 71 to 75
    { name: "Accelerator", pack: "Launch!", slot: "9-3" },
    { name: "Conquest", pack: "Launch!", slot: "Master Extra 2" },
    { name: "Emergency Brake", pack: "Gaiden", slot: "2-2" },
    { name: "Sliced Cheese", pack: "SMB2", slot: "Master Extra 5" },
    { name: "Inertial", pack: "Deluxe", slot: "Beginner 32" },
    // Days 76 to 80
    { name: "Solar Orbit", pack: "Stardust", slot: "Interstellar 3" },
    { name: "Woodpecker", pack: "Invasion", slot: "3-7" },
    { name: "Rigidify", pack: "Gaiden", slot: "6-4" },
    { name: "Repellent", pack: "651", slot: "5-6" },
    { name: "Rerun", pack: "651", slot: "1-8" },
    // Days 81 to 85
    { name: "Rebound Slider", pack: "Stardust", slot: "4-10" },
    { name: "Squeeze", pack: "Launch!", slot: "5-2" },
    { name: "Auto Doors", pack: "SMB2", slot: "Advanced Extra 1" },
    { name: "Whirlers", pack: "Gaiden", slot: "4-3" },
    { name: "Scrolls", pack: "Deluxe", slot: "Advanced 15" },
    // Days 86 to 90
    { name: "Cone Flake", pack: "Stardust", slot: "2-8" },
    { name: "Personal Space", pack: "Invasion", slot: "4-10" },
    { name: "Combination", pack: "SMB2", slot: "6-1" },
    { name: "Scaffolding", pack: "Stardust", slot: "10-5" },
    { name: "Saw", pack: "651", slot: "3-4" },
    // Days 91 to 95
    { name: "Wreckage", pack: "Launch!", slot: "Master 2" },
    { name: "Gravity Jumper", pack: "651", slot: "7-3" },
    { name: "Scorpion", pack: "Invasion", slot: "6-5" },
    { name: "Warp Dreams", pack: "Gaiden", slot: "5-10" },
    { name: "Variable Width", pack: "SMB2", slot: "Master Extra 1" },
    // Days 96 to 100
    { name: "Veer Field", pack: "Deluxe", slot: "Beginner 36" },
    { name: "Maelstrom", pack: "Gaiden", slot: "Master Extra 2" },
    { name: "Wormhole", pack: "SMB2", slot: "Expert 1" },
    { name: "Architect", pack: "651", slot: "6-10" },
    { name: "Commingle Soiree", pack: "Launch!", slot: "9-6" },
    // End Season 1

    // Season 2 (prepared by Nambo)
    // Days 1 to 5
    { name: "Sega Logo", pack: "Deluxe", slot: "8-4" },
    { name: "Totalitarianism", pack: "SMB2", slot: "2-9" },
    { name: "Slicer", pack: "651", slot: "3-6" },
    { name: "Wrecking Balls", pack: "Stardust", slot: "5-3" },
    { name: "Triangle Walk", pack: "Invasion", slot: "6-6" },
    // Days 6 to 10
    { name: "The Grand Finale", pack: "Gaiden", slot: "Master Extra 10" },
    { name: "Dismantled Pedestal", pack: "Invasion", slot: "2-4" },
    { name: "Melting Pot", pack: "SMB2", slot: "5-3" },
    { name: "Locksmith", pack: "Launch!", slot: "2-6" },
    { name: "Toboggan", pack: "Launch!", slot: "8-8" },
    // Days 11 to 15
    { name: "Ladder", pack: "651", slot: "9-7" },
    { name: "Unconventional Combo", pack: "Invasion", slot: "8-1" },
    { name: "Valleys", pack: "651", slot: "7-2" },
    { name: "Ringfield", pack: "Gaiden", slot: "3-7" },
    { name: "Blur Bridge", pack: "Deluxe", slot: "Beginner Extra 1" },
    // Days 16 to 20
    { name: "Landing Gear", pack: "Gaiden", slot: "2-3" },
    { name: "Tail", pack: "651", slot: "4-8" },
    { name: "Klein Bottle", pack: "Stardust", slot: "1-9" },
    { name: "Paraboloid", pack: "Deluxe", slot: "Advanced 60" },
    { name: "Down Under", pack: "Stardust", slot: "6-4" },
    // Days 21 to 25
    { name: "Namb69", pack: "Launch!", slot: "Kaizo Extra 3" },
    { name: "Ziplines", pack: "Stardust", slot: "10-7" },
    { name: "Detour", pack: "SMB2", slot: "6-8" },
    { name: "Bouncy Bubble Land", pack: "Stardust", slot: "Interstellar 1" },
    { name: "Outrun", pack: "Invasion", slot: "6-3" },
    // Days 26 to 31
    { name: "Fun House", pack: "651", slot: "2-7" },
    { name: "Slippery When Wet", pack: "Invasion", slot: "5-6" },
    { name: "Unwind", pack: "Gaiden", slot: "2-9" },
    { name: "Diamondback", pack: "Launch!", slot: "4-5" },
    { name: "Eclipse", pack: "Launch!", slot: "Master 4" },
    { name: "Slot Machine", pack: "Gaiden", slot: "6-10" },

    // Season 3 (juegar time)
    { name: "Lunch with Matthew", pack: "Juegar", slot: "Advanced 29" },
    { name: "The Hanging Man Paradox", pack: "Juegar", slot: "Beginner 10" },
    { name: "Florida West Beach", pack: "Juegar", slot: "Beginner Extra 6" },
    { name: "Susceptible Prey", pack: "Juegar", slot: "Advanced 17" },
    { name: "Monky Suicie", pack: "Juegar", slot: "Advanced 2" },
    { name: "Kim Deal", pack: "Juegar", slot: "Advanced Extra 1" },
    { name: "Steed Dirkly", pack: "Juegar", slot: "Advanced 28" },
    { name: "Goofy", pack: "Juegar", slot: "Advanced 1" },
    { name: "Post Your Stream Key", pack: "Juegar", slot: "Advanced 7" },
    { name: "No Brown Allowed Past This Point", pack: "Juegar", slot: "Beginner Extra 1" },
    { name: "Mouse For Sale", pack: "Juegar", slot: "Advanced 15" },
    { name: "Dr. Professor", pack: "Juegar", slot: "Advanced 30" },
    { name: "Splurge", pack: "Juegar", slot: "Beginner 8" },
    { name: "Divine Intervention", pack: "Juegar", slot: "Beginner Extra 3" },
    { name: "Mark Kiessling", pack: "Juegar", slot: "Advanced Extra 5" },
    { name: "Other Arm", pack: "Juegar", slot: "Beginner 7" },
    { name: "The Cogs", pack: "Juegar", slot: "Advanced 8" },
    { name: "Imminent Brown", pack: "Juegar", slot: "Beginner 1" },
    { name: "Brown", pack: "Juegar", slot: "Beginner 2" },
    { name: "Hairy Ball Theorem", pack: "Juegar", slot: "Advanced 27" },
    { name: "Breakfast With Matthew", pack: "Juegar", slot: "Beginner Extra 8" },
    { name: "Knargack", pack: "Juegar", slot: "Advanced 25" },
    { name: "GG", pack: "Juegar", slot: "Beginner Extra 10" },
    { name: "Valentino Squirty", pack: "Juegar", slot: "Advanced 26" },
    { name: "Curbstomp", pack: "Juegar", slot: "Advanced 11" },
    { name: "Gulp Fugde", pack: "Juegar", slot: "Advanced 14" },
    { name: "Crazy Dave", pack: "Juegar", slot: "Advanced Extra 6" },
    { name: "Long Skin", pack: "Juegar", slot: "Beginner Extra 2" },
    { name: "Blastlord", pack: "Juegar", slot: "Beginner Extra 5" },
    { name: "Cracka", pack: "Juegar", slot: "Advanced 20" },

    // Season 4 (prepared by TAR)
    // Days 1 to 5
    { name: "Acheron", pack: "Gaiden", slot: "Master Extra 5" },
    { name: "Rhombus", pack: "Deluxe", slot: "Beginner Extra 4" },
    { name: "Blocks Slim", pack: "Deluxe", slot: "4-2" },
    { name: "Wall Running", pack: "Invasion", slot: "8-3" },
    { name: "Comets", pack: "Launch!", slot: "9-8" },
    // Days 6 to 10
    { name: "Wind the Gap", pack: "Stardust", slot: "7-5" },
    { name: "Long Torus", pack: "SMB2", slot: "Master 7" },
    { name: "Jungle Gym", pack: "Launch!", slot: "1-10" },
    { name: "Turbine", pack: "Gaiden", slot: "4-8" },
    { name: "Bonus Hunting", pack: "Deluxe", slot: "Expert 20" },
    // Days 11 to 15
    { name: "Crossword", pack: "Launch!", slot: "2-2" },
    { name: "Spinning Saw", pack: "SMB2", slot: "9-3" },
    { name: "Foosball", pack: "Stardust", slot: "9-9" },
    { name: "Launcher", pack: "651", slot: "4-3" },
    { name: "Launchers", pack: "SMB2", slot: "4-6" },
    // Days 16 to 20
    { name: "Pacing", pack: "651", slot: "9-8" },
    { name: "Synchronized", pack: "SMB2", slot: "Master Extra 7" },
    { name: "Drum", pack: "Deluxe", slot: "Expert 63" },
    { name: "Superpower", pack: "Invasion", slot: "5-4" },
    { name: "Linear Seesaws", pack: "SMB2", slot: "Beginner Extra 9" },
    // Days 21 to 25
    { name: "Swing Bar", pack: "Deluxe", slot: "Advanced 53" },
    { name: "Eddy's Bruh Hunt : D", pack: "Launch!", slot: "Kaizo Extra 1" },
    { name: "3D Maze", pack: "SMB2", slot: "10-5" },
    { name: "Scattershot", pack: "Invasion", slot: "4-2" },
    { name: "Do You Wanna Build A Snowman?", pack: "Launch!", slot: "8-10" },
    // Days 26 to 30
    { name: "Sneaky Steps", pack: "Invasion", slot: "9-7" },
    { name: "Trailblazing", pack: "Launch!", slot: "6-1" },
    { name: "Tower", pack: "Deluxe", slot: "Expert 17" },
    { name: "Percussion Ensemble", pack: "Stardust", slot: "8-10" },
    { name: "Conical Slider", pack: "SMB2", slot: "Expert Extra 8" },
    // Days 31 to 35
    { name: "The Slope", pack: "Stardust", slot: "Debug 18" },
    { name: "Dotted Line", pack: "Stardust", slot: "Debug 99" },
    { name: "Weirs", pack: "Launch!", slot: "5-3" },
    { name: "Trinity", pack: "Gaiden", slot: "3-8" },
    { name: "Clockwork", pack: "Launch!", slot: "7-3" },
    // Days 36 to 40
    { name: "Twin Cross", pack: "Deluxe", slot: "8-16" },
    { name: "Pyramid Run", pack: "Gaiden", slot: "6-6" },
    { name: "Scavenger", pack: "Invasion", slot: "1-4" },
    { name: "Ribbon", pack: "651", slot: "5-8" },
    { name: "Destiny", pack: "Deluxe", slot: "Master Extra 10" },
    // Days 41 to 45
    { name: "Ouroboros", pack: "Gaiden", slot: "10-7" },
    { name: "Silly Slalom", pack: "651", slot: "2-4" },
    { name: "8 Bracelets", pack: "SMB2", slot: "Expert 29" },
    { name: "Udon", pack: "Launch!", slot: "4-4" },
    { name: "Jump Double", pack: "Deluxe", slot: "5-8" },
    // Days 46 to 50
    { name: "Ruin", pack: "Deluxe", slot: "Expert 1" },
    { name: "Albatross", pack: "Gaiden", slot: "7-9" },
    { name: "Revitalize", pack: "Launch!", slot: "3-10" },
    { name: "Exoskeleton", pack: "Stardust", slot: "4-4" },
    { name: "Crystal Cave Museum", pack: "651", slot: "2-10" },
    // Days 51 to 55
    { name: "Pan Pipes", pack: "Stardust", slot: "2-7" },
    { name: "Leveler", pack: "SMB2", slot: "Advanced 10" },
    { name: "Catwalk", pack: "Deluxe", slot: "Beginner 39" },
    { name: "Apparatus", pack: "Gaiden", slot: "9-10" },
    { name: "Bulrush Pond", pack: "Invasion", slot: "3-4" },
    // Days 56 to 60
    { name: "Stamps", pack: "651", slot: "3-5" },
    { name: "Shooting Stars", pack: "Stardust", slot: "10-1" },
    { name: "Curve Bridge", pack: "SMB2", slot: "Beginner 10" },
    { name: "Stamina Master", pack: "Deluxe", slot: "Master 13" },
    { name: "Antagonizer", pack: "Gaiden", slot: "9-5" },
    // Days 61 to 65
    { name: "Waffle Weave", pack: "Stardust", slot: "6-6" },
    { name: "Antlers", pack: "651", slot: "10-10" },
    { name: "Ice Tray", pack: "Stardust", slot: "1-10" },
    { name: "Screen Tearing", pack: "651", slot: "1-5" },
    { name: "Edge", pack: "Deluxe", slot: "Beginner 11" },
    // Days 66 to 70
    { name: "Hammer Pipes", pack: "Stardust", slot: "Debug 36" },
    { name: "Charge", pack: "SMB2", slot: "Expert Extra 1" },
    { name: "Haywire", pack: "Launch!", slot: "10-3" },
    { name: "Tiers", pack: "SMB2", slot: "6-5" },
    { name: "Shuffle", pack: "Launch!", slot: "1-2" },
    // Days 71 to 75
    { name: "Destruction", pack: "Deluxe", slot: "Expert 22" },
    { name: "Distortion", pack: "Launch!", slot: "Master 10" },
    { name: "Spatiotemporal", pack: "Deluxe", slot: "Advanced 70" },
    { name: "Bead Screen", pack: "SMB2", slot: "Beginner Extra 5" },
    { name: "Sensory Overload", pack: "Invasion", slot: "10-10" },
    // Days 76 to 80
    { name: "Mad Rings", pack: "SMB2", slot: "Advanced 16" },
    { name: "Mystery Box", pack: "651", slot: "6-3" },
    { name: "Long Slider", pack: "SMB2", slot: "Advanced Extra 8" },
    { name: "Hard Hitter", pack: "Deluxe", slot: "Advanced Extra 2" },
    { name: "Comeback", pack: "Invasion", slot: "9-10" },
    // Days 81 to 85
    { name: "Clover", pack: "Deluxe", slot: "10-14" },
    { name: "Typewriter", pack: "Stardust", slot: "5-9" },
    { name: "Run Down Hall", pack: "Invasion", slot: "2-6" },
    { name: "Oscillating Overpass", pack: "651", slot: "8-7" },
    { name: "Reflection", pack: "651", slot: "7-4" },
    // Days 86 to 90
    { name: "Recoil", pack: "Gaiden", slot: "8-2" },
    { name: "Swell", pack: "SMB2", slot: "2-6" },
    { name: "Sway", pack: "Gaiden", slot: "5-2" },
    { name: "Hills", pack: "Deluxe", slot: "Advanced Extra 14" },
    { name: "Scatterbrain", pack: "Stardust", slot: "2-5" },
    // Days 91 to 95
    { name: "Flippers", pack: "Gaiden", slot: "1-5" },
    { name: "Rotisserie", pack: "Invasion", slot: "6-10" },
    { name: "Tick-Flip", pack: "Stardust", slot: "3-6" },
    { name: "Cubbyholes", pack: "Gaiden", slot: "2-8" },
    { name: "Deep Space", pack: "Stardust", slot: "Interstellar 4" },
    // Days 96 to 100
    { name: "Vortex", pack: "SMB2", slot: "8-6" },
    { name: "Drills", pack: "Invasion", slot: "7-10" },
    { name: "Blocks", pack: "Deluxe", slot: "Beginner 23" },
    { name: "Journey's End", pack: "Launch!", slot: "Master Extra 10" },
    { name: "Monuments", pack: "Stardust", slot: " " },
    // End Season 4
];

export default stages;

// SMB2
// Stardust
// Launch!
// Gaiden
// 651
// Invasion


// Juegar ?
