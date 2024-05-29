const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/createpin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Pin schema
const PinSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  board: String,
  image: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const Pin = mongoose.model('Pin', PinSchema);

// Define storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Define routes
app.get('/api/boards', (req, res) => {
  // Return a list of boards
});

app.post('/api/create-pin', upload.single('image'), (req, res) => {
  const { title, description, link, board, tags } = req.body;
  const image = req.file.path;

  const pin = new Pin({ title, description, link, board, image, tags });

  pin.save((error) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error creating pin');
    } else {
      res.send('Pin created successfully');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});