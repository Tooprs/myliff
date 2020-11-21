const form = document.querySelector('#register');
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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userId);
    db.collection('users').doc(userId).set({
        hn : form.hn.value,
        name : form.name.value,
        surname : form.surname.value,
        personId : form.id.value
    });
    fetch(`https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-b053d3370a5f863a61a5a06ca2076b6f`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer VEf+ipeUMMp/QonudMHpdyHPWfCIk24QiHpKMzdXpqPv2J3/US7PzbUY0GypLLVc6/4RbBse0rNdQjk86H9axkx02YojOgDiTDoGx7dtYIHMwijYljImXXmZZ8KryIkiXVYZW+B+XKLR6PDNXSqGCAdB04t89/1O/w1cDnyilFU='
    }),
    liff.closeWindow();
});

