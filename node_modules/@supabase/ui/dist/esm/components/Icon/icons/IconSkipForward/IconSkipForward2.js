import { jsx } from 'react/jsx-runtime';
import SkipForward from '../../../../node_modules/react-feather/dist/icons/skip-forward.js';
import IconBase from '../../IconBase.js';

function IconSkipForward(props) {
  return jsx(IconBase, Object.assign({
    icon: SkipForward
  }, props), void 0);
}

export { IconSkipForward as default };
