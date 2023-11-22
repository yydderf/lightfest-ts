import './nav.scss'

// import banner from "/img/mountains.png"

const NavBar = () => {
  return (
    // <div className="navbar" style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', overflow: "hidden"}}>
    <div className="navbar">
      <div className="wrapper">
        <span><a href="#">光嶼</a></span>
        <div className="pages">
          <a href="/">主頁</a>
          <a href="/events">活動</a>
          <a href="/">虛擬展場</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;