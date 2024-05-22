import { jsx } from 'react/jsx-runtime';
import Link from '../../../../node_modules/react-feather/dist/icons/link.js';
import IconBase from '../../IconBase.js';

function IconLink(props) {
  return jsx(IconBase, Object.assign({
    icon: Link
  }, props), void 0);
}

export { IconLink as default };
