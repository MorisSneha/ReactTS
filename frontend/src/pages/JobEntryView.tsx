import "../App.css";
import React from "react";

import jobLogo from "../job_card_logo.png";
import JobEntry from "./JobEntry";
function JobEntryView() {
 const   job_entry_view = {
        background: '#D8D8D8',
      
       }
  return (
    <div className="job_entry_view py-4 px-8 columns-2 gap-8" style={job_entry_view}>
      <div className="w-full mb-8">
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
      <div className="w-full mb-8">
        <JobEntry
          jobTitle="Interaction Designer"
          companyName="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu, India (In-office)"
          time="Part-Time (9.00 am - 5.00 pm IST)"
          experience="Experience (1 - 2 years)"
          salary="INR (₹) 30,000 - 50,000 / Month"
          employess="51-200 employees"
          btnPrimary={false}
        />
      </div>
      <div className="w-full mb-8">
        <JobEntry
          jobTitle="Developer"
          companyName="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu, India (In-office)"
          time="Part-Time (9.00 am - 5.00 pm IST)"
          experience="Experience (1 - 2 years)"
          salary="INR (₹) 30,000 - 50,000 / Month"
          employess="51-200 employees"
          btnPrimary={false}
        />
      </div>
      <div className="w-full mb-8">
        <JobEntry
          jobTitle="SEO Analyst"
          companyName="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu, India (In-office)"
          time="Part-Time (9.00 am - 5.00 pm IST)"
          experience="Experience (1 - 2 years)"
          salary="INR (₹) 30,000 - 50,000 / Month"
          employess="51-200 employees"
          btnPrimary={true}
        />
      </div>
    </div>
  );
}

export default JobEntryView;
