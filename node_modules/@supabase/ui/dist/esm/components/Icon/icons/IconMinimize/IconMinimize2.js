import { jsx } from 'react/jsx-runtime';
import Minimize from '../../../../node_modules/react-feather/dist/icons/minimize.js';
import IconBase from '../../IconBase.js';

function IconMinimize(props) {
  return jsx(IconBase, Object.assign({
    icon: Minimize
  }, props), void 0);
}

export { IconMinimize as default };
