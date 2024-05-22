import { jsx } from 'react/jsx-runtime';
import Wind from '../../../../node_modules/react-feather/dist/icons/wind.js';
import IconBase from '../../IconBase.js';

function IconWind(props) {
  return jsx(IconBase, Object.assign({
    icon: Wind
  }, props), void 0);
}

export { IconWind as default };
