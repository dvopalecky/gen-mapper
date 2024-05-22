import { jsx } from 'react/jsx-runtime';
import MapPin from '../../../../node_modules/react-feather/dist/icons/map-pin.js';
import IconBase from '../../IconBase.js';

function IconMapPin(props) {
  return jsx(IconBase, Object.assign({
    icon: MapPin
  }, props), void 0);
}

export { IconMapPin as default };
