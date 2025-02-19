# Use Python 3.9 slim image as the base.
FROM python:3.9-slim

# Install Nginx and clean up apt cache.
RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Set working directory.
WORKDIR /app

# Copy and install Python dependencies.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code.
COPY . .

# Copy custom Nginx configuration.
# Make sure your nginx.conf uses: proxy_pass http://127.0.0.1:3000;
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (Nginx will listen on this port).
EXPOSE 80

# Create an entrypoint script to start Nginx and Uvicorn.
RUN echo '#!/bin/sh' > /entrypoint.sh && \
    echo 'nginx -g "daemon off;" & ' >> /entrypoint.sh && \
    echo 'uvicorn main:app --host 0.0.0.0 --port 3000' >> /entrypoint.sh && \
    chmod +x /entrypoint.sh

# Start the entrypoint.
CMD ["/entrypoint.sh"]
