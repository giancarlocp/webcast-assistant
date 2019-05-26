# Webcast-Assistant
A Mithril test working with a mocking Flask API.

This Webcast-Assistant is a translation from [@miguelgrinberg's **React**](https://github.com/miguelgrinberg/webcast-assistant) version to a
**Mithril** front-end. This is a test, so setting are done to development,
it is not intended to be a production App.

## Purpose

The goal is to show a clean **Mithril** code. We have removed the server side
and the Service-Worker (front-end) part. We'll have a mocking API server.


## Boilerplate

The boilerplate is based in [sample-mithril-app](https://github.com/highmountaintea/sample-mithril-app) which a part of [create-mithril-app](https://github.com/highmountaintea/create-mithril-app).
[![npm package](https://nodei.co/npm/sample-mithril-app.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/sample-mithril-app/)

An updated version with JSX support is [here](https://github.com/giancarlocp/sample-mithril-app)

### Setup. Mock API
```sh
python -m venv venv
source ve/bin/activate
pip install -r requirements
export FLASK_APP=mock_api.py
flask run
```

### Setup. Front-end
In the client folder
```sh
yarn
yarn dev
```
