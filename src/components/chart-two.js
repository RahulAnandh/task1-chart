import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ChartTwo= () => {
  const [data, setData] = useState([
    {
        country: 'A',
        year: '2018',
        value: 8,
        
        },
        {
        country: 'B',
        year: '2018',
        value: 9,
        },
        {
        country: 'C',
        year: '2018',
        value: 18,
        },
        {
        country: 'D',
        year: '2018',
        value: 5,
        },
        {
        country: 'E',
        year: '2018',
        value: 2,
        
        },
        {
    country: 'A',
    year: '2019',
    value: 9,
    
    },
    {
    country: 'B',
    year: '2019',
    value: 9,
    },
    {
    country: 'C',
    year: '2019',
    value: 15,
    },
    {
    country: 'D',
    year: '2019',
    value: 8,
    },
    {
    country: 'E',
    year: '2019',
    value: 7,
    
    },
    {
    country: 'A',
    year: '2020',
    value: 13,
    },
    {
    country: 'B',
    year: '2020',
    value: 8,
    },
    {
    country: 'C',
    year: '2020',
    value: 20,
    },
    {
    country: 'D',
    year: '2020',
    value: 9,
    },
    {
    country: 'E',
    year: '2020',
    value: 3,
    },
    {
    country: 'A',
    year: '2021',
    value: 17,
    },
    
    {
    country: 'B',
    year: '2021',
    value: 13,
    },
    {
    country: 'C',
    year: '2021',
    value: 15,
    },
    {
    country: 'D',
    year: '2021',
    value: 8,
    },
    {
    country: 'E',
    year: '2021',
    value: 3,
    },
    {
    country: 'A',
    year: '2022',
    value: 19,
    },
    {
    country: 'B',
    year: '2022',
    value: 15,
    },
    {
    
    country: 'C',
    year: '2022',
    value: 15,
    },
    {
    country: 'D',
    year: '2022',
    value: 4,
    },
    {
    country: 'E',
    year: '2022',
    value: 3,
    },
    ]);

  useEffect(() => {
  }, []);


//   const config = {
//     data,
//     xField: 'year',
//     yField: 'value',
//     isGroup: false,
//     isStack: true,
//     seriesField: 'country',
//     groupField: 'country',
//   };
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
    label: {
      position: 'middle',
      content: (item) => {
        return item.value.toFixed(2);
      },
      style: {
        fill: '#fff',
      },
    },
  };

  return <Column {...config} />;
};

export default ChartTwo