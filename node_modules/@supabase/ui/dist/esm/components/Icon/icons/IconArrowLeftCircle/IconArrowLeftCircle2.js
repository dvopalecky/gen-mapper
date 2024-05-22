import { jsx } from 'react/jsx-runtime';
import ArrowLeftCircle from '../../../../node_modules/react-feather/dist/icons/arrow-left-circle.js';
import IconBase from '../../IconBase.js';

function IconArrowLeftCircle(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowLeftCircle
  }, props), void 0);
}

export { IconArrowLeftCircle as default };
