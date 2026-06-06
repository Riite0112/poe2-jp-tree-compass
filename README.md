# PoE2 JP Tree Compass

Path of Exile 2 の英語表記を日本語で読み、初心者がパッシブスキルツリーを「地域」と「目的」で理解するための静的MVPです。

## 使い方

ビルドツールは不要です。詳細ツリーは `data/poe2-tree.json` を読み込むため、ローカルHTTPサーバーから開くのがおすすめです。

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

その後、ブラウザで `http://127.0.0.1:5173` を開きます。

## 今入っている機能

- 英語のゲーム内表記を日本語ラベルと初心者向け説明で検索
- 英語の効果文を貼り付けて既知用語を日本語に置換
- 12クラスと目的別の簡略パッシブツリー案内
- GGG公式JSONを使った詳細パッシブツリー表示
- ノード検索、クラス周辺ズーム、全体表示、Notable強調、ノード効果表示
- Notable、Keystone、Travel Node など、ツリーを読むための基礎概念

## データ方針

- PoE2 Wiki: https://www.poe2wiki.net/wiki/Path_of_Exile_2
- Passive skill tree overview: https://www.poe2wiki.net/wiki/Passive_skill_tree
- GGG official passive tree export: https://github.com/grindinggear/poe2-skilltree-export

Wiki本文は Creative Commons Attribution-NonCommercial 3.0 Unported の表示に従う必要があります。アプリ内に長い本文コピーを持たせず、独自の短い説明と出典リンクを使う方針です。

現在はGGG公式の `data.json` を `data/poe2-tree.json` として取り込み、ノード名・ステータス行・座標を表示しています。次の段階では、より多くのゲーム内用語を日本語辞書に追加し、実ノード効果の翻訳品質を上げます。
