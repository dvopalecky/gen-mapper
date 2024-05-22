import { jsx } from 'react/jsx-runtime';
import ThumbsUp from '../../../../node_modules/react-feather/dist/icons/thumbs-up.js';
import IconBase from '../../IconBase.js';

function IconThumbsUp(props) {
  return jsx(IconBase, Object.assign({
    icon: ThumbsUp
  }, props), void 0);
}

export { IconThumbsUp as default };
