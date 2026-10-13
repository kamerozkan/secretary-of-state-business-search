# Secretary of State Business Search - Colorado & New York LLC

Colorado business search and New York LLC filings from the official Secretary of State open data: entity name, ID, type, status, formation date, principal address and registered agent company. Search by name or get every new LLC formed since a date. No login, no captcha.

**[Run it on Apify Store](https://apify.com/kamerozkan/secretary-of-state-business-search)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/secretary-of-state-business-search); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/secretary-of-state-business-search).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/secretary-of-state-business-search) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "states": [
    "CO",
    "NY"
  ],
  "formedWithinDays": 7,
  "entityTypes": [
    "llc"
  ],
  "maxItems": 100
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "state": "CO",
    "entityId": "20268223191",
    "entityName": "Blue Sky Strategic Finance, LLC",
    "entityType": "Domestic Limited Liability Company",
    "entityTypeCode": "DLLC",
    "status": "Good Standing",
    "formationDate": "2026-09-30",
    "jurisdictionOfFormation": "CO",
    "principalAddress": "1408 E Maplewood Ct, Centennial, CO, 80121",
    "principalStreet": "1408 E Maplewood Ct",
    "principalCity": "Centennial",
    "principalState": "CO",
    "principalZip": "80121",
    "principalCountry": "US",
    "county": null,
    "registeredAgentCompany": null,
    "registeredAgentAddress": null,
    "registeredAgentIsIndividual": true,
    "serviceOfProcessName": null,
    "serviceOfProcessAddress": null,
    "sourceUrl": "https://www.coloradosos.gov/biz/BusinessEntityDetail.do?masterFileId=20268223191",
    "source": "Colorado Secretary of State, data.colorado.gov (Business Entities in Colorado, public domain)",
    "searchQuery": "CO: name contains 'Blue Sky'",
    "scrapedAt": "2026-10-13T12:32:07+00:00"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/secretary-of-state-business-search/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
