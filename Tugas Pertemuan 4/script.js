function ftambah(){
    var angka1 = document.getElementById("angka1");
    var angka2= document.getElementById("angka2");
    var hasil = document.getElementById("hasil");
    hasil.value = Number(angka1.value)+Number(angka2.value);
}

function fkurang(){
    hasil.value = Number(angka1.value)-Number(angka2.value);
}
function fkali(){
    hasil.value = Number(angka1.value)*Number(angka2.value);
}
function fbagi(){
    hasil.value = Number(angka1.value)/Number(angka2.value);
}
