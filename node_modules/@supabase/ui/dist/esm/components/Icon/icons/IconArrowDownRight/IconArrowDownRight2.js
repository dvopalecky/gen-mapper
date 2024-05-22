import { jsx } from 'react/jsx-runtime';
import ArrowDownRight from '../../../../node_modules/react-feather/dist/icons/arrow-down-right.js';
import IconBase from '../../IconBase.js';

function IconArrowDownRight(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowDownRight
  }, props), void 0);
}

export { IconArrowDownRight as default };
