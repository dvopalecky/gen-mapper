import { jsx } from 'react/jsx-runtime';
import Info from '../../../../node_modules/react-feather/dist/icons/info.js';
import IconBase from '../../IconBase.js';

function IconInfo(props) {
  return jsx(IconBase, Object.assign({
    icon: Info
  }, props), void 0);
}

export { IconInfo as default };
