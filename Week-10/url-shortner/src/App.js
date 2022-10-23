import "./App.css";
import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

const shortUrls = [];

function App() {
  const [shortenedLink, setShortenedLink] = useState("");
  const [userInput, setUserInput] = useState("");
  const [shortLinkList, setShortLinkList] = useState(shortUrls);

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      addLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  function addLink(link) {    
    setShortLinkList([...shortLinkList, link]);    
  }

  const listItems = shortLinkList.map((shortLink) =>
    <li >
      <div class="flex border-2 border-indigo-600 rounded-lg ...">
        <div class="flex w-64 h-14 justify-start items-center px-3">
           {shortLink} 
        </div>
        <div class="flex w-64 h-14 justify-center items-center">        
              <CopyToClipboard text={shortLink}>
              <button className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md">
                Copy URL to Clipboard
              </button>
              </CopyToClipboard>              
        </div>
      </div> 
    </li>
  );

  return (
    <div className=" container h-screen flex justify-center items-center">
      <div className=" text-center">
        <h1 className=" text-2xl font-medium text-blue-500 mb-4">
          Our <span className=" text-yellow-400">URL Shortener</span>
        </h1>
        <div>
          <input
            className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
            type="text"
            placeholder="Enter link to be shortened"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <button
            className=" bg-blue-500 text-white px-8 py-3 ml-4 rounded-md"
            onClick={() => {
              fetchData();
            }}
          >
            Submit URL
          </button>
          <div className=" mt-5">    
            <ul class="list-none">
              {listItems}              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
