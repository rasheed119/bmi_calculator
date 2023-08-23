import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const TopNav: React.FC<{
  Selectedbutton: "mkg" | "ftlg";
  onSeletChange: (value: "mkg" | "ftlg") => void;
}> = (props) => {
  const handlechange = (event : CustomEvent) => {
    props.onSeletChange(event.detail.value);
  };
  return (
    <IonSegment value={props.Selectedbutton} onIonChange={handlechange}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlg">
        <IonLabel>ft/lg</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default TopNav;
