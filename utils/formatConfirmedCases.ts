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
              attr: '医療機関'
              value: number
            },
            {
              attr: '自宅療養'
              value: number
            },
            {
              attr: '宿泊療養'
              value: number
            }
          ]
        },
        {
          attr: '死亡'
          value: number
        },
        {
          attr: '回復'
          value: number
        },
        {
          attr: '市内在住'
          value: number
          children: [
            {
              attr: '市外在住'
              value: number
            }
          ]
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  陽性患者数: number
  治療中: number
  医療機関: number
  自宅療養: number
  宿泊療養: number
  死亡: number
  回復: number
  市内在住: number
  市外在住: number
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
    陽性患者数: getSelectedItem(data, '陽性患者数'),
    治療中: getSelectedItem(data, '治療中'),
    医療機関: getSelectedItem(data, '医療機関'),
    自宅療養: getSelectedItem(data, '自宅療養'),
    宿泊療養: getSelectedItem(data, '宿泊療養'),
    死亡: getSelectedItem(data, '死亡'),
    回復: getSelectedItem(data, '回復'),
    市内在住: getSelectedItem(data, '市内在住'),
    市外在住: getSelectedItem(data, '市外在住'),
  } as ConfirmedCasesType
}
