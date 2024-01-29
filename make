#!/bin/bash

mkdir ../exec
mkdir ../exec/db

cp .env ../exec/.env
cp -r static/ ../exec/static/

bun build ./server.js --compile --outfile ../exec/app
