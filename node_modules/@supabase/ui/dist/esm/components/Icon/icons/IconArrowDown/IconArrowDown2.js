import { jsx } from 'react/jsx-runtime';
import ArrowDown from '../../../../node_modules/react-feather/dist/icons/arrow-down.js';
import IconBase from '../../IconBase.js';

function IconArrowDown(props) {
  return jsx(IconBase, Object.assign({
    icon: ArrowDown
  }, props), void 0);
}

export { IconArrowDown as default };
