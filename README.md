## progate Node.js コース 学習メモ

マークダウン記法
参考：https://codechord.com/2012/01/readme-markdown/

### routing

`res.render`で指定したファイルをブラウザに表示

### ファイルの置き場所

views : ejs など
public : CSS や画像ファイル

`app.use(express.static("public"));` : public フォルダ内のファイルを読み込めるようになる
↓
ejs ファイルで css ファイルをリンク指定。
public フォルダに css フォルダを作り、そこに css ファイルを入れる。

### ejs とは

EJS は、HTML と JavaScript のコード両方を記述できる Node.js のパッケージのこと。
（HTML のコードの中に js を埋め込む（Embedded）ことができる）
npm からインストールすることで使える。

JavaScript のコードを記述するには、<% %>または<%= %>で囲う。
<% %>で囲んだ場合はブラウザに何も表示されないので、変数の定義などに用いる。
変数の値などをブラウザに表示したい場合は<%= %>を用いる。

### ルート URL

「/」の URL をルート URL という。
一番初めにアクセスするページはルート URL に設定することが一般的。
