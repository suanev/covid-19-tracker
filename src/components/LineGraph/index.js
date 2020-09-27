import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import options from "./options";

const LineGraph = ({ api, casesType, ...props}) => {
  const [data, setData] = useState({});

  const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${api}/historical/all?lastdays=120`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType, api]);

  return (
    <div className={props.className}>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                data: data,
                borderColor: "#CC1034",
                backgroundColor: "rgba(204, 16, 52, 0.5)",
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;