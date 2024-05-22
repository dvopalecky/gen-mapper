import { jsx } from 'react/jsx-runtime';
import Code from '../../../../node_modules/react-feather/dist/icons/code.js';
import IconBase from '../../IconBase.js';

function IconCode(props) {
  return jsx(IconBase, Object.assign({
    icon: Code
  }, props), void 0);
}

export { IconCode as default };
