/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ConnectButton/ConnectButton.tsx
import React from 'react';

const ConnectButton: React.FC<{
  hasProvider: boolean;
  wallet: any;
  isConnecting: boolean;
  disableConnect: boolean;
  handleConnect: () => void;
  error: boolean;
  errorMessage: string;
  setError: (value: boolean) => void;
}> = ({
  hasProvider,
  wallet,
  disableConnect,
  handleConnect,
  error,
  errorMessage,
  setError,
}) => {
  return (
    <div>
      {hasProvider ? (
        <h1></h1>
      ) : (
        <h1 className="text-3xl font-bold underline">MetaMask Not Installed</h1>
      )}
      {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
        <button
          className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          disabled={disableConnect}
          onClick={handleConnect}
        >
          Connect MetaMask
        </button>
      )}
      {error && (
        <div onClick={() => setError(false)}>
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
    </div>
  );
};

export default ConnectButton;
