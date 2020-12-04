import React, { Component } from 'react'
import './chart.css';
import ReactEcharts from "echarts-for-react";
import axios from "axios";


export default class Secondchart extends Component {
    async componentDidMount() {
        this.charts();
    }
    state = {
        URL: "http://localhost:8080",
        buildroom: []
    };
    charts() {
        axios.get(this.state.URL + "/api/get/room_building").then((resp) => {
          this.setState((state) => ({ buildroom: resp.data }));
        });
      }
    render() {
        const buildroom =this.state.buildroom.map(n => ({
            name: "Building "+n.building_number,
            value: n.count
          }) );
        const option = {
            // backgroundColor: "rgb(43, 51, 59)",
            tooltip: {
              trigger: "item",
              formatter: "{a}<br/><strong>{b}</strong>: {c} ",
            },
            color:['#5045f6','#f6d54a','#44aff0','#45dbf7','#ff4343','#ad46f3','#f69846'],
            legend: {
              icon: "circle",
              orient: 'vertical',
              left: 'right',
              data: buildroom.map( ({name}) => ({name}) ),
              textStyle: {
                color: "black",
                fontFamily: "Arial",
                fontSize: 15,
                padding: [3, 3, 3, 3],
              },
            },
            series: [
              {
                name: "Series Name",
                type: "pie",
                animationDuration: 3000,
                animationEasing: "quarticInOut",
                radius: [20, 150],
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
          <h2 className="titular chart-title2 cursor">Building - Room</h2>
          <ReactEcharts
            lazyUpdate={true}
            option={option}
            className="sizecharts pie-chart "
          />
            </>
        )
    }
}