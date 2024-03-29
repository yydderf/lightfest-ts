import './App.scss'

import Banner from "./components/banner/banner"
import Description from "./components/description/description"
import Transition from "./components/transition/transition"
import Stories from "./components/stories/stories"
import Crafts from './components/crafts/crafts'
import About from "./components/about/about"
import Sponsor from './components/sponsor/sponsor'
import Hosts from './components/hosts/hosts'
import Members from './components/members/members'

const App = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Description />
      </section>
      {/* <section>
        <Transition title="起源" subtitle="ORIGIN" page={2}/>
      </section> */}
      <section>
        <Stories />
      </section>
      {/* <section>
        <Transition title="作品" subtitle="CRAFTS" page={4}/>
      </section> */}
      <section>
        <Crafts />
        <About />
      </section>
      {/* <section>Work1</section>
      <section>Work2</section>
      <section>Work3</section>
      <section>Work4</section>
      <section>Workshop</section> */}
      {/* <section>
        <About />
      </section> */}
    </div>
  )
}

export default App
