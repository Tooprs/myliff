const form = document.querySelector('#address');
let userId = '';
async function main() {
 await liff.init({ liffId: "1655373907-lNj51d4k" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
     userId = profile.userId;
   });
   
    
 })
}
main();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let totalAddress = `${form.place.value} ${form.addressnum.value} ถนน${form.road.value} แขวง${form.district1.value} เขต${form.district2.value} จังหวัด${form.province.value} ${form.postCode.value}`;
    db.collection('users').doc(userId).update({
        address : totalAddress
        }).then(() =>{
          liff.sendMessages([
              {
                type: 'text',
                text: '#ตรวจสอบยา'
              }
          ])
          liff.closeWindow();
        });
    
    
});

