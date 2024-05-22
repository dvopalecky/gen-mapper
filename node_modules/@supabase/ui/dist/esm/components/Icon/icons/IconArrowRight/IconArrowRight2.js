import { jsx } from 'react/jsx-runtime';
import ArrowRight from '../../../../node_modules/react-feather/dist/icons/arrow-right.js';
import IconBase from '../../IconBase.js';

function IconArrowRight(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowRight
  }, props), void 0);
}

export { IconArrowRight as default };
