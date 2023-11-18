import { useRef } from "react";
import "./crafts.scss";
import { motion } from "framer-motion";
import { useScroll, useSpring, useTransform } from "framer-motion";

import dummy from "/img/mountains.png"

import craft_11 from "/img/crafts/1/3.png"
import craft_21 from "/img/crafts/2/1.webp"
import craft_31 from "/img/crafts/3/1.jpg"
import craft_41 from "/img/crafts/4/1.webp"
import craft_51 from "/img/crafts/5/1.webp"

interface Item {
  id: number;
  title: string;
  img: string;
  desc: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "光語",
    img: craft_11,
    desc:
      "在一片燈海之中，佇立著兩座半圓透明球體，裡頭靜靜躺著兩台對講機。為什麼這裡會有兩台機器? 他們將能通到哪裡? 對講機的另一頭又會是什麼在等著我們呢?本作品透過讓觀眾進入球體內部，建立起超脫現實的虛幻空間，並在這裡創造出一個又一個驚奇的邂逅，透過人與人的交流，重拾校園溫度以及情感連結。",
  },
  {
    id: 2,
    title: "重燃",
    img: craft_21,
    desc:
      "「今夜，在這 Walpurgis Night，讓我們一起慶祝百花綻放的春天到來」。本作品結合仿真鮮花及抽象植物形象，當人們靠近裝置時，點亮裝置並使百花綻放，象徵人們透過團結戰勝了嚴酷而寒冷的冬天，重新迎來春天的溫暖與光彩，藉此傳達人與人相遇的意義以及團結的重要性。期望透過這個作品為冬天的校園中增添溫暖，並為人們帶來相遇和互動的契機",
  },
  {
    id: 3,
    title: "菇菇之森",
    img: craft_31,
    desc:
      "雨季來臨的交大校園中，和大雨同時而至的是滿山滿谷型態各異的蘑菇，在煙雨朦朧的新竹欣欣向榮，但卻如同灰姑娘的南瓜馬車般，在隔日太陽升起時轉瞬即逝。然而，菇菇們已經蓄勢待發，等待下一次大雨來臨時的重生。",
  },
  {
    id: 4,
    title: "深淵 Cube",
    img: craft_41,
    desc:
      "在交作業大學中，繁忙的課業與人際關係的壓力，總是壓著學生快喘不過氣，因此我們希望創作出一件融合科技與藝術的光影作品，有著深淵那深不見底的層層燈光、有著風雲變幻的光影色彩、有著井然有序的和諧感，幫助陽明交大的師生們能藉此暫時忘卻生活中繁雜，紓 解過往累積的壓力，並從一切煩惱中抽離自身。",
  },
  {
    id: 5,
    title: "超量蠕動",
    img: craft_51,
    desc:
      "本設計試圖探索互惠張拉複合系統在設計與施工層面的潛力。受到可展開一性質啟發，主要概念為利用可控變形以產生動態。藉由參數設計與物理模擬得出一種載重驅動的張拉-薄膜混合架構，圓環內部在薄膜受到應力時將觸發驅動機制而產生尺度變化。透過設計可展開、重組的結構單元，讓構造本身可被運送並重複運用於其他藝文空間。",
  },
];

const Single: React.FC<{ item: Item }> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-130, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Model</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Crafts: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="crafts-wrapper" ref={ref}>
      <div className="progress">
        {/* <h1 style={{letterSpacing: "50px", marginRight: "-50px"}}>作品</h1> */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Crafts;
