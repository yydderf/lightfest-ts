import { motion, Variants } from "framer-motion"

import './description.scss'

import background from "/img/new-2.png"

const childrenVariant: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
}

export const Description = () => {
  return (
    <div className="description-wrapper" style={{backgroundImage: `url(${background})`,  height: "100%", width: "100vw", backgroundSize: "cover", backgroundPosition: "center"}}>
    {/* <img src={circle} style={{width: "40%", position: "absolute", paddingLeft: "10%", zIndex: "1"}}/> */}
      <motion.div className="description-container" >
        <div className="overlap-group">
          <motion.p className="div" transition={{staggerChildren: 0.5}}>
            <motion.span className="text-wrapper" variants={childrenVariant} whileInView={{opacity: 1}}>嶼</motion.span>
            <span className="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <motion.span className="text-wrapper-2" variants={childrenVariant}>⸺ </motion.span>
            <span className="span">&nbsp;&nbsp;&nbsp;</span>
            <motion.span className="text-wrapper-3" variants={childrenVariant}>海洋或湖泊中的陸地。</motion.span>
          </motion.p>
          <br/>
          <div className="text-wrapper-5">
            陽明交通大學是一座島嶼，隔著大學路與光復路相接，獨立而未遺世；校園內的生態則如一座列嶼，每個人都是獨立的個體，但在漲退之際又能發現其實則相接。
          </div>
          <p className="element">
            《光嶼》試圖藉由光的渲染力，引領參與者漫遊於島嶼世界。
            展覽內容分為四大主題 ⸺「遺忘」、「警鐘」、「覺醒」與「重燃」，以陽明交大浩然圖書館為核心向外輻散，共展出 8
            件光影裝置、 2 件投影作品，及一系列音樂表演、光環境營造燈效等，使校園成為一個聆聽、聚集與創作的光場域。
          </p>
          <div className="text-wrapper-6">
            本次展覽以《光嶼》為題，欲探討自後疫情時代開始，學生生活逐漸走向單一，其活動途徑縮減至僅剩宿舍及系館，校園流動性的減弱，導致人與人之間溫度大幅流失此象，因此以一則傳說故事為起點，邀請觀眾一同探索溫度之於校園、及個體自身的意義。
          </div>
          <div className="text-wrapper-7">
            社會心理學家漢斯．羅查．艾澤曼的研究指出，當人們接觸到實體溫暖，就更有可能聯想到情感溫暖，進而引發正面反應。本屆策展人表示：「光作為熱能載體之一，因其理性與感性交織的特質，而成為一種獨特的知覺體驗。我們期許《光嶼》能作為『改變的第一站』⸺
            讓溫暖再次注入校園，重新連起校園中的我們。」
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Description