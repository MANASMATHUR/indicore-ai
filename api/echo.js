export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ youSent: req.body });
  } else {
    res.status(405).json({ error: "Only POST allowed" });
  }
}
