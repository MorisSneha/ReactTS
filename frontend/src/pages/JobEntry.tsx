import "../App.css";
import jobLogo from "../job_card_logo.png";

function JobEntry(props: {
  jobTitle: any;
  companyName: any;
  location: any;
  time: any;
  experience: any;
  salary: any;
  employess: any;
  btnPrimary: boolean;
}) {
  const job_entry_card = {
    border: "1px solid #dadedf",
    width: "830px",
    height: "320px",
    borderRadius: "10px",
  };
  const primary = {
    background: "#1597e4",
  };
  const secondary = {
    color: "#1597e4",
    border: "1px solid #1597e4",
  };
  const job_location = {
    color: '#646464',
  }
  const job_txt_black = {
    color: '#212427',
  
  }
  return (
    <div className="py-4 px-6 bg-white job_entry_card_box" style={job_entry_card}>
      <div className="flex gap-x-2">
        <span className="">
          <img src={jobLogo} alt="" />
        </span>
        <span className="">
          <h2 className="text-2xl font-normal text-black m-0">
            {props.jobTitle}
          </h2>
          <div className="font-normal text-base text-black">
            {props.companyName}
          </div>
          <div className="font-normal text-base mb-6" style={job_location}>
            {props.location}
          </div>
          <div className="font-normal text-base mb-2" style={job_txt_black}>
            {props.time}
          </div>
          <div className="font-normal text-base mb-2" style={job_txt_black}>
            {props.experience}
          </div>
          <div className="font-normal text-base mb-2" style={job_txt_black}>
            {props.salary}
          </div>
          <div className="font-normal text-base mb-6" style={job_txt_black}>
            {props.employess}
          </div>
          {props.btnPrimary ? (
            <button style={primary} className="primary rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply Now
            </button>
          ) : (
            <button style={secondary} className="secondary bg-white rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              External Apply
            </button>
          )}
        </span>
      </div>
    </div>
  );
}

export default JobEntry;
