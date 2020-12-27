const form = document.querySelector('#register');

let userId = '';
async function main() {
 await liff.init({ liffId: "1655373907-XvokqV8O" });
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

form.addEventListener('submit', (e) => {
   // e.preventDefault();
  //console.log(userId);
    db.collection('users').doc(userId).set({
        hn : document.getElementById("hn").value,
        name : document.getElementById("name").value,
        surname : document.getElementById("surname").value,
        lineId : document.getElementById("lineid").value,
        telNum : document.getElementById("tel").value
    }).then(() =>{
      liff.closeWindow()
    });
  });

