import React from "react";
import { graphql } from "gatsby";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";

class Item extends React.Component {
  render() {
    const guide = this.props.data.mongodbMagomadeBlogGuides;

    return (
      <LayoutAlt>
        <Seo title={guide.title} />
        <div>
          <img
            src={guide.bannerUrl}
            alt={guide.title}
            width={1500}
            height={160}
            loading="lazy"
            quality={100}
          />
          <div id="padding" className="flex flex-col mb-8">
            <h6 className="text-base m-auto font-light pt-6 pb-6 sm:pt-12">
              {guide.type}
            </h6>
            <h3 className="text-3xl m-auto mb-6 sm:mb-12">{guide.title}</h3>
            <p className="font-light text-base">{guide.excerpt}</p>
            <div
              className="pt-12 text-base font-light"
              dangerouslySetInnerHTML={{ __html: guide.description }}
            ></div>
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
      excerpt
      bannerUrl
      type
      description
    }
  }
`;

