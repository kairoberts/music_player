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
// Wiz khalifa songs
import taimage from "./audioimages/taimage.jpg";
import california from "./audio/california.mp3";
import miawallace from "./audio/miawallace.mp3";
// Mac Miller songs
import bdeimage from "./audioimages/bdeimage.jpg";
import kids from "./audioimages/kids.jpg";
import donaldtrump from "./audio/donaldtrump.mp3";
import bestdayever from "./audio/bde.mp3";
import kanfp from "./audio/kanfp.mp3";
import nomf from "./audio/nomf.mp3";
// Kid cudi songs
import motnimage from "./audioimages/motnimage.jpg";
import citr from "./audio/citr.mp3";
import dnn from "./audio/dnn.mp3";
// The underachievers songs
import indigosim from "./audioimages/indigoism.jpg";
import herbshuttles from "./audio/herbshuttles.mp3";
import mahdi from "./audio/mahdi.mp3";

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
    {
      name: "California",
      cover: taimage,
      artist: "Wiz Khalifa",
      audio: california,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mia Wallace",
      cover: taimage,
      artist: "Wiz Khalifa",
      audio: miawallace,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Best Day Ever",
      cover: bdeimage,
      artist: "Mac Miller",
      audio: bestdayever,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Donald Trump",
      cover: bdeimage,
      artist: "Mac Miller",
      audio: donaldtrump,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kool Aid And Frozen Pizza",
      cover: kids,
      artist: "Mac Miller",
      audio: kanfp,
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
    {
      name: "Herb Shuttles",
      cover: indigosim,
      artist: "The Underachievers",
      audio: herbshuttles,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Mahdi",
      cover: indigosim,
      artist: "The Underachievers",
      audio: mahdi,
      color: ["#BC82FD", "#0ca2af"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default Music;
