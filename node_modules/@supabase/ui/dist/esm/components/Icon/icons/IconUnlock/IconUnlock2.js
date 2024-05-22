import { jsx } from 'react/jsx-runtime';
import Unlock from '../../../../node_modules/react-feather/dist/icons/unlock.js';
import IconBase from '../../IconBase.js';

function IconUnlock(props) {
  return jsx(IconBase, Object.assign({
    icon: Unlock
  }, props), void 0);
}

export { IconUnlock as default };
