import {useState} from 'react'
import ChartOne from './components/chart-one';
import ChartTwo from './components/chart-two'
import './App.css'
export default function App() {
  const [selected, setSelected] = useState('yes');

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className='full-chart'>
      <div className='radio-button-section'>
        <div className='radio-button'>
        <input
          type="radio"
          id="yes"
          name="choose"
          value="yes"
          checked={selected === 'yes'}
          onChange={handleChange}
        />
        <label htmlFor="yes">Normal Chart</label>
        </div>
        <div className='radio-button'>
        <input 
          type="radio"
          id="no"
          name="choose"
          value="no"
          onChange={handleChange}
          checked={selected === 'no'}
        />
        <label htmlFor="no">Percentage Chart</label>
        </div>
      </div>
      <div>
        {selected === "yes" &&
          <ChartOne/>
        }
        {selected === "no" &&
          <ChartTwo/>
        }

      </div>
    </div>
  );
}