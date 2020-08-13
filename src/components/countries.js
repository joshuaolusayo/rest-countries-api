// import React, { Component } from 'react';
import React from 'react';

// const URL = "http://localhost:3004/countries";
// const URL = "https://restcountries.eu/rest/v2/all";

// class Countries extends Component {
//     // constructor (props) {
//     //     super (props);
//     //     this.state = {
//     //         countries: ''
//     //     }
//     // }

//     // componentDidMount() {
//     //     fetch (URL, {method: 'GET'})
//     //     .then (response => response.json())
//     //     .then (json => {
//     //         this.setState({
//     //             countries: json
//     //         })
//     //     })
//     // }

    

//     render () {
//         if ({countries}) {
//             return (
//                 <div className="displayCountries container">
//                     <div className="row m-0 p-0 justify-content-center justify-content-sm-between">
//                         {this.state.countries.map(country => {
//                             return (
//                                 <div className="my-3 mx-0 d-flex align-items-stretch px-0" key={country.name}>
//                                     <div className="card bg mx-auto mx-sm-0 h-100 border-0 shadow">
//                                         <img src={country.flag} alt={country.name} className="card-img"/>
//                                         <div className="card-body text-color">
//                                             <h5 className="my-3">{country.name}</h5>
//                                             <p className="my-1">Population: {country.population}</p>
//                                             <p className="my-1">Region: {country.region}</p>
//                                             <p className="my-1">Capital: {country.capital}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             )
//         } else {
//             return (
//                 <div>Not yet rendered</div>
//             )
//         }
            
//     }   
// }

const Countries = ({nations}) => {
    console.log(nations.countries)
    var countries = nations.countries;
    console.log(countries);
    if (countries) {
        return (
            <div className="displayCountries container">
                <div className="row m-0 p-0 justify-content-center justify-content-sm-between">
                    {countries.map(country => {
                        return (
                            <div className="my-3 mx-0 d-flex align-items-stretch px-0" key={country.name}>
                                <div className="card bg mx-auto mx-sm-0 h-100 border-0 shadow">
                                    <img src={country.flag} alt={country.name} className="card-img"/>
                                    <div className="card-body text-color">
                                        <h5 className="my-3">{country.name}</h5>
                                        <p className="my-1">Population: {country.population}</p>
                                        <p className="my-1">Region: {country.region}</p>
                                        <p className="my-1">Capital: {country.capital}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div>Not yet rendered</div>
        )
    }
}

export default Countries;