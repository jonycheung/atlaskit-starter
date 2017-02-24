import React, {PureComponent} from "react";
import SearchResults from "./SearchResults";

export default class SearchDrawer extends PureComponent {
  state = {
    searchString: '',
    results: [
      {name: 'item1', description: 'description of item1'},
      {name: 'item2', description: 'description of item2'},
      {name: 'item3', description: 'description of item3'},
      {name: 'item4', description: 'description of item4'},
      {name: 'item5', description: 'description of item5'},
      {name: 'item6', description: 'description of item6'},
      {name: 'item7', description: 'description of item7'},
      {name: 'item8', description: 'description of item8'},
      {name: 'item9', description: 'description of item9'},
    ]
  };

  filterChange = () => {
    this.setState({
      searchString: this.searchInput.value
    });
  };

  searchResults = () => {
    const {results, searchString} = this.state;
    if (!searchString.length) return null;

    const matchingResults = results.filter(
      c => (
        c.name.indexOf(searchString) >= 0 ||
        (c.description && c.description.indexOf(searchString) >= 0)
      )
    ).slice(0, 10);

    return (
      <SearchResults
        matchingResults={matchingResults}
      />
    )
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onKeyUp={this.filterChange}
          ref={el => {
            this.searchInput = el;
            if (this.props.onSearchInputRef) {
              this.props.onSearchInputRef(el);
            }
          }}
          style={{
            border: 'none',
            display: 'block',
            fontSize: 24,
            fontWeight: 200,
            marginTop: -4,
            outline: 'none',
            padding: '0 0 0 8',
          }}
        />
        { this.searchResults() }
      </div>
    );
  }
}
