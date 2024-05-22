'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const UserContext = /*#__PURE__*/React.createContext({
  user: null,
  session: null
});
const UserContextProvider = props => {
  var _a;

  const {
    supabaseClient
  } = props;
  const [session, setSession] = React.useState(supabaseClient.auth.session());
  const [user, setUser] = React.useState((_a = session === null || session === void 0 ? void 0 : session.user) !== null && _a !== void 0 ? _a : null);
  React.useEffect(() => {
    const {
      data: authListener
    } = supabaseClient.auth.onAuthStateChange((event, session) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
      var _a;

      setSession(session);
      setUser((_a = session === null || session === void 0 ? void 0 : session.user) !== null && _a !== void 0 ? _a : null);
    }));
    return () => {
      authListener === null || authListener === void 0 ? void 0 : authListener.unsubscribe();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const value = {
    session,
    user
  };
  return jsxRuntime.jsx(UserContext.Provider, Object.assign({
    value: value
  }, props), void 0);
};
const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }

  return context;
};

exports.UserContextProvider = UserContextProvider;
exports.useUser = useUser;
