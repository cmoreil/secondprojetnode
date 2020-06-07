import React from 'react';
import axios from 'axios';

const API_KEY = 'TzJVT2hEUmZMUEtrUzhKbVRNV3NhUT09';
const API_URL = "https://trefle.io/api/plants";

export class Searchbar extends React.Component  {
    state = {
        query: '',
        results: []
      }

      getInfo = () => {
        axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=10`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
      }

      handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
                this.getInfo()
              }
            }
          })
        }

        render() {
          let plants = null;
          if (this.state.plants) {
            plants = (
              <div>
              <h2>Résultat de votre recherche :</h2>
              <div>{this.state.plants.map(plant => <li key={plant.id}>{plant.common_name}</li>)}</div>
              </div>
          )}

          return (
            <div>
              <form>
              <input
                placeholder="Je recherche cette plante..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
              />
            </form>
            {plants}
          </div>
        )
      }
    }

export default Searchbar;