/*
 * Copyright (C) Pootle contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

import React from 'react';

import LiveEditor from './components/LiveEditor';


const staticpages = {

  init(opts) {
    React.render(
      <LiveEditor
        initialValue={opts.initialValue}
        markup={opts.markup}
        name={opts.htmlName}
      />,
      document.querySelector('.js-staticpage-editor')
    );
  },

};


export default staticpages;
