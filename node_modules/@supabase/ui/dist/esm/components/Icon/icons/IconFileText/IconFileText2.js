import { jsx } from 'react/jsx-runtime';
import FileText from '../../../../node_modules/react-feather/dist/icons/file-text.js';
import IconBase from '../../IconBase.js';

function IconFileText(props) {
  return jsx(IconBase, Object.assign({
    icon: FileText
  }, props), void 0);
}

export { IconFileText as default };
