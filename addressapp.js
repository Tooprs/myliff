const form = document.querySelector('#address');
let userId = '';
async function main() {
 await liff.init({ liffId: "1655321339-DzWprLEy" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
     userId = profile.userId;
   });
   liff.sendMessages([
    {
      type: 'text',
      text: '#ตรวจสอบยา'
    }
  ])
    
 })
}
main();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let totalAddress = `${form.place.value} ${form.addressnum.value} ถนน${form.road.value} แขวง${form.district1.value} เขต${form.district2.value} จังหวัด${form.province.value} ${form.postCode.value}`;
    db.collection('users').doc(userId).update({
        address : totalAddress
        });
    
    liff.closeWindow();
});

