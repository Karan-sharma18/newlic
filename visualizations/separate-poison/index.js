import React from 'react';
import {AreaChart, PieChart, LineChart, BarChart} from "nr1";
 

 
export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, this is for testing not for production!</h1>
        <AreaChart
        accountId = {4438268}
        query = "SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2OHxJTkZSQXxOQXwyODEzNzI3NjA4MDU4MzcyMDEz') TIMESERIES AUTO"
        fullWidth
        />
        <BarChart
        accountId = {4438268}
        query= "SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2OHxJTkZSQXxOQXwyODEzNzI3NjA4MDU4MzcyMDEz') TIMESERIES AUTO"
        fullWidth
        />
        <PieChart
        accountId={4438268}
        query= "SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2OHxJTkZSQXxOQXwyODEzNzI3NjA4MDU4MzcyMDEz') TIMESERIES AUTO"
        fullWidth
        />
 
        <LineChart
        accountId={4438268}
        query= "SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2OHxJTkZSQXxOQXwyODEzNzI3NjA4MDU4MzcyMDEz') TIMESERIES AUTO "
        fullWidth
        />
 
       
      </div>
  )
  }
}
 