import { jsx } from 'react/jsx-runtime';
import Target from '../../../../node_modules/react-feather/dist/icons/target.js';
import IconBase from '../../IconBase.js';

function IconTarget(props) {
  return jsx(IconBase, Object.assign({
    icon: Target
  }, props), void 0);
}

export { IconTarget as default };
