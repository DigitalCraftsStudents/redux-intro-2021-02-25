// Smart Container
import Banking from '../components/Banking';
import {
    // bankingDeposit,
    apiBankingDeposit,
    // bankingWithdraw
    apiBankingWithdraw
} from '../actions';
import { connect } from 'react-redux';

// what part of redux state does the dumb component need?
//state.baking.amount
const mapStateToProps = (state) => {
    return {
        banking: state.banking.amount
    }
};
// what actions does the dumb component need to dispatch?
const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (amount) => {
            dispatch(apiBankingDeposit(amount));
        },
        withdraw: (amount) => {
            dispatch(apiBankingWithdraw(amount));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Banking);
// connect those two things to the dumb component
// const ironManSuit = connect(mapStateToProps, mapDispatchToProps);
// const ironMan = ironManSuit(Banking);
// // export the new, connected component that has some redux smarts wired to it
// export default ironMan;