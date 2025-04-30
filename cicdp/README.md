# CI/CD Pipeline with GitHub Actions, Docker, and Kubernetes

This project demonstrates a simple CI/CD pipeline that builds a Python app using Docker, pushes the image to Docker Hub, and deploys it on a local Kubernetes cluster.

---

## 📁 Project Structure

project/ ├── app/ │ ├── app.py │ └── requirements.txt ├── Dockerfile ├── docker-compose.yml ├── deploy.yaml ├── .github/ │ └── workflows/ │ └── ci.yml ├── screenshots/ │ └── [deployment screenshots] └── README.md

---

## 🚀 What This Project Does

- ✅ **CI**: GitHub Actions workflow (`ci.yml`) triggers on push
- ✅ **Build**: Docker image is built and pushed to Docker Hub
- ✅ **CD**: Kubernetes deploys the updated image using `deploy.yaml`
- ✅ **Output**: Visit the app in browser – "Hello from CI/CD pipeline!"

---

## 🔧 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/tanishaaraoo07/project1.git
   cd ci-cd-docker
Image: tanisharahoo07/ci-cd-app