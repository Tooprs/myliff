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
  const db = firebase.firestore().collection('users');
  let reqName;
  let reqSurname;
  let reqHN;
  let reqDoctor;
  let reqTel;
  let html = '';
  
const field = document.querySelector('input');
function myFunction(){
    html = "";
    date = field.value;
    db.where("appointment", "==", date).get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            reqName = doc.data().name;
            reqSurname = doc.data().surname;
            reqHN = doc.data().hn;
            reqDoctor = doc.data().doctor;
            reqTel = doc.data().telNum;
            html += `<li>${reqName}  ${reqSurname}  HN:${reqHN}  นัดพบแพทย์:${reqDoctor}  โทร:${reqTel}</li>`
            
        });
        document.querySelector('ul').innerHTML = html;
    })
    
}
