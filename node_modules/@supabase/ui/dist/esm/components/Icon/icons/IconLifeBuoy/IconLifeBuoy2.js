import { jsx } from 'react/jsx-runtime';
import LifeBuoy from '../../../../node_modules/react-feather/dist/icons/life-buoy.js';
import IconBase from '../../IconBase.js';

function IconLifeBuoy(props) {
  return jsx(IconBase, Object.assign({
    icon: LifeBuoy
  }, props), void 0);
}

export { IconLifeBuoy as default };
