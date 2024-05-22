import { jsx } from 'react/jsx-runtime';
import Airplay from '../../../../node_modules/react-feather/dist/icons/airplay.js';
import IconBase from '../../IconBase.js';

function IconAirplay(props) {
  return jsx(IconBase, Object.assign({
    icon: Airplay
  }, props), void 0);
}

export { IconAirplay as default };
