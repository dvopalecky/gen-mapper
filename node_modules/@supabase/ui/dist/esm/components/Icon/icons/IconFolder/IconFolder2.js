import { jsx } from 'react/jsx-runtime';
import Folder from '../../../../node_modules/react-feather/dist/icons/folder.js';
import IconBase from '../../IconBase.js';

function IconFolder(props) {
  return jsx(IconBase, Object.assign({
    icon: Folder
  }, props), void 0);
}

export { IconFolder as default };
