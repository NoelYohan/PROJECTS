from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def generate_summary(text):
    # Split into manageable chunks
    chunks = [text[i:i+1000] for i in range(0, len(text), 1000)]
    summary = ""
    for chunk in chunks:
        result = summarizer(chunk, max_length=150, min_length=50, do_sample=False)
        summary += result[0]['summary_text'] + " "
    return summary.strip()
