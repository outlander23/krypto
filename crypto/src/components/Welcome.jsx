import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Input = ({ name, vlaue, placeholder, type = "text", onChange }) => {
  return (
    <input
      name={name}
      vlaue={vlaue}
      placeholder={placeholder}
      type={type}
      className={`p-4 block m-4 rounded-full border-solid`}
      onChange={(e) => onChange(e, name)}
    />
  );
};

const Welcome = () => {
  const { connectWallet, handelChange, formData, sendTransaction } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { receiver, amount, message } = formData;

    e.preventDefault();

    if (!receiver || !amount || !message) return;

    sendTransaction();
  };

  return (
    <section className="">
      <div className="">
        <Input
          name="receiver"
          placeholder="Enter Receiver Address"
          vlaue={formData.receiver}
          onChange={handelChange}
        />
        <Input
          name="amount"
          placeholder="Enter amount"
          vlaue={formData.amount}
          type="number"
          onChange={handelChange}
        />
        <Input
          name="message"
          placeholder="Enter message "
          vlaue={formData.message}
          onChange={handelChange}
        />
        <Input
          name="keyword"
          placeholder="Enter Keyword Address"
          vlaue={formData.keyword}
          onChange={handelChange}
        />
        <button
          onClick={handleSubmit}
          className="p-4 text-white bg-[#0e6d15] block w-full justify-center items-center "
        >
          sendTransaction
        </button>
        <button
          onClick={connectWallet}
          className="p-4 text-white bg-[#0e6d15] block w-full justify-center items-center "
        >
          connectWallet
        </button>
      </div>
    </section>
  );
};

export default Welcome;
