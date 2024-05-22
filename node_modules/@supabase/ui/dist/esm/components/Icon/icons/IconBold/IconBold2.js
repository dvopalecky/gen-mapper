import { jsx } from 'react/jsx-runtime';
import Bold from '../../../../node_modules/react-feather/dist/icons/bold.js';
import IconBase from '../../IconBase.js';

function IconBold(props) {
  return jsx(IconBase, Object.assign({
    icon: Bold
  }, props), void 0);
}

export { IconBold as default };
