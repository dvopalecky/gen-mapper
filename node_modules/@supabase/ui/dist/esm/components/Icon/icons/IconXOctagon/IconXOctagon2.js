import { jsx } from 'react/jsx-runtime';
import XOctagon from '../../../../node_modules/react-feather/dist/icons/x-octagon.js';
import IconBase from '../../IconBase.js';

function IconXOctagon(props) {
  return jsx(IconBase, Object.assign({
    icon: XOctagon
  }, props), void 0);
}

export { IconXOctagon as default };
