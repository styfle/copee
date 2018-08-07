(function (copee) {
    'use strict';

    function q(sel) { return document.querySelector(sel) }

    function showAlert(success) {
        const el = success ? q('.alert-success') : q('.alert-danger');
        el.style.display = 'block';
        setTimeout(function () { el.style.display = 'none' }, 3000);
    };

    q('#btn1').addEventListener('click', function () {
        const success = copee.toClipboard('Magic happens here');
        showAlert(success);
    });

    q('#btn2').addEventListener('click', function () {
        const el = q('#input2');
        const success = copee.fromElement(el);
        showAlert(success);
    });

}(copee));
