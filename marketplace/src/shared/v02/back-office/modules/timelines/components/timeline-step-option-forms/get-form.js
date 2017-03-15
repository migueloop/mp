import TimelineStepOptionsUpdatedDevice1Cmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/fleet-updated-device-1';
import TimelineStepOptionsUpdatedLine1Cmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/fleet-updated-line-1';
import TimelineStepOptionsSCDeviceReadyCmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/sav-casse-device-ready';
import TimelineStepOptionsSCDeviceDeliveryCmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/sav-casse-device-delivery';
import TimelineStepOptionsSCDeviceDignosticCmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/sav-casse-device-diagnostic';

import TimelineStepOptionsPortabilityDignosticCmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/portability-diagnostic';
import TimelineStepOptionsPortabilityInProgressCmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/portability-in-progress';
import TimelineStepOptionsPortabilityClosedCmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/portability-closed';
import TimelineStepOptionsSC2DeviceSentCmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/sav-casse-2-device-sent';
import TimelineStepOptionsSC2RepairStatusCmpt from 'v02/back-office/modules/timelines/components/timeline-step-option-forms/sav-casse-2-repair-status';

export default function (tenant, step) {
  const [
    TimelineStepOptionsUpdatedDevice1,
    TimelineStepOptionsUpdatedLine1,
    TimelineStepOptionsSCDeviceReady,
    TimelineStepOptionsSCDeviceDelivery,
    TimelineStepOptionsSCDeviceDignostic,
    TimelineStepOptionsPortabilityDignostic,
    TimelineStepOptionsPortabilityInProgress,
    TimelineStepOptionsPortabilityClosed,
    TimelineStepOptionsSC2DeviceSent,
    TimelineStepOptionsSC2RepairStatus,
  ] =
  [
    TimelineStepOptionsUpdatedDevice1Cmpt,
    TimelineStepOptionsUpdatedLine1Cmpt,
    TimelineStepOptionsSCDeviceReadyCmpt,
    TimelineStepOptionsSCDeviceDeliveryCmpt,
    TimelineStepOptionsSCDeviceDignosticCmpt,
    TimelineStepOptionsPortabilityDignosticCmpt,
    TimelineStepOptionsPortabilityInProgressCmpt,
    TimelineStepOptionsPortabilityClosedCmpt,
    TimelineStepOptionsSC2DeviceSentCmpt,
    TimelineStepOptionsSC2RepairStatusCmpt,
  ]
  .map(cmpt => cmpt.get(tenant));
  switch (step) {
    case 'tl_step_fleet_updated_device_1':
      return TimelineStepOptionsUpdatedDevice1;
    case 'tl_step_fleet_updated_line_1':
      return TimelineStepOptionsUpdatedLine1;
    case 'device_diagnostic':
      return TimelineStepOptionsSCDeviceDignostic;
    case 'device_ready':
      return TimelineStepOptionsSCDeviceReady;
    case 'sc_device_delivery':
      return TimelineStepOptionsSCDeviceDelivery;
    case 'porta_qualif':
      return TimelineStepOptionsPortabilityDignostic;
    case 'porta_ready':
      return TimelineStepOptionsPortabilityInProgress;
    case 'porta_closed':
      return TimelineStepOptionsPortabilityClosed;
    case 'material_sent':
      return TimelineStepOptionsSC2DeviceSent;
    case 'repair_status':
      return TimelineStepOptionsSC2RepairStatus;
    default:
      return null;
  }
}
