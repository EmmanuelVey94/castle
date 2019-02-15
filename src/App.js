import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import json from './endResult.json'
import './App.css'




class Table extends React.Component{
  render() {
  ;

    const columns = [{
      Header: 'Noms',
      accessor: 'nom' // String-based value accessors!
    }, {
      Header: 'Prix',
      accessor: 'prix',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      Header: 'Chefs',
      accessor: 'chef'
    }, {
      Header: 'URLs',
      accessor: 'url'
    }];
    return(
      <ReactTable
        data={json}
        columns={columns}
      />
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="table">
          <Table/>
        </div>
      </div>
    );
  }
}

export default App;
