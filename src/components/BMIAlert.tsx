import React from "react";
import { IonAlert } from "@ionic/react";

const BMIAlert: React.FC<{ onOpen: boolean; onClose: () => void }> = (
  props
) => {
  return (
    <IonAlert
      isOpen={props.onOpen}
      header="Invalid Input"
      message="Please Enter the Valid Input"
      buttons={["OK"]}
      onDidDismiss={props.onClose}
    ></IonAlert>
  );
};

export default BMIAlert;
