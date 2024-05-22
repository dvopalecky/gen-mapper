import { jsx } from 'react/jsx-runtime';
import Key from '../../../../node_modules/react-feather/dist/icons/key.js';
import IconBase from '../../IconBase.js';

function IconKey(props) {
  return jsx(IconBase, Object.assign({
    icon: Key
  }, props), void 0);
}

export { IconKey as default };
