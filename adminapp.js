const form = document.querySelector('#registerAdmin');
let userId = '';
async function main() {
 await liff.init({ liffId: "1655319157-krO4QyBY" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
     userId = profile.userId;
   }) 
 })
}ว
main();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userId);
    db.collection(form.team.value).doc(userId).set({
        name : form.name.value,
        });
    
    liff.closeWindow();
});

