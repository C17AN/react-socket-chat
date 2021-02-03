import React, { useEffect, useState } from "react";

const ChatLog = ({ socket }) => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    // messsgeItem : {msg: String, name: String, timeStamp: String}
    socket.on("onReceive", (messageItem) => {
      setMsgList((msgList) => [...msgList, messageItem]);
      console.log(messageItem);
    });
    socket.on("onConnect", (systemMessage) => {
      setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    socket.on("onDisconnect", (systemMessage) => {
      setMsgList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div>
      {msgList.map((msg, idx) => (
        <div key={idx}>
          <div>{msg.userName}</div>
          <div>{msg.timeStamp}</div>
          <div>{msg.msg}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatLog;
