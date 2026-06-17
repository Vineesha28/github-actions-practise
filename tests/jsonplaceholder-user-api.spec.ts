import { test , expect} from '@playwright/test';
test('Validate JSONPlaceholder User api' , async({request}) =>{

const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
);
expect(response.status()).toBe(200);

const body = await response.json();
expect(body.id).toBe(1);
expect(body.userId).toBeTruthy();
expect(body.title).toBeTruthy();
expect(body.body).toBeTruthy();

}
);

test('Validate JSONPlacholder User api' , async({request}) =>{

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
    
    {
        data : {
            title : 'Playwright',
            body : 'Learning Api Testing',
            userId : 1
        }
    });
    expect (response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('Playwright');
    expect(body.body).toBe('Learning Api Testing');
    expect(body.userId).toBe(1);
}
);


test('PUT Post API ' , async({request}) => {
    const response = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data : {
                title : 'Testing',
                body : 'Basics Of API testing',
                userId : '2'

            }
        });
        expect (response.status()).toBe(200);
        const body = await response.json();
        expect(body.title).toBe('Testing');
        expect(body.body).toBe('Basics Of API testing');
        expect(body.userId).toBe('2');
    }
);

test('DELETE POST API' , async({request}) =>{

    const response = await request.delete(
       'https://jsonplaceholder.typicode.com/posts/1',
    );
    expect (response.status()).toBe(200);
    });


