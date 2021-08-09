import React, { useState, useEffect } from 'react';
import { VaccineType } from '../types';

interface MemberRecord {
  reserveTime: number;
  vacTime: number;
  vacType: VaccineType;
}
const MemberRecordListItem = ({
  reserveTime,
  vacTime,
  vacType,
}: MemberRecord): JSX.Element => {
  return (
    <tr>
      <td>{reserveTime}</td>
      <td>{vacTime}</td>
      <td>{vacType}</td>
      <td><button onClick={()=>alert('edit record!')}>edit</button></td>
      <td><button onClick={()=>alert('cancel reservation!')}>cancel</button></td>
    </tr>
  );
};

interface Props {}

const MemberRecordList = (props: Props): JSX.Element => {
  const [memberRecords, setMemberRecords] = useState<MemberRecord[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setMemberRecords([
        { reserveTime: 1628438400000, vacTime: 1629388800000, vacType: 'AZ' },
        {
          reserveTime: 1628438400000,
          vacTime: 1629388800000,
          vacType: 'Moderna',
        },
      ]);
    }, 500);
  });

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
      <table>
        <thead>
          <tr>
            <td>reserve time:</td>
            <td>vaccinate time:</td>
            <td>vaccine type:</td>
          </tr>
        </thead>
        <tbody>
          {memberRecords.map((memberRecord, index) => (
            <MemberRecordListItem
              key={`${memberRecord.reserveTime}+${index}`}
              {...memberRecord}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberRecordList;
