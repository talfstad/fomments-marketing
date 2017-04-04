import { connect } from 'react-redux';

import { InstallationInstructionsComponent } from './installation-instructions';

const mapStateToProps = state => ({
  ...state.sections,
  userId: state.user.id,
});

export default connect(mapStateToProps)(InstallationInstructionsComponent);
