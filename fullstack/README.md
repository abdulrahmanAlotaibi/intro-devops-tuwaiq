1. Run the frontend
```bash
cd frontend
docker build -t frontend .
docker run -p 3000:3000 frontend
```
2. Run the backend 
```bash
cd backend
docker build -t backend .
docker run -p 8000:8000 backend
```