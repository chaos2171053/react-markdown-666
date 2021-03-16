export interface ITextApi {
  textareaIncetance: HTMLTextAreaElement | null;
  insertText: Function;
}

export default class TextApi implements ITextApi {
  textareaIncetance: HTMLTextAreaElement | null = null;
  constructor(textareaRef: { instance?: HTMLTextAreaElement | null } | null) {
    if (textareaRef && textareaRef.instance) {
      this.textareaIncetance = textareaRef.instance;
    }
  }
  insertText({
    prefix = "",
    str = "",
    suffix = "",
    callback,
  }: {
    prefix?: string;
    suffix?: string;
    str?: string;
    callback?: Function;
  }) {
    const textareaIncetance = this.textareaIncetance;
    const value = textareaIncetance?.value || "";
    const start = textareaIncetance?.selectionStart || 0;
    const end = textareaIncetance?.selectionEnd || 0;
    let newSelectionStart = 0;
    let newSelectionEnd = 0;

    if (!textareaIncetance) {
      return;
    }

    if (start === end) {
      textareaIncetance.value =
        value?.substring(0, start) +
        prefix +
        str +
        suffix +
        value?.substring(end, value.length);
      setTimeout(() => {
        newSelectionStart = start + prefix.length;
        newSelectionEnd = end + prefix.length + str.length;
        textareaIncetance.focus();
      }, 300);
    } else {
      textareaIncetance.value =
        value.substring(0, start) +
        prefix +
        value.substring(start, end) +
        suffix +
        value.substring(end, value.length);
      setTimeout(() => {
        newSelectionStart = start + prefix.length;
        newSelectionEnd = str.length + prefix.length + end;
        textareaIncetance.focus();
      }, 300);
    }

    setTimeout(() => {
      textareaIncetance.selectionStart = newSelectionStart;
      textareaIncetance.selectionEnd = newSelectionEnd;
      textareaIncetance.focus();
    }, 300);

    if (typeof callback === "function") {
      callback();
    }
  }
}
