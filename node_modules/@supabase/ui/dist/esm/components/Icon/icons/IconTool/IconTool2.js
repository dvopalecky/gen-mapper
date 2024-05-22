import { jsx } from 'react/jsx-runtime';
import Tool from '../../../../node_modules/react-feather/dist/icons/tool.js';
import IconBase from '../../IconBase.js';

function IconTool(props) {
  return jsx(IconBase, Object.assign({
    icon: Tool
  }, props), void 0);
}

export { IconTool as default };
