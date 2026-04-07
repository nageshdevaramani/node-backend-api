FROM node:18-alpine

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

RUN npm install --production

# Copy remaining files
COPY . .

# Create non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 4000

CMD ["node", "server.js"]
