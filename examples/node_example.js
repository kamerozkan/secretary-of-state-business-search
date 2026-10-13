// Run secretary-of-state-business-search on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "states": [
    "CO",
    "NY"
  ],
  "formedWithinDays": 7,
  "entityTypes": [
    "llc"
  ],
  "maxItems": 100
};
const run = await client.actor('kamerozkan/secretary-of-state-business-search').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
