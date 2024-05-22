import { jsx } from 'react/jsx-runtime';
import Globe from '../../../../node_modules/react-feather/dist/icons/globe.js';
import IconBase from '../../IconBase.js';

function IconGlobe(props) {
  return jsx(IconBase, Object.assign({
    icon: Globe
  }, props), void 0);
}

export { IconGlobe as default };
