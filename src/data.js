import { v4 as uuidv4 } from "uuid";

import deathBed from "./audio/Death_Bed.mp3";
import dynamite from "./audio/Dynamite.mp3";
import mood from "./audio/Mood.mp3";
import stuckWithU from "./audio/Stuck_With_U.mp3";
import cradles from "./audio/Cradles.mp3";
import skechers from "./audio/Skechers.mp3";
import 爱丫爱丫 from "./audio/爱丫爱丫.flac";

const s = './audio/爱丫爱丫.flac'


function chillHop() {
  return [
     {
      name: "爱丫爱丫2",
      cover:
        "https://upload.wikimedia.org/wikipedia/zh/4/4d/16%E6%9C%AA%E6%88%90%E5%B9%B4.jpg",
      artist: "BY2 十六岁未成年",
      audio: 爱丫爱丫,
      color: ["#ADA5CE", "#213045"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "爱丫爱丫",
      cover:
        "https://pic.baike.soso.com/ugc/baikepic2/17701/20170908013217-955388477.jpg/300",
      artist: "Powfu,呵呵哒",
      audio: s,
      color: ["#ADA5CE", "#213045"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "测试",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/BTS_-_Dynamite_%28official_cover%29.png",
      artist: "BTS",
      audio: dynamite,
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
      artist: "张三 李四",
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
    {
      name: "歌曲名称",
      cover:
      "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "歌手，专辑",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "歌曲名称",
      cover:
      "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "歌手，专辑",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "歌曲名称",
      cover:
      "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "歌手，专辑",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "歌曲名称",
      cover:
      "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "歌手，专辑",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "歌曲名称",
      cover:
      "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "歌手，专辑",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "歌曲名称",
      cover:
      "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "歌手，专辑",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "歌曲名称",
      cover:
      "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "歌手，专辑",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
    
  ];
}

export default chillHop;
