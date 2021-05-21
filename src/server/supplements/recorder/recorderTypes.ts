/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Point } from '../../../common/types';

export type Mode = 'inspecting' | 'recording' | 'none';

export type EventData = {
  event: 'clear' | 'resume' | 'step' | 'pause' | 'setMode' | 'selectorUpdated' | 'callLogHovered';
  params: any;
};

export type UIState = {
  mode: Mode;
  actionPoint?: Point;
  actionSelector?: string;
  snapshotUrl?: string;
};

export type CallLogStatus = 'in-progress' | 'done' | 'error' | 'paused';

export type CallLog = {
  id: string;
  title: string;
  messages: string[];
  status: CallLogStatus;
  error?: string;
  reveal?: boolean;
  duration?: number;
  params: {
    url?: string,
    selector?: string,
  };
  snapshots: {
    before: boolean,
    action: boolean,
    after: boolean,
  }
};

export type SourceHighlight = {
  line: number;
  type: 'running' | 'paused' | 'error';
};

export type Source = {
  file: string;
  text: string;
  language: string;
  highlight: SourceHighlight[];
  revealLine?: number;
};
