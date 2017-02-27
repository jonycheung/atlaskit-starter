import React, { PureComponent } from "react";
import { Link } from "react-router";

export default class SearchResults extends PureComponent {
  render() {
    if (!this.props.matchingResults.length) {
      return (
        <p>Nothing found, keep on searching!</p>
      )
    }

    return (
      <ul
        style={{
          listStyleType: 'none',
          margin: '16px 0',
          padding: 0,
        }}
      >
        {
          this.props.matchingResults.map(result => (
            <li key={result.name} style={{padding: 8}}>
              <Link
                to={`#${result.name}`}
                onClick={this.props.onResultClicked}
              >
                {result.name}
              </Link>
              <span style={{display: 'block'}}>{result.description}</span>
            </li>
          ))
        }
      </ul>
    );
  }
}
