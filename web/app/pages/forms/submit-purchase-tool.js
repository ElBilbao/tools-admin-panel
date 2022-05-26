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
              Tools Form
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
          <Link href="/forms/submit-user">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">
              New User Form
            </a>
          </Link>
          <Link href="/views/view-old-tools">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">
              Existing tools
            </a>
          </Link>
          <Link href="/views/view-individual-tool">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">
              Tool View
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
function PurchaseToolForm() {
  return (
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        {/* Purchase Order */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Purchase Order ID
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="XXXXXXXX"
          />
        </div>

        {/* Purchase Type */}
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            License Type
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Type 1</option>
              <option>Type 2</option>
              <option>Type 3</option>
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

        {/* Date Order */}
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Quantity
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            placeholder="12"
          />
        </div>

        {/* Date Received */}
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Unit Cost
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            placeholder="300"
          />
        </div>

        {/* Date Received */}
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Item Total
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            placeholder="500"
          />
        </div>

        {/* Notes */}
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Version
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="XXXXXXXX"
          />
        </div>

        {/* Notes */}
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Purchase Justification
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="XXXXXXXX"
          />
        </div>

        {/* Purchase Item Notes */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Purchase Item Notes
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="XXXXXXXX"
          />
        </div>

        {/* Status */}
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Status
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Available</option>
              <option>Approved</option>
              <option>Not available</option>
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
      </div>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-4 py-2 px-4 border border-gray-400 rounded shadow">
        Submit
      </button>
    </form>
  );
}

export default function SubmitPurchaseTool() {
  return (
    <>
      <Head>
        <title>Submit Tool</title>
      </Head>

      <Header />
      <div style={{ textAlign: "center", textAlign: "-webkit-center" }}>
        <div>
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate py-10">
            Purchase Tool Form
          </h2>
          <PurchaseToolForm />
        </div>
      </div>
    </>
  );
}
