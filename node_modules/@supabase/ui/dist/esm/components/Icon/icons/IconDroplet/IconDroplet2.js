import { jsx } from 'react/jsx-runtime';
import Droplet from '../../../../node_modules/react-feather/dist/icons/droplet.js';
import IconBase from '../../IconBase.js';

function IconDroplet(props) {
  return jsx(IconBase, Object.assign({
    icon: Droplet
  }, props), void 0);
}

export { IconDroplet as default };
