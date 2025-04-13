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

    // Season 2 (images by Nambo)
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
    // Days 1 to 5
    { name: "Lunch with Matthew", pack: "Juegar", slot: "Advanced 29" },
    { name: "The Hanging Man Paradox", pack: "Juegar", slot: "Beginner 10" },
    { name: "Florida West Beach", pack: "Juegar", slot: "Beginner Extra 6" },
    { name: "Susceptible Prey", pack: "Juegar", slot: "Advanced 17" },
    { name: "Monky Suicie", pack: "Juegar", slot: "Advanced 2" },
    // Days 6 to 10
    { name: "Kim Deal", pack: "Juegar", slot: "Advanced Extra 1" },
    { name: "Steed Dirkly", pack: "Juegar", slot: "Advanced 28" },
    { name: "Goofy", pack: "Juegar", slot: "Advanced 1" },
    { name: "Post Your Stream Key", pack: "Juegar", slot: "Advanced 7" },
    { name: "No Brown Allowed Past This Point", pack: "Juegar", slot: "Beginner Extra 1" },
    // Days 11 to 15
    { name: "Mouse For Sale", pack: "Juegar", slot: "Advanced 15" },
    { name: "Dr. Professor", pack: "Juegar", slot: "Advanced 30" },
    { name: "Splurge", pack: "Juegar", slot: "Beginner 8" },
];

export default stages;

// SMB2
// Stardust
// Launch!
// Gaiden
// 651
// Invasion


// Juegar ?
