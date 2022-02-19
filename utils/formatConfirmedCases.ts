type DataType = {
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '治療中'
          value: number
          children: [
            {
              attr: 'うち医療機関'
              value: number
            },
            {
              attr: 'うち自宅'
              value: number
            },
            {
              attr: 'うち宿泊施設'
              value: number
            }
          ]
        },
        {
          attr: '回復'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  陽性者数: number
  治療中: number
  うち医療機関: number
  うち自宅: number
  うち宿泊施設: number
  回復: number
  死亡: number
}

interface ChildData {
  attr: string
  value: number
}

type ChildDataType = {
  attr?: string
  value?: number
  children?: ChildData[]
}

function getSelectedItem(data: DataType, key: string) {
  let result: number | undefined
  const recursiveSearch = (data: ChildDataType) => {
    if (result) {
      return
    }
    if (data.attr === key) {
      result = data.value
    } else if (data.children) {
      data.children.forEach((child: ChildDataType) => {
        if (result) {
          return
        }
        recursiveSearch(child)
      })
    }
  }
  recursiveSearch(data)

  return result || 0
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  return {
    陽性者数: getSelectedItem(data, '陽性患者数'),
    治療中: getSelectedItem(data, '治療中'),
    うち医療機関: getSelectedItem(data, 'うち医療機関'),
    うち自宅: getSelectedItem(data, 'うち自宅'),
    うち宿泊施設: getSelectedItem(data, 'うち宿泊施設'),
    回復: getSelectedItem(data, '回復'),
    死亡: getSelectedItem(data, '死亡'),
  } as ConfirmedCasesType
}
