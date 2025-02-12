// Copyright 2021 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { Suspense } from "react";
import * as Conf from "../Conf";

export default class LazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
    };
  }

  // edit this function to modify the loading style
  renderFallback() {
    if (!Conf.ShowLoadingIndicator) {
      return null;
    }

    return <div>loading...</div>;
  }

  render() {
    return (
      <Suspense fallback={this.renderFallback()}>
        {this.props.children}
      </Suspense>
    );
  }
}
