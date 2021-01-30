export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

type Series = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#053c47',
  fillColor: '#1b4d30',
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#053c47',
  fillColor: '#085c6c',
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#053c47',
  fillColor: '#c8dae1',
}

const surfaceStyleD: SurfaceStyle = {
  strokeColor: '#1b454d',
  fillColor: '#c8dae1',
}

const surfaceStyleE: SurfaceStyle = {
  strokeColor: '#cc7004',
  fillColor: '#cc7004',
}

const surfaceStyleF: SurfaceStyle = {
  strokeColor: '#1b454d',
  fillColor: '#1b454d',
}

const surfaceStyleG: SurfaceStyle = {
  strokeColor: '#053c47',
  fillColor: '#e2eee2',
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
  }
  return styles[series]
}
