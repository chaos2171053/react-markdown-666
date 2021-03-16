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
  const starVal = target.value.substr(0, target.selectionStart);
  const valArr = starVal.split("\n");
  const currentLineStr = valArr[valArr.length - 1];
  // enter
  if (keycode === "Enter" || keycode === 13) {
    // insert “no order list”
    if (/^-\s/.test(currentLineStr)) {
      stopPropagation(e);
      // Cannot invoke an object which is possibly 'undefined'
      (textareaIncetance as any).setTextareaValue(starVal + `\n- `);
    }
  }
}
