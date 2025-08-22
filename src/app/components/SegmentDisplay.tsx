import { DateSegmentProps } from 'react-aria-components'

interface Props {
  segment: DateSegmentProps['segment']
}
export default function SegmentDisplay(props: Props) {
  const { segment } = props

  const isTimeSegment = ['hour', 'minute', 'second'].includes(segment.type)
  const isHourSegment = segment.type === 'hour'
  const isMinuteSegment = segment.type === 'minute'
  const isSecondSegment = segment.type === 'second'

  if (!isTimeSegment) {
    return segment.text
  }

  if (isHourSegment) {
    if (segment.isPlaceholder) {
      return 'hh'
    }

    return segment.text
  }

  if (isMinuteSegment) {
    if (segment.isPlaceholder) {
      return 'mm'
    }

    return segment.text
  }

  if (isSecondSegment) {
    if (segment.isPlaceholder) {
      return 'ss'
    }

    return segment.text
  }

  return null
}
