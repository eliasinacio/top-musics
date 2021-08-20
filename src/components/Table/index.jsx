import { useEffect, useState } from 'react';
import { Container } from './styles';

import api from '../../services/api'

const Table = () => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    async function loadMusics() {
      const response = await api.get('/chart');

      setTracks(response.data.tracks.data)
    }

    loadMusics()
  }, [])

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
        {
          tracks.map((track) => {
            return (
              <tr key={track.id}>
                <td className="play-btn">
                  {/* <img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/play--v1.png" alt="" /> */}
                  <img src="https://img.icons8.com/material-outlined/24/FFFFFF/pause--v1.png" alt=""/>
                  <audio src={track.preview}></audio>
                </td>

                <td className="track">
                  <img src={track.album.cover} alt="" />
                  <div className="title">
                    <a href={track.link} target="_blank" rel="noreferrer">{track.title}</a> <br />
                    <a className="artist" href={track.artist.link} target="_blank" rel="noreferrer">{track.artist.name}</a>
                  </div>
                </td>

                <td className="album">
                  <p>{track.album.title}</p>
                </td>

                <td className="favorite-btn">
                  <div>
                    <img className="fill" src="https://img.icons8.com/ios-filled/18/ffffff/star--v1.png" alt="" />
                    <img className="empty" src="https://img.icons8.com/ios/18/dddddd/star--v1.png" alt="" />
                  </div>
                </td>

                <td className="duration">{track.duration}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Container>
  );
};

export default Table;