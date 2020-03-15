var username = localStorage.getItem('username');

$('#username').html(username);

function pilihTempat(alamat) {
    localStorage.setItem('alamatTotebag', alamat);
}