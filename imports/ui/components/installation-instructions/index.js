import { connect } from 'react-redux';

import { InstallationInstructionsComponent } from './component';

const mapStateToProps = state => ({
  ...state.sectionControls,
  userId: state.user.id,
});

export default connect(mapStateToProps)(InstallationInstructionsComponent);
