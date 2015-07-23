module Copee {
    
    /*
     * Copy text to the user's clipboard
     */
    export function toClipboard(text: string): boolean {
        
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
        } catch (err) {
            success = false;
        }
        
        // Cleanup the element we created
        document.body.removeChild(ta);
        
        return success;
    }

    /*
     * Copy text from an input/textarea element to a user's clipboard
     */
    export function fromElement(el: HTMLInputElement | HTMLTextAreaElement, preserveSelection?: boolean) {
        if (preserveSelection) {
            var start = el.selectionStart;
            var end = el.selectionEnd;
        }

        el.select();

        var success = false;
        try {
            success = document.execCommand('copy');
        } catch (err) {
            success = false;
        }

        if (preserveSelection) {
            el.setSelectionRange(start, end);
        }

        return success;
    }
}