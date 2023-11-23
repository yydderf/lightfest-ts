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
import craft_61 from "/img/crafts/6/1.jpg"
import craft_71 from "/img/crafts/7/1.jpg"
import craft_81 from "/img/crafts/8/1.jpg"
import craft_91 from "/img/crafts/9/1.png"
import craft_101 from "/img/crafts/10/1.jpg"

import background from "/img/new-4.png"

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
    title: "超量蠕動",
    img: craft_41,
    desc:
      "本設計試圖探索互惠張拉複合系統在設計與施工層面的潛力。受到可展開一性質啟發，主要概念為利用可控變形以產生動態。藉由參數設計與物理模擬得出一種載重驅動的張拉-薄膜混合架構，圓環內部在薄膜受到應力時將觸發驅動機制而產生尺度變化。透過設計可展開、重組的結構單元，讓構造本身可被運送並重複運用於其他藝文空間。",
  },
  {
    id: 5,
    title: "深淵 Cube",
    img: craft_51,
    desc:
      "在交作業大學中，繁忙的課業與人際關係的壓力，總是壓著學生快喘不過氣，因此我們希望創作出一件融合科技與藝術的光影作品，有著深淵那深不見底的層層燈光、有著風雲變幻的光影色彩、有著井然有序的和諧感，幫助陽明交大的師生們能藉此暫時忘卻生活中繁雜，紓 解過往累積的壓力，並從一切煩惱中抽離自身。",
  },
  {
    id: 6,
    title: "綜一！解構！",
    img: craft_61,
    desc:
      "綜合一館是交大校區學生們通識課程的共同記憶。其奇特的建築結構和秋冬季節時，充滿新竹特色的風，使我們選擇它作為建築解構的主題。綜合一館的視覺特色是一樓的露天大平台和斜坡，我們保留了這兩個輪廓，並將半露天的B1停車場解構為支撐平台的縱向立板。我們對平台上的L形大樓進行了立面解構，並觀察到綜合一館的風是對角斜向集束的。我們將這種意象融入其中，象徵綜合一館的博雅和通識教育精神。",
  },
  {
    id: 7,
    title: "浩然圖書館",
    img: craft_71,
    desc:
      "浩然圖書館是交大最有特色的地標之一，也是交大人共同的回憶，無論白天黑夜都是大家休憩和學習的好去處，白天為我們敞開知識的大門，晚上為我們加油點燈。希望我們的作品能在晚上綻放出璀璨的光芒，點燃交大學生的回憶。"
  },
  {
    id: 8,
    title: "十二舍",
    img: craft_81,
    desc:
      "本作品以校內的十二舍作為設計依據，設計上著重於凸顯其三芒星的整體構造和牆側的階梯型結構，並使用壓克力板為素材，在夜晚中配合燈光的方式呈現。透過此模型，期許師生們能感受到其在莘莘學子們努力奮鬥、步步高升之於，作為黑夜中閃耀的明燈和令人安心的避風港之象徵意義。",
  },
  {
    id: 9,
    title: "Suspiria",
    img: craft_91,
    desc:
      "本作品使用技術主要透過計算畫面連續兩幀間的差異，抓取並強調畫面移動中物件，呈現類似靈魂輪廓的迷幻殘影，多個連續畫面又形成視覺暫留。其餘靜止部分由於無變化，均為黑色背景，觀眾僅能專注於眼前正在變動的手勢。演出過程中僅有手部出現在鏡頭前，搭載預先設置好的基本色彩調控、鏡像、幀數、延遲等技術，不多炫技，透過表演者的細緻操作詮釋文本，以手構成誕生、心跳、菩薩等形象。創作者亦加入即興演出，視現場情況與投影布幕配合呈無限拉長效果、不可預知的交互作用；抑或改變演出時上半身著裝色彩，呈現不同心理面向。",
  },
  {
    id: 10,
    title: "彈性迭代",
    img: craft_101,
    desc:
      "本設計的主要概念是將振動以某種訊息的形式從一個地方傳送到另一個地方。 整個設計以張拉整體的結構系統來構成，而這個系統有趣在於它的大部分都會因為碰觸而晃動。如果將力量放在結構上，另一側的人可以感覺到它的搖晃。我們首先運用竹材，設計標準化的張拉整體單元，在單元整體的層級上再形成另一個整體來強化搖晃的特性，概念即是將竹子本身的彈性以及張拉整體的彈性層次套疊，進而讓彈性震動來回傳遞、增幅並迭代。",
  },
  {
    id: 11,
    title: "Writing for Night",
    img: dummy,
    desc:
      "在這個匆忙且充滿日常瑣事的世界裡，我們常常忽略了文字所擁有的力量，以及它所能帶來的正面影響。透過投影，文字不僅僅是靜止的存在，它在黑暗中舞動、變換，彷彿活生生地呼吸著。它們的出現和消失，彷彿提醒著我們生活中瞬息萬變的本質，而文字所承載的信息和情感卻是不變的。我希望觀者在看到這些文字投影時，能夠感受到文字所帶來的溫暖。在繁忙的生活中停下腳步，靜心感受文字所傳達的情感和啟示，讓文字的力量在心靈深處綻放，成為一種靈魂的治癒。",
  },
];

const Single: React.FC<{ item: Item }> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section>
      <div className="container" ref={ref} style={{backgroundImage: `url(${background})`, height: "100vh", width: "100vw", backgroundSize: "cover"}}>
        <div className="wrapper">
          {/* <h1>ART</h1>
          <h1>{item.title}</h1>
          <h1></h1> */}
          <div className="image-container">
            <img src={item.img} alt="" style={{borderRadius: "10px", marginTop: "100px", marginBottom: "100px"}}/>
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>模型</button> */}
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
    <div className="crafts-wrapper" ref={ref} >
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Crafts;
