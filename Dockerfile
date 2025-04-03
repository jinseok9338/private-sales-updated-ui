FROM node:20-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

# Install build dependencies
RUN apk add --no-cache python3 make g++ libc6-compat

# Set environment variables to handle architecture-specific issues
ENV HUSKY=0
ENV HUSKY_SKIP_INSTALL=1
ENV NODE_ENV=production
ENV ROLLUP_SKIP_NODEJS=true
ENV VITE_SKIP_NATIVE=true

# Copy only package files first for better layer caching
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./

# Install dependencies with ignore-scripts to avoid husky
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy the rest of the app
COPY . .

# Increase Node memory limit and build the app
RUN NODE_OPTIONS="--max-old-space-size=4096" pnpm run build

FROM node:20-alpine

# Install a simple static file server
RUN npm install -g serve

# Copy built files from builder stage
WORKDIR /app
COPY --from=builder /app/build/client ./dist

# Expose the port
EXPOSE 3000

# Command to serve the built application
CMD ["serve", "-s", "dist", "-p", "3000"]