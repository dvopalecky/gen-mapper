import { jsx } from 'react/jsx-runtime';
import ArrowDownCircle from '../../../../node_modules/react-feather/dist/icons/arrow-down-circle.js';
import IconBase from '../../IconBase.js';

function IconArrowDownCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowDownCircle
  }, props), void 0);
}

export { IconArrowDownCircle as default };
