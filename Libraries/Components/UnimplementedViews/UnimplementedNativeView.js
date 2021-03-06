/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const requireNativeComponent = require('requireNativeComponent');

import type {ViewProps} from 'ViewPropTypes';
import type {ViewStyleProp} from 'StyleSheet';
import type {NativeComponent} from 'ReactNative';

type NativeProps = $ReadOnly<{|
  ...ViewProps,
  name?: ?string,
  style?: ?ViewStyleProp,
|}>;

type UnimplementedViewNativeType = Class<NativeComponent<NativeProps>>;

module.exports = ((requireNativeComponent(
  'UnimplementedNativeView',
): any): UnimplementedViewNativeType);
