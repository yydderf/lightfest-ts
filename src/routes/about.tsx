import type { ReactElement } from 'react'

import "./root.css"
import "./about.css"

import * as Tabs from "@radix-ui/react-tabs";
import {departments} from "../lib/organization.ts";

const Hosts = (): ReactElement => (
    <section className="about-container about-container__center">
        <div className="about-host">
            <h1 className="about-heading">主辦單位</h1>
            <p>
                交大藝趣節團隊
            </p>
        </div>
        <div className="about-host">
            <h1 className="about-heading">協辦單位</h1>
            <p>
                國立陽明交通大學博雅書苑、創創工坊、藝文中心、總務處、學生會—交通分會
            </p>
        </div>
        <div className="about-host">
            <h1 className="about-heading">指導單位</h1>
            <p>
                國立陽明交通大學建築研究所、應用藝術研究所、學務處課外活動輔導二組
            </p>
        </div>
    </section>
);

interface Sponsor {
    name: string;
    imgSrc: string;
}
const sponsors: Sponsor[] = [
    { name: '威秀影城', imgSrc: '/sponsors/vieshow_Logo.jpg'},
    { name: '豆戀迷', imgSrc: '/sponsors/doremi_Logo.svg'},
    { name: '王子神谷', imgSrc: '/sponsors/taichung-pancake_Logo.jpg'},
    { name: '三層山', imgSrc: '/sponsors/three-layer_Logo.jpg'},
    { name: '新天鵝堡桌遊', imgSrc: '/sponsors/swan-panasia-games_Logo.jpg'},
    { name: '陽明交大酷樂網', imgSrc: '/sponsors/nycu-colaz_Logo.png'},
    { name: '簡單生活實驗室', imgSrc: '/sponsors/simple-life-laboratory_Logo.png'},
    { name: '細鳳果茶', imgSrc: '/sponsors/xifeng_Logo.png'},
];

const Sponsor = (): ReactElement => (<section className="about-container about-container__center">
    <h1 className="about-heading">
        贊助單位
    </h1>

    <div className="about-img-gallery">
        {sponsors.map((sponsor, index) => (
            <img src={sponsor.imgSrc} alt={sponsor.name} key={`sponsor-${index}`} />
        ))}
    </div>
</section>)

const Members = (): ReactElement => (
    <section className="about-container">
      <Tabs.Root className="about-tabs" defaultValue={departments[0].id}>
        <h1 className="about-heading">團隊</h1>

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
    </section>
);

export default function About() {
  return (
    <div>
        <Members />
        <Hosts />
        <Sponsor />
    </div>
  );
}

