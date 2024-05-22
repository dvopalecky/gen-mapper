import { jsx } from 'react/jsx-runtime';
import CloudOff from '../../../../node_modules/react-feather/dist/icons/cloud-off.js';
import IconBase from '../../IconBase.js';

function IconCloudOff(props) {
  return jsx(IconBase, Object.assign({
    icon: CloudOff
  }, props), void 0);
}

export { IconCloudOff as default };
