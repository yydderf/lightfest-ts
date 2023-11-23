import type { ReactElement } from 'react'

import "./hosts.scss"

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

export default Hosts