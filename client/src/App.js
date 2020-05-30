import React, { Component } from 'react';
import './App.css';
import { Charts, Grid, FarmPicker} from './components'
import styles from './app.module.css'
import {fetchData, fetchWindfarms} from './api';

class App extends Component {

  state = {
    columnDefs: [{
    headerName: "Device ID", field: "device_id", sortable: true, filter: true
  },{
    headerName: "Time", field: "time_stamp", sortable: true, filter :true 
   },{
    headerName: "Asset", field: "asset_id", sortable: true, filter :true 
   },{
    headerName: "Alarm Code", field: "code", sortable: true, filter: true
  }, {
    headerName: "Duration of Alarm(in Seconds)", field: "duration_seconds", sortable: true, filter: true
  },{
    headerName: "Fault Type", field: "fault_type", sortable: true, filter: true
  },{
    headerName: "Category", field: "category", sortable: true, filter: true
  },{
    headerName: "Description", field: "description", sortable: true, filter: true
  }
],
    response: '',
    post: '',
    responseToPost: '',
    windfarm : 'all',
  };
  handleWindfarmChange = async (windfarm) => {
    //console.log(windfarm)
    await fetchData(windfarm).then(result =>this.setState({rowData:result.data}))

    
  }
  async componentDidMount() {
    //console.log(await fetchWindfarms())
    await fetchData().then(result =>this.setState({rowData:result.data}))
    }
  
render() {
    return (
      <div>
      <FarmPicker handleWindfarmChange = {this.handleWindfarmChange}/>
      <Charts/> 
      <Grid columnDefs = {this.state.columnDefs} rowData = {this.state.rowData} />
    </div>
      // <div className="App">
      //   <p>{this.state.response}</p>
      //   <form onSubmit={this.handleSubmit}>
      //     <p>
      //       <strong>Post to Server:</strong>
      //     </p>
      //     <input
      //       type="text"
      //       value={this.state.post}
      //       onChange={e => this.setState({ post: e.target.value })}
      //     />
      //     <button type="submit">Submit</button>
      //   </form>
      //   <p>{this.state.responseToPost}</p>
      // </div>
    );
  }
}

export default App;