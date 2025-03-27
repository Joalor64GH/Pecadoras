// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Pecadoras",
  version: "Version01",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 8720,
  bpm: 110,
  totalframe: 418,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#000",
  col0: "#919191",
  col1: "#5f5f5f",
  col2: "#4b4b4b",
  col3: "#373737",
  col4: "#232323",
  animearray: [
    {
      name: "1_kick",
      color: "7D7D7D",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_klap",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "3_krrr",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "4_shoukou",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "5_tehte",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "6_bass",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "7_tik",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "8_dugudugu",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "9_perc",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "10_cha",
      color: "7D7D7D",
      uniqsnd: !1,
    },
    {
      name: "11_bitbox",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "12_harlie",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "13_guidar",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "14_houh",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "15_arp",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "16_sinner",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "17_runaway",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "18_waya",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "19_oooh",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "20_ooo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
  ],
  bonusarray: [
  ],
};

// versions.v1 = {
//  name: "Pecadoras",
// version: "1",
// date: "2025",
// ...