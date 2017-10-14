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
export declare function toClipboard(text: string): boolean;
/**
 * Copy text from an input/textarea element to a user's clipboard
 * @param el The <input> or <textarea> element
 * @param preserveSelection True if text selection/highlight should be preserved after copying text
 */
export declare function fromElement(el: HTMLInputElement | HTMLTextAreaElement, preserveSelection?: boolean): boolean;
