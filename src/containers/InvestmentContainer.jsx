/*
- import the dumb version
- import the connect() function from react-redux
- define the connections as:
    - mapStateToProps()
    - mapDispatchToProps()
- wrap the dumb version with connections to redux to create a smart version
- export the smart version
*/
import Investment from '../components/Investment';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        // react props : redux state
        investment: state.investment.amount
    }
};

export default connect(mapStateToProps)(Investment);