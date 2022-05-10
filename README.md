# Name

movie-app

# OverView

React 学習のために作成した映画アプリです。

# Requirement

- react: 18.1.0
- typescript: 4.6.4
- golang: 1.16
- postgreSQL: 12.0

## How to setup(backend & postgreSQL)

- backend-local 環境:
  main.go の dsn.String に`"postgres://ユーザー名@localhost/go_movies?sslmode=disable"`と定義し、
  backend-app ディレクトリで
  `go run cmd/api/main.go`
  と実行してください。

- postgresSQL-local 環境:
  自分の localhost(今回は POSTICO を使用)に`go_movies`フォルダを作成する。
  `go_movies.sql`がある状態で
  postgresSQL ディレクトリで
  `psql -d go_movies -f go_movies.sql`
  と実行してください。
# movie-app
