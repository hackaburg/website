response=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
     -H "Authorization: Bearer $CLOUDFLARE_PURGE_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}')

if [[ $response == *"\"success\":true"* ]]; then
  echo "successfully purged cache"
else
  echo "error purging cache"
  exit 1
fi
