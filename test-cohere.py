import cohere
from cohere.responses.classify import Example

api_key = "9d5L8VPsV4SepwOYwBCLWzAMawvGos0LxmsCI4QM"
co = cohere.Client(api_key)

inputs = ["No one likes me",
          "I won't be able to achieve my goals"
          ]

examples = [
  Example("If I don't get an internship, I'll never get a job", "Catastrophizing"),
  Example("I'll never be able to find love", "Catastrophizing"),
  Example("What if I fail my class?", "Anxiety"),
  Example("I can't stop thinking that I might have cancer or another serious disease", "Anxiety"),
  Example("I'm inherently unlikable", "Low self esteem"),
  Example("I'm bad at what I do", "Low self esteem"),
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)

print(response)