// types.ts

export interface UserRequest {
    uid: string;
    miniRolls?: number;
    rid?: string;
    nickname: string;
    pubKey: string;
    roleId: number;
    ipAddr?: string;
    macAddr?: string;
    status: string;
    lastUpdatedUid: string;
  }
  
  export interface PackPurchaseRequest {
    uid: string;
    numberOfPacks: number;
    packName: 'mini' | 'maxi';
    status: string;
    lastUpdatedUid: string;
  }
  
  export interface DepositRequest {
    uid: string;
    address: string;
    amount: number;
    network: string;
    currency: string;
    usdValue: number;
    txnHash?: string;
    status: string;
    lastUpdatedUid: string;
  }
  
  export interface WithdrawalRequest {
    uid: string;
    amount: number;
    network: string;
    currency: string;
    usdValue: number;
    txnHash?: string;
    status: string;
    lastUpdatedUid: string;
  }
  