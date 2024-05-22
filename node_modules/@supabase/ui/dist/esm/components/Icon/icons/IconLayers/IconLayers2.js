import { jsx } from 'react/jsx-runtime';
import Layers from '../../../../node_modules/react-feather/dist/icons/layers.js';
import IconBase from '../../IconBase.js';

function IconLayers(props) {
  return jsx(IconBase, Object.assign({
    icon: Layers
  }, props), void 0);
}

export { IconLayers as default };
