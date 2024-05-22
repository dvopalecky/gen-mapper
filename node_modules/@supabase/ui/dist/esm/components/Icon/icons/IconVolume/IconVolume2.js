import { jsx } from 'react/jsx-runtime';
import Volume from '../../../../node_modules/react-feather/dist/icons/volume.js';
import IconBase from '../../IconBase.js';

function IconVolume(props) {
  return jsx(IconBase, Object.assign({
    icon: Volume
  }, props), void 0);
}

export { IconVolume as default };
