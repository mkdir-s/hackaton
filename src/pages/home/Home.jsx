
import { useState } from "react";
import Form from "../../components/form/Form";
import {
  Progress
} from "antd";
import Cam from "../../components/cam/Cam";

function Home() {
  const [progressNum, setProgressNum] = useState(0);
  const [step, setStep] = useState(0);


  return (
    <div className="container">
        <Progress percent={progressNum} status="active" />
        {step==0 ? <Cam /> : <Cam />}
        <Form />
    </div>
  );
}

export default Home;
