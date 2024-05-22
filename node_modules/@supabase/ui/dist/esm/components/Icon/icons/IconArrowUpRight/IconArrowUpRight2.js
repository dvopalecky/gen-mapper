import { jsx } from 'react/jsx-runtime';
import ArrowUpRight from '../../../../node_modules/react-feather/dist/icons/arrow-up-right.js';
import IconBase from '../../IconBase.js';

function IconArrowUpRight(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowUpRight
  }, props), void 0);
}

export { IconArrowUpRight as default };
