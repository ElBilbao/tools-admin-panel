import Head from "next/head";
import Link from "next/link";

function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-red-600 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">
          OLD TOOL VIEWS
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
function ExistingTools() {
  return (
    <div>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex items-stretch w-full mb-4">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-green bg-clip-padding border border-solid border-red-300 rounded transition ease-in-out m-0 focus:text-black-700 focus:bg-white focus:border-red-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"></input>
      <button class="btn inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-gray  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>

<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-gray-50">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                ID
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Description
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Tool 1
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                This is tool number one
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                🟢
              </td>
            </tr> 
            
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Tool 2
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                This is tool number two
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                🔴
              </td>
            </tr> 

            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Tool 3
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                This is tool number three
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              🟡
              </td>
            </tr> 

            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Tool 4
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                This is tool number four
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ⚫
              </td>
            </tr> 

            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Tool 5
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                This is tool number five
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                🟢
              </td>
            </tr> 

            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Tool 6
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                This is tool number six
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                🟢
              </td>
            </tr> 


          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item disabled"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
          href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">1</a></li>
      <li class="page-item active"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-red-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-black shadow-md focus:shadow-md"
          href="#">2</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">3</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">Next</a></li>
    </ul>
  </nav>
</div>


</div>
  );
}

export default function ViewOldTools() {
  return (
    <>
      <Head>
        <title>Submit Tool</title>
      </Head>

      <Header />
      
      <div style={{ textAlign: "center", textAlign: "-webkit-center" }}>
        <div>
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate py-10">
            Existing Tools
          </h2>
          <ExistingTools />
        </div>
      </div>


    </>
  );
}