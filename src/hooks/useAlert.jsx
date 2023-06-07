import NotificationIcon from "components/icons/NotificationIcon";
import { useState } from "react";

export const useAlert = () => {
    const [error, setDanger] = useState(null);
    const [message, setMessage] = useState(null);
    const [warning, setWarning] = useState(null);
    return {
      setDanger,
      renderDanger: () => {
        return (
          error && (
            <div
              className="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <NotificationIcon/>
              <div>{error}</div>
            </div>
          )
        );
      },
      setMessage,
      renderMessage: () => {
        return (
          message && (
            <div
            className="alert alert-success d-flex align-items-center"
              role="alert"
            >
             <NotificationIcon/>
              <div>{message}</div>
            </div>
          )
        );
      },
      setWarning,
      renderWarning: () => {
        return (
          warning && (
            <div
              className="alert alert-warning d-flex align-items-center"
              role="alert"
            >
               <NotificationIcon/>
              <div>{warning}</div>
            </div>
          )
        );
      },
      Clean: () => {
        setDanger(null);
        setMessage(null);
        setWarning(null);
      },
    };
}