const form = document.querySelector('#address');
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
    let totalAddress = `${form.place.value} ${form.addressnum.value} ${form.road.value} ${form.district1.value} ${form.district2.value} ${form.province.value} ${form.postCode.value}`;
    db.collection('users').doc(userId).update({
        address : totalAddress
        });
    
    liff.closeWindow();
});

