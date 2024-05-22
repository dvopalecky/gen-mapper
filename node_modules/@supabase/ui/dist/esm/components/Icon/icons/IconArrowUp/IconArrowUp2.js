import { jsx } from 'react/jsx-runtime';
import ArrowUp from '../../../../node_modules/react-feather/dist/icons/arrow-up.js';
import IconBase from '../../IconBase.js';

function IconArrowUp(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowUp
  }, props), void 0);
}

export { IconArrowUp as default };
