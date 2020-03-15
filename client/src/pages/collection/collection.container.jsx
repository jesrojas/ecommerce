import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors.js";

import WithSpinner from "../../components/with-spinner/with-spinner.jsx";
import CollectionPage from "./collection.jsx";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

export const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));