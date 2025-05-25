

import { test, expect } from '@playwright/test';

test("Get Users", async ({request}) => {

    const response =await request.get('/api/users?page=2')
    console.log(response.status());
    expect(response.status()).toBe(200);
});

test("Post call", async ({request}) => {

    const requestBody = {
        "name": "Rashmi",
        "job": "leader"
    };
    const headers = {
      'x-api-key': 'xx'
    };

    const response = await request.post('https://reqres.in/api/users', { data: requestBody, headers });
    console.log(response.status());
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody);

})

