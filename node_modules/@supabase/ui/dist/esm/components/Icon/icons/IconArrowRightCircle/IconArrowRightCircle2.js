import { jsx } from 'react/jsx-runtime';
import ArrowRightCircle from '../../../../node_modules/react-feather/dist/icons/arrow-right-circle.js';
import IconBase from '../../IconBase.js';

function IconArrowRightCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowRightCircle
  }, props), void 0);
}

export { IconArrowRightCircle as default };
