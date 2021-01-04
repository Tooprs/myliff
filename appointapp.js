var firebaseConfig = {
  apiKey: "AIzaSyBT2kp4K49JZZld2x0DlPc26htXAy6ZAkU",
  authDomain: "line-bot-7769c.firebaseapp.com",
  databaseURL: "https://line-bot-7769c.firebaseio.com",
  projectId: "line-bot-7769c",
  storageBucket: "line-bot-7769c.appspot.com",
  messagingSenderId: "318833172832",
  appId: "1:318833172832:web:c7761021702b5f14bc7e05",
  measurementId: "G-SMTZR47DPY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const form = document.querySelector('#appointment');
let userId = '';
let appointDate = '';
async function main() {
 await liff.init({ liffId: "1655321436-5OMNvO2Z" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
    userId = profile.userId;
  }) 
 })
};
main();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    appointDate = form.date.value;
    doctorName = form.doctor.value;
    let Name;
    let Surname;
    let HN;
    db.collection('users').doc(userId).get().then((doc)=>{
      Name = doc.data().name;
      Surname = doc.data().surname;
      HN = doc.data().hn;
      });
    db.collection('users').doc(userId).update({
       appointment : appointDate,
       doctor : doctorName 
    }).then(() =>{
      liff.shareTargetPicker([
        {
          type: 'text',
          text: `ยื่นนัดออนไลน์
          ${Name}  ${Surname}
          ${HN}
          นัดพบแพทย์ ${doctorName}
          ${appointDate}`
        }
      ]).then((res) => {
        liff.closeWindow();
      })
      
    });
    
    
    
});

document.getElementById("share").addEventListener("click",()=>{
  liff.shareTargetPicker([{
    type : 'text',
    text : "this is from shareTargetPicker"
  }])
})