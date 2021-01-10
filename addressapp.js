function sendLineNotify(message) {

  var token = ["MZXzKra8DZUev5PgHeHFsEkSVmfFhohA3iMmsg5Sgx9"]; // ***ใส่ token ของกลุ่ม Line ที่ใช้งาน***
  var options = {
  "method": "post",
  "payload": "message=" + message,
  "headers": {
  "Authorization": "Bearer " + token
  }
  };
  
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
  }
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
const form = document.querySelector('#address');
let userId = '';
let totalName = "";
let hn = '';
async function main() {
 await liff.init({ liffId: "1655541441-GL6enzey" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
     userId = profile.userId;
     db.collection('users').doc(userId).get().then(doc =>{
       name1 = doc.data().name;
       name2 = doc.data().surname;
       totalName = `คุณ${name1} ${name2}`
       hn = doc.data().hn;
       
     })
   });
   
    
 })
}
main();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let telNum = form.tel.value;
    let totalAddress = `${form.place.value} ${form.addressnum.value} ถนน${form.road.value} แขวง${form.district1.value} เขต${form.district2.value} จังหวัด${form.province.value} ${form.postCode.value}`;
    const notifyMsg = `orderยามาแล้วครับ
    ชื่อ-สกุล: ${totalName}
    HN: ${hn}
    เบอร์โทรติดต่อ:${telNum}
    ที่อยู่: ${totalAddress}`
    sendLineNotify(notifyMsg);
    db.collection('users').doc(userId).update({
        address : totalAddress
        }).then(() => {
            liff.sendMessages([
              {
                type: 'text',
                text: '#ตรวจสอบยา'
              }
            ])}).then(() => {
              liff.closeWindow();
            });

          
    
    
});

