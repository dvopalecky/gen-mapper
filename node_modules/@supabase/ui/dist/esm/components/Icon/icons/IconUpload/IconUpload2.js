import { jsx } from 'react/jsx-runtime';
import Upload from '../../../../node_modules/react-feather/dist/icons/upload.js';
import IconBase from '../../IconBase.js';

function IconUpload(props) {
  return jsx(IconBase, Object.assign({
    icon: Upload
  }, props), void 0);
}

export { IconUpload as default };
