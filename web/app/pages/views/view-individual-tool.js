import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

const ToolInfoContext = React.createContext({
  toolInfo: [],
  fetchToolInfo: () => {},
});

function statusToEmoji(status, id) {
  if (status == "Available") {
    return "🟢 Available";
  } else if (status == "In use" || status == "In Use") {
    return "🟡 In use by user " + id;
  }
  return status;
}

const toolStatusChanger = async(status, userID, toolInfo) => {
  
  const data = {
    toolID: toolInfo.toolID,
    purchaseOrderID: 14,
    toolName: toolInfo.toolName,
    toolNotes: toolInfo.toolNotes,
    toolCategory: toolInfo.toolCategory,
    properties: toolInfo.properties,
    status: status,
    userID: toolInfo.userID == 14 ? userID : 14,
    pathToToolImage: toolInfo.pathToToolImage,
    purchasePrice_NoTAX: toolInfo.purchasePrice_NoTAX,
    salePrice_NoTAX: toolInfo.salePrice_NoTAX,
    material: toolInfo.material,
  };

  const JSONdata = JSON.stringify(data);
  const endpoint = `http://localhost:8000/tools/${toolInfo.toolID}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata
  };
  const response = await fetch(endpoint, options);
  if(response.status == 200) {
    alert("Tool status succesfully changed!");
    window.location = "http://localhost:3000/views/view-old-tools";
  }
  else {
    alert("Error: Response status " + response.status);
  }
}


function changeStatusComponent(status, userID, data) {
  if (status == "Available") {
    return (
      <>
        <input
          id="EmployeeID"
          class="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Employee ID"
        />
        <button onClick={() => toolStatusChanger("In use", document.getElementById("EmployeeID").value, data)} class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-1 uppercase border-yellow-500 border-t border-b border-r">
          Use
        </button>
      </>
    );
  } else if (status == "In use" || status == "In Use") {
    return (
        <button type="submit" onClick={() => toolStatusChanger("Available", userID, data)} class="px-8 rounded bg-green-400 text-gray-800 font-bold p-2 uppercase border-green-500 border-t border-b border-r">
          Free
        </button>
    );
  }
  return status;
}

export default function ViewToolInfo() {
  const router = useRouter();
  const { data } = router.query;
  // console.log(data);
  const [toolInfo, setToolInfo] = useState([]);
  const fetchToolInfo = async () => {
    const response = await fetch(`http://localhost:8000/tools/${data}`);
    const toolInfo = await response.json();
    setToolInfo(toolInfo[0]);
  };

  useEffect(() => {
    fetchToolInfo();
  }, []);

  return (
    <>
      <Head>
        <title>Tool #123</title>
      </Head>

      <ToolInfoContext.Provider value={{ toolInfo, fetchToolInfo }}>
        <nav class="flex items-center justify-between flex-wrap bg-red-600 p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">TOOL VIEW</span>
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
        <div style={{ textAlign: "center", textAlign: "-webkit-center" }}>
          <div class="container px-6 mx-auto">
            <section class="mb-32 text-gray-800">
              <div class="block rounded-lg shadow-lg bg-white">
                <div class="flex flex-wrap items-center">
                  <div class="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12 px-6">
                    <img
                      src="https://www.arrow.de/-/media/arrow/images/products/0117/yssks7g2e30_renesas-electronics_-001603658_4664__img1.jpg"
                      alt="Hardware tool"
                      class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                  <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                    <div class="px-6 py-12 md:px-12">
                      {/* Tool Content */}
                      <h2 class="text-2xl font-bold mb-6 text-left">
                        Tool description:
                      </h2>

                      <table class="min-w-full text-left">
                        <tbody>
                          {/* Tool ID */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                ID:{" "}
                              </span>
                              {toolInfo.toolID}
                            </td>
                          </tr>

                          {/* Tool Name */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                Name:{" "}
                              </span>
                              {toolInfo.toolName}
                            </td>
                          </tr>

                          {/* Tool Supplier */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                Supplier:{" "}
                              </span>
                              Supplier number five
                            </td>
                          </tr>

                          {/* Tool Properties */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                Properties:{" "}
                              </span>
                              {toolInfo.properties}
                            </td>
                          </tr>

                          {/* Tool Category */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                Category:{" "}
                              </span>
                              {toolInfo.toolCategory}
                            </td>
                          </tr>

                          {/* Tool Material */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                Material:{" "}
                              </span>
                              {toolInfo.material}
                            </td>
                          </tr>

                          {/* Tool Price */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                Price:{" "}
                              </span>
                              {toolInfo.purchasePrice_NoTAX}
                            </td>
                          </tr>

                          {/* Tool Notes */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                Notes:{" "}
                              </span>
                              {toolInfo.toolNotes}
                            </td>
                          </tr>

                          {/* Tool Status */}
                          <tr class="bg-white border-b">
                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <span class="uppercase text-red-600 font-bold">
                                Status:{" "}
                              </span>
                              {statusToEmoji(toolInfo.status, toolInfo.userID)}
                            </td>

                            <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {changeStatusComponent(toolInfo.status, toolInfo.userID, toolInfo)}
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
        </div>
      </ToolInfoContext.Provider>
    </>
  );
}
