import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { Bold } from "./Bold";
import { Italic } from "./Italic";
import { StrikeThrough } from "./StrikeThrough";
import { HorizontalLine } from "./HorizontalLine";
import { CodeBlock } from "./CodeBlock";
import { ImageBlock } from "./ImageBlock";
import { OrderList } from "./OrderList";
import { NoOrderList } from "./NoOrderList";
import { FullScreen } from "./FullScreen";
import { LinkBlock } from "./LinkBlock";
import { Divider } from "./Divider";
// svg source https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=28649

export type ICommand<T = String> = {
  keyCommand?: string;
  name?: string;
  icon: (arg0?: any) => React.ReactElement;
  tips?: string;
  execute?: ({ textareaIncetance }: { textareaIncetance: any }) => void;
};

const getCommands = () => [
  Heading1,
  Heading2,
  Heading3,
  Divider,
  Bold,
  Italic,
  StrikeThrough,
  HorizontalLine,
  Divider,
  CodeBlock,
  ImageBlock,
  Divider,
  OrderList,
  NoOrderList,
  LinkBlock,
  Divider,
  FullScreen,
];
export { getCommands };
