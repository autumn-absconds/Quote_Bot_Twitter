from flask import Flask, request, jsonify
from gradio_client import Client

app = Flask(__name__)

# Load the Gradio client
client = Client("https://library-samples-image-captioning-with-blip.hf.space/--replicas/e935hxsm9/")

@app.route('/get_caption', methods=['POST'])
def get_caption():
    try:
        # Get the image link from the request
        image_link = request.json['image_link']

        # Use Gradio client to predict
        result = client.predict(image_link, "Hello!!", api_name="/caption")

        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
