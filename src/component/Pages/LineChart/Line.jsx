import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data=[
    {
      "id": "japan",
      "color": "hsl(225, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 118
        },
        {
          "x": "helicopter",
          "y": 47
        },
        {
          "x": "boat",
          "y": 237
        },
        {
          "x": "train",
          "y": 181
        },
        {
          "x": "subway",
          "y": 63
        },
        {
          "x": "bus",
          "y": 239
        },
        {
          "x": "car",
          "y": 109
        },
        {
          "x": "moto",
          "y": 14
        },
        {
          "x": "bicycle",
          "y": 39
        },
        {
          "x": "horse",
          "y": 126
        },
        {
          "x": "skateboard",
          "y": 171
        },
        {
          "x": "others",
          "y": 33
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(171, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 219
        },
        {
          "x": "helicopter",
          "y": 253
        },
        {
          "x": "boat",
          "y": 127
        },
        {
          "x": "train",
          "y": 112
        },
        {
          "x": "subway",
          "y": 117
        },
        {
          "x": "bus",
          "y": 127
        },
        {
          "x": "car",
          "y": 249
        },
        {
          "x": "moto",
          "y": 103
        },
        {
          "x": "bicycle",
          "y": 235
        },
        {
          "x": "horse",
          "y": 216
        },
        {
          "x": "skateboard",
          "y": 275
        },
        {
          "x": "others",
          "y": 62
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(74, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 18
        },
        {
          "x": "helicopter",
          "y": 238
        },
        {
          "x": "boat",
          "y": 195
        },
        {
          "x": "train",
          "y": 231
        },
        {
          "x": "subway",
          "y": 275
        },
        {
          "x": "bus",
          "y": 204
        },
        {
          "x": "car",
          "y": 130
        },
        {
          "x": "moto",
          "y": 286
        },
        {
          "x": "bicycle",
          "y": 52
        },
        {
          "x": "horse",
          "y": 101
        },
        {
          "x": "skateboard",
          "y": 29
        },
        {
          "x": "others",
          "y": 76
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(328, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 87
        },
        {
          "x": "helicopter",
          "y": 90
        },
        {
          "x": "boat",
          "y": 79
        },
        {
          "x": "train",
          "y": 256
        },
        {
          "x": "subway",
          "y": 178
        },
        {
          "x": "bus",
          "y": 172
        },
        {
          "x": "car",
          "y": 135
        },
        {
          "x": "moto",
          "y": 118
        },
        {
          "x": "bicycle",
          "y": 77
        },
        {
          "x": "horse",
          "y": 264
        },
        {
          "x": "skateboard",
          "y": 38
        },
        {
          "x": "others",
          "y": 280
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(99, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 229
        },
        {
          "x": "helicopter",
          "y": 50
        },
        {
          "x": "boat",
          "y": 7
        },
        {
          "x": "train",
          "y": 275
        },
        {
          "x": "subway",
          "y": 229
        },
        {
          "x": "bus",
          "y": 233
        },
        {
          "x": "car",
          "y": 77
        },
        {
          "x": "moto",
          "y": 228
        },
        {
          "x": "bicycle",
          "y": 288
        },
        {
          "x": "horse",
          "y": 25
        },
        {
          "x": "skateboard",
          "y": 158
        },
        {
          "x": "others",
          "y": 89
        }
      ]
    }
  ]


export default function Line({isDashboard=false}) {
    const theme=useTheme()
  return (
<ResponsiveLine
        data={data}
        margin={isDashboard? { top: 30, right: 90, bottom: 50, left: 50 }: { top: 40, right: 80, bottom: 80, left: 80 }}
        xScale={{ type: 'point' }}
        enableGridX={!isDashboard}
        enableGridY={!isDashboard}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        theme={{
        
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": isDashboard?0:12,
                        "fill":theme.palette.text.primary ,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.secondary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#dddddd",
                    "strokeWidth": 1
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 11,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transpart"
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": "#333333",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "#000000",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "wrapper": {},
                "container": {
                    "background": theme.palette.mode === "dark" ? "black" :"#ffffff",
                    "color":theme.palette.mode === "dark" ? "white" : "#333333",
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }}
    />  )
}
