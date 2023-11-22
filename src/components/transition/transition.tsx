import './transition.scss'
import videoBackground from '/mp4/transition-2.mp4'

type Props = {
  title: string
  subtitle: string
  page: number
}

const Transition = (props: Props) => {
    return (
        <div className="video-wrapper" style={{backgroundImage: `url("/img/new-${props.page}")`,  height: "100vh", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="video-filter"/>
            <video src={videoBackground} loop={true} muted={true} autoPlay={true} playsInline={true} />
            <div className="txt-wrapper" style={{top: `${props.page * 100}%`}}>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    )
}

export default Transition