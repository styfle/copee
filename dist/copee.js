"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copy text to the user's clipboard
 */
function toClipboard(text) {
    // Create element and select the text
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.cols = 1;
    ta.rows = 1;
    ta.style.color = 'transparent';
    ta.style.border = 'none';
    document.body.appendChild(ta);
    ta.select();
    let success = false;
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
exports.toClipboard = toClipboard;
/**
 * Copy text from an input/textarea element to a user's clipboard
 * @param el The <input> or <textarea> element
 * @param preserveSelection True if text selection/highlight should be preserved after copying text
 */
function fromElement(el, preserveSelection) {
    let start = 0;
    let end = 0;
    let success = false;
    if (preserveSelection) {
        start = el.selectionStart || 0;
        end = el.selectionEnd || 0;
    }
    el.select();
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
exports.fromElement = fromElement;
