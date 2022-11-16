FROM python:3-alpine3.16
WORKDIR /app
COPY . /app
RUN ls
RUN pip install -r requirments.txt
EXPOSE 9999
CMD python ./main.py
