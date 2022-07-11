import { v4 as uuidv4 } from "uuid";
import nullcover from "./null.jpg";

import skechers from "./audio/Skechers.mp3";
import Mojito from "./audio/Mojito.flac";
import 凉凉 from "./audio/凉凉.mp3";
import 红色高跟鞋 from "./audio/红色高跟鞋.mp3";
import 无人之岛 from "./audio/无人之岛.mp3";
import 光的反向 from "./audio/光的方向.mp3";
//import 爱丫爱丫 from "./audio/爱丫爱丫.flac";


//const 爱丫爱丫 = 'https://file.real9.cn/api?raw=true&path=/music/%E7%88%B1%E4%B8%AB%E7%88%B1%E4%B8%AB.flac'




function chillHop() {
  return [
    {
      name: "光的方向",
      cover: nullcover,
      artist: "张碧晨",
      audio: 光的反向,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "如愿",
      cover:
        "http://p2.music.126.net/NQRlDm-TIhAxJUVQ5twdFw==/109951166565889806.jpg",
      artist: "王菲",
      audio: 
      "https://music.real6.ml/file/media/music/%E5%A6%82%E6%84%BF.mp3",
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
     {
      name: "爱丫爱丫",
      cover:
        "http://p2.music.126.net/DGMOvGYBjOfBKNkMBnC7ug==/19196373509643886.jpg",
      audio:
        "https://music.real6.ml/file/media/music/%E7%88%B1%E4%B8%AB%E7%88%B1%E4%B8%AB.mp3",
      artist: "BY2 十六岁未成年",
      //audio: 爱丫爱丫,
      color: ["#ADA5CE", "#213045"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "红色高跟鞋",
      cover:
        "http://p1.music.126.net/jJOaqlez9x5VofjgB7B_Bw==/109951166195459631.jpg",
      artist: "蔡健雅",
      audio: 红色高跟鞋,
      color: ["#ADA5CE", "#213045"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "凉凉",
      cover:
        "https://p1.music.126.net/iJXQigYKHNhTIsLsCddHwA==/109951167254901211.jpg?param=180y180&playlist=2361162900",
      artist: "三生三世十里桃花",
      audio: 凉凉,
      color: ["#FBE2E6", "#DD5B8C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "无人之岛",
      cover: nullcover,
      artist: "任然",
      audio: 无人之岛,
      color: ["#D888D3", "#070922"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mojito",
      cover:
        "https://img.alicdn.com/bao/uploaded/i1/2172427566/O1CN01kf4vBN25lHBrauwWP_!!0-item_pic.jpg",
      artist: "周杰伦",
      audio: Mojito,
      color: ["#F6F6EE", "#888984"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Letting Go",
      cover:
        "http://p2.music.126.net/VTZde5VdBm_u2WH0Pc9HQQ==/109951165561227373.jpg",
      artist: "蔡健雅",
      audio: 
        "https://music.real6.ml/file/media/music/%E8%94%A1%E5%81%A5%E9%9B%85-Letting%20Go.mp3",
      color: ["#EDDD86", "#4A5760"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "修炼爱情",
      cover:
        "http://p2.music.126.net/D_hiKMwrdQlqD36LoKLO2w==/109951163187408030.jpg",
      artist: "林俊杰",
      audio: 
      "https://music.real6.ml/file/media/music/%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85.mp3",
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "偏爱",
      cover:
        "http://p1.music.126.net/a4KYp477snGHe3ZyjVpe1w==/109951165351505570.jpg",
      artist: "张芸京",
      audio: 
      "https://music.real6.ml/file/media/music/%E5%81%8F%E7%88%B1.mp3",
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },


    
  ];
}

export default chillHop;
