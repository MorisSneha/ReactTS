import "../App.css";

function StepA() {
  const step_form_box = {
    border: '1px solid #e6e6e6',
    width: '577px',
    height: '564px',
    borderRadius: '10px',
  }
  const heading_name = {
    color: '#182021',
  }
  const form_no = {
    color: '182021',
  }
  const label = {
    color: '#212121',
  }
  const required = {
    color: '#d86161',
  }
 const  button = {
    background: '#1597e4',
    boxShadow: '0px 1px 2px 0px #0000000d',
  }
  
  return (
    <div style={step_form_box}>
      <div className="p-8">
        <div className="form_header flex justify-between mb-6">
          <span className="text-xl font-normal" style={heading_name}>Create a job</span>
          <span className="font-medium text-base" style={form_no}>Step 1</span>
        </div>
        <div className="col-span-full mb-6">
          <label style={label}
            htmlFor="job-title"
            className="font-medium text-sm mb-1 block"
          >
            Job title<span style={required}>*</span>
          </label>
          <div className="input_box">
            <input
              type="text"
              id="job-title"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="ex. UX UI Designer"
            />
          </div>
        </div>
        <div className="col-span-full mb-6">
          <label htmlFor="company" className="font-medium	text-sm	mb-1 block" style={label}>
            Company name<span style={required}>*</span>
          </label>
          <div className="input_box">
            <input
              type="text"
              id="company"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="ex. Google"
            />
          </div>
        </div>
        <div className="col-span-full mb-6">
          <label
            htmlFor="industry"
            className="font-medium text-sm mb-1 block" style={label}
          >
            Industry<span style={required}>*</span>
          </label>
          <div className="input_box">
            <input
              type="text"
              id="industry"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="ex. Information Technology "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label style={label}
              htmlFor="location"
              className="font-medium text-sm mb-1 block"
            >
              Location
            </label>
            <div className="input_box">
              <input
                type="text"
                id="location"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="ex. Chennai"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label style={label}
              htmlFor="remote"
              className="font-medium text-sm mb-1 block"
            >
              Remote type
            </label>
            <div className="input_box">
              <input
                type="text"
                id="remote"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="ex. In-office"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 text-end">
          <button style={button}
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepA;
