# image_captioning.py
from gradio_client import Client

def get_caption(image_link):
    client = Client("https://library-samples-image-captioning-with-blip.hf.space/--replicas/e935hxsm9/")
    result = client.predict(image_link, "Hello!!", api_name="/caption")
    return result

if __name__ == "__main__":
    import sys
    image_link = sys.argv[1]
    print(get_caption(image_link))



