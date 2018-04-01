/**
 * Copy text to the user's clipboard
 */
export function toClipboard(text: string): boolean {
    
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
    } catch (err) {
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
export function fromElement(el: HTMLInputElement | HTMLTextAreaElement, preserveSelection?: boolean) {
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
    } catch (err) {
        success = false;
    }

    if (preserveSelection) {
        (el as any).setSelectionRange(start, end);
    }

    return success;
}
