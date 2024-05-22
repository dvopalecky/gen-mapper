import { jsx } from 'react/jsx-runtime';
import Music from '../../../../node_modules/react-feather/dist/icons/music.js';
import IconBase from '../../IconBase.js';

function IconMusic(props) {
  return jsx(IconBase, Object.assign({
    icon: Music
  }, props), void 0);
}

export { IconMusic as default };
