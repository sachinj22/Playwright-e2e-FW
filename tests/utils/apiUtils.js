import { request } from '@playwright/test';



// --- GET ---
async function get(endpoint, headers = {}) {
  const context = await request.newContext();
  const response = await context.get(endpoint, { headers });
  const body = await response.json();
  return {
    status: response.status(),
    body
  };
}

// --- POST ---
async function post(endpoint, body = {}, headers = {}) {
  const context = await request.newContext();
  const response = await context.post(endpoint, {
    data: body,
    headers
    
  });

  const responseBody = await response.json();
  console.log("Response Body: ", responseBody);
  return {
    status: response.status(),
    body: responseBody
  };
}

// --- PUT ---
async function put(endpoint, body = {}, headers = {}) {
  const context = await request.newContext();
  const response = await context.put(endpoint, {
    data: body,
    headers
    
  });
  const responseBody = await response.json();
  return {
    status: response.status(),
    body: responseBody
  };
}

// --- DELETE ---
async function del(endpoint, headers = {}) {
  const context = await request.newContext();
  const response = await context.delete(endpoint, { headers });
  const body = await response.json();
  return {
    status: response.status(),
    body
  };
}

module.exports = {
  get,
  post,
  put,
  del
};
