import { jsx } from 'react/jsx-runtime';
import CloudDrizzle from '../../../../node_modules/react-feather/dist/icons/cloud-drizzle.js';
import IconBase from '../../IconBase.js';

function IconCloudDrizzle(props) {
  return jsx(IconBase, Object.assign({
    icon: CloudDrizzle
  }, props), void 0);
}

export { IconCloudDrizzle as default };
