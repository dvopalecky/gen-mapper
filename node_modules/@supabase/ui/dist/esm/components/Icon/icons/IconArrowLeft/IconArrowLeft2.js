import { jsx } from 'react/jsx-runtime';
import ArrowLeft from '../../../../node_modules/react-feather/dist/icons/arrow-left.js';
import IconBase from '../../IconBase.js';

function IconArrowLeft(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowLeft
  }, props), void 0);
}

export { IconArrowLeft as default };
