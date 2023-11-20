import "../App.css";

function StepB() {
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
  const  button = {
    background: '#1597e4',
    boxShadow: '0px 1px 2px 0px #0000000d',
  }
  const radio_label = {
    color: '#7a7a7a',
  }
 
  return (
    <div style={step_form_box}>
      <div className="p-8">
        <div className="flex justify-between mb-6">
          <span className="text-xl font-normal" style={heading_name}>Create a job</span>
          <span className="font-medium text-base" style={form_no}>Step 2</span>
        </div>
        <div className="col-span-full mb-6">
          <label htmlFor="experience" className="font-medium text-sm mb-1 block" style={label}>
            Experience{" "}
          </label>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <input
                type="text"
                id="experience-min"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Minimum"
              />
            </div>

            <div className="sm:col-span-3">
              <input
                type="text"
                id="experience-max"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Maximum"
              />
            </div>
          </div>
        </div>
        <div className="col-span-full mb-6">
          <label htmlFor="salary" className="font-medium text-sm mb-1 block" style={label}>
            Salary{" "}
          </label>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <input
                type="text"
                id="salary-min"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Minimum"
              />
            </div>

            <div className="sm:col-span-3">
              <input
                type="text"
                id="salary-max"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Maximum"
              />
            </div>
          </div>
        </div>

        <div className="col-span-full mb-6">
          <label htmlFor="emp" className="font-medium text-sm mb-1 block" style={label}>
          Total employee
          </label>
          <div className="input_box">
            <input
              type="text"
              id="emp"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="ex. 100"
            />
          </div>
        </div>
        <fieldset>
          <legend className="font-medium text-sm mb-1 block" style={label}>Apply type</legend>
          <div className="flex gap-x-4 mt-1 h-7">
            <div className="flex items-center gap-x-1">
              <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label htmlFor="push-everything" className="block font-normal	text-sm" style={radio_label}>Quick apply</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label htmlFor="push-email" className="block font-normal	text-sm" style={radio_label}>External apply</label>
            </div>
           </div>
        </fieldset>
        <div className="mt-24 text-end form_btn">
          <button style={button}
            type="submit"
            className="text-base	rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepB;
