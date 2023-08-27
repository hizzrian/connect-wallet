/* eslint-disable @typescript-eslint/no-explicit-any */
// components/WalletInfo/WalletInfo.tsx
import React from 'react';
import { formatChainAsNum } from '../utils';

const WalletInfo: React.FC<{ wallet: any }> = ({ wallet }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold underline mb-4">Wallet Connected</h1>
      <div className="mb-2">Wallet Accounts: {wallet.accounts[0]}</div>
      <div className="mb-2">Wallet Balance: {wallet.balance}</div>
      <div className="mb-2">Hex ChainId: {wallet.chainId}</div>
      <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>
    </div>
  );
};

export default WalletInfo;
