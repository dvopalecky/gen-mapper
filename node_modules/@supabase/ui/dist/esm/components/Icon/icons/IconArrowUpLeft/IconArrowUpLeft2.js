import { jsx } from 'react/jsx-runtime';
import ArrowUpLeft from '../../../../node_modules/react-feather/dist/icons/arrow-up-left.js';
import IconBase from '../../IconBase.js';

function IconArrowUpLeft(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowUpLeft
  }, props), void 0);
}

export { IconArrowUpLeft as default };
