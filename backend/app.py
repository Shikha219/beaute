from flask import Flask, request, jsonify
import werkzeug
import time
from model import predict


app = Flask(__name__)


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if(request.method == "POST"):
        imagefile = request.files['image']
        filename = werkzeug.utils.secure_filename(imagefile.filename)
        imagefile.save("./uploadedimages/" +
                       time.strftime('%H%M%S') + filename)
        msg = predict()
        return jsonify({
            "message": "image uploaded successfully",
            "result": msg

        })


if __name__ == "__main__":

    app.run(port=3000, debug=True)
