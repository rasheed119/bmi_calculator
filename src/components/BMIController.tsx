import React from "react";
import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { refreshOutline, calculatorOutline } from "ionicons/icons";

const BMIController: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonRow className="ion-padding">
      <IonCol className="ion-text-center">
        <IonButton onClick={props.onCalculate}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-center">
        <IonButton color="danger" onClick={props.onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BMIController;
