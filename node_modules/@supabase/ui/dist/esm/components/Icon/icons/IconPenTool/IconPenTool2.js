import { jsx } from 'react/jsx-runtime';
import PenTool from '../../../../node_modules/react-feather/dist/icons/pen-tool.js';
import IconBase from '../../IconBase.js';

function IconPenTool(props) {
  return jsx(IconBase, Object.assign({
    icon: PenTool
  }, props), void 0);
}

export { IconPenTool as default };
