import { jsx } from 'react/jsx-runtime';
import UploadCloud from '../../../../node_modules/react-feather/dist/icons/upload-cloud.js';
import IconBase from '../../IconBase.js';

function IconUploadCloud(props) {
  return jsx(IconBase, Object.assign({
    icon: UploadCloud
  }, props), void 0);
}

export { IconUploadCloud as default };
