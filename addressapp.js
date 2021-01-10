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
async function main() {
 await liff.init({ liffId: "1655541441-GL6enzey" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
     userId = profile.userId;
     
       
     })
   });
   
    
 }

main();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let telNum = form.tel.value;
    let totalAddress = `${form.place.value} ${form.addressnum.value} ถนน${form.road.value} แขวง${form.district1.value} เขต${form.district2.value} จังหวัด${form.province.value} ${form.postCode.value}`;
    const drugorderNotify = firebase.functions().httpsCallable('drugorderNotify');
    drugorderNotify({id:userId, tel:telNum, address:totalAddress}).then(()=>{
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
    }) 
    

          
    
    
});

