export interface ITextApi {
  textareaIncetance: HTMLTextAreaElement | null;
  insertText: Function;
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
    if (typeof start === "number") {
      (textareaIncetance as HTMLTextAreaElement).selectionStart = start;
    }
    if (typeof end === "number") {
      (textareaIncetance as HTMLTextAreaElement).selectionEnd = end;
    }
  }
  // TODO: split this method into different interface
  insertText({
    prefix = "",
    str = "",
    suffix = "",
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
    let newVal = "";

    if (!textareaIncetance) {
      return;
    }
    // TODO：refactor start、end、prefix、suffix，read the design pattern first
    if (start === end) {
      newVal = `${
        value?.substring(0, start) +
        prefix +
        str +
        suffix +
        value?.substring(end, value.length)
      }`;
      this.setTextareaValue(newVal);
      newSelectionStart = start + prefix.length;
      newSelectionEnd = start + str.length + suffix.length + end;
      setTimeout(() => {
        textareaIncetance.focus();
        this.setTextSelection({
          start: newSelectionStart,
          end: newSelectionEnd,
        });
      }, 100);
    } else {
      if (prefix === "- ") {
        this.makeList(false);
      } else if (prefix === "1. ") {
        this.makeList(true);
      } else {
        newVal = `${
          value.substring(0, start) +
          prefix +
          value.substring(start, end) +
          suffix +
          value.substring(end, value.length)
        }`;
        this.setTextareaValue(newVal);
        newSelectionStart = start + prefix.length;
        newSelectionEnd = prefix.length + end;
        textareaIncetance.focus();
        setTimeout(() => {
          this.setTextSelection({
            start: newSelectionStart,
            end: newSelectionEnd,
          });
        }, 100);
      }
    }
  }
  makeList(isOrder: boolean) {
    const textareaIncetance = this.textareaIncetance as HTMLTextAreaElement;
    const value = textareaIncetance?.value || "";
    const start = textareaIncetance?.selectionStart || 0;
    const end = textareaIncetance?.selectionEnd || 0;
    const valArr = value.slice(start, end).split("\n");

    let newValArr = [];
    let newVal = "";
    newValArr = valArr.map((strLine, index) => {
      strLine = `${isOrder ? index + 1 + "." : "-"} ${strLine}${
        index === valArr.length - 1 ? "" : "\n"
      }`;
      return strLine;
    });
    newVal = newValArr.join("");
    this.setTextareaValue(
      value.substring(0, start) + newVal + value.substring(end)
    );
    textareaIncetance.focus();
    //this.setTextSelection({ start: start + newVal.length });
  }
}
