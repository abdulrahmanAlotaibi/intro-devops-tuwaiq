FROM python:3.10-slim AS production
WORKDIR /app
COPY . .
RUN apt-get update \
    && apt-get install -y \
    && pip install --no-cache-dir -r requirements.txt

EXPOSE 3002
# RUN chmod +x src/python/start.sh
CMD ["uvicorn","--reload","--host", "0.0.0.0", "--port", "3002" ,"main:app"]