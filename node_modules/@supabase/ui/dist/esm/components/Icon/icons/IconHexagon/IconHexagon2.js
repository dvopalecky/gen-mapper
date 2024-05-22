import { jsx } from 'react/jsx-runtime';
import Hexagon from '../../../../node_modules/react-feather/dist/icons/hexagon.js';
import IconBase from '../../IconBase.js';

function IconHexagon(props) {
  return jsx(IconBase, Object.assign({
    icon: Hexagon
  }, props), void 0);
}

export { IconHexagon as default };
