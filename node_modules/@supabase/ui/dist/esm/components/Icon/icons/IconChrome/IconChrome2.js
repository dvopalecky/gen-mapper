import { jsx } from 'react/jsx-runtime';
import Chrome from '../../../../node_modules/react-feather/dist/icons/chrome.js';
import IconBase from '../../IconBase.js';

function IconChrome(props) {
  return jsx(IconBase, Object.assign({
    icon: Chrome
  }, props), void 0);
}

export { IconChrome as default };
