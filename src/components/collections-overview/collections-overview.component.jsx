import React from "react";
import { connect } from "react-redux";

import "./collections-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { createStructuredSelector } from "reselect";
import { selectCollectionOverview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionOverview,
});

export default connect(mapStateToProps)(CollectionsOverview);
