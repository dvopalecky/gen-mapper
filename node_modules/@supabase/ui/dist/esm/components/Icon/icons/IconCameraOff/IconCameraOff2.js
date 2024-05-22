import { jsx } from 'react/jsx-runtime';
import CameraOff from '../../../../node_modules/react-feather/dist/icons/camera-off.js';
import IconBase from '../../IconBase.js';

function IconCameraOff(props) {
  return jsx(IconBase, Object.assign({
    icon: CameraOff
  }, props), void 0);
}

export { IconCameraOff as default };
