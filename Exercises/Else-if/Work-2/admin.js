let adminName = prompt('Name?');

if (adminName == "Admin") {
    let password = prompt('Password?');

    if (password == "TheMaster"){
        alert('Welcome!')
    } else if (password == null) {
        alert('Canceled.')
    }else {
        alert('Wrong password');
    };
} else if (adminName == null) {
    alert('canceled');
} else {
    alert("I don't know you");
};