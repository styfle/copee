function q(selector) {
    return document.querySelector(selector);
}
function showAlert(success) {
    if (success) {
        q('.alert-success').style.display = 'block';
    }
    else {
        q('.alert-danger').style.display = 'block';
    }
    setTimeout(function () {
        q('.alert-success').style.display = 'none';
        q('.alert-danger').style.display = 'none';
    }, 3000);
}
q('#copee-btn1').addEventListener('click', function (e) {
    var success = Copyee.toClipboard('Wow, "copee" works!');
    showAlert(success);
});
q('#copee-btn2').addEventListener('click', function (e) {
    var el = q('#copee-input2');
    var success = Copyee.fromElement(el);
    showAlert(success);
});
