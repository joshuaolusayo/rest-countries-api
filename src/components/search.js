import React, { Component } from 'react';
import Countries from './countries';

const URL = "https://restcountries.eu/rest/v2/all";
// const URL = "http://localhost:3004/countries";

class Search extends Component {
    constructor (props) {
        super (props);
        this.state = {
            countries: ''
        }
    }

    componentDidMount() {
        fetch (URL, {method: 'GET'})
        .then (response => response.json())
        .then (json => {
            this.setState({
                countries: json
            })
        })
        this.filterCountries = this.filterCountries.bind(this);
    }

    filterCountries (e) {

    }

    render () {
        return (
            <div className="">
                <div className="search container my-5 pb-0 mb-0">
                    <div className="row mx-0 px-0 justify-content-start justify-content-md-between align-items-center">
                        <div className="col-md-5 input-group shadow-lg px-0">
                            <div className="input-group-prepend">
                                <span className="input-group-text border-0 bg" id="basic-addon1"><i className="fa fa-search text-color"></i></span>
                            </div>
                            <input type="text" className="form-control border-0 bg text-color" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="filter py-0 mt-4 my-md-0">
                            <select className="selectpicker shadow-lg show-tick border-0" multiple data-max-options="1">
                                <option value="Region" defaultValue>Region</option>
                                <option value="Africa">Africa</option>
                                <option value="America">America</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Countries nations={this.state} />
            </div>
        )
    }   
}

export default Search;