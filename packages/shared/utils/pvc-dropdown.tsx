import * as React from "react";
import * as _ from 'lodash-es';
import ResourceDropdown from "../../components/odf-resources/ResourceDropdown";
import { pvcResource } from "../../models/resources";
import {
  PersistentVolumeClaimModel,
  PersistentVolumeClaimKind
} from "../selectors/k8s";

export const PVCDropdown: React.FC<PVCDropdownProps> = (props) => {
  const { onChange } = props;
  return (
    <ResourceDropdown
      className="nb-endpoints-form-entry__dropdown nb-endpoints-form-entry__dropdown--full-width"
      resource={pvcResource}
      resourceModel={PersistentVolumeClaimModel}
      onSelect={onChange}
      secondaryTextGenerator={null}
    />
  );
};

export type PVCDropdownProps = {
  namespace: string;
  selectedKey: string;
  onChange: (
    claimName: string,
    kindLabel?: string,
    pvc?: PersistentVolumeClaimKind
  ) => void;
  id?: string;
  desc?: string;
  dataTest?: string;
  dataFilter?: (pvc: PersistentVolumeClaimKind) => boolean;
};