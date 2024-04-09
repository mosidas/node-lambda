FROM mysql:8.0.36

# 環境変数を設定
# MYSQL_ROOT_PASSWORD: rootユーザーのパスワード (必須)
# MYSQL_DATABASE: 自動的に作成されるデータベース名 (オプション)
# MYSQL_USER, MYSQL_PASSWORD: 新しいユーザーとそのパスワード (オプション)
ENV MYSQL_CHARACTER_SET_SERVER=utf8mb4
ENV MYSQL_COLLATION_SERVER=utf8mb4_unicode_ci
ENV MYSQL_ROOT_PASSWORD=testadmin
ENV MYSQL_DATABASE=test
ENV MYSQL_USER=test
ENV MYSQL_PASSWORD=testtest

# 初期化スクリプトをコンテナ内のスクリプト実行ディレクトリにコピー
# このスクリプトはMySQLサーバーが初めて起動した時に実行されます
COPY ./init.sql /docker-entrypoint-initdb.d/

# ポート3306を外部に公開
EXPOSE 3306

# MySQLサーバーを起動するコマンド (この行は基本的に変更不要)
CMD ["mysqld"]
