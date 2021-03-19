import { ItextareaIncetance } from "../components/Editor";

const getKeycode = function (
  e: React.KeyboardEvent<HTMLTextAreaElement> | any
) {
  let code;
  if (e.key !== undefined) {
    code = e.key;
  } else if (e.keyIdentifier !== undefined) {
    code = e.keyIdentifier;
  } else if (e.keyCode !== undefined) {
    code = e.keyCode;
  }

  return code;
};

function stopPropagation(e: React.KeyboardEvent<HTMLTextAreaElement>) {
  e.stopPropagation();
  e.preventDefault();
}

export default function hotKey(
  e: React.KeyboardEvent<HTMLTextAreaElement>,
  textareaIncetance: ItextareaIncetance | null
) {
  const keycode = getKeycode(e);
  const target = e.target as HTMLTextAreaElement;
  const selectionStart = target.selectionStart;
  const starVal = target.value.substr(0, selectionStart);
  const valArr = starVal.split("\n");
  const currentLineStr = valArr[valArr.length - 1];
  const orderListRegex = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;

  // // enter
  if (keycode === "Enter" || keycode === 13) {
    // insert “no order list”
    if (currentLineStr.startsWith("- ")) {
      stopPropagation(e);
      // Cannot invoke an object which is possibly 'undefined'
      (textareaIncetance as any).insertText(`\n- `);
      setTimeout(() => {
        (textareaIncetance as any).setTextSelection({
          start: selectionStart + 3,
          end: selectionStart + 3,
        });
      });
      return;
    } else if (orderListRegex.test(currentLineStr)) {
      // inset order list
      // currentLineStr could be null???
      const orderNumber = parseInt(
        (currentLineStr as any).match(orderListRegex)[0].split(".")[0],
        10
      );
      if (orderNumber !== undefined) {
        stopPropagation(e);
        const prefix = `\n${orderNumber + 1}. `;
        (textareaIncetance as any).insertText(prefix);
        setTimeout(() => {
          (textareaIncetance as any).setTextSelection({
            start: selectionStart + prefix.length,
            end: selectionStart + prefix.length,
          });
        });
      }
    }
  }
}
