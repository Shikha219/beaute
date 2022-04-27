import string
from flask import Flask, request, jsonify
import werkzeug
import time
from model import predict
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)


@app.route('/upload', methods=['GET', 'POST'])
def upload():

    if(request.method == "POST"):

        imagefile = request.files['image']
        filename = werkzeug.utils.secure_filename(imagefile.filename)
        imagefile.save("./uploadedimages/" +
                       time.strftime('%H%M%S') + filename)
        msg = predict()
        return jsonify({
            "result": msg

        })


if __name__ == "__main__":

    app.run(port=3000, debug=True)
