const mongoose = require('mongoose');

// Use 127.0.0.1 instead of localhost to avoid ::1 (IPv6) issues
const MONGO_URI = 'mongodb://127.0.0.1:27017/todo-app';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));


// why ::1 (IPv6) issues?
// The ::1 address is the loopback address in IPv6, equivalent to 127.0.0.1 in IPv4. Some applications may not handle IPv6 correctly, leading to connection issues.
