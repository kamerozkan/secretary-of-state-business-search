#!/usr/bin/env bash
# Run secretary-of-state-business-search synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~secretary-of-state-business-search/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"states": ["CO", "NY"], "formedWithinDays": 7, "entityTypes": ["llc"], "maxItems": 100}'
