import { useEffect, useState } from "react";
import { ReactNetflixPlayer } from "react-netflix-player"
import { useNavigate, useParams } from "react-router-dom"

const MovieTrailerPage = () => {
  const { type, id } = useParams()
  const navigate = useNavigate();
  const [video, setVideo] = useState(null)

  useEffect(() => {
    const getTrailer = async () => {
      const videoTrailer = await fetch(`https://oyster-app-5ssxa.ondigitalocean.app/api/video?type=${type}&id=${id}`)
      setVideo(videoTrailer.url)
    }
    getTrailer()
  }, [type, id])


  return (
    <ReactNetflixPlayer
      src={video}
      playerLanguage="en"
      fullPlayer={true}
      backButton={() => navigate(-1)}
      autoPlay={true}
    />
  )
}

export default MovieTrailerPage