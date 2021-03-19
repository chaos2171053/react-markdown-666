export interface ITextApi {
  textareaIncetance: HTMLTextAreaElement | null;
  insertText: Function;
  setTextSelection: Function;
  getTextSelection: Function;
  getTextBySelection: Function;
  getText: Function;
}

export default class TextApi implements ITextApi {
  textareaIncetance: HTMLTextAreaElement | null = null;
  setTextareaValue: Function = () => {};
  constructor(
    textareaRef: { instance?: HTMLTextAreaElement | null } | null,
    setValue: Function
  ) {
    if (textareaRef && textareaRef.instance) {
      this.textareaIncetance = textareaRef.instance;
      this.setTextareaValue = setValue;
    }
  }
  setTextSelection({ start, end }: { start?: number; end?: number }) {
    const textareaIncetance = this.textareaIncetance;
    textareaIncetance?.focus();
    if (typeof start === "number") {
      (textareaIncetance as HTMLTextAreaElement).selectionStart = start;
    }
    if (typeof end === "number") {
      (textareaIncetance as HTMLTextAreaElement).selectionEnd = end;
    }
  }
  insertText(insertValue: string) {
    const { selectionStart, selectionEnd } = this.getTextSelection();
    const preValue = this.textareaIncetance?.value || "";
    const newVal = `${
      preValue?.substring(0, selectionStart) +
      insertValue +
      preValue?.substring(selectionEnd as number)
    }`;
    this.setTextareaValue(newVal);
  }

  getTextSelection() {
    return {
      selectionStart: this.textareaIncetance?.selectionStart,
      selectionEnd: this.textareaIncetance?.selectionEnd,
    };
  }

  getTextBySelection({
    selectionStart = 0,
    selectionEnd = 0,
  }: {
    selectionStart?: number;
    selectionEnd?: number;
  }) {
    const textareaIncetance = this.textareaIncetance;
    const value = textareaIncetance?.value || "";
    if (selectionStart !== undefined && typeof selectionStart !== "number") {
      throw new Error("selectionStart must be a number type");
    }
    if (selectionEnd !== undefined && typeof selectionEnd !== "number") {
      throw new Error("end must be a number type");
    }
    return value.substring(selectionStart, selectionEnd);
  }
  getText() {
    return this.textareaIncetance?.value;
  }
}
