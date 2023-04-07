import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {details, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = details

  const onClickDel = () => {
    deleteTrack(id)
  }

  return (
    <li className="li">
      <div className="track-img-con">
        <div>
          <img className="track-img" src={imageUrl} alt="track" />
        </div>
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="c1">
        <p className="name">{duration}</p>
        <div>
          <button
            type="button"
            data-testid="delete"
            onClick={onClickDel}
            className="del-btn"
          >
            <AiOutlineDelete className="icon" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default TrackItem
