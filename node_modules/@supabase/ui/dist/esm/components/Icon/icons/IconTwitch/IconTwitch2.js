import { jsx } from 'react/jsx-runtime';
import Twitch from '../../../../node_modules/react-feather/dist/icons/twitch.js';
import IconBase from '../../IconBase.js';

function IconTwitch(props) {
  return jsx(IconBase, Object.assign({
    icon: Twitch
  }, props), void 0);
}

export { IconTwitch as default };
