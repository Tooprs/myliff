const form = document.querySelector('#appointment');
let appointDate = '';
async function main() {
 await liff.init({ liffId: "1655321436-5OMNvO2Z" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   }; 
 })
}
main();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    appointDate = form.date.value;
    console.log(appointDate);
    db.collection('appointment').doc(appointDate).set({
        hn : form.hn.value,
        name : form.name.value,
        surname : form.surname.value,
        doctor : form.doctor.value
    });
    
    //liff.closeWindow();
});

