import { jsx } from 'react/jsx-runtime';
import Printer from '../../../../node_modules/react-feather/dist/icons/printer.js';
import IconBase from '../../IconBase.js';

function IconPrinter(props) {
  return jsx(IconBase, Object.assign({
    icon: Printer
  }, props), void 0);
}

export { IconPrinter as default };
