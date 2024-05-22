import { jsx } from 'react/jsx-runtime';
import FileMinus from '../../../../node_modules/react-feather/dist/icons/file-minus.js';
import IconBase from '../../IconBase.js';

function IconFileMinus(props) {
  return jsx(IconBase, Object.assign({
    icon: FileMinus
  }, props), void 0);
}

export { IconFileMinus as default };
