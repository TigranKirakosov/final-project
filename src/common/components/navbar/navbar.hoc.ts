import { connect } from 'react-redux';
import { auth } from 'Api/firebase/firebase.utils';
import { onUserSignOut } from 'State/redux/user/user.actions';

import Navbar from './navbar.component';

const mapStateToProps = ({ user: { userData } }) => ({
  userData,
  auth
});

const mapDispatchToProps = dispatch => ({
  onUserSignOut: () => dispatch(onUserSignOut())
});

const NavbarHOC = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarHOC;
