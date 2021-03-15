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

type DataCommentKey = '総括コメント-感染状況' | '総括コメント-医療提供体制'

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

interface Comment {
  level: number
  display: {
    '@ja': string
    '@en': string
  }
}

type RawDataComment = {
  '総括コメント-感染状況': Comment
  '総括コメント-医療提供体制': Comment
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
}

export type MonitoringItems = Record<DataKey, MonitoringItemValue>

/**
 * monitoring_items_json のデータを整形
 *
 * @param data - Raw data
 */
export const formatMonitoringItems = (rawDataObj: RawData): MonitoringItems => {
  const unitPerson: Unit = { text: '人', translatable: true }
  const unitPercentage: Unit = { text: '%', translatable: false }
  const unitSpace: Unit = { text: ' ', translatable: false }

  return {
    人口10万人当たりの累積陽性者数: {
      value: rawDataObj['人口10万人当たりの累積陽性者数'],
      unit: unitPerson,
    },
    '人口10万人当たりの累積陽性者数（参考値）': {
      value: rawDataObj['人口10万人当たりの累積陽性者数（参考値）'],
      unit: unitPerson,
    },
    陽性患者増加比: {
      value: rawDataObj['陽性患者増加比'],
      unit: unitSpace,
    },
    '陽性患者増加比（参考値）': {
      value: rawDataObj['陽性患者増加比（参考値）'],
      unit: unitPercentage,
    },
    感染経路不明者の割合: {
      value: rawDataObj['感染経路不明者の割合'],
      unit: unitPercentage,
    },
    '感染経路不明者の割合（参考値）': {
      value: rawDataObj['感染経路不明者の割合（参考値）'],
      unit: null,
    },
    陽性率: {
      value: rawDataObj['陽性率'],
      unit: unitPercentage,
    },
    '陽性率（参考値）': {
      value: rawDataObj['陽性率（参考値）'],
      unit: null,
    },
    病床の逼迫具合: {
      value: rawDataObj['病床の逼迫具合'],
      unit: unitPercentage,
    },
    '病床の逼迫具合（参考値）': {
      value: rawDataObj['病床の逼迫具合（参考値）'],
      unit: null,
    },
    重症者用病床の逼迫具合: {
      value: rawDataObj['重症者用病床の逼迫具合'],
      unit: unitPercentage,
    },
    '重症者用病床の逼迫具合（参考値）': {
      value: rawDataObj['重症者用病床の逼迫具合（参考値）'],
      unit: null,
    },
    人口10万人当たりの療養者数: {
      value: rawDataObj['人口10万人当たりの療養者数'],
      unit: unitPerson,
    },
    '人口10万人当たりの療養者数（参考値）': {
      value: rawDataObj['人口10万人当たりの療養者数（参考値）'],
      unit: null,
    },
  }
}

export type MonitoringComment = {
  level: number
  display: {
    '@ja': string
    '@en': string
  }
}

export type MonitoringCommentItems = Record<DataCommentKey, MonitoringComment>

/**
 * monitoring_items_json から総括コメントのみ抜き出し
 *
 * @param data - Raw data
 */
export const formatMonitoringComment = (
  rawDataObj: RawDataComment
): MonitoringCommentItems => {
  return {
    '総括コメント-感染状況': {
      level: rawDataObj['総括コメント-感染状況'].level,
      display: {
        '@ja': rawDataObj['総括コメント-感染状況'].display['@ja'],
        '@en': rawDataObj['総括コメント-感染状況'].display['@en'],
      },
    },
    '総括コメント-医療提供体制': {
      level: rawDataObj['総括コメント-医療提供体制'].level,
      display: {
        '@ja': rawDataObj['総括コメント-医療提供体制'].display['@ja'],
        '@en': rawDataObj['総括コメント-医療提供体制'].display['@en'],
      },
    },
  }
}
