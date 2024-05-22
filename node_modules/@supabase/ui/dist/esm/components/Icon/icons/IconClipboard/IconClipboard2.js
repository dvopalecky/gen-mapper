import { jsx } from 'react/jsx-runtime';
import Clipboard from '../../../../node_modules/react-feather/dist/icons/clipboard.js';
import IconBase from '../../IconBase.js';

function IconClipboard(props) {
  return jsx(IconBase, Object.assign({
    icon: Clipboard
  }, props), void 0);
}

export { IconClipboard as default };
