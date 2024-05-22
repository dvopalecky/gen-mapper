import { jsx } from 'react/jsx-runtime';
import Truck from '../../../../node_modules/react-feather/dist/icons/truck.js';
import IconBase from '../../IconBase.js';

function IconTruck(props) {
  return jsx(IconBase, Object.assign({
    icon: Truck
  }, props), void 0);
}

export { IconTruck as default };
