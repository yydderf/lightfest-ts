import {ReactElement, useRef} from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import "./root.css"
import "./about.css"

// import background from "/img/mountains.png"
import background from "/img/longbackground.png"
import * as Tabs from "@radix-ui/react-tabs";
import {departments} from "../lib/organization.ts";

const Members = (): ReactElement => (
    <div className="about-container">
      <Tabs.Root className="about-tabs" defaultValue={departments[0].id}>
        <Tabs.List className="about-tabs__list">
          {departments.map((department, index) => (
              <Tabs.Trigger
                  key={index}
                  value={department.id}
                  className="about-tabs__trigger"
              >
                {department.name}
              </Tabs.Trigger>
          ))}
        </Tabs.List>

        {departments.map((department) => (
            <Tabs.Content key={department.id} value={department.id}>
              <div className="about-tabs__content">
                {department.members.map((member, index) => (
                    <div key={`about-${department.id}-${index}`} className="about-member-name">{member.name}</div>
                ))}
              </div>
            </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
);

export default function About() {
  const total_pages = 10
  const parallax = useRef<IParallax>(null!)

  return (
    <div style={{ width: '100%', height: '100%', userSelect: "none"}}>
      <Parallax ref={parallax} pages={total_pages}>
        <ParallaxLayer offset={0} speed={0} factor={8} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
          <Members />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

