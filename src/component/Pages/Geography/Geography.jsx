import { ResponsiveChoropleth } from "@nivo/geo"
import { geo } from "./geaCountry"
import { useTheme } from "@mui/material"



const data =[
  {
    "id": "AFG",
    "value": 333167
  },
  {
    "id": "AGO",
    "value": 190988
  },
  {
    "id": "ALB",
    "value": 323237
  },
  {
    "id": "ARE",
    "value": 687897
  },
  {
    "id": "ARG",
    "value": 69807
  },
  {
    "id": "ARM",
    "value": 356879
  },
  {
    "id": "ATA",
    "value": 262711
  },
  {
    "id": "ATF",
    "value": 794825
  },
  {
    "id": "AUT",
    "value": 508420
  },
  {
    "id": "AZE",
    "value": 168441
  },
  {
    "id": "BDI",
    "value": 627669
  },
  {
    "id": "BEL",
    "value": 329929
  },
  {
    "id": "BEN",
    "value": 493197
  },
  {
    "id": "BFA",
    "value": 523377
  },
  {
    "id": "BGD",
    "value": 323597
  },
  {
    "id": "BGR",
    "value": 391586
  },
  {
    "id": "BHS",
    "value": 537580
  },
  {
    "id": "BIH",
    "value": 722051
  },
  {
    "id": "BLR",
    "value": 158837
  },
  {
    "id": "BLZ",
    "value": 289193
  },
  {
    "id": "BOL",
    "value": 774865
  },
  {
    "id": "BRN",
    "value": 147571
  },
  {
    "id": "BTN",
    "value": 489518
  },
  {
    "id": "BWA",
    "value": 878385
  },
  {
    "id": "CAF",
    "value": 782434
  },
  {
    "id": "CAN",
    "value": 244542
  },
  {
    "id": "CHE",
    "value": 449947
  },
  {
    "id": "CHL",
    "value": 125944
  },
  {
    "id": "CHN",
    "value": 256513
  },
  {
    "id": "CIV",
    "value": 520714
  },
  {
    "id": "CMR",
    "value": 768798
  },
  {
    "id": "COG",
    "value": 516428
  },
  {
    "id": "COL",
    "value": 768005
  },
  {
    "id": "CRI",
    "value": 197673
  },
  {
    "id": "CUB",
    "value": 332223
  },
  {
    "id": "-99",
    "value": 599522
  },
  {
    "id": "CYP",
    "value": 675200
  },
  {
    "id": "CZE",
    "value": 890378
  },
  {
    "id": "DEU",
    "value": 577876
  },
  {
    "id": "DJI",
    "value": 260498
  },
  {
    "id": "DNK",
    "value": 769125
  },
  {
    "id": "DOM",
    "value": 466918
  },
  {
    "id": "DZA",
    "value": 419168
  },
  {
    "id": "ECU",
    "value": 571264
  },
  {
    "id": "EGY",
    "value": 676900
  },
  {
    "id": "ERI",
    "value": 96646
  },
  {
    "id": "ESP",
    "value": 814824
  },
  {
    "id": "EST",
    "value": 106589
  },
  {
    "id": "ETH",
    "value": 329564
  },
  {
    "id": "FIN",
    "value": 913491
  },
  {
    "id": "FJI",
    "value": 625678
  },
  {
    "id": "FLK",
    "value": 567502
  },
  {
    "id": "FRA",
    "value": 512291
  },
  {
    "id": "GAB",
    "value": 996276
  },
  {
    "id": "GBR",
    "value": 502226
  },
  {
    "id": "GEO",
    "value": 798315
  },
  {
    "id": "GHA",
    "value": 729126
  },
  {
    "id": "GIN",
    "value": 595829
  },
  {
    "id": "GMB",
    "value": 787333
  },
  {
    "id": "GNB",
    "value": 296999
  },
  {
    "id": "GNQ",
    "value": 92958
  },
  {
    "id": "GRC",
    "value": 330332
  },
  {
    "id": "GTM",
    "value": 340787
  },
  {
    "id": "GUY",
    "value": 745216
  },
  {
    "id": "HND",
    "value": 146101
  },
  {
    "id": "HRV",
    "value": 433727
  },
  {
    "id": "HTI",
    "value": 676933
  },
  {
    "id": "HUN",
    "value": 730742
  },
  {
    "id": "IDN",
    "value": 174998
  },
  {
    "id": "IND",
    "value": 422954
  },
  {
    "id": "IRL",
    "value": 898009
  },
  {
    "id": "IRN",
    "value": 613796
  },
  {
    "id": "IRQ",
    "value": 405399
  },
  {
    "id": "ISL",
    "value": 539813
  },
  {
    "id": "ISR",
    "value": 180664
  },
  {
    "id": "ITA",
    "value": 282816
  },
  {
    "id": "JAM",
    "value": 201056
  },
  {
    "id": "JOR",
    "value": 190717
  },
  {
    "id": "JPN",
    "value": 222256
  },
  {
    "id": "KAZ",
    "value": 223339
  },
  {
    "id": "KEN",
    "value": 818158
  },
  {
    "id": "KGZ",
    "value": 726551
  },
  {
    "id": "KHM",
    "value": 62919
  },
  {
    "id": "OSA",
    "value": 660066
  },
  {
    "id": "KWT",
    "value": 16131
  },
  {
    "id": "LAO",
    "value": 796537
  },
  {
    "id": "LBN",
    "value": 989004
  },
  {
    "id": "LBR",
    "value": 191063
  },
  {
    "id": "LBY",
    "value": 2375
  },
  {
    "id": "LKA",
    "value": 474828
  },
  {
    "id": "LSO",
    "value": 211602
  },
  {
    "id": "LTU",
    "value": 935530
  },
  {
    "id": "LUX",
    "value": 694550
  },
  {
    "id": "LVA",
    "value": 708048
  },
  {
    "id": "MAR",
    "value": 389322
  },
  {
    "id": "MDA",
    "value": 396119
  },
  {
    "id": "MDG",
    "value": 418247
  },
  {
    "id": "MEX",
    "value": 666293
  },
  {
    "id": "MKD",
    "value": 873663
  },
  {
    "id": "MLI",
    "value": 720250
  },
  {
    "id": "MMR",
    "value": 214029
  },
  {
    "id": "MNE",
    "value": 970148
  },
  {
    "id": "MNG",
    "value": 87629
  },
  {
    "id": "MOZ",
    "value": 589622
  },
  {
    "id": "MRT",
    "value": 500148
  },
  {
    "id": "MWI",
    "value": 830967
  },
  {
    "id": "MYS",
    "value": 576168
  },
  {
    "id": "NAM",
    "value": 611981
  },
  {
    "id": "NCL",
    "value": 352167
  },
  {
    "id": "NER",
    "value": 620142
  },
  {
    "id": "NGA",
    "value": 394657
  },
  {
    "id": "NIC",
    "value": 302069
  },
  {
    "id": "NLD",
    "value": 445921
  },
  {
    "id": "NOR",
    "value": 603949
  },
  {
    "id": "NPL",
    "value": 984012
  },
  {
    "id": "NZL",
    "value": 670245
  },
  {
    "id": "OMN",
    "value": 464055
  },
  {
    "id": "PAK",
    "value": 205458
  },
  {
    "id": "PAN",
    "value": 734175
  },
  {
    "id": "PER",
    "value": 465698
  },
  {
    "id": "PHL",
    "value": 616509
  },
  {
    "id": "PNG",
    "value": 335349
  },
  {
    "id": "POL",
    "value": 403141
  },
  {
    "id": "PRI",
    "value": 620076
  },
  {
    "id": "PRT",
    "value": 143960
  },
  {
    "id": "PRY",
    "value": 837722
  },
  {
    "id": "QAT",
    "value": 321695
  },
  {
    "id": "ROU",
    "value": 454357
  },
  {
    "id": "RUS",
    "value": 729368
  },
  {
    "id": "RWA",
    "value": 593108
  },
  {
    "id": "ESH",
    "value": 176519
  },
  {
    "id": "SAU",
    "value": 519051
  },
  {
    "id": "SDN",
    "value": 104575
  },
  {
    "id": "SDS",
    "value": 582676
  },
  {
    "id": "SEN",
    "value": 833799
  },
  {
    "id": "SLB",
    "value": 158875
  },
  {
    "id": "SLE",
    "value": 25688
  },
  {
    "id": "SLV",
    "value": 758614
  },
  {
    "id": "ABV",
    "value": 942487
  },
  {
    "id": "SOM",
    "value": 451404
  },
  {
    "id": "SRB",
    "value": 792796
  },
  {
    "id": "SUR",
    "value": 119477
  },
  {
    "id": "SVK",
    "value": 318031
  },
  {
    "id": "SVN",
    "value": 651067
  },
  {
    "id": "SWZ",
    "value": 545385
  },
  {
    "id": "SYR",
    "value": 112800
  },
  {
    "id": "TCD",
    "value": 552452
  },
  {
    "id": "TGO",
    "value": 591762
  },
  {
    "id": "THA",
    "value": 669501
  },
  {
    "id": "TJK",
    "value": 422533
  },
  {
    "id": "TKM",
    "value": 235097
  },
  {
    "id": "TLS",
    "value": 632374
  },
  {
    "id": "TTO",
    "value": 238718
  },
  {
    "id": "TUN",
    "value": 183866
  },
  {
    "id": "TUR",
    "value": 526421
  },
  {
    "id": "TWN",
    "value": 490148
  },
  {
    "id": "TZA",
    "value": 868627
  },
  {
    "id": "UGA",
    "value": 327162
  },
  {
    "id": "UKR",
    "value": 429053
  },
  {
    "id": "URY",
    "value": 110309
  },
  {
    "id": "USA",
    "value": 11058
  },
  {
    "id": "UZB",
    "value": 758268
  },
  {
    "id": "VEN",
    "value": 702033
  },
  {
    "id": "VNM",
    "value": 164755
  },
  {
    "id": "VUT",
    "value": 248703
  },
  {
    "id": "PSE",
    "value": 292772
  },
  {
    "id": "YEM",
    "value": 584315
  },
  {
    "id": "ZAF",
    "value": 979543
  },
  {
    "id": "ZMB",
    "value": 825983
  },
  {
    "id": "ZWE",
    "value": 525967
  },
  {
    "id": "KOR",
    "value": 96508
  }
]


export default function Geography({scale ,isDashboard=false}) {
  const theme =useTheme()
  return (
    <ResponsiveChoropleth
    projectionScale={scale}
    data={data}
    features= {geo.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="spectral"
    domain={[ 0, 1000000 ]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[ 0.5, 0.5 ]}
    projectionRotation={[ 0, 0, 0 ]}
    enableGraticule={true}
    graticuleLineColor="transparent"
    borderWidth={0.5}
    borderColor="#152538"
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
                  "fontSize": 12,
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
                  "fontSize": isDashboard?0: 11,
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
  legends={isDashboard?[]:[
    {
        anchor: 'bottom-left',
        direction: 'column',
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: 'left-to-right',
        itemTextColor: theme.palette.text.secondary,
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
            {
                on: 'hover',
                style: {
                    itemTextColor: theme.palette.text.primary,
                    itemOpacity: 1
                }
            }
        ]
    }
]}
/>
  )
}