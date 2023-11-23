import type { ReactElement } from 'react'

import "./sponsor.scss"

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

// const Sponsor = (): ReactElement => (<section className="about-container about-container__center">
const Sponsor = (): ReactElement => {
    return (
        <div>
            <h1 className="about-heading">
                贊助單位
            </h1>

            <div className="about-img-gallery">
                {sponsors.map((sponsor, index) => (
                    <img src={sponsor.imgSrc} alt={sponsor.name} key={`sponsor-${index}`} />
                ))}
            </div>
        </div>
    )
}

export default Sponsor