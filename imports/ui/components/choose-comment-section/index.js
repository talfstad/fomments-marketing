import { connect } from 'react-redux';

import { loadFommentSection, changeFommentSectionProductName } from '/imports/actions/fomments/message';
import { updateCommentControls } from '/imports/actions/products/sections/update';

import 'bootstrap-select/dist/css/bootstrap-select.css';
import 'bootstrap-select';

import { ChooseCommentSectionComponent } from './component';

const actions = {
  loadFommentSection,
  changeFommentSectionProductName,
  updateCommentControls,
};

const mapStateToProps = state => ({
  ...state.sectionControls,
});

export default connect(mapStateToProps, actions)(ChooseCommentSectionComponent);
