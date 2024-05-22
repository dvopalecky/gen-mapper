import { jsx } from 'react/jsx-runtime';
import VideoOff from '../../../../node_modules/react-feather/dist/icons/video-off.js';
import IconBase from '../../IconBase.js';

function IconVideoOff(props) {
  return jsx(IconBase, Object.assign({
    icon: VideoOff
  }, props), void 0);
}

export { IconVideoOff as default };
