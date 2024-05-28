// requestBodies.ts
import { UserRequest, PackPurchaseRequest, DepositRequest, WithdrawalRequest } from '../types/requests';

export const defaultUserRequest: UserRequest = {
  uid: "",
  miniRolls: 0,
  rid: "",
  nickname: "",
  pubKey: "",
  roleId: 0,
  ipAddr: "",
  macAddr: "",
  status: "",
  lastUpdatedUid: ""
};

export const defaultPackPurchaseRequest: PackPurchaseRequest = {
  uid: "",
  numberOfPacks: 0,
  packName: "mini", // Default to 'mini', adjust as necessary
  status: "",
  lastUpdatedUid: ""
};

export const defaultDepositRequest: DepositRequest = {
  uid: "",
  address: "0",
  amount: 0,
  network: "",
  currency: "",
  usdValue: 0,
  txnHash: "",
  status: "",
  lastUpdatedUid: ""
};

export const defaultWithdrawalRequest: WithdrawalRequest = {
  uid: "",
  amount: 0,
  network: "",
  currency: "",
  usdValue: 0,
  txnHash: "",
  status: "",
  lastUpdatedUid: ""
};
