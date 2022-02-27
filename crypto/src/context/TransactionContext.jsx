const { ethereum } = window;
import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { contractAddress, contractABI } from "../utils/const";

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

export const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFromData] = useState({
    receiver: "",
    amount: 0,
    message: "",
    keyword: "",
  });

  const connectWallet = async (wallet) => {
    if (ethereum) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      const account = accounts[0];
      setCurrentAccount(account);
    }
  };

  const handelChange = (e, name) => {
    setFromData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const sendTransaction = async () => {
    try {
      const { receiver, amount, message, keyword } = formData;
      const transactionContract = createEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: receiver,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });
      // address payable receiver,uint256 amount,string memory message,string memory keyword

      const transactionHash = await transactionContract.addToBlockchain(
        receiver,
        parsedAmount._hex,
        message,
        keyword
      );
      console.log(receiver);
      await transactionHash.wait();
      console.log("done");

      const transactionsCount = await transactionContract.getTransactionCount();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TransactionContext.Provider
      value={{ connectWallet, handelChange, formData, sendTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
