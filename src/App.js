import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    document.body.style.background = "#ccc";
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} width="2000" height="128" alt="COVID-19" />
        <h2>The predicted new cases worldwide is 156135.
        </h2>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 

      </div>
    );
  }
}

export default App;