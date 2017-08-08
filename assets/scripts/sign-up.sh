curl --include --request POST http://localhost:4741/sign-up \
  API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com/}"
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
