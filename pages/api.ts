import { dataLength } from 'ethers';
import {CHAINS} from '../pages/env';

const fetch = require('node-fetch');

const baseURL = "https://api-dev.krystal.team/";

export class APIResponse{
    readonly chainName: String;
    readonly endPoint: String;

    constructor(chainName: String, endPoint: String){
        this.chainName = chainName;
        this.endPoint = endPoint;
    }

    async logJSONData() {
        const response = await fetch(`${baseURL}${this.chainName}${this.endPoint}`);
        const jsonData = await response.text();
        console.log(jsonData);
        let obj: gasPriceResult = JSON.parse(jsonData);
        console.log(obj.gasPrice.default);
    }
    
    async 
}

export class gasPriceResponse{
    readonly chainName: String;
    readonly endPoint: String;

    constructor(chainName: String, endPoint: String){
        this.chainName = chainName;
        this.endPoint = endPoint;
    }

    async logJSONData() {
        console.log(`${baseURL}${this.chainName}${this.endPoint}`);
        const response = await fetch(`${baseURL}${this.chainName}${this.endPoint}`);
        const jsonData = await response.text();
        return jsonData;
    }
    
    async getGasPriceStandard(){

    }
}


async function logJSONData(chainName: String, endPoint: String) {
    const response = await fetch(`${baseURL}${chainName}${endPoint}`);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
}

export const endPoint = {
    gasPrice: "/v2/gasPrice",
    balances: "/v1/account/balances?address=",
    optionDetail:  "all/v1/earning/optionDetail",
    tokenList: "/v1/token/tokenList",
    tokenDetail: "/v1/token/tokenDetails?address=",
};


interface gasPrice{
    fast: String;
    standard:String;
    low:String;
    default:String;
}

interface priorityFee{
    fast: String;
    standard:String;
    low:String;
    default:String;
}

interface estTime{
    fast: number;
    slow: number;
    standard: number;
}

export interface gasPriceResult{
    timestamp: number;
    gasPrice: gasPrice;
    priorityFee: priorityFee;
    baseFee: String;
    estTime: estTime;
}