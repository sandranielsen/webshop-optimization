import React from "react";
import { graphql } from "gatsby";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

class Item extends React.Component {
  render() {
    const guide = this.props.data.mongodbMagomadeBlogGuides;

    return (
      <LayoutAlt>
        <Seo title={guide.title + " | MagoMade"} />
        <div>
          <img src={guide.imgUrl} alt={guide.title} />
          <div id="padding" className="flex flex-col">
            <h2 className="text-3xl m-auto mb-12">{guide.title}</h2>
            <p>{guide.description}</p>
          </div>
        </div>
      </LayoutAlt>
    );
  }
}

export default Item;

export const pageQuery = graphql`
  query ($id: String!) {
    mongodbMagomadeBlogGuides(id: { eq: $id }) {
      id
      title
      description
      imgUrl
    }
  }
`;

