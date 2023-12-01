from gradio_client import Client

client = Client("https://library-samples-image-captioning-with-blip.hf.space/--replicas/e935hxsm9/")
result = client.predict(
		'https://pbs.twimg.com/media/GAL95pNWcAAzJEj?format=jpg&name=small',	# filepath  in 'parameter_2' Image component
		"Hello!!",	# str  in 'Text' Textbox component
							api_name="/caption"
)
print(result)