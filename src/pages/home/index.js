/*
 * @Descripttion: 邀请好友
 * @Author: peroLuo
 * @Date: 2020-06-23 15:59:54
 * @LastEditTime: 2020-06-23 20:20:13
 */

import React, { useEffect, useState, useRef } from "react";
import "./global.less";

function Timeout({ realTime = 3600, isTimeout }) {
  const savedCallback = useRef(() => {});

  const [times, setTime] = useState(realTime);

  useEffect(() => {
    savedCallback.current = () => {
      if (times - 1 >= 0) {
        setTime(times - 1);
      } else {
        isTimeout();
      }
    };
  });

  useEffect(() => {
    setTime(realTime);
    const interval = setInterval(() => savedCallback.current(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [realTime]);

  const formatSeconds = (result) => {
    const h =
      Math.floor(result / 3600) < 10
        ? `0${Math.floor(result / 3600)}`
        : `${Math.floor(result / 3600)}`;
    const m =
      Math.floor((result / 60) % 60) < 10
        ? `0${Math.floor((result / 60) % 60)}`
        : `${Math.floor((result / 60) % 60)}`;
    const s =
      Math.floor(result % 60) < 10
        ? `0${Math.floor(result % 60)}`
        : `${Math.floor(result % 60)}`;
    return [h, m, s];
  };
  const [h, m, s] = formatSeconds(times);
  return (
    <div className="timeoutWrap">
      <div className="text">今日开奖倒计时</div>
      <div className="numberWrap">
        <div className="numberItem">{h[0]}</div>
        <div className="numberItem">{h[1]}</div>:
        <div className="numberItem">{m[0]}</div>
        <div className="numberItem">{m[1]}</div>:
        <div className="numberItem">{s[0]}</div>
        <div className="numberItem">{s[1]}</div>
      </div>
    </div>
  );
}

export default () => {
  const [realTime, setTime] = useState(10);
  return (
    <>
      <div className="shareFriend">
        <div className="swiperBox" />
        <div className="playRule">活动规则</div>
        <div className="activeTitle">高考战役 同舟共济</div>
        <div className="activeSubtitle">完美志愿助力千万考生金榜题名</div>
        <div className="inviteDetail">
          <div className="inviteItem">
            <div className="inviteText">
              已邀请
              <br />
              同学数
            </div>
            <div className="inviteNum">
              20
              <span>人</span>
            </div>
          </div>
          <div className="line" />
          <div className="inviteItem">
            <div className="inviteText">
              开通VIP
              <br />
              同学数
            </div>
            <div className="inviteNum">
              20
              <span>人</span>
            </div>
          </div>
        </div>
        <div className="myInvite">我的邀请记录</div>
        <div className="acitveTitle">邀请同学免费拿志愿填报高级卡</div>

        <Timeout
          realTime={realTime}
          isTimeout={() => {
            setTime(86400);
          }}
        />
      </div>
      <div className="inviteList">
        <div className="inviteUser">
          <div className="icon" />
          <div className="inviteMsgs">
            <div className="inviteMsgInner">
              <div className="invietePhone">
                <div className="phone">账号：133****1234</div>
                <div className="inviteNums">
                  已邀请 <span>13</span>个同学
                </div>
              </div>
              <div className="winPercent">
                预估中奖概率 <span>95%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="inviteUser">
          <div className="icon" />
          <div className="inviteMsgs">
            <div className="inviteMsgInner">
              <div className="invietePhone">
                <div className="phone">账号：133****1234</div>
                <div className="inviteNums">
                  已邀请
                  <span>13</span>
                  个同学
                </div>
              </div>
              <div className="winPercent">
                预估中奖概率 <span>95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
