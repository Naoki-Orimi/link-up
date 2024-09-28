# ベースイメージとしてNode.jsを使用
FROM arm64v8/node:16-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# 使用するポートを公開
EXPOSE 3000

# アプリケーションを開始
CMD ["npm", "start"]