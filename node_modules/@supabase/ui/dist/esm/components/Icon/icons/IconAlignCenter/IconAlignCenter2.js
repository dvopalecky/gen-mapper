import { jsx } from 'react/jsx-runtime';
import AlignCenter from '../../../../node_modules/react-feather/dist/icons/align-center.js';
import IconBase from '../../IconBase.js';

function IconAlignCenter(props) {
  return jsx(IconBase, Object.assign({
    icon: AlignCenter
  }, props), void 0);
}

export { IconAlignCenter as default };
