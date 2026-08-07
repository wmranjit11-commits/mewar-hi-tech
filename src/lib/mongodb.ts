import mongoose from "mongoose";
import dns from "dns";

// Set public DNS servers to prevent querySrv ECONNREFUSED errors caused by local ISP/Router DNS
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (err) {
  console.warn("Could not set custom DNS servers:", err);
}

// Global is used here to maintain a cached connection across hot reloads in development.
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local or Vercel Environment Variables"
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    try {
      dns.setServers(["8.8.8.8", "1.1.1.1"]);
    } catch {}

    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
