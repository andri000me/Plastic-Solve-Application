$('#login').submit(function (event) {
    event.preventDefault();
    
    var username = $('#username').val();
    var password = $('#password').val();

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = 'halamanpilihan.html';
})
