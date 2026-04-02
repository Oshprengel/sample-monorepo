from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from python-app!'

if __name__ == '__main__':
    app.run(port=5000)
