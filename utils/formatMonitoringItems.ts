// monitoring_items.json の型チェック用

type DataKey =
  | '人口10万人当たりの累積陽性者数'
  | '人口10万人当たりの累積陽性者数（参考値）'
  | '陽性患者増加比'
  | '陽性患者増加比（参考値）'
  | '感染経路不明者の割合'
  | '感染経路不明者の割合（参考値）'
  | '陽性率'
  | '陽性率（参考値）'
  | '病床の逼迫具合'
  | '病床の逼迫具合（参考値）'
  | '重症者用病床の逼迫具合'
  | '重症者用病床の逼迫具合（参考値）'
  | '人口10万人当たりの療養者数'
  | '人口10万人当たりの療養者数（参考値）'

// 小数の桁が自動的に四捨五入されるのを防ぐためにString値にしている

type RawData = {
  人口10万人当たりの累積陽性者数: string
  '人口10万人当たりの累積陽性者数（参考値）': string
  陽性患者増加比: string
  '陽性患者増加比（参考値）': string
  感染経路不明者の割合: string
  '感染経路不明者の割合（参考値）': string
  陽性率: string
  '陽性率（参考値）': string
  病床の逼迫具合: string
  '病床の逼迫具合（参考値）': string
  重症者用病床の逼迫具合: string
  '重症者用病床の逼迫具合（参考値）': string
  人口10万人当たりの療養者数: string
  '人口10万人当たりの療養者数（参考値）': string
}

// -----------------------------------------
// フォーマット済み モニタリング指標データ用

export type Unit = {
  text: string // *********** もとの日本語のテキスト
  translatable: boolean // ** 翻訳が必要かどうか
}

interface MonitoringItemValue {
  value: string
  unit: Unit | null // 元データに無いので独自に追加, 単位がない場合は null
  bold: boolean // 太字で表示するか否かの設定
}

export type MonitoringItems = Record<DataKey, MonitoringItemValue>

/**
 * monitoring_items_json のデータを整形
 *
 * @param rawDataObj - Raw data
 */
export const formatMonitoringItems = (rawDataObj: RawData): MonitoringItems => {
  const unitPerson: Unit = { text: '人', translatable: true }
  const unitPercentage: Unit = { text: '%', translatable: false }

  const unitSpace: Unit = { text: ' ', translatable: false }

  return {
    人口10万人当たりの累積陽性者数: {
      value: rawDataObj['人口10万人当たりの累積陽性者数'],
      unit: unitPerson,
      bold: true,
    },
    '人口10万人当たりの累積陽性者数（参考値）': {
      value: rawDataObj['人口10万人当たりの累積陽性者数（参考値）'],
      unit: unitPerson,
      bold: false,
    },
    陽性患者増加比: {
      value: rawDataObj['陽性患者増加比'],
      unit: unitSpace,
      bold: true,
    },
    '陽性患者増加比（参考値）': {
      value: rawDataObj['陽性患者増加比（参考値）'],
      unit: unitPercentage,
      bold: false,
    },
    感染経路不明者の割合: {
      value: rawDataObj['感染経路不明者の割合'],
      unit: unitPercentage,
      bold: true,
    },
    '感染経路不明者の割合（参考値）': {
      value: rawDataObj['感染経路不明者の割合（参考値）'],
      unit: null,
      bold: false,
    },
    陽性率: {
      value: rawDataObj['陽性率'],
      unit: unitPercentage,
      bold: true,
    },
    '陽性率（参考値）': {
      value: rawDataObj['陽性率（参考値）'],
      unit: null,
      bold: false,
    },
    病床の逼迫具合: {
      value: rawDataObj['病床の逼迫具合'],
      unit: unitPercentage,
      bold: true,
    },
    '病床の逼迫具合（参考値）': {
      value: rawDataObj['病床の逼迫具合（参考値）'],
      unit: null,
      bold: false,
    },
    重症者用病床の逼迫具合: {
      value: rawDataObj['重症者用病床の逼迫具合'],
      unit: unitPercentage,
      bold: true,
    },
    '重症者用病床の逼迫具合（参考値）': {
      value: rawDataObj['重症者用病床の逼迫具合（参考値）'],
      unit: null,
      bold: false,
    },
    人口10万人当たりの療養者数: {
      value: rawDataObj['人口10万人当たりの療養者数'],
      unit: unitPerson,
      bold: true,
    },
    '人口10万人当たりの療養者数（参考値）': {
      value: rawDataObj['人口10万人当たりの療養者数（参考値）'],
      unit: null,
      bold: false,
    },
  }
}
