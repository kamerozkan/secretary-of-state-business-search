"""Run secretary-of-state-business-search on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'states': ['CO', 'NY'], 'formedWithinDays': 7, 'entityTypes': ['llc'], 'maxItems': 100}
run = client.actor("kamerozkan/secretary-of-state-business-search").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
