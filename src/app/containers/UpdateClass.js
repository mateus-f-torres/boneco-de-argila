import { connect } from 'react-redux';
import { displayClass, showClassSelection, lockClass } from '../actions';
import { showMenu } from '../actions';
import PlayerClass from '../components/PlayerClass.jsx';

const mapStateToProps = (state) => {
  return {
    selected: state.gameClass.show,
    chosen: state.gameClass.chosen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClass: (choice) => {
      dispatch(displayClass(choice))
    },
    noClass: () => {
      dispatch(showClassSelection())
    },
    lockClass: (gameClass) => {
      dispatch(lockClass(gameClass))
      dispatch(showMenu())
    }
  }
}

const UpdateClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerClass);

export default UpdateClass;
