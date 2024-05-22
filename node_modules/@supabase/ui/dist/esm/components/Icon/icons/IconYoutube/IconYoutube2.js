import { jsx } from 'react/jsx-runtime';
import Youtube from '../../../../node_modules/react-feather/dist/icons/youtube.js';
import IconBase from '../../IconBase.js';

function IconYoutube(props) {
  return jsx(IconBase, Object.assign({
    icon: Youtube
  }, props), void 0);
}

export { IconYoutube as default };
