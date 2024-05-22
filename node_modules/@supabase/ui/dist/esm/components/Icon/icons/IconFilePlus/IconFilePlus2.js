import { jsx } from 'react/jsx-runtime';
import FilePlus from '../../../../node_modules/react-feather/dist/icons/file-plus.js';
import IconBase from '../../IconBase.js';

function IconFilePlus(props) {
  return jsx(IconBase, Object.assign({
    icon: FilePlus
  }, props), void 0);
}

export { IconFilePlus as default };
