  URL_PATH= "sign-up"
  API= "http://tic-tac-toe.wdibos.com/"
  curl --include --request POST "${API}${URL_PATH}" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
    "credentials": {
      "email": "dfwg4@hotmail.com",
      "password": "KashmiR124",
      "password_confirmation": "KashmiR124"
    }
  }'

echo "${API}${URL_PATH}"
