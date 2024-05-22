import { jsx } from 'react/jsx-runtime';
import Activity from '../../../../node_modules/react-feather/dist/icons/activity.js';
import IconBase from '../../IconBase.js';

function IconActivity(props) {
  return jsx(IconBase, Object.assign({
    icon: Activity
  }, props), void 0);
}

export { IconActivity as default };
