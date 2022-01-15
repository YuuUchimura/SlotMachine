// const nowTime1 = document.getElementById("nowTime1");
// const nowTime2 = document.getElementById("nowTime2");
// const nowTime3 = document.getElementById("nowTime3");
// nowTime1.textContent = 0;
// nowTime2.textContent = 0;
// nowTime3.textContent = 0;

// // スタートボタン
// const start = document.getElementById("startTimer");
// start.addEventListener("click", () => {
//     clearInterval(stops1);
//     clearInterval(stops2);
//     clearInterval(stops3);
//     stop1();
//     stop2();
//     stop3();
//     setTime1.disabled = false;
//     setTime2.disabled = false;
//     setTime3.disabled = false;
// });

// let stops1;
// let stops2;
// let stops3;

// // 左
// let f = 0;
// const stop1 = () => {
//     stops1 = setInterval(() => {
//         f++;
//         nowTime1.textContent = f;
//         if (f === 9) {
//             f = 0;
//         }
//     }, 500);
// }
// // 真ん中
// let s = 0;
// const stop2 = () => {
//     stops2 = setInterval(() => {
//         s++;
//         nowTime2.textContent = s;
//         if (s === 9) {
//             s = 0;
//         }
//     }, 500);
// }
// // 右
// let t = 0;
// const stop3 = () => {
//     stops3 = setInterval(() => {
//         t++;
//         nowTime3.textContent = t;
//         if (t === 9) {
//             t = 0;
//         }
//     }, 500);
// }

// // 左のストップボタン
// const setTime1 = document.getElementById("setTime1");
// setTime1.addEventListener("click", () => {
//     clearInterval(stops1);
//     setTime1.disabled = true;
//     result();
// });
// // 真ん中のストップボタン
// const setTime2 = document.getElementById("setTime2");
// setTime2.addEventListener("click", () => {
//     clearInterval(stops2);
//     setTime2.disabled = true;
//     result();
// });
// // 右のストップボタン
// const setTime3 = document.getElementById("setTime3");
// setTime3.addEventListener("click", () => {
//     clearInterval(stops3);
//     setTime3.disabled = true;
//     result();
// });

// setTime1.disabled = true;
// setTime2.disabled = true;
// setTime3.disabled = true;

// // 結果
// const result = () => {
//     if (setTime1.disabled === true && 
//    setTime2.disabled === true && 
//    setTime3.disabled === true) {
//         if (f === s && s === t && f === t) {
//             alert("ビンゴ！");
//         } else {
//             alert("再挑戦、、");
//         }
//     }
// }


// // ここからチャレンジ問題
// 残骸
// const upper = document.getElementsByClassName("upper-slot");
// const upp = upper[0].childNodes;
// // let u1 = 9;
// const middle = document.getElementsByClassName("middle-slot");
// const mid = middle[0].childNodes;
// // let m = 0;
// const downer = document.getElementsByClassName("downer-slot");
// const dow = downer[0].childNodes;
// // let d = 1;
// upp.item(1).textContent = u1;
// upp.item(3).textContent = u2;
// upp.item(5).textContent = u3;

// mid.item(1).textContent = m1;
// mid.item(3).textContent = m2;
// mid.item(5).textContent = m3;

// dow.item(1).textContent = d1;
// dow.item(3).textContent = d2;
// dow.item(5).textContent = d3;
// ここまで残骸

// ここからチャレンジ問題
const nowTime4 = document.getElementById("nowTime4");
const nowTime1 = document.getElementById("nowTime1");
const nowTime7 = document.getElementById("nowTime7");
nowTime4.textContent = 9;
nowTime1.textContent = 0;
nowTime7.textContent = 1;
const nowTime5 = document.getElementById("nowTime5");
const nowTime2 = document.getElementById("nowTime2");
const nowTime8 = document.getElementById("nowTime8");
nowTime5.textContent = 9;
nowTime2.textContent = 0;
nowTime8.textContent = 1;
const nowTime6 = document.getElementById("nowTime6");
const nowTime3 = document.getElementById("nowTime3");
const nowTime9 = document.getElementById("nowTime9");
nowTime6.textContent = 9;
nowTime3.textContent = 0;
nowTime9.textContent = 1;
// スタートボタン
const start = document.getElementById("startTimer");
start.addEventListener("click", () => {
    clearInterval(go1);
    clearInterval(go2);
    clearInterval(go3);
    lets1();
    lets2();
    lets3();
    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
});
// 左のストップボタン
const setTime1 = document.getElementById("setTime1");
setTime1.addEventListener("click", () => {
    clearInterval(go1);
    setTime1.disabled = true;
    result();
});
// 真ん中のストップボタン
const setTime2 = document.getElementById("setTime2");
setTime2.addEventListener("click", () => {
    clearInterval(go2);
    setTime2.disabled = true;
    result();
});
// 右のストップボタン
const setTime3 = document.getElementById("setTime3");
setTime3.addEventListener("click", () => {
    clearInterval(go3);
    setTime3.disabled = true;
    result();
});

let go1;
let go2;
let go3;
let u1 = 9;
let m1 = 0;
let d1 = 1;
let u2 = 9;
let m2 = 0;
let d2 = 1;
let u3 = 9;
let m3 = 0;
let d3 = 1;

const lets1 = () => {
    go1 = setInterval(() => {
        u1++;
        m1++;
        d1++;
        if (u1 === 10) {
            u1 = 0;
        }
        if (m1 === 10) {
            m1 = 0;
        }
        if (d1 === 10) {
            d1 = 0;
        }
        nowTime4.textContent = u1;
        nowTime1.textContent = m1;
        nowTime7.textContent = d1;
        // upp.item(1).textContent = u;
        // mid.item(3).textContent = m;
        // dow.item(5).textContent = d;
    }, 100);
};
const lets2 = () => {
    go2 = setInterval(() => {
        u2++;
        m2++;
        d2++;
        if (u2 === 10) {
            u2 = 0;
        }
        if (m2 === 10) {
            m2 = 0;
        }
        if (d2 === 10) {
            d2 = 0;
        }
        nowTime5.textContent = u2;
        nowTime2.textContent = m2;
        nowTime8.textContent = d2;
        // upp.item(1).textContent = u;
        // mid.item(3).textContent = m;
        // dow.item(5).textContent = d;
    }, 100);
};
const lets3 = () => {
    go3 = setInterval(() => {
        u3++;
        m3++;
        d3++;
        if (u3 === 10) {
            u3 = 0;
        }
        if (m3 === 10) {
            m3 = 0;
        }
        if (d3 === 10) {
            d3 = 0;
        }
        nowTime6.textContent = u3;
        nowTime3.textContent = m3;
        nowTime9.textContent = d3;
        // upp.item(1).textContent = u;
        // mid.item(3).textContent = m;
        // dow.item(5).textContent = d;
    }, 100);
};

const result = () => {
    if (setTime1.disabled === true &&
        setTime3.disabled === true &&
        setTime3.disabled === true) {
        if (u1 === u2 && u1 === u3) {
            alert("おめでとう");
        } else {
            alert("再挑戦");
        }
    }
}

