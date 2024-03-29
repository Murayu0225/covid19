export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

type Series = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#89DBF7',
  fillColor: '#89DBF7',
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#99B3FF',
  fillColor: '#99B3FF',
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#0799ED',
  fillColor: '#0799ED',
}

const surfaceStyleD: SurfaceStyle = {
  strokeColor: '#5562D6',
  fillColor: '#5562D6',
}

const surfaceStyleE: SurfaceStyle = {
  strokeColor: '#cc7004',
  fillColor: '#cc7004',
}

const surfaceStyleF: SurfaceStyle = {
  strokeColor: '#5562D6',
  fillColor: '#5562D6',
}

const surfaceStyleG: SurfaceStyle = {
  strokeColor: '#5562D6',
  fillColor: '#5562D6',
}

const surfaceStyleH: SurfaceStyle = {
  strokeColor: '#e300cc',
  fillColor: '#e300cc',
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
