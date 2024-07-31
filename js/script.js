let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
showDivs((slideIndex += n));
}

function showDivs(n){
    let i;
    let imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;
    
    console.log(slideIndex);

    // perulangan agar gambar muncul kalau di klik buttonnya
    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    // ini perulangan biar gambar muncul satu satu
    imgList[slideIndex - 1].style.display = "block";
}

// untuk validasi

function formValidation(){
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let interest = document.getElementById('interest').value;

    // cek name tidak boleh kosong
    if (name === ''){
        alert('Silahkan masukkan nama Anda'); //akan dieksekusi jika name kosong
        return false; 
    }
    

    // cek email tidak boleh kosong dan format harus benar
    if (email == ''){
        alert('Silahkan masukkan e-mail Anda');
        return false; 
    } else{
        let emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPatern.test(email)) {
            alert('E-mail Anda tidak valid');
            return false; 
        }
    }

    // option harus di pilih
    if (interest === 'select option') {
        alert('Pilih opsi terlebih dahulu');
        return false; 
    }

    else{
        alert('Terima Kasih. Kami akan segera menghubungi Anda'); //dieksekusi jika sukses input data
    }
}
