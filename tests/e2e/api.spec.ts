import {CHAINS} from '../../pages/env';
import { test, expect } from '@playwright/test';
import { gasPriceResponse, endPoint, gasPriceResult } from '../../pages/api';


// https://api-dev.krystal.team/bsc/v2/gasPrice
const chainName = CHAINS.avalanche.chainName;

test('Check the status of request', async ({ request }) => {
    const newIssue = await request.get(`${chainName}/v2/gasPrice`);
    expect(newIssue.ok()).toBeTruthy();
    expect(newIssue.status()).toEqual(200);
    console.log(newIssue.status());
    // console.log(newIssue);
    // console.log(JSON.parse(newIssue.body.toString()));
});

test.describe('Check GasPrice API - BSC', () => {
    let apiRequest: gasPriceResponse;
    let obj: gasPriceResult;


    test.beforeAll(async ({ }) => {
        apiRequest = new gasPriceResponse(chainName, endPoint.gasPrice);
        const jsonData =  apiRequest.logJSONData();
        console.log(jsonData);
        obj = JSON.parse(await jsonData);
    })

    test('Check gasPrice - standart', async ({  }) => {
        expect(obj.gasPrice.standard).toEqual("37.095703");
    });

    test('Check baseFee', async ({  }) => {
        console.log(obj.baseFee);
        expect(obj.baseFee).not.toEqual("0");
    });

    test('Check priorityFee - standart', async ({  }) => {
        if (!obj.priorityFee) {
            console.log("There is no Priority Fee");
        }else if(!obj.priorityFee.standard){
            console.log("There is no Priority Fee - Standard");
        }else{
            expect(obj.priorityFee.standard).not.toEqual("0");
        }
        // expect(obj.priorityFee.standard).not.toEqual("0");
    });
})




// test.describe('Check GasPrice API', () => {
//     let apiRequest: gasPriceResponse;
//     let obj: gasPriceResult;
//     CHAINS["bsc"].chainID

//     test('get Chain Name', async ({  }) => {

//     });

// })

  