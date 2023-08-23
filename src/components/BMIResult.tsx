import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";

const BMIResult: React.FC<{result : number | string }> = props => {
  return (
    <IonCard>
      <IonCardContent className="ion-text-center">
        <h2>BMI : {props.result}</h2>
      </IonCardContent>
    </IonCard>
  );
};

export default BMIResult;
