import { jsx } from 'react/jsx-runtime';
import Download from '../../../../node_modules/react-feather/dist/icons/download.js';
import IconBase from '../../IconBase.js';

function IconDownload(props) {
  return jsx(IconBase, Object.assign({
    icon: Download
  }, props), void 0);
}

export { IconDownload as default };
