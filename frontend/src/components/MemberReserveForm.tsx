import React, { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import { VaccineType } from '../types';

interface Props {}
const MemberReserveForm = (props: Props): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableVacTimes, setAvailableVacTimes] = useState<string[]>(['']);
  const [vaccinateTime, setVaccinateTime] = useState('');
  const [vaccineType, setVaccineType] = useState<VaccineType>('AZ');

  const handleSubmit = () => {
    // submit
    alert(`
    selectedDate: ${selectedDate}
    vaccinateTime: ${vaccinateTime}
    vaccineType:${vaccineType}
    `);
  };

  const generateAvailableTimes = () => {
    const availableTimesArr = [];
    for (let i = 0; i < 23; i++) {
      availableTimesArr.push(`${i}:00~${i + 1}:00`);
    }
    return availableTimesArr;
  };

  useEffect(() => {
    setTimeout(() => {
      setAvailableVacTimes(generateAvailableTimes());
    }, 500);
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '50%', margin: '40px' }}>
        <div>
          <h2>selectedDate:{`${selectedDate.valueOf()}`}</h2>
        </div>
        <div>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>
      </div>
      <div style={{ width: '50%', margin: '40px', flexDirection: 'column' }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
          style={{ flexDirection: 'column', margin: '40px' }}>
          <label>
            Select Vaccinate Time:
            <select
              value={vaccinateTime}
              onChange={(event) => setVaccinateTime(event.target.value)}>
              {availableVacTimes.map((availableVacTime, index) => (
                <option
                  key={`${availableVacTime}+${index}`}
                  value={availableVacTime}>
                  {availableVacTime}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Select Vaccine Type:
            <select
              value={vaccineType}
              onChange={(event) =>
                setVaccineType(event.target.value as VaccineType)
              }>
              {['AZ', 'Moderna', 'BNT', 'Janssen', 'MVC', 'UBI'].map(
                (vaccine, index) => (
                  <option key={`${vaccine}+${index}`} value={vaccine}>
                    {vaccine}
                  </option>
                )
              )}
            </select>
          </label>
          <br />
          <input type='submit' value='submit' />
        </form>
      </div>
    </div>
  );
};

export default MemberReserveForm;
