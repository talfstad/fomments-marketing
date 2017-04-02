import { connect } from 'react-redux';

import { loadFommentSection, changeFommentSectionProductName } from '/imports/actions/fomments/message';
import { updateActiveState } from '/imports/actions/products/sections/update';
import { loadSections } from '/imports/actions/products/sections/load';

import 'bootstrap-select/dist/css/bootstrap-select.css';
import 'bootstrap-select';

import { ChooseCommentSectionComponent } from './choose-comment-section';

const actions = {
  loadFommentSection,
  changeFommentSectionProductName,
  updateActiveState,
  loadSections,
};

const mapStateToProps = state => ({
  ...state.sections,
});

export default connect(mapStateToProps, actions)(ChooseCommentSectionComponent);
