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
   
  //get userId
    let userId = '';
    async function main() {
     await liff.init({ liffId: "1655373907-EVLZxQJd" });
     liff.ready.then(() => {
       if (!liff.isLoggedIn()) {
         liff.login()
       };
       liff.getProfile().then(profile =>{
         userId = profile.userId;
       }) 
     })
    }
    main();
   
 //upload image   
    const imageUpload = document.getElementById("image");
    let inputImage;
    let url ;
    imageUpload.onchange = function() {
        let inputImage = this.files[0];
        firebase.storage().ref('public/'+ userId + '/slip.jpg').put(inputImage).then(()=>{
            firebase.storage().ref(`public/${userId}/slip.jpg`).getDownloadURL().then((imgURL) =>{
               url  = imgURL;
            })
        }).catch(error =>{
            console.log(error.message)
        })
    };

//call https callable function
const Note = document.getElementById("note").value;
document.getElementById("myBtn").addEventListener("click", (e)=>{
  e.preventDefault();
  const paymentNotify = firebase.functions().httpsCallable('paymentNotify');
  paymentNotify({id : userId, imageurl : url, note : Note});
    console.log(userId, url, Note);
  }
)
   