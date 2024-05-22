import { jsx } from 'react/jsx-runtime';
import CloudLightning from '../../../../node_modules/react-feather/dist/icons/cloud-lightning.js';
import IconBase from '../../IconBase.js';

function IconCloudLightning(props) {
  return jsx(IconBase, Object.assign({
    icon: CloudLightning
  }, props), void 0);
}

export { IconCloudLightning as default };
