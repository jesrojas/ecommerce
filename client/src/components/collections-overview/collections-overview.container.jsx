import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors.js';
import WithSpinner from '../with-spinner/with-spinner.jsx';
import CollectionsOverview from './collections-overview.jsx';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

export const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
