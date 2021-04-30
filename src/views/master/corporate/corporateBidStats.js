import Chart from 'react-apexcharts'
import { MoreVertical } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Media,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

const CorporateBidStats = ({ colors, trackBgColor }) => {
  const statesArr = [
    {
      title: 'Bid Created',
      value: '54.4%',
      chart: {
        type: 'radialBar',
        series: [54.4],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.primary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      title: 'No of Bid Participents',
      value: '6.1%',
      chart: {
        type: 'radialBar',
        series: [6.1],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.warning.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      title: 'Bid Closed',
      value: '14.6%',
      chart: {
        type: 'radialBar',
        series: [14.6],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.secondary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      title: 'Bid Live',
      value: '4.2%',
      chart: {
        type: 'radialBar',
        series: [4.2],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.info.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    }
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.title} className='browser-states'>
          <Media>
            <h6 className='align-self-center mb-0'>{state.title}</h6>
          </Media>
          <div className='d-flex align-items-center'>
            <div className='font-weight-bold text-body-heading mr-1'>{state.value}</div>
            <Chart
              options={state.chart.options}
              series={state.chart.series}
              type={state.chart.type}
              height={state.chart.height}
              width={state.chart.width}
            />
          </div>
        </div>
      )
    })
  }

  return (
    <Card className='card-browser-states'>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>Bid Stats</CardTitle>
        </div>
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  )
}

export default CorporateBidStats
