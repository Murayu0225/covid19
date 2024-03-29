#!/bin/bash

source ../.env # you have to set FB_ACCESS_TOKEN='{your access token}' in the .env file

LANGS="en zh-cn zh-tw ko pt-br"

PAGES=$(cat <<EOT
details-of-confirmed-cases
number-of-confirmed-cases
EOT
)

for page in $PAGES; do
  for lang in $LANGS; do
    echo "https://sagamihara-stopcovid19.jp/${lang}/cards/${page}"
  done
  echo "https://sagamihara-stopcovid19.jp/cards/${page}"
done
