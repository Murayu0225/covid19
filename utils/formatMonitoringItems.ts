// monitoring_items.json の型チェック用

import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

type DataKey =
  | '新規陽性患者数'
  | '新規陽性患者数（参考値）'
  | '人口10万人当たりの累積陽性者数'
  | '人口10万人当たりの累積陽性者数（参考値）'
  | '陽性患者増加比'
  | '陽性患者増加比（参考値）'
  | '感染経路不明者の割合'
  | '感染経路不明者の割合（参考値）'
  | '陽性率'
  | '陽性率（参考値）'
  | '入院患者数'
  | '入院患者数（参考値）'

type DataCommentKey = '総括コメント-感染状況' | '総括コメント-医療提供体制'

type RawData = {
  新規陽性患者数: string
  '新規陽性患者数（参考値）': string
  人口10万人当たりの累積陽性者数: string
  '人口10万人当たりの累積陽性者数（参考値）': string
  陽性患者増加比: string
  '陽性患者増加比（参考値）': string
  感染経路不明者の割合: string
  '感染経路不明者の割合（参考値）': string
  陽性率: string
  '陽性率（参考値）': string
  入院患者数: string
  '入院患者数（参考値）': string
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

export type MonitoringItems = Record<DataKey, MonitoringItemValue>

interface MonitoringItemValue {
  value: string
  unit: Unit | null // 元データに無いので独自に追加, 単位がない場合は null
}

export type Unit = {
  text: string // *********** もとの日本語のテキスト
  translatable: boolean // ** 翻訳が必要かどうか
}

/**
 * monitoring_items_json のデータを整形
 *
 * @param data - Raw data
 */
export const formatMonitoringItems = (rawDataObj: RawData): MonitoringItems => {
  const unitPerson: Unit = { text: '人', translatable: true }
  const unitPercentage: Unit = { text: '%', translatable: false }

  const toNumberIn10thPlace = getCommaSeparatedNumberToFixedFunction(1)

  return {
    新規陽性患者数: {
      value: rawDataObj['新規陽性患者数'],
      unit: unitPerson,
    },
    '新規陽性患者数（参考値）': {
      value: rawDataObj['新規陽性患者数（参考値）'],
      unit: unitPerson,
    },
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
      unit: unitPercentage,
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
      unit: unitPercentage,
    },
    陽性率: {
      value: rawDataObj['陽性率'],
      unit: unitPercentage,
    },
    '陽性率（参考値）': {
      value: rawDataObj['陽性率（参考値）'],
      unit: unitPercentage,
    },
    入院患者数: {
      value: rawDataObj['入院患者数'],
      unit: unitPerson,
    },
    '入院患者数（参考値）': {
      value: rawDataObj['入院患者数（参考値）'],
      unit: null,
    },
  }
}

export type MonitoringCommentItems = Record<DataCommentKey, MonitoringComment>

export type MonitoringComment = {
  level: number
  display: {
    '@ja': string
    '@en': string
  }
}

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
