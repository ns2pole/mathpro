#!/bin/sh

# 引数が指定されていない、またはファイルが存在しない場合はエラーメッセージを表示
if [ -z "$1" ]; then
  echo "エラー: 名前が指定されていません"
  exit 1
fi

sed "s/sample/$1/g" ./src/template/sample.html > "./src/app/math/article/html/$1.html"

echo "ファイルが正常にコピーされました: ./src/app/math/article/html/$1.html"

# 先頭文字を大文字に変換
first_char=$(echo "$1" | cut -c1 | tr 'a-z' 'A-Z')
rest_chars=$(echo "$1" | cut -c2-)
capitalized="$first_char$rest_chars"

sed -e "s/sample/$1/g" -e "s/Sample/$capitalized/g" ./src/template/sample.component.ts > "./src/app/math/article/ts/$1.component.ts"


echo "ファイルが正常にコピーされました: ./src/app/math/article/ts/$1.component.ts"

# app.module.tsの更新
awk -v newImport="import { ${capitalized}Component } from './math/article/ts/$1.component';" '
  /^import / { print; lastImportLine=NR; next }
  NR==lastImportLine+1 { print newImport }
  { print }
' "./src/app/app.module.ts" > "./src/app/temp.module.ts"

mv "./src/app/temp.module.ts" "./src/app/app.module.ts"



# app.module.tsの更新
awk -v newPath="\t{ path: 'math/$1', component: ${capitalized}Component }," '
  /^ *{ path: / { print; lastPathLine=NR; next }
  NR==lastPathLine+1 { print newPath }
  { print }
' "./src/app/app.module.ts" > "./src/app/temp.module.ts"

mv "./src/app/temp.module.ts" "./src/app/app.module.ts"

echo "app.module.tsが正常に更新されました"

