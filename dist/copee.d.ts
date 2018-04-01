/**
 * Copy text to the user's clipboard
 */
export declare function toClipboard(text: string): boolean;
/**
 * Copy text from an input/textarea element to a user's clipboard
 * @param el The <input> or <textarea> element
 * @param preserveSelection True if text selection/highlight should be preserved after copying text
 */
export declare function fromElement(el: HTMLInputElement | HTMLTextAreaElement, preserveSelection?: boolean): boolean;
