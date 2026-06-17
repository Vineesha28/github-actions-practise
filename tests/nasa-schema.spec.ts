import { test, expect} from '@playwright/test';
import Ajv from 'ajv';
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
const schema = {
    type : 'object',
    required : ['date', 'title', 'explanation', 'url', 'media_type'],
    properties : {
        date :{type : 'string'},
        title : {type : 'string'},
        explanation : {type:'string'},
        url : {type : 'string'},
        media_type : {type : 'string'},
        copyright : {type : 'string'},
    },
    additionalProperties : true,
};
const ajv = new Ajv();
const validate = ajv.compile(schema);
const isvalid = validate(body);
expect(isvalid).toBeTruthy();

}
);