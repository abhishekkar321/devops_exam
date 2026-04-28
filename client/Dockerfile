FROM node:22-alpine

WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# Run the dev server
CMD ["npm", "run", "dev", "--", "--host"]