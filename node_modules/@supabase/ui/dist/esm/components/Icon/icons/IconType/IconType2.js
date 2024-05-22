import { jsx } from 'react/jsx-runtime';
import Type from '../../../../node_modules/react-feather/dist/icons/type.js';
import IconBase from '../../IconBase.js';

function IconType(props) {
  return jsx(IconBase, Object.assign({
    icon: Type
  }, props), void 0);
}

export { IconType as default };
