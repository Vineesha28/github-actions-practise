import { test, expect} from '@playwright/test';
test(' Validate NASA APOD api Response ' , async({request}) => {
    test.setTimeout(60000);
const response = await request.get( 
    'https://api.nasa.gov/planetary/apod',
{
    params : {
        date : '2026-06-01',
        api_key : '1LbFwfJRa69NS3ITObUpjc8Ox34bCWuyk6yG734k'
    },
}
);
expect(response.status()).toBe(200);
const body = await response.json();
console.log(body)
expect(body.date).toBeTruthy();
expect(body.title).toBeTruthy();
expect(body.explanation).toBeTruthy();
expect(body.url).toBeTruthy();
expect(body.media_type).toBeTruthy();
}
);