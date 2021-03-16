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
    afterInsert,
    beforeInsert,
  }: {
    prefix?: string;
    suffix?: string;
    str?: string;
    afterInsert?: Function;
    beforeInsert?: Function;
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

    if (typeof beforeInsert === "function") {
      beforeInsert();
    }
    if (start === end) {
      textareaIncetance.value =
        value?.substring(0, start) +
        prefix +
        str +
        suffix +
        value?.substring(end, value.length);
      newSelectionStart = start + prefix.length;
      newSelectionEnd = +str.length + prefix.length + end;
    } else {
      textareaIncetance.value =
        value.substring(0, start) +
        prefix +
        value.substring(start, end) +
        suffix +
        value.substring(end, value.length);
      newSelectionStart = start + prefix.length;
      newSelectionEnd = prefix.length + end;
    }
    setTimeout(() => {
      textareaIncetance.setSelectionRange(newSelectionStart, newSelectionEnd);
      textareaIncetance.focus();
      if (typeof afterInsert === "function") {
        afterInsert();
      }
    }, 300);
  }
}
