let userId = '';
async function main() {
 await liff.init({ liffId: "1655541441-GL6enzey" });
 liff.ready.then(() => {
   if (!liff.isLoggedIn()) {
     liff.login()
   };
   liff.getProfile().then(profile =>{
     userId = profile.userId;
     console.log(userId)
   }) 
 })
}
main();

