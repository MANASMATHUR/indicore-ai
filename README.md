AI Chatbot with Azure Speech Services

A multilingual AI chatbot that supports speech recognition and text-to-speech functionality using Azure Speech Services and Perplexity API.
Features
Multilingual Support: English, Hindi, Marathi, Tamil, Bengali, Punjabi, and Gujarati
Speech Recognition: Voice input in multiple languages
Text-to-Speech: AI responses spoken back using Azure neural voices
Real-time Chat: Powered by Perplexity API for intelligent responses
Fallback TTS: Web Speech API as backup when Azure TTS is unavailable
Prerequisites
Azure Speech Services subscription
Perplexity API key
Modern web browser with speech API support (Chrome/Edge recommended)
HTTPS connection (required for microphone access)
Setup
1. Azure Speech Services
Create an Azure Speech resource in the Azure Portal
Note your Subscription Key and Region (e.g., eastus, centralindia)
2. Perplexity API
Sign up at Perplexity AI
Generate an API key (starts with pplx-)
3. Configuration
Open the chatbot application
Click the Settings (⚙️) button
Enter your credentials:
Perplexity API Key: Your pplx- key
Azure Speech Subscription Key: From Azure portal
Azure Speech Region: Your resource region
Check "Enable Speech Responses" for TTS functionality
Usage
Basic Chat
Select your preferred language from the dropdown
Type your message or click the microphone for voice input
The bot will respond with text and speech (if enabled)
Voice Input
Click the microphone button
Speak your question clearly
Click "Stop" when finished
The recognized text will appear and be processed
Speech Responses
Ensure "Enable Speech Responses" is checked in settings
Responses will be spoken using Azure neural voices
Falls back to Web Speech API if Azure TTS fails
