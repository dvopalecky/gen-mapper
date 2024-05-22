import { jsx } from 'react/jsx-runtime';
import Paperclip from '../../../../node_modules/react-feather/dist/icons/paperclip.js';
import IconBase from '../../IconBase.js';

function IconPaperclip(props) {
  return jsx(IconBase, Object.assign({
    icon: Paperclip
  }, props), void 0);
}

export { IconPaperclip as default };
