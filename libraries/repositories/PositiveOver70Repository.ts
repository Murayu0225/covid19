// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/positive_over70.json'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'
import {
  Convert,
  PositiveOver70,
} from '~/libraries/auto_generated/data_converter/convertPositiveOver70'

export interface IPositiveOver70Repository
  extends IBaseRepository<PositiveOver70> {}

export class PositiveOver70Repository
  extends BaseRepository<PositiveOver70>
  implements IPositiveOver70Repository
{
  /**
   * 使用箇所
   *
   * 報告日別による陽性者数（65歳以上）の推移 (components/index/CardsReference/PositiveNumberOver70/Card.vue)
   */
  constructor() {
    super(Convert.toPositiveOver70(JSON.stringify(rawData)))
  }
}
