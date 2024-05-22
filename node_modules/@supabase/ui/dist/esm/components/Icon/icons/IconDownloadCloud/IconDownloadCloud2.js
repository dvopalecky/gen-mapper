import { jsx } from 'react/jsx-runtime';
import DownloadCloud from '../../../../node_modules/react-feather/dist/icons/download-cloud.js';
import IconBase from '../../IconBase.js';

function IconDownloadCloud(props) {
  return jsx(IconBase, Object.assign({
    icon: DownloadCloud
  }, props), void 0);
}

export { IconDownloadCloud as default };
