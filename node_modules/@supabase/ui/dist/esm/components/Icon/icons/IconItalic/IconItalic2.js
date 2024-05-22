import { jsx } from 'react/jsx-runtime';
import Italic from '../../../../node_modules/react-feather/dist/icons/italic.js';
import IconBase from '../../IconBase.js';

function IconItalic(props) {
  return jsx(IconBase, Object.assign({
    icon: Italic
  }, props), void 0);
}

export { IconItalic as default };
