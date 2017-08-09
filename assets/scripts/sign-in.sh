
  URL_PATH="sign-in"
  API="http://tic-tac-toe.wdibos.com/"
  curl --include --request POST "${API}${URL_PATH}" \
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


echo "${API}${URL_PATH}"
