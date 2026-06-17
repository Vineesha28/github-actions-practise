import { test, expect } from '@playwright/test';

test('Validate Fake Store API Products', async ({ request }) => {

  const response = await request.get('https://fakestoreapi.com/products');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);

  expect(body[0].id).toBe(1);
  expect(body[0].title).toBeTruthy();
  expect(body[0].price).toBeTruthy();
  expect(body[0].category).toBeTruthy();
  expect(body[0].description).toBeTruthy();
  expect(body[0].image).toBeTruthy();

});



test('DELETE Product API' , async({request})=>{

  const response = await request.delete(
    'https://fakestoreapi.com/products/1'
  );
  expect(response.status()).toBe(200);
  console.log('status:', response.status());
});