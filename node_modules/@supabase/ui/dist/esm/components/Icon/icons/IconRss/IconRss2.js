import { jsx } from 'react/jsx-runtime';
import Rss from '../../../../node_modules/react-feather/dist/icons/rss.js';
import IconBase from '../../IconBase.js';

function IconRss(props) {
  return jsx(IconBase, Object.assign({
    icon: Rss
  }, props), void 0);
}

export { IconRss as default };
