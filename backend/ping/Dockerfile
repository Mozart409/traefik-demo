FROM golang:1.18.1-alpine3.15 as builder

WORKDIR /app
COPY . .

RUN go build -o ping main.go

FROM alpine:3.15.4 as runner

COPY --from=builder /app/ping /app/ping

CMD ["/app/ping"]
