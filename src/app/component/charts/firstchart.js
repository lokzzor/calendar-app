import React, { Component } from 'react'
import './chart.css';
import ReactEcharts from "echarts-for-react";
import axios from "axios";

export default class Firstchart extends Component {
  
    async componentDidMount() {
        this.charts();
    }
    state = {
        roomevent: [],
    };
    charts() {
        axios.get("/api/get/room_event").then((resp) => {
          this.setState((state) => ({ roomevent: resp.data })); 
        });
    }
    render() {
        const roomevent =this.state.roomevent.map(n => ({
            name: "Room "+n.room_name,
            value: n.countevent
          }) );
        const options = {
            // backgroundColor: "rgb(43, 51, 59)",
            grid: {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            },
            tooltip: {
              trigger: "item",
              formatter: "{a}<br/><strong>{b}</strong>: {c} ",
            },
            color:['#fff700','#ff0000','#73e831','#b503ef','#ef8603','#691616'],
            legend: {
              icon: "circle",
              orient: 'vertical',
              left: 'right',
              
              itemGap: 13.5,
              data: roomevent.map( ({name}) => ({name}) ),
              textStyle: {
                color: "white",
                fontFamily: "Courier New",
                fontSize: 14,
                padding: [3, 3, 3, 3],
                fontStyle: "normal",
                fontWeight: "bold",
                backgroundColor: "#0074e0"

              },
            },
            series: [
              {
                name: "Series Name",
                type: "pie",
                animationDuration: 3000,
                animationEasing: "quarticInOut",
                radius: ["23%", "95%"],
                fontSize: 14,
                avoidLabelOverlap: false,
                startAngle: 90,
                hoverOffset: 5,
                center: ["50%", "50%"],
                roseType: "area",
                selectedMode: "multiple",
                label: {
                  paddingTop:'120px',
                  normal: {
                    show: false,
                  },
                  emphasis: {
                    show: false,
                  },
                },
                data: roomevent.map( ({name, value}) => ({ name, value }) ),
              },
            ],
          };

        return (
            <>
          <h2 className="titular chart-title cursor">Room - Event</h2>
          <ReactEcharts
            option={options}
            lazyUpdate={true}
            className="sizecharts pie-chart "
          />       
            </>
        )
    }
}