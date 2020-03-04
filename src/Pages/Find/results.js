import React, { useContext } from "react";
import { Card } from "antd";
import Context from "../../Store/context";

const FindResults = props => {
  const { state } = useContext(Context);

  function displayResults() {
    if (props.is_loading) {
      return <h1>LOADING</h1>;
    } else {
      if (props.results === undefined) {
        return <h1>Search for info</h1>;
      } else if (props.results === null) {
        return <h1>Error fetching data, try again!</h1>;
      } else if (props.results.data.businesses.length === 0) {
        return <h1>No search results, broaden your params</h1>;
      } else {
        return props.results.data.businesses.map(business => {
          return <Card key={business.id}>{business.name}</Card>;
        });
      }
    }
  }

  return <div className="App">{displayResults()}</div>;
};

export default FindResults;