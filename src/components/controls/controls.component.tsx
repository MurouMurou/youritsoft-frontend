import {
  ControlSortedButtonStyleComponent,
  ControlStyleComponent,
  ControlTextStyleComponent,
  ControlsStyleComponent,
} from './controls.styles'

import { ControlsProps } from './cointrols.props'

export const Controls: React.FC<ControlsProps> = ({
  prev,
  next,
  sortByName,
}: ControlsProps): JSX.Element => {
  return (
    <ControlsStyleComponent>
      <ControlStyleComponent onClick={prev}>
        <div>
          <svg
            width='23'
            height='40'
            viewBox='0 0 23 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21 2L3 20L21 38'
              stroke='#EEEEEE'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        </div>
        <ControlTextStyleComponent style={{ marginLeft: 30 }}>
          Previous
        </ControlTextStyleComponent>
      </ControlStyleComponent>
      <ControlSortedButtonStyleComponent onClick={sortByName}>
        Sort by name
      </ControlSortedButtonStyleComponent>
      <ControlStyleComponent onClick={next}>
        <ControlTextStyleComponent style={{ marginRight: 30 }}>
          Next
        </ControlTextStyleComponent>
        <div>
          <svg
            width='23'
            height='40'
            viewBox='0 0 23 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2 38L20 20L2 2'
              stroke='#EEEEEE'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        </div>
      </ControlStyleComponent>
    </ControlsStyleComponent>
  )
}
