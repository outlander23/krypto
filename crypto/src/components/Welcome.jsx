import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";
const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ name, type, placeholder, handelChange }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handelChange}
      className="mb-4 p-2 pl-4 outline-none bg-transparent border-2 w-full rounded-full text-white"
    />
  );
};
const Welcome = () => {
  const connectWallet = () => {};
  return (
    <div className="flex justify-center items-center ">
      <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-white  sm:text-5xl text-2xl text-gradient">
            Send Krypto <br />
            Across the world
          </h1>
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea
            aspernatur beatae dolorum odio minus!
          </p>

          <button
            type="button"
            className="mt-4 flex flex-row px-4 py-2 w-full items-center justify-center rounded-3xl  text-white bg-[#029b02]"
            onclick={() => connectWallet()}
          >
            Connect Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 mt-10">
            <div className={`rounded-tl-lg ${commonStyles}`}>Reliability</div>
            <div className={` ${commonStyles}`}>Security</div>
            <div className={`rounded-tr-lg ${commonStyles}`}>Web 3.0</div>
            <div className={`rounded-bl-lg ${commonStyles}`}>Low fees</div>
            <div className={`${commonStyles}`}>Ethereum</div>
            <div className={`rounded-br-lg ${commonStyles}`}>Rinkby</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my- eth-card bg-[#029b02b2] white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {/* {shortenAddress(currentAccount)} */}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="w-[80%] blue-glassmorphism p-4 items-center m-4 ">
            <Input name="address" placeholder="Enter Address" type="text" />
            <Input name="amount" placeholder="Enter Amount" type="number" />
            <Input name="keyword" placeholder="Enter Keyword" type="text" />
            <Input name="message" placeholder="Enter message" type="text" />
            <div className="h-[1px] text-white bg-[#fff] w-full  mb-3 " />
            {true && (
              <button
                type="submit"
                className="px-4 py-2 w-full inline-block justify-center items-center rounded-full bg-[#029b02]"
              >
                Send
              </button>
            )}
            {false && <Loader />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
