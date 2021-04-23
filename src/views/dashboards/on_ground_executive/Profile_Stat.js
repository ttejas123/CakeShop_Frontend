import Chart from 'react-apexcharts'
import { MoreVertical, Pocket, TrendingUp, File, FileText, Layers, Package} from 'react-feather'
// import * as Icon from 'react-feather'
import Avatar from '@components/avatar'

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
// import { Icon } from 'leaflet'

const ProfileState = ({ colors, trackBgColor }) => {
    console.log("COlors", colors)
  const statesArr = [
    {
      avatar: require('@src/assets/images/icons/google-chrome.png').default,
      title: 'Profile Completed',
      value: '54.4%',
      Icon: File,
      color: 'light-primary',


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
    }
   
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.title} className='browser-states'>
          <Media>
            {/* <img className='rounded mr-1' src={state.avatar} height='30' alt={state.title} /> */}
            {/* <Avatar className='rounded mr-1' color={state.color} icon={<state.Icon size={18} />} /> */}
            <Avatar className='rounded mr-1' color={state.color} icon={<state.Icon size={18} />} />

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
          <CardTitle tag='h4'>Status</CardTitle>
          {/* <CardText className='font-small-2'>Counter August 2020</CardText> */}
        </div>
        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            <MoreVertical size={18} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem className='w-100'>Last 28 Days</DropdownItem>
            <DropdownItem className='w-100'>Last Month</DropdownItem>
            <DropdownItem className='w-100'>Last Year</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  )
}

export default ProfileState
