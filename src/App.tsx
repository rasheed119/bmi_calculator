import React, { useRef, useState } from "react";
import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import BMIController from "./components/BMIController";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import BMIResult from "./components/BMIResult";
import BMIAlert from "./components/BMIAlert";
import TopNav from "./components/TopNav";

setupIonicReact();

const App: React.FC = () => {
  const weight = useRef<HTMLIonInputElement>(null);
  const height = useRef<HTMLIonInputElement>(null);
  const [show, setshow] = useState<boolean>(false);
  const [BMI, set_BMI] = useState<number | string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectvalue, setselectvalue] = useState<"mkg" | "ftlg">("mkg");

  const Calculate_BMI = () => {
    const entered_weight = weight.current!.value;
    const entered_height = height.current!.value;

    if (
      !entered_height ||
      !entered_weight ||
      +entered_height <= 0 ||
      +entered_weight <= 0
    ) {
      setIsOpen(true);
      return;
    }

    const weightconverstionfactor = selectvalue === "ftlg" ? 2.2 : 1;
    const heightconverstionfactor = selectvalue === "ftlg" ? 3.28 : 1;

    const converted_weight = +entered_weight / weightconverstionfactor;
    const converted_height = +entered_height / heightconverstionfactor;

    const BMI_value = converted_weight / (converted_height * converted_height);
    set_BMI(BMI_value.toFixed(2));

    setshow(true);
  };
  const reset = () => {
    weight.current!.value = "";
    height.current!.value = "";
    setshow(false);
  };

  const closeAlert = () => {
    setIsOpen(false);
  };

  const handleinputChange = (seletedValue: "mkg" | "ftlg") => {
    setselectvalue(seletedValue);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <TopNav
                Selectedbutton={selectvalue}
                onSeletChange={handleinputChange}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Your Height {selectvalue === "mkg" ? "(meter)" : "(feet)"}{" "}
                </IonLabel>
                <IonInput type="number" ref={height}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Your Weight {selectvalue === "ftlg" ? "(lbs)" : "(kg)"}{" "}
                </IonLabel>
                <IonInput type="number" ref={weight}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BMIController onCalculate={Calculate_BMI} onReset={reset} />
          <IonRow>
            <IonCol>
              {show ? <BMIResult result={BMI} /> : ""}
              <BMIAlert onOpen={isOpen} onClose={closeAlert} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
