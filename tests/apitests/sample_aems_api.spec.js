import { test, expect } from '@playwright/test';
import { post , get } from '../utils/apiUtils.js';

test.describe('AEMS API Tests', () => {
let accessToken;
let getwourl
test.beforeAll(async () => {

const oauthurl = "xx"; // Replace with actual OAuth URL

getwourl = "https://aems-order-api.preprod.maersk-digital.net/api/maintenance-orders/";

   const headers = {
       'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control' : 'no-cache'
   };

    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: 'xx', // Replace with actual client ID
        client_secret: 'xx',  // Replace with actual client secret
        scope: 'openid'
    }).toString();

    const response = await post(oauthurl, body, headers);
    console.log("Response Status: ", response.body);
    expect(response.status).toBe(200);
    expect(response.body.access_token).toBeDefined();
    accessToken = response.body.access_token;
    console.log("Access Token: ", accessToken);
})

test('Get Master data', async () => {
   
    console.log("Access Token: ", "Bearer "+accessToken);

    const headers = {
        'Authorization': 'Bearer ' + accessToken
    }

    const wo = "500013800";
    const response = await get(getwourl+wo, headers
    );

    
    console.log("Response Status: ", response.status);
    console.log("Response Body: ", response.body);
    expect(response.status).toBe(200);
   
})
})

