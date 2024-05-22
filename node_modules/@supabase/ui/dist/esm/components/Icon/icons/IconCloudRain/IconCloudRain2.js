import { jsx } from 'react/jsx-runtime';
import CloudRain from '../../../../node_modules/react-feather/dist/icons/cloud-rain.js';
import IconBase from '../../IconBase.js';

function IconCloudRain(props) {
  return jsx(IconBase, Object.assign({
    icon: CloudRain
  }, props), void 0);
}

export { IconCloudRain as default };
