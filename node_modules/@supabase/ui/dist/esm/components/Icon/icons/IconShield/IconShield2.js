import { jsx } from 'react/jsx-runtime';
import Shield from '../../../../node_modules/react-feather/dist/icons/shield.js';
import IconBase from '../../IconBase.js';

function IconShield(props) {
  return jsx(IconBase, Object.assign({
    icon: Shield
  }, props), void 0);
}

export { IconShield as default };
