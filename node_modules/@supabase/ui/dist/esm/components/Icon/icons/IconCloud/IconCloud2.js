import { jsx } from 'react/jsx-runtime';
import Cloud from '../../../../node_modules/react-feather/dist/icons/cloud.js';
import IconBase from '../../IconBase.js';

function IconCloud(props) {
  return jsx(IconBase, Object.assign({
    icon: Cloud
  }, props), void 0);
}

export { IconCloud as default };
