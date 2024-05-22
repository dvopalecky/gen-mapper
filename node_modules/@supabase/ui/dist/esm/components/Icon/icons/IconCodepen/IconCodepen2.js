import { jsx } from 'react/jsx-runtime';
import Codepen from '../../../../node_modules/react-feather/dist/icons/codepen.js';
import IconBase from '../../IconBase.js';

function IconCodepen(props) {
  return jsx(IconBase, Object.assign({
    icon: Codepen
  }, props), void 0);
}

export { IconCodepen as default };
