import { jsx } from 'react/jsx-runtime';
import Video from '../../../../node_modules/react-feather/dist/icons/video.js';
import IconBase from '../../IconBase.js';

function IconVideo(props) {
  return jsx(IconBase, Object.assign({
    icon: Video
  }, props), void 0);
}

export { IconVideo as default };
