import { jsx } from 'react/jsx-runtime';
import CloudSnow from '../../../../node_modules/react-feather/dist/icons/cloud-snow.js';
import IconBase from '../../IconBase.js';

function IconCloudSnow(props) {
  return jsx(IconBase, Object.assign({
    icon: CloudSnow
  }, props), void 0);
}

export { IconCloudSnow as default };
