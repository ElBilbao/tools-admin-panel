import Head from "next/head";
import Link from "next/link";

function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-red-600 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">
          TOOL VIEW
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
            <Link href="/views/view-old-tools">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">Existing tools</a>
            </Link>
            <Link href="/views/view-individual-tool">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-900 mr-4">Tool View</a>
            </Link>
        </div>
      </div>
    </nav>
  );
}

/*
 FORM
*/
function ViewIndividualTool() {
  return (

    <div class="container px-6 mx-auto">
      
      <section class="mb-32 text-gray-800">
        <div class="block rounded-lg shadow-lg bg-white">
          <div class="flex flex-wrap items-center">
            <div class="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12 px-6">
              <img src="https://www.arrow.de/-/media/arrow/images/products/0117/yssks7g2e30_renesas-electronics_-001603658_4664__img1.jpg" alt="Hardware tool"
                class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div class="px-6 py-12 md:px-12">
                
                {/* Tool Content */}
                <h2 class="text-2xl font-bold mb-6 text-left">Tool description:</h2>
                
                <table class="min-w-full text-left">
                  <tbody>
                    <tr class="bg-white border-b">
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="uppercase text-red-600 font-bold">ID: </span>
                          5
                      </td>
                    </tr> 
                    <tr class="bg-white border-b">
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="uppercase text-red-600 font-bold">Name: </span>
                          Tool number five
                      </td>
                    </tr> 
                    <tr class="bg-white border-b">
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="uppercase text-red-600 font-bold">Supplier: </span>
                          Supplier number five
                      </td>
                    </tr> 
                    <tr class="bg-white border-b">
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="uppercase text-red-600 font-bold">Properties: </span>
                          Properties list number five
                      </td>
                    </tr> 
                    <tr class="bg-white border-b">
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="uppercase text-red-600 font-bold">Status: </span>
                          🟢 Available
                      </td>
                    </tr> 
                  </tbody>
                </table>                
                <br></br>
                <h2 class="text-2xl font-bold mb-6 text-left">Used by:</h2>
                <table class="min-w-full text-left">
                  <tbody>
                    <tr class="bg-white border-b">
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="uppercase text-red-600 font-bold">Used by: </span>
                          Employee number five
                      </td>
                    </tr> 
                    <tr class="bg-white border-b">
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="uppercase text-red-600 font-bold">Role: </span>
                          Embedded Systems Engineer
                      </td>
                    </tr> 
                    <tr class="bg-white border-b">
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span class="uppercase text-red-600 font-bold">Area: </span>
                          Embedded Systems
                      </td>
                    </tr> 
                  </tbody>
                </table>                
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
    
  );
}

export default function ToolView() {
  return (
    <>
      <Head>
        <title>Tool #123</title>
      </Head>

      <Header />
      
      <div style={{ textAlign: "center", textAlign: "-webkit-center" }}>
        <div>
          <ViewIndividualTool />
        </div>
      </div>


    </>
  );
}
