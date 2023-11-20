import React from "react";
import "./App.css";
import StepA from "./pages/StepA";
import StepB from "./pages/StepB";
import JobEntry from "./pages/JobEntry";
import JobEntryView from "./pages/JobEntryView";

function App() {
  return (
    <>
      <div className="mx-4 my-8">
        <StepA />
      </div>
      <div className="mx-4 my-8">
        <StepB />
      </div>
      <div className="mx-4 my-8">
        <JobEntry
          jobTitle="UX UI Designer"
          companyName="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu, India (In-office)"
          time="Part-Time (9.00 am - 5.00 pm IST)"
          experience="Experience (1 - 2 years)"
          salary="INR (₹) 30,000 - 50,000 / Month"
          employess="51-200 employees"
          btnPrimary={true}
        />
      </div>
      <div className="mx-4 my-8">
        <JobEntryView />
      </div>
    </>
  );
}

export default App;
