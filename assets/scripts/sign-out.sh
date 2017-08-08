curl --include --request DELETE http://localhost:4741/sign-out/$ID \
  API ="${API_ORIGIN:-http://tic-tac-toe.wdibos.com/}"
  URL_PATH="/sign-out"
  curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"

echo
