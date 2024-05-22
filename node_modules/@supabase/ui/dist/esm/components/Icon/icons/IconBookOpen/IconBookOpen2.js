import { jsx } from 'react/jsx-runtime';
import BookOpen from '../../../../node_modules/react-feather/dist/icons/book-open.js';
import IconBase from '../../IconBase.js';

function IconBookOpen(props) {
  return jsx(IconBase, Object.assign({
    icon: BookOpen
  }, props), void 0);
}

export { IconBookOpen as default };
