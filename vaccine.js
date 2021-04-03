

let url = 'https://script.google.com/macros/s/AKfycbyiI9nX3mCx5pQlSTNS55W2WxVroVJubgN4oFkXspBtCppU6z1p5b1glWKZucSdg8TiRQ/exec';
document.getElementById("myBtn").addEventListener("click", (e)=>{
    e.preventDefault();
    const idUpload = document.getElementById("id").value;
    let html = '';
    document.querySelector('ul').innerHTML = '<li>กรุณารอสักครู่....</li>';
    fetch(url).then(response => response.json())
    .then(data => {
        let resultName;
        let resultDate;
        let resultTime;
        let resultQueue;
        let notAllow = false;
        for(var i=0; i<data[0].data.length;i++){
            if(data[0].data[i][2] == idUpload) {
                resultName = data[0].data[i][0];
                resultDate = data[0].data[i][9];
                resultTime = data[0].data[i][10];
                resultQueue = data[0].data[i][13];
                if(resultDate ==''){
                    notAllow = true;
                }
            }
        }
        if(resultName==undefined){
            html = '<li>ไม่พบการลงทะเบียน</li>'
        }else if(notAllow==true){
            html = '<li>ขออภัย ท่านไม่เข้าเกณฑ์ฉีดวัคซีนของโรงพยาบาลในรอบนี้ กรุณารอรอบถัดไป</li>'
        }else{
            html = `<li> ${resultName}</li>
            <li>มีนัดฉีดวัคซีนวันที่ ${resultDate}</li>
            <li>เวลา ${resultTime}</li>
            <li>หมายเลขคิว ${resultQueue}</li>
            <li>กรุณานำบัตรประชาชนมาติดต่อในวันและเวลาที่กำหนด หากไม่มาจะถือว่าสละสิทธิ์</li>`
        }
        document.querySelector('ul').innerHTML = html;
        
    });
});


//id = data[0].data[i][2]
//name = data[0].data[i][0]
//date = data[0].data[i][9]
//time = data[0].data[i][10]
//queue = data[0].data[i][13]
//test: https://script.google.com/macros/s/AKfycbyAjSc-gf65WxOW6ozq9K7bmryyPUrofgE7L3Pw0NGsEjuIfV4oxJMUu_Jma9M453s-/exec
//true: https://script.google.com/macros/s/AKfycbwzsaMH1xRPhihUx4h4iZXgUsJqXg5udfOU1t6j5oKeIJv7rrAONgsuaWG-gjOJn82Y/exec
//test2: https://script.google.com/macros/s/AKfycbyiI9nX3mCx5pQlSTNS55W2WxVroVJubgN4oFkXspBtCppU6z1p5b1glWKZucSdg8TiRQ/exec