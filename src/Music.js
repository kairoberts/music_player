import { v4 as uuidv4 } from "uuid";
// DJ Boring
import george from "./audioimages/george.png";
import goodbyemichael from "./audio/goodbyemichael.mp3";
// Nipsey hussle songs
import bhfawimage from "./audioimages/bhfaw.jpg";
import npimage from "./audioimages/npimage.jpg";
import sbimage from "./audioimages/sbimage.jpg";
import bhfaw from "./audio/BHFAW.mp3";
import rolling from "./audio/rolling.mp3";
import sitg from "./audio/sitg.mp3";
import effortless from "./audio/effortless.mp3";
// Mac Miller songs
import kids from "./audioimages/kids.jpg";
import nomf from "./audio/nomf.mp3";
// Kid cudi songs
import motnimage from "./audioimages/motnimage.jpg";
import citr from "./audio/citr.mp3";
import dnn from "./audio/dnn.mp3";
// lofi hiphop
import dryhope from "./audioimages/dryhope.jpg";
import envision from "./audio/envision.mp3";

import shuko from "./audioimages/shuko.jpg";
import fiveam from "./audio/5am.mp3";
import cruising from "./audio/cruisin.mp3";

import swornsong from "./audioimages/sworn.jpg";
import tumbling from "./audio/tumbling.mp3";

import tft from "./audioimages/thefieldtapes.jpg";
import harbor from "./audio/harbour.mp3";

function Music() {
  return [
    {
      name: "Goodbye Michael",
      cover: george,
      artist: "DJ Boring",
      audio: goodbyemichael,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Envision",
      cover: dryhope,
      artist: "Dryhope",
      audio: envision,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Be Here For A While",
      cover: bhfawimage,
      artist: "Nipsey Hussle",
      audio: bhfaw,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "5am",
      cover: shuko,
      artist: "Ruck P & Shuko",
      audio: fiveam,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cruisin",
      cover: shuko,
      artist: "Loop Schrauber & TRIBEZ.",
      audio: cruising,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Rolling",
      cover: sbimage,
      artist: "Nipsey Hussle",
      audio: rolling,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tumbling",
      cover: swornsong,
      artist: "Swørn",
      audio: tumbling,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Stucc In The Grind",
      cover: npimage,
      artist: "Nipsey Hussle Ft Bino Rideaux",
      audio: sitg,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Effortless",
      cover: npimage,
      artist: "Nipsey Hussle Ft Bino Rideaux",
      audio: effortless,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nikes On My Feet",
      cover: kids,
      artist: "Mac Miller",
      audio: nomf,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Harbor",
      cover: tft,
      artist: "The Field Tapes",
      audio: harbor,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cleveland Is The Reason",
      cover: motnimage,
      artist: "Kid Cudi",
      audio: citr,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Day N Nite",
      cover: motnimage,
      artist: "Kid Cudi",
      audio: dnn,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default Music;
