import { jsx } from 'react/jsx-runtime';
import Aperture from '../../../../node_modules/react-feather/dist/icons/aperture.js';
import IconBase from '../../IconBase.js';

function IconAperture(props) {
  return jsx(IconBase, Object.assign({
    icon: Aperture
  }, props), void 0);
}

export { IconAperture as default };
