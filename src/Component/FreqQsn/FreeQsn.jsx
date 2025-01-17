"use client"
import style from "./freeQsn.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import { useState } from "react";
export const freqAskQsnData = [
  {
    id: 1,
    title: "How to buy FOX tokens",
    content:
      "It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.",
    add: <AddIcon className={style.add} />,
    remove: <RemoveIcon className={style.add} />,
  },
  {
    id: 2,
    title: "What is the value of FOX tokens?",
    content:
      "It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.",
    add: <AddIcon className={style.add} />,
    remove: <RemoveIcon className={style.add} />,
  },
  {
    id: 3,
    title: "What is the value of FOX tokens?",
    content:
      "It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.",
    add: <AddIcon className={style.add} />,
    remove: <RemoveIcon className={style.add} />,
  },
  {
    id: 4,
    title: "How are coins distributed?",
    content:
      "It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.",
    add: <AddIcon className={style.add} />,
    remove: <RemoveIcon className={style.add} />,
  },
  {
    id: 5,
    title: "How to buy FOX tokens?",
    content:
      "It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.",
    add: <AddIcon className={style.add} />,
    remove: <RemoveIcon className={style.add} />,
  },
  {
    id: 6,
    title: "How are coins distributed?",
    content:
      "It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.",
    add: <AddIcon className={style.add} />,
    remove: <RemoveIcon className={style.add} />,
  },
  {
    id: 7,
    title: "How to buy FOX tokens?",
    content:
      "It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.",
    add: <AddIcon className={style.add} />,
    remove: <RemoveIcon className={style.add} />,
  },
];

const FreeQsn = () => {
  const [selectedId, setSelectedId] = useState(null);
  const handleToggleIcon = (id) => {
      setSelectedId((prevId) => (prevId === id ? null : id))
  }
  return (
    <div className={style.section}>
      <div className={style.grid}>
        <div className={style.qsn}>
          <h1>Frequently Asked Questions</h1>
          <p>DO have any kind Of questions? We're here to help.</p>
          <div className={style.img}>
            <Image src="/img/freq.png" fill alt="img" className={style.f_img} />
          </div>
        </div>
        <div className={style.freQsn}>
          {freqAskQsnData.map((data) => {
            return (
              <ul className={style.qsn_list} key={data.id}>
                <li className={style.header} onClick={() => handleToggleIcon(data.id)}>
                  <div className={style.headers}>
                    <div className={style.titles}>
                       <div className={style.id}>{data.id}</div>
                       <div className={style.title}>{data.title}</div>
                    </div>
                    {selectedId === data.id ? <div className={style.add} onClick={() => handleToggleIcon(data.id)}>{data.add}</div> : <div className={style.add} onClick={() => handleToggleIcon(data.id)}>{data.remove}</div>}
                  </div>
                  {selectedId === data.id && <div className={style.content}>{data.content}</div>}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FreeQsn;
