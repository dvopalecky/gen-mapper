import { jsx } from 'react/jsx-runtime';
import Crop from '../../../../node_modules/react-feather/dist/icons/crop.js';
import IconBase from '../../IconBase.js';

function IconCrop(props) {
  return jsx(IconBase, Object.assign({
    icon: Crop
  }, props), void 0);
}

export { IconCrop as default };
