import Head from "next/head";
import Link from "next/link";

function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-red-600 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">
          Tool Admin Panel
        </span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link href="/">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">
              Home
            </a>
          </Link>
          <Link href="/forms/submit-old-tool">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">
              Existing Tools Form
            </a>
          </Link>
          <Link href="/forms/submit-purchase-order">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">
              Purchase Order Form
            </a>
          </Link>
          <Link href="/forms/submit-purchase-tool">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">
              Purchase Tool Form
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

/*
 FORM
*/
function ExistingForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
   
    // Get data from the form.
    const data = {
      "toolID": event.target.gridSerialNumber.value,
      "quotationID": 0,
      "toolName": event.target.gridName.value,
      "toolNotes": event.target.gridNotes.value,
      "toolCategory": event.target.gridCategory.value,
      "toolType": event.target.gridType.value,
      "pathToToolImage": "",
      "purchasePrice_NoTAX": event.target.gridPrice.value,
      "salePrice_NoTAX": 0,
      "material": event.target.gridMaterial.value
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    console.log(JSONdata)

    const res = await fetch("http://localhost:8000/tools/")
    console.log(res)
    // API endpoint where we send form data.
    const endpoint = 'http://localhost:8000/tools/'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our tools API and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    //const result = await response.json()
    
    if (response.status == 200) {
      alert("Successfully added the existing tool.")
      event.target.reset();
    } else {
      alert("Error: Response status " + response.status)
    }
    
  }

  return (
    <form onSubmit={handleSubmit} class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-serial-number"
          >
            Serial Number (ID)
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="gridSerialNumber"
            type="text"
            placeholder="2932"
          />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="gridName"
            type="text"
            placeholder="Industrial Tape"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-material"
          >
            Material
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="gridMaterial"
            type="text"
            placeholder="Iron"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-notes"
          >
            Notes
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="gridNotes"
            placeholder="Warranty overdue..."
          />
          <p class="text-gray-600 text-xs italic">Notes</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-price"
          >
            Price
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="gridPrice"
            type="number"
            placeholder="1000"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-category"
          >
            Category
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gridCategory"
            >
              <option>Hardware</option>
              <option>Software</option>
              <option>License</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-type"
          >
            Type
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="gridType"
            type="text"
            placeholder="Technological"
          />
        </div>
      </div>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-4 py-2 px-4 border border-gray-400 rounded shadow">
        Submit
      </button>
    </form>
  );
}

export default function SubmitOldTool() {
  return (
    <>
      <Head>
        <title>Submit Tool</title>
      </Head>

      <Header />
      <div style={{ textAlign: "center", textAlign: "-webkit-center" }}>
        <div>
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate py-10">
            Existing Tool Form
          </h2>
          <ExistingForm />
        </div>
      </div>
    </>
  );
}
