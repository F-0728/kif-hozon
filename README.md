This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Initial Setup/環境構築

### 前提条件
- **Dockerをインストールしていること!**

初回起動時、`docker-compose up -d --build`でビルドと起動をし、
[http://localhost:3000](http://localhost:3000)でゲーム画面に遷移します。
<br>終了時には`docker-compose down`でコンテナを終了します。

再度コンテナを起動する際は`docker-compose up -d`で起動することができます。
<br>Dockerのことでわからないことがあったら、[@ryosuke0121](https://github.com/ryosuke0121)をメンションするなりしてなんでも聞いてください

## For those who commit to this repository/コミットしてくれる人へ！

### 開発フロー
- Issueを出してself-assign or 既にあるIssueを自分にAssign
- 作業ブランチ `feature/***(追加する機能名)` を切る
- `git push --set-upstream origin feature/***(追加する機能名)` でpush
- プルリクを出す
- 終わったら [@F-0728](https://github.com/F-0728) にReviewリクエストください！
- acceptでマージ🥳

### その他
- わからなければ[@F-0728](https://github.com/F-0728)をメンションするなりしてなんでも聞いてください
- プライベートな議論の場が欲しくなったらDiscordサーバーでも立てようと思います
