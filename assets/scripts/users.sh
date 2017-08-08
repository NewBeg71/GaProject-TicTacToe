curl --include --request GET http://localhost:4741/users \
  API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com/}"
  URL_PATH="/users"
  curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
