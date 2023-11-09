import './transition.scss'
import videoBackground from '/mp4/transition.mp4'

type Props = {
  title: string
  subtitle: string
  page: number
}

const Transition = (props: Props) => {
    return (
        <div className="video-wrapper">
            <div className="video-filter"/>
            <video src={videoBackground} autoPlay loop muted />
            <div className="txt-wrapper" style={{top: `${props.page * 100}%`}}>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    )
}

export default Transition