/*! *****************************************************************************
https://github.com/styfle/copee
Copyright (c) styfle. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
***************************************************************************** */
/**
 * Copy text to the user's clipboard
 */
export function toClipboard(text) {
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
/**
 * Copy text from an input/textarea element to a user's clipboard
 * @param el The <input> or <textarea> element
 * @param preserveSelection True if text selection/highlight should be preserved after copying text
 */
export function fromElement(el, preserveSelection) {
    let start = 0;
    let end = 0;
    let success = false;
    if (preserveSelection) {
        start = el.selectionStart;
        end = el.selectionEnd;
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
