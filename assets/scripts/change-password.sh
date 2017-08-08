curl --include --request PATCH http://localhost:4741/change-password/$ID \
  API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com/}"
  URL_PATH="/change-password"
  curl "${API}${URL_PATH}/${ID}" \
    --include \
    --request PATCH \
    --header "Authorization: Token token=${TOKEN}" \
    --header "Content-Type: application/json" \
    --data '{
      "passwords": {
        "old": "'"${OLDPW}"'",
        "new": "'"${NEWPW}"'"
    }
  }'

echo
