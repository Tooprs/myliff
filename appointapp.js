const form = document.querySelector('#appointment');
let userId = '';
let appointDate = '';
async function main() {
 await liff.init({ liffId: "1655373907-pEmwWrVk" });
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
    db.collection('users').doc(userId).update({
       appointment : appointDate,
       doctor : doctorName 
    }).then(() =>{
      liff.closeWindow();
    });
    
    
    
});

