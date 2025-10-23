export const getChatResponse = async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: "Message is required" });

  // Placeholder: You’ll replace this with OpenAI or React Docs parser
  const reply = `You asked about: "${message}". I’ll soon respond with info from React docs.`;

  res.json({ reply });
};
