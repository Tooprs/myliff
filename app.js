const form = document.querySelector('#register');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('users').doc('1').set({
        hn : form.hn.value,
        name : form.name.value,
        surname : form.surname.value
    })
});

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
main();