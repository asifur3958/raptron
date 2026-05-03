FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies cleanly
RUN npm ci

# Copy the rest of the application
COPY . .

# Set Nitro preset to node-server explicitly for Docker environment
ENV NITRO_PRESET=node-server
ENV NODE_ENV=production

# Build the application
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS runner

WORKDIR /app

# Copy the build output from the builder stage
# Nitro with 'node-server' preset outputs to the .output directory
COPY --from=builder /app/.output ./.output

# Set environment variables
ENV NODE_ENV=production
ENV PORT=7500
ENV HOST=0.0.0.0

# Expose the requested port
EXPOSE 7500

# Start the application
CMD ["node", ".output/server/index.mjs"]
