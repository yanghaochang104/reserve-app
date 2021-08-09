import React from 'react';
import {
  Switch,
  Route,
  useParams,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import '../stylesheets/MemberView.css';
import MemberReserveForm from './MemberReserveForm';
import MemberRecordList from './MemberRecordList';
interface Props {}

const MemberView = (props: Props): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { path, url } = useRouteMatch();
  return (
    <div style={{ justifyContent: 'center' }}>
      <h1>Hello, welcome login, user {id}</h1>
      <div>
        <ul>
          <li>
            <Link to={`${url}/reserve`}>
              <text style={{ color: 'white' }}>Make Reservation</text>
            </Link>
          </li>
          <li>
            <Link to={`${url}/record`}>
              <text style={{ color: 'white' }}>Check Record</text>
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <text style={{ color: 'white' }}>Logout</text>
            </Link>
          </li>
        </ul>
      </div>
      <div style={{justifyContent: 'center', alignItems: 'center'}}>
        <Switch>
          <Route path={`${path}/reserve`} component={MemberReserveForm}>
            <MemberReserveForm />
          </Route>
          <Route path={`${path}/record`} component={MemberRecordList}>
            <MemberRecordList />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MemberView;
