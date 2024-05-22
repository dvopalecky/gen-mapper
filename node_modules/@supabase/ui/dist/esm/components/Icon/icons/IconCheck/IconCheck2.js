import { jsx } from 'react/jsx-runtime';
import Check from '../../../../node_modules/react-feather/dist/icons/check.js';
import IconBase from '../../IconBase.js';

function IconCheck(props) {
  return jsx(IconBase, Object.assign({
    icon: Check
  }, props), void 0);
}

export { IconCheck as default };
