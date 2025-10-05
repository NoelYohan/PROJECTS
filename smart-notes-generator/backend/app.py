from flask import Flask, request, jsonify
from flask_cors import CORS
from extractor import extract_text
from summarizer import generate_summary
import os

app = Flask(__name__)
CORS(app)  # allow frontend requests

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    filepath = os.path.join('uploads', file.filename)
    file.save(filepath)

    text = extract_text(filepath)
    summary = generate_summary(text)
    return jsonify({"summary": summary})

if __name__ == '__main__':
    app.run(debug=True)
