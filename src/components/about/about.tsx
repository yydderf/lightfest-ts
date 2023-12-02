import type { ReactElement } from 'react'
import {motion} from "framer-motion"

import "./about.scss"

import * as Tabs from "@radix-ui/react-tabs";
import {departments} from "../../lib/organization.ts";

import background1 from "/img/new-4.png"

interface Member {
    name: string;
    department: string;
    imgSrc: string;
}

const members: Member[] = [
    {name: "廖奕宣", department: "總召兼策展", imgSrc: "/img/member/廖奕宣 2.jpg"},
    {name: "張鈺群", department: "專案部長", imgSrc: "/img/member/張鈺群 2.jpg"},
    {name: "林曉玫", department: "行銷部長", imgSrc: "/img/member/林曉玫 2.jpg"},
    {name: "林睿霖", department: "活動部長", imgSrc: "/img/member/林睿霖 2.jpg"},
    {name: "潘丞詡", department: "執行秘書", imgSrc: "/img/member/潘丞詡 2.jpg"},
    {name: "蔡涵雅", department: "副召兼公關", imgSrc: "/img/member/蔡涵雅 2.jpg"},
    {name: "賴安俞", department: "設計部長", imgSrc: "/img/member/賴俞安 2.jpg"},
    {name: "陳品兆", department: "技術部長", imgSrc: "/img/member/陳品兆 2.jpg"},
    {name: "黃婉瑜", department: "總務部長", imgSrc: "/img/member/黃婉瑜 2.jpg"},
]

const Hosts = (): ReactElement => (
    <section className="about-all-container">
        <div className="about-wrapper">
            <div className="about-title">
                <h1>執行</h1>
                <h1>團隊</h1>
            </div>
            <div className="about-container">
                {departments.map((department) => (
                    <div className="about-host">
                        <div className="about-heading">
                            {department.name}
                        </div>
                        <div className="about-members">
                            {department.members.map((member) => (
                                <>
                                <p>{member.name}</p>
                                <p style={{fontWeight: "bold"}}>|</p>
                                </>
                            ))}
                        </div>
                    </div>
                ))}
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
            <div className="about-host">
                <h1 className="about-heading">贊助單位</h1>
                {/* <div className="about-img-gallery">
                    {sponsors.map((sponsor, index) => (
                        <img src={sponsor.imgSrc} alt={sponsor.name} key={`sponsor-${index}`} />
                    ))}
                </div> */}
            </div>
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
    <section className="team-container">
        {/* <h1>CORE</h1>
        <h1>TEAM</h1> */}
        <div className="team-title">
            {/* <h1 className="about-heading">＜＜光嶼＞＞</h1> */}
            {/* <h1 className="about-heading">核心執行團隊</h1> */}
            <h1 className="about-heading">核心</h1>
            <h1 className="about-heading">團隊</h1>
        </div>
        <div className="member-grid-container">
            {members.map((member, index) => (
                <div className='member-grid'>
                    <div className="member-grid-title">
                        <p>{member.department}</p>
                        <p>{member.name}</p>
                    </div>
                    <motion.div className="member-grid-image" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                        <img src={member.imgSrc} style={{ margin: "auto", display: "block", borderRadius: "20px", borderColor: "white", border: "3px solid white"}}/>
                    </motion.div>
                </div>
            ))}
        </div>

    </section>
);

export default function About() {
  return (
    <div style={{position: "relative", color: "#22323f"}}>
        <div className="about-member" style={{backgroundImage: `url(${background1})`, height: "100vh", width: "100vw", backgroundSize: "cover"}}>
            <Members />
        </div>
        <div className="about-host" style={{backgroundImage: `url(${background1})`, height: "100vh", width: "100vw", backgroundSize: "cover"}}>
            <Hosts />
        </div>
        {/* <div className="about-sponsor" style={{backgroundImage: `url(${background1})`, height: "100vh", width: "100vw", backgroundSize: "cover"}}>
            <Sponsor />
        </div> */}
    </div>
  );
}

