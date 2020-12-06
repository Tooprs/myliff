const form = document.querySelector('#registerAdmin');
let userId = '';
async function main() {
 await liff.init({ liffId: "1654209143-W6aLAa0A" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
     userId = profile.userId;
   }) 
 })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userId);
    db.collection('admin').doc(form.team.value).set({
        name : form.name.value,
        lineuid : userId
    });
    
    liff.closeWindow();
});

