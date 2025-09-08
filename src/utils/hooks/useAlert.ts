import { useState } from "react";
import { AlertType } from "../../components/Alert";

const useAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(AlertType.Success);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (type: AlertType, message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return { showAlert, alertType, alertMessage, showAlertMessage };
};

export default useAlert;
