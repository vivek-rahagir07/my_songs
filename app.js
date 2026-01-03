/* -------- FIREBASE CONFIG -------- */
const firebaseConfig = {
  apiKey: "AIzaSyA7JscOrYY7GMMGMppkO79oGDBd-dLKr4c",
  authDomain: "neostream-c9bf5.firebaseapp.com",
  projectId: "neostream-c9bf5",
  storageBucket: "neostream-c9bf5.firebasestorage.app",
  messagingSenderId: "607234339904",
  appId: "1:607234339904:web:439c628934146a5b601ba5",
  measurementId: "G-7X3YDPZNYX"
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.error("Firebase initialization failed", e);
}
const auth = typeof firebase !== 'undefined' ? firebase.auth() : null;
const db = typeof firebase !== 'undefined' ? firebase.firestore() : null;

/* -------- GLOBAL DATA STORE -------- */
var SAMPLE_MP3 = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3";

var artistsData = {
  'arijit': {
    name: "Arijit Singh",
    category: "Bollywood",
    desc: "The soulful voice of a generation.",
    heroImage: "photo/arijitslide.jpeg",
    gridImage: "photo/arijitgrid.jpeg",
    playerImage: "player/arijit.png",
    tracks: [
      { title: "Tum Hi Ho (Aashiqui 2)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit1.mp3" },
      { title: "Kesariya (Brahmāstra)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit2.mp3" },
      { title: "Channa Mereya (Ae Dil Hai Mushkil)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit 3.mp3" },
      { title: "Jhoome Jo Pathaan (Pathaan)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit4.mp3" },
      { title: "Phir Mohabbat (Murder 2)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit 5.mp3" },
      { title: "Pachtaoge (Jaani Ve)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit6.mp3" },
      { title: "Hawayein (Jab Harry Met Sejal)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit 7.mp3" },
      { title: "Hamari Adhuri Kahani", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arjit8.mp3" },
      { title: "Tera Yaar Hoon Main", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit 9.mp3" },
      { title: "Zaalima", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit10.mp3" },
      { title: "Ae Dil Hai Mushkil (Title Track)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit11.mp3" },
      { title: "Gerua (Reprise)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit12.mp3" },
      { title: "Raabta (Night in the Motel)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit 13.mp3" },
      { title: "Khairiyat (Chhichhore)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit 14.mp3" },
      { title: "Shayad (Love Aaj Kal)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit 15.mp3" },
      { title: "Soch Na Sake (Reprise)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit16.mp3" },
      { title: "Naina (Dangal)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit 17.mp3" },
      { title: "Samjhawan (Unplugged)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit18.mp3" },
      { title: "Janam Janam (Dilwale)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit19.mp3" },
      { title: "Rait Zara Si (Atrangi Re)", artist: "Arijit Singh", url: "Artist Songs/arijit singh/arijit20.mp3" }
    ]
  },
  'shreya': {
    name: "Shreya Ghoshal",
    category: "Bollywood",
    desc: "Melody Queen of Bollywood.",
    heroImage: "photo/shreyaslide.jpg",
    gridImage: "photo/shreyagrid.jpg",
    playerImage: "player/shreyagoshal.png",
    tracks: [
      { title: "Aa gale lag ja duet", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/shreya 1.mp3" },
      { title: "Aa pass Aa", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/shreya 2.mp3" },
      { title: "Deewani Mastani", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/shreya 3.mp3" },
      { title: "Jeene Laga Hoon", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/shreya 4.mp3" },
      { title: "Koi Na", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/shreya 5.mp3" },
      { title: "Naamumkin", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/shreya 6.mp3" },
      { title: "Piya O Re Piya", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Piya O Re Piya Tere Naal.mp3" },
      { title: "Tere Liye", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Tere Liye .mp3" },
      { title: "Heeriye", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Heeriye .mp3" },
      { title: "Bairiyaa", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Bairiyaa Ramaiya .mp3" },
      { title: "Is This Love", artist: "Shreya Ghoshal", url: SAMPLE_MP3 },
      { title: "Chahenge Tumhein", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Chahenge Tumhein .mp3" },
      { title: "Thoda Thoda", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Thoda Thoda .mp3" },
      { title: "Saans", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Saans .mp3" },
      { title: "Makhmali", artist: "Shreya Ghoshal", url: SAMPLE_MP3 },
      { title: "Ik Teekhi Teekhi Si Ladki", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Ik Teekhi Teekhi Si Ladki .mp3" },
      { title: "Aahista Aahista", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Aahista Aahista.mp3" },
      { title: "Tujh Mein Rab Dikhta Hai - ll", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Tujh Mein Rab Dikhta Hai .mp3" },
      { title: "Aadha Ishq", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Aadha Ishq .mp3" },
      { title: "Daata Tu", artist: "Shreya Ghoshal", url: "Artist Songs/shreya/Daata Tu .mp3" }
    ]
  },
  'armaan': {
    name: "Armaan Malik",
    category: "Bollywood",
    desc: "The prince of romance and melodic hits.",
    heroImage: "photo/aarman malik.jpg",
    gridImage: "photo/aarman malik.jpg",
    playerImage: "player/arman.png",
    tracks: [
      { title: "Bol Do Na Zara", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Bol Do Na Zara .mp3" },
      { title: "Hasi", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Hasi .mp3" },
      { title: "Rehna Tere Paas", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Rehna Tere Paas .mp3" },
      { title: "Buddhu Sa Mann", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Buddhu_Sa_Mann.mp3" },
      { title: "Hawa Banke", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Hawaa Banke .mp3" },
      { title: "Bewaqoofiyaan", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Bewaqoofi .mp3" },
      { title: "Humnava", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Humnawa .mp3" },
      { title: "No Pelli", artist: "Armaan Malik", url: "Artist Songs/armaan malik/noo pelli.mp3" },
      { title: "Gerua", artist: "Armaan Malik", url: "Artist Songs/armaan malik/gerua.mp3" },
      { title: "Kabhi Toh Nazar Milao", artist: "Armaan Malik", url: "Artist Songs/armaan malik/kabhi toh nazar milao.mp3" },
      { title: "Judaa Hum Ho Gaye Maana", artist: "Armaan Malik", url: "Artist Songs/armaan malik/juda ham ho gye .mp3" },
      { title: "Dil Mein Chhupa Lunga", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Dil Mein Chhupa Loonga .mp3" },
      { title: "Hua Hai Aaj Pehli Baar", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Hua Hain Aaj Pehli Baar.mp3" },
      { title: "Chale Aana", artist: "Armaan Malik", url: "Artist Songs/armaan malik/Chale Aana De De Pyaar .mp3" },

    ]
  },
  'diljit': {
    name: "Diljit Dosanjh",
    category: "Punjabi",
    desc: "G.O.A.T vibes only.",
    heroImage: "photo/diljitgrid.jpg",
    gridImage: "photo/diljitgrid.jpg",
    playerImage: "player/diljit.png",
    tracks: [
      { title: "Lover", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Lover.mp3" },
      { title: "G.O.A.T.", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/goat.mp3" },
      { title: "Vibe", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Vibe.mp3" },
      { title: "Lemonade", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Lemonade.mp3" },
      { title: "Peaches", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Peaches.mp3" },
      { title: "Born to Shine", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Born To Shine.mp3" },
      { title: "Laembadgini", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Laembadgini .mp3" },
      { title: "Do You Know", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Do_You_Know.mp3" },
      { title: "5 Taara", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/5_Taara_1.mp3" },
      { title: "Clash", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Clash .mp3" },
      { title: "Raat Di Gedi", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Raat Di Gedi - Diljit Dosanjh.mp3" },
      { title: "Putt Jatt Da", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Putt Jatt Da - Diljit Dosanjh.mp3" },
      { title: "Kufar", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Kufar .mp3" },
      { title: "Ishq Di Baajiyaan", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Ishq_Di_Baajiyaan.mp3" },
      { title: "Water", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Water.mp3" },
      { title: "Naina (From Crew)", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Naina Crew .mp3" },
      { title: "Charmer", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Charmer .mp3" },
      { title: "Kinni Kinni", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Kinni Kinni Ghost 128 Kbps.mp3" },
      { title: "Lalkara", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Lalkara Ghost 128 Kbps.mp3" },
      { title: "Peed", artist: "Diljit Dosanjh", url: "Artist Songs/daljit/Peed_1.mp3" }
    ]
  },
  'prateek': {
    name: "Prateek Kuhad",
    category: "Indie",
    desc: "Soft acoustic melodies for the heart.",
    heroImage: "photo/Prateek.jpg",
    gridImage: "photo/Prateek.jpg",
    playerImage: "player/kudan.png",
    tracks: [
      { title: "cold/mess", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/cold_mess.mp3" },
      { title: "Kasoor", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Kasoor.mp3" },
      { title: "Tum Jab Paas", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Tum Jab Paas .mp3" },


      { title: "Co2", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Co2 - .mp3" },
      { title: "Mulaqat", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Mulaqat.mp3" },
      { title: "Dil Beparvah", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Dil Beparvah .mp3" },

      { title: "Saansein", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Saansein .mp3" },
      { title: "Just A Word", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Just_A_Word.mp3" },

      { title: "Tere Hi Hum", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/tere_Hi_Hum.mp3" },

      { title: "Khone Do", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Khone_Do.mp3" },
      { title: "Favorite Peeps", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Favorite_Peeps.mp3" },
      { title: "Shehron Ke Raaz", artist: "Prateek Kuhad", url: "Artist Songs/prateek kuhad/Shehron_Ke_Raaz.mp3" }
    ]
  },
  'irfan': {
    name: "Mohammed Irfan",
    category: "Bollywood",
    desc: "Warm and soulful playback voice.",
    heroImage: "photo/mmd irfan.jpg",
    gridImage: "photo/mmd irfan.jpg",
    playerImage: "player/mmd irfan.png",
    tracks: [
      { title: "Afiya Shab", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Afiya Shab .mp3" },
      { title: "Aami Sudhu Cheyechi Tomay", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Ami-Sudhu.mp3" },
      { title: "Banjaara (Alternate)", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Banjaara .mp3" },
      { title: "Behene De Mujhe", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Behene De Mujhe .mp3" },
      { title: "Belafz Baatein", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Belafz Baatein Prem .mp3" },
      { title: "Dard Dilo Ke (Version 1)", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Dard Dilo Ke The .mp3" },
      { title: "Dard Dilo Ke (Version 2)", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Dard Dilo Ke.mp3" },
      { title: "Dil Awara (Version 1)", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Dil Awara .mp3" },
      { title: "Dil Awara (Version 2)", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Dil Awara.mp3" },
      { title: "Dil Toota Hi Raha", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Dil Toota Hi Raha.mp3" },
      { title: "Ek Villain Mashup", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Ek Villain .mp3" },
      { title: "Fareb", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Fareb.mp3" },
      { title: "Farouza", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Farouza.mp3" },
      { title: "Gaaye Jaa (Male)", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Gaaye jaa male .mp3" },
      { title: "Hai Yehi Zindagi", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Hai Yehi Zindagi Feat.mp3" },
      { title: "Hothon Se Chhu Lo Tum", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Hothon_Se_Chhu_Lo_Tum.mp3" },
      { title: "Itni Si Hai Dastaan", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Itni Si Hai Dastaan.mp3" },
      { title: "Jab Tum Chaho", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Jab Tum Chaho .mp3" },
      { title: "Kabhi Jo Badal Barse", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Kabhi Jo Badal Barse .mp3" },
      { title: "Kabira - Naina", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Kabira - Naina.mp3" },
      { title: "Meherbaan", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Meherbaan .mp3" },
      { title: "Minnatein", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Minnatein.mp3" },
      { title: "Phir Mohabbat (Acoustic)", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Phir Mohabbat .mp3" },
      { title: "Sanam Teri Kasam", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Sanam Teri Kasam .mp3" },
      { title: "Teri Aashiqui Ne Maara", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Teri Aashiqui Ne Maara .mp3" },
      { title: "Tu Dua Hai Dua", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Tu Dua Hai Dua.mp3" },
      { title: "Tu Hi Tu", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Tu Hi Tu.mp3" },
      { title: "Tumse Pyaar Hua", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Tumse Pyaar Hua .mp3" },
      { title: "Yaariyan", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Yaariyan.mp3" },
      { title: "Baarish", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/baarish.mp3" },
      { title: "Banjaara", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/banjarra.mp3" },
      { title: "Muskurane", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/muskurane.mp3" },
      { title: "Phir Mohabbat", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/phir mohbaat.mp3" }
    ]
  },
  'jubin': {
    name: "Jubin Nautiyal",
    category: "Bollywood",
    desc: "The soulful king of romantic ballads.",
    heroImage: "photo/jubin notiyal.jpg",
    gridImage: "photo/jubin notiyal.jpg",
    playerImage: "player/jubin.png",
    tracks: [
      { title: "Ae Mere Des", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Ae Mere Des .mp3" },
      { title: "Agar Ho Tum", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Agar Ho Tum .mp3" },
      { title: "Aise Kaise", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Aise Kaise Jubin.mp3" },
      { title: "Akh Lad Jaave", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Akh Lad Jaave .mp3" },
      { title: "Allah De Bande", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Allah De Bande .mp3" },
      { title: "Bana Sharabi", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bana Sharabi .mp3" },
      { title: "Barbaad", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Barbaad .mp3" },
      { title: "Barsaat Ho Jaaye", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Barsaat Ho Jaaye .mp3" },
      { title: "Barsaat Ki Dhun", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Barsaat Ki Dhun .mp3" },
      { title: "Bas Ek Dhadak", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bas Ek Dhadak .mp3" },
      { title: "Baton Baton Mein", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Baton Baton Mein.mp3" },
      { title: "Bawara Mann", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bawara Mann .mp3" },
      { title: "Bawaria Dhadak", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bawaria Dhadak .mp3" },
      { title: "Bedardi Se Pyaar Ka", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bedardi Se Pyaar Ka .mp3" },
      { title: "Bewafa Se Pyaar", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bewafa Se Pyaar .mp3" },
      { title: "Bewafa Tera Masoom", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bewafa Tera Masoom .mp3" },
      { title: "Bewafa Tera Muskurana", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bewafa Tera Muskurana .mp3" },
      { title: "Bewafaa Tu", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bewafaa Tu .mp3" },
      { title: "Bezubaan Kab Se", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Bezubaan Kab Se Street.mp3" },
      { title: "Boond Boond", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Boond Boond Mein Hate .mp3" },
      { title: "Chahe Jo Ho", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Chahe Jo Ho .mp3" },
      { title: "Chaudhary", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Chaudhary Jubin Nautiya.mp3" },
      { title: "Darbadar Ittu Si Baat", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Darbadar Ittu Si Baat.mp3" },
      { title: "Desh Pehle", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Desh Pehle Main .mp3" },
      { title: "Dhadkan", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Dhadkan Amavas.mp3" },
      { title: "Dil Galti Kar Baitha Hai", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Dil Galti Kar Baitha Hai.mp3" },
      { title: "Dil Jisse Zinda Hain", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Dil Jisse Zinda Hain .mp3" },
      { title: "Ek Sher Ho Tum", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Ek Sher Ho Tum.mp3" },
      { title: "Gazab Ka Hai Din", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Gazab Ka Hai Din Dil .mp3" },
      { title: "Haaniya Ve", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Haaniya Ve .mp3" },
      { title: "Hai Pyaar Kya", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Hai Pyaar Kya .mp3" },
      { title: "Humko Tumse", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Humko Tumse.mp3" },
      { title: "Ishq Karo Dil Se", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Ishq Karo Dil Se .mp3" },
      { title: "Ishqbaaziyaan", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Ishqbaaziyaan .mp3" },
      { title: "Ittefaq Se", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Ittefaq Se .mp3" },
      { title: "Jaadui", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Jaadui Tu Jhoothi Main Makkaar.mp3" },
      { title: "Kaabil Hoon", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Kaabil Hoon .mp3" },
      { title: "Khoobsurat", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Khoobsurat Ek.mp3" },
      { title: "Kisi Se Pyar Ho Jaye", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Kisi Se Pyar Ho Jaye.mp3" },
      { title: "Lut Gaye", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Lut Gaye Jubin Nautiyal.mp3" },
      { title: "Main Janta Hoon", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Main Janta Hoon.mp3" },
      { title: "Meri Zindagi Hai Tu", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Meri Zindagi Hai Tu.mp3" },
      { title: "Raataan Lambiyan", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Raataan Lambiyan .mp3" },
      { title: "Saath Hum Rahein", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/Saath Hum Rahein .mp3" },
      { title: "Aatishbaazi", artist: "Jubin Nautiyal", url: "Artist Songs/jubin notiyal/aatishbaazi.mp3" },

      { title: "Ghoomey", artist: "Jubin Nautiyal", url: SAMPLE_MP3 }
    ]
  },
  'neha': {
    name: "Neha Kakkar",
    category: "Bollywood",
    desc: "The queen of Bollywood pop and high-energy hits.",
    heroImage: "photo/nehakakkar.png",
    gridImage: "photo/nehakakkar.png",
    playerImage: "player/neha.png",
    tracks: [
      { title: "2 Phone", artist: "Neha Kakkar", url: "Artist Songs/neha/2 Phone .mp3" },
      { title: "Aa To Sahii", artist: "Neha Kakkar", url: "Artist Songs/neha/Aa To Sahii Judwaa .mp3" },
      { title: "Aaina", artist: "Neha Kakkar", url: "Artist Songs/neha/Aaina The Body 320 Kbps.mp3" },
      { title: "Aankh Marey", artist: "Neha Kakkar", url: "Artist Songs/neha/Aankh Marey .mp3" },
      { title: "Aashiq Banaya Aapne", artist: "Neha Kakkar", url: "Artist Songs/neha/Aashiq Banaya Aapne Hate Story Iv 320 Kbps.mp3" },
      { title: "Aaye Haaye", artist: "Neha Kakkar", url: "Artist Songs/neha/Aaye Haaye  .mp3" },
      { title: "Ae Dilla Marjaaniyaan", artist: "Neha Kakkar", url: "Artist Songs/neha/Ae Dilla Marjaaniyaan.mp3" },
      { title: "Agaaz Hai Tu", artist: "Neha Kakkar", url: "Artist Songs/neha/Agaaz Hai Tu.mp3" },
      { title: "Akhiyaan", artist: "Neha Kakkar", url: "Artist Songs/neha/Akhiyaan .mp3" },
      { title: "Ashleel", artist: "Neha Kakkar", url: "Artist Songs/neha/Ashleel .mp3" },
      { title: "Aur Pyaar Karna Hai", artist: "Neha Kakkar", url: "Artist Songs/neha/Aur Pyaar Karna Hai .mp3" },
      { title: "Bas Tu Hove", artist: "Neha Kakkar", url: "Artist Songs/neha/Bas Tu Hove .mp3" },
      { title: "Bheegi Bheegi", artist: "Neha Kakkar", url: "Artist Songs/neha/Bheegi Bheegi .mp3" },
      { title: "Bijli", artist: "Neha Kakkar", url: "Artist Songs/neha/Bijli .mp3" },
      { title: "Blue Hai Paani Paani", artist: "Neha Kakkar", url: "Artist Songs/neha/Blue Hai Paani Paani .mp3" },
      { title: "Candy Shop", artist: "Neha Kakkar", url: "Artist Songs/neha/Candy Shop .mp3" },
      { title: "Chaand Mera Naraaz Hai", artist: "Neha Kakkar", url: "Artist Songs/neha/Chaand Mera Naraaz Hai .mp3" },
      { title: "Coca Cola", artist: "Neha Kakkar", url: "Artist Songs/neha/Coca Cola Luka.mp3" },
      { title: "Daiyya Daiyya", artist: "Neha Kakkar", url: "Artist Songs/neha/Daiyya Daiyya Hunter .mp3" },
      { title: "Dil Bechara", artist: "Neha Kakkar", url: "Artist Songs/neha/Dil Bechara.mp3" },
      { title: "Dil Chahiye", artist: "Neha Kakkar", url: "Artist Songs/neha/Dil Chahiye .mp3" },
      { title: "Dil Ko Karaar Aaya", artist: "Neha Kakkar", url: "Artist Songs/neha/Dil Ko Karaar Aaya .mp3" },
      { title: "Dilbar", artist: "Neha Kakkar", url: "Artist Songs/neha/Dilbar Satyameva .mp3" },
      { title: "Do Peg Maar", artist: "Neha Kakkar", url: "Artist Songs/neha/Do Peg Maar .mp3" },
      { title: "Ek Toh Kum Zindagani", artist: "Neha Kakkar", url: "Artist Songs/neha/Ek Toh Kum Zindagani.mp3" },
      { title: "Fikar", artist: "Neha Kakkar", url: "Artist Songs/neha/Fikar Do Dooni Panj .mp3" },
      { title: "Gali Gali", artist: "Neha Kakkar", url: "Artist Songs/neha/Gali Gali .mp3" },
      { title: "Khoobsurat", artist: "Neha Kakkar", url: "Artist Songs/neha/Khoobsurat .mp3" },
      { title: "Main Tera Boyfriend", artist: "Neha Kakkar", url: "Artist Songs/neha/Main Tera Boyfriend.mp3" },
      { title: "Mohabbat Nasha Hai", artist: "Neha Kakkar", url: "Artist Songs/neha/Mohabbat Nasha Hai .mp3" },
      { title: "O Janiya", artist: "Neha Kakkar", url: "Artist Songs/neha/O Janiya Force 2 .mp3" },
      { title: "Teri Aankhon Mein", artist: "Neha Kakkar", url: "Artist Songs/neha/Teri Aankhon Mein .mp3" },
      { title: "Zindagi Mil Jayegi", artist: "Neha Kakkar", url: "Artist Songs/neha/Zindagi Mil Jayegi .mp3" }
    ]
  },
  'badshah': {
    name: "Badshah",
    category: "Punjabi",
    desc: "The chart-topping rap sensation and party starter.",
    heroImage: "photo/badshah.jpeg",
    gridImage: "photo/badshah.jpeg",
    playerImage: "player/badshah.png",
    tracks: [
      { title: "Aao Kabhi Haveli", artist: "Badshah", url: "Artist Songs/badshah/Aao Kabhi Haveli .mp3" },
      { title: "Aashiqui", artist: "Badshah", url: "Artist Songs/badshah/Aashiqui .mp3" },
      { title: "Aatmvishvas", artist: "Badshah", url: "Artist Songs/badshah/Aatmvishvas .mp3" },
      { title: "Abhi Toh Party Shuru Hui Hai", artist: "Badshah", url: "Artist Songs/badshah/Abhi Toh Party Shuru Hui Hai .mp3" },
      { title: "Aithe Rakh", artist: "Badshah", url: "Artist Songs/badshah/Aithe Rakh.mp3" },
      { title: "Alag Hai Ek", artist: "Badshah", url: "Artist Songs/badshah/Alag Hai Ek .mp3" },
      { title: "Amg", artist: "Badshah", url: "Artist Songs/badshah/Amg Ek Tha .mp3" },
      { title: "Are You Ready", artist: "Badshah", url: "Artist Songs/badshah/Are You Ready for big bang.mp3" },
      { title: "Baawe", artist: "Badshah", url: "Artist Songs/badshah/Baawe Hard Drive .mp3" },
      { title: "Baawla", artist: "Badshah", url: "Artist Songs/badshah/Baawla .mp3" },
      { title: "Bachpan Ka Pyaar", artist: "Badshah", url: "Artist Songs/badshah/Bachpan Ka Pyaar .mp3" },
      { title: "Bad Boy", artist: "Badshah", url: "Artist Songs/badshah/Bad Boy Saaho.mp3" },
      { title: "Bajenge", artist: "Badshah", url: "Artist Songs/badshah/Bajenge .mp3" },
      { title: "Bas Ke Bahar", artist: "Badshah", url: "Artist Songs/badshah/Bas Ke Bahar .mp3" },
      { title: "Blessed", artist: "Badshah", url: "Artist Songs/badshah/Blessed Badshah .mp3" },
      { title: "Body On Me", artist: "Badshah", url: "Artist Songs/badshah/Body On Me .mp3" },
      { title: "Boht Tej", artist: "Badshah", url: "Artist Songs/badshah/Boht Tej .mp3" },
      { title: "Chaar Shanivaar", artist: "Badshah", url: "Artist Songs/badshah/Chaar Shanivaar .mp3" },
      { title: "Check My Fizz", artist: "Badshah", url: "Artist Songs/badshah/Check My Fizz .mp3" },
      { title: "Daaku", artist: "Badshah", url: "Artist Songs/badshah/Daaku Badshah .mp3" },
      { title: "DJ Waley Babu", artist: "Badshah", url: "Artist Songs/badshah/Dj Waley Babu .mp3" },
      { title: "Fast Cars", artist: "Badshah", url: "Artist Songs/badshah/Fast Cars 3 Am.mp3" },
      { title: "Focus", artist: "Badshah", url: "Artist Songs/badshah/Focus .mp3" },
      { title: "G Yaan", artist: "Badshah", url: "Artist Songs/badshah/G Yaan .mp3" },
      { title: "Galiyon Ke Ghalib", artist: "Badshah", url: "Artist Songs/badshah/Galiyon ke ghalib.mp3" },
      { title: "Genda Phool", artist: "Badshah", url: "Artist Songs/badshah/Genda Phool .mp3" },
      { title: "Ghar Pe Party Hai", artist: "Badshah", url: "Artist Songs/badshah/Ghar Pe Party Hai Farrey.mp3" },
      { title: "Gone Girl", artist: "Badshah", url: "Artist Songs/badshah/Gone Girl .mp3" },
      { title: "Happy Happy", artist: "Badshah", url: "Artist Songs/badshah/Happy Happy .mp3" },
      { title: "Interstellar", artist: "Badshah", url: "Artist Songs/badshah/Interstellar.mp3" },
      { title: "Jugnu", artist: "Badshah", url: "Artist Songs/badshah/Jugnu .mp3" },

    ]
  },
  'guru': {
    name: "Guru Randhawa",
    category: "Punjabi",
    desc: "Global star known for catchy Punjabi-pop hits.",
    heroImage: "photo/guru randhawa.jpg",
    gridImage: "photo/guru randhawa.jpg",
    playerImage: "player/guru randhawana.png",
    tracks: [
      { title: "Aise Na Chhoro", artist: "Guru Randhawa", url: "Artist Songs/guru /Aise Na Chhoro .mp3" },
      { title: "Alone", artist: "Guru Randhawa", url: "Artist Songs/guru /Alone .mp3" },
      { title: "Aur Pyaar Karna Hai", artist: "Guru Randhawa", url: "Artist Songs/guru /Aur Pyaar Karna Hai .mp3" },
      { title: "Azul", artist: "Guru Randhawa", url: "Artist Songs/guru /Azul .mp3" },
      { title: "Baari Barsi", artist: "Guru Randhawa", url: "Artist Songs/guru /Baari Barsi .mp3" },
      { title: "Ban Ja Rani", artist: "Guru Randhawa", url: "Artist Songs/guru /Ban ja rani.mp3" },
      { title: "Black Raat", artist: "Guru Randhawa", url: "Artist Songs/guru /Black Raat .mp3" },
      { title: "Chill Mode G", artist: "Guru Randhawa", url: "Artist Songs/guru /Chill Mode G .mp3" },
      { title: "Designer", artist: "Guru Randhawa", url: "Artist Songs/guru /Designer Guru Randhawa .mp3" },
      { title: "Fake Love", artist: "Guru Randhawa", url: "Artist Songs/guru /Fake Love.mp3" },
      { title: "Golimaar Vee", artist: "Guru Randhawa", url: "Artist Songs/guru /Golimaar Vee .mp3" },
      { title: "Ishq Tera", artist: "Guru Randhawa", url: "Artist Songs/guru /Ishq Tera .mp3" },
      { title: "Jeena Sikhaya", artist: "Guru Randhawa", url: "Artist Songs/guru /Jeena Sikhaya Kuch Khattaa.mp3" },
      { title: "Jhuthe Shahkot", artist: "Guru Randhawa", url: "Artist Songs/guru /Jhuthe Shahkot .mp3" },
      { title: "Kithe Vasde Ne", artist: "Guru Randhawa", url: "Artist Songs/guru /Kithe Vasde Ne Without Prejudice .mp3" },
      { title: "Lagdi Hai Thaai", artist: "Guru Randhawa", url: "Artist Songs/guru /Lagdi Hai Thaai Simran .mp3" },
      { title: "Mazhaiyum Theeyum", artist: "Guru Randhawa", url: "Artist Songs/guru /Mazhaiyum Theeyum .mp3" },
      { title: "Naach Meri Rani", artist: "Guru Randhawa", url: "Artist Songs/guru /Naach Meri Rani.mp3" },
      { title: "Priya Priya", artist: "Guru Randhawa", url: "Artist Songs/guru /Priya Priya .mp3" },
      { title: "Tu Kaun Main Kaun", artist: "Guru Randhawa", url: "Artist Songs/guru /Tu Kaun Main Kaun .mp3" },
      { title: "Tu Meri Rani", artist: "Guru Randhawa", url: "Artist Songs/guru /Tu Meri Rani .mp3" },
      { title: "Ve Bhedya", artist: "Guru Randhawa", url: "Artist Songs/guru /Ve Bhedya .mp3" },
      { title: "Vibe", artist: "Guru Randhawa", url: "Artist Songs/guru /Vibe .mp3" },
      { title: "Yaar Mod Do", artist: "Guru Randhawa", url: "Artist Songs/guru /Yaar Mod Do .mp3" },
      { title: "Yaari No.1", artist: "Guru Randhawa", url: "Artist Songs/guru /Yaari No.1 Yaari Jam Vee 320 Kbps.mp3" },
      { title: "You Talking To Me", artist: "Guru Randhawa", url: "Artist Songs/guru /You Talking To Me .mp3" }
    ]
  },
  'swift': {
    name: "Taylor Swift",
    category: "Pop",
    desc: "The biggest name in modern pop music.",
    heroImage: "photo/taylor shift.png",
    gridImage: "photo/taylor shift.png",
    playerImage: "player/taylor.png",
    tracks: [
      { title: "Bejeweled", artist: "Taylor Swift", url: "Artist Songs/taylor shift/Bejeweled.mp3" },
      { title: "Karma", artist: "Taylor Swift", url: "Artist Songs/taylor shift/Karma.mp3" },
      { title: "Labyrinth", artist: "Taylor Swift", url: "Artist Songs/taylor shift/Labyrinth.mp3" },
      { title: "Mastermind", artist: "Taylor Swift", url: "Artist Songs/taylor shift/Mastermind.mp3" },
      { title: "Midnight Rain", artist: "Taylor Swift", url: "Artist Songs/taylor shift/Midnight_Rain.mp3" },
      { title: "Question?", artist: "Taylor Swift", url: "Artist Songs/taylor shift/Question?.mp3" },
      { title: "Snow On The Beach", artist: "Taylor Swift", url: "Artist Songs/taylor shift/Snow_On_The_Beach.com_.mp3" },
      { title: "Sweet Nothing", artist: "Taylor Swift", url: "Artist Songs/taylor shift/Sweet_Nothing.mp3" },
      { title: "Last Christmas", artist: "Taylor Swift", url: "Artist Songs/taylor shift/ast_Christmas.mp3" },

    ]
  },
  'sheeran': {
    name: "Ed Sheeran",
    category: "Pop",
    desc: "The multi-talented singer-songwriter and storyteller.",
    heroImage: "photo/ed sheeran.jpeg",
    gridImage: "photo/ed sheeran.jpeg",
    playerImage: "player/ed.png",
    tracks: [
      { title: "Don't", artist: "Ed Sheeran", url: "Artist Songs/ed/Don_t.mp3" },
      { title: "Galway Girl", artist: "Ed Sheeran", url: "Artist Songs/ed/Galway_Girl.mp3" },
      { title: "I See Fire", artist: "Ed Sheeran", url: "Artist Songs/ed/I_See_Fire.mp3" },
      { title: "I'm in Love in the Coco", artist: "Ed Sheeran", url: "Artist Songs/ed/I_m_in_love_in_the_coco.mp3" },
      { title: "Shape of You", artist: "Ed Sheeran", url: "Artist Songs/ed/Shape_of_You.mp3" },
      { title: "Photograph", artist: "Ed Sheeran", url: "Artist Songs/ed/photograph.mp3" },
      { title: "Shivers", artist: "Ed Sheeran", url: "Artist Songs/ed/shivers.mp3" },
      { title: "You Are My One", artist: "Ed Sheeran", url: "Artist Songs/ed/you_are_My_One.mp3" }
    ]
  },
  'atif': {
    name: "Atif Aslam",
    category: "Bollywood",
    desc: "Iconic voice known for emotional and romantic tracks.",
    heroImage: "photo/atif alam.png",
    gridImage: "photo/atif alam.png",
    playerImage: "player/atif.png",
    tracks: [
      { title: "12 Bajay", artist: "Atif Aslam", url: "Artist Songs/atif aslam/12 Bajay .mp3" },
      { title: "Aa Bhi Ja Mere", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Aa Bhi Ja Mere .mp3" },
      { title: "Aa Bhi Jaa Sanam", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Aa Bhi Jaa Sanam  .mp3" },
      { title: "Aadat", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Aadat Kalyug .mp3" },
      { title: "Ajnabi", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Ajnabi .mp3" },
      { title: "Allah Duhai Hai", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Allah Duhai Hai .mp3" },
      { title: "Baarishein", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Baarishein .mp3" },
      { title: "Bakhuda Tumhi Ho", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Bakhuda Tumhi Ho.mp3" },
      { title: "Be Intehaan", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Be Intehaan .mp3" },
      { title: "Bura Haal", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Bura Haal Carry On .mp3" },
      { title: "Cricket Khidaiye", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Cricket Khidaiye Talal.mp3" },
      { title: "Darasal", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Darasal Raabta.mp3" },
      { title: "Dekhte Dekhte", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Dekhte Dekhte .mp3" },
      { title: "Dil Diyan Gallan", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Dil Diyan Gallan .mp3" },
      { title: "Dil Meri Na Sune", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Dil Meri Na Sune .mp3" },
      { title: "Go", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Go .mp3" },
      { title: "Hoor", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Hoor .mp3" },
      { title: "Ik Naya Khuwab", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Ik Naya Khuwab .mp3" },
      { title: "Jeena Jeena", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Jeena Jeena .mp3" },
      { title: "Main Agar", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Main Agar .mp3" },
      { title: "Mangan Aiyaan", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Mangan Aiyaan .mp3" },
      { title: "O Mere Khuda", artist: "Atif Aslam", url: "Artist Songs/atif aslam/O Mere Khuda.mp3" },
      { title: "Pehli Dafa", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Pehli Dafa .mp3" },
      { title: "Pehli Nazar Mein", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Pehli Nazar Mein .mp3" },
      { title: "Piya O Re Piya", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Piya O Re Piya .mp3" },
      { title: "Rafta Rafta", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Rafta Rafta .mp3" },
      { title: "Ramaiya Vastavaiya", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Ramaiya Vastavaiya .mp3" },
      { title: "Rangreza", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Rangreza .mp3" },
      { title: "Selfish", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Selfish .mp3" },
      { title: "Tera Hua", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Tera Hua .mp3" },
      { title: "Tere Liye", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Tere Liye.mp3" },
      { title: "Tu Jaane Na", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Tu Jaane Na.mp3" },
      { title: "Woh Lamhe", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Woh Lamhe .mp3" },
      { title: "Woh Mere Bin", artist: "Atif Aslam", url: "Artist Songs/atif aslam/Woh Mere Bin .mp3" }
    ]
  },
  'sonu': {
    name: "Sonu Nigam",
    category: "Bollywood",
    desc: "The versatile legend of Indian playback singing.",
    heroImage: "photo/sonu nigam.png",
    gridImage: "photo/sonu nigam.png",
    playerImage: "player/sonu nigam.png",
    tracks: [
      { title: "Aa Gale Lag Jaa", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aa Gale Lag Jaa .mp3" },
      { title: "Aa Gaye Din Sanam", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aa Gaye Din Sanam Hogi.mp3" },
      { title: "Aaghaaz Karo", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aaghaaz Karo .mp3" },
      { title: "Aai Jo Teri Yaad", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aai Jo Teri Yaad .mp3" },
      { title: "Aaj Ki Raat", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aaj Ki Raat .mp3" },
      { title: "Aankhein Tumhari", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aankhein Tumhari .mp3" },
      { title: "Aao Jannat Mein", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aao Jannat Mein .mp3" },
      { title: "Aapki Yaad Aaye To", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aapki Yaad Aaye To Happy .mp3" },
      { title: "Aasman Ne", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aasman Ne .mp3" },
      { title: "Aayi Ban Ke Root", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aayi Ban Ke Root .mp3" },
      { title: "Aazaadiyan", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aazaadiyan Begum.mp3" },
      { title: "Ab Humse Akele", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Ab Humse Akele Raha Jaaye.mp3" },
      { title: "Abhi Mujh Mein Kahin", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Abhi Mujh Mein Kahin .mp3" },
      { title: "Achcha To Ab Mai", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Achcha To Ab Mai Chalta Hoo.mp3" },
      { title: "Aisa Lagta Hai", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aisa Lagta Hai.mp3" },
      { title: "Aisa Pehli Baar Hua", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aisa Pehli Baar Hua.mp3" },
      { title: "Ankhiyan", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Ankhiyan .mp3" },
      { title: "Apnaa Mujhe Tu Lag", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Apnaa Mujhe Tu Lag.mp3" },
      { title: "Apne Jahanke", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Apne Jahanke .mp3" },
      { title: "Apne", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Apne Sonu Nigam .mp3" },
      { title: "Awaara Dil", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Awaara Dil .mp3" },
      { title: "Aye Dil Pagal Mere", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aye Dil Pagal Mere.mp3" },
      { title: "Aye Zindagi", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Aye Zindagi .mp3" },
      { title: "Baap Baap Hota Hai", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Baap Baap Hota Hai.mp3" },
      { title: "Bandeya Sirf Ek", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Bandeya Sirf Ek .mp3" },
      { title: "Beeti Baatein", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Beeti Baatein .mp3" },
      { title: "Bhagwan Hai Kahan", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Bhagwan Hai Kahan .mp3" },
      { title: "Brothers Mashup", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Brothers Mashup .mp3" },
      { title: "Chale Bhi Aao", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Chale Bhi Aao .mp3" },
      { title: "Chhup Jaa Chhup Jaa", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Chhup Jaa Chhup jaa.mp3" },
      { title: "Ek Tuta Tara Hun", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Ek Tuta Tara Hun .mp3" },
      { title: "Ghar Kab Aaoge", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Ghar Kab Aaoge .mp3" },
      { title: "God Allah", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/God Allah .mp3" },
      { title: "Hum Deewane", artist: "Sonu Nigam", url: "Artist Songs/sonu nigam/Hum Deewane.mp3" }
    ]
  },
  'sunidhi': {
    name: "Sunidhi Chauhan",
    category: "Bollywood",
    desc: "The powerhouse of energy and vocal range.",
    heroImage: "photo/sunidhi chauhan.png",
    gridImage: "photo/sunidhi chauhan.png",
    playerImage: "player/sunidhi.png",
    tracks: [
      { title: "Aisa Kyun Hota Hai", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Aisa Kyun Hota Hai Kucch To Hai 320 Kbps.mp3" },
      { title: "Aisa Kyun Maa", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Aisa Kyun Maa .mp3" },
      { title: "Alla Miya", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Alla Miya.mp3" },
      { title: "Ashq Bhi", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Ashq Bhi .mp3" },
      { title: "Babli Badmaash", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Babli Badmaash .mp3" },
      { title: "Baby", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Baby .mp3" },
      { title: "Bandagi", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Bandagi.mp3" },
      { title: "Bardaasht", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Bardaasht Humraaz.mp3" },
      { title: "Bareilly Ke Bazaar", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Bareilly Ke Bazaar .mp3" },
      { title: "Bheege Bheege", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Bheege Bheege.mp3" },
      { title: "Bhoot Hoon Main", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Bhoot Hoon Main .mp3" },
      { title: "Cash", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Cash .mp3" },
      { title: "Chamiya", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Chamiya .mp3" },
      { title: "Chhaila", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Chhaila Salim .mp3" },
      { title: "Chhodo Chhodo", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Chhodo Chhodo .mp3" },
      { title: "Chhup Jaa Chhup", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Chhup Jaa Chhup .mp3" },
      { title: "Crazy Kiya", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Crazy Kiya .mp3" },
      { title: "Dekh Le", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Dekh Le .mp3" },
      { title: "Dil Rang Le", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Dil Rang Le .mp3" },
      { title: "Dil To Saala Ullu", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Dil To Saala Ullu .mp3" },
      { title: "Do Me A Favour", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Do Me A Favour .mp3" },
      { title: "Dont Touch", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Dont Touch .mp3" },
      { title: "Dooba Dooba", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Dooba Dooba .mp3" },
      { title: "Drona", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Drona .mp3" },
      { title: "Dupatta Mera", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Dupatta Mera .mp3" },
      { title: "Ek Ajnabee", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Ek Ajnabeemama .mp3" },
      { title: "Gazab Club", artist: "Sunidhi Chauhan", url: "Artist Songs/sunidhi/Gazab Club .mp3" }
    ]
  },
  'kk': {
    name: "KK",
    category: "Bollywood",
    desc: "The beloved voice of youth and timeless melodies.",
    heroImage: "photo/kk.avif",
    gridImage: "photo/kk.avif",
    playerImage: "player/kk.png",
    tracks: [
      { title: "12 Ladke", artist: "KK", url: "Artist Songs/kk/12 Ladke Tony Kakkar 320 Kbps.mp3" },
      { title: "Aafreen", artist: "KK", url: "Artist Songs/kk/Aafreen .mp3" },
      { title: "Aankhon Aankhon", artist: "KK", url: "Artist Songs/kk/Aankhon Aankhon .mp3" },
      { title: "Aap Ki Dua", artist: "KK", url: "Artist Songs/kk/Aap Ki Dua Pal .mp3" },
      { title: "Aashayein", artist: "KK", url: "Artist Songs/kk/Aashayein Iqbal .mp3" },
      { title: "Aashiq Banaya", artist: "KK", url: "Artist Songs/kk/Aashiq Banaya .mp3" },
      { title: "Aaya Re", artist: "KK", url: "Artist Songs/kk/Aaya Re .mp3" },
      { title: "Aaye Haaye", artist: "KK", url: "Artist Songs/kk/Aaye Haaye.mp3" },
      { title: "Aayegee Nindiya", artist: "KK", url: "Artist Songs/kk/Aayegee Nindiya .mp3" },
      { title: "Abhi Abhi", artist: "KK", url: "Artist Songs/kk/Abhi Abhi Male.mp3" },
      { title: "Ae Aa O", artist: "KK", url: "Artist Songs/kk/Ae Aa O .mp3" },
      { title: "Afghani Afeem Hai", artist: "KK", url: "Artist Songs/kk/Afghani Afeem Hai .mp3" },
      { title: "Afreen", artist: "KK", url: "Artist Songs/kk/Afreen .mp3" },
      { title: "Ak The Tiger", artist: "KK", url: "Artist Songs/kk/Ak The Tiger.mp3" },
      { title: "Akhaa Vich", artist: "KK", url: "Artist Songs/kk/Akhaa Vich .mp3" },
      { title: "Akhiyaan", artist: "KK", url: "Artist Songs/kk/Akhiyaan .mp3" },
      { title: "Allah Hafiz", artist: "KK", url: "Artist Songs/kk/Allah Hafiz .mp3" },
      { title: "Allah Khair", artist: "KK", url: "Artist Songs/kk/Allah Khair .mp3" },
      { title: "Awaarapan", artist: "KK", url: "Artist Songs/kk/Awaarapan .mp3" },
      { title: "Badi Dilchaspi Hai", artist: "KK", url: "Artist Songs/kk/Badi Dilchaspi Hai.mp3" },
      { title: "Banda Bindas", artist: "KK", url: "Artist Songs/kk/Banda Bindas .mp3" }
    ]
  }
};

/* -------- SLIDESHOW CONFIG -------- */
var heroSlides = [
  {
    key: 'arijit',
    title: "👑 Arijit Singh Special",
    desc: "The King of Playback Singing. Soulful & Live.",
    image: artistsData['arijit'].heroImage,
    tag: "Featured Artist"
  },
  {
    key: 'shreya',
    title: "Shreya Ghoshal Melodies",
    desc: "Pure vocals in high fidelity.",
    image: artistsData['shreya'].heroImage,
    tag: "Trending Now"
  },
  {
    key: 'jubin',
    title: "Jubin's Romantic Hits",
    desc: "The soulful king of romantic ballads.",
    image: artistsData['jubin'].heroImage,
    tag: "Fan Favorite"
  },
  {
    key: 'diljit',
    title: "Diljit's Punjabi Beats",
    desc: "High energy stage performances.",
    image: artistsData['diljit'].heroImage,
    tag: "Party Starter"
  }
];

var currentSlide = 0;
var slideInterval;

/* -------- APP STATE -------- */
var currentPlaylist = [];
var currentIndex = 0;
var isPlaying = false;
var lastVolume = 0.5;
var isLoggedIn = false;
var currentUserName = 'Guest';

/* Favorites & recent - Load from localStorage */
var favorites = JSON.parse(localStorage.getItem('neostream_favorites') || '[]');
var recentPlays = JSON.parse(localStorage.getItem('neostream_recent') || '[]');
var userPlaylists = JSON.parse(localStorage.getItem('neostream_playlists') || '[]');

/* -------- AUDIO VISUALIZER -------- */
var audioContext = null;
var analyser = null;
var dataArray = null;
var bufferLength = 0;
var source = null;
var isVisualizerInitialized = false;

// Artist View State
var showAllArtists = false;

/* DOM refs */
var viewHome = document.getElementById('view-home');
var viewPlayer = document.getElementById('view-player');

var audio = document.getElementById("audio-player");
var playPauseBtn = document.getElementById("play-pause-btn");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var volumeSlider = document.getElementById("volume-slider");
var seekSlider = document.getElementById("seek-slider");
var progressBar = document.getElementById("progress-bar");
var currentTimeEl = document.getElementById("current-time");
var totalTimeEl = document.getElementById("total-time");
var playerTitleEl = document.getElementById("player-title");
var tracklistContainer = document.getElementById("tracklist");
var lyricsContentEl = document.getElementById("lyrics-content");
var queueListEl = document.getElementById("queue-list");
var currentTitleEl = document.getElementById("current-title");
var currentInfoTextEl = document.getElementById("current-info-text");
var albumWrapper = document.getElementById("album-wrapper");
var muteIcon = document.getElementById("mute-icon");
var searchInput = document.getElementById("search-input");
var trackCountEl = document.getElementById("track-count");
var miniCoverEl = document.getElementById("mini-cover");
var playlistCategoryEl = document.getElementById("playlist-category");
var playlistTitleEl = document.getElementById("playlist-title");
var playlistDescEl = document.getElementById("playlist-desc");
var favListEl = document.getElementById("fav-list");
var recentListEl = document.getElementById("recent-list");

var gMiniPlayer = document.getElementById('global-mini-player');
var gMiniCover = document.getElementById('g-mini-cover');
var gMiniTitle = document.getElementById('g-mini-title');
var gMiniPlayBtn = document.getElementById('g-mini-play');

// Sidebar elements
var leftSidebar = document.getElementById('left-sidebar');
var rightSidebar = document.getElementById('right-sidebar');
var btnOpenLeft = document.getElementById('btn-open-left');
var btnOpenRight = document.getElementById('btn-open-right');
var btnCloseLeft = document.getElementById('btn-close-left');
var btnCloseRight = document.getElementById('btn-close-right');

// Pages & Panels
var appPages = ['page-search', 'page-library', 'page-liked', 'page-artists', 'page-create'];
var appPanels = ['panel-profile', 'panel-settings', 'panel-theme', 'panel-logout', 'panel-login'];

/* Global Search Refs */
var globalSearchInput = document.getElementById('global-search-input');
var searchResultsContainer = document.getElementById('search-results');
var playerSearchBtn = document.getElementById('search-btn');

/* -------- NAVIGATION -------- */
function hideAllPages() {
  appPages.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
}

function closeAllPanels() {
  appPanels.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
}

function openPage(id) {
  hideAllPages();
  closeAllPanels();
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('hidden');

  if (id === 'page-artists') renderArtistsPage();
  if (id === 'page-liked') renderLikedPage();
  if (id === 'page-library') renderLibraryPage();
}

function closePage(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function openPanel(id) {
  hideAllPages();
  closeAllPanels();
  var el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

function closePanel(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function switchView(viewName) {
  hideAllPages();
  closeAllPanels();
  if (viewName === 'player') {
    viewHome.classList.add('hidden');
    viewPlayer.classList.remove('hidden');
    viewPlayer.classList.add('flex');
    window.scrollTo(0, 0);
  } else {
    viewPlayer.classList.add('hidden');
    viewPlayer.classList.remove('flex');
    viewHome.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
}

/* Sidebar Toggle Helpers */
function openLeftSidebar() {
  if (leftSidebar) {
    leftSidebar.classList.remove('-translate-x-full');
  }
}
function closeLeftSidebar() {
  if (leftSidebar && window.innerWidth < 768) {
    leftSidebar.classList.add('-translate-x-full');
  }
}
function openRightSidebar() {
  if (rightSidebar) {
    rightSidebar.classList.remove('translate-x-full');
  }
}
function closeRightSidebar() {
  if (rightSidebar && window.innerWidth < 768) {
    rightSidebar.classList.add('translate-x-full');
  }
}

/* -------- HERO SLIDESHOW -------- */
function initHeroSlideshow() {
  renderHeroSlide();
  startSlideTimer();
}

function renderHeroSlide() {
  var slide = heroSlides[currentSlide];
  var imgEl = document.getElementById('hero-image');
  var titleEl = document.getElementById('hero-title');
  var descEl = document.getElementById('hero-desc');
  var tagEl = document.getElementById('hero-tag');
  var indicatorsEl = document.getElementById('hero-indicators');

  titleEl.classList.remove('hero-animated');
  descEl.classList.remove('hero-animated');
  imgEl.style.opacity = '0';

  setTimeout(function () {
    imgEl.src = slide.image;
    titleEl.textContent = slide.title;
    descEl.textContent = slide.desc;
    tagEl.textContent = slide.tag;

    if (slide.key === 'arijit') {
      titleEl.classList.add('neon-text-anim');
    } else {
      titleEl.classList.remove('neon-text-anim');
    }

    titleEl.classList.add('hero-animated');
    descEl.classList.add('hero-animated');
    imgEl.style.opacity = '1';
  }, 200);

  indicatorsEl.innerHTML = heroSlides.map(function (_, idx) {
    return '<div class="w-2 h-2 rounded-full transition-all duration-300 ' +
      (idx === currentSlide ? 'bg-white w-6' : 'bg-white/40') +
      '" onclick="setHeroSlide(' + idx + ')"></div>';
  }).join('');
}

function startSlideTimer() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(function () {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    renderHeroSlide();
  }, 4000);
}

function setHeroSlide(idx) {
  currentSlide = idx;
  renderHeroSlide();
  startSlideTimer();
}

function openHeroArtist() {
  var key = heroSlides[currentSlide].key;
  openArtist(key);
}

/* -------- HOME GRID -------- */
function filterArtists(category) {
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    if (category === 'all' && btn.dataset.filter === 'all') {
      btn.classList.remove('bg-slate-800', 'border', 'border-slate-600', 'text-slate-300');
      btn.classList.add('bg-purple-600', 'text-white');
    } else if (btn.dataset.filter === category) {
      btn.classList.remove('bg-slate-800', 'border', 'border-slate-600', 'text-slate-300');
      btn.classList.add('bg-purple-600', 'text-white');
    } else {
      btn.classList.remove('bg-purple-600', 'text-white');
      btn.classList.add('bg-slate-800', 'border', 'border-slate-600', 'text-slate-300');
    }
  });

  var grid = document.getElementById('artists-grid');
  grid.innerHTML = '';

  var filteredKeys = Object.keys(artistsData).filter(function (key) {
    var artist = artistsData[key];
    return category === 'all' || artist.category === category;
  });


  var displayKeys = showAllArtists ? filteredKeys : filteredKeys.slice(0, 3);

  // Update toggle button text/visibility
  var toggleBtn = document.getElementById('view-all-artists-btn');
  if (toggleBtn) {
    if (filteredKeys.length <= 3) {
      toggleBtn.classList.add('hidden');
    } else {
      toggleBtn.classList.remove('hidden');
      toggleBtn.textContent = showAllArtists ? "Show Less" : "View All Artists";
    }
  }

  displayKeys.forEach(function (key) {
    var artist = artistsData[key];
    var card = document.createElement('div');
    card.className = 'music-card group relative bg-slate-900/60 border border-slate-700/50 rounded-2xl overflow-hidden cursor-pointer h-72 flex flex-col neon-hover';
    card.onclick = function () { openArtist(key); };

    var totalTracks = (artist.tracks && artist.tracks.length) ? artist.tracks.length : 0;

    card.innerHTML =
      '<div class="relative h-48 overflow-hidden">' +
      '<img src="' + artist.gridImage + '" class="w-full h-full object-cover" onerror="this.src=\'https://placehold.co/600x600/1e1b4b/ffffff?text=Music\'">' +
      '<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>' +
      '<button class="absolute bottom-3 right-3 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">▶</button>' +
      '</div>' +
      '<div class="p-4 flex-1 flex flex-col justify-center glass-panel">' +
      '<h4 class="text-lg font-bold text-white group-hover:text-purple-300 transition truncate">' + artist.name + '</h4>' +
      '<p class="text-sm text-slate-400 truncate">' + artist.desc + ' · ' + totalTracks + ' tracks</p>' +
      '</div>';

    grid.appendChild(card);
  });
}

function toggleArtistView() {
  showAllArtists = !showAllArtists;
  // Re-run filter with current active category
  var activeBtn = document.querySelector('.filter-btn.bg-purple-600');
  var currentCategory = activeBtn ? activeBtn.dataset.filter : 'all';
  filterArtists(currentCategory);
}



function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

/* ARTISTS PAGE GRID */
function renderArtistsPage() {
  var grid = document.getElementById('artists-page-grid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.keys(artistsData).forEach(function (key) {
    var artist = artistsData[key];
    var card = document.createElement('div');
    card.className = 'music-card group bg-slate-900/70 border border-slate-700/60 rounded-2xl overflow-hidden cursor-pointer neon-hover';
    card.onclick = function () {
      openArtist(key);
      closePage('page-artists');
    };
    var totalTracks = (artist.tracks && artist.tracks.length) ? artist.tracks.length : 0;
    card.innerHTML =
      '<div class="relative h-32 overflow-hidden">' +
      '<img src="' + artist.gridImage + '" class="w-full h-full object-cover" onerror="this.src=\'https://placehold.co/600x600/1e1b4b/ffffff?text=Music\'">' +
      '<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>' +
      '</div>' +
      '<div class="p-3 flex flex-col justify-center">' +
      '<h4 class="text-sm font-bold text-white truncate">' + artist.name + '</h4>' +
      '<p class="text-[11px] text-slate-400 truncate">' + artist.category + ' · ' + totalTracks + ' tracks</p>' +
      '</div>';
    grid.appendChild(card);
  });
}

/* -------- PLAYER LOGIC -------- */
function openArtist(key) {
  var data = artistsData[key];
  if (!data) return;

  playlistTitleEl.textContent = data.name;
  playlistCategoryEl.textContent = data.category + ' Special';
  playlistDescEl.textContent = data.desc;

  var albumPhoto = document.getElementById('album-photo');
  albumPhoto.src = data.playerImage;
  miniCoverEl.src = data.playerImage;

  if (trackCountEl) {
    trackCountEl.textContent = data.tracks.length + ' tracks · Auto-next enabled';
  }

  currentPlaylist = data.tracks;
  currentIndex = 0;
  if (searchInput) searchInput.value = '';

  renderTracklist();
  loadTrack(0, false);
  switchView('player');
}

function formatTime(s) {
  if (isNaN(s)) return "0:00";
  var m = Math.floor(s / 60);
  var sec = Math.floor(s % 60).toString().padStart(2, "0");
  return m + ':' + sec;
}

function getFilteredTracks() {
  var q = (searchInput ? searchInput.value : "").toLowerCase().trim();
  return currentPlaylist
    .map(function (track, idx) { return { track: track, idx: idx }; })
    .filter(function (item) {
      if (!q) return true;
      return item.track.title.toLowerCase().includes(q) || item.track.artist.toLowerCase().includes(q);
    });
}

function performGlobalSearch() {
  var q = (globalSearchInput ? globalSearchInput.value : "").toLowerCase().trim();
  if (!searchResultsContainer) return;

  if (!q) {
    searchResultsContainer.innerHTML = '<p class="text-slate-400 text-center py-10">Type something to search across all artists...</p>';
    return;
  }

  searchResultsContainer.innerHTML = "";
  var matches = [];

  // Search across all artistsData
  Object.keys(artistsData).forEach(function (artistKey) {
    var artist = artistsData[artistKey];
    artist.tracks.forEach(function (track, trackIdx) {
      if (track.title.toLowerCase().includes(q) || artist.name.toLowerCase().includes(q)) {
        matches.push({
          track: track,
          artistKey: artistKey,
          trackIndex: trackIdx,
          artistName: artist.name
        });
      }
    });
  });

  if (matches.length === 0) {
    searchResultsContainer.innerHTML = '<p class="text-slate-400 text-center py-10">No matches found across any artist.</p>';
    return;
  }

  matches.forEach(function (m) {
    var item = document.createElement('div');
    item.className = "track-row px-4 py-3 rounded-xl cursor-pointer flex items-center justify-between border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition";
    item.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-xs">🎵</div>
        <div>
          <p class="text-sm font-semibold text-white">${m.track.title}</p>
          <p class="text-[11px] text-slate-400">${m.artistName}</p>
        </div>
      </div>
      <button class="text-purple-400 text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">Play</button>
    `;
    item.onclick = function () {
      closePage('page-search');
      openArtist(m.artistKey);
      // After openArtist, currentPlaylist is updated and first track is loaded.
      // We want to force load the specific matched track.
      loadTrack(m.trackIndex, true);
    };
    searchResultsContainer.appendChild(item);
  });
}

function isFavoriteTrack(track) {
  return favorites.some(function (f) { return f.title === track.title && f.artist === track.artist; });
}

function renderTracklist() {
  var filtered = getFilteredTracks();
  tracklistContainer.innerHTML = "";

  if (trackCountEl) {
    var total = currentPlaylist.length || 0;
    var visible = filtered.length || 0;
    if (!total) {
      trackCountEl.textContent = '0 tracks';
    } else if (visible === total) {
      trackCountEl.textContent = total + ' tracks · Auto-next enabled';
    } else {
      trackCountEl.textContent = visible + ' / ' + total + ' tracks · Filtered';
    }
  }

  if (filtered.length === 0) {
    var empty = document.createElement("div");
    empty.className = "px-4 py-6 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 text-center";
    empty.textContent = "No tracks match your search.";
    tracklistContainer.appendChild(empty);
    return;
  }

  filtered.forEach(function (item, displayIndex) {
    var track = item.track;
    var idx = item.idx;
    var row = document.createElement("div");
    row.className = "track-row px-3 py-2.5 rounded-xl cursor-pointer flex items-center justify-between border border-transparent";
    row.dataset.index = idx;

    var favActive = isFavoriteTrack(track);

    row.innerHTML = `
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-5 text-[11px] text-slate-500">${displayIndex + 1}</div>
            <div class="flex flex-col min-w-0">
              <p class="text-sm font-semibold text-white truncate">${track.title}</p>
              <p class="text-[11px] text-slate-400 truncate">${track.artist}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button data-add-playlist="${idx}" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-600/30 text-slate-400 hover:text-purple-400 transition-colors" title="Add to Playlist">
              <span class="text-xl text-center flex items-center justify-center" style="margin-top:-2px">+</span>
            </button>
            <button data-fav="${idx}" class="text-sm ${favActive ? 'text-pink-400' : 'text-slate-400'} hover:text-pink-400">♥</button>
            <button class="text-xl text-slate-400 hover:text-purple-400">⋮</button>
          </div>
        `;

    row.addEventListener('click', function () { loadTrack(idx, true); });

    var favBtn = row.querySelector('button[data-fav]');
    favBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleFavorite(track);
      renderTracklist();
    });

    var addPlaylistBtn = row.querySelector('button[data-add-playlist]');
    if (addPlaylistBtn) {
      addPlaylistBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openPlaylistSelection(track);
      });
    }

    tracklistContainer.appendChild(row);
  });

  highlightPlaying();
}

function loadTrack(idx, autoplay) {
  if (idx < 0 || idx >= currentPlaylist.length) return;
  currentIndex = idx;
  var track = currentPlaylist[idx];

  audio.src = track.url;
  playerTitleEl.textContent = track.title;
  currentTitleEl.textContent = track.title;

  updateLyrics(track.title, track.artist);
  updateQueue();
  highlightPlaying();
  addRecentPlay(track);
  updateGlobalMiniPlayer();

  if (autoplay) {
    play();
  } else {
    pause();
    progressBar.style.width = "0%";
    currentTimeEl.textContent = "0:00";
  }
}

function highlightPlaying() {
  document.querySelectorAll(".track-row").forEach(function (row) {
    row.classList.remove("is-playing");
  });
  var active = document.querySelector('.track-row[data-index="' + currentIndex + '"]');
  if (active) {
    active.classList.add("is-playing");
    active.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

function updateLyrics(title, artist) {
  if (!lyricsContentEl) return;
  lyricsContentEl.textContent = `🎵 Lyrics for: ${title}
🎤 Artist: ${artist}

(Real-time lyrics would appear here...)`;
}

function updateQueue() {
  if (!queueListEl) return;
  queueListEl.innerHTML = "";
  if (!currentPlaylist.length) return;
  for (var i = 1; i <= 3; i++) {
    var idx = (currentIndex + i) % currentPlaylist.length;
    var p = document.createElement("p");
    p.textContent = '• ' + currentPlaylist[idx].title;
    queueListEl.appendChild(p);
  }
}

function play() {
  if (!isLoggedIn) {
    openPanel('panel-login');
    return;
  }


  // Ensure AudioContext is resumed (browsers often suspend it)
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // Ensure manual unmute
  audio.muted = false;

  console.log("Attempting play. Current volume:", audio.volume, "Context state:", audioContext ? audioContext.state : 'null');

  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(function () {
      console.log("Playback started successfully.");
      isPlaying = true;
      playPauseBtn.textContent = "⏸";
      if (currentPlaylist[currentIndex]) {
        currentInfoTextEl.innerHTML =
          'Now Playing (' + (currentIndex + 1) + '/' + currentPlaylist.length + '): ' +
          '<span class="font-semibold text-cyan-300">' + currentPlaylist[currentIndex].title + '</span>';
      }
      if (albumWrapper) albumWrapper.classList.add("is-playing");
      updateGlobalMiniPlayer();
    }).catch(function (err) {
      console.error("Play error:", err);
      isPlaying = false;
      playPauseBtn.textContent = "⏯";
    });
  }
}

function pause() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.textContent = "⏯";
  if (albumWrapper) albumWrapper.classList.remove("is-playing");
  updateGlobalMiniPlayer();
}

/* -------- AUDIO VISUALIZER FUNCTIONS -------- */
function initVisualizer() {
  if (isVisualizerInitialized) return;

  try {
    // Create audio context
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 512; // Increased for better resolution

    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    // Connect audio element to analyser
    source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    isVisualizerInitialized = true;
    drawVisualizer();
  } catch (err) {
    console.error("Visualizer init error:", err);
  }
}

function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);

  if (!analyser) return;

  analyser.getByteFrequencyData(dataArray);

  // Draw only on global mini player canvas
  var globalCanvas = document.getElementById('global-visualizer-canvas');
  if (globalCanvas) {
    drawOnCanvas(globalCanvas, dataArray);
  }
}

function drawOnCanvas(canvas, data) {
  var ctx = canvas.getContext('2d');
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;

  // Clear canvas with very subtle trail effect
  ctx.fillStyle = 'rgba(2, 6, 23, 0.4)';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Compact bars configuration
  var barGap = 2;
  var barWidth = (WIDTH / (bufferLength / 2)) - barGap; // Show only half the frequency range (more relevant)
  var x = 0;

  for (var i = 0; i < bufferLength / 2; i++) {
    var val = data[i];
    // Dynamic height with a small minimum
    var barHeight = Math.max((val / 255) * HEIGHT * 0.85, 4);

    // Create a vibrant gradient for the bar
    var gradient = ctx.createLinearGradient(0, HEIGHT - barHeight, 0, HEIGHT);
    gradient.addColorStop(0, '#a855f7'); // Purple-500
    gradient.addColorStop(0.6, '#06b6d4'); // Cyan-500
    gradient.addColorStop(1, '#ec4899'); // Pink-500

    ctx.fillStyle = gradient;

    // Add glowing shadow for a "real" digital feeling
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(139, 92, 246, 0.5)';

    // Draw pill-shaped bar
    var radius = barWidth / 2;
    var xPos = x;
    var yPos = HEIGHT - barHeight;

    // Draw using rounded rect path
    ctx.beginPath();
    ctx.roundRect(xPos, yPos, barWidth, barHeight, [radius, radius, 0, 0]);
    ctx.fill();

    // Reset shadow for next bars or other drawing
    ctx.shadowBlur = 0;

    x += barWidth + barGap;
  }
}

/* Favorites & Recent */
function toggleFavorite(track) {
  var existingIndex = favorites.findIndex(function (f) {
    return f.title === track.title && f.artist === track.artist;
  });
  if (existingIndex === -1) {
    favorites.push({ title: track.title, artist: track.artist });
  } else {
    favorites.splice(existingIndex, 1);
  }
  // Save to localStorage
  localStorage.setItem('neostream_favorites', JSON.stringify(favorites));
  renderFavorites();
}

function renderFavorites() {
  if (!favListEl) return;
  favListEl.innerHTML = "";
  if (!favorites.length) {
    favListEl.innerHTML = '<p class="text-xs text-slate-500">Tap ♥ on any track to add it here.</p>';
    return;
  }
  favorites.forEach(function (f) {
    var item = document.createElement('button');
    item.className = 'w-full text-left p-2 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-xs flex justify-between items-center';
    item.innerHTML = '<span class="truncate">' + f.title + '</span><span class="ml-2 text-[10px] text-slate-400">' + f.artist + '</span>';
    item.onclick = function () { playFromLibrary(f.title, f.artist); };
    favListEl.appendChild(item);
  });
}

function addRecentPlay(track) {
  var key = track.title + '|' + track.artist;
  recentPlays = recentPlays.filter(function (k) { return k !== key; });
  recentPlays.unshift(key);
  if (recentPlays.length > 10) recentPlays.pop();
  // Save to localStorage
  localStorage.setItem('neostream_recent', JSON.stringify(recentPlays));
  renderRecent();
}

function renderRecent() {
  if (!recentListEl) return;
  recentListEl.innerHTML = "";
  if (!recentPlays.length) {
    recentListEl.innerHTML = '<p class="text-xs text-slate-500">No plays yet.</p>';
    return;
  }
  recentPlays.forEach(function (key) {
    var parts = key.split('|');
    var title = parts[0];
    var artist = parts[1];
    var p = document.createElement('button');
    p.className = 'block w-full text-left text-[11px] text-slate-300 hover:text-purple-300 truncate';
    p.textContent = title + ' – ' + artist;
    p.onclick = function () { playFromLibrary(title, artist); };
    recentListEl.appendChild(p);
  });
}

function playFromLibrary(title, artist) {
  var foundArtistKey = null;
  var foundIndex = -1;
  Object.keys(artistsData).forEach(function (key) {
    if (foundArtistKey) return;
    var tracks = artistsData[key].tracks;
    tracks.forEach(function (t, idx) {
      if (t.title === title && t.artist === artist) {
        foundArtistKey = key;
        foundIndex = idx;
      }
    });
  });
  if (foundArtistKey) {
    openArtist(foundArtistKey);
    loadTrack(foundIndex, true);
  }
}

/* Global mini player helpers */
function updateGlobalMiniPlayer() {
  if (!currentPlaylist.length) return;
  var track = currentPlaylist[currentIndex];
  gMiniCover.src = miniCoverEl.src || albumWrapper.querySelector('img').src;
  gMiniTitle.textContent = track.title;
  gMiniPlayBtn.textContent = isPlaying ? '⏸' : '⏯';
  gMiniPlayer.classList.remove('hidden');

  var gMiniAddBtn = document.getElementById('g-mini-add-playlist');
  if (gMiniAddBtn) {
    gMiniAddBtn.onclick = function (e) {
      e.stopPropagation();
      openPlaylistSelection(track);
    };
  }
}

function closeMiniPlayer() {
  pause();
  gMiniPlayer.classList.add('hidden');
}

function togglePlayFromMini() {
  if (isPlaying) pause(); else play();
}

function prevTrack() {
  if (!currentPlaylist.length) return;
  var newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = currentPlaylist.length - 1;
  loadTrack(newIndex, true);
}

function nextTrack() {
  if (!currentPlaylist.length) return;
  var newIndex = (currentIndex + 1) % currentPlaylist.length;
  loadTrack(newIndex, true);
}

/* LIKED + LIBRARY PAGES RENDER */
function renderLikedPage() {
  var container = document.getElementById('liked-list');
  if (!container) return;
  container.innerHTML = '';
  if (!favorites.length) {
    container.innerHTML = '<p class="text-slate-500">♥ Songs you like will appear here.</p>';
    return;
  }
  favorites.forEach(function (f) {
    var row = document.createElement('button');
    row.className = 'w-full text-left p-3 rounded-xl bg-slate-900/70 hover:bg-slate-800 flex justify-between items-center text-sm';
    row.innerHTML = '<span class="truncate">' + f.title + '</span><span class="ml-2 text-[11px] text-slate-400">' + f.artist + '</span>';
    row.onclick = function () { playFromLibrary(f.title, f.artist); };
    container.appendChild(row);
  });
}

function renderLibraryPage() {
  var favContainer = document.getElementById('library-fav');
  var recContainer = document.getElementById('library-recent');
  if (favContainer) {
    favContainer.innerHTML = '';
    if (!favorites.length) {
      favContainer.innerHTML = '<p class="text-xs text-slate-500">No favorites yet.</p>';
    } else {
      favorites.forEach(function (f) {
        var row = document.createElement('button');
        row.className = 'w-full text-left p-2 rounded-xl bg-slate-900/70 hover:bg-slate-800 flex justify-between items-center text-xs';
        row.innerHTML = '<span class="truncate">' + f.title + '</span><span class="ml-2 text-[10px] text-slate-400">' + f.artist + '</span>';
        row.onclick = function () { playFromLibrary(f.title, f.artist); };
        favContainer.appendChild(row);
      });
    }
  }

  if (recContainer) {
    recContainer.innerHTML = '';
    if (!recentPlays.length) {
      recContainer.innerHTML = '<p class="text-xs text-slate-500">No recent plays.</p>';
    } else {
      recentPlays.forEach(function (key) {
        var parts = key.split('|');
        var title = parts[0];
        var artist = parts[1];
        var row = document.createElement('button');
        row.className = 'w-full text-left p-2 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-[11px] text-slate-300 truncate';
        row.textContent = title + ' – ' + artist;
        row.onclick = function () { playFromLibrary(title, artist); };
        recContainer.appendChild(row);
      });
    }
  }
}

/* THEME & LOGOUT & LOGIN */
function toggleThemeReal() {
  document.body.classList.toggle('light-theme');
}

function updateAuthUI() {
  var btnLogin = document.getElementById('btn-login-sidebar');
  var btnProfile = document.getElementById('btn-profile-sidebar');
  var btnLogout = document.getElementById('btn-logout-sidebar');

  // Name elements
  var sidebarNameEl = document.getElementById('sidebar-user-name');
  var greetingNameEl = document.getElementById('greeting-name');
  var profileNameEl = document.getElementById('profile-user-name');

  if (isLoggedIn) {
    if (btnLogin) btnLogin.classList.add('hidden');
    if (btnProfile) btnProfile.classList.remove('hidden');
    if (btnLogout) btnLogout.classList.remove('hidden');

    // Update names
    if (sidebarNameEl) sidebarNameEl.textContent = currentUserName;
    if (greetingNameEl) greetingNameEl.textContent = "Good Morning, " + currentUserName;
    if (profileNameEl) profileNameEl.textContent = currentUserName;
  } else {
    if (btnLogin) btnLogin.classList.remove('hidden');
    if (btnProfile) btnProfile.classList.add('hidden');
    if (btnLogout) btnLogout.classList.add('hidden');

    // Reset names (optional, or keep as Guest)
    if (sidebarNameEl) sidebarNameEl.textContent = "Guest";
    if (greetingNameEl) greetingNameEl.textContent = "Good Morning, Guest";
  }
}

function performLogin() {
  if (!auth) {
    alert("Authentication service is unavailable.");
    return;
  }
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;
  var errorEl = document.getElementById('auth-error');

  if (!email || !password) {
    if (errorEl) {
      errorEl.textContent = "Please enter email and password.";
      errorEl.classList.remove('hidden');
    }
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      // Update last login in Firestore
      db.collection("users").doc(user.uid).set({
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).catch((err) => console.log("Firestore update error:", err));

      closePanel('panel-login');
      if (errorEl) errorEl.classList.add('hidden');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.classList.remove('hidden');
      }
    });
}

function performSignUp() {
  if (!auth) {
    alert("Authentication service is unavailable.");
    return;
  }
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;
  var errorEl = document.getElementById('auth-error');

  if (!email || !password) {
    if (errorEl) {
      errorEl.textContent = "Please enter email and password.";
      errorEl.classList.remove('hidden');
    }
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up
      var user = userCredential.user;

      // Create user document in Firestore
      db.collection("users").doc(user.uid).set({
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      })
        .then(() => {
          console.log("User profile created in Firestore");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      closePanel('panel-login');
      if (errorEl) errorEl.classList.add('hidden');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.classList.remove('hidden');
      }
    });
}

function confirmLogout() {
  pause();
  if (auth) {
    auth.signOut().then(() => {
      // Sign-out successful.
      closeAllPanels();
      hideAllPages();
      switchView('home');
    }).catch((error) => {
      // An error happened.
      console.error("Logout error", error);
    });
  }
}

/* FIREBASE AUTH STATE LISTENER */
if (auth) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      isLoggedIn = true;
      // Use email prefix as name if displayName is not set
      currentUserName = user.displayName || user.email.split('@')[0];
      updateAuthUI();
    } else {
      // User is signed out
      isLoggedIn = false;
      currentUserName = 'Guest';
      updateAuthUI();
    }
  });
}

/* -------- EVENTS -------- */
playPauseBtn.onclick = function () { isPlaying ? pause() : play(); };
prevBtn.onclick = function () { prevTrack(); };
nextBtn.onclick = function () { nextTrack(); };

audio.addEventListener("loadedmetadata", function () {
  totalTimeEl.textContent = formatTime(audio.duration);
  seekSlider.max = isNaN(audio.duration) ? 0 : audio.duration;
});

audio.addEventListener("timeupdate", function () {
  currentTimeEl.textContent = formatTime(audio.currentTime);
  seekSlider.value = audio.currentTime || 0;
  if (!isNaN(audio.duration) && audio.duration > 0) {
    var percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + '%';
  }
});

audio.addEventListener("ended", function () {
  if (!currentPlaylist.length) return;
  var nextIndex = (currentIndex + 1) % currentPlaylist.length;
  loadTrack(nextIndex, true);
});

audio.addEventListener("error", function (e) {
  console.error("Audio Error:", e.target.error);
});

seekSlider.oninput = function () {
  var t = parseFloat(seekSlider.value);
  if (!isNaN(t)) audio.currentTime = t;
};

if (volumeSlider) {
  volumeSlider.oninput = function () {
    var v = parseFloat(volumeSlider.value);
    audio.volume = isNaN(v) ? 0.5 : v;
    if (v > 0) lastVolume = v;
    muteIcon.textContent = v > 0 ? "🔊" : "🔇";
    // Save volume to localStorage
    localStorage.setItem('neostream_volume', v);
  };
}

if (muteIcon) {
  muteIcon.onclick = function () {
    if (audio.volume > 0) {
      lastVolume = audio.volume;
      audio.volume = 0;
      volumeSlider.value = 0;
      muteIcon.textContent = "🔇";
    } else {
      audio.volume = lastVolume || 0.5;
      volumeSlider.value = audio.volume;
      muteIcon.textContent = "🔊";
    }
  };
}

if (searchInput) {
  searchInput.addEventListener("input", renderTracklist);
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") renderTracklist();
  });
}

if (playerSearchBtn) {
  playerSearchBtn.addEventListener("click", renderTracklist);
}

if (globalSearchInput) {
  globalSearchInput.addEventListener("input", performGlobalSearch);
}

document.addEventListener("keydown", function (e) {
  var active = document.activeElement;
  if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) return;

  if (e.code === "Space") {
    e.preventDefault();
    isPlaying ? pause() : play();
  } else if (e.code === "ArrowRight") {
    e.preventDefault();
    if (!isNaN(audio.duration)) {
      audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
    }
  } else if (e.code === "ArrowLeft") {
    e.preventDefault();
    audio.currentTime = Math.max(audio.currentTime - 5, 0);
  }
});

// Sidebar toggle events
if (btnOpenLeft) btnOpenLeft.addEventListener('click', openLeftSidebar);
if (btnCloseLeft) btnCloseLeft.addEventListener('click', closeLeftSidebar);
if (btnOpenRight) btnOpenRight.addEventListener('click', openRightSidebar);
if (btnCloseRight) btnCloseRight.addEventListener('click', closeRightSidebar);

// Close sidebars on resize (mobile -> desktop)
window.addEventListener('resize', function () {
  if (window.innerWidth >= 768) {
    if (leftSidebar) leftSidebar.classList.remove('-translate-x-full');
    if (rightSidebar) rightSidebar.classList.remove('translate-x-full');
  } else {
    if (leftSidebar) leftSidebar.classList.add('-translate-x-full');
    if (rightSidebar) rightSidebar.classList.add('translate-x-full');
  }
});

/* -------- INIT -------- */
document.addEventListener("DOMContentLoaded", function () {
  // Load saved volume or default to 0.5
  var savedVolume = parseFloat(localStorage.getItem('neostream_volume')) || 0.5;
  audio.volume = savedVolume;
  if (volumeSlider) volumeSlider.value = savedVolume;
  lastVolume = savedVolume;

  // Alphabetical Sorting for all artist tracks
  Object.keys(artistsData).forEach(function (key) {
    if (artistsData[key].tracks) {
      artistsData[key].tracks.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
    }
  });

  currentSlide = Math.floor(Math.random() * heroSlides.length);
  initHeroSlideshow();
  filterArtists('all');
  renderFavorites();
  renderRecent();
  renderUserPlaylists();

  updateAuthUI();

  // Ensure initial sidebar state based on screen size
  if (window.innerWidth < 768) {
    if (leftSidebar) leftSidebar.classList.add('-translate-x-full');
    if (rightSidebar) rightSidebar.classList.add('translate-x-full');
  }
});

/* Touch gesture support for mobile */
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  // Only handle swipes on player view
  if (viewPlayer.classList.contains('hidden')) return;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next track
      nextTrack();
    } else {
      // Swipe right - previous track
      prevTrack();
    }
  }
}

/* Keyboard accessibility for hero banner */
const heroBanner = document.getElementById('hero-banner');
if (heroBanner) {
  heroBanner.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openHeroArtist();
    }
  });
}

/* Better error handling for audio */
audio.addEventListener('error', function (e) {
  console.error('Audio playback error:', e);
  const errorMsg = 'Unable to play this track. Please try another.';
  if (currentInfoTextEl) {
    currentInfoTextEl.innerHTML = '<span class="text-red-400">' + errorMsg + '</span>';
  }
});

/* Loading state for audio */
audio.addEventListener('loadstart', function () {
  if (playPauseBtn) playPauseBtn.classList.add('loading');
});

audio.addEventListener('canplay', function () {
  if (playPauseBtn) playPauseBtn.classList.remove('loading');
});

/* -------- PLAYLIST MANAGEMENT -------- */
function openPlaylistSelection(track) {
  var modal = document.getElementById('modal-playlist-selection');
  var list = document.getElementById('selection-playlist-list');
  if (!modal || !list) return;

  list.innerHTML = "";
  if (userPlaylists.length === 0) {
    list.innerHTML = '<p class="text-slate-500 text-center py-4 text-xs">No playlists yet.</p>';
  } else {
    userPlaylists.forEach(function (pl, index) {
      var btn = document.createElement('button');
      btn.className = "w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-between group transition-all";
      btn.innerHTML = `
        <span class="text-sm font-medium text-slate-200 group-hover:text-white">${pl.name}</span>
        <span class="text-[10px] text-slate-500 group-hover:text-slate-300">${pl.tracks.length} tracks</span>
      `;
      btn.onclick = function () {
        addTrackToPlaylist(track, index);
        closePlaylistSelection();
      };
      list.appendChild(btn);
    });
  }

  modal.classList.remove('hidden');
}

function closePlaylistSelection() {
  var modal = document.getElementById('modal-playlist-selection');
  if (modal) modal.classList.add('hidden');
}

function addTrackToPlaylist(track, playlistIndex) {
  var pl = userPlaylists[playlistIndex];
  if (!pl) return;

  // Prevent duplicates
  var exists = pl.tracks.some(function (t) { return t.title === track.title && t.artist === track.artist; });
  if (exists) {
    showToast("Song already in playlist!");
    return;
  }

  pl.tracks.push(track);
  localStorage.setItem('neostream_playlists', JSON.stringify(userPlaylists));
  showToast("Added to " + pl.name);
  renderUserPlaylists();
}

function saveNewPlaylist() {
  var nameInp = document.getElementById('playlist-name');
  var descInp = document.getElementById('create-playlist-desc');
  if (!nameInp) return;

  var name = nameInp.value.trim();
  var desc = descInp ? descInp.value.trim() : "";

  if (!name) {
    showToast("Please enter a playlist name");
    return;
  }

  var newPl = {
    name: name,
    desc: desc,
    tracks: []
  };

  userPlaylists.push(newPl);
  localStorage.setItem('neostream_playlists', JSON.stringify(userPlaylists));
  nameInp.value = "";
  if (descInp) descInp.value = "";

  showToast("Playlist created!");
  renderUserPlaylists();
  switchView('home');
}

function renderUserPlaylists() {
  var libContainer = document.getElementById('library-list');
  if (!libContainer) return;

  libContainer.innerHTML = "";
  if (userPlaylists.length === 0) {
    libContainer.innerHTML = '<p class="text-slate-500 text-xs">Your created playlists will appear here.</p>';
    return;
  }

  userPlaylists.forEach(function (pl, index) {
    var card = document.createElement('div');
    card.className = "p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all group";
    card.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-bold text-white">${pl.name}</h4>
        <button onclick="deletePlaylist(${index})" class="text-slate-500 hover:text-red-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
      </div>
      <p class="text-[11px] text-slate-400 mb-3 truncate">${pl.desc || 'No description'}</p>
      <div class="flex items-center justify-between">
        <span class="text-[10px] text-slate-500">${pl.tracks.length} tracks</span>
        <button onclick="openUserPlaylist(${index})" class="px-3 py-1.5 rounded-full bg-purple-600/20 text-purple-300 text-[10px] font-bold hover:bg-purple-600 hover:text-white transition-all">Open</button>
      </div>
    `;
    libContainer.appendChild(card);
  });
}

function deletePlaylist(index) {
  if (confirm("Delete this playlist?")) {
    userPlaylists.splice(index, 1);
    localStorage.setItem('neostream_playlists', JSON.stringify(userPlaylists));
    renderUserPlaylists();
  }
}

function openUserPlaylist(index) {
  var pl = userPlaylists[index];
  if (!pl) return;

  playlistTitleEl.textContent = pl.name;
  playlistCategoryEl.textContent = 'Custom Playlist';
  playlistDescEl.textContent = pl.desc || 'A collection of your favorite tracks.';

  var albumPhoto = document.getElementById('album-photo');
  if (albumPhoto) albumPhoto.src = 'https://placehold.co/600x600/581c87/ffffff?text=' + encodeURIComponent(pl.name);

  currentPlaylist = pl.tracks;
  currentIndex = 0;
  if (searchInput) searchInput.value = '';

  renderTracklist();
  if (currentPlaylist.length > 0) {
    loadTrack(0, false);
  }
  switchView('player');
}
