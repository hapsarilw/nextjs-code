// create /feedback/some-id
import { buildFeedbackPath, extractFeedback } from ".";
// /api/some-value/more-segments

function handler(req, res) {
  // return selected feedback
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;

// /api/feedback/some-value -> more stryctured path