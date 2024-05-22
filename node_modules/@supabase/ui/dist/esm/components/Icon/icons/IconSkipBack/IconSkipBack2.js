import { jsx } from 'react/jsx-runtime';
import SkipBack from '../../../../node_modules/react-feather/dist/icons/skip-back.js';
import IconBase from '../../IconBase.js';

function IconSkipBack(props) {
  return jsx(IconBase, Object.assign({
    icon: SkipBack
  }, props), void 0);
}

export { IconSkipBack as default };
