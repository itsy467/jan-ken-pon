
> このページを開く [https://itsy467.github.io/jankenpon/](https://itsy467.github.io/jankenpon/)

## 拡張機能として使用

このリポジトリは、MakeCode で **拡張機能** として追加できます。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **新しいプロジェクト** をクリックしてください
* ギアボタンメニューの中にある **拡張機能** をクリックしてください
* **https://github.com/itsy467/jankenpon** を検索してインポートします。

## このプロジェクトを編集します ![ビルド ステータス バッジ](https://github.com/itsy467/jankenpon/workflows/MakeCode/badge.svg)

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/itsy467/jankenpon** を貼り付けてインポートをクリックしてください

## ブロックのプレビュー

この画像はマスター内の最後のコミットからのブロックコードを示しています。
このイメージは更新に数分かかる場合があります。

![生成されたブロック](https://github.com/itsy467/jankenpon/raw/master/.github/makecode/blocks.png)

#### メタデータ (検索、レンダリングに使用)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## 遊び方

* P0もしくはP1もしくはP2を短くタップします。それぞれ グー、チョキ、パーです。
* Aボタンを押します。すると、カウントダウンの後にmicrobitがGかTかPを表示します。これは、microbitが出した手で、それぞれ同じくグー、チョキ、パーです。
* AとBを同時に(A+Bボタン)押します。You Win! か AIKO か You Lose... が表示されます。これは、それぞれじゃんけんに 勝った、あいこだった(出した手が同じだった)、負けたことを意味します。これでじゃんけんは一通り終了します。
* 終了後、必ずBボタンを押してください。このボタンを押すことにより、様々な値がリセットされる、つまりもう一度遊ぶことができるようになります。このボタンを押すと RESET! と表示されます。
* 上の4つをを繰り返します。
