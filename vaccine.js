
let url = 'https://script.google.com/macros/s/AKfycbyv1KGVBO30ncssxgxo5EJZfHpLezSs94reEb4Q0PJjlhpJJZyx7CfyRQOdR-IEVQYuug/exec';
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
        let resultPlace;
        //let notAllow = false;
        for(var i=0; i<data[0].data.length;i++){
            if(data[0].data[i][1] == idUpload) {
                resultName = data[0].data[i][0];
                resultDate = data[0].data[i][4];
                resultTime = data[0].data[i][5];
                resultPlace = data[0].data[i][6];
                resultQueue = data[0].data[i][7];
                // if(resultDate ==''){
                //     notAllow = true;
                // }
            }
        }
        if(resultName==undefined){
            html = '<li>ไม่พบการลงทะเบียน</li> <li>กรุณาตรวจสอบความถูกต้องของเลขที่กรอกอีกครั้ง</li><li>(หากท่านลงทะเบียนแล้ว กรุณาติดต่อเจ้าหน้าที่ ณ จุดประชาสัมพันธ์)</li>'
        }
        else{
            html = `<li> ${resultName}</li>
            <li>มีนัดฉีดวัคซีนวันที่ ${resultDate}</li>
            <li>เวลา ${resultTime}</li>
            <li>สถานที่ ${resultPlace}</li>
            <li>ลำดับสำหรับตรวจสอบรายชื่อ ${resultQueue}</li>
            <li>ตรวจสอบลำดับชื่อและยื่นลำดับให้เจ้าหน้าที่ลงทะเบียน</li>`
        }
        document.querySelector('ul').innerHTML = html;
        
    });
});

//id = data[0].data[i][1]
//name = data[0].data[i][0]
//date = data[0].data[i][4]
//time = data[0].data[i][5]
//queue = data[0].data[i][7]
//place = data[0].data[i][6]
//test: https://script.google.com/macros/s/AKfycbyAjSc-gf65WxOW6ozq9K7bmryyPUrofgE7L3Pw0NGsEjuIfV4oxJMUu_Jma9M453s-/exec
//true: https://script.google.com/macros/s/AKfycbwzsaMH1xRPhihUx4h4iZXgUsJqXg5udfOU1t6j5oKeIJv7rrAONgsuaWG-gjOJn82Y/exec
//previously use: https://script.google.com/macros/s/AKfycbyiI9nX3mCx5pQlSTNS55W2WxVroVJubgN4oFkXspBtCppU6z1p5b1glWKZucSdg8TiRQ/exec
//https://script.google.com/macros/s/AKfycbxIBTqU_8Q-A_ou_Fzjm-BF-5M7cT6mlCcVrjePlpKR39unXX9hatjXxCRl_-JV6Syd/exec

//new : https://script.google.com/macros/s/AKfycbyv1KGVBO30ncssxgxo5EJZfHpLezSs94reEb4Q0PJjlhpJJZyx7CfyRQOdR-IEVQYuug/exec
