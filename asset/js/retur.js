$(document).ready(() => {
    const username = localStorage.getItem('username')
    const ukuranTotebag = localStorage.getItem('ukuranTotebag')
    const hargaTotebag = localStorage.getItem('hargaTotebag')
    const idTotebag = localStorage.getItem('idTotebag')
    const alamatTotebag = localStorage.getItem('alamatTotebag')

    $('#username').append(username);
    $('#ukuranTotebag').append(ukuranTotebag);
    $('#hargaTotebag').append(hargaTotebag);
    $('#idTotebag').append(idTotebag);
    $('#alamatTotebag').append(alamatTotebag);
})