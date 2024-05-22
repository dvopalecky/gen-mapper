import { jsx } from 'react/jsx-runtime';
import Box from '../../../../node_modules/react-feather/dist/icons/box.js';
import IconBase from '../../IconBase.js';

function IconBox(props) {
  return jsx(IconBase, Object.assign({
    icon: Box
  }, props), void 0);
}

export { IconBox as default };
