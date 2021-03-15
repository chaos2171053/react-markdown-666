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
      textareaIncetance.selectionStart = start + prefix.length;
      textareaIncetance.selectionEnd = end + prefix.length + str.length;
    } else {
      textareaIncetance.value =
        value.substring(0, start) +
        prefix +
        value.substring(start, end) +
        suffix +
        value.substring(end, value.length);
      textareaIncetance.selectionStart = start + prefix.length;
      textareaIncetance.selectionEnd = str.length + prefix.length + end;
    }

    // TODO fix focus not working,because setSate is a asynchronous method.
    textareaIncetance.focus();

    callback && callback();
  }
}
