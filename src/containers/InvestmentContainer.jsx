/*
- import the dumb version of component
- import action creator functions
- import the connect() function from react-redux
- define the connections as:
    - mapStateToProps()
    - mapDispatchToProps()
- wrap the dumb version with connections to redux to create a smart version
- export the smart version
*/
import Investment from '../components/Investment';
import {
    investmentDeposit,
    investmentWithdraw
} from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        // react props : redux state
        investment: state.investment.amount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (amount) => {
            dispatch(investmentDeposit(amount));
        },
        withdraw: (amount) => {
            dispatch(investmentWithdraw(amount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Investment);