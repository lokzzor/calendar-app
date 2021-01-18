import React, { Component } from 'react'
import './chart.css';
import ReactEcharts from "echarts-for-react";
import API from '../../../../reducers/api';


export default class Secondchart extends Component {
    async componentDidMount() {
      API.get("/api/get/room_building").then((resp) => {
        this.setState((state) => ({ buildroom: resp.data }));
      });
    }
    state = {
        buildroom: []
    };

    render() {
        const buildroom =this.state.buildroom.map(n => ({
            name: "Building "+n.building_number,
            value: n.count
          }) );
        const option = {
            // backgroundColor: "rgb(43, 51, 59)",
            //                backgroundColor: "#0074e0"
            tooltip: {
              trigger: "item",
              formatter: "{a}<br/><strong>{b}</strong>: {c} ",
            },
            color:['#fff700','#ff0000','#73e831','#b503ef','#ef8603','#691616'],
            legend: {
              icon: "circle",
              orient: 'vertical',
              left: 'right',
              data: buildroom.map( ({name}) => ({name}) ),
              textStyle: {
                color: "white",
                fontFamily: "Ubuntu",
                fontSize: 17,
                padding: [3, 3, 3, 3],
                fontStyle: "normal",
                fontWeight: "bold",
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
                  normal: {
                    show: false,
                  },
                  emphasis: {
                    show: false,
                  },
                },
                data: buildroom.map( ({name, value}) => ({ name, value }) ),
              },
            ],
          };
        return (
            <>
          <h2 className="titular chart-title cursor">Building - Room</h2>
          <ReactEcharts
            lazyUpdate={true}
            option={option}
            className="sizecharts pie-chart "
          />
            </>
        )
    }
}