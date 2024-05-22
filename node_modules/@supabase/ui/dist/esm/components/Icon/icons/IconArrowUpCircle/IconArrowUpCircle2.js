import { jsx } from 'react/jsx-runtime';
import ArrowUpCircle from '../../../../node_modules/react-feather/dist/icons/arrow-up-circle.js';
import IconBase from '../../IconBase.js';

function IconArrowUpCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowUpCircle
  }, props), void 0);
}

export { IconArrowUpCircle as default };
