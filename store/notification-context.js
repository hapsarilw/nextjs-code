import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function (notificationData) {},
  hiddenNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  function showNotificationHandler(notificationData){
    setActiveNotification(notificationData);
  }

  function hiddenNotificationHandler(){
    setActiveNotification(null);        
  }

  const context = { notification: activeNotification, showNotification: showNotificationHandler, hiddenNotification: hiddenNotificationHandler };

  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
