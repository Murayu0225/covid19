import datetime
import pytz

today = datetime.datetime.now(pytz.timezone('Asia/Tokyo'))
month = str(today.month)
day = str(today.day)
date = str(today.date())

tweet = open('auto-tweet/tweets/' + date + '.tweet', 'w')
tweet.write(month + '月' + day + '日分のデータに更新しました。\n下記リンクより閲覧できます。\n\n当サイトでは、相模原市における新型コロナウイルスの最新情報を提供しております。\n\n#相模原市 #神奈川県 #コロナウイルス #COVID19 \n\nhttps://sagamihara-stopcovid19.jp')
tweet.close()