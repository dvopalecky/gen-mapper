import { jsx } from 'react/jsx-runtime';
import VolumeX from '../../../../node_modules/react-feather/dist/icons/volume-x.js';
import IconBase from '../../IconBase.js';

function IconVolumeX(props) {
  return jsx(IconBase, Object.assign({
    icon: VolumeX
  }, props), void 0);
}

export { IconVolumeX as default };
