var username = localStorage.getItem('username');

$('#username').html('Hello ' + username + ' Welcome');

function pilihTempat(alamat) {
    localStorage.setItem('alamatTotebag', alamat);
}