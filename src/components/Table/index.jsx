import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import TableElement from '../TableElement'

import api from '../../services/api'

const Table = () => {
  const tracks = useSelector(state => state.tracks);
  const dispatch = useDispatch();

  const fetchAction = (data) => {
    dispatch({
      type: "FETCH_DATA",
      data: data
    })
  }

  async function loadMusics() {
    const response = await api.get('/chart.json');
  
    fetchAction(response.data.tracks.data);
  }

  loadMusics();

  return (
    <Container>
      <thead>
        <tr>
          <th id="play">&nbsp;</th>
          <th id="title">TÍTULO</th>
          <th id="album">ÁLBUM</th>
          <th id="favorite">&nbsp;</th>
          <th id="duration">
            <img src="https://img.icons8.com/fluency-systems-filled/24/DDDDDD/clock--v2.png" alt="" />
          </th>
        </tr>
      </thead>

      <tbody>
        { (tracks.lenght > 0) ?? tracks.map((track) => {
            return <TableElement track={track}/>
          })
        }
      </tbody>
    </Container>
  );
};

export default Table;