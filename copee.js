var Copyee;
(function (Copyee) {
    /*
     * Copy text to the user's clipboard
     */
    function toClipboard(text) {
        // Create element and select the text
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.cols = 1;
        ta.rows = 1;
        ta.style.color = 'transparent';
        ta.style.border = 'none';
        document.body.appendChild(ta);
        ta.select();
        var success = false;
        try {
            success = document.execCommand('copy');
        }
        catch (err) {
            success = false;
        }
        // Cleanup the element we created
        document.body.removeChild(ta);
        return success;
    }
    Copyee.toClipboard = toClipboard;
    /*
     * Copy text from an input/textarea element to a user's clipboard
     */
    function fromElement(el, preserveSelection) {
        if (preserveSelection) {
            var start = el.selectionStart;
            var end = el.selectionEnd;
        }
        el.select();
        var success = false;
        try {
            success = document.execCommand('copy');
        }
        catch (err) {
            success = false;
        }
        if (preserveSelection) {
            el.setSelectionRange(start, end);
        }
        return success;
    }
    Copyee.fromElement = fromElement;
})(Copyee || (Copyee = {}));
