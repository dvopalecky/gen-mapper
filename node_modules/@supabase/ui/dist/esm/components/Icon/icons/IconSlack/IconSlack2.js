import { jsx } from 'react/jsx-runtime';
import Slack from '../../../../node_modules/react-feather/dist/icons/slack.js';
import IconBase from '../../IconBase.js';

function IconSlack(props) {
  return jsx(IconBase, Object.assign({
    icon: Slack
  }, props), void 0);
}

export { IconSlack as default };
