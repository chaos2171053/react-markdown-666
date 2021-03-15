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
    templateStr = "",
    suffix = "",
  }: {
    prefix?: string;
    suffix?: string;
    templateStr?: string;
  }) {
    const textareaIncetance = this.textareaIncetance;
    const value = textareaIncetance?.value || "";
    const start = textareaIncetance?.selectionStart || 0;
    const end = textareaIncetance?.selectionEnd || 0;
    if (!textareaIncetance) {
      return;
    }
    // no select text
    if (start === end) {
      textareaIncetance.value =
        value?.substring(0, start) +
        prefix +
        templateStr +
        suffix +
        value?.substring(end, value.length);
      textareaIncetance.selectionStart = start + prefix.length;
      textareaIncetance.selectionEnd = end + prefix.length + templateStr.length;
    } else {
      textareaIncetance.value =
        value.substring(0, start) +
        prefix +
        value.substring(start, end) +
        suffix +
        value.substring(end, value.length);
      // TODO must tap space?
      textareaIncetance.selectionStart = start + prefix.length;
      textareaIncetance.selectionEnd = end + prefix.length;
    }
    // TODO fix focus not working
    textareaIncetance.focus();
  }
}
