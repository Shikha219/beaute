from fileinput import filename
from flask import Flask, request, jsonify
import werkzeug

app = Flask(__name__)


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if(request.method == "POST"):
        imagefile = request.files['image']
        filename = werkzeug.utils.secure_filename(imagefile.filename)
        imagefile.save("./uploadedimages/" + filename)
        return jsonify({
            "message": "Image Uploaded Successfully"
        })


if __name__ == "__main__":
    app.run(port=3000, debug=True)
