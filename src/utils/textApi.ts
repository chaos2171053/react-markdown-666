export interface ITextApi {
  textareaIncetance: HTMLTextAreaElement | null;
  insertText: Function;
}

export default class TextApi implements ITextApi {
  textareaIncetance: HTMLTextAreaElement | null = null;
  setTextareaValue: Function = () => {};
  constructor(
    textareaRef: { instance?: HTMLTextAreaElement | null } | null,
    setTextareaValue: Function
  ) {
    if (textareaRef && textareaRef.instance) {
      this.textareaIncetance = textareaRef.instance;
      this.setTextareaValue = setTextareaValue;
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
    let newVal = "";

    if (!textareaIncetance) {
      return;
    }

    if (typeof beforeInsert === "function") {
      beforeInsert();
    }

    if (start === end) {
      newVal =
        value?.substring(0, start) +
        prefix +
        str +
        suffix +
        value?.substring(end, value.length);
      this.setTextareaValue(newVal);
      newSelectionStart = start + prefix.length;
      newSelectionEnd = +str.length + prefix.length + end;
      textareaIncetance.focus();
      textareaIncetance.setSelectionRange(newSelectionStart, newSelectionEnd);
    } else {
      if (prefix === "- ") {
        this.handleNoOrderList();
      } else {
        newVal =
          value.substring(0, start) +
          prefix +
          value.substring(start, end) +
          suffix +
          value.substring(end, value.length);
        this.setTextareaValue(newVal);
        newSelectionStart = start + prefix.length;
        newSelectionEnd = prefix.length + end;
        textareaIncetance.focus();
        textareaIncetance.setSelectionRange(newSelectionStart, newSelectionEnd);
      }
    }

    if (typeof afterInsert === "function") {
      afterInsert();
    }
  }
  handleNoOrderList() {
    const textareaIncetance = this.textareaIncetance as HTMLTextAreaElement;
    const value = textareaIncetance?.value || "";
    const start = textareaIncetance?.selectionStart || 0;
    const end = textareaIncetance?.selectionEnd || 0;
    const valArr = value.slice(start, end).split("\n");

    let newValArr = [];
    let newVal = "";
    newValArr = valArr.map((strLine) => {
      strLine = "- " + strLine + "\n";
      return strLine;
    });
    newVal = newValArr.join("");
    this.setTextareaValue(
      value.substring(0, start) + newVal + value.substring(end)
    );
    textareaIncetance.focus();
    textareaIncetance.selectionStart = start + newVal.length;
  }
}
