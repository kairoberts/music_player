import { v4 as uuidv4 } from "uuid";
// Nipsey hussle songs
import bhfawimage from "./audioimages/bhfaw.jpg";
import npimage from "./audioimages/npimage.jpg";
import sbimage from "./audioimages/sbimage.jpg";
import bhfaw from "./audio/BHFAW.mp3";
import killa from "./audio/killa.mp3";
import thik from "./audio/thik.mp3";
import clarity from "./audio/clarity.mp3";
import shellshocked from "./audio/shellshocked.mp3";
import stress from "./audio/stress.mp3";
import rolling from "./audio/rolling.mp3";
import sitg from "./audio/sitg.mp3";
import ngn from "./audio/ngn.mp3";
import effortless from "./audio/effortless.mp3";
import noneofthis from "./audio/noneofthis.mp3";

function Music() {
  return [
    {
      name: "Be Here For A While",
      cover: bhfawimage,
      artist: "Nipsey Hussle",
      audio: bhfaw,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Killa",
      cover: bhfawimage,
      artist: "Nipsey Hussle",
      audio: killa,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "That's How I Knew",
      cover: bhfawimage,
      artist: "Nipsey Hussle",
      audio: thik,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Clarity",
      cover: sbimage,
      artist: "Nipsey Hussle Ft Bino Rideaux & Dave East",
      audio: clarity,
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
      name: "Shell Shocked",
      cover: sbimage,
      artist: "Nipsey Hussle",
      audio: shellshocked,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "I Don't Stress",
      cover: sbimage,
      artist: "Nipsey Hussle",
      audio: stress,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Never Gone Know",
      cover: npimage,
      artist: "Nipsey Hussle Ft Bino Rideaux",
      audio: ngn,
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
      name: "None Of This",
      cover: npimage,
      artist: "Nipsey Hussle Ft Bino Rideaux",
      audio: noneofthis,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default Music;
