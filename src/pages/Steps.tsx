import { useState } from "react";

import sampledata from "../sampledata.json";
import { Link } from "react-router-dom";

import TChat from "../components/steps/TChat";
import TFiles from "../components/steps/TFiles";
import TImage from "../components/steps/TImage";
import TInstruction from "../components/steps/TInstruction";
import TMarkdown from "../components/steps/TMarkdown";
import TNote from "../components/steps/TNote";
import TObject from "../components/steps/TObject";
import TQuery from "../components/steps/TQuery";
import TWebpage from "../components/steps/TWebpage";

const Steps = () => {
  const [activeComponent, setActiveComponent] = useState();
  const [activeStep, setActiveStep] = useState();
  const handleSelection = (elemento) => {
    setActiveComponent(elemento.type);
    setActiveStep(elemento);
    console.log(elemento);
  };
  return (
    <>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-20">
        {" "}
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Steps</h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav
              className="grid gap-4 text-sm text-muted-foreground"
              x-chunk="dashboard-04-chunk-0"
            >
              {sampledata.map((elemento, index) => (
                <Link
                  to=""
                  onClick={() => handleSelection(elemento)}
                  key={index}
                >
                  {elemento.step_id} <mark>{elemento.type}</mark>
                </Link>
              ))}
            </nav>
            <div className="grid gap-6">
              {activeComponent === "chat" && <TChat theStep={activeStep} />}
              {activeComponent === "files" && <TFiles theStep={activeStep} />}
              {activeComponent === "image" && <TImage theStep={activeStep} />}
              {activeComponent === "instruction" && (
                <TInstruction theStep={activeStep} />
              )}
              {activeComponent === "markdown" && (
                <TMarkdown theStep={activeStep} />
              )}
              {activeComponent === "note" && <TNote theStep={activeStep} />}
              {activeComponent === "object" && <TObject theStep={activeStep} />}
              {activeComponent === "query" && <TQuery theStep={activeStep} />}
              {activeComponent === "webpage" && (
                <TWebpage theStep={activeStep} />
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Steps;
