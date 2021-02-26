// Smart Container
// Bring in the dumb version
import Transactions from '../components/Transactions';

// No actions to import!

// Bring in the connect function from react-redux
import { connect } from 'react-redux';

// What redux state to provide as react props?
const mapStateToProps = (state) => {
    return {
        transactions: state.transactions.transactions
    }
};

// What redux dispatch to provide as react props? 
// None.

// export the connected version!
export default connect(mapStateToProps)(Transactions);