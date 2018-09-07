import React, { Component } from 'react';
import axios from 'axios';
import House from '../House/House'
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }
    
    componentDidMount(){
        axios.get('/api/houses')
        .then(response=>{
            this.setState({houses: response.data})
        })
    }
    deleteHouse(id){
        axios.delete(`/api/delete/${id}`)
        .then(response=>{
            this.setState({houses: response.data})
        }),
        window.location.reload();
    }

  render() {
      let housesToDisplay = 
      this.state.houses.map((e, i)=>{
          return (
              <House
              key={e.house_id}
              id={e.house_id}
              name={e.property_name}
              address={e.address}
              city={e.city}
              state={e.state}
              zip={e.zip}
              deleteHouse={this.deleteHouse}
              />
          )
      })
      console.log(this.state.houses);
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <Link to={'/wizard'}>
        <button>Add New Property</button>
        </Link>
        <section>{housesToDisplay}</section>
      </div>
    );
  }
}

export default Dashboard;
