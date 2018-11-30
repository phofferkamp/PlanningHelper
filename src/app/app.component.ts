import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';

import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    point: {
      visible: false
    },
    // loop: true,
    touch: true,
  }

  carouselActive = false;

  stepItems: any;
  stepValues = [];
  listchoicesItems: any;
  listchoicesValues = [];
  listchoices: any;

  vowelItems: any;
  vowelValues = [];
  consonantItems: any;
  consonantValues = [];
  consonantDigraphItems: any;
  consonantDigraphValues = [];
  weldedSoundItems: any;
  weldedSoundValues = [];
  suffixItems: any;
  suffixValues = [];

  filteredWords = [];

  config = TreeviewConfig.create({
    // hasCollapseExpand: true
  });

  vowelsList = ['a', 'e', 'i', 'o', 'u'];

  consonantsList = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  consonantDigraphsList = ['wh', 'ch', 'sh', 'th', 'ck'];

  weldedSoundsList = ['all', 'am', 'an', 'ang', 'ing', 'ong', 'ung', 'ank', 'ink', 'onk', 'unk'];

  suffixesList = [
    { suffix: 's', exclude: 'es' },
    { suffix: 'es' }
  ];

  data = JSON.parse(`{
    "steps": [
      {
        "step": "1",
        "substeps": [
          {
            "substep": "1.1",
            "listchoices": [
              {
                "listchoice": "AB",
                "words": [
                  "sad",
                  "mad",
                  "rat",
                  "sat",
                  "mat",
                  "rag",
                  "sag",
                  "map",
                  "rap",
                  "sap",
                  "lap",
                  "nap",
                  "fat",
                  "lad",
                  "nag",
                  "fad",
                  "lag",
                  "Nat",
                  "rat",
                  "Matt",
                  "lap",
                  "sap",
                  "lap",
                  "rat",
                  "map",
                  "at",
                  "rip",
                  "lip",
                  "sip",
                  "rid",
                  "lit",
                  "sit",
                  "rig",
                  "lid",
                  "Sid",
                  "fit",
                  "it",
                  "fig",
                  "map",
                  "rag",
                  "lap",
                  "Nat",
                  "lid",
                  "nip",
                  "rod",
                  "not",
                  "lot",
                  "rot",
                  "nod",
                  "log",
                  "rat",
                  "nap",
                  "lap",
                  "fog",
                  "on",
                  "rot",
                  "rod",
                  "lot",
                  "Rod",
                  "mop",
                  "nod",
                  "mop",
                  "lot",
                  "not",
                  "sod",
                  "fad",
                  "nag",
                  "fit",
                  "Rod",
                  "rot",
                  "rag",
                  "rip",
                  "rat",
                  "sag",
                  "rap",
                  "mat",
                  "log"
                ]
              }
            ]
          },
          {
            "substep": "1.2",
            "listchoices": [
              {
                "listchoice": "AB",
                "words": [
                  "Rob",
                  "mob",
                  "nab",
                  "sob",
                  "rib",
                  "fib",
                  "lab",
                  "rob",
                  "lob",
                  "fish",
                  "shot",
                  "ship",
                  "lash",
                  "shop",
                  "nosh",
                  "rash",
                  "mash",
                  "Nash",
                  "mud",
                  "sun",
                  "run",
                  "log",
                  "rub",
                  "nut",
                  "mug",
                  "sub",
                  "rut",
                  "rug",
                  "lush",
                  "nub",
                  "mush",
                  "shut",
                  "rush",
                  "map",
                  "sat",
                  "rash",
                  "pig",
                  "tap",
                  "dog",
                  "pit",
                  "tag",
                  "dot",
                  "Pat",
                  "top",
                  "dig",
                  "bag",
                  "gap",
                  "big",
                  "bat",
                  "gash",
                  "pot",
                  "bit",
                  "got",
                  "bug",
                  "gum",
                  "dash",
                  "tot",
                  "bin",
                  "tug",
                  "tip",
                  "pad",
                  "bud",
                  "dish",
                  "pat",
                  "dug",
                  "bad",
                  "pup",
                  "but",
                  "bun",
                  "bus",
                  "dad",
                  "pop",
                  "hop",
                  "hat",
                  "hid",
                  "hit",
                  "hot",
                  "hog",
                  "hush",
                  "hip",
                  "had",
                  "job",
                  "jut",
                  "jig",
                  "jug",
                  "jab",
                  "jog",
                  "jot",
                  "Jim",
                  "jag",
                  "cat",
                  "kit",
                  "cot",
                  "cub",
                  "Kim",
                  "cup",
                  "cash",
                  "cab",
                  "kid",
                  "cut",
                  "cod",
                  "Kip",
                  "cob",
                  "cog",
                  "kin",
                  "cap",
                  "cop",
                  "con",
                  "lock",
                  "pack",
                  "sick",
                  "duck",
                  "Nick",
                  "rock",
                  "back",
                  "luck",
                  "puck",
                  "Rick",
                  "rack",
                  "pick",
                  "sock",
                  "Jack",
                  "lick",
                  "tack",
                  "tick",
                  "sack",
                  "met",
                  "let",
                  "red",
                  "Meg",
                  "leg",
                  "set",
                  "fed",
                  "led",
                  "peck",
                  "Ben",
                  "beg",
                  "get",
                  "bed",
                  "neck",
                  "jet",
                  "bet",
                  "shed",
                  "deck",
                  "wag",
                  "vat",
                  "zip",
                  "wig",
                  "vet",
                  "zag",
                  "wish",
                  "Viv",
                  "zap",
                  "wet",
                  "fox",
                  "wax",
                  "yet",
                  "tax",
                  "tux",
                  "yes",
                  "box",
                  "Max",
                  "chop",
                  "chip",
                  "chat",
                  "rich",
                  "chin",
                  "such",
                  "Chet",
                  "chap",
                  "much",
                  "Beth",
                  "path",
                  "with",
                  "bath",
                  "thick",
                  "math",
                  "thin",
                  "thud",
                  "moth",
                  "quick",
                  "quit",
                  "whiz",
                  "quack",
                  "whip",
                  "whop",
                  "quiz",
                  "when",
                  "which",
                  "quit",
                  "whim",
                  "quack",
                  "when",
                  "quick",
                  "whack",
                  "quip",
                  "whiz",
                  "whop"
                ]
              }
            ]
          },
          {
            "substep": "1.3",
            "listchoices": [
              {
                "listchoice": "AB",
                "words": [
                  "map",
                  "him",
                  "not",
                  "thin",
                  "rock",
                  "nut",
                  "ten",
                  "sit",
                  "run",
                  "cup",
                  "led",
                  "with",
                  "sad",
                  "rim",
                  "shed",
                  "six",
                  "duck",
                  "nod",
                  "such",
                  "quick",
                  "wish",
                  "yes",
                  "tin",
                  "rat",
                  "sock",
                  "pad",
                  "top",
                  "quit",
                  "let",
                  "bath",
                  "job",
                  "wet",
                  "pat",
                  "bad",
                  "sick",
                  "shut",
                  "thick",
                  "dug",
                  "when",
                  "mud",
                  "rib",
                  "dot",
                  "tip",
                  "that",
                  "shop",
                  "gum",
                  "tub",
                  "web",
                  "pick",
                  "red",
                  "leg",
                  "yet",
                  "pot",
                  "ship",
                  "mad",
                  "net",
                  "tap",
                  "fat",
                  "fox",
                  "which",
                  "rod",
                  "wed",
                  "big",
                  "hen",
                  "kit",
                  "mix",
                  "sum",
                  "shot",
                  "log",
                  "mom",
                  "pen",
                  "luck",
                  "pop",
                  "fun",
                  "math",
                  "men",
                  "lid",
                  "shock",
                  "dim",
                  "bit",
                  "shut",
                  "kick",
                  "then",
                  "fish",
                  "fed",
                  "rich",
                  "check",
                  "lab",
                  "dock",
                  "rug",
                  "lock",
                  "cat",
                  "whip",
                  "sat",
                  "dog",
                  "wax",
                  "rag",
                  "dish",
                  "bus",
                  "cash",
                  "pin",
                  "met",
                  "back",
                  "neck",
                  "did",
                  "bag",
                  "cut",
                  "rid",
                  "much",
                  "bet",
                  "chip",
                  "sack",
                  "box",
                  "lit",
                  "fog",
                  "lap",
                  "dig",
                  "bug",
                  "bed",
                  "pet",
                  "bat",
                  "rush",
                  "kid",
                  "lack",
                  "path",
                  "chin",
                  "pit",
                  "hat",
                  "jet",
                  "rub",
                  "lot",
                  "dad",
                  "fix",
                  "hit",
                  "dash",
                  "hut",
                  "rug",
                  "cap",
                  "hid",
                  "deck",
                  "win",
                  "gap",
                  "but",
                  "sun",
                  "fit",
                  "pack",
                  "hot",
                  "gas",
                  "lip",
                  "tax"
                ]
              },
              {
                "listchoice": "A",
                "words": [
                  "hum",
                  "beg",
                  "chop",
                  "tick",
                  "zig",
                  "fib",
                  "pal",
                  "nap",
                  "bud",
                  "wag",
                  "tab",
                  "on",
                  "hop",
                  "ax",
                  "tack",
                  "cot",
                  "quiz",
                  "moth",
                  "rip",
                  "cub",
                  "cop",
                  "chat",
                  "jug",
                  "shack",
                  "tab",
                  "sip",
                  "peck",
                  "hip",
                  "sub",
                  "lick",
                  "fin",
                  "hog",
                  "yum",
                  "bun",
                  "tick",
                  "pup",
                  "chick",
                  "mop",
                  "zip",
                  "yuck",
                  "rash",
                  "den",
                  "bib",
                  "rack",
                  "cob",
                  "mat",
                  "dip",
                  "mash",
                  "yap",
                  "tag",
                  "whiz",
                  "peg",
                  "wig",
                  "quack",
                  "vet",
                  "hug",
                  "tot",
                  "jog",
                  "sis",
                  "whack"
                ]
              },
              {
                "listchoice": "B",
                "words": [
                  "jut",
                  "tuck",
                  "pod",
                  "hush",
                  "chock",
                  "cab",
                  "chum",
                  "nab",
                  "lop",
                  "nag",
                  "hem",
                  "puck",
                  "mob",
                  "pug",
                  "nil",
                  "mock",
                  "jag",
                  "yip",
                  "quip",
                  "sax",
                  "gush",
                  "sob",
                  "rig",
                  "nosh",
                  "hack",
                  "cad",
                  "rot",
                  "kin",
                  "gut",
                  "mesh",
                  "fad",
                  "muck",
                  "mod",
                  "wit",
                  "dab",
                  "rut",
                  "jot",
                  "chuck",
                  "Chuck",
                  "lug",
                  "chap",
                  "vim",
                  "gash",
                  "hub",
                  "sag",
                  "hex",
                  "posh",
                  "jig",
                  "sap",
                  "shin",
                  "thud",
                  "vat",
                  "nip",
                  "pep",
                  "bash",
                  "chug",
                  "shuck",
                  "shim",
                  "zap",
                  "tad",
                  "wick",
                  "bog",
                  "mush",
                  "jab",
                  "lag",
                  "shun",
                  "lush",
                  "sin",
                  "vex",
                  "bid",
                  "yen",
                  "tux",
                  "sod",
                  "hash",
                  "pun",
                  "fax",
                  "mob",
                  "mesh",
                  "dub",
                  "lax",
                  "gab",
                  "keg",
                  "lox",
                  "sash",
                  "pub",
                  "bin",
                  "lash",
                  "whim",
                  "yak",
                  "den",
                  "fig"
                ]
              },
              {
                "listchoice": "Nonsense",
                "words": [
                  "mip",
                  "chep",
                  "dith",
                  "quen",
                  "thip",
                  "vash",
                  "lub",
                  "vob",
                  "tez",
                  "tib",
                  "rez",
                  "dap",
                  "gup",
                  "quat",
                  "whez",
                  "hup",
                  "sep",
                  "mish",
                  "yim",
                  "fep",
                  "gaz",
                  "thib",
                  "dep",
                  "quet",
                  "gad",
                  "lat",
                  "vup",
                  "hin",
                  "yab",
                  "dob",
                  "bep",
                  "laz",
                  "weg",
                  "vib",
                  "yez",
                  "choz",
                  "jun",
                  "dop",
                  "sith",
                  "hosh",
                  "fif",
                  "tup",
                  "thez",
                  "wup",
                  "pob",
                  "gom",
                  "quop",
                  "hib",
                  "yeb",
                  "hux",
                  "chot",
                  "sut",
                  "gop",
                  "hud",
                  "tiv",
                  "bup",
                  "kep",
                  "huz",
                  "bix",
                  "quem"
                ]
              }
            ]
          },
          {
            "substep": "1.4",
            "listchoices": [
              {
                "listchoice": "AB",
                "words": [
                  "bell",
                  "fun",
                  "doll",
                  "wish",
                  "toss",
                  "sun",
                  "pick",
                  "boss",
                  "met",
                  "till",
                  "leg",
                  "yell",
                  "set",
                  "off",
                  "ship",
                  "hill",
                  "rock",
                  "mill",
                  "led",
                  "mess",
                  "bad",
                  "job",
                  "shell",
                  "fill",
                  "ten",
                  "tell",
                  "map",
                  "bill",
                  "box",
                  "hot",
                  "fall",
                  "loss",
                  "call",
                  "well",
                  "all",
                  "ill",
                  "cut",
                  "thick",
                  "mass",
                  "six",
                  "sell",
                  "ball",
                  "less",
                  "miss",
                  "check",
                  "pass",
                  "hall",
                  "path",
                  "fell",
                  "mud",
                  "mall",
                  "kill",
                  "dull",
                  "quick",
                  "wall",
                  "moss",
                  "thin",
                  "will",
                  "tall",
                  "lack"
                ]
              },
              {
                "listchoice": "A",
                "words": [
                  "chill",
                  "bug",
                  "rip",
                  "Jeff",
                  "lick",
                  "nap",
                  "Tess",
                  "hug",
                  "pill",
                  "mug",
                  "shed",
                  "Ross",
                  "cub",
                  "mash",
                  "fuzz",
                  "kiss",
                  "dip",
                  "chat",
                  "Jess",
                  "beg",
                  "chop",
                  "buzz",
                  "Russ",
                  "mat",
                  "Nell",
                  "Bess",
                  "fib",
                  "Jill",
                  "rack",
                  "jog"
                ]
              },
              {
                "listchoice": "B",
                "words": [
                  "bass",
                  "rot",
                  "shin",
                  "dill",
                  "jut",
                  "gill",
                  "fuss",
                  "fad",
                  "loll",
                  "chug",
                  "lob",
                  "quill",
                  "cab",
                  "buff",
                  "joss",
                  "chess",
                  "posh",
                  "fig",
                  "lass",
                  "lull",
                  "bog",
                  "quell",
                  "chap",
                  "hiss",
                  "quip",
                  "hush",
                  "hull",
                  "whiff",
                  "jot",
                  "null",
                  "muss",
                  "gull",
                  "pun",
                  "zap",
                  "puff",
                  "gash",
                  "tiff",
                  "hem",
                  "cuff",
                  "gall",
                  "shod",
                  "jazz",
                  "chock",
                  "miff",
                  "pod",
                  "mull",
                  "sill",
                  "shun",
                  "mob",
                  "gut",
                  "lop",
                  "mock",
                  "jiff",
                  "lad",
                  "muff",
                  "sob",
                  "pall",
                  "shim",
                  "mesh",
                  "fizz"
                ]
              },
              {
                "listchoice": "Nonsense",
                "words": [
                  "biss",
                  "vash",
                  "jull",
                  "vup",
                  "fep",
                  "lub",
                  "thill",
                  "choz",
                  "quem",
                  "niff",
                  "hup",
                  "goss",
                  "siff",
                  "tiv",
                  "thezz",
                  "raff",
                  "vob",
                  "yill",
                  "tezz",
                  "chot",
                  "quet",
                  "chull",
                  "poff",
                  "zin",
                  "pesh",
                  "zin",
                  "hess",
                  "gad",
                  "hux",
                  "roff",
                  "poss",
                  "faff",
                  "dep",
                  "rezz",
                  "lat",
                  "sut",
                  "kell",
                  "dop",
                  "weg",
                  "tull",
                  "liss",
                  "thib",
                  "zall",
                  "sull",
                  "vib",
                  "zuff",
                  "hoff",
                  "lod",
                  "quess",
                  "rop",
                  "sep",
                  "wex",
                  "fass",
                  "thip",
                  "zeg",
                  "lazz",
                  "yim",
                  "pob",
                  "rall",
                  "hud",
                  "yem"
                ]
              }
            ]
          },
          {
            "substep": "1.5",
            "listchoices": [
              {
                "listchoice": "AB",
                "words": [
                  "can",
                  "fish",
                  "wall",
                  "when",
                  "Sam",
                  "box",
                  "an",
                  "man",
                  "dam",
                  "less",
                  "fan",
                  "tnat",
                  "rock",
                  "much",
                  "job",
                  "van",
                  "well",
                  "am",
                  "sun",
                  "mall",
                  "back",
                  "pan",
                  "such",
                  "ran",
                  "men",
                  "pass",
                  "than",
                  "fill",
                  "with",
                  "miss"
                ]
              },
              {
                "listchoice": "A",
                "words": [
                  "jam",
                  "mash",
                  "chat",
                  "hop",
                  "Jan",
                  "rash",
                  "mop",
                  "Jeff",
                  "Cam",
                  "chill",
                  "Gus",
                  "Dan",
                  "fin",
                  "Tom",
                  "hum",
                  "ham",
                  "zip",
                  "jog",
                  "tan",
                  "shed",
                  "pal",
                  "mug",
                  "sip",
                  "Zack",
                  "mat",
                  "mam",
                  "chop",
                  "Nell",
                  "Pam",
                  "tack"
                ]
              },
              {
                "listchoice": "B",
                "words": [
                  "yam",
                  "rut",
                  "fad",
                  "jazz",
                  "ram",
                  "sob",
                  "gosh",
                  "sham",
                  "sill",
                  "chess",
                  "lug",
                  "bash",
                  "quill",
                  "gab",
                  "tuck",
                  "bam",
                  "posh",
                  "cuff",
                  "hag",
                  "mull",
                  "tiff",
                  "hem",
                  "gam",
                  "shun",
                  "chap",
                  "fuss",
                  "thud",
                  "lob",
                  "ban",
                  "lag"
                ]
              },
              {
                "listchoice": "Nonsense",
                "words": [
                  "lan",
                  "mish",
                  "kell",
                  "yan",
                  "quop",
                  "tib",
                  "thez",
                  "cham",
                  "hoff",
                  "biss",
                  "zall",
                  "zan",
                  "gom",
                  "vam",
                  "tup",
                  "han",
                  "mip",
                  "tham",
                  "goss",
                  "vob",
                  "vash",
                  "zam",
                  "chot",
                  "shan",
                  "fep",
                  "thip",
                  "fam",
                  "quet",
                  "sull",
                  "chep"
                ]
              }
            ]
          },
          {
            "substep": "1.6",
            "listchoices": [
              {
                "listchoice": "AB",
                "words": [
                  "tops",
                  "rushes",
                  "beds",
                  "calls",
                  "packs",
                  "ducks",
                  "paths",
                  "sits",
                  "waxes",
                  "ashes",
                  "ships",
                  "nuts",
                  "passes",
                  "cats",
                  "runs",
                  "sets",
                  "falls",
                  "shops",
                  "quits",
                  "tosses",
                  "bags",
                  "chips",
                  "jobs",
                  "cuts",
                  "vans",
                  "locks",
                  "pans",
                  "fits",
                  "mixes",
                  "buses",
                  "maps",
                  "bugs",
                  "baths",
                  "fans",
                  "foxes",
                  "hills",
                  "checks",
                  "boxes",
                  "kicks",
                  "rats",
                  "socks",
                  "dashes",
                  "pets",
                  "rugs",
                  "sums",
                  "walls",
                  "messes",
                  "hits",
                  "rags",
                  "decks",
                  "taps",
                  "bills",
                  "wishes",
                  "pits",
                  "bosses",
                  "picks",
                  "nets",
                  "shells",
                  "riches",
                  "cups",
                  "tips",
                  "wells",
                  "losses",
                  "shocks",
                  "kits",
                  "mills",
                  "fixes",
                  "bets",
                  "rocks",
                  "cahses",
                  "gaps",
                  "dishes",
                  "rids",
                  "taxes",
                  "huts",
                  "bells",
                  "fishes",
                  "jets",
                  "caps",
                  "lets",
                  "lips",
                  "logs",
                  "misses",
                  "bits",
                  "sells",
                  "hats",
                  "sacks",
                  "kids",
                  "pots",
                  "fills"
                ]
              },
              {
                "listchoice": "A",
                "words": [
                  "mats",
                  "hugs",
                  "pals",
                  "tabs",
                  "bibs",
                  "mugs",
                  "chops",
                  "wags",
                  "licks",
                  "zags",
                  "cubs",
                  "sips",
                  "buzzes",
                  "jams",
                  "ticks",
                  "mops",
                  "fuzzes",
                  "pups",
                  "begs",
                  "zigs",
                  "yaps",
                  "chats",
                  "dips",
                  "jogs",
                  "racks",
                  "hogs",
                  "whacks",
                  "pecks",
                  "rashes",
                  "tags",
                  "hops",
                  "pills",
                  "buds",
                  "hips",
                  "subs",
                  "wigs",
                  "zips",
                  "mashes",
                  "pegs",
                  "chicks",
                  "tacks",
                  "cops",
                  "pals",
                  "fibs",
                  "tans",
                  "rips",
                  "kisses",
                  "hams",
                  "chills",
                  "shacks",
                  "jugs",
                  "fins",
                  "buns",
                  "naps",
                  "tots",
                  "quacks",
                  "cots",
                  "hums",
                  "moths",
                  "hips"
                ]
              },
              {
                "listchoice": "B",
                "words": [
                  "tucks",
                  "zaps",
                  "quells",
                  "yams",
                  "bids",
                  "nags",
                  "gashes",
                  "tugs",
                  "jabs",
                  "quips",
                  "wits",
                  "lugs",
                  "cabs",
                  "fizzes",
                  "shucks",
                  "rigs",
                  "hisses",
                  "vexes",
                  "sags",
                  "hacks",
                  "lads",
                  "mocks",
                  "gabs",
                  "quills",
                  "sobs",
                  "shuns",
                  "figs",
                  "whiffs",
                  "bashes",
                  "hulls",
                  "lags",
                  "shams",
                  "buffs",
                  "mills",
                  "hushes",
                  "thuds",
                  "bins",
                  "puns",
                  "faxes",
                  "mobs",
                  "jots",
                  "chaps",
                  "gulls",
                  "nabs",
                  "sashes",
                  "rots",
                  "bogs",
                  "juts",
                  "fusse",
                  "pods",
                  "shins",
                  "nips",
                  "fads",
                  "puffs",
                  "quells",
                  "lashes",
                  "chucks",
                  "lops",
                  "gushes",
                  "rams"
                ]
              },
              {
                "listchoice": "Nonsense",
                "words": [
                  "mabs",
                  "wegs",
                  "fashes",
                  "yats",
                  "zams",
                  "thigs",
                  "huxes",
                  "sibs",
                  "fams",
                  "quebs",
                  "zans",
                  "biffs",
                  "hets",
                  "wheps",
                  "luns",
                  "wubs",
                  "mishes",
                  "foms",
                  "heffs",
                  "shids",
                  "raffs",
                  "cheds",
                  "whibs",
                  "vams",
                  "futs",
                  "chams",
                  "zops",
                  "thims",
                  "daxes",
                  "cheps",
                  "lems",
                  "whabs",
                  "gogs",
                  "daths",
                  "liisses",
                  "yans",
                  "shens",
                  "fozzes",
                  "jegs",
                  "thons",
                  "zups",
                  "chigs",
                  "vashes",
                  "shobs",
                  "chulls",
                  "tups",
                  "chots",
                  "hoshes",
                  "zugs",
                  "shans",
                  "zalls",
                  "kigs",
                  "fums",
                  "posses",
                  "vibs",
                  "duts",
                  "quems",
                  "yabs",
                  "lexes",
                  "zuffs"
                ]
              }
            ]
          }
        ]
      }
    ]
  }`);

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    let steps = [];
    let listchoices = [];

    for (let step of this.data.steps) {
      let substeps = [];

      for (let substep of step.substeps) {
        for (let listchoice of substep.listchoices) {
          let duplicate = false;

          for (let currentListchoice of listchoices) {
            if (listchoice.listchoice === currentListchoice.value) {
              duplicate = true;
              break;
            }
          }

          if (!duplicate) {
            let item = new TreeviewItem({
              text: listchoice.listchoice, value: listchoice.listchoice
            });

            listchoices.push(item);
          }
        }

        let item = new TreeviewItem({
          text: substep.substep, value: substep.substep
        });

        substeps.push(item);
      }

      let item = new TreeviewItem({
        text: step.step, value: step.step, children: substeps
      });

      steps.push(item);
    }

    let stepsItem = new TreeviewItem({
      text: 'Steps', value: 'steps', children: steps
    });

    let listchoicesItem = new TreeviewItem({
      text: 'List Choices', value: 'listchoices', children: listchoices
    });

    this.stepItems = [stepsItem];
    this.listchoicesItems = [listchoicesItem];

    let vowels = [];
    for (let vowel of this.vowelsList) {
      let item = new TreeviewItem({
        text: vowel, value: vowel, checked: false
      });

      vowels.push(item);
    }
    let vowelItem = new TreeviewItem({
      text: 'Vowels', value: 'vowels', children: vowels
    });
    this.vowelItems = [vowelItem];

    let consonants = [];
    for (let consonant of this.consonantsList) {
      let item = new TreeviewItem({
        text: consonant, value: consonant, checked: false
      });

      consonants.push(item);
    }
    let consonantItem = new TreeviewItem({
      text: 'Consonants', value: 'consonants', children: consonants
    });
    this.consonantItems = [consonantItem];

    let consonantDigraphs = [];
    for (let consonantDigraph of this.consonantDigraphsList) {
      let item = new TreeviewItem({
        text: consonantDigraph, value: consonantDigraph, checked: false
      });

      consonantDigraphs.push(item);
    }
    let consonantDigraphItem = new TreeviewItem({
      text: 'Consonant Digraphs', value: 'consonantDigraphs', children: consonantDigraphs
    });
    this.consonantDigraphItems = [consonantDigraphItem];

    let weldedSounds = [];
    for (let weldedSound of this.weldedSoundsList) {
      let item = new TreeviewItem({
        text: weldedSound, value: weldedSound, checked: false
      });

      weldedSounds.push(item);
    }
    let weldedSoundItem = new TreeviewItem({
      text: 'Welded Sounds', value: 'weldedSound', children: weldedSounds
    });
    this.weldedSoundItems = [weldedSoundItem];

    let suffixes = [];
    for (let suffix of this.suffixesList) {
      let text = suffix.suffix + (suffix.exclude ? ' (excl -' + suffix.exclude + ')' : '');
      let item = new TreeviewItem({
        text: '-' + text, value: suffix, checked: false
      });

      suffixes.push(item);
    }
    let suffixItem = new TreeviewItem({
      text: 'Suffixes', value: 'suffixes', children: suffixes
    });
    this.suffixItems = [suffixItem];

    this.filterWords();
  }

  filterWords() {
    let filteredWords = [];

    for (let step of this.data.steps) {
      for (let substep of step.substeps) {
        if (this.stepValues.indexOf(substep.substep) > -1) {
          for (let listchoice of substep.listchoices) {
            if (this.listchoicesValues.indexOf(listchoice.listchoice) > -1) {
              for (let word of listchoice.words) {
                if (filteredWords.indexOf(word) < 0) {
                  let foundVowel = this.vowelValues.length == 0;
                  if (!foundVowel) {
                    for (let vowelValue of this.vowelValues) {
                      if (word.includes(vowelValue)) {
                        foundVowel = true;
                        break;
                      }
                    }
                  }

                  let foundConsonant = this.consonantValues.length == 0;
                  if (!foundConsonant) {
                    for (let consonantValue of this.consonantValues) {
                      if (word.includes(consonantValue)) {
                        foundConsonant = true;
                        break;
                      }
                    }
                  }

                  let foundConsonantDigraph = this.consonantDigraphValues.length == 0;
                  if (!foundConsonantDigraph) {
                    for (let consonantDigraphValue of this.consonantDigraphValues) {
                      if (word.includes(consonantDigraphValue)) {
                        foundConsonantDigraph = true;
                        break;
                      }
                    }
                  }

                  let foundWeldedSound = this.weldedSoundValues.length == 0;
                  if (!foundWeldedSound) {
                    for (let weldedSoundValue of this.weldedSoundValues) {
                      if (word.includes(weldedSoundValue)) {
                        foundWeldedSound = true;
                        break;
                      }
                    }
                  }

                  let foundSuffix = this.suffixValues.length == 0;
                  if (!foundSuffix) {
                    for (let suffixValue of this.suffixValues) {
                      if (word.endsWith(suffixValue.suffix) && !word.endsWith(suffixValue.exclude)) {
                        foundSuffix = true;
                        break;
                      }
                    }
                  }

                  if (foundVowel && foundConsonant && foundConsonantDigraph && foundWeldedSound && foundSuffix) {
                    filteredWords.push(word);
                  }
                }
              }
            }
          }
        }
      }

      this.filteredWords = filteredWords;
    }
  }

  enableSlideshow() {
    this.carouselActive = true;
    this.cdr.detectChanges();
  }
}

