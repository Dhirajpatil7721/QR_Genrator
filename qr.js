let imgbox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrImg");
let qrtxt = document.getElementById("qrtxt");


function genrateqrcode() {
    // if(qrtxt.Value.length > 0) {
    //     qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.Value;
    //     imgbox.classList.add("show-img");
    // } 
    // else {
    //     qrtxt.classList.add('error')
    //     setTimeout(() => {
    //         qrtxt.classList.remove('error');
    //     }, 1000);
    // }
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.Value;
    imgbox.classList.add("show-img");
}
