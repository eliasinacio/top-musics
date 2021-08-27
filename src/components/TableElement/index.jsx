import { Container } from "./styles"

const TableElement = (props) => {
  function play (musicId) {
    const trackAudio = document.getElementById(musicId);

    console.log(trackAudio);
  }
  
  return (
    <Container>
      <td className="play-btn" id={props.track.id}>
        <button onClick={play(props.track.id)}>
          <img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/play--v1.png" alt="" />
        </button>
        {/* <img src="https://img.icons8.com/material-outlined/24/FFFFFF/pause--v1.png" alt=""/> */}
        <audio src={props.track.preview} />
      </td>


      <td className="props.track">
        <img src={props.track.album.cover} alt="" />
        <div className="title">
          <a href={props.track.link} target="_blank" rel="noreferrer">{props.track.title}</a> <br />
          <a className="artist" href={props.track.artist.link} target="_blank" rel="noreferrer">{props.track.artist.name}</a>
        </div>
      </td>

      <td className="album">
        <p>{props.track.album.title}</p>
      </td>

      <td className="favorite-btn">
        <div>
          <img className="fill" src="https://img.icons8.com/ios-filled/18/ffffff/star--v1.png" alt="" />
          <img className="empty" src="https://img.icons8.com/ios/18/dddddd/star--v1.png" alt="" />
        </div>
      </td>

      <td className="duration">{props.track.duration}</td>
    </Container>
  )
}