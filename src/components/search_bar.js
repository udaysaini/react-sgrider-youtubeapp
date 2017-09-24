import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            term : ''
        }
        console.log('props', props)
    }

    onInputChange(term) {
        this.setState({term : term});
        this.props.onSearchTermChange(term);
    }



    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value) }
                />
                <button onClick={event => console.log('Btn Click', this.state.term)}> Search </button>
            </div>
        );
    }
}

export default SearchBar;