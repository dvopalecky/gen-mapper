import { jsx } from 'react/jsx-runtime';
import X from '../../../../node_modules/react-feather/dist/icons/x.js';
import IconBase from '../../IconBase.js';

function IconX(props) {
  return jsx(IconBase, Object.assign({
    icon: X
  }, props), void 0);
}

export { IconX as default };
