import { Heading1 } from "./Heading1";
// svg source https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=28649

export type ICommand<T = String> = {
  keyCommand?: string;
  name?: string;
  icon: () => React.ReactElement;
};

const getCommands = () => [Heading1];
export { getCommands };
