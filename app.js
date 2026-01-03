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
      { title: "Banjaara", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/banjarra.mp3" },
      { title: "Baarish", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/baarish.mp3" },
      { title: "Muskurane", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/muskurane.mp3" },
      { title: "Phir Mohabbat", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/phir mohbaat.mp3" },
      { title: "Dard Dilo Ke", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Dard Dilo Ke The .mp3" },
      { title: "Tu Hi Tu", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Tu Hi Tu.mp3" },
      { title: "Tu Dua Hai Dua", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Tu Dua Hai Dua.mp3" },
      { title: "Hothon Se Chhu Lo Tum", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Hothon_Se_Chhu_Lo_Tum.mp3" },

      { title: "Jab Tum Chaho", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Jab Tum Chaho .mp3" },

      { title: "Dil Awara", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Dil Awara.mp3" },
      { title: "Sanam Teri Kasam - Reprise", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Sanam Teri Kasam .mp3" },
      { title: "Ek Villain Mashup", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Ek Villain .mp3" },
      { title: "Kabira-Naina", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Kabira - Naina.mp3" },
      { title: "Aami Sudhu Cheyechi Tomay", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Ami-Sudhu.mp3" },
      { title: "Kabhi Jo Badal Barse", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Kabhi Jo Badal Barse .mp3" },
      { title: "Hai Yehi Zindagi", artist: "Mohammed Irfan", url: "Artist Songs/mmd irfan/Hai Yehi Zindagi Feat.mp3" }
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
      // Placeholders for remaining tracks from original list if not found
     
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
      { title: "Dilbar", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "O Saki Saki", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Kala Chashma", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Aankh Marey", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Garmi", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Coca Cola", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Mile Ho Tum", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Badri Ki Dulhania", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Chamma Chamma", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Cheez Badi", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Kar Gayi Chull", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Main Tera Boyfriend", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "London Thumakda", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Sunny Sunny", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "High Rated Gabru", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Hook Up Song", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Manali Trance", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Mehbooba", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Laal Ghaghra", artist: "Neha Kakkar", url: SAMPLE_MP3 },
      { title: "Naagin", artist: "Neha Kakkar", url: SAMPLE_MP3 }
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
      { title: "Jugnu", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Kar Gayi Chull", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Genda Phool", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "DJ Waley Babu", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Proper Patola", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Mercy", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Buzz", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "The Humma Song", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Abhi Toh Party Shuru Hui Hai", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Tareefan", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Paagal", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Voodoo", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Kamaal Hai", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Ladki Beautiful", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Sanak", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Heartless", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "She Move It Like", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Bad Boy", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Breakup Song", artist: "Badshah", url: SAMPLE_MP3 },
      { title: "Kala Chashma (Remix)", artist: "Badshah", url: SAMPLE_MP3 }
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
      { title: "Lahore", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "High Rated Gabru", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Suit Suit", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Made in India", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Ishare Tere", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Ban Ja Rani", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Patola", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Raat Kamaal Hai", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Fashion", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Morni Banke", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Enni Soni", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Slowly Slowly", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Tere Te", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Black", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Downtown", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Yaar Mod Do", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Nach Meri Rani", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Nachenge Saari Raat", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "Kudi Gali Ch", artist: "Guru Randhawa", url: SAMPLE_MP3 },
      { title: "My Darling", artist: "Guru Randhawa", url: SAMPLE_MP3 }
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
      { title: "Anti-Hero", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Blank Space", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Shake It Off", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "All Too Well", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Cruel Summer", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Love Story", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Style", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "You Belong With Me", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Cardigan", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "August", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Delicate", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Wildest Dreams", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "I Knew You Were Trouble", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Lover", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Bad Blood", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Enchanted", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Red", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Getaway Car", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "New Year's Day", artist: "Taylor Swift", url: SAMPLE_MP3 },
      { title: "Cornelia Street", artist: "Taylor Swift", url: SAMPLE_MP3 }
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
      { title: "Shape of You", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Perfect", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Bad Habits", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Thinking Out Loud", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Castle on the Hill", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "The A Team", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Photograph", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Galway Girl", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "I Don't Care", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Sing", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Lego House", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Curtains", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Eyes Closed", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Shivers", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Overpass Graffiti", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Tides", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "First Times", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Celestial", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Life Goes On", artist: "Ed Sheeran", url: SAMPLE_MP3 },
      { title: "Bad Habits (Acoustic)", artist: "Ed Sheeran", url: SAMPLE_MP3 }
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
      { title: "Dil Diyan Gallan", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Tera Hone Laga Hoon", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Tajdar-e-Haram", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Dil Meri Na Sune", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Jeene Laga Hoon", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Pehli Nazar Mein", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Piya O Re Piya", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Main Rang Sharbaton Ka", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Tere Bin", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Bakhuda Tumhi Ho", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Tere Liye", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Tera Naam Doon", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Be Intehaan", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Rang Jo Lagyo", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Meri Kahani", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Hona Tha Pyar", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Bairiyaa", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Aa Bhi Ja Mere Mehermaan", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Tu Mohabbat Hai", artist: "Atif Aslam", url: SAMPLE_MP3 },
      { title: "Jal Pari", artist: "Atif Aslam", url: SAMPLE_MP3 }
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
      { title: "Abhi Mujh Mein Kahin", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Suraj Hua Maddham", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Sandese Aate Hai", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Tu Fiza Hai", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Ishq Mein Ek Pal", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Maine Jisko Chaaha", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Rabba Mere Rabba", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "O Mahive", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Chain Ho Chain Ho", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Dil Mein Jo Baat", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Jab Ladka Ho Kunwara", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Pyar Mein Tere", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Chamakti Shaam Hai", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Ek Haseen Ladki Se", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Hello Brother", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Soniye Ve", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "I Love You Bol Daal", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Woh Aankh Hi Kya", artist: "Sonu Nigam", url: SAMPLE_MP3 },
      { title: "Bijuria", artist: "Sonu Nigam", url: SAMPLE_MP3 }
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
      { title: "Beedi", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Sheila Ki Jawani", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Kamli", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Chhaliya", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Lucky Boy", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Crazy Kiya Re", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Ainvayi Ainvayi", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Aaja Nachle", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Whats Goin' On", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Mere Haath Mein", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Hey Shona", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Hum To Aise Hain", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Dhadak Dhadak", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Dil Dance Maare", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Chokra Jawaan", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Dance Pe Chance", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Dekho Na", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Je T'aime", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Discowale Khisko", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 },
      { title: "Dhoom Machale", artist: "Sunidhi Chauhan", url: SAMPLE_MP3 }
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
      { title: "Tujhe Kitna Chahne Lage", artist: "KK", url: SAMPLE_MP3 },
      { title: "Zara Sa", artist: "KK", url: SAMPLE_MP3 },
      { title: "Dil Ibaadat", artist: "KK", url: SAMPLE_MP3 },
      { title: "Pal", artist: "KK", url: SAMPLE_MP3 },
      { title: "Yaaron", artist: "KK", url: SAMPLE_MP3 },
      { title: "Tadap Tadap Ke", artist: "KK", url: SAMPLE_MP3 },
      { title: "Aankhon Mein Teri", artist: "KK", url: SAMPLE_MP3 },
      { title: "Khuda Jaane", artist: "KK", url: SAMPLE_MP3 },
      { title: "Tu Hi Meri Shab Hai", artist: "KK", url: SAMPLE_MP3 },
      { title: "Aashayein", artist: "KK", url: SAMPLE_MP3 },
      { title: "Alvida", artist: "KK", url: SAMPLE_MP3 },
      { title: "Main Ne Dil Se Kaha", artist: "KK", url: SAMPLE_MP3 },
      { title: "Dus Bahane", artist: "KK", url: SAMPLE_MP3 },
      { title: "Bas Ek Pal", artist: "KK", url: SAMPLE_MP3 },
      { title: "Koi Kahe Kehta Rahe", artist: "KK", url: SAMPLE_MP3 },
      { title: "O Humdum Suniyo Re", artist: "KK", url: SAMPLE_MP3 },
      { title: "Dola Re Dola", artist: "KK", url: SAMPLE_MP3 },
      { title: "Kya Mujhe Pyaar Hai", artist: "KK", url: SAMPLE_MP3 },
      { title: "Piya Aaye Na", artist: "KK", url: SAMPLE_MP3 },
      { title: "Tu Jo Mila", artist: "KK", url: SAMPLE_MP3 }
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

  Object.keys(artistsData).forEach(function (key) {
    var artist = artistsData[key];
    if (category === 'all' || artist.category === category) {
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
    }
  });
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

  // Initialize visualizeron first play (user interaction required
  if (!isVisualizerInitialized) {
    initVisualizer();
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
