import { jsx } from 'react/jsx-runtime';
import Map from '../../../../node_modules/react-feather/dist/icons/map.js';
import IconBase from '../../IconBase.js';

function IconMap(props) {
  return jsx(IconBase, Object.assign({
    icon: Map
  }, props), void 0);
}

export { IconMap as default };
