import { jsx } from 'react/jsx-runtime';
import Codesandbox from '../../../../node_modules/react-feather/dist/icons/codesandbox.js';
import IconBase from '../../IconBase.js';

function IconCodesandbox(props) {
  return jsx(IconBase, Object.assign({
    icon: Codesandbox
  }, props), void 0);
}

export { IconCodesandbox as default };
