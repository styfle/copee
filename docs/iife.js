(function (copee) {
'use strict';

const q = (sel) => document.querySelector(sel);

const showAlert = (success) => {
    const el = success ? q('.alert-success') : q('.alert-danger');
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 3000);
};

q('#btn1').addEventListener('click', () => {
    const success = copee.toClipboard('Magic happens here');
    showAlert(success);
});

q('#btn2').addEventListener('click', () => {
    const el = q('#input2');
    const success = copee.fromElement(el);
    showAlert(success);
});

}(copee));
