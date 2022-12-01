import { useEffect, useState } from "react";
import { ReactNetflixPlayer } from "react-netflix-player"
import { useNavigate, useParams } from "react-router-dom"
import Modal from "../../components/Modal/Modal";

const MovieTrailerPage = () => {
  const { type, id } = useParams()
  const navigate = useNavigate();
  const [video, setVideo] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  useEffect(() => {
    const getTrailer = async () => {
      const videoTrailer = await fetch(`https://oyster-app-5ssxa.ondigitalocean.app/api/video?type=${type}&id=${id}`)
      setVideo(videoTrailer.url)
    }
    getTrailer()
  }, [type, id])

  const showModal = () => {
    setFullscreen(false)
    setIsOpen(true)
  }


  return (
    <>
    <ReactNetflixPlayer
      src={video}
      playerLanguage="en"
      fullPlayer={fullscreen}
      backButton={() => navigate(-1)}
      autoPlay={true}
      onEnded={showModal}
    />
    {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={type} id={id} />}
    </>
  )
}

export default MovieTrailerPage