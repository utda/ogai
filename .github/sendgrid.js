#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
const apiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(apiKey);

const to = process.env.SENDGRID_TO.split(',');

const repositoryLink = `https://github.com/${process.env.GITHUB_REPOSITORY}`;
const commitLink = `${repositoryLink}/commit/${process.env.GITHUB_SHA}`;

text = `こんにちは、

デプロイが正常に完了しました。以下は詳細情報です：

- リポジトリ名: [${process.env.GITHUB_REPOSITORY}](${repositoryLink})
- ブランチ名: ${process.env.GITHUB_BRANCH}
- コミットハッシュ: [${process.env.GITHUB_SHA}](${commitLink})
- デプロイ日時: ${process.env.GITHUB_TIMESTAMP}

新しい変更が本番環境に反映されました。不具合や問題がある場合は、速やかに対処いたします。

ご質問や疑問点があれば、お気軽にお知らせください。

ありがとうございました。`

const msg = {
    to,
    from: 'na.kamura.1263@gmail.com',
    subject: `デプロイが完了しました - ${ process.env.GITHUB_REPOSITORY }`,
    text,
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));