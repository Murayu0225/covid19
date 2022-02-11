export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

type Series = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#66CBF9',
  fillColor: '#66CBF9',
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#6789E2',
  fillColor: '#6789E2',
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#6aa5f6',
  fillColor: '#6aa5f6',
}

const surfaceStyleD: SurfaceStyle = {
  strokeColor: '#5469DE',
  fillColor: '#5469DE',
}

const surfaceStyleE: SurfaceStyle = {
  strokeColor: '#cc7004',
  fillColor: '#cc7004',
}

const surfaceStyleF: SurfaceStyle = {
  strokeColor: '#5469DE',
  fillColor: '#5469DE',
}

const surfaceStyleG: SurfaceStyle = {
  strokeColor: '#5469DE',
  fillColor: '#5469DE',
}

const surfaceStyleH: SurfaceStyle = {
  strokeColor: '#006CA8',
  fillColor: '#006CA8',
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    case 4:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC, surfaceStyleG]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}

export function getGraphSeriesColor(series: Series) {
  const styles: { [key in Series]: SurfaceStyle } = {
    A: surfaceStyleA,
    B: surfaceStyleB,
    C: surfaceStyleC,
    D: surfaceStyleD,
    E: surfaceStyleE,
    F: surfaceStyleF,
    G: surfaceStyleG,
    H: surfaceStyleH,
  }
  return styles[series]
}
