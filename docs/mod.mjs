import { toClipboard, fromElement } from 'https://cdn.jsdelivr.net/npm/copee/dist/copee.mjs';

const q = (sel) => document.querySelector(sel);

const showAlert = (success) => {
    const el = success ? q('.alert-success') : q('.alert-danger');
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 3000);
}

q('#btn1').addEventListener('click', function (e) {
    const success = toClipboard('Magic happens here');
    showAlert(success);
});

q('#btn2').addEventListener('click', function (e) {
    const el = q('#input2');
    const success = fromElement(el);
    showAlert(success);
});
