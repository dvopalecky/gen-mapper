import { jsx } from 'react/jsx-runtime';
import MoreHorizontal from '../../../../node_modules/react-feather/dist/icons/more-horizontal.js';
import IconBase from '../../IconBase.js';

function IconMoreHorizontal(props) {
  return jsx(IconBase, Object.assign({
    icon: MoreHorizontal
  }, props), void 0);
}

export { IconMoreHorizontal as default };
