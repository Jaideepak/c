import React from "react";

import PropTypes from "prop-types";
import Details from "./components/Details/Details";
import  "./components/News/News";

return (
  <>
    exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                />
  </>
);
}

NewsItem.propTypes = {

title: PropTypes.string,

};

export default TopTrendingNews;