import { jsx } from 'react/jsx-runtime';
import AlignLeft from '../../../../node_modules/react-feather/dist/icons/align-left.js';
import IconBase from '../../IconBase.js';

function IconAlignLeft(props) {
  return jsx(IconBase, Object.assign({
    icon: AlignLeft
  }, props), void 0);
}

export { IconAlignLeft as default };
