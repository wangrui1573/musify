import { v4 as uuidv4 } from "uuid";

import deathBed from "./audio/Death_Bed.mp3";
import dynamite from "./audio/Dynamite.mp3";
import mood from "./audio/Mood.mp3";
import stuckWithU from "./audio/Stuck_With_U.mp3";
import cradles from "./audio/Cradles.mp3";
import skechers from "./audio/Skechers.mp3";
import aiya from "./audio/爱丫爱丫.flac";

function chillHop() {
  return 
    {
      name: "哈哈哈 (coffee for your head)",
      cover:
        "https://shdbdecdnems03.cdnsrv.jio.com/c.saavncdn.com/180/death-bed-English-2020-20200228133600-500x500.jpg",
      artist: "Powfu, beabadoobee",
      audio: deathBed,
      color: ["#ADA5CE", "#213045"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "爱丫爱丫",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/BTS_-_Dynamite_%28official_cover%29.png",
      artist: "BTS",
      audio: aiya,
      color: ["#FBE2E6", "#DD5B8C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "第三Mood",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/1/1d/24kGoldn_-_Mood.png",
      artist: "24kgoldn",
      audio: mood,
      color: ["#D888D3", "#070922"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "第四Stuck with U",
      cover:
        "https://img.alicdn.com/bao/uploaded/i1/2172427566/O1CN01kf4vBN25lHBrauwWP_!!0-item_pic.jpg",
      artist: "Ariana Grande, Justine Bieber",
      audio: stuckWithU,
      color: ["#F6F6EE", "#888984"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cradles",
      cover:
        "https://shdbdecdnems09.cdnsrv.jio.com/c.saavncdn.com/585/Cradles-English-2019-20191028124508-500x500.jpg",
      artist: "Sub Urban",
      audio: cradles,
      color: ["#EDDD86", "#4A5760"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "d第五Skechers",
      cover:
        "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "DripReport",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
