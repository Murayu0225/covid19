#!/bin/bash

source ../.env # you have to set FB_ACCESS_TOKEN='{your access token}' in the .env file

LANGS="en fr zh-cn zh-tw ko th vi pt-BR"

PAGES=$(cat <<EOT
details-of-confirmed-cases
number-of-confirmed-cases
attributes-of-confirmed-cases
number-of-tested
number-of-reports-to-covid19-telephone-advisory-center
predicted-number-of-toei-subway-passengers
agency
EOT
)

for page in $PAGES; do
  for lang in $LANGS; do
    echo "https://sagamihara-stopcovid19.com/${lang}/cards/${page}"
  done
  echo "https://sagamihara-stopcovid19.com/cards/${page}"
done
