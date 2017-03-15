import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
// ICONS
import IconStart from 'react-icons/lib/md/fast-forward';
import IconCheck from 'react-icons/lib/fa/check';
import IconClock from 'react-icons/lib/md/access-time';
import IconProgress from 'react-icons/lib/md/cached';

class Timeline extends Components {
  static contextTypes = {
    intl: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
  };

  getTimelineJSX = timeline => {
    const StepIcon = ({ status }) => (
      <div className={`step-point tl-step-${status}`}>
        {status === 'start' && <IconStart className="ico" />}
        {status === 'done' && <IconCheck className="ico" />}
        {status === 'inprogress' && <IconProgress className="ico" />}
        {status === 'todo' && <IconClock className="ico" />}
      </div>
    );

    const TimelineStep = ({ step, index }) => (
      <div className={`step tl-step-${step.status}`}>
        <OverlayTrigger placement="bottom" overlay={ <Tooltip id="tooltip">{step.name}</Tooltip> } >
          <span className="hover-area">
            <div className={`step-inter tl-step-${step.status}`}>
              <span className="step-label">{index + 1}&nbsp;-&nbsp;{step.name}</span>
            </div>
            <StepIcon status={step.status} />
          </span>
        </OverlayTrigger>

      </div>
    );

    const timelineStepsJSX = timeline.steps.map((step, i) =>
      <TimelineStep step={step} index={i} key={i} />
    );


    return (
      <div className="timeline-component">
        <h3>
          <span className={`glyphicon ${timeline.icon} ico-left`} />
          {timeline.name} - ({timeline.steps.length} steps)
        </h3>
        <div className="timeline">
          <StepIcon status="start" size={60} />
          {timelineStepsJSX}
        </div>
      </div>
    );
  }

  render() {
    const timelines = this.props.timelines || [];
    const timelinesJSX = timelines.map(this.getTimelineJSX);
    return <div>{timelinesJSX}</div>;
  }
}

export default Timeline;
