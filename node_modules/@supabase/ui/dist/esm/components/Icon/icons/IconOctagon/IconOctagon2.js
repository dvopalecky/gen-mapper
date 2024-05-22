import { jsx } from 'react/jsx-runtime';
import Octagon from '../../../../node_modules/react-feather/dist/icons/octagon.js';
import IconBase from '../../IconBase.js';

function IconOctagon(props) {
  return jsx(IconBase, Object.assign({
    icon: Octagon
  }, props), void 0);
}

export { IconOctagon as default };
