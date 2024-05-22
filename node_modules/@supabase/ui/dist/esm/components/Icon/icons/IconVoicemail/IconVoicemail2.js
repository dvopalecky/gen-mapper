import { jsx } from 'react/jsx-runtime';
import Voicemail from '../../../../node_modules/react-feather/dist/icons/voicemail.js';
import IconBase from '../../IconBase.js';

function IconVoicemail(props) {
  return jsx(IconBase, Object.assign({
    icon: Voicemail
  }, props), void 0);
}

export { IconVoicemail as default };
